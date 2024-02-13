//TASK FROM PPT
//Task 1
const biodata = {
  name: 'Oktavian Dwi Putra',
  age: 27,
  hobbies: ['Playing Football', 'Playing Games', 'Reading Book'],
  IsMarried: false,
  schoolList: [{
    name: 'SMAN 14 Jakarta',
    yearIn: 2011,
    yearOut: 2014,
    major: 'IPA'
  }],
  skills: [
    {skillName: 'SEO', level: 'Intermediate'},
    {skillName: 'Digital Marketing', level: 'Intermediate'}
  ],
  interestInCoding: true
}

//Task 2
const mtk = 90
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

let average = 0
let grade = ''

if (typeof(mtk) === 'number' && typeof(bahasaIndonesia) === 'number' && typeof(bahasaInggris) === 'number' && typeof(ipa) === 'number') {
  average = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
  if (average > 90) {
    grade = 'A'
  } else if (average > 80) {
    grade = 'B'
  } else if (average > 70) {
    grade = 'C'
  } else if (average > 60) {
    grade = 'D'
  } else {
    grade = 'E'
  }

  console.log(`Task 2\nAverage: ${average}`)
  console.log(`Grade: ${grade}\n`)
} else {
  console.log('Task 2\nAll input must be filled with numbers!\n')
}

//Task 3
console.log('Task 3')
let printSegitiga = 6;

for (let i=printSegitiga; i>0; i--) {
  let result = ''
  for (let j=1; j<=i; j++) {
    result += `${j} `
  }
  console.log(result)
}

//Task 4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: 
  {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}

let newData = {...data}
newData.name = "Oktavian Dwi Putra"
newData.email = "oktavian.dwiputra@gmail.com"
newData.hobby = "Playing football"
console.log('\nTask 4\n', newData)

const {street, city} = newData.address
console.log(`\nStreet & City\n Street: ${street}\n City: ${city}`)