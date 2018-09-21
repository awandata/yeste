
const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({ width: 800, height: 600 })

    // and load the index.html of the app.
    win.loadFile('mainWindow.html')
  }

  //app.on('ready', createWindow)
  app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // Load into window
    mainWindow.loadURL(url.format({
         pathname: path.join(__dirname,'mainWindow.html'),
         protocol: 'file:',
         slashes: true
       }));

  });
