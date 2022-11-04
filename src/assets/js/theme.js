
   function addChar(input, character) {
    if(input.value == null || input.value == "0")
      input.value = character
    else
      input.value += character
  }
  
  function cos(form) {
    form.display.value = Math.cos(form.display.value);
  }
  
  function sin(form) {
    form.display.value = Math.sin(form.display.value);
  }
  
  function tan(form) {
    form.display.value = Math.tan(form.display.value);
  }
  
  function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
  }
  
  function ln(form) {
    form.display.value = Math.log(form.display.value);
  }
  
  function exp(form) {
    form.display.value = Math.exp(form.display.value);
  }
  
  function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
  }
  var val = 0.0;
  function percent(input) {
    val = input.value;
    input.value = input.value + "%";
  }
  
  function changeSign(input) {
    if(input.value.substring(0, 1) == "-")
      input.value = input.value.substring(1, input.value.length)
    else
      input.value = "-" + input.value
  }
  
  function compute(form) {
 
      form.display.value = eval(form.display.value);
    }
  
  
  function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)
  }
  
  function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (ch < "0" || ch > "9") {
        if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
          && ch != "(" && ch!= ")" && ch != "%") {
          alert("invalid entry!")
          return false
          }
        }
      }
      return true
  }

  function hideButtonGoToWhenFocus(){
      var element = document.getElementsByTagName("input");
      var button = document.getElementById("buttonGoTo"); 
    for (var i = 0 ; i < element.length; i++) {
      element[i].addEventListener('focus' , () => {
        if(button){
          button.style.display = "none";
        }
      } , false ) ; 

      element[i].addEventListener('focusout' , () => {
        if(button){
           button.style.display = "block";
        }
      } , false ) ; 
    }
  }



  function setCoookie(){
    document.getElementById("cookies").style.display = "none";
    localStorage.setItem('cookie', true);
  }

  window.onload = function(){
    hideButtonGoToWhenFocus();
    let cookie = localStorage.getItem('cookie');
    if(!cookie){
      document.getElementById("cookies").style.display = "block";
    }
  }

  let url = window.location.href;

  ['click','popstate', 'onload'].forEach( evt =>
        window.addEventListener(evt, function () {
            requestAnimationFrame(()=>{
                if (url !== location.href) {
                  hideButtonGoToWhenFocus()
                }
                url = location.href;
            });
        }, true)
    );


  function hideDropDownMenu(){
    for(let i = 0; i < document.getElementsByClassName("dropdown-content").length; i++){
      document.getElementsByClassName("dropdown-content")[i].style.display = "none";
    }
    setTimeout(() => {
      for(let i = 0; i < document.getElementsByClassName("dropdown-content").length; i++){
        document.getElementsByClassName("dropdown-content")[i].style.removeProperty("display"); ;
      }
    }, 30);
  }
 
