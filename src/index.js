//#region Welcome

/************************************************** 
    (*_*) Eye Care (*_*)

    V.1.0.0.1

    Simple program for time tracking: Node JavaScript

    Keep your eyes relaxed

***************************************************/

//#endregion

//#region Libraries and helpers

const dialog = require("dialog");

function logWrap() {

  const CONSOLE_COLOR = "\x1b[44m";
  let counter = 0;

  return function (...params) {
    counter++;
    // eslint-disable-next-line no-console
    console.log(CONSOLE_COLOR, `${ counter }:  ${ params }`);
  };

}

class TimeOptions {

  constructor() {
    this.second = 1e3;
    this.minute = this.second * 60;
    this.hour = this.minute * 60;
  }

  get currentDate() {
    return new Date().toLocaleDateString();
  }

  get currentTime() {
    return new Date().toLocaleTimeString();
  }

  getParsedMillisec(millisec) {

    let seconds = (millisec / 1000).toFixed(0);
    let minutes = Math.floor(seconds / 60);
    let hours = "";

    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      hours = (hours >= 10) ? hours : "0" + hours;
      minutes = minutes - (hours * 60);
      minutes = (minutes >= 10) ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;

    if (hours != "") {
      return hours + ":" + minutes + ":" + seconds;
    }

    return minutes + ":" + seconds;

  }

}

const TIME = new TimeOptions();

//#endregion

//#region Code

class EyeCare {

  constructor(times) {
    this.print = logWrap();
    this.howManyTimesToShow = times ? times : Infinity;
    this.interval = TIME.hour;
    this.dialogInfoWindow = {
      title: "Eye contact helper",
      message: "It`s time to RELAX!"
    };
  }

  get index() {
    return this.howManyTimesToShow--;
  }

  notify(notifyHandler) {
    dialog.info(this.dialogInfoWindow.message, this.dialogInfoWindow.title, notifyHandler);
  }

  start() {

    this.print(`Eye care track => start!\nDate is: ${ TIME.currentDate }\nTime is: ${ TIME.currentTime }`);

    const timeHandler = (exitCode) => {

      /* Here we will log our state, after user action */
      if (exitCode == 0)
        this.print(`You will be notified ${ this.index } times, in ${ TIME.getParsedMillisec(this.interval) } interval. Notification time is: ${ TIME.currentTime }`);
      /* End point, we will return last message and stop the app */
      if (this.howManyTimesToShow <= 0)
        return this.print("Eye care track => stop! All intervals are fired!");

      show();

    };

    const show = () => setTimeout(() => this.notify(timeHandler), this.interval);

    show();

  }

}

/* ENTRY POINT */
new EyeCare(5).start();

//#endregion
