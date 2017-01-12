!function t(e,a,o){function i(n,r){if(!a[n]){if(!e[n]){var h="function"==typeof require&&require;if(!r&&h)return h(n,!0);if(s)return s(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var c=a[n]={exports:{}};e[n][0].call(c.exports,function(t){var a=e[n][1][t];return i(a?a:t)},c,c.exports,t,e,a,o)}return a[n].exports}for(var s="function"==typeof require&&require,n=0;n<o.length;n++)i(o[n]);return i}({1:[function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=t("./states/boot"),s=o(i),n=t("./states/game0.0.01"),r=o(n),h=t("./states/gameover"),l=o(h),c=t("./states/menu"),u=o(c),g=t("./states/preloader"),p=o(g),m=t("./states/main_jaminslice"),f=o(m),d=window.innerWidth,y=window.innerHeight,b=new Phaser.Game(d,y,Phaser.AUTO,"jaminslice-game");b.state.add("boot",new s.default),b.state.add("game1",new r.default),b.state.add("gameover",new l.default),b.state.add("menu",new u.default),b.state.add("preloader",new p.default),b.state.add("main_jaminslice",new f.default),b.state.start("boot")},{"./states/boot":2,"./states/game0.0.01":3,"./states/gameover":4,"./states/main_jaminslice":5,"./states/menu":6,"./states/preloader":7}],2:[function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),r=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return s(e,t),n(e,[{key:"preload",value:function(){this.load.image("preloader","../assets/jampi2/preloader.gif")}},{key:"create",value:function(){this.game.input.maxPointers=1,this.game.device.desktop?this.game.scale.pageAlignHorizontally=!0:(this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.minWidth=480,this.game.scale.minHeight=260,this.game.scale.maxWidth=1280,this.game.scale.maxHeight=580,this.game.scale.forceOrientation(!0),this.game.scale.pageAlignHorizontally=!0,this.game.scale.updateLayout(!0),console.log(this.game.scale)),this.initGlobalVariables(),this.game.state.start("preloader")}},{key:"initGlobalVariables",value:function(){this.game.global={}}}]),e}(Phaser.State);a.default=r},{}],3:[function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),r=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return s(e,t),n(e,[{key:"create",value:function(){this.game.physics.startSystem(Phaser.Physics.ARCADE),this.squares=this.game.add.group();for(var t=0,e=!1,a=1;a<5;a++){for(var o=void 0,i=void 0,s=void 0,n=30*a,r=Math.pow(2,a);r>0;r--)e&&(i=2*Math.PI/r,o=i/2,e=!1),s=a%2?this.squares.create(this.game.width/2+n*Math.cos(i*r-o),this.game.height/2+n*Math.sin(i*r-o),"test1"):this.squares.create(this.game.width/2+n*Math.cos(i*r-o),this.game.height/2+n*Math.sin(i*r-o),"test2"),s.scale.x=1,s.scale.y=1,s.inputEnabled=!0,this.game.physics.enable(s,Phaser.Physics.ARCADE),s.body.maxAngular=2e3,s.body.angularDrag=10,s.radius=n,s.row=a,s.column=r,s.accel=0,a%2?s.layer="one":s.layer="two",1===a&&(s.position=-1e3),t++,s.events.onInputDown.add(this.onClick,this);e=!0}this.setStop=!1,this.timer=this.game.time.create(!1),this.timer.start(),this.rotate=!1,this.rotateFor=Phaser.Timer.SECOND,this.acceleration=Math.PI/244,console.log(this.acceleration)}},{key:"update",value:function(){this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)&&!this.rotate?(this.squares.forEach(function(t){"one"===t.layer?t.accel=-this.acceleration:t.accel=this.acceleration},this),this.rotate=!0,this.game.time.events.add(this.rotateFor,function(){this.rotate=!1},this)):this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)&&!this.rotate?(this.squares.forEach(function(t){"one"===t.layer?t.accel=this.acceleration:t.accel=-this.acceleration,console.log("sdf",t.angle)},this),this.rotate=!0,this.game.time.events.add(this.rotateFor,function(){this.rotate=!1},this)):this.rotate||this.squares.forEach(function(t){t.accel=0},this),this.rotate&&this.rotations()}},{key:"render",value:function(){this.game.debug.text("")}},{key:"rotations",value:function(){this.squares.forEach(function(t){t.body.position.rotate(this.game.width/2,this.game.height/2,t.accel,!1)},this)}},{key:"onClick",value:function(t){console.log(t.row,t.column)}},{key:"endGame",value:function(){this.game.state.start("gameover")}}]),e}(Phaser.State);a.default=r},{}],4:[function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),r=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return s(e,t),n(e,[{key:"create",value:function(){var t=this.add.text(.5*this.game.width,.5*this.game.height,"Gameover",{font:"42px Arial",fill:"#ffffff",align:"center"});t.anchor.set(.5),this.saveVarsToLocalStorage(),this.input.onDown.add(this.restartGame,this)}},{key:"saveVarsToLocalStorage",value:function(){}},{key:"resetGlobalVariables",value:function(){}},{key:"update",value:function(){}},{key:"restartGame",value:function(){this.resetGlobalVariables(),this.game.state.start("menu")}}]),e}(Phaser.State);a.default=r},{}],5:[function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),r=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return s(e,t),n(e,[{key:"preload",value:function(){this.game.time.advancedTiming=!0}},{key:"create",value:function(){this.game.physics.startSystem(Phaser.Physics.ARCADE),this.physicsSegments=this.game.add.physicsGroup();var t={x:100,y:100,d:100};this.createPhysicsSegments(-t.x,t.y,t.d,0),this.createPhysicsSegments(-t.x,-t.y,t.d,1),this.createPhysicsSegments(t.x,-t.y,t.d,2),this.createPhysicsSegments(t.x,t.y,t.d,3),this.colorCategory=[],this.createCategoricalArray(this.colorCategory,28),this.shuffleCategoricalArray(this.colorCategory),this.absoluteSquares=this.game.add.physicsGroup(),this.tempSquares=this.game.add.physicsGroup(),this.swappingSquares=this.game.add.physicsGroup(),this.squares=[this.game.add.sprite(this.game.width/2,this.game.height/2,"p"),this.game.add.sprite(this.game.width/2,this.game.height/2,"layer2"),this.game.add.sprite(this.game.width/2,this.game.height/2,"red")],this.squares.forEach(function(t){this.game.physics.enable(t,Phaser.Physics.ARCADE),t.anchor.setTo(.5,.5),t.body.maxAngular=200,t.body.angularDrag=100},this),this.squares[0].inputEnabled=!0,this.squares[0].events.onInputDown.add(this.check,this),this.timer=0,this.createSquares(),this.tempSquaresRotating=!1,this.rotationalPattern=!1,this.squareReset=!1,this.segmentReference=0,this.rotationalPoints=[],this.rotationsArrayX=[],this.rotationsArrayY=[],this.segmentCategory=[],this.snap=this.game.add.audio("snap"),this.rotationalPath=[],this.pi=0,this.rotationalSpeed=0,this.locked=!0,this.accel=100,this.game.input.onUp.add(this.onInputUp,this),this.game.input.onDown.add(this.onInputDown,this),this.debugRotateFixed,this.debugRotateSway,this.debugTest=!1,this.swiping=!1,this.rotateCounter=!1,this.rotateClockwise=!1,this.dragLength=10}},{key:"createSquares",value:function(){for(var t=!1,e=0,a=1;a<5;a++){for(var o,i,s,n,r=40*a,h=Math.pow(2,a),l=1;l<=h;l++)t&&(n=2*Math.PI/h,s=n/2,t=!1),o=Math.round(r*Math.cos(n*l-s)),i=Math.round(r*Math.sin(n*l-s)),1!==a&&(a%2?this.createRotatingSquare(this.squares[1],o,i,a,l,r,this.colorCategory[e]):this.createRotatingSquare(this.squares[2],o,i,a,l,r,this.colorCategory[e]),this.createAbsoluteSegment(a,l,r,n,s,this.colorCategory[e],e,o,i),e++);t=!0}}},{key:"createPhysicsSegments",value:function(t,e,a,o){var i=this.physicsSegments.create(this.game.width/2,this.game.height/2,"segment");i.pivot.x=t,i.pivot.y=e,i.anchor.setTo(.5,.5),i.body.setCircle(a),i.id=o,i.inputEnabled=!0,i.events.onInputDown.add(this.initSquareSwap,this)}},{key:"createRotatingSquare",value:function(t,e,a,o,i,s,n){var r=t.addChild(this.game.make.sprite(e,a,n));r.anchor.setTo(.5),r.category=void 0!==n?n:null,r.row=o,r.column=i,r.radius=s,r.accel=0,o%2?r.layer="one":r.layer="two"}},{key:"createAbsoluteSegment",value:function(t,e,a,o,i,s,n,r,h,l){var c=this.game.world.width/2+a*Math.cos(o*e-i),u=this.game.world.height/2+a*Math.sin(o*e-i),g=2===t&&!l,p=this.absoluteSquares.create(c,u,"absoluteLayer");console.log(t,e,a,o,i,s,n,r,h,l),p.anchor.setTo(.5),p.category=s,p.radius=a,p.row=t,p.column=e,p.ogx=r,p.ogy=h,p.number=n,console.log(g),g&&this.createAbsoluteSegment(t,e,a,o,0,this.colorCategory[n],n,r,h,!0)}},{key:"createCategoricalArray",value:function(t,e){for(var a=0;a<e;a)t[a]="white",a++,t[a]="teal",a++}},{key:"shuffleCategoricalArray",value:function(t){for(var e,a,o=t.length;0!==o;)a=Math.floor(Math.random()*o),o-=1,e=t[o],t[o]=t[a],t[a]=e;return t}},{key:"onInputDown",value:function(t){console.log("in input down: ",t),this.swiping=!0,this.rotateClockwise=!1,this.rotateCounter=!1}},{key:"onInputUp",value:function(t){console.log("reseting swap square"),this.tempSquaresRotating&&(this.tempSquaresRotating=!1,this.squareReset=!0),this.swiping&&(this.swiping=!1)}},{key:"update",value:function(){this.timer++,this.tempSquaresRotating||this.rotationalPattern||!this.squareReset||(console.log("resetingSquarePositioning (update)"),this.resetSquarePositioning()),this.swiping?(console.log("swiping(update)"),this.checkSwipe(this.dragLength),this.locked=!1):!this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)&&!this.rotateClockwise||this.rotationalPattern?!this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)&&!this.rotateCounter||this.rotationalPattern?(!this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&&!this.rotateClockwise||this.rotationalPattern)&&(!this.game.input.keyboard.isDown(Phaser.Keyboard.UP)&&!this.rotateClockwise||this.rotationalPattern)?this.tempSquaresRotating||this.rotationalPattern?(console.log("squares swapping: this.tempSquaresRotating= ",this.tempSquaresRotating,"this.rotationalPattern=",this.rotationalPattern),this.swap()):this.updateRotate():this.initSquareSwap(0):(console.log("input right : counter (update)"),this.rotate(!0,this.accel),this.locked=!1):(console.log("input left : clockwise (update)"),this.rotate(!1,this.accel),this.locked=!1)}},{key:"updateRotate",value:function(){if(Math.abs(this.squares[1].body.angularVelocity)<80&&!this.locked){var t=this.squares[1].rotation,e=Math.abs(t),a=Math.PI/4,o=a-.001,i=(t/(a/2)%2).toFixed(2),s=(e%a).toFixed(5),n=Math.abs(500*Math.tan(4*t).toFixed(2));if(console.log(Math.abs(n)),Math.abs(n)<20&&(n=5),Math.abs(n)>80&&(n=80),console.log(n,this.squares[1].angle,s,i),this.debugRotateFixed=s,this.debugRotateSway=i,(s>o||s<.001)&&(s=0),i>=1||i>-1&&i<0&&s>.001&&!this.locked)this.rotationalVelocity(n);else if(i<1&&i>0||i<=-1&&s>.001&&!this.locked)this.rotationalVelocity(-n);else{var r=Math.round(Math.abs(this.squares[1].angle));135===r||45===r?this.rotatePhysicsSegments(Math.PI/4):this.rotatePhysicsSegments(0),console.log("segments are locked ;?"),this.snap.play(),this.rotationalVelocity(0),this.locked=!0,this.swiping=!1,this.rotateCounter=!1,this.rotateClockwise=!1}}else{var h=Math.abs(this.squares[1].angle.toFixed(0))%45;console.log(h,this.locked),(h<2||h>43)&&!this.locked?(this.snap.play(),this.rotationalVelocity(0)):this.rotationalDrag(0)}}},{key:"rotate",value:function(t,e){var a=t?-1:1;this.squares[1].body.angularAcceleration+=e*a,this.squares[2].body.angularAcceleration+=e*-a,this.squares[0].body.angularAcceleration+=e*a}},{key:"rotationalVelocity",value:function(t){var e=t;this.squares[1].body.angularVelocity=e,this.squares[2].body.angularVelocity=-e,this.squares[0].body.angularVelocity=e}},{key:"rotationalDrag",value:function(t){var e=t;this.squares[1].body.angularAcceleration=e,this.squares[2].body.angularAcceleration=-e,this.squares[0].body.angularAcceleration=e}},{key:"rotatePhysicsSegments",value:function(t){this.physicsSegments.forEach(function(e){e.rotation=t},this)}},{key:"checkSwipe",value:function(t){var e=(Phaser.Point.distance(this.game.input.activePointer.position,this.game.input.activePointer.positionDown),this.game.input.activePointer.position.x-this.game.input.activePointer.positionDown.x),a=this.game.input.activePointer.position.y-this.game.input.activePointer.positionDown.y,o=Math.abs(e),i=Math.abs(a);(o>this.dragLength||i>this.dragLength)&&(o>i?e>0?(console.log("move right"),this.rotateClockwise=!0):e<0&&(console.log("move left"),this.rotateCounter=!0):a>0?(console.log("move down"),this.rotateCounter=!0):a<0&&(console.log("move up"),this.rotateClockwise=!0),this.swiping=!1)}},{key:"initSquareSwap",value:function(t){var e=0;this.physicsSegments.forEach(function(a){if(console.log("on: ",a.id,this.locked,this.tempSquaresRotating,this.rotationalPattern),!this.locked||this.rotationalPattern||this.tempSquaresRotating)return void console.log("not locked or in rotationalPattern / tempSquaresRotating");this.swiping=!1,this.rotateClockwise=!1,this.rotateCounter=!1,this.tempSquares.id=a.id;var o=[],i=[],s=[];if(this.squares.forEach(function(n){n.children.forEach(function(n){this.tempSegment=this.tempSquares.create(n.world.x,n.world.y,n.category),this.tempSegment.anchor.setTo(.5),this.tempSegment.category=n.category,console.log(e,t.id),t.id===e&&(this.segmentReference=t.id),this.game.physics.arcade.overlap(a,this.tempSegment)&&e===t.id?(this.absoluteSquares.forEach(function(t){this.game.physics.arcade.overlap(t,this.tempSegment)&&(console.log("absolute: ",t.row,t.column,t.ogx,t.ogy,"children: ",n.row,n.column,n.category,n.x,n.y),this.tempSegment.row=t.row,this.tempSegment.column=t.column,this.tempSegment.ogx=n.x,this.tempSegment.ogy=n.y,t.ogx=n.x,t.ogy=n.y,t.id=a.id)},this),4===this.tempSegment.row?i[(this.tempSegment.column-1)%4]={x:this.tempSegment.x,y:this.tempSegment.y,category:n.category,col:this.tempSegment.column,row:this.tempSegment.row}:2===this.tempSegment.row?s.push({x:this.tempSegment.x,y:this.tempSegment.y,category:n.category,col:this.tempSegment.column,row:this.tempSegment.row}):this.rotationalPoints[(this.tempSegment.column-1)%2]={x:this.tempSegment.x,y:this.tempSegment.y,category:n.category,col:this.tempSegment.column,row:this.tempSegment.row},o.push(n),this.tempSegment.kill()):(this.tempSegment.kill(),this.tempSquares.remove(this.tempSegment))},this),o.forEach(function(t){n.removeChild(t)},this)},this),console.log(this.rotationalPoints,s,i),0===this.rotationalPoints.length||0===i||0===s)return console.log("rotationalPoints not defined, empty"),e++,void(this.rotationalPoints=[]);var n=Math.abs(Math.round(this.squares[1].angle));if(0!==e||135!==n&&45!==n)this.sortObjects(this.rotationalPoints,!1),this.sortObjects(i,!1);else{var r=i.splice(0,2);i.splice.apply(i,[i.length,0].concat(r)),this.sortObjects(this.rotationalPoints,!0)}this.rotationalPoints.splice.apply(this.rotationalPoints,[2,0].concat(s)),this.rotationalPoints.splice.apply(this.rotationalPoints,[1,0].concat(i)),this.rotationalPoints.push(this.rotationalPoints[0]),this.rotationalPoints.forEach(function(t){this.rotationsArrayX.push(Math.round(t.x)),this.rotationsArrayY.push(Math.round(t.y)),this.segmentCategory.push(t.category)},this),this.plotSquareSwap(e),e++,this.rotationalPoints=[],this.rotationsArrayX=[],this.rotationsArrayY=[],this.segmentCategory=[],this.tempSquares=this.game.add.physicsGroup(),console.log(e)},this),this.tempSquaresRotating=!0,console.log(this.rotationalPath)}},{key:"plotSquareSwap",value:function(t){console.log("plotting square swaps: ",t),this.rotationalPath[t]=[];var e=0;this.tempSquares.forEach(function(a){this.segment=this.swappingSquares.create(a.world.x,a.world.y,this.segmentCategory[0]),this.segment.anchor.setTo(.5),this.segment.category=this.segmentCategory[0],this.segment.column=a.column,this.segment.row=a.row,this.segment.ogx=a.ogx,this.segment.ogy=a.ogy,this.segment.quadrant=t,this.segment.location=e;var o=1/1400;this.rotationalPath[t][e]=[];for(var i=0;i<=1;i+=o){var s=this.math.linearInterpolation(this.rotationsArrayX,i),n=this.math.linearInterpolation(this.rotationsArrayY,i);this.rotationalPath[t][e].push({x:s,y:n})}this.rotationsArrayX.shift(),this.rotationsArrayY.shift(),this.segmentCategory.shift(),this.rotationsArrayX.push(this.rotationsArrayX[0]),this.rotationsArrayY.push(this.rotationsArrayY[0]),this.segmentCategory.push(this.segmentCategory[0]),e++},this)}},{key:"swap",value:function(){var t=140,e=200,a=10;this.tempSquaresRotating||this.pi%e<t?this.rotationalSpeed<a?this.rotationalSpeed++:this.rotationalSpeed=a:this.rotationalSpeed>1?this.rotationalSpeed--:this.rotationalSpeed=1,this.swappingSquares.forEach(function(t){t.x=this.rotationalPath[t.quadrant][t.location][this.pi].x,t.y=this.rotationalPath[t.quadrant][t.location][this.pi].y},this),this.pi+=this.rotationalSpeed,this.pi>=this.rotationalPath[this.segmentReference][0].length&&(this.pi=0),this.pi%e===0&&1===this.rotationalSpeed?this.rotationalPattern=!1:this.rotationalPattern=!0}},{key:"sortObjects",value:function(t,e){var a=e?-1:1;t.sort(function(t,e){return t.col<e.col?-a:t.col>e.col?a:0})}},{key:"resetSquarePositioning",value:function(){this.removeRotatingSquares(),this.rotationalPath=[],this.pi=0,this.squareReset=!1,this.debugTest=!0,console.log("resetting all temp square rotatatational stuff and stuff",this.rotationalPath),this.rotationalPoints=[],this.rotationsArrayX=[],this.rotationsArrayY=[],this.segmentCategory=[],this.tempSquares=this.game.add.physicsGroup()}},{key:"removeRotatingSquares",value:function(){this.absoluteSquares.forEach(function(t){this.swappingSquares.forEach(function(e){if(this.game.physics.arcade.overlap(t,e)){var a,o=t.ogx,i=t.ogy,s=Math.round(Phaser.Math.distance(0,0,o,i));console.log(s),a=s>110&&s<130,a?this.createRotatingSquare(this.squares[1],o,i,t.row,t.column,e.radius,e.category):this.createRotatingSquare(this.squares[2],o,i,t.row,t.column,e.radius,e.category),this.swappingSquares.remove(e)}},this)},this),this.swappingSquares.length>0&&this.removeRotatingSquares()}},{key:"check",value:function(){console.log("CHECKING IF SOLVED");var t=[],e=0;this.squares.forEach(function(e){e.children.forEach(function(e){this.tempSegment=this.tempSquares.create(e.world.x,e.world.y,"test1"),this.tempSegment.anchor.setTo(.5),this.tempSegment.color=e.category,this.physicsSegments.forEach(function(e){var a=e.id;void 0==t[a]&&(t[a]=[]),this.game.physics.arcade.overlap(e,this.tempSegment)&&t[a].push(this.tempSegment.color)},this)},this)},this),console.log(t),t.forEach(function(t){this.areEqual(t)?e++:e=0,console.log(e)},this),4===e?this.game.state.start("menu",!0,!1,this.timer):this.resetSquarePositioning()}},{key:"areEqual",value:function(t){for(var e=0;e<t.length;e++)if(t[e]!==t[0])return!1;return!0}}]),e}(Phaser.State);a.default=r},{}],6:[function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),r=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return s(e,t),n(e,[{key:"init",value:function(t){this.score=t}},{key:"create",value:function(){var t=this.add.text(.5*this.game.width,.5*this.game.height,this.score,{font:"42px Arial",fill:"#ffffff",align:"center"});t.anchor.set(.5),this.input.onDown.add(this.startGame,this)}},{key:"update",value:function(){}},{key:"startGame",value:function(){this.game.state.start("main_jaminslice")}}]),e}(Phaser.State);a.default=r},{}],7:[function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),r=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.asset=null,t.ready=!1,t}return s(e,t),n(e,[{key:"preload",value:function(){this.asset=this.add.sprite(.5*this.game.width-110,.5*this.game.height-10,"preloader"),this.load.setPreloadSprite(this.asset),this.load.onLoadComplete.addOnce(this.onLoadComplete,this),this.loadResources()}},{key:"update",value:function(){if(this.ready){var t="left and right arrows to move \ntouch or click the green circles\nto rotate the colored squares \nonce done touch or click the pink";this.game.state.start("menu",!0,!1,t)}}},{key:"loadResources",value:function(){this.game.load.image("test1","../assets/jampi2/test1.png"),this.game.load.image("test2","../assets/jampi2/test2.png"),this.game.load.image("p","../assets/jampi2/done_pink.png"),this.game.load.image("layer1","../assets/jampi2/outerLayer.png"),this.game.load.image("layer2","../assets/jampi2/middleLayer.png"),this.game.load.image("segment","../assets/jampi2/segment_VISUAL.png"),this.game.load.image("top","../assets/jampi2/topSegmenter.png"),this.game.load.image("bot","../assets/jampi2/bottomSegmenter.png"),this.game.load.image("green","../assets/jampi2/green.png"),this.game.load.image("teal","../assets/jampi2/teal.png"),this.game.load.image("yellow","../assets/jampi2/yellow.png"),this.game.load.image("red","../assets/jampi2/red.png"),this.game.load.image("white","../assets/jampi2/white.png"),this.game.load.image("black","../assets/jampi2/black.png"),this.game.load.image("absoluteLayerDebug","../assets/jampi2/absoluteLayerDebug.png"),this.game.load.image("absoluteLayer","../assets/jampi2/absoluteLayer.png"),this.game.load.audio("snap","../assets/jampi2/snap.mp3")}},{key:"onLoadComplete",value:function(){this.ready=!0}}]),e}(Phaser.State);a.default=r},{}]},{},[1]);