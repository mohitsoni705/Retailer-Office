
// Select the database to use.
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
    {
      "_id": 1,
      "quantity": 10,
      "price": 45,
      "targetPrice": 120
    },
    {
      "_id": 2,
      "quantity": 8,
      "price": 60,
      "targetPrice": 150
    },
    {
      "_id": 3,
      "quantity": 6,
      "price": 35,
      "targetPrice": 100
    },
    {
      "_id": 4,
      "quantity": 12,
      "price": 50,
      "targetPrice": 130
    },
    {
      "_id": 5,
      "quantity": 15,
      "price": 70,
      "targetPrice": 160
    },
    {
      "_id": 6,
      "quantity": 5,
      "price": 20,
      "targetPrice": 80
    },
    {
      "_id": 7,
      "quantity": 20,
      "price": 40,
      "targetPrice": 110
    },
    {
      "_id": 8,
      "quantity": 4,
      "price": 90,
      "targetPrice": 180
    },
    {
      "_id": 9,
      "quantity": 7,
      "price": 25,
      "targetPrice": 75
    },
    {
      "_id": 10,
      "quantity": 9,
      "price": 55,
      "targetPrice": 140
    }
  ]
  );


// Print a message to the output window.
console.log(`Done Bhaiya`);
