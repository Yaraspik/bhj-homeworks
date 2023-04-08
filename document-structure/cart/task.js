class Cart {
    constructor(container) {
        this.container = container;
        this.cartProducts = this.container.querySelector('.cart__products');
        this.cartClear = this.container.querySelector('.cart__clear');

        this.setBehaviour();
    }

    setBehaviour() {
        this.cartClear.addEventListener('click', this.clear);
    }

    

    addCart (id, quantity, imgSrc) {
        const products = [...this.cartProducts.querySelectorAll('.cart__product')];

        let foundProduct = products.find((el) => {
            if(el.dataset.id == id) {
                return el;
            }
        })
        
        if(foundProduct){
            const cartProduct = foundProduct.querySelector('.cart__product-count');
            cartProduct.textContent = Number(cartProduct.textContent) + Number(quantity);
        } else {
            this.cartProducts.insertAdjacentHTML(
                'beforeend',
                `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${imgSrc}">
                <div class="cart__product-count">${quantity}</div>
                </div>`
            );
        }

        if(this.cartProducts.querySelectorAll('.cart__product').length > 0) {
            this.container.classList.remove('hide');
        }
    }

    clear() {
        cart.cartProducts.innerHTML = '';
        cart.container.classList.add('hide');
    }
}

class Products {
    constructor(container) {
        this.container = container;
        this.productControls = this.container.querySelectorAll('.product__quantity-controls');
        this.carts = this.container.querySelectorAll('.product__add');

        this.setBehaviour();
    }

    setBehaviour() {
        this.productControls.forEach(element => {
            element.addEventListener('click', this.changeProductQuantity)
        });
        this.carts.forEach(element => {
            element.addEventListener('click', this.addCart)
        });
    }

    changeProductQuantity(e) {
        const add = e.target.classList.contains('product__quantity-control_inc');
        const subtract = e.target.classList.contains('product__quantity-control_dec');
        let quantity = this.querySelector('.product__quantity-value');

        if(add == true) {
            quantity.textContent = Number(quantity.textContent) + 1;
        } else if (subtract == true) {
            quantity.textContent = Number(quantity.textContent) - 1;
        } 
        if(quantity.textContent <= 1) {
            quantity.textContent = 1;
        }
    }

    addCart() {
        const product = this.closest('.product');
        const id = product.dataset.id;
        const quantity = product.querySelector('.product__quantity-value').textContent;
        const imgSrc = product.querySelector('img').getAttribute('src');

        cart.addCart(id, quantity, imgSrc);
    }
}

const cart = new Cart(document.querySelector('.cart'));
const products = new Products(document.querySelector('.products'));