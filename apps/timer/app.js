// Bangle.js 2 - 30-second repeating timer

let counter = 0;

function draw() {
  g.clear();
  g.setFont("6x8", 2);
  g.setFontAlign(0, 0);
  g.drawString("Timer:", g.getWidth() / 2, g.getHeight() / 2 - 20);
  g.drawString(counter + "s", g.getWidth() / 2, g.getHeight() / 2 + 10);
}

function startTimer() {
  setInterval(() => {
    counter += 30;
    Bangle.buzz(); // Vibrate
    draw();
  }, 30000); // 30 seconds in milliseconds
}

Bangle.loadWidgets();
Bangle.drawWidgets();
draw();
startTimer();
