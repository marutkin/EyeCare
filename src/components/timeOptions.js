
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

module.exports = TimeOptions;
