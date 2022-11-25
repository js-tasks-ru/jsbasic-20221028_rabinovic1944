function hideSelf() {
  let theButton = document.querySelector('.hide-self-button');
  
  theButton.onclick = theEvent;
  
  function theEvent(){
    theButton.hidden = true;
    console.log('theButton.hidden inside:',theButton.hidden);
  }

  
};