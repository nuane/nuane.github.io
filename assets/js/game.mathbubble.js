!function e(t,i,s){function o(r,a){if(!i[r]){if(!t[r]){var h="function"==typeof require&&require;if(!a&&h)return h(r,!0);if(n)return n(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var l=i[r]={exports:{}};t[r][0].call(l.exports,function(e){var i=t[r][1][e];return o(i?i:e)},l,l.exports,e,t,i,s)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;r<s.length;r++)o(s[r]);return o}({1:[function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var o=e("./states/boot"),n=s(o),r=e("./states/game"),a=s(r),h=e("./states/menu"),u=s(h),l=e("./states/preloader"),c=s(l),b=e("./states/gameover"),f=s(b),p=p=window.innerHeight>900?900:window.innerHeight,d=2*p/3;console.log(p,d);var y=new Phaser.Game(d,p,Phaser.AUTO,"MathBubble-game");y.state.add("boot",new n.default),y.state.add("game",new a.default),y.state.add("menu",new u.default),y.state.add("preloader",new c.default),y.state.add("gameover",new f.default),y.state.start("boot")},{"./states/boot":5,"./states/game":6,"./states/gameover":7,"./states/menu":8,"./states/preloader":9}],2:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=function(e){function t(e,i,n,r,a,h,u,l){s(this,t);var c=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n,"bubble",r)),b=c.game,f=c.game.width,p=c.game.height,d=[2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,5,5,7,11,13,17],y=0,g=d.length-1,m=f/40+"px Arial",v={font:m,fill:"#ffffff",wordWrap:!0,wordWrapWidth:c.width};return c.number=d[b.rnd.integerInRange(y,g)],c.width=f/10,c.height=p/15,c.anchor.set(.5,.5),c.tint=c.colorType(b.rnd.integerInRange(0,100)),6750054===c.tint&&(c.number=23),c.label=b.add.text(0,0,c.number,v),c.label.anchor.set(.5,.5),c.beingDragged=!1,c.changePhysics=!1,c.cg=a,c.cg2=h,c.bumpCG=u,c.sideCG=l,b.physics.p2.enable(c,!1),c.body.setCircle(c.width/2),c.setPhysics(c.cg,[c.cg,c.bumpCG,c.sideCG]),c}return n(t,e),r(t,[{key:"update",value:function(){this.label.x=Math.floor(this.x),this.label.y=Math.floor(this.y),this.beingDragged&&this.changePhysics?this.setPhysics(this.cg2,[this.cg,this.cg2,this.bumpCG]):!this.beingDragged&&this.changePhysics&&this.setPhysics(this.cg,[this.cg,this.bumpCG,this.sideCG]),this.constrainVelocity(),(this.x>this.game.width||this.x<0||this.y>this.game.height||this.y<0)&&(console.log("outa bounds",this.x>this.game.width,this.x<0,this.y>this.game.height,this.y<0,this.x,this.y),this.body.x=this.game.width/2,this.body.y=0,this.body.velocity.x=0,this.body.velocity.y=0)}},{key:"constrainVelocity",value:function(){var e,t,i,s,o=100;i=this.body.data.velocity[0],s=this.body.data.velocity[1],t=i*i+s*s,t>o*o&&(e=Math.atan2(s,i),i=Math.cos(e)*o,s=Math.sin(e)*o,this.body.data.velocity[0]=i,this.body.data.velocity[1]=s)}},{key:"resetPosition",value:function(){this.position.y=g.height}},{key:"setPhysics",value:function(e,t){this.body.setCollisionGroup(e),this.body.collides(t),this.changePhysics=!1}},{key:"colorType",value:function(e){return e>=0&&e<49?3358719:e>=49&&e<98?16737894:6750054}}]),t}(Phaser.Sprite);i.default=a},{}],3:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=function(e){function t(e,i,n,r,a,h,u){s(this,t);var l=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n,"side",r));return l.anchor.set(.5,.5),l.height=a,l.game.physics.p2.enable(l,!0),l.body.angle=h,l.body.setCollisionGroup(u),l.body.kinematic=!0,l}return n(t,e),r(t,[{key:"update",value:function(){}}]),t}(Phaser.Sprite);i.default=a},{}],4:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=function(e){function t(e,i,n,r,a,h,u,l){s(this,t);var c=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n,"side",r));return c.anchor.set(.5,.5),c.width=a,c.height=h,c.game.physics.p2.enable(c,!0),c.body.angle=u,c.body.setCollisionGroup(l),c.body.kinematic=!0,c}return n(t,e),r(t,[{key:"update",value:function(){}}]),t}(Phaser.Sprite);i.default=a},{}],5:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return n(t,e),r(t,[{key:"preload",value:function(){this.load.image("preloader","../assets/mathbubble/preloader.gif")}},{key:"create",value:function(){this.game.input.maxPointers=1,this.game.device.desktop?this.game.scale.pageAlignHorizontally=!0:(this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.minWidth=240,this.game.scale.minHeight=520,this.game.scale.maxWidth=320,this.game.scale.maxHeight=960,this.game.scale.forceOrientation(!0),this.game.scale.pageAlignHorizontally=!0,this.game.scale.updateLayout(!0)),this.initGlobalVariables(),console.log(this.game.width,this.game.height),this.game.state.start("preloader")}},{key:"initGlobalVariables",value:function(){this.game.global={}}}]),t}(Phaser.State);i.default=a},{}],6:[function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),h=e("../prefabs/bubble"),u=s(h),l=e("../prefabs/side"),c=s(l),b=e("../prefabs/smile"),f=s(b),p=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),a(t,[{key:"create",value:function(){this.game.physics.startSystem(Phaser.Physics.P2JS),this.game.physics.p2.setImpactEvents(!0),this.game.physics.p2.restitution=.9,this.game.physics.p2.gravity.y=1e3,this.bubbleCG=this.game.physics.p2.createCollisionGroup(),this.bTouchCG=this.game.physics.p2.createCollisionGroup(),this.bumperCG=this.game.physics.p2.createCollisionGroup(),this.sideCG=this.game.physics.p2.createCollisionGroup(),this.game.physics.p2.updateBoundsCollisionGroup(),this.leftScore=0,this.rightScore=0,this.bubbles=this.game.add.group(),this.boundaries=this.game.add.group(),this.leftEye=this.game.add.sprite(2*this.game.width/7,this.game.height/6,"left"),this.leftEye.anchor.setTo(0,0),this.leftEye.width=this.game.width/3,this.leftEye.height=this.game.height/6,this.leftEye.tint=10066431,this.game.physics.p2.enable(this.leftEye,!1),this.leftEye.body.setCollisionGroup(this.bumperCG),this.leftEye.body.collides([this.bubbleCG,this.bTouchCG,this.bumperCG]),this.leftEye.body.kinematic=!0,this.leftEye.body.velocity.x=10,this.rightEye=this.game.add.sprite(this.game.width-2*this.game.width/7,this.game.height/6,"right"),this.rightEye.anchor.setTo(1,0),this.rightEye.width=this.game.width/3,this.rightEye.height=this.game.height/6,this.rightEye.tint=16751001,this.game.physics.p2.enable(this.rightEye,!1),this.rightEye.body.setCollisionGroup(this.bumperCG),this.rightEye.body.collides([this.bubbleCG,this.bTouchCG,this.bumperCG]),this.rightEye.body.kinematic=!0,this.rightEye.body.velocity.x=-10,this.mid=this.game.add.sprite(this.game.width/2,this.game.height-this.game.height/2,"r"),this.mid.width=this.game.height/6,this.mid.height=this.game.height/6,this.game.physics.p2.enable(this.mid,!0),this.mid.body.setCircle(this.mid.width/2),this.mid.body.setCollisionGroup(this.sideCG),this.mid.body.collides([this.bubbleCG,this.sideCG]),this.mid.body.kinematic=!0,this.mid.body.angularVelocity=3;var e=this.game.width,t=this.game.height;this.bott=new c.default(this.game,e/2,t-t/20,0,e-e/3,90,this.sideCG),this.bott.body.collides([this.bubbleCG,this.sideCG]),this.boundaries.add(this.bott),this.bott2=new c.default(this.game,e/2,t-t/50,0,e-e/30,90,this.sideCG),this.bott2.tint=16711680,this.bott2.body.collides([this.bubbleCG,this.sideCG]),this.boundaries.add(this.bott2),this.top=new c.default(this.game,e/2,t-t/5,0,e-e/3,90,this.sideCG),this.top.body.collides([this.bubbleCG,this.sideCG]),this.boundaries.add(this.top),this.side1=new f.default(this.game,e-e/8,t-t/8,0,e/8,t/5,0,this.sideCG),this.side1.body.collides([this.bubbleCG,this.sideCG]),this.side1.body.angularVelocity=.2,this.side1.body.velocity.x=20,this.boundaries.add(this.side1),this.side2=new f.default(this.game,e/8,t-t/8,0,e/8,t/5,0,this.sideCG),this.side2.body.collides([this.bubbleCG,this.sideCG]),this.side2.body.angularVelocity=-.2,this.side2.body.velocity.x=-20,this.boundaries.add(this.side2),this.game.add.existing(this.boundaries),this.mouseBody=new p2.Body,this.game.physics.p2.world.addBody(this.mouseBody),this.game.input.onDown.add(this.startDrag,this),this.game.input.onUp.add(this.stopDrag,this),this.game.input.addMoveCallback(this.movePointer,this),console.log(this.time.now),this.bubbleCounter=7e3,this.bubbleTimeout=this.time.now,this.eyeCounter=5e3,this.eyeTimeout=this.time.now,this.sidesCounter=2500,this.sidesTimeout=this.time.now+this.sidesCounter,this.gameOver=0,this.scoreDisplayLeft=this.game.add.text(this.leftEye.x,this.leftEye.y,this.leftScore,{font:"50px Arial",fill:"#ffffff"}),this.scoreDisplayLeft.anchor.setTo(.5,.5),this.scoreDisplayRight=this.game.add.text(this.rightEye.x,this.rightEye.y,this.rightScore,{font:"50px Arial",fill:"#ffffff"}),this.scoreDisplayRight.anchor.setTo(.5)}},{key:"createBubble",value:function(){this.bubbly=new u.default(this.game,this.game.width/2+this.game.rnd.integerInRange(-this.game.width/4,this.game.width/4),this.game.height-this.game.height/8,0,this.bubbleCG,this.bTouchCG,this.bumperCG,this.sideCG),this.bubbly.body.createBodyCallback(this.leftEye,this.hitBumper,this),this.bubbly.body.createBodyCallback(this.rightEye,this.hitBumper,this),this.game.add.existing(this.bubbly),this.bubbles.add(this.bubbly),21===this.bubbles.length?(this.bubbleCounter=100,this.bubbleTimeout=this.game.time.now):50===this.bubbles.length?(this.top.body.dynamic=!0,this.side1.body.dynamic=!0,this.side2.body.dynamic=!0):this.bubbles.length>75&&this.game.state.start("menu")}},{key:"update",value:function(){this.game.time.pauseDuration>0&&(this.eyeTimeout+=this.game.time.pauseDuration,this.sidesTimeout+=this.game.time.pauseDuration,this.bubbleTimeout+=this.game.time.pauseDuration,this.game.time.pauseDuration=0),this.scoreDisplayLeft.x=Math.floor(this.leftEye.x),this.scoreDisplayRight.x=Math.floor(this.rightEye.x),this.eyeTimeout<this.game.time.now&&(this.eyeTimeout=this.time.now+this.eyeCounter,this.leftEye.body.velocity.x*=-1,this.rightEye.body.velocity.x*=-1),this.sidesTimeout<this.game.time.now&&(this.sidesTimeout=this.time.now+this.sidesCounter,this.side1.body.velocity.x*=-1,this.side2.body.velocity.x*=-1,this.side1.body.angularVelocity*=-1,this.side2.body.angularVelocity*=-1),this.bubbleTimeout<this.game.time.now&&(this.timedIncrease=10*Math.abs(this.leftScore-this.rightScore),this.bubbleTimeout=this.game.time.now+(this.bubbleCounter-this.timedIncrease),this.bubbleCounter>1e3&&(this.bubbleCounter-=25),this.createBubble(),this.createBubble())}},{key:"startDrag",value:function(e){var t=[];this.bubbles.forEach(function(e){t.push(e.body)},this);var i=this.game.physics.p2.hitTest(e.position,t),s=[this.game.physics.p2.pxmi(e.position.x),this.game.physics.p2.pxmi(e.position.y)];if(i.length){var o=i[0],n=[0,0];o.toLocalFrame(n,s),o.parent.sprite.beingDragged=!0,o.parent.sprite.changePhysics=!0,this.mouseConstraint=this.game.physics.p2.createRevoluteConstraint(this.mouseBody,[0,0],o,[this.game.physics.p2.mpxi(n[0]),this.game.physics.p2.mpxi(n[1])])}}},{key:"hitBumper",value:function(e,t){e.sprite.beingDragged&&this.stopDrag(),t.sprite===this.leftEye?this.addPoints(e.sprite.number,e.sprite.tint,!1):this.addPoints(e.sprite.number,e.sprite.tint,!0),console.log(e.sprite.number),2!==e.sprite.number?(e.sprite.number--,e.sprite.label.text=e.sprite.number):(e.sprite.label.text="",e.sprite.destroy())}},{key:"stopDrag",value:function(e,t){this.game.physics.p2.removeConstraint(this.mouseConstraint),void 0!==this.mouseConstraint&&null!==this.mouseConstraint.bodyB.parent.sprite&&(this.mouseConstraint.bodyB.parent.sprite.beingDragged=!1,this.mouseConstraint.bodyB.parent.sprite.changePhysics=!0)}},{key:"movePointer",value:function(e){this.mouseBody.position[0]=this.game.physics.p2.pxmi(e.position.x),this.mouseBody.position[1]=this.game.physics.p2.pxmi(e.position.y)}},{key:"addPoints",value:function(e,t,i){i&&(e*=-1),3358719===t?(this.leftScore+="s"!==e?e:this.game.rnd.integerInRange(0,50),this.scoreDisplayLeft.text=this.leftScore):6750054===t?(this.leftScore+=2*e!=="s"?e:this.game.rnd.integerInRange(0,50),this.rightScore-="s"!==e?e:this.game.rnd.integerInRange(0,50),this.scoreDisplayLeft.text=this.leftScore,this.scoreDisplayRight.text=this.rightScore):(this.rightScore-="s"!==e?e:this.game.rnd.integerInRange(0,50),this.scoreDisplayRight.text=this.rightScore),console.log("score ",this.leftScore,this.rightScore,"bubble count: ",this.bubbles.length),this.leftScore===this.rightScore&&this.createBubble()}}]),t}(Phaser.State);i.default=p},{"../prefabs/bubble":2,"../prefabs/side":3,"../prefabs/smile":4}],7:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return n(t,e),r(t,[{key:"create",value:function(){var e=this.add.text(.5*this.game.width,.5*this.game.height,"Gameover",{font:"42px Arial",fill:"#ffffff",align:"center"});e.anchor.set(.5),this.saveVarsToLocalStorage(),this.input.onDown.add(this.restartGame,this)}},{key:"saveVarsToLocalStorage",value:function(){}},{key:"resetGlobalVariables",value:function(){}},{key:"update",value:function(){}},{key:"restartGame",value:function(){this.resetGlobalVariables(),this.game.state.start("menu")}}]),t}(Phaser.State);i.default=a},{}],8:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return n(t,e),r(t,[{key:"create",value:function(){var e=this.add.text(.5*this.game.width,.5*this.game.height,"MENU",{font:"42px Arial",fill:"#ffffff",align:"center"});e.anchor.set(.5),this.input.onDown.add(this.startGame,this)}},{key:"update",value:function(){}},{key:"startGame",value:function(){this.game.state.start("game")}}]),t}(Phaser.State);i.default=a},{}],9:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=function(e){function t(){s(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.asset=null,e.ready=!1,e}return n(t,e),r(t,[{key:"preload",value:function(){this.asset=this.add.sprite(.5*this.game.width-110,.5*this.game.height-10,"preloader"),this.load.setPreloadSprite(this.asset),this.load.onLoadComplete.addOnce(this.onLoadComplete,this),this.loadResources()}},{key:"update",value:function(){this.ready&&this.game.state.start("game")}},{key:"loadResources",value:function(){this.game.load.image("bubble","../assets/mathbubble/bubble.png"),this.game.load.image("r","../assets/mathbubble/bumper_1.png"),this.game.load.image("side","../assets/mathbubble/side.png"),this.game.load.image("bott","../assets/mathbubble/bottom.png"),this.game.load.image("left","../assets/mathbubble/left_eye.png"),this.game.load.image("right","../assets/mathbubble/right_eye.png")}},{key:"onLoadComplete",value:function(){this.ready=!0}}]),t}(Phaser.State);i.default=a},{}]},{},[1]);
