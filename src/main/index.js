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

    //mac 环境需要添加下面的复制粘贴等代码
    // if (process.platform === 'darwin') { 
    //     template.unshift({
    //         label: 'Edit',
    //         submenu: [
    //         { role: 'undo' },
    //         { role: 'redo' },
    //         { type: 'separator' },
    //         { role: 'cut' },
    //         { role: 'copy' },
    //         { role: 'paste' },
    //         { role: 'pasteandmatchstyle' },
    //         { role: 'delete' },
    //         { role: 'selectall' }
    //         ]
    //     })
    // }

    if (process.platform === 'darwin') {
    const template = [
        {
            label: "Application",
            submenu: [
                { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
            ]
        }, 
        {
            label: "Edit",
            submenu: [
                { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
                { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
                { label: "cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
                { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
                
            ]
        }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
    } else {
    Menu.setApplicationMenu(null)
}


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
