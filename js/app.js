//enemy constructor

function Enemy(x, y, speed) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 100, this.y * 75);
  }
  this.update = function(dt) {
      if (this.x <= 5) {
      this.x += this.speed * dt;
    }
      else {
      this.x = -1;
      }
  }
}

//player constructor

function Player() {
  this.sprite = 'images/char-boy.png';
  this.x = 2;
  this.y = 5;
  this.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 100, this.y * 75);
  }
  this.handleInput = function(e) {
    if (e === "up") {
      this.y -= 1;
      if (this.y <= 0) {
        this.y = 0;
        playerWin();
      }
    }
    else if (e === "right") {
      this.x += 1;
      if (this.x > 4) {
        this.x = 4; }
    }
    else if (e === "left") {
      this.x -= 1;
      if (this.x < 0) {
        this.x = 0; }
    }
    else { //down key press
      this.y +=1;
      if (this.y > 5) {
        this.y = 5; }
    }
  }
  this.update = function() {
    this.x = this.x;
    this.y = this.y;
  }
}

var checkCollisions = function() {
  for (enemy of allEnemies) {
    if (player.y === enemy.y) {
      if (player.x >= enemy.x - .5 && player.x <= enemy.x + .5) {
            player.x = 2;
            player.y=5;
          }
    }
  }
}

//positions enemies on fixed row but random columns to stagger, randomize number for speed

var enemy1 = new Enemy(Math.floor(Math.random() * Math.floor(6)), 1 , Math.random() * (3 - 1) + 1); //top most bug
var enemy2 = new Enemy(Math.floor(Math.random() * Math.floor(6)), 1 , Math.random() * (2 - 1) + 1);
var enemy3 = new Enemy(Math.floor(Math.random() * Math.floor(5)), 1 , Math.random() * (3 - 1) + 1);
var enemy4 = new Enemy(Math.floor(Math.random() * Math.floor(4)), 2 , Math.random() * (4 - 1) + 1);
var enemy5 = new Enemy(Math.floor(Math.random() * Math.floor(3)), 2 , Math.random() * (2 - 1) + 1);
var enemy6 = new Enemy(Math.floor(Math.random() * Math.floor(1)), 3 , Math.random() * (3 - 1) + 1);
var enemy7 = new Enemy(Math.floor(Math.random() * Math.floor(4)), 3 , Math.random() * (4 - 1) + 1);


var allEnemies=[enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7];
var player = new Player;


// listens for key presses and sends the keys to Player.handleInput() method.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
