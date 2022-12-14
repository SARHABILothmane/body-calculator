import 'zone.js/node';

import { ngExpressEngine } from '@nguniversal/express-engine';
// import * as express from 'express' badalt hada bach i5dam json;
import express from 'express';
import { join } from 'path';

import { createWindow } from 'domino'
const indexHtml = join(process.cwd(), 'dist/calculatorFitness/browser/index2.html')
const win = createWindow(indexHtml)

  // Polyfills
  ; (global as any).window = win
  ; (global as any).document = win.document
  ; (global as any).navigator = win.navigator

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  // global['localStorage'] = localStorage;
  const server = express();
  const distFolder = join(process.cwd(), 'dist/calculatorFitness/browser');
  // let distFolder = join(process.cwd(), "browser");
  // if (!existsSync(distFolder)) {
  //   distFolder = join(process.cwd(), "dist/calculatorFitness/browser");
  // }
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

// function run(): void {
//   const port = process.env.PORT || 4000;

//   // Start up the Node server app.listen(3000, "127.0.0.1")
//   const server = app();
//   server.listen(4000, "127.0.0.1");
//   /* server.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   }); */
//   //require('https').createServer(app).listen(port);
// }

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, async () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
