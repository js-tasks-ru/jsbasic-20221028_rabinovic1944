import createElement from '../../assets/lib/create-element.js';

export default class Carousel 
{

  //======================================================== HTML BODY FORMATION ================================================================

  constructor(slides) {
    this.slides = slides;
    let counter = slides.length-1;
      
    let stroke = `<div data-carousel-holder>
                                        <div class="carousel">
                                          <div id="right_arrow" class="carousel__arrow carousel__arrow_right">
                                            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                                          </div>
                                          <div id="left_arrow" class="carousel__arrow carousel__arrow_left">
                                            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                                            </div>
                                            <div class="carousel__inner">`;

                while(counter>-1){

                  stroke +=                   `<div class="carousel__slide" data-id="mainDish${counter}_${this.slides[counter].name}">
                                                <img src="/assets/images/carousel/${this.slides[counter].image}" class="carousel__img" alt="${this.slides[counter].name}">
                                                  <div class="carousel__caption">
                                                      <span class="carousel__price">€${this.slides[counter].price}.00</span>
                                                      <div class="carousel__title">${this.slides[counter].name}</div>
                                                      <button type="button" id = "plusButton${counter}" class="carousel__button">
                                                      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                                                      </button>
                                                  </div>
                                                </div>`    
              
                              counter--;
                                };

                          stroke += `</div></div></div>`;

                          let resultSlides = createElement(stroke);
                          resultSlides.elem = resultSlides;

//======================================================== CAROUSEL OPERATION ================================================================

                          let leftArrowButton = resultSlides.elem.querySelector('#left_arrow');
                          let rightArrowButton = resultSlides.elem.querySelector('#right_arrow');

                          leftArrowButton.onclick = leftClick;
                          rightArrowButton.onclick = rightClick;
                          let slideNumberDisplayed = 0;
                          
                                  checkButtons();  // dissappear arrows buttons in bound carousel states
                                            
                                                          function checkButtons()   {
                                                            
                                                            if (slideNumberDisplayed == 0) {rightArrowButton.style.display = 'none';}
                                                            else {rightArrowButton.style.display = '';}
                                                            if (slideNumberDisplayed == slides.length-1) {leftArrowButton.style.display = 'none';}
                                                            else {leftArrowButton.style.display = '';}
                                                                                    }

                                  function leftClick()  {
                                                                
                                  if (slideNumberDisplayed < slides.length) {slideNumberDisplayed++;}
                                  else {slideNumberDisplayed = slides.length;}
                                  resultSlides.elem.querySelector('.carousel__inner').style.transform = `translateX(`+`${-988 * slideNumberDisplayed}`+`px)`;
                                  checkButtons();
                                                        }

                                  function rightClick() {
                              
                                  resultSlides.elem.querySelector('.carousel__inner').style.transform = `translateX(`+`${-988 * (slideNumberDisplayed -1)}`+`px)`;
                                  if (slideNumberDisplayed > -1) {slideNumberDisplayed--; checkButtons();}
                                  else {slideNumberDisplayed = 0; }
                                  checkButtons();
                                                        }

//======================================================== PLUS BUTTONS OPERATION ================================================================


counter = slides.length-1;
let addButton = [];   // array for butons
let plusEvent = [];   // array for their events

while(counter>-1){    // this cycle tries create events and attach them to the buttons

                 
                  addButton[counter] = resultSlides.elem.querySelector(`#plusButton${counter}`);

                  plusEvent[counter] = new CustomEvent("product-add", {detail: this.slides[counter].id, bubbles: true });



                  addButton[counter].addEventListener('click', function () {   
                                                                                addButton[counter].dispatchEvent(plusEvent[counter]);
                                                                            } // it says ERROR - Cannot read properties of undefined (reading 'dispatchEvent')
                                                    );

                  counter--;
                }

//========================================================================================================================================================================

                        return resultSlides.elem;

                        } //end of constractor//
}  
             
                               
                                

                               

                                              
                          
                                                                    


                                                

               
                          
                          

                            

                       


                              