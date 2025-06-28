async function completeOrder() {
  let coffee = await orderCoffee();
  console.log(coffee);

  let sandwich = await orderSandwich();
  console.log(sandwich);

  let donut = await orderDonut();
  console.log(donut);

  let bill = await getBill();
  console.log(bill);
}

completeOrder();