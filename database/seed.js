const faker = require('faker');
const db = require('./index.js');
const Product = require('./model.js');

let product1 = new Product ({
  'product_id': 1,
  'brand': 'Gucci',
  'product_name': 'Tiger Wool Blend Sweater',
  'price': 1500.00,
  'description': 'Wild style is refined for the contemporary gent on an intricate jacquard-knit wool-blend sweater featuring a bold, fierce tiger face in front.',
  'fit': 'True to size.',
  'size': ['Small', 'Medium', 'Large', 'X-Large','XX-Large'],
  'color': [{color: 'Black Gold', icon: 'https://s3.amazonaws.com/n3rdstorm-service/sweater+-+color.jpeg'}],
  'images': ['https://s3.amazonaws.com/n3rdstorm-service/sweater+-+front.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/sweater+-+back.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/sweater+-+full.jpeg'],
  'quantity': Math.floor(Math.random() * 11)
})

let product2 = new Product ({
  'product_id': 2,
  'brand': 'Spanx',
  'product_name': 'Faux Leather Leggings',
  'price': 98.00,
  'description': 'A slick finish adds extra edge to stretchy faux-leather leggings flattered by a subtle control top.',
  'size': ['Small', 'Medium', 'Large', 'X-Large'],
  'color': [{color: 'Black', icon: 'https://s3.amazonaws.com/n3rdstorm-service/pants+-+color.jpeg'}],
  'images': ['https://s3.amazonaws.com/n3rdstorm-service/pants+-+back.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+fabric.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+front.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+full+body.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+full.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+random.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+side+1.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+side.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+top.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants+-+video.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/pants-+back.jpeg'],
  'quantity': Math.floor(Math.random() * 11)
})

let product3 = new Product ({
  'product_id': 3,
  'brand': 'Christian Louboutin',
  'product_name': 'Gravitissima Thigh High Boot',
  'price': 1895.00,
  'description': 'Striking, graffiti-inspired patterning adds to the edgy, avant-garde aesthetic of a dramatic thigh-high boot finished with the unmistakable lipstick-red sole.',
  'fit': 'Runs small; order next size up.',
  'size': ['6US/36EU', '7US/37EU', '8.5US/38.5EU'],
  'color': [{color: 'Black/White', icon: 'https://s3.amazonaws.com/n3rdstorm-service/boots+-+color.jpeg'}],
  'images': ['https://s3.amazonaws.com/n3rdstorm-service/boots+-+back.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/boots+-+bottom.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/boots+-+front.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/boots+-+side+1.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/boots+-+side.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/boots+-+toe.jpeg'],
  'quantity': Math.floor(Math.random() * 11)
})

let product4 = new Product ({
  'product_id': 4,
  'brand': 'Lagos',
  'product_name': 'Diamond Lux Pavé Station Rope Bracelet',
  'price': 20000.00,
  'description': 'One hundred-fifteen sparkling pavé diamonds illuminate the sculptural Caviar metalwork of an elegant bracelet that makes a refined statement when worn solo.',
  'size': ['Medium'],
  'color': [{color: 'Silver/ Diamond', icon: 'https://s3.amazonaws.com/n3rdstorm-service/bracelet+-+color.jpeg'}],
  'images': ['https://s3.amazonaws.com/n3rdstorm-service/bracelet+-+back.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/bracelet+-+front.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/bracelet+-+side+1.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/bracelet+-+side.jpeg'],
  'quantity': Math.floor(Math.random() * 11)
})

let product5 = new Product ({
  'product_id': 5,
  'brand': 'Topshop',
  'product_name': 'Luxe Faux Fur Coat',
  'price': 180.00,
  'description': 'Faux-fur is the season\'s best trend—wear it well in this plush longline coat that\'s irresistibly chic.',
  'size': ['2 US(fits like 0)', '4 US (fits like 0-2)', '6 US(fits like 2-4)', '8 US(fits like 6-8)', '12 US(fits like 14)', '14 US(fits like 16-18)'],
  'color': [{color:'Rust', icon: 'https://s3.amazonaws.com/n3rdstorm-service/coat+-+color+0.jpeg'}, {color: 'Teal', icon: 'https://s3.amazonaws.com/n3rdstorm-service/coat+-+color+1.jpeg'}],
  'images': ['https://s3.amazonaws.com/n3rdstorm-service/red+coat+-+back.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/red+coat+-+front.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/red+coat+-+full.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/red+coat+-+top.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/red+coat+-+video.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/blue+coat+-+back.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/blue+coat+-+front.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/blue+coat+-+side.jpeg',
  'https://s3.amazonaws.com/n3rdstorm-service/blue+coat+-+top.jpeg'],
  'quantity': Math.floor(Math.random() * 11)
})

let collection = [product1, product2, product3, product4, product5];

let fakeProductGenerator = (productId) => {
  let fakeProduct = {
    'product_id': productId,
    'brand': faker.company.companyName(),
    'product_name': faker.commerce.productName(),
    'price': faker.commerce.price(),
    'description': faker.lorem.sentences(),
    'size': ['Small', 'Medium', 'Large', 'X-Large','XX-Large'],
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