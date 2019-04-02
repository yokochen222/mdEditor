import {POSTUPLOAD} from "@/utils/HTTP"
import MAKEQNTOKEN from "./QNToken"
/* 
* @param {string} accessKey -七牛云AK
* @param {string} secretKey -七牛云SK
* @param {string} scope  -七牛云空间名称
* @param {string} domain -七牛云默认外链域名,(可选参数) 
* @param {string} QNurl -七牛上传接口地址
*/




function Uploader(files){


		
	const QINIU_ACCESS_KEY=window.localStorage.getItem("QINIU_ACCESS_KEY")
	const QINIU_SECRET_KEY=window.localStorage.getItem("QINIU_SECRET_KEY")
	const QINIU_DOMAIN=window.localStorage.getItem("QINIU_DOMAIN")
	const QINIU_BUCKET_NAME=window.localStorage.getItem("QINIU_BUCKET_NAME")

	const QiNiu={
		accessKey:QINIU_ACCESS_KEY||"", 
		secretKey:QINIU_SECRET_KEY||"", 
		scope:QINIU_BUCKET_NAME,
		domain:QINIU_DOMAIN||"",//storage.yqchen.cn
		QNurl:"http://up.qiniu.com"
	}


	return new Promise((resolve,reject)=>{
		let data = new FormData()
			data.append('token', MAKEQNTOKEN(QiNiu.accessKey,QiNiu.secretKey,QiNiu.scope))
			data.append('file', files)


			const fileInfo=GetFileInfo(files)

			
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



