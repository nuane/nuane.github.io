(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(800, 400, Phaser.AUTO, 'game');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));


  game.state.start('boot');
};
},{"./states/boot":8,"./states/gameover":9,"./states/menu":10,"./states/play":11,"./states/preload":12}],2:[function(require,module,exports){
'use strict';

var DownHillPos = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'hill2', frame);
  this.game.physics.p2.enable(this);
  this.body.clearShapes();
  this.body.loadPolygon('hill_physics2', 'hill2');
  this.body.kinematic = true;
  this.body.velocity.x = -600;
};

DownHillPos.prototype = Object.create(Phaser.Sprite.prototype);
DownHillPos.prototype.constructor = DownHillPos;

DownHillPos.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = DownHillPos;

},{}],3:[function(require,module,exports){
'use strict';

var Enemy1 = function(game, x, y, collisionGroups, selfCollisionGroup, frame) {
  Phaser.Sprite.call(this, game, x, y, 'enemy1', frame);

  this.selfCG = selfCollisionGroup;
  this.collisions = collisionGroups;

  this.game.physics.p2.enable(this, true);
  this.scale.setTo(1);
  this.body.setRectangle(130,130);
  this.body.setCollisionGroup(this.selfCG);
  this.body.collides(this.collisions, this.hit, this);

  this.vX = -400;
  this.vY = -20;
  this.HEALTH = 30000;

  this.ACTION_LOOP = true;

  this.explosions = game.add.group();
  this.explosions.createMultiple(5, 'explosion');
  this.explosions.setAll('checkWorldBounds', true);
  this.explosions.setAll('outOfBoundsKill', true);
  this.explosions.forEach(function(i){
    i.animations.add('explode');
  });
};

Enemy1.prototype = Object.create(Phaser.Sprite.prototype);
Enemy1.prototype.constructor = Enemy1;

Enemy1.prototype.update = function() {

  if(this.position.x < -2000 || this.position.x > 2000) this.vX *= -1;
  (this.position.y > -700 || this.position.y < 700) ? this.vY *= -1 : this.vY;
  if(this.ACTION_LOOP){
    this.body.velocity.x = this.vX;
    //this.body.velocity.y = this.vY;
  }

  //this.checkWorldBounds();

};
Enemy1.prototype.checkWorldBounds = function() {
  if(this.position.x < this.game.world.x) {
    this.exists = false;
  }
};

Enemy1.prototype.hit = function(a, b){
  this.s = a.sprite;
  this.t = b.sprite;
  if(this.t.DASH_ATTACK && this.t.key === "ball"){
    console.log('dash attack');
    this.damage(100);
    this.vX = 1000;
    this.vY = 1000;
    this.game.time.events.add(600, function(){
      a.sprite.vX = 400;
      a.sprite.vY = 0;
      a.ACTION_LOOP = false;
      //a.clearShapes();
    });
  }else if(this.t.key === "yellow"){
    this.damage(30);
  }else {
    b.sprite.damage(10);
  }
};
Enemy1.prototype.damage = function(d){
  if(this.HEALTH < 0) this.kill();
  this.d = d;
  this.HEALTH -= this.d;
}
Enemy1.prototype.clickAction = function(){
  return this.position;
};



module.exports = Enemy1;

},{}],4:[function(require,module,exports){
'use strict';

var UpHillPos = require("./upHillPos");
var DownHillPos = require("./downHillPos");

var Hills = function(game, parent, playerCollisionGroup, selfCollisionGroup) {
  Phaser.Group.call(this, game, parent);
  this.pCG = playerCollisionGroup;
  this.sCG = selfCollisionGroup;
  this.hill1 = new UpHillPos(this.game,0,0);
  this.hill2 = new DownHillPos(this.game,0,0);


  //this.hill1.body.velocity.x = -300;
  this.hill1.body.setCollisionGroup(this.sCG);
  this.hill1.body.collides(this.pCG);
  //this.hill2.body.velocity.x = -300;
  this.hill2.body.setCollisionGroup(this.sCG);
  this.hill2.body.collides(this.pCG);

  this.add(this.hill1);
  this.add(this.hill2);



  //this.setAll('body.velocity.x', -200);

};

Hills.prototype = Object.create(Phaser.Group.prototype);
Hills.prototype.constructor = Hills;

Hills.prototype.update = function() {
  this.checkWorldBounds();
};
Hills.prototype.checkWorldBounds = function() {
  if(this.hill2.position.x < -2000) {
    this.exists = false;
  }

};
Hills.prototype.reset = function(x, y) {
  this.hill1.reset(3000,700);
  this.hill2.reset(5000,700);
  this.exists = true;
  this.x = x;
  this.y = y;
  this.setAll('body.velocity.x', -600);
};

module.exports = Hills;

},{"./downHillPos":2,"./upHillPos":7}],5:[function(require,module,exports){
'use strict';

var PaintGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);


  this.PAINT_DELAY = 50;
  this.INPUT_DELAY = 200;
  this.TOTAL_PAINT_AMOUNT = 100;
  this.BEAT_PAINT = false;

  for (var i = 0; i < this.TOTAL_PAINT_AMOUNT; i++) {
    this.paint = this.create(0, 0, 'yellow');
    //this.paint.scale.setTo(0.5);
    this.paint.kill();
  }
  this.paintPoint = {
    cx:0,
    cy:0,
    px:0,
    py:0,
    dx:0,
    dy:0,
    velocityArray:[],
    firstPoint: true
  };
};

