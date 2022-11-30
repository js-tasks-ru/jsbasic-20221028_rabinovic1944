function initCarousel() {


  let leftArrowButton = document.querySelector('.carousel__arrow_right');
  let rightArrowButton = document.querySelector('.carousel__arrow_left');
  let slideNumberDisplayed = 0;
  
  checkButtons();

  leftArrowButton.onclick = leftClick ;
  rightArrowButton.onclick = rightClick ;


  function checkButtons(){
    //console.log(slideNumberDisplayed);
    if (slideNumberDisplayed == 0) {rightArrowButton.style.display = 'none';}
    else {rightArrowButton.style.display = '';}
    if (slideNumberDisplayed == 3) {leftArrowButton.style.display = 'none';}
    else {leftArrowButton.style.display = '';}
  }

    function leftClick(){
     
      if (slideNumberDisplayed < 3) {slideNumberDisplayed++;}
      else {slideNumberDisplayed = 3;

      }
      switch(slideNumberDisplayed) {
        case 1:
          document.querySelector('.carousel__inner').style.transform = 'translateX(-500px)'; 
          checkButtons();
          break
      
        case 2:  
          document.querySelector('.carousel__inner').style.transform = 'translateX(-1000px)'; 
          checkButtons();
          break;

        case 3:  
          document.querySelector('.carousel__inner').style.transform = 'translateX(-1500px)';
          checkButtons();
          break;
      
        default:
          break;
      }

}

      function rightClick(){

        

        switch(slideNumberDisplayed) {
          
          case 1:

            document.querySelector('.carousel__inner').style.transform = 'translateX(0px)';

            if (slideNumberDisplayed > 0) {slideNumberDisplayed--;checkButtons();}
            else {slideNumberDisplayed = 0;
              }
              checkButtons();
            break
        
          case 2:  

          document.querySelector('.carousel__inner').style.transform = 'translateX(-500px)';

          if (slideNumberDisplayed > 0) {slideNumberDisplayed--;checkButtons();}
          else {slideNumberDisplayed = 0;
            checkButtons();           
            }

            break;

            case 3: 

            document.querySelector('.carousel__inner').style.transform = 'translateX(-1000px)'; 

            if (slideNumberDisplayed > 0) {slideNumberDisplayed--;checkButtons();}
            else {slideNumberDisplayed = 0;
              checkButtons();
              }

              break;
        
          default:


            break;
        }

}

} 
