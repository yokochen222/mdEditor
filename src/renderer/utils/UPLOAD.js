import {POSTUPLOAD} from "@/utils/HTTP"
import MAKEQNTOKEN from "./QNToken"
import {Spin} from "iview"
/* 
* @param {string} accessKey -七牛云AK
* @param {string} secretKey -七牛云SK
* @param {string} scope  -七牛云空间名称
* @param {string} domain -七牛云默认外链域名,(可选参数) 
* @param {string} QNurl -七牛上传接口地址
*/
const QiNiu={
	accessKey:"So7uoio8dGyxMh6iRlhVc6S2ux9ndlJ7D2YNxx10", 
	secretKey:"ZtedET6qDy2FDszpKD1yiXj9ESlWpSjlL00HAAR6", 
	scope:"mdeditor",
	domain:"http://img.yqchen.cn",//yqchen.cn
	QNurl:"http://up.qiniu.com"
}

function Uploader(files){
	return new Promise((resolve,reject)=>{
		let data = new FormData()
			data.append('token', MAKEQNTOKEN(QiNiu.accessKey,QiNiu.secretKey,QiNiu.scope))
			data.append('file', files)


			const fileInfo=GetFileInfo(files)

			Spin.show()
			POSTUPLOAD(QiNiu.QNurl,data,{
				headers:{'Content-Type':'multipart/form-data'},
				withCredentials:false
			}).then((res)=>{
				
				if(res){
					resolve({
						fileUrl:QiNiu.domain+"/"+res.hash,
						...res,
						fileInfo:{
							...fileInfo
						}
					})
				}else{
					console.log(res)
				}
				Spin.hide()
			}).catch((e)=>{
				reject(e)
			})
	})
}


function GetFileInfo(file){
	const fileInfo={
		fileName:file.name,
		fileSize:file.size,
		isImage:/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name),
		fileSuffix:"."+(file.name.split('.').pop().toLowerCase()),
	}
	return fileInfo
}


export default Uploader



