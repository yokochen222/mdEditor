import qiniu from "qiniu"


	
const QINIU_ACCESS_KEY=window.localStorage.getItem("QINIU_ACCESS_KEY")
const QINIU_SECRET_KEY=window.localStorage.getItem("QINIU_SECRET_KEY")
const QINIU_DOMAIN=window.localStorage.getItem("QINIU_DOMAIN")
const QINIU_BUCKET_NAME=window.localStorage.getItem("QINIU_BUCKET_NAME")

qiniu.conf.ACCESS_KEY = QINIU_ACCESS_KEY
qiniu.conf.SECRET_KEY = QINIU_SECRET_KEY

const mac = new qiniu.auth.digest.Mac(QINIU_ACCESS_KEY, QINIU_SECRET_KEY)
const config = new qiniu.conf.Config()
const bucketManager = new qiniu.rs.BucketManager(mac, config)


const getFileList=(limit,marker,prefix="")=>{
    return new Promise((resolve,reject)=>{
        const options={
            limit:limit,
            prefix: prefix,
            marker:marker
        }
        bucketManager.listPrefix(QINIU_BUCKET_NAME,options,(err, respBody, respInfo)=>{
            if (err) {
                reject(err)
            }else{
                const nextMarker = respBody.marker;
                const items = respBody.items;
                resolve({
                    datas:items,
                    nextMarker
                })
            }
        })
    })
}


const dropFile=(key)=>{
    return new Promise((resolve,reject)=>{
        bucketManager.delete(QINIU_BUCKET_NAME, key,(err, respBody, respInfo)=>{
            if (err) {
                reject(err)
            } else {
                resolve({respBody,respInfo})
            }
        });
    })
}

export{
    getFileList,
    dropFile
}