PaintGroup.prototype = Object.create(Phaser.Group.prototype);
PaintGroup.prototype.constructor = PaintGroup;


PaintGroup.prototype.update = function() {

};

PaintGroup.prototype.painting = function(x, y, player, Collisions, paintCollisionGroup) {

  this.player = player;
  this.xCord = x;
  this.yCord = y;

  this.collisions = Collisions;
  this.selfCG = paintCollisionGroup;

  if (this.lastPaintingAt === undefined) this.lastPaintingAt = 0;
  if (this.game.time.now - this.lastPaintingAt > this.PAINT_DELAY) {
    this.lastPaintingAt = this.game.time.now;
    this.setRotation = 0;

    var painting = this.getFirstDead(false);

    if(painting.z >= this.TOTAL_PAINT_AMOUNT) return this.paintPoint.firstPoint = true;
    painting.revive();

    this.paintPoint.cx = this.xCord;
    this.paintPoint.cy = this.yCord;

    this.paintPoint.dx = this.paintPoint.cx - this.paintPoint.px;
    this.paintPoint.dy = this.paintPoint.cy - this.paintPoint.py;

    if(this.paintPoint.firstPoint){
      painting.width = 24;
      this.paintPoint.firstPoint = false;
    }else if(Math.abs(this.paintPoint.dx) < 15 && Math.abs(this.paintPoint.dy) < 15) {
      //this.game.input.activePointer.reset();
      painting.kill();
      return;
    }else if (Math.abs(this.paintPoint.dx) > 1005 || Math.abs(this.paintPoint.dy) > 1005){
      this.game.input.activePointer.reset();
      painting.kill();
      return;
    }else {
      (Math.abs(this.paintPoint.dx) > 20) ? painting.width = Math.abs(this.paintPoint.dx*2) : painting.width = 24;
      (Math.abs(this.paintPoint.dy) > 20) ? painting.width = Math.abs(this.paintPoint.dy*2) : painting.height = 24;
      this.setRotation = (Math.atan2(this.paintPoint.dy, this.paintPoint.dx)) * 180/Math.PI;
    }
    //save results in an array that returns velocity of the distance between the two PaintPoints
    this.paintPoint.velocityArray[painting.z - 1] = {x: this.paintPoint.dx, y: this.paintPoint.dy};


    this.game.world.bringToTop(painting);
    this.game.physics.p2.enable(painting);

    painting.body.setRectangle(painting.width, painting.height);
    painting.body.angle = this.setRotation;
    //painting.body.clearShapes();
    //painting.body.addPolygon( {} , [   [10, 158]  ,  [25, 158]  ,  [25, 186]  ,  [10, 186] , testing  ]);
    painting.body.kinematic = true;
    //painting.body.setMaterial(this.worldMaterial);
    this.game.time.events.add(40, function(){
      painting.body.setCollisionGroup(this.selfCG);
      painting.body.collides(this.collisions, this.flyAway, this);
    }, this);

    if (this.BEAT_PAINT){
      painting.tint = 0xff00ff;
      painting.scale.set(1.3);
      console.log('hello');
    } else {
      painting.tint = 0xffffff;
    }
    painting.reset(this.player.x, this.player.y);
    this.tween = this.game.add.tween(painting.body).to({x: this.xCord, y: this.yCord}, 100, Phaser.Easing.Linear.None, true);

    this.game.time.events.add(2000, function() {
      painting.kill();
    }, this);

    this.paintPoint.px = this.paintPoint.cx;
    this.paintPoint.py = this.paintPoint.cy;
  } else {
    //this.paintPoint.firstPoint = true;
  }

};

