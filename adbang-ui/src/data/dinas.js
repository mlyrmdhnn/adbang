fetch('https://adbang.bogorkab.go.id/data/api/programs?opd=DINAS PENDIDIKAN', {
  headers: {
    'X-Authorization': 'qlvq19ApGbIOMixw0AL8B7VU8fravPclZM0CWrS53B42Ih2RyUbohIvyO4IkmRWH', // Ganti dengan token yang benar
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))
