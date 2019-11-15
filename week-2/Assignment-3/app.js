function avg(data) {

  var sum = 0;
  for (var i = 0; i < data.products.length; i++) {
    sum += data.products[i].price;
  }
  var avgPrice = sum / data.size;
  console.log(avgPrice);
  
}

avg({
  size: 3,
  products: [{
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
});

// show the average price of all products
