//Challenge Task
const products = [
  {
      "product_name": "mie goreng",
      "product_description": "mie instan",
      "product_category": "indofood",
      "product_price": 3000,
      "stock": 88,
      "product_brand": "indofood",
  },
  {
      "product_name": "mie goreng cabe hijo",
      "product_description": "mie instan 2",
      "product_category": "food",
      "product_price": 3000,
      "stock": 0,
      "product_brand": "indofood",
  },
  {
      "product_name": "mie goreng rendang",
      "product_description": "mie instan 3",
      "product_category": "food",
      "product_price": 3000,
      "stock": 10,
      "product_brand": "indofood",
  },
  {
      "product_name": "Avocado delight",
      "product_description": "kopi dalam botol",
      "product_category": "drink",
      "product_price": 10000,
      "stock": 20,
      "product_brand": "Good Day",
  },
  {
      "product_name": "Tiramisu Bits",
      "product_description": "kopi dalam botol",
      "product_category": "drink",
      "product_price": 10000,
      "stock": 0,
      "product_brand": "Good Day",
  },
  {
      "product_name": "Mocainno",
      "product_description": "kopi dalam botol",
      "product_category": "drink",
      "product_price": 10000,
      "stock": 0,
      "product_brand": "Good Day",
  },
  {
      "product_name": "Indomilk",
      "product_description": "susu dalam botol",
      "product_category": "drink",
      "product_price": 20000,
      "stock": 1,
      "product_brand": "indofood",
  },
  {
      "product_name": "Pepsi",
      "product_description": "soda dalam botol",
      "product_category": "drink",
      "product_price": 20000,
      "stock": 1,
      "product_brand": "indofood",
  },
  {
      "product_name": "Citato bbq",
      "product_description": "kentang goreng",
      "product_category": "snack",
      "product_price": 12000,
      "stock": 5,
      "product_brand": "indofood",
  },
  {
      "product_name": "Qtela Original",
      "product_description": "Cemilan ubi goreng",
      "product_category": "snack",
      "product_price": 12000,
      "stock": 0,
      "product_brand": "indofood",
  },
  {
      "product_name": "Ayam bakar",
      "product_description": "Cemilan kentang goreng",
      "product_category": "snack",
      "product_price": 10000,
      "stock": 100,
      "product_brand": "Potabee",
  },
  {
      "product_name": "Salted Egg",
      "product_description": "Cemilan kentang goreng",
      "product_category": "snack",
      "product_price": 9000,
      "stock": 100,
      "product_brand": "Potabee",
  },
  {
      "product_name": "Wagyuu",
      "product_description": "Cemilan kentang gorengs",
      "product_category": "snack",
      "product_price": 10000,
      "stock": 100,
      "product_brand": "Potabee",
  },

]

/* QUESTIONS
1. Hitung dan cetak jumlah product indofood
2. Cetak product_name dengan brand indofood (tambahkan filed stock_status)
3. Cetak product_name, product_price dengan category drink (only available stock)
4. Cetak product_name dengan brand indofood dan category snack (tambahkan filed stock_status)
5. Cetak dan hitung product_name yang punya product_description sama
*/

//QUESTION 1
console.log('QUESTION 1')
let jumlahProdukIndofood = 0

for (let i = 0; i <= products.length-1; i++) {
  if (products[i].product_brand === 'indofood') {
      jumlahProdukIndofood ++
  }
}
console.log(`The number of Indofood products: ${jumlahProdukIndofood}`)



//QUESTION 2
console.log('\nQUESTION 2\nIndofood Products:')
let serialNumber2 = 0

for (let i = 0; i <= products.length-1; i++) {
  if (products[i].product_brand === 'indofood') {
    serialNumber2 ++
    console.log(`${serialNumber2}. ${products[i].product_name}`)
    products[i].stock_status = 'filled'
  }
}



//QUESTION 3
console.log('\nQUESTION 3\nAvailable beverage products:')
let serialNumber3 = 0

for (let i = 0; i <= products.length-1; i++) {
  if (products[i].product_category === 'drink' && products[i].stock > 0) {
    serialNumber3 ++
    console.log(`${serialNumber3}. ${products[i].product_name}: Rp.${products[i].product_price}`)
  }
}



//QUESTION 4
console.log('\nQUESTION 4\nIndofood snack products')
let serialNumber4 = 0

for (let i = 0; i <= products.length-1; i++) {
  if (products[i].product_brand === 'indofood' && products[i].product_category === 'snack') {
    serialNumber4 ++
    console.log(`${serialNumber4}. ${products[i].product_name}`)
    products[i].stock_status = 'filled'
  }
}



//QUESTION 5
console.log('\nQUESTION 5\nProducts with the same description!')
let sameDescription = ''
let sameProduct = ''
let serialNumber5 = 0

for (let i = 0; i <= products.length-1; i++) {
  let count = 0
  for (let j = 0; j <= products.length-1; j++) {
    if (products[i].product_description === products[j].product_description) {
      count ++
    }
  }
  if (count > 1) {
    if (sameDescription === products[i].product_description) {
      serialNumber5 ++
      sameProduct += `${serialNumber5}. ${products[i].product_name}\n`
    } else {
      serialNumber5 = 0
      serialNumber5 ++
      sameProduct += `${products[i].product_description}: ${count} products\n${serialNumber5}. ${products[i].product_name}\n`
      sameDescription = `${products[i].product_description}`
    }
  }
} 
console.log(sameProduct)