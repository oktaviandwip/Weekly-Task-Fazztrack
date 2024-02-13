//Async function
const getMonth = (callback) => {
  setTimeout(() => {
    let error = false
    let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',    
                 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    if(!error) {
      callback(null, months)
    } else {
      callback(new Error ('Sorry Data Not Found'), [])
    }
  }, 4000)
}

//Callback function
const showMonth = (error, data) => {
  if (error) {
    console.log(error, data)
  } else {
    const months = data.map(item => item)
    console.log(months)
  }
}

getMonth(showMonth)