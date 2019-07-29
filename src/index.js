
/**************************************************
 (*_*) Eye Care (*_*)

 V.1.0.0.1

 Simple program for time tracking: Node JavaScript

 Keep your eyes relaxed

 ***************************************************/

import timeSettings from "./timesettings.json";
import EyeCare from "./components/eyeCare";

const app = new EyeCare(timeSettings.times, timeSettings.interval);

app.start();
