import { ipcRenderer, remote } from 'electron';
const { Menu, MenuItem, dialog } = remote;

function pickMDfile(){
    return new Promise((resolve,reject)=>{
        dialog.showOpenDialog({
            title:"选择Markdown文件",
            filters:[
                { name: 'Markdown', extensions: ['md']},
            ],
            properties:['openFile'] //['openFile','openDirectory']
        },(files)=>{
            if(files){
                resolve({
                    ...getFilePathInfo(files[0])
                })
            }
        })
    })
}


function getFilePathInfo(path) {
    const rBegin = '(?=^s*\\b)';
    const rEnd = '(?=\\b\\s+$|$)';
    const rEndSplit = rEnd.replace('=', '!');;
    const rPath = '((?:.split)*(?:\\w+\\.)*(?:.split)*(?:\\w+\\.)*[\\\\\\/])?'.replace(/split/g, rEndSplit);;
    const rName = '([^\\\\\\/]+?)';
    const rSuffix = '(?:\\.([^\\.\\s]+)\\b)?';
    const regContent = rBegin + rPath + rName + rSuffix + rEnd;
    const reg = new RegExp(regContent, '');
    const match = path.match(reg);
    console.log(path)
    return {
        path:path,
        name:"match[2]",
        fullName:"match[2]"+"."+"match[3]",
        suffix:"match[3]"
    }
}
//读取文本文件
function readText(file){
    const fs = require('fs');
    const res=fs.existsSync(file)
    if(res){
        return fs.readFileSync(file, 'utf8');
    }
    return ""
}
//保存文本内容到文件
function saveText(text, file){
    return new Promise((resolve,reject)=>{
        try{
            const fs = require('fs');
            fs.writeFileSync(file, text);
            resolve()
        }catch(e){
            reject(e)
        }
    })
}
//保存当前文档
function saveNewDoc(content){
    return new Promise((resolve,reject)=>{
        const file = remote.dialog.showSaveDialog(remote.getCurrentWindow(), {
            filters: [
                {name: "Text Files", extensions: ['md']}
            ]
        });
        if(file){
            if(content){
                saveText(content,file).then((res)=>{
                    resolve({
                        ...getFilePathInfo(file)
                    })
                }).catch((err)=>{
                    reject(err)
                })
            }else{
                resolve({
                    ...getFilePathInfo(file)
                })
            }
        }
    })
}


export {
    pickMDfile,
    readText,
    saveText,
    saveNewDoc,
    getFilePathInfo
}