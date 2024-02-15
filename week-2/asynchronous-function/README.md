<h1 align="center">
The Outputs 📤
</h1>

<h2>
1. Cek Hari Kerja
</h2>

```bash
# Call the function
cekHariKerja('senin')
  .then(cek => {
    console.log(`Hari ${cek} adalah hari kerja`)
}).catch(error => {
    console.log(error)
})
```
```bash
# The result
Hari senin adalah hari kerja
```

<h2>
2. Get Month
</h2>

```bash
# Call the function
getMonth(showMonth)
```
```
# The result
[
  'Januari',   'Februari',
  'Maret',     'April',
  'Mei',       'Juni',
  'Juli',      'Agustus',
  'September', 'Oktober',
  'November',  'Desember'
]
```

<h2>
3. Is Month Name
</h2>

```bash
# Call the function
isMonthName('january')
  .then(result => {
    console.log(`${result} is the name of the month`)
}).catch((error) => {
    console.log(error)
})
```
```
# The result
January is the name of the month
```

<h2>
4. Fetch Method
</h2>

```bash
# Call the function
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      console.log(user.name)
    })
  })
  .catch(error => console.log(error))
```
```
# The result
Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
Mrs. Dennis Schulist
Kurtis Weissnat
Nicholas Runolfsdottir V
Glenna Reichert
Clementina DuBuque
```
