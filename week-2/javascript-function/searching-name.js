const names = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'
]

//Function for MATCHING NAME
function matchingName(characters) {
  let nameResult = []

  names.forEach(name => {
    const lowCaseName = name.toLowerCase()

    if (lowCaseName.includes(characters)) {
      nameResult.push(name)
    }
  })

  return nameResult
}

//Function for SEARCHING NAME
function searchingName(characters, total, callback) {
  const lowCaseCharacters = characters.toLowerCase()
  const nameResult = callback(lowCaseCharacters)
  const slicedName = nameResult.slice(0, total)
  console.log(slicedName)
}

//Call the function
searchingName("ol", 4, matchingName)
