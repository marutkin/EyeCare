
//#region Welcome

/************************************************** 
    (*_*) Eye Care (*_*)

    V.1.0.0.1

    Simple program for time tracking: Node JavaScript

    Keep your eyes relaxed

***************************************************/

//#endregion

const fs = require("fs");
const path = require("path");
const EyeCare = require("./components/eyeCare");

const TIME_SETTING_FILE_NAME = "timesettings";

const timeSettingsPath = path.resolve( __dirname, `${TIME_SETTING_FILE_NAME}.json`);
const timeSettingsBinary = fs.readFileSync( timeSettingsPath,"utf8");
const timeSettings = JSON.parse(timeSettingsBinary);

new EyeCare(timeSettings.times, timeSettings.interval).start();
