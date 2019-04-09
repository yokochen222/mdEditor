import { Menu,app, BrowserWindow,ipcMain,dialog} from 'electron'



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
        minWidth:640,
        height: 630,
        minHeight:630,
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

app.on("open-file",(e)=>{
    console.log(123456)
    console.log(123456)
    console.log(process.argv)
})

app.on("open-url",(e)=>{
    console.log("open url")
    e.preventDefault()
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
            mainWindow.close()
            break
        }
        case "reload":{
            mainWindow.reload()
            break
        }
    }
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