PaintGroup.prototype.flyAway = function(a, b) {
  var GonnaGoFar = this.paintPoint.velocityArray[a.sprite.z];
  if(GonnaGoFar === undefined) GonnaGoFar = {x: -10, y: 10};
  b.velocity.x += GonnaGoFar.x * 4;
  b.velocity.y += GonnaGoFar.y * 4;
};



module.exports = PaintGroup;

},{}],6:[function(require,module,exports){
'use strict';

var PaintGroup = require('./paintGroup');

var Player = function(game, x, y, collisionGroups, selfCollisionGroup, frame) {
  Phaser.Sprite.call(this, game, x, y, 'ball', frame);

  this.selfCG = selfCollisionGroup;
  this.collisions = collisionGroups;

  this.MAX_VELOCITY = 30;
  this.MAX_HEALTH = 1000;
  this.HEALTH = this.MAX_HEALTH;

  this.DASH_ATTACK = false;
  this.DASH_TIME = 400;

  this.bullets = game.add.group();
  this.bullets.createMultiple(5, 'yellow');


  this.MAX_BULLETS = this.bullets.length - 1;
  this.CURRENT_BULLETS = 0;
  this.BULLET_SPEED = 1200;
  this.BULLET_STREAM = false;

  this.scale.set(0.2);
  this.game.physics.p2.enable(this, true);
  this.body.setCircle(21);
  this.body.setCollisionGroup(this.selfCG);
  this.body.collides(this.collisions);

  this.game.camera.follow(this);
  this.game.camera.deadzone = new Phaser.Rectangle(300, 75, 150, 200);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  this.constrainVelocity(this, this.MAX_VELOCITY);
};

Player.prototype.dashAttack = function() {
  this.v = this.body.data.velocity;
  this.DASH_ATTACK = true;

  (this.v[0] > 0) ? this.v[0] = 100 : this.v[0] = -100;
  (this.v[1] < -10) ? this.v[1] = -35 : this.v[1];
  this.scale.set(0.4);
  this.game.time.events.add(this.DASH_TIME, function(){
      this.scale.set(0.2);
      this.MAX_VELOCITY = 35;
      this.DASH_ATTACK = false;
    }, this);
  this.MAX_VELOCITY = 170;
};
Player.prototype.shoot = function(target, projectileCollisionGroup, enemyCollisionGroup) {
  this.selfCG = projectileCollisionGroup;
  this.collisions = enemyCollisionGroup;
  this.angle = Math.atan2(target.y - this.position.y, target.x - this.position.x);

  var bullet = this.bullets.getFirstDead(false);
  bullet.revive();

  this.game.physics.p2.enable(bullet);
  bullet.body.setCircle(25);
  bullet.body.setCollisionGroup(this.selfCG);
  bullet.body.collides(this.collisions, function(a,b){
    console.log('my dearest friend, alone at last');
    a.sprite.damage(100);
  }, this);

  bullet.reset(this.position.x, this.position.y);

  bullet.body.velocity.x = Math.cos(this.angle) * this.BULLET_SPEED;
  bullet.body.velocity.y = Math.sin(this.angle) * this.BULLET_SPEED;

  this.game.time.events.add(700, function () {
      bullet.kill();
    }, this);
};
Player.prototype.damage = function(d) {
  this.d = d;
  this.HEALTH -= d;
  this.body.data.velocity[0] *= -1;
  this.body.data.velocity[1] *= -1;
};
Player.prototype.clickAction = function(){
  this.dashAttack();
  return this.position;
};
Player.prototype.constrainVelocity = function(sprite, maxVelocity) {
  var body = sprite.body
  var angle, currVelocitySqr, vx, vy;
  vx = body.data.velocity[0];
  vy = body.data.velocity[1];

  currVelocitySqr = vx * vx + vy * vy;

  if (currVelocitySqr > maxVelocity * maxVelocity) {
    angle = Math.atan2(vy, vx);

    vx = Math.cos(angle) * maxVelocity;
    vy = Math.sin(angle) * maxVelocity;

    body.data.velocity[0] = vx;
    body.data.velocity[1] = vy;
  }
}
module.exports = Player;

},{"./paintGroup":5}],7:[function(require,module,exports){
'use strict';

var UpHillPos = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'hill1', frame);
  this.game.physics.p2.enable(this);
  this.body.clearShapes();
  this.body.loadPolygon('hill_physics1', 'hill');
  this.body.kinematic = true;
  this.body.velocity.x = -600;
};

