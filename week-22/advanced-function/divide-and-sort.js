const divideAndSort = (number) => {

  //Validation
  if (typeof(number) !== 'number') {
    console.log('Input must be a number')
    return
  }

  //Divide and sort
  const stringNumber = number.toString();
  const numbers = stringNumber.split('0'); 
  let resultNumber = ''

  for (let i = 0; i <= numbers.length - 1; i++) {
    const sortedNumber = numbers[i].split('').sort().join('');
    resultNumber += sortedNumber
  }
    
  console.log(resultNumber)
}

//Call the function
divideAndSort(2980878096087544);

