function init () {
// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = this.document.getElementById("takeoff");
let flightStatus = this.document.getElementById("flightStatus");
let shuttleBackground = this.document.getElementById("shuttleBackground");
let spaceShuttleHeight = this.document.getElementById("spaceShuttleHeight");
let landing = this.document.getElementById("landing");
let missionAbort = this.document.getElementById("missionAbort");
let up = this.document.getElementById("up");
let down = this.document.getElementById("down");
let left = this.document.getElementById("left");
let right = this.document.getElementById("right");


takeoff.addEventListener('click', () => {
  result = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (result) {
      flightStatus.innerHTML = 'Shuttle in flight';
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML = 10000;
    }
});

landing.addEventListener('click', () => {
  result = window.confirm('The shuttle is landing.  Landing gear engaged.');
    if (result) {
      flightStatus.innerHTML = 'The shuttle has landed.';
      shuttleBackground.style.backgroundColor = "";
      spaceShuttleHeight.innerHTML = 0;
    }
});

missionAbort.addEventListener('click', () => {
  result = window.confirm('Confirm that you want to abort the mission.');
  if (result) {
    flightStatus.innerHTML = 'Mission Aborted';
    shuttleBackground.style.backgroundColor = "";
    spaceShuttleHeight.innerHTML = 0;
  }
});

up.addEventListener('click', () => {
  let location = shuttleBackground.parseInt();
  let newLocation = (location - 10);
  shuttleBackground.innerHTML = newLocation;
});










};

window.addEventListener("load", init);