UpHillPos.prototype = Object.create(Phaser.Sprite.prototype);
UpHillPos.prototype.constructor = UpHillPos;

UpHillPos.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = UpHillPos;

},{}],8:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    console.log('hello all');
    this.load.image('preloader', '../assets/aroundus/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],9:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],10:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};

    this.game.scale.fullScreenTarget = this.parentElement;
    this.game.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.stage.disableVisibilityChange = true;

    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.startButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 40, 'startButton', this.startGame, this);
    this.startButton.anchor.setTo(0.5, 0.5);

    this.fullscreen = this.game.add.button(this.game.world.x, this.game.world.y, 'fullscreenButton', this.resize, this);
    this.fullscreen.anchor.setTo(0, 0);
    this.fullscreen.scale.set(5);

    this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

    this.sprite.angle = -80;
    this.game.add.tween(this.sprite).to({angle: 80}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

    //this.game.input.onDown.add(this.resize, this);


  },
  update: function() {

  },
  resize: function() {
    var scale = Math.min(window.innerWidth / this.game.width, window.innerHeight / this.game.height);
    aroundus.style.minHeight = window.innerHeight.toString() + "px";
    this.game.scale.setUserScale(scale, scale, 0, 0);
    this.game.scale.startFullScreen(false, false);
  },
  startGame: function() {
    this.game.state.start('play');
  }
};

