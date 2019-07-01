
const dialog = require("dialog");
const TimeOptions = require("./timeOptions");

class EyeCare {

  constructor(times, interval) {

    this.time = new TimeOptions();

    this.interval = this.time[interval];
    this.howManyTimesToShow = times || Infinity;

    this.print = logWrap();
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

    this.print(`Eye care track => start!
    \nDate is: ${ this.time.currentDate }
    \nTime is: ${ this.time.currentTime }
    \nYour interval is: ${ this.time.getParsedMillisec(this.interval)} and times: ${this.howManyTimesToShow}`);

    const timeHandler = (exitCode) => {

      /* Here we will log our state, after user action */
      if (exitCode == 0)
        this.print(`You will be notified ${ this.index } times, in ${ this.time.getParsedMillisec(this.interval) } interval. Notification time is: ${ this.time.currentTime }`);
      /* End point, we will return last message and stop the app */
      if (this.howManyTimesToShow <= 0)
        return this.print("Eye care track => stop! All intervals are fired!");

      show();

    };

    const show = () => setTimeout(() => this.notify(timeHandler), this.interval);

    show();

  }

}

function logWrap (consoleColor = "\x1b[44m") {
  let counter = 0;
  return function (...params) {
    counter++;
    // eslint-disable-next-line no-console
    console.log(consoleColor, `${ counter }:  ${ params }`);
  };
}

module.exports = EyeCare;
