function checkOrder (available, ordered) {
    if (available < ordered){
        console.log ('Your order is too large, we don’t have enough good.');
        return;
       }

   if (ordered === 0) {
    console.log ('Your order is empty.');
    return;
   } 

   if (available => ordered){
    console.log ('Your order is accepted.');
    return;
   }
}
checkOrder (50, 60) // товарів в наявності менше ніж замовлено
checkOrder (50, 0) // ordered дорівнює нулю
checkOrder (60, 50) // товарів на складі вистачає

