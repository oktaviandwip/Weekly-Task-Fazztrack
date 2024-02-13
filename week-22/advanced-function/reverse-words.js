function reverseWords(sentence) {

  //Validation
  if (typeof(sentence) !== 'string') {
    console.log('Input must be a string')
    return
  }

  const words = sentence.split(' ')
  const index = words.length - 1

  //Reverse words
  let reverse = ''

  for (let i = index; i >= 0; i--) {
    reverse += `${words[i]} `
  }

  console.log(reverse)
}

//Call the function
reverseWords('Saya Belajar Javascript')
