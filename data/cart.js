
export let cart;

loadFromStorage();

export function loadFromStorage() {
   cart = JSON.parse(localStorage.getItem('cart'));

   if(!cart) {
         cart = [{
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
function saveToStorage() {
   localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

         cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
              matchingItem = cartItem;
            }
         });

         if(matchingItem) {
            matchingItem.quantity = matchingItem.quantity + 1;
         } else {
            cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
          });

         }     
      saveToStorage(); 
};

export function removeFromCart(productId) {
   // step 1, create a new empty array
   const newCart = [];

   // Loop through the array, and push 
   // the ones that did not match into the new array
   cart.forEach((cartItem) => {
       if(cartItem.productId !== productId) {
         newCart.push(cartItem);
       }
   });

   // Pass the newCart into the cart
   cart = newCart;

   saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
   
      let matchingItem;

      cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
               matchingItem = cartItem;
        }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;

   saveToStorage();
} 