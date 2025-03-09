var counter = 30;
var counterInterval;

function countDown() {
  counter--;
  // Out of time
  if (counter<=0) {
    // stop the timer
    clearInterval(counterInterval);
    counterInterval = undefined;
    // display the 'out of time' message
    E.showMessage("Out of Time","My Timer");
    // Now buzz
    Bangle.buzz();
    // again, every 30 seconds
    counterInterval = setInterval(() => Bangle.buzz(), 30000);
    // Ensure a button press resets the timer
    Bangle.setUI({
      mode : "custom",
      btn : ()=>{
        // remove old button press handler
        Bangle.setUI();
        // restart timer
        startTimer();
      }
    });
    return;
  }
