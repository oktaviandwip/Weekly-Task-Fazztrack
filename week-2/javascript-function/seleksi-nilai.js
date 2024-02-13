//Function for SELEKSI NILAI
function seleksiNilai(startNumber, endNumber, dataArray) {
  let result = []
  
  if (endNumber <= startNumber) {
    console.log('The end number must be greater than the start number!')
  } else {
    if (dataArray.length <= 5) {
      console.log('The number of data in dataArray must be more than 5')
    } else {
      dataArray.forEach((data) => {
        if(data >= startNumber && data <= endNumber) {
          result.push(data)
        }
      })
      
      if (result.length === 0) {
        console.log('Value not found')
      } else {
        result = result.sort((a, b) => a - b)
        console.log(result)
      }
    }
  }
}

//Call the function
const startNumber = 10
const endNumber = 90
const dataArray = [1,3,90,22,35,67,94,40]

seleksiNilai(startNumber, endNumber, dataArray)