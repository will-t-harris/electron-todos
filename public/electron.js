const electron = require("electron");
const app = electron.app;
const {
	default: installExtension,
	REACT_DEVELOPER_TOOLS,
} = require("electron-devtools-installer");
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const os = require("os");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ width: 900, height: 680 });
	mainWindow.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`
	);

	mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.whenReady().then(() => {
	installExtension(REACT_DEVELOPER_TOOLS)
		.then((name) => console.log(`Added extension: ${name}`))
		.catch((error) => console.warn(`An error occurred: ${error}`));
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
