// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    
    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    // For macOS (re-create window in the app when the dock icon is clicked and no windows are open).
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// REMOVE THIS AFTER ADDING STUFF >>
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.