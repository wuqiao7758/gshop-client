import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
	url = '/api' + url
	// console.log(data)
	return new Promise(function (resolve, reject) {
		let promise
		if (type === 'GET') {
			// let dataStr = ''
			// Object.key(data).forEach(key => {
			// 	dataStr += key + '=' + data[key] + '&'
			// })
			// if (dataStr !== '') {
			// 	dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
			// 	url = url + '?' + dataStr
			// }
			promise = axios.get(url)
		} else {
			promise = axios.post(url, data)
		}
		promise
			.then(function (response) {
				let res = resolve(response.data.data)
				// console.log(res)
			})
			.catch(function (error) {
				reject(error)
			})
	})
}
