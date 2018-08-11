import axios from 'axios'
let  baseUrl = 'http://openapi.7lk.cn';
let url1 =  baseUrl + '/api/categoryQuery';
let url2 =  baseUrl + '/api/baseInterfaceQuery';
let url3 =  baseUrl + '/api/baseContentQuery';

let config = {
	  headers: {
	  	// 'contentType': 'application/x-www-form-urlencoded'
	  	'contentType': 'application/json;charset=UTF-8',
	  	'Access-Control-Allow-Origin': '*'
	  }
};

// 获取的 目录展示 的接口
export function getAPIList(resolve,reject) {
 	axios.post(url1,
 		{
 		'nav_code':'API'
		})
		.then(resolve)
		.catch(reject);	
}

//获取 接口列表展示接口
export function getListList(str,resolve,reject) {
	axios.post(url2,
 		{
 		'category_code':str
		})
		.then(resolve)
		.catch(reject);	
}

//获取详细信息接口
export function getParticularMessage(str,resolve,reject) {
	axios.post(url3,
 		{
 		'category_code':str
		})
		.then(resolve)
		.catch(reject);	
}
