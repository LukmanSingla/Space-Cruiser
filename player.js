class Player {
  constructor() {
    this.index = null;
    this.name = "";
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.hp = 200;
    this.bullet = {
      x: 0,
      y: 0,
      velocityX: 0,
      velocityY: 0,
    };
    this.visible = true;
    this.rank=1;
  }
  getFinishedPlayers() {
    database.ref("finishedPlayers").on("value", (data) => {
      finishedPlayers = data.val();
    });
  }
  updateFinishedPlayers() {
    database.ref("/").update({
      finishedPlayers: finishedPlayers + 1,
    });
  }
  newPlayer() {
    if (player.index != undefined) {
      database.ref("players/player " + this.index).update({
        name: this.name,
        x: this.x,
        y: this.y,
        rotation: this.rotation,
        hp: this.hp,
        visible: this.visible,
        rank:this.rank
      });
    }
  }
  updateBullets() {
    if (player.index != undefined) {
      database.ref("players/player " + this.index + "/bullet").update({
        x: this.bullet.x,
        y: this.bullet.y,
        velocityX: this.bullet.velocityX,
        velocityY: this.bullet.velocityY,
      });
    }
  }
  getCount() {
    database.ref("playercount").on("value", (data) => {
      playerCount = data.val();
    });
  }
  updateCount() {
    database.ref("/").update({
      playercount: playerCount + 1,
    });
  }
  resetPlayer() {
    database.ref("/").update({
      playercount: 0,
    });
  }
  static playerInfo() {
    database.ref("players").on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
