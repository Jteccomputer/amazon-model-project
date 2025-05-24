class Cart{
    cartItems;  // this is a public property
    #localStorageKey; // this is a private property
 
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

            if(!this.cartItems) {
                this.cartItems = [{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,

                deliveryOptionId: '1'  
            }, {
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryOptionId: '2'
            }];
        
        };
    }

    // function that save our cart to localStorage
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
    let matchingItem;

         this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId) {
              matchingItem = cartItem;
            }
         });

         if(matchingItem) {
            matchingItem.quantity = matchingItem.quantity + 1;
         } else {
            this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
          });

         }     

        this.saveToStorage(); 
    }

     removeFromCart(productId) {
        // step 1, create a new empty array
        const newCart = [];

        // Loop through the array, and push 
        // the ones that did not match into the new array
        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        // Pass the newCart into the cart
        this.cartItems = newCart;

        this.saveToStorage();
    }

    
    updateDeliveryOption(productId, deliveryOptionId) {
    
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    } 

}

// lets use the class to generate the 2 cart objects
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

/*
cart.localStorageKey = 'cart-oop';
businessCart.localStorageKey = 'business-cart';

cart.loadFromStorage();
businessCart.loadFromStorage();
*/

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);
