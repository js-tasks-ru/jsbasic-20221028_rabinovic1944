function toggleText() {

  let theButton = document.querySelector('.toggle-text-button');
  let theText = document.querySelector('#text');
  
  theButton.onclick = theEvent;

  function theEvent(){
   
    if(theText.hidden == true){theText.hidden = false;}
    else {
      theText.hidden = true;
    }
  }
}











