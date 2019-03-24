const {ipcRenderer}=require("electron")

/**
 * 打开markdown文件
 * */
export const openMdFile =()=>{
    ipcRenderer.send("open-markdown-file")
}

ipcRenderer.on("selected-markdown-file",(event,datas)=>{
    console.log(datas)
})