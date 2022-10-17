import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./layouts/site-layout/site-layout.module").then((mod) => mod.SiteLayoutModule), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash: false,
    enableTracing: false,
    initialNavigation: 'enabledBlocking',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
