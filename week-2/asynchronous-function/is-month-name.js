
//Async function 1
const isMonthName = (monthName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const months = ['January', 'February', 'March', 'April', 
                      'May', 'June', 'July', 'August', 'September', 
                      'October', 'November', 'December']
      const result = months.find(month => {
        return month.toLowerCase() === monthName.toLowerCase()
      })
      if(result) {
        resolve(result)
      } else {
        reject(new Error(`${monthName} is NOT the name of the month`))
      }
    }, 1000)
  })
}

//then catch
isMonthName('january')
  .then(result => {
    console.log(`${result} is the name of the month`)
}).catch((error) => {
    console.log(error)
})





//Async Function 2
const isJavaProvince = (provinceName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const provincesInJava = [
        'DKI Jakarta',
        'West Java',
        'Central Java',
        'East Java',
        'Banten'
      ]
      
      const result = provincesInJava.find((province) => {
        return province.toLocaleLowerCase() === provinceName.toLocaleLowerCase()
      })

      if(result) {
        resolve(result)
      } else {
        reject(new Error(`${provinceName} is NOT the name of a province in Java`))
      }
    }, 2000)
  })
}

//try catch
async function javaProvince() {
  try {
    const result = await isJavaProvince('makassar')
    console.log(`${result} is the name of a province in Java`);
  } catch (error) {
      console.log(error);
  }
}

javaProvince()