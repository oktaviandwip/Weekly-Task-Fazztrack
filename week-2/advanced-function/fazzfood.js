function fazzFood (price, voucher, distance, tax) {

  //Validation
  if (typeof(price) !== 'number') {
    console.log('Price must be a number')
    return
  }

  if (typeof(distance) !== 'number') {
    console.log('Distance must be a number')
    return
  }

  if (typeof(tax) !== 'boolean') {
    console.log('Tax must be a boolean (true or false)')
    return
  }

  //Calculate the Sub-Total
  let discount = 0

  if (voucher === 'FAZZFOOD50' && price >= 50000) {
    discount = price * 0.5
    discount = discount > 50000? 50000 : discount 
  } else if (voucher === 'DITRAKTIR60' && price >= 25000) {
    discount = price * 0.6
    discount = discount > 30000? 30000 : discount
  }
  
  const deliveryFee = distance <= 2? 5000 : 5000 + (distance - 2) * 3000
  const taxAmount = tax === true? 0.05 * price : 0
  const subTotal = price - discount + deliveryFee + taxAmount

  console.log(`Price: ${price}`)
  console.log(`Discount: ${discount}`)
  console.log(`Delivery Fee: ${deliveryFee}`)
  console.log(`Tax: ${taxAmount}`)
  console.log(`Sub-Total: ${subTotal}`)
}

//Call the function
fazzFood(120000, 'FAZZFOOD50', 10, true)