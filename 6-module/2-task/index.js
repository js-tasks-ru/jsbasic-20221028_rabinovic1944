import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  
  constructor(product) {

  this.product = product;

  const itemCard = createElement(`

<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${product.price}.00</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button" >
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>

`);

itemCard.elem = itemCard;

let addButton = itemCard.elem.querySelector(".card__button");
let plusEvent = new CustomEvent("product-add", {detail: this.product.id, bubbles: true });

addButton.addEventListener('click', function () {
  addButton.dispatchEvent(plusEvent);
 });

return itemCard.elem;

  }

}

 