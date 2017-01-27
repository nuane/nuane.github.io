!function e(t,i,s){function o(a,r){if(!i[a]){if(!t[a]){var h="function"==typeof require&&require;if(!r&&h)return h(a,!0);if(n)return n(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[a]={exports:{}};t[a][0].call(u.exports,function(e){var i=t[a][1][e];return o(i?i:e)},u,u.exports,e,t,i,s)}return i[a].exports}for(var n="function"==typeof require&&require,a=0;a<s.length;a++)o(s[a]);return o}({1:[function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var o=e("./states/boot"),n=s(o),a=e("./states/game"),r=s(a),h=e("./states/menu"),l=s(h),u=e("./states/preloader"),c=s(u),d=e("./states/gameover"),b=s(d),y=y=window.innerHeight>900?900:window.innerHeight,p=2*y/3;console.log(y,p);var f=new Phaser.Game(p,y,Phaser.AUTO,"MathBubble-game");f.state.add("boot",new n.default),f.state.add("game",new r.default),f.state.add("menu",new l.default),f.state.add("preloader",new c.default),f.state.add("gameover",new b.default),f.state.start("boot")},{"./states/boot":5,"./states/game":6,"./states/gameover":7,"./states/menu":8,"./states/preloader":9}],2:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=function(e){function t(e,i,n,a,r,h,l,u,c){s(this,t);var d=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n,"bubble",a)),b=d.game,y=d.game.width,p=d.game.height,f=[5,5,5,5,5,5,10,10,10,10,20,20,20,20,50,50,100],g=0,m=f.length-1,v=y/40+"px Arial",w={font:v,fill:"#ffffff",wordWrap:!0,wordWrapWidth:d.width};return d.number=f[b.rnd.integerInRange(g,m)],d.width=y/10,d.height=p/15,d.anchor.set(.5,.5),d.tint=d.colorType(b.rnd.integerInRange(0,100)),16737792===d.tint&&(d.number=b.rnd.integerInRange(2,3)),d.label=b.add.text(0,0,d.number,w),d.label.anchor.set(.5,.5),d.beingDragged=!1,d.changePhysics=!1,d.cg=r,d.cg2=h,d.eyesCG=l,d.sideCG=u,d.noseCG=c,b.physics.p2.enable(d,!1),d.body.setCircle(d.width/2),d.setPhysics(d.cg,[d.cg,d.eyesCG,d.sideCG,d.noseCG]),d.bounceSound=d.game.add.audio("ping3"),d}return n(t,e),a(t,[{key:"update",value:function(){this.label.x=Math.floor(this.x),this.label.y=Math.floor(this.y),this.beingDragged&&this.changePhysics?this.setPhysics(this.cg2,[this.cg,this.cg2,this.eyesCG,this.noseCG]):!this.beingDragged&&this.changePhysics&&this.setPhysics(this.cg,[this.cg,this.eyesCG,this.sideCG,this.noseCG]),this.constrainVelocity(),this.checkWorldBounds()}},{key:"constrainVelocity",value:function(){var e,t,i,s,o=75;i=this.body.data.velocity[0],s=this.body.data.velocity[1],t=i*i+s*s,t>o*o&&(e=Math.atan2(s,i),i=Math.cos(e)*o,s=Math.sin(e)*o,this.body.data.velocity[0]=i,this.body.data.velocity[1]=s)}},{key:"checkWorldBounds",value:function(){this.x>this.game.width/8+this.game.width&&(this.body.x=0),this.x<-this.game.width/8&&(this.body.x=this.game.width),this.y>this.game.height&&(console.log("down under"),this.body.y=this.game.height-this.game.height/8,this.body.x=this.game.width/2,this.body.velocity.x=0,this.body.velocity.y=0),this.y<-this.game.height/2&&(this.body.velocity.y=-this.body.velocity.y,console.log(this.body.velocity.y))}},{key:"resetPosition",value:function(){this.position.y=g.height}},{key:"setPhysics",value:function(e,t){this.body.setCollisionGroup(e),this.body.collides(t,this.collide,this),this.changePhysics=!1}},{key:"collide",value:function(e,t){var i=Math.sqrt(e.velocity.x*e.velocity.x+e.velocity.y*e.velocity.y)/1500;this.bounceSound.volume=i,this.bounceSound.play()}},{key:"colorType",value:function(e){return e>=0&&e<40?3358719:e>=40&&e<80?16737894:e>=80&&e<90?16737792:e>=90&&e<95?5577355:6750054}}]),t}(Phaser.Sprite);i.default=r},{}],3:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=function(e){function t(e,i,n,a,r,h,l,u){s(this,t);var c=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n,"side",a));return c.anchor.set(.5,.5),c.height=r,c.game.physics.p2.enable(c,!1),c.body.angle=h,c.body.setCollisionGroup(l),c.body.collides(u),c.body.kinematic=!0,c}return n(t,e),a(t,[{key:"update",value:function(){}}]),t}(Phaser.Sprite);i.default=r},{}],4:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=function(e){function t(e,i,n,a,r,h,l,u){s(this,t);var c=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n,"side",a));return c.anchor.set(.5,.5),c.width=r,c.height=h,c.game.physics.p2.enable(c,!1),c.body.angle=l,c.body.setCollisionGroup(u),c.body.kinematic=!0,c}return n(t,e),a(t,[{key:"update",value:function(){}}]),t}(Phaser.Sprite);i.default=r},{}],5:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return n(t,e),a(t,[{key:"preload",value:function(){this.load.image("preloader","../assets/mathbubble/preloader.gif")}},{key:"create",value:function(){this.game.input.maxPointers=1,this.game.device.desktop?this.game.scale.pageAlignHorizontally=!0:(this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.minWidth=240,this.game.scale.minHeight=520,this.game.scale.maxWidth=320,this.game.scale.maxHeight=960,this.game.scale.forceOrientation(!0),this.game.scale.pageAlignHorizontally=!0,this.game.scale.updateLayout(!0)),this.initGlobalVariables(),console.log(this.game.width,this.game.height),this.game.state.start("preloader")}},{key:"initGlobalVariables",value:function(){this.game.global={}}}]),t}(Phaser.State);i.default=r},{}],6:[function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),h=e("../prefabs/bubble"),l=s(h),u=e("../prefabs/side"),c=s(u),d=e("../prefabs/smile"),b=s(d),y=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),r(t,[{key:"create",value:function(){var e=this.game.width,t=this.game.height;this.game.physics.startSystem(Phaser.Physics.P2JS),this.game.physics.p2.setImpactEvents(!0),this.game.physics.p2.restitution=.8,this.game.physics.p2.gravity.y=1e3,this.bubbleCG=this.game.physics.p2.createCollisionGroup(),this.bTouchCG=this.game.physics.p2.createCollisionGroup(),this.bumperCG=this.game.physics.p2.createCollisionGroup(),this.sideCG=this.game.physics.p2.createCollisionGroup(),this.noseCG=this.game.physics.p2.createCollisionGroup(),this.leftScore=500,this.rightScore=-500,this.offsetMultiplier=1,this.midBonus=0,this.bubbles=this.game.add.group(),this.boundaries=this.game.add.group(),this.leftEye=this.game.add.sprite(2*e/7,t/6,"left"),this.leftEye.anchor.setTo(0,0),this.leftEye.width=e/3,this.leftEye.height=t/6,this.leftEye.tint=10066431,this.game.physics.p2.enable(this.leftEye,!1),this.leftEye.body.setCollisionGroup(this.bumperCG),this.leftEye.body.collides([this.bubbleCG,this.bTouchCG]),this.leftEye.body.kinematic=!0,this.leftEye.body.velocity.x=10,this.rightEye=this.game.add.sprite(e-2*e/7,t/6,"right"),this.rightEye.anchor.setTo(1,0),this.rightEye.width=e/3,this.rightEye.height=t/6,this.rightEye.tint=16751001,this.game.physics.p2.enable(this.rightEye,!1),this.rightEye.body.setCollisionGroup(this.bumperCG),this.rightEye.body.collides([this.bubbleCG,this.bTouchCG]),this.rightEye.body.kinematic=!0,this.rightEye.body.velocity.x=-10,this.eyelid1=this.game.add.sprite(e/2,t/30,"right"),this.eyelid1.anchor.setTo(.5),this.eyelid1.width=e/12,this.eyelid1.height=t/24,this.game.physics.p2.enable(this.eyelid1,!0),this.eyelid1.body.collides([this.bubbleCG,this.bTouchCG],this.hitBonus,this),this.eyelid1.body.kinematic=!0,this.eyelid1.body.velocity.x=100,this.mid=this.game.add.sprite(e/2,t-10*t/21,"r"),this.mid.width=t/20,this.mid.height=t/20,this.game.physics.p2.enable(this.mid,!0),this.mid.body.setCircle(this.mid.width/2),this.mid.body.setCollisionGroup(this.noseCG),this.mid.body.collides([this.bubbleCG,this.bTouchCG,this.sideCG]),this.mid.body.kinematic=!0,this.mid.body.angularVelocity=3,this.mid1=this.game.add.sprite(e/2,t-3*t/7,"side"),this.game.physics.p2.enable(this.mid1,!0),this.mid1.body.setCollisionGroup(this.noseCG),this.mid1.body.collides([this.bubbleCG,this.bTouchCG],this.hitNose,this),this.mid1.body.kinematic=!0,this.mid1.body.angle=90,this.mid2=this.game.add.sprite(e/2+this.mid1.height/5,t-t/2,"side"),this.game.physics.p2.enable(this.mid2,!1),this.mid2.body.setCollisionGroup(this.noseCG),this.mid2.body.collides([this.bubbleCG,this.bTouchCG],this.hitNose,this),this.mid2.body.kinematic=!0,this.mid2.body.angle=-25,this.mid2.body.angularVelocity=-.1,this.mid2.body.velocity.x=-5,this.mid3=this.game.add.sprite(e/2-this.mid1.height/5,t-t/2,"side"),this.game.physics.p2.enable(this.mid3,!1),this.mid3.body.setCollisionGroup(this.noseCG),this.mid3.body.collides([this.bubbleCG,this.bTouchCG],this.hitNose,this),this.mid3.body.kinematic=!0,this.mid3.body.angle=25,this.mid3.body.angularVelocity=.1,this.mid3.body.velocity.x=5,this.bott=new c.default(this.game,e/2,t-t/20,0,e-e/4,90,this.sideCG,[this.bubbleCG,this.sideCG]),this.bott2=new c.default(this.game,e/2,t-t/50,0,e-e/30,90,this.sideCG,[this.bubbleCG,this.sideCG]),this.bott2.tint=16711680,this.top=new c.default(this.game,e/2,t-t/4,0,e-e/3,90,this.sideCG,[this.bubbleCG,this.sideCG]),this.boundaries.add(this.bott),this.boundaries.add(this.bott2),this.boundaries.add(this.top),this.side1=new b.default(this.game,e-e/12,t-t/10,0,e/4,t/3,0,this.sideCG),this.side1.body.collides([this.bubbleCG,this.sideCG]),this.side1.body.angularVelocity=.2,this.side1.body.velocity.x=20,this.boundaries.add(this.side1),this.side2=new b.default(this.game,e/12,t-t/10,0,e/4,t/3,0,this.sideCG),this.side2.body.collides([this.bubbleCG,this.sideCG]),this.side2.body.angularVelocity=-.2,this.side2.body.velocity.x=-20,this.boundaries.add(this.side2),this.game.add.existing(this.boundaries),this.mouseBody=new p2.Body,this.game.physics.p2.world.addBody(this.mouseBody),this.game.input.onDown.add(this.startDrag,this),this.game.input.onUp.add(this.stopDrag,this),this.game.input.addMoveCallback(this.movePointer,this),this.bubbleTimeout=0,this.eyeCounter=4e3,this.eyeTimeout=0,this.sidesCounter=2500,this.sidesTimeout=this.time.now+this.sidesCounter,this.noseClippingTimeout=!1,this.gameOver=0,this.scoreDisplayLeft=this.game.add.text(this.leftEye.x,this.leftEye.y,this.leftScore,{font:"50px Arial",fill:"#ffffff"}),this.scoreDisplayLeft.anchor.setTo(.5,.5),this.scoreDisplayRight=this.game.add.text(this.rightEye.x,this.rightEye.y,this.rightScore,{font:"50px Arial",fill:"#ffffff"}),this.scoreDisplayRight.anchor.setTo(.5),this.p1=this.game.add.audio("ping1"),this.p2=this.game.add.audio("ping2"),this.p3=this.game.add.audio("ping3")}},{key:"createBubble",value:function(){this.bubbly=new l.default(this.game,this.game.width/2+this.game.rnd.integerInRange(-this.game.width/4,this.game.width/4),this.game.height-this.game.height/8,0,this.bubbleCG,this.bTouchCG,this.bumperCG,this.sideCG,this.noseCG),this.bubbly.body.createBodyCallback(this.leftEye,this.hitBumper,this),this.bubbly.body.createBodyCallback(this.rightEye,this.hitBumper,this),this.bubbly.body.createBodyCallback(this.mid,this.hitBonus,this),this.bubbly.body.createBodyCallback(this.mid1,this.cancelMovement,this),this.game.add.existing(this.bubbly),this.bubbles.add(this.bubbly),21===this.bubbles.length?(this.bubbleCounter=100,this.bubbleTimeout=this.game.time.now):30===this.bubbles.length?(this.top.body.dynamic=!0,this.side1.body.dynamic=!0,this.side2.body.dynamic=!0,this.scoreDisplayLeft.text="Err",this.scoreDisplayRight.text="Err"):this.bubbles.length>40&&this.game.state.start("menu")}},{key:"update",value:function(){(this.eyelid1.body.x>this.game.width||this.eyelid1.body.x<0)&&(this.eyelid1.body.velocity.x*=-1),this.scoreDisplayLeft.x=Math.floor(this.leftEye.x),this.scoreDisplayRight.x=Math.floor(this.rightEye.x),this.updateTimers()}},{key:"updateTimers",value:function(){this.game.time.pauseDuration>0&&(this.eyeTimeout+=this.game.time.pauseDuration,this.sidesTimeout+=this.game.time.pauseDuration,this.bubbleTimeout+=this.game.time.pauseDuration,this.game.time.pauseDuration=0),this.eyeTimeout<this.game.time.now&&(this.eyeTimeout=this.time.now+this.eyeCounter,this.leftEye.body.velocity.x*=-1,this.rightEye.body.velocity.x*=-1,this.mid2.body.velocity.x*=-1,this.mid2.body.angularVelocity*=-1,this.mid3.body.velocity.x*=-1,this.mid3.body.angularVelocity*=-1),this.sidesTimeout<this.game.time.now&&(console.log(this.side1.body.angle,this.side2.body.angle),this.sidesTimeout=this.time.now+this.sidesCounter,this.side1.body.velocity.x*=-1,this.side2.body.velocity.x*=-1,this.side1.body.angularVelocity*=-1,this.side2.body.angularVelocity*=-1),this.bubbleTimeout<this.game.time.now&&(console.log("bubble timeout: creating bubbles ",this.timedIncrease,this.bubbleCounter,this.game.time.now),this.timedIncrease=Math.abs(this.leftScore-this.rightScore)*this.offsetMultiplier,this.bubbleTimeout=this.game.time.now+(this.bubbleCounter-this.timedIncrease),this.createBubble())}},{key:"startDrag",value:function(e){var t=[];this.bubbles.forEach(function(e){t.push(e.body)},this);var i=this.game.physics.p2.hitTest(e.position,t),s=[this.game.physics.p2.pxmi(e.position.x),this.game.physics.p2.pxmi(e.position.y)];if(i.length){var o=i[0],n=[0,0];o.toLocalFrame(n,s),o.parent.sprite.beingDragged=!0,o.parent.sprite.changePhysics=!0,this.mouseConstraint=this.game.physics.p2.createRevoluteConstraint(this.mouseBody,[0,0],o,[this.game.physics.p2.mpxi(n[0]),this.game.physics.p2.mpxi(n[1])])}}},{key:"stopDrag",value:function(e,t){this.game.physics.p2.removeConstraint(this.mouseConstraint),void 0!==this.mouseConstraint&&null!==this.mouseConstraint.bodyB.parent.sprite&&(this.mouseConstraint.bodyB.parent.sprite.beingDragged=!1,this.mouseConstraint.bodyB.parent.sprite.changePhysics=!0)}},{key:"hitBumper",value:function(e,t){this.p1.play(),e.sprite.beingDragged&&this.stopDrag(),t.sprite===this.leftEye?this.addPoints(e.sprite.number,e.sprite.tint,!1):this.addPoints(e.sprite.number,e.sprite.tint,!0),5!==e.sprite.number&&16737792!==e.sprite.tint?(e.sprite.number-=5,e.sprite.label.text=e.sprite.number,console.log(e.sprite.number)):(e.sprite.label.text="",e.sprite.destroy())}},{key:"hitNose",value:function(e,t){this.p2.play(),null!=t.sprite&&t.sprite.beingDragged&&this.stopDrag()}},{key:"hitBonus",value:function(e,t){e.sprite.beingDragged&&this.stopDrag(),this.noseClippingTimeout||(this.midBonus+=e.sprite.number,console.log(this.midBonus),e.sprite.label.text="",e.sprite.destroy())}},{key:"cancelMovement",value:function(e,t){var i=this;this.noseClippingTimeout=!0,this.game.time.events.add(400,function(){i.noseClippingTimeout=!1},this)}},{key:"movePointer",value:function(e){this.mouseBody.position[0]=this.game.physics.p2.pxmi(e.position.x),this.mouseBody.position[1]=this.game.physics.p2.pxmi(e.position.y)}},{key:"addPoints",value:function(e,t,i){i&&(e*=-1),console.log(e),3358719===t?this.leftScore+="s"!==e?e:this.game.rnd.integerInRange(0,50):16737894===t?(console.log("red"),this.rightScore-="s"!==e?e:this.game.rnd.integerInRange(0,50)):6750054===t?(console.log("green",e),this.leftScore+=e+e,this.rightScore-=e):5577355===t?(console.log("purple"),this.leftScore+=e,this.rightScore-=e+e):(console.log("orange"),i?this.rightScore*=Math.abs(e):this.leftScore*=e),this.scoreDisplayLeft.text=this.leftScore,this.scoreDisplayRight.text=this.rightScore}}]),t}(Phaser.State);i.default=y},{"../prefabs/bubble":2,"../prefabs/side":3,"../prefabs/smile":4}],7:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return n(t,e),a(t,[{key:"create",value:function(){var e=this.add.text(.5*this.game.width,.5*this.game.height,"Gameover",{font:"42px Arial",fill:"#ffffff",align:"center"});e.anchor.set(.5),this.saveVarsToLocalStorage(),this.input.onDown.add(this.restartGame,this)}},{key:"saveVarsToLocalStorage",value:function(){}},{key:"resetGlobalVariables",value:function(){}},{key:"update",value:function(){}},{key:"restartGame",value:function(){this.resetGlobalVariables(),this.game.state.start("menu")}}]),t}(Phaser.State);i.default=r},{}],8:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return n(t,e),a(t,[{key:"create",value:function(){var e=this.add.text(.5*this.game.width,.5*this.game.height,"MENU",{font:"42px Arial",fill:"#ffffff",align:"center"});e.anchor.set(.5),this.input.onDown.add(this.startGame,this)}},{key:"update",value:function(){}},{key:"startGame",value:function(){this.game.state.start("game")}}]),t}(Phaser.State);i.default=r},{}],9:[function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=function(e){function t(){s(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.asset=null,e.ready=!1,e}return n(t,e),a(t,[{key:"preload",value:function(){this.asset=this.add.sprite(.5*this.game.width-110,.5*this.game.height-10,"preloader"),this.load.setPreloadSprite(this.asset),this.load.onLoadComplete.addOnce(this.onLoadComplete,this),this.loadResources()}},{key:"update",value:function(){this.ready&&this.game.state.start("game")}},{key:"loadResources",value:function(){this.game.load.image("bubble","../assets/mathbubble/bubble.png"),this.game.load.image("r","../assets/mathbubble/bumper_1.png"),this.game.load.image("side","../assets/mathbubble/side.png"),this.game.load.image("bott","../assets/mathbubble/bottom.png"),this.game.load.image("left","../assets/mathbubble/left_eye.png"),this.game.load.image("right","../assets/mathbubble/right_eye.png"),this.game.load.audio("ping1","../assets/mathbubble/ping_high01.mp3"),this.game.load.audio("ping2","../assets/mathbubble/ping_high02.mp3"),this.game.load.audio("ping3","../assets/mathbubble/ping_high03.mp3")}},{key:"onLoadComplete",value:function(){this.ready=!0}}]),t}(Phaser.State);i.default=r},{}]},{},[1]);
