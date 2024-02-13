//Async function
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if(cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}


//then catch
cekHariKerja('senin')
  .then(cek => {
    console.log(`Hari ${cek} adalah hari kerja`)
}).catch(error => {
    console.log(error)
})

/*
then/catch: The 'then' method is used to handle the resolved promise (successfully returned a value ) and the 'catch' method to handle any errors that may occur during the asynchronous operation.
*/


//try catch
async function hariKerja() {
  try {
    const cek = await cekHariKerja('sabtu')
    console.log(`Hari ${cek} adalah hari kerja`);
  } catch (error) {
      console.log(error);
  }
}

hariKerja()

/*
try/catch: The try block contains the code that may throw an exception(error), in this case using the await keyword to wait for the promise to resolve. The catch block is used to handle any errors that occur during the asynchronous operation.
*/