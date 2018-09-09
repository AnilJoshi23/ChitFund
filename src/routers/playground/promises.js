const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'jason',
			age: 21
		})
	}, 3000)
})

console.log('before')

promise
.then((data) => {
	console.log(data)

	return 'some data'
})
.then((str) => {
	console.log('does this run?', str)
})
.catch((error) => {
	console.log(error)
})

console.log('after')
