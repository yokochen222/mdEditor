import axios from 'axios'



axios.defaults.timeout = 8000
axios.defaults.baseURL =''


//http request 拦截器
axios.interceptors.request.use(
	config => {
		// config.data = JSON.stringify(config.data)
		// config.headers = {
		// 	'Content-Type':'application/x-www-form-urlencoded'
		// }
		// if(token){
		//   config.params = {'token':token}
		// }
		return config
	},
	error => {
		return Promise.reject(err)
	}
)


//http response 拦截器
axios.interceptors.response.use(
	response => {
		if(response.data.errCode ==2){
			
		}
		return response
	},
	error => {
		return Promise.reject(error)
	}
)


/**
 * 封装GET方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function GET(url,params={}){
	return new Promise((resolve,reject) => {
		axios.get(url,{
			params:params
		})
		.then(response => {
			resolve(response.data)
		})
		.catch(err => {
			reject(err)
		})
	})
}


/**
 * 封装POST请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function POST(url,data = {}){
	return new Promise((resolve,reject) => {
		axios.post(url,data)
			.then(response => {
				resolve(response.data)
			},err => {
				reject(err)
			})
	})
}

import {Spin,Notice} from "iview"

/**
 * 封装POSTUPLOAD请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function POSTUPLOAD(url,data = {},config = {}){
	Spin.show()
	return new Promise((resolve,reject) => {
		axios.post(url,data,config)
			.then(response => {
				Spin.hide()
				resolve(response.data)

			},err => {
				Spin.hide()
				Notice.error({
					title:"上传出错",
					desc:`请点击设置-存储设置，检查七牛云存储是否配置正确：<br/>${err}`
				})
				// reject(err)
			})
	})
}