module.exports = Menu;

},{}],11:[function(require,module,exports){
'use strict';
var Player = require("../prefabs/player");
var PaintGroup = require("../prefabs/paintGroup");
var Hills = require("../prefabs/hills");
var Enemy1 = require("../prefabs/enemy1");

function Play() {}
Play.prototype = {
  create: function() {

    this.game.time.advancedTiming = true;
    this.game.world.setBounds(-5000,-2000,10000,4000);

    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.setImpactEvents(true);
    this.game.physics.p2.gravity.y = 400;

    this.collisionGroups = [
      this.playerCG = this.game.physics.p2.createCollisionGroup(),
      this.paintCG = this.game.physics.p2.createCollisionGroup(),
      this.enemyCG = this.game.physics.p2.createCollisionGroup(),
      this.terrainCG = this.game.physics.p2.createCollisionGroup,
      this.collectibleCG = this.game.physics.p2.createCollisionGroup(),
      this.projectileCG = this.game.physics.p2.createCollisionGroup
    ];
    this.game.physics.p2.updateBoundsCollisionGroup();

    this.game.input.onDown.add(this.click, this)
    this.lastInputOverActors = this.game.time.now;
    this.result = "";
    this.clickableArray = [];
    this.actorCancel = false;

    this.paintGenerator = new PaintGroup(this.game, this.game.add.group());
    this.player = new Player(this.game, 37, 10, this.collisionGroups, this.playerCG);
    this.game.add.existing(this.player);
    this.clickableArray.push(this.player);

    this.spriteMaterial = this.game.physics.p2.createMaterial('spriteMaterial', this.player.body);
    this.worldMaterial = this.game.physics.p2.createMaterial('worldMaterial');
    this.terrainMaterial = this.game.physics.p2.createMaterial('terrainMaterial');


    //  4 trues = the 4 faces of the world in left, right, top, bottom order
    this.game.physics.p2.setWorldMaterial(this.worldMaterial, true, true, true, true);

    //  Here is the contact material. It's a combination of 2 materials, so whenever shapes with
    //  those 2 materials collide it uses the following settings.
    //  A single material can be used by as many different sprites as you like.
    var contactMaterial = this.game.physics.p2.createContactMaterial(this.spriteMaterial, this.worldMaterial);

    contactMaterial.friction = 1e10;
    // Friction to use in the contact of these two materials.
    contactMaterial.restitution = 0;
    // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
    contactMaterial.stiffness = 1000;
     // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.relaxation = 1;
     // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.frictionStiffness = 1e7;
     // Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.frictionRelaxation = 1e7;
     // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.surfaceVelocity = 0;
     // Will add surface velocity to this material. If bodyA rests on top if bodyB, and
     // the surface velocity is positive, bodyA will slide to the right.
     var contactMaterialWorld = this.game.physics.p2.createContactMaterial(this.spriteMaterial, this.terrainMaterial);

     contactMaterialWorld.friction = 10000;
     contactMaterialWorld.restitution = 0;
     contactMaterialWorld.stiffness = 1000;
     contactMaterialWorld.relaxation = 1;
     contactMaterialWorld.frictionStiffness = 1e7;
     contactMaterialWorld.frictionRelaxation = 1e7;
     contactMaterialWorld.surfaceVelocity = 0;

    this.game.stage.backgroundColor = '#DDDDDD';

    this.music = this.game.add.audio('track1',1,true);
    this.music.play('',0,1,true);
    this.effect = this.game.add.audio('effect');


    for(var j=1;j<7;j++){
      for(var i=1;i<2;i++){
        //console.log((j*400 - 500/i) +"  "+ (-400 + i*200));
        this.enemy2 = new Enemy1(this.game, j*400 - 500/i, -400 + i*200, this.collisionGroups, this.enemyCG);
        this.game.add.existing(this.enemy2);
        this.enemy2.body.setMaterial(this.spriteMaterial);
        this.clickableArray.push(this.enemy2);

      }
    }
    /*
    this.level = this.game.add.sprite(0,0, 'stage');
    this.game.physics.p2.enable(this.level, true);
    this.level.body.clearShapes();
    this.level.body.loadPolygon('physicsStageD', 'stageD');

    this.level.body.static = true;
    this.level.body.setCollisionGroup(this.collectibleCG);
    this.level.body.collides(this.playerCG, function(a,b){console.log('player collided with level body');}, this);
    this.level.body.setMaterial(this.terrainMaterial);

    this.hillGroup = this.game.add.group();
    this.HillGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 6.6, this.generateHills, this);
    this.HillGenerator.timer.start();

    //this.enemyGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.generateObstacles, this);
    //this.enemyGenerator.timer.start();
/*
    this.game.input.onDown.add(this.click, this)
    this.lastInputOverActors = this.game.time.now;
    this.result = "";
/*
    this.ground = new Ground(this.game, 0, 500, 335, 112, this.paintCG, this.playerCG);
    this.game.add.existing(this.ground, true);

    this.healthbar = this.game.add.sprite(0,0,'healthbar');
    this.healthbar.cropEnabled = true;
    this.healthbar.crop.width = (this.player.HEALTH / this.player.MAX_HEALTH) * this.healthbar.width;
/*
    for(var i =0; i<10;i++){
      //testing various ../assets here for initial impression

      this.coin = this.game.add.sprite(1000 + 100*i, 100 + 10*i, 'coin');
      this.game.physics.p2.enable(this.coin);


      this.coin.body.setRectangle(40,40);
      //this.coin.body.kinematic = true;
      this.coin.body.velocity.x = -500;
      this.coin.body.setCollisionGroup(this.collectibleCG);
      this.coin.body.collides(this.playerCG, this.collect, this);


      this.ship = this.game.add.sprite(6000 * i, 300 + i * 10, 'ship');
      this.game.physics.p2.enable(this.ship);
      this.ship.body.clearShapes();
      this.ship.body.loadPolygon('ship_physics', 'ship');
      this.ship.body.kinematic = true;
      this.ship.body.velocity.x = -300;
      this.ship.body.setCollisionGroup(this.paintCG);
      this.ship.body.collides(this.playerCG);
}

*/


  this.imagination = 0;
  this.game.time.events.loop(355, function(){
    this.paintGenerator.BEAT_PAINT = true;
    this.imagination++;
    //this.effect.play();
    this.game.time.events.add(75, function(){
      this.paintGenerator.BEAT_PAINT = false;
      this.player.tint = 0xff00ff;
    }, this);
  }, this);

  },

  update: function() {
    this.worldInputx = this.game.input.activePointer.position.x + this.game.camera.x;
    this.worldInputy = this.game.input.activePointer.position.y + this.game.camera.y;
    if (this.game.input.activePointer.isDown && this.actorCancel && this.game.time.now - this.lastInputOverActors > 200) {
      this.paintGenerator.painting(this.worldInputx, this.worldInputy, this.player.position, this.collisionGroups, this.paintCG);
    }
  },

  click: function() {
    this.worldPosition = new Phaser.Point(this.game.input.activePointer.position.x + this.game.camera.x, this.game.input.activePointer.position.y + this.game.camera.y);

    var bodies = this.game.physics.p2.hitTest(this.worldPosition, this.clickableArray);
  	if (bodies.length === 0) {
  		this.result = "You didn't click a Body";
      this.paintGenerator.paintPoint.firstPoint = true;
      this.actorCancel = true;
  	} else {
      this.lastInputOverActors = this.game.time.now;
      this.actorCancel = false;
  		this.result = "You clicked: ";
  		for (var i = 0; i < bodies.length; i++) {
  			this.result = this.result + bodies[i].parent.sprite.key;
        this.actionResults = bodies[i].parent.sprite.clickAction();
        if (bodies[i].parent.sprite.key === "enemy1") this.player.shoot(this.actionResults, this.collisionGroups, this.enemyCG);
        if (i < bodies.length - 1) this.result = this.result + ', ';
  		}
  	}
  },


  generateHills: function() {
    var hills = this.hillGroup.getFirstExists(false);
    if(!hills || hills.exists) {
      hills = new Hills(this.game, this.hillGroup, this.playerCG, this.paintCG);
    }
    hills.reset(0,0);
  },
  generateObstacles: function() {
    //function randomIntFromInterval(min,max) {
    //return Math.floor(Math.random()*(max-min+1)+min);

  },
  collect: function(a, b){
    console.log('collected');
    a.sprite.kill();
  },

  render: function() {
    var zone = this.game.camera.deadzone;
    //this.game.debug.context.fillStyle = 'rgba(255,0,0,0.6)';
    //this.game.debug.context.fillRect(zone.x, zone.y, zone.width, zone.height);

    //this.game.debug.cameraInfo(this.game.camera, 32, 32);
    //this.game.debug.spriteCoords(this.player, 32, 500);
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    this.game.debug.text(this.player.HEALTH + "  " + this.player.MAX_HEALTH, 2, 30, "#00ff00");
    this.game.debug.text(this.result, 300, 30);
    this.game.debug.inputInfo(32, 500);
    this.game.debug.pointer(this.input.activePointer);
  }

};

module.exports = Play;

},{"../prefabs/enemy1":3,"../prefabs/hills":4,"../prefabs/paintGroup":5,"../prefabs/player":6}],12:[function(require,module,exports){

'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('yeoman', '../assets/aroundus/yeoman-logo.png');
    this.load.image('yellow', '../assets/aroundus/yellow.png');
    this.load.image('enemy1', '../assets/aroundus/enemyBlack1.png');

    this.load.image('background', '../assets/aroundus/background.png');
    this.load.image('ground', '../assets/aroundus/ground.png');
    this.load.image('title', '../assets/aroundus/title.png');

    this.load.image('ball', '../assets/aroundus/ball2.png');
    this.load.image('wall', '../assets/aroundus/red_wall.png');
    this.load.image('hill1', '../assets/aroundus/hill.png');
    this.load.image('hill2', '../assets/aroundus/hill2.png');
    this.load.image('ship', '../assets/aroundus/ship.png');
    this.load.image('stage', '../assets/aroundus/stageD.png');

    this.load.image('healthbar', '../assets/aroundus/healthbar.png');
    this.load.image('coin', '../assets/aroundus/coin.png');
    this.load.image('startButton', '../assets/aroundus/start_button.png');
    this.load.image('fullscreenButton', '../assets/aroundus/fullscreen_button.png');

    this.load.spritesheet('pipe', '../assets/aroundus/pipes.png', 54,320,2);
    this.load.spritesheet('explosion', '../assets/aroundus/playerShip1_damage3.png', 100,75,3);
    this.load.physics('hill_physics1', '../assets/aroundus/hill_physics.json');
    this.load.physics('hill_physics2', '../assets/aroundus/hill_physics2.json');
    this.load.physics('ship_physics', '../assets/aroundus/ship_physics.json');
    this.load.physics('physicsStageD', '../assets/aroundus/physicsStageD.json');

    this.load.audio('track1', ['../assets/aroundus/game_test1.mp3', '../assets/aroundus/game_test1.ogg']);
    this.load.audio('effect', ['../assets/aroundus/game_test2.mp3', '../assets/aroundus/game_test2.ogg']);

  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('play');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])
