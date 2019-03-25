import { Menu,app, BrowserWindow,ipcMain,dialog} from 'electron'

const fs = require("fs")
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

const winURL = process.env.NODE_ENV === 'development'
? `http://localhost:9080`
: `file://${__dirname}/index.html`



let mainWindow
function createWindow () {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        width: 940,
        height: 630,
        useContentSize: true,
        frame:false,
        titleBarStyle: 'hidden',
        // autoHideMenuBar:true,
        resizable:true
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})


ipcMain.on("changeWindow",(event,type)=>{
    switch(type){
        case "max":{
            mainWindow.maximize()
            mainWindow.center()
            break
        }
        case "min":{
            mainWindow.unmaximize()
            mainWindow.center()
            break
        }
        case "hide":{
            mainWindow.minimize()
            mainWindow.center()
            break
        }
        case "close":{
            mainWindow.minimize()
            mainWindow.center()
            break
        }
    }
})


const iconv=require("iconv-lite")

// 打开文件/文件夹
/**
 * options:{
 *  callBack:function回调函数,
 *  title:"打开文件窗体标题",
 *  filters:[{name:'文件类型名称',extensions:'文件后缀'}],
 *  properties:[''],//penFile, openDirectory, multiSelections and createDirectory
 * }
 */
ipcMain.on("open-markdown-file",(event)=>{
    console.log(fs)
    dialog.showOpenDialog({
        title:"选择Markdown文件",
        filters:[
            { name: 'Markdown', extensions: ['md']},
        ],
        properties:['openFile'] //['openFile','openDirectory']
    },(files)=>{
        if(files){
            const markdown=fs.readFileSync(files[0])
            event.sender.send("selected-markdown-file",{path:files,content:iconv.decode(markdown,"utf8")})
        }
    })
})



/**
 * Auto Updater
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
