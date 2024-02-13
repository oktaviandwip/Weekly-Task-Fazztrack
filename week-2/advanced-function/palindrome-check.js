function palindromeCheck(word) {

  //Validation
  if (typeof(word) !== 'string') {
    console.log('Input must be a string')
    return
  }

  const index = word.length - 1
  if (index <= 0) {
    console.log('Not a palindrome')
    return
  }

  //Palindrome check
  let reverse = ''
  word = word.toLocaleLowerCase()

  for (let i = index; i >= 0; i--) {
    reverse += word[i]
  }

  const result = reverse === word? 'Palindrome' : 'Not a palindrome'
  console.log(result)
}

//Call the function
palindromeCheck('Katak')