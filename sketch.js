var form,
  bgImg1,
  bgImg2,
  game,
  gameState=0,
  database,
  playerCount,
  player,
  s1,
  s2,
  s3,
  s4,
  sa1,
  sa2,
  sa3,
  sa4,
  allPlayers,
  a = 0,
  sa = [],
  x,
  y,
  angle,
  hp,
  h1,
  h2,
  h3,
  h4,
  ha,
  bullet,
  bulletImg,
  ba;
var finishedPlayers = 0;
var test = 0;
var silver,gold,bronze;

var test2 = 0;
var slider = document.getElementById("a");
function preload() {
  bgImg1 = loadImage("Images/bg.jpg");
  bgImg2 = loadImage("Images/bg2.jpg");
  sa1 = loadImage("Images/1.png");
  sa2 = loadImage("Images/2.png");
  sa3 = loadImage("Images/3.png");
  sa4 = loadImage("Images/4.png");
  bulletImg = loadImage("Images/bullet.png");
  silver=loadImage("Images/silver.png");
  gold=loadImage("Images/gold.png");
  bronze=loadImage("Images/bronze.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.updateState();
  game.getState();
  player = new Player();
  y = [50, 50, height - 180, height - 180];
  x = [100, width - 60, width - 60, 100];
  database.ref("/").update({
    finishedPlayers: 0,
  });
}
function draw() {
  if (gameState != null) {
    game.updateState();
  }
  player.getFinishedPlayers();
  game.wait();
  game.play();
  player.getCount();
  game.end();
}
