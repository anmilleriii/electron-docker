"use strict";

import { app, protocol, BrowserWindow, dialog } from "electron";
import { autoUpdater } from "electron-updater"
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";

const log = require('electron-log');
// import { log } from 'electron-log'
// import doesn't work but require does?

// log.transports.file.level ='info'
// log.info('asdfasdfasdf')
// const { dialog } = require('electron')



// const remote = require('electron').remote
// const log = remote.require("electron-log");

// import 'electron-is-dev'

// configure logging
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');
// https://github.com/megahertz/electron-log/issues/48
// const { ipcRenderer, remote } = window.require("electron");

require('@/message-control/main');

// electron-auto-updater
// Entrypoint for Electron App
// const updater = require('electron-simple-updater');
// // updater options are set in package.json
// updater.init();
let win;


// npm install --save electron-simple-updater
const isDevelopment = process.env.NODE_ENV !== "production";

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1920,
    height: 1080,

    // 960x600

    // 1024x600
    useContentSize: true,
    center: true,
    frame: false,
    resizable: false,

    // width: 1024,
    // height: 600,
    // width:
    // width: 1920,
    // height: 1200,
    // minHeight: 650,
    // minWidth: 1070,
    // u

    // kiosk: true,

    // zoomFactor: 0.45,
    // useContentSize: true,
    // width: 1920,
    // height: 1200,
    // minWidth: 1920,
    // minHeight: 1200,
    // resizable: false,
    // fullscreen: true,
    // enableLargerThanScreen: false,
    // zoomToPageWidth: true,
    // acceptFirstMouse: true
    // disallow quitting/switching applications
    // modal
    // useContentSize: true,












    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // preload: __dirname + '/preload.js',



      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) console.log('asdf')// win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
    autoUpdater.checkForUpdatesAndNotify()
    // Only in prod (built) - will skip if not bundled
  }
  // autoUpdater.checkForUpdates()











  //-------------------------------------------------------------------
  // Auto updates
  //-------------------------------------------------------------------
  const sendStatusToWindow = (text) => {
    // log.info(text);
    if (win) {
      win.webContents.send('message', text);
      console.log('win')
    } else {

      console.log('blah')
    }
  };

  function sendStatusToUI(text) {
    console.log(dialog.showMessageBox(win, { message: text, type: "info"}))
  }

  sendStatusToWindow('test text')

  autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow('Checking for update...');
    // console.log(dialog.showMessageBox(win, { message: "Version .... is ready", type: "info", buttons: ["Update Now", "Update later", ]}))
    sendStatusToUI('Checking for update...')
  });
  autoUpdater.on('update-available', info => {
    sendStatusToWindow('Update available.');
    sendStatusToUI('Update available.');
    
  });
  autoUpdater.on('update-not-available', info => {
    sendStatusToWindow('Update not available.');
    sendStatusToUI('Update not available.');
  });
  autoUpdater.on('error', err => {
    sendStatusToWindow(`Error in auto-updater: ${err.toString()}`);
    sendStatusToUI(`Error in auto-updater: ${err.toString()}`);
  });
  autoUpdater.on('download-progress', progressObj => {
    sendStatusToWindow(
      `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${progressObj.percent}% (${progressObj.transferred} + '/' + ${progressObj.total} + )`
    );
  });
  autoUpdater.on('update-downloaded', info => {
    sendStatusToWindow('Update downloaded; will install now');
    sendStatusToUI('Update downloaded; will install now');
  });

  autoUpdater.on('update-downloaded', info => {
    // Wait 5 seconds, then quit and install
    // In your application, you don't need to wait 500 ms.
    // You could call autoUpdater.quitAndInstall(); immediately
    autoUpdater.quitAndInstall();
  });




































}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();



  // console.log(dialog.showMessageBox(win, { message: "Version .... is ready", type: "info", buttons: ["Update Now", "Update later", ]}))
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}







