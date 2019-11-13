function avg(data) {

  for (var i = 0; i < data.products.length; i++) {
    var avgPrice = data.products[i].price / data.size;
    var name = data.products[i].name;
    console.log(name + ': ' + avgPrice);    
  }

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
