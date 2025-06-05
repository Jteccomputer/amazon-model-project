
import { renderOrderSummary} from './checkout/orderSummary.js';

import {renderPaymentSummary} from './checkout/paymentSummary.js';
//import '../data/cart-class.js';
//import '../data/backend-part.js';

import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

Promise.all([
    /*new Promise((resolve) => {
    loadProductsFetch(() => {
        resolve('value1');
    });
  }),
  */

  loadProductsFetch(),
  
  new Promise((resolve) => {
        loadCart(() => {
        resolve('value2');
    });
  })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');

  })

}).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
            loadCart(() => {
                resolve();
            })
    }); 

 }).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
// callback function
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

