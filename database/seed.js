const faker = require('faker');
const db = require('./index.js');
const Product = require('./model.js');

let product1 = new Product ({
  '_id': 1,
  'product_id': 1,
  'brand': 'Gucci',
  'product_name': 'Tiger Wool Blend Sweater',
  'price': 1500.00,
  'description': 'Wild style is refined for the contemporary gent on an intricate jacquard-knit wool-blend sweater featuring a bold, fierce tiger face in front.',
  'size': ['Small', 'Medium', 'Large', 'X-Large','XX-Large'],
  'color': ['Black Gold'],
  'images': ['https://n.nordstrommedia.com/id/9d02dff4-567e-4b1f-b334-f4dc6c3eed2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/2ba85b44-1644-48fe-ba86-5744fa25bc06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/20ec64e1-e350-4d73-9294-ae19cd0ffb09.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65'],
  'quantity': Math.floor(Math.random() * 11)
})

let product2 = new Product ({
  '_id': 2,
  'product_id': 2,
  'brand': 'Spanx',
  'product_name': 'Faux Leather Leggings',
  'price': 98.00,
  'description': 'A slick finish adds extra edge to stretchy faux-leather leggings flattered by a subtle control top.',
  'size': ['Small', 'Medium', 'Large', 'X-Large'],
  'color': ['Black'],
  'images': ['https://n.nordstrommedia.com/id/fb07e902-092e-47eb-9e99-b97492f53b90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/bd27c916-7b8e-4147-810f-7cbc77189830.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/e8c86ca8-ebbe-4d16-b1c0-8376c0efb6e3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/91227006-43eb-472a-8216-41b01c2c2abb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/aa8641aa-8604-46d2-b5a4-054b688262fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65','https://n.nordstrommedia.com/id/226647e4-a150-490b-8758-eae18e463108.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/71537d2e-65a9-415c-bb4e-36186376b37a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/b9ba634f-4dbb-483c-a036-9917ac239d6e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/7dd078c2-d844-4f39-99f9-8b1f49fc1de0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/e036931a-a3d7-4342-b2cf-ea0ec415c0b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65'],
  'quantity': Math.floor(Math.random() * 11)
})

let product3 = new Product ({
  '_id': 3,
  'product_id': 3,
  'brand': 'Christian Louboutin',
  'product_name': 'Gravitissima Thigh High Boot',
  'price': 1895.00,
  'description': 'Striking, graffiti-inspired patterning adds to the edgy, avant-garde aesthetic of a dramatic thigh-high boot finished with the unmistakable lipstick-red sole.',
  'size': ['6US/36EU', '7US/37EU', '8.5US/38.5EU'],
  'color': ['Black/White'],
  'images': ['https://n.nordstrommedia.com/id/fde873eb-85ac-447f-b57a-52267a578e76.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/ee2d1663-e17a-444c-86ac-dd289f6d5917.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/7c5f52d9-5ff4-4a0c-be71-15c0a86c746b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/e608a712-34e2-45a5-a68f-4b523e99648d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/334b69cf-0ce1-409e-8ff8-61730ccd02bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/944acee4-8396-458d-b453-d572fd4970a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=1.5&quality=65'],
  'quantity': Math.floor(Math.random() * 11)
})

let product4 = new Product ({
  '_id': 4,
  'product_id': 4,
  'brand': 'Lagos',
  'product_name': 'Diamond Lux Pavé Station Rope Bracelet',
  'price': 20000.00,
  'description': 'One hundred-fifteen sparkling pavé diamonds illuminate the sculptural Caviar metalwork of an elegant bracelet that makes a refined statement when worn solo.',
  'size': ['Medium'],
  'color': ['Silver/ Diamond'],
  'images': ['https://n.nordstrommedia.com/id/1ef00efd-b9af-4703-b65c-b3aa9151035f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/152695d7-e54a-4155-a6f7-aef993b49e8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/78d91720-d8bd-46bf-91ac-16077b7c93c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/8d31f786-5d09-4780-a2ff-6f0cd70de538.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65'],
  'quantity': Math.floor(Math.random() * 11)
})

let product5 = new Product ({
  '_id': 5,
  'product_id': 5,
  'brand': 'Topshop',
  'product_name': 'Luxe Faux Fur Coat',
  'price': 180.00,
  'description': 'Faux-fur is the season\'s best trend—wear it well in this plush longline coat that\'s irresistibly chic.',
  'size': ['2 US(fits like 0)', '4 US (fits like 0-2)', '6 US(fits like 2-4)', '8 US(fits like 6-8)', '12 US(fits like 14)', '14 US(fits like 16-18)'],
  'color': ['Rust', 'Teal'],
  'images': ['https://n.nordstrommedia.com/id/fc1e7ed9-a9b4-41d1-90cf-68ccdc289cd3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/83b5f2b4-e71e-4ed8-8442-317314de8088.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/a1d2d9dc-073b-4b8a-81b3-f0e137688289.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/2a84f078-c9ba-4fdd-8804-d87851eeb9ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65'],
  'quantity': Math.floor(Math.random() * 11)
})

let collection = [product1, product2, product3, product4, product5];

let fakeProductGenerator = (productId) => {
  let fakeProduct = {
    '_id': productId,
    'product_id': productId,
    'brand': faker.company.companyName(),
    'product_name': faker.commerce.productName(),
    'price': faker.commerce.price(),
    'description': faker.lorem.sentences(),
    'size': ['xs','s', 'm', 'l', 'xl','xxl'],
    'color': [],
    'images': [],
    'quantity': Math.floor(Math.random() * 11)
  }

  for(let i = 0; i < Math.floor(Math.random() * 5); i++) {
    fakeProduct.color.push({color: faker.commerce.color(), icon: faker.image.fashion()})
  }
  
  for(let j = 0; j < Math.floor(Math.random() * 5); j++) {
    fakeProduct.images.push(faker.image.fashion());
  }   
  
  return new Product (fakeProduct);
}

let generateFakeProducts = () => {
  for (let i = 6; i < 120; i++) {
    collection.push(fakeProductGenerator(i));
  }
  Product.insertMany(collection, () => {

    db.close();
  });
}

generateFakeProducts();