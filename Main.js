//  Game

// Developed by Rahul Patel

// Constants

var BUTTON_TEXT_COLOR ="#1e4a62";
var BUTTON_TEXT_FONT ="bold 34px Arial";

// KEYPAD

var KEYPAD_START_X = 755;
var KEYPAD_START_Y = 150;

var KEYPAD_KEY_WIDTH    = 67;
var KEYPAD_KEY_HEIGHT    = 55;
var KEYPAD_KEY_MARGINX  = 20;
var KEYPAD_KEY_MARGINY  =  5;
var KEYPAD_KEY_TEXT_OFFSETX=25;
var KEYPAD_KEY_TEXT_OFFSETY=37;

var  KEYPAD_KEY_ENTER_TEXT_OFFSETX=44;

var MAX_KEYBOARD_INPUT = 9999;
var MIN_KEYBOARD_INPUT = -999;

// TIMINGS

var GAME_TIME = [
    [],
    [
        {highight:3000, fallTime:15000, minDiff:30, maxDiff:40},
        {highight:3000, fallTime:14000, minDiff:25, maxDiff:30},
        {highight:3000, fallTime:13000, minDiff:20, maxDiff:25},
        {highight:2500, fallTime:12000, minDiff:20, maxDiff:25},
        {highight:2500, fallTime:11000, minDiff:20, maxDiff:25}
    ],
    [
        {highight:2000, fallTime:10000, minDiff:15, maxDiff:20},
        {highight:2000, fallTime:10000, minDiff:15, maxDiff:20},
        {highight:2000, fallTime:9000 , minDiff:15, maxDiff:20},
        {highight:1500, fallTime:9000 , minDiff:15, maxDiff:20},
        {highight:1500, fallTime:8000 , minDiff:15, maxDiff:20}
    ],
    [
        {highight:1500,  fallTime:8000, minDiff:10, maxDiff:15},
        {highight:1500,  fallTime:7000, minDiff:10, maxDiff:15},
        {highight:1500,  fallTime:7000, minDiff:10, maxDiff:15},
        {highight:1500,  fallTime:6000, minDiff:10, maxDiff:15},
        {highight:1500,  fallTime:5000, minDiff:10, maxDiff:15}
    ]
];

var BALLON_MAN_DIE_Y = 255;
var BALLON_MAN_LIMIT = 360;

var GAME_FPS = 30;

var LIFE_INDICATOR_CIRCLEX = 609;
var LIFE_INDICATOR_CIRCLEY = 40;
var LIFE_INDICATOR_BGX = 618;
var LIFE_INDICATOR_BGY = 50;
var LIFE_INDICATOR_TEXTX = 640;
var LIFE_INDICATOR_TEXTY = 88;
var LIFE_INDICATOR_TEXT_OFFSET = -8;


var FPS_TO_TIME = 1000/GAME_FPS;
var fallTimeFactor = (BALLON_MAN_DIE_Y*FPS_TO_TIME)/BALLON_MAN_LIMIT;

var DIS_LEFT_SPRITE=165;
var DIS_RIGHT_SPRITE=384;

var WIRE_Y = 488;
	
var RIGHT_ARROW_X=574;
var RIGHT_ARROW_Y=203;	
	
var LEFT_ARROW_X=123;
var LEFT_ARROW_Y=203;

var WINDOW_BORDER_LEFT_X = 166;
var WINDOW_BORDER_Y = 7;

var WINDOW_GLASS_BORDER_LEFT_X = 195;
var WINDOW_GLASS_BORDER_LEFT_Y = 26;

var MIRROR_TOP_LEFT_X = 204;
var MIRROR_TOP_LEFT_Y = 35;
var MIRROR_BOTTOM_LEFT_X = 206;
var MIRROR_BOTTOM_LEFT_Y = 85;
var MIRROR_TOP_RIGHT_X = 260;
var MIRROR_TOP_RIGHT_Y = 35;
var MIRROR_BOTTOM_RIGHT_X = 259;
var MIRROR_BOTTOM_RIGHT_Y = 84;

var DIS_LEFT_TO_RIGHT_WINDOW = 219;

var BALLOONMAN_LEFT_X = 214;
var BALLOONMAN_RIGHT_X = 436;
var BALLOONMAN_Y = 150;

var OPEN_WINDOW_LEFT = 375;
var OPEN_WINDOW_RIGHT = 527;
var OPEN_WINDOW_Y=6;

var SCORE_HEADING_X=30;
var SCORE_HEADING_Y=85;

var START_BUTTON_X = 258;
var START_BUTTON_Y = 240;
var DEMO_BUTTON_X = 258;
var DEMO_BUTTON_Y = 320;

var CONTINUE_BUTTON_X = 260;
var CONTINUE_BUTTON_Y= 185;

var LEFT_RAND_POPUP_X = 165;
var LEFT_RAND_POPUP_Y = 130;

var RIGHT_RAND_POPUP_X = 505;
var RIGHT_RAND_POPUP_Y = 130;


var OPEN_WINDOW_LEFT_X = 158;
var OPEN_WINDOW_RIGHT_X = 308;

var EXP_TEXT_LEFT_X = 234;
var EXP_TEXT_Y = 205;
var EXP_TEXT_RIGHT_X = 456;

/* Define Canvas */

var valueArray = new Array;
var canvas; //Will be linked to the canvas in our index.html page
var stage; //Is the equivalent of stage in AS3 and we'll add "children" to it
var bg; //The background graphic
var count=0;
var pos=1;
var levelcount=0;
var demoval=0;
var val=0;
var demo=0;
var scoreheading = new Text();
//	containers
newdraggerkeyc = new Container();
playagaindraggerreddemo2 = new Container();
playagaindraggerreddemo4 = new Container();

var lifeIndicator = new Array();

//score of Game
var score=0; 
// Variables
var ct=0;
var num=0;
var clickVal=0;
var red=0;
var speed=400;
var getvalue=0;
var keyboradValue=0;
var newdragger;
var new_rand;
var gen_rand;
var final_value;
var scale=0;
var scale1=0;
var mc;
var h=0;
var k=0;
var l=0;
var r=0;
var left=0;
var main; //The Main Background
var startB; //The Start button in the main menu
var creditsB; //The credits button in the main menu

//[Credits]

var state1;
var state2;
var dragger;
var dragger1;
var credits; //The Credits screen

//[Game View]

var player; //The player paddle graphic
var ball; //The ball graphic
var cpu; //The CPU paddle
var win; //The winning popup
var lose; //The losing popup
var arrow_right;

var tkr = new Object;

//preloader
var preloader;
var manifest;
var totalLoaded = 0;

var time=3000; //heighling Time
var exp1;
var exp2;
var str2='-';
var str1='+';
var value1;
var value2;
var metaChar = false;
var exampleKey = 16;

//[Title View Group]

var TitleView = new Container();
var dragger= new Container();
var dragger1 = new Container();
var ReduceonWronclick=0;
var callback;
var onFinish;
document.onkeydown = keyEvent; 
document.onkeyup = metaKeyUp;

function init(level,lives,callback){
	
	if(typeof(stage)!=undefined && stage !=undefined)
	{
	stage.removeAllChildren();
	}
	
	onFinish=callback;
	
//	callback(level,lives);
	
	Main();	
		
}

//Main Function

function Main()
{
	/* Link Canvas */
	
	if(typeof(canvas)!=undefined && canvas !=undefined)
	{
		canvas.width = canvas.width;
		stage.removeAllChildren();
		stage.update();
		TitleView = new Container();
		
	}
	
	console.log("level"+level);
	console.log("lives"+lives);
	
	totalLoaded=0;
	count=0;
	getvalue=0;
	keyboradValue=0;
	losoValue=0;
	keyValue=0;
	h=0;
	l=0;
	r=0;
	k=0;
	num=0;
	var dragger = new Container();
	var dragger1 = new Container();
	dragger.y=0;
	dragger1.y=0;
	ReduceonWronclick=0;
	console.log(ReduceonWronclick);
	if(level==2){	
		num1=0;
	}
	canvas = document.getElementById('gameStage');
  	stage = new Stage(canvas);
  	backrect = new Shape();
  	backrect.graphics.beginFill("#D79B7F").drawRect(0,0, 1024,582);
  	stage.addChild(backrect);
  	
  //creating the progress label
	loadProgressLabel = new Text("","22px helvetica","#6D4A36");
	loadProgressLabel.lineWidth = 200;
	loadProgressLabel.textAlign = "center";
	loadProgressLabel.x = canvas.width/2;
	loadProgressLabel.y = 294;
	stage.addChild(loadProgressLabel);

	//container that holds all the elements of the loading bar
	loadingBarContainer = new Container();

	//the height width and color of the loading bar
    loadingBarHeight = 28;
    loadingBarWidth = 398;
    LoadingBarColor = Graphics.getRGB(0,0,0);

	//creating the loading bar   
    loadingBar = new Shape();
    loadingBar.graphics.beginFill("#A06E55").drawRect(0, 0, 1, 28).endFill();

    //creating the frame around the loading bar
    
    backrect1 = new Shape();
    padding = 3;
  	backrect1.graphics.beginFill("#E2AC92").drawRect(Math.round(canvas.width/2 - loadingBarWidth/2),225, loadingBarWidth+padding, loadingBarHeight+padding);
  	stage.addChild(backrect1);
    
    frame = new Shape();
    padding = 3;
    frame.graphics.setStrokeStyle(1).beginStroke("#A06E55").drawRect(-padding/2, -padding/2, loadingBarWidth+padding, loadingBarHeight+padding).endStroke();

    //adding the loading bar and the frame to our container and placing it on the desired position on the canvas
    loadingBarContainer.addChild(loadingBar, frame);
    loadingBarContainer.x = Math.round(canvas.width/2 - loadingBarWidth/2);
    loadingBarContainer.y = 225;

	//adding the container with the elements to our stage
    stage.addChild(loadingBarContainer);
  	stage.mouseEventsEnabled = true;
  	 	
	/* Set The Flash Plugin for browsers that don't support SoundJS */
  	SoundJS.FlashPlugin.BASE_PATH = "assets/";
    if (!SoundJS.checkPlugin(true)) {
      alert("Error!");
      return;
    }

  	manifest = [
				{src:"bg.png", id:"bg"},
				{src:"startB.png", id:"startB"},
				{src:"demo.png", id:"demoB"},		
				{src:"constrainaWire.png", id:"constrainaWire"},
				{src:"enterBtn.png", id:"enterBtn"},
				{src:"continue.png", id:"continueb"},
				{src:"window_Border.png", id:"window_Border"},
				{src:"windowGlassBoarder.png", id:"windowGlassBoarder"},
				{src:"window_Border.png", id:"window_Border1"},
				{src:"windowGlassBoarder.png", id:"windowGlassBoarder1"},
				{src:"mirrorTopLeft.png", id:"mirrorTopLeft"},
				{src:"mirrorBottomLeft.png", id:"mirrorBottomLeft"},
				{src:"mirrorTopRight.png", id:"mirrorTopRight"},
				{src:"mirrorBottomRight.png", id:"mirrorBottomRight"},
				{src:"mirrorTopLeft.png", id:"mirrorTopLeft1"},
				{src:"mirrorBottomLeft.png", id:"mirrorBottomLeft1"},
				{src:"mirrorTopRight.png", id:"mirrorTopRight1"},
				{src:"mirrorBottomRight.png", id:"mirrorBottomRight1"},
				{src:"delete.png", id:"deleteBtn"},
				{src:"delete_click.png", id:"delete_click"},
				{src:"enterBtn_onClick.png", id:"enterBtn_onClick"},
				{src:"cal_digit.png", id:"cal_digit"},
				{src:"arrowLeft.png", id:"arrow_left"},
				{src:"btn.png", id:"btn"},
				{src:"cal_digit_onClick.png", id:"cal_digit_onClick"},
				{src:"arrowRight.png", id:"arrow_right"},
				{src:"mirrorTopLeftGreen.png", id:"mirrorTopLeftGreen"},
				{src:"mirrorBottomLeftGreen.png", id:"mirrorBottomLeftGreen"},
				{src:"mirrorTopRightGreen.png", id:"mirrorTopRightGreen"},
				{src:"mirrorBottomRightGreen.png", id:"mirrorBottomRightGreen"},
				{src:"mirrorTopLeftGreen.png", id:"mirrorTopLeftGreen1"},
				{src:"mirrorBottomLeftGreen.png", id:"mirrorBottomLeftGreen1"},
				{src:"mirrorTopRightGreen.png", id:"mirrorTopRightGreen1"},
				{src:"mirrorBottomRightGreen.png", id:"mirrorBottomRightGreen1"},	
				{src:"balloonMaanGreen.png", id:"balloonMaanLeft"},
				{src:"balloonMaanGreen.png", id:"balloonMaanRight"},
				{src:"openWindow_left.png", id:"openWindow_left"},
				{src:"openWindow_left.png", id:"openWindow_left1"},
				{src:"openWindow_right.png", id:"openWindow_right"},
				{src:"openWindow_right.png", id:"openWindow_right1"},
				{src:"mirrorTopLeftRed.png", id:"mirrorTopLeftRed"},
				{src:"mirrorBottomLeftRed.png", id:"mirrorBottomLeftRed"},
				{src:"mirrorTopRightRed.png", id:"mirrorTopRightRed"},
				{src:"mirrorBottomRightRed.png", id:"mirrorBottomRightRed"},
				{src:"mirrorTopLeftRed.png", id:"mirrorTopLeftRed1"},
				{src:"mirrorBottomLeftRed.png", id:"mirrorBottomLeftRed1"},
				{src:"mirrorTopRightRed.png", id:"mirrorTopRightRed1"},
				{src:"mirrorBottomRightRed.png", id:"mirrorBottomRightRed1"},
				{src:"leftTextHolder.png", id:"balloonArrowLeft"},
				{src:"rightTextHolder.png", id:"balloonArrowRight"},
				{src:"balloonMaanRed_burst.png", id:"balloonMaan_burstLeft"},
				{src:"balloonMaanRed_burst.png", id:"balloonMaan_burstRight"},
				{src:"arrowLeftGreen.png", id:"arrowLeftGreen"},
				{src:"arrowRightGreen.png", id:"arrowRightGreen"},
				{src:"arrowLeftRed.png", id:"arrowLeftRed"},
				{src:"arrowRightRed.png", id:"arrowRightRed"},
				{src:"10.png", id:"i10"},
				{src:"9.png", id:"i9"},
				{src:"8.png", id:"i8"},
				{src:"7.png", id:"i7"},
				{src:"6.png", id:"i6"},
				{src:"5.png", id:"i5"},
				{src:"4.png", id:"i4"},
				{src:"3.png", id:"i3"},
				{src:"2.png", id:"i2"},
				{src:"1.png", id:"i1"},		
				{src:"lifeNumberBg.png", id:"lifeNumberBg"},
				{src:"balloonMaanGreen.png", id:"balloonMaanGreen"},
				{src:"balloonMaanYellow.png", id:"balloonMaanYellow"},
				{src:"balloonMaanRed.png", id:"balloonMaanRed"},
				{src:"balloonMaanGreen.png", id:"balloonMaanGreen1"},
				{src:"balloonMaanYellow.png", id:"balloonMaanYellow1"},
				{src:"balloonMaanRed.png", id:"balloonMaanRed1"},
				{src:"windowSprite.png", id:"windowSprite"},
				{src:"openWindowLast.png", id:"openWindowLast"},
				{src:"arrowRight_hover.png", id:"arrowRight_hover"},
				{src:"arrowLeft_hover.png", id:"arrowLeft_hover"},
				{src:"arrowLeftRed_hover2.png", id:"arrowLeftRed_hover"},
				{src:"arrowRightRed_hover2.png", id:"arrowRightRed_hover"},
				{src:"hit.mp3|hit.ogg", id:"win"},
				{src:"wall.mp3|wall.ogg", id:"loss"},
				{src:"playerScore.mp3|playerScore.ogg", id:"openwindow"}
									
			];

  	preloader = new PreloadJS();
  	preloader.installPlugin(SoundJS);
    preloader.onProgress = handleProgress;
    preloader.onComplete = handleComplete;
    preloader.onFileLoad = handleFileLoad;
    preloader.loadManifest(manifest);

	/* Ticker */
	
	Ticker.setFPS(30);
	Ticker.addListener(stage);
	stage.update();
	
}

function handleProgress(event)
{
	//use event.loaded to get the percentage of the loading
	
	//changing the length of our loading bar accordingly
	loadingBar.scaleX = preloader.progress * loadingBarWidth;
	//and the precentage in the loading label
	progresPrecentage = Math.round(preloader.progress*100);
	loadProgressLabel.text = progresPrecentage + "% Loaded" ;
	//updating the stage to draw the changes
	stage.update();
	
}

function handleComplete(event) {
	
	//getting the loaded images
	backgroundImage = preloader.getResult("background");
	treesImage = preloader.getResult("trees");
	groundImage = preloader.getResult("ground");

	//changing the label accordingly and updating the stage to show it
	loadProgressLabel.text = "Loading complete click to start";
	stage.update();

	stage.removeChild(backrect);
	//adding an click event listner to our canvas so that we start our game on a mouse click
	canvas.addEventListener("click", handleClick);
         
}

function handleClick() {
	//on click we call our start(); function
//	start();
	//we remove the progres label and loading bar and also remove the click event listener
	stage.removeChild(loadProgressLabel, loadingBarContainer,backrect);
	canvas.removeEventListener("click", handleClick);
}

function handleFileLoad(event) {

            
switch(event.type)
{
	case PreloadJS.IMAGE:
	//image loaded
	 var img = new Image();
     img.src = event.src;
     img.onload = handleLoadComplete;
     window[event.id] = new Bitmap(img);
	break;

	case PreloadJS.SOUND:
	//sound loaded
	handleLoadComplete();
	break;
	}
}

 function handleLoadComplete(event) 
 {
	
	totalLoaded++;
	if(manifest.length==totalLoaded)
	{
		addTitleView();
	}
 }

 
 function addTitleViewAction(e){
	 level++;
	 levelcount=0;
	 if(level==4){
			level=1;
			score=0;
			lives=10;
		}
	 addTitleView();
 }
function addTitleView()
{
	
	startB.x = START_BUTTON_X;
	startB.y = START_BUTTON_Y;
	startB.name = 'startB';
	pos=1;
	demoB.x = DEMO_BUTTON_X;
	demoB.y = DEMO_BUTTON_Y;
	demoB.name = 'demoB';
	balloonMaanGreen.visible=false;
	balloonMaanGreen1.visible=false;
	balloonMaanYellow.visible=false;
	balloonMaanYellow1.visible=false;
	balloonMaanRed.visible=false;
	balloonMaanRed1.visible=false;
	levelheading = new Text("Level :"+level, "bold 26px Arial", "#a62d3e");
	levelheading.x=305;
	levelheading.y=200;
	if(score>0){
		
		stage.removeAllChildren();
	}
	TitleView.addChild(bg, startB, creditsB,levelheading);
	stage.addChild(bg,TitleView);
	if(score==0){
	//	stage.addChild(demoB);
		TitleView.y=0;
		TitleView.addChild(demoB);
		stage.addChild(TitleView);
	}
	stage.update();
	
	// Button Listeners
	
	startB.onPress = tweenTitleView;
	demoB.onPress = tweenTitleViewdemo;
}

// Tween Title View

function tweenTitleView()
{		
	// Start Game
	
	demoB.visible=false;
	keyValue++;
	Tween.get(TitleView).to({y:-400}, 300).call(addGameView);
}

// Add Game View

function addGameView()
{
	if(val>0){
		val=0;
	}
	val++;
	 reduce1=0;
	 reduce2=0;
	 reduce3=0;
	 reduce4=0;
	 reduce5=0;
	 reduce6=0;
	 reduce7=0;
	 reduce8=0;
	continueb.visible=false;
	console.log("level"+level);
	console.log("lcount"+levelcount);
    var sets  = getExp(GAME_TIME[level][levelcount].minDiff,GAME_TIME[level][levelcount].maxDiff);
    exp1 = sets[0];
    exp2  = sets[1];
	balloonMaanYellow.visible=false;
	balloonMaanYellow1.visible=false;
	balloonMaanRed.visible=false;
	balloonMaanRed1.visible=false;
	mirrorBottomRightRed1.visible=true;
	mirrorTopRightRed1.visible=true;
	mirrorBottomLeftRed1.visible=true;
	mirrorTopLeftRed1.visible=true;
	mirrorBottomRightRed.visible=true;
	mirrorTopRightRed.visible=true;
	mirrorBottomLeftRed.visible=true;
	mirrorTopLeftRed.visible=true;
 if(typeof(canvas)!=undefined && canvas !=undefined)
	{
		canvas.width = canvas.width;
		stage.removeAllChildren();
		stage.update();
		TitleView = new Container();
	}
	totalLoaded=0;
	count=0;
	getvalue=0;
	keyboradValue=0;
	losoValue=0;
	keyValue=0;
	h=0;
	l=0;
	r=0;
	k=0;
	num=0;
	red=0;
	clickVal=0;
	leftval=0;
	rightval=0;
	result=0;
	var dragger = new Container();
	var dragger1 = new Container();
	dragger.y=0;
	dragger1.y=0;

	ReduceonWronclick=0;
	console.log(ReduceonWronclick);

	window_Border.visible=true;
	window_Border1.visible=true;

	mirrorBottomLeftGreen1.visible = true;
	mirrorBottomRightGreen1.visible = true;
	mirrorTopLeftGreen1.visible = true;
	mirrorTopRightGreen1.visible = true;

	mirrorBottomLeftGreen.visible = true;
	mirrorBottomRightGreen.visible = true;
	mirrorTopLeftGreen.visible = true;
	mirrorTopRightGreen.visible = true;

	stage.addChild(bg);
	stage.update();	
	credits = null;
	addKeyBoardInGameView();
    lifeIndicator[lives] = new Bitmap(lives+".png");

    lifeIndicator[lives].x  = LIFE_INDICATOR_CIRCLEX;
    lifeIndicator[lives].y  = LIFE_INDICATOR_CIRCLEY;

    lifeNumberBg.x = LIFE_INDICATOR_BGX;
    lifeNumberBg.y = LIFE_INDICATOR_BGY;

    livetext = new Text(lives, "bold 26px Arial", "#BB8465");
    livetext.x=LIFE_INDICATOR_TEXTX;
    livetext.y=LIFE_INDICATOR_TEXTY;

    if(lives>9)
        livetext.x += LIFE_INDICATOR_TEXT_OFFSET;

    newdraggerkeyc = new Container();
    newdraggerkeyc.x = 0;
    newdraggerkeyc.y = 0;
    newdraggerkeyc.addChild(lifeNumberBg,livetext);
    stage.addChild(newdraggerkeyc,lifeIndicator[lives]);

    var res = "Score :".concat(score);

    scoreheading = new Text(res, "bold 22px Arial", "#6D4A36");
    scoreheading.x=SCORE_HEADING_X;
    scoreheading.y=SCORE_HEADING_Y;

    scoreContainer = new Container();
    scoreContainer.x = 0;
    scoreContainer.y = 0;
    scoreContainer.addChild(scoreheading);
    stage.addChild(scoreContainer);

	stage.addChild(constrainaWire,arrow_right,arrow_left,enterBtn,enter_rect,window_Border,windowGlassBoarder,window_Border1,windowGlassBoarder1,mirrorTopLeft,mirrorBottomLeft,mirrorTopRight,mirrorBottomRight,mirrorTopLeft1,mirrorBottomLeft1,mirrorTopRight1,mirrorBottomRight1);
	stage.addChild(enter,deleteBtn,deleteText);

	arrow_right.visible = false;
	arrow_left.visible = false;

	var rand1 = Math.floor((Math.random()*100)+1);
	var rand2 = Math.floor((Math.random()*100)+1);
	var rand3 = Math.floor((Math.random()*100)+1);
	var rand4 = Math.floor((Math.random()*100)+1);

	 win_rand1 = Math.floor((Math.random()*4)+1);
	 win_rand2 = 4+Math.floor((Math.random()*4)+1);


	if(win_rand1==1){
		mirrorTopLeftGreen.x=MIRROR_TOP_LEFT_X;
		mirrorTopLeftGreen.y=MIRROR_TOP_LEFT_Y;
	    stage.addChild(mirrorTopLeftGreen);
	    mirrorTopLeft.onPress = null;
	    mirrorTopLeft.onClick = null;
	    setTimeout(function(){
	    	mirrorTopLeftGreen.visible = false;
	    	 mirrorTopLeft.onClick=showGameOnLeftWindowClick;
	    	},GAME_TIME[level][levelcount].highight);
	}


	if(win_rand1!=1){
		mirrorTopLeft.onPress = null;
		mirrorTopLeft.onClick = null;
		setTimeout(function(){
		mirrorTopLeft.onClick=Reduce1;
		},GAME_TIME[level][levelcount].highight);
	}

	if(win_rand1==2){
		mirrorBottomLeftGreen.x=MIRROR_BOTTOM_LEFT_X;
		mirrorBottomLeftGreen.y=MIRROR_BOTTOM_LEFT_Y;
	    stage.addChild(mirrorBottomLeftGreen);
	    mirrorBottomLeft.onClick = null;
	    mirrorBottomLeft.onPress = null;
	    setTimeout(function(){
	    	mirrorBottomLeftGreen.visible = false;
	    	mirrorBottomLeft.onClick=showGameOnLeftWindowClick;
	    	},GAME_TIME[level][levelcount].highight);

		}

	if(win_rand1!=2){
		 mirrorBottomLeft.onClick = null;
		    mirrorBottomLeft.onPress = null;
		setTimeout(function(){
		mirrorBottomLeft.onClick=Reduce2;
		},GAME_TIME[level][levelcount].highight);
	}

	if(win_rand1==3){
		mirrorTopRightGreen.x=MIRROR_TOP_RIGHT_X;
		mirrorTopRightGreen.y=MIRROR_TOP_RIGHT_Y;
	    stage.addChild(mirrorTopRightGreen);
	    mirrorTopRight.onClick=null;
	    mirrorTopRight.onPress=null;
	    setTimeout(function(){
	    	mirrorTopRightGreen.visible = false;
	    	mirrorTopRight.onClick=showGameOnLeftWindowClick;
	    	},GAME_TIME[level][levelcount].highight);
		}
	if(win_rand1!=3){
		mirrorTopRight.onClick=null;
	    mirrorTopRight.onPress=null;
	    setTimeout(function(){
		mirrorTopRight.onClick=Reduce3;
	    },GAME_TIME[level][levelcount].highight);
	}
	if(win_rand1==4){
		mirrorBottomRightGreen.x=MIRROR_BOTTOM_RIGHT_X;
		mirrorBottomRightGreen.y=MIRROR_BOTTOM_RIGHT_Y;
	    stage.addChild(mirrorBottomRightGreen);
	    mirrorBottomRight.onClick=null;
	    mirrorBottomRight.onPress=null;
	    setTimeout(function(){
	    	mirrorBottomRightGreen.visible = false;
	    	mirrorBottomRight.onClick=showGameOnLeftWindowClick;
	    	},GAME_TIME[level][levelcount].highight);
		}
	if(win_rand1!=4){
		mirrorBottomRight.onClick=null;
	    mirrorBottomRight.onPress=null;
	    setTimeout(function(){
		mirrorBottomRight.onClick=Reduce4;
	    },GAME_TIME[level][levelcount].highight);
	}
	if(win_rand2==5){
		mirrorTopLeftGreen1.x=MIRROR_TOP_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
		mirrorTopLeftGreen1.y=MIRROR_TOP_LEFT_Y;

	    stage.addChild(mirrorTopLeftGreen1)
	    mirrorTopLeft1.onClick=null;
	    mirrorTopLeft1.onPress=null;

	    setTimeout(function(){
	    	mirrorTopLeftGreen1.visible = false;
	    	mirrorTopLeft1.onClick=showGameOnRightWindowClick;
	    	},GAME_TIME[level][levelcount].highight);
		}
	if(win_rand2!=5){
		mirrorTopLeft1.onClick=null;
	    mirrorTopLeft1.onPress=null;

	    setTimeout(function(){
		mirrorTopLeft1.onClick=Reduce5;
	    },GAME_TIME[level][levelcount].highight);
	}
		if(win_rand2==6){
			mirrorBottomLeftGreen1.x=MIRROR_BOTTOM_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
			mirrorBottomLeftGreen1.y=MIRROR_BOTTOM_LEFT_Y;
		    stage.addChild(mirrorBottomLeftGreen1)	;
		    mirrorBottomLeft1.onClick=null;
		    mirrorBottomLeft1.onPress=null;
		    setTimeout(function(){
		    	mirrorBottomLeftGreen1.visible = false;
		    	mirrorBottomLeft1.onClick=showGameOnRightWindowClick;
		    	},GAME_TIME[level][levelcount].highight);
			}
		if(win_rand2!=6){
			 mirrorBottomLeft1.onClick=null;
			    mirrorBottomLeft1.onPress=null;
			    setTimeout(function(){
			mirrorBottomLeft1.onClick=Reduce6;
			    },GAME_TIME[level][levelcount].highight);
		}
		if(win_rand2==7){
			mirrorTopRightGreen1.x=MIRROR_TOP_RIGHT_X-1+DIS_LEFT_TO_RIGHT_WINDOW;
			mirrorTopRightGreen1.y=MIRROR_TOP_RIGHT_Y;
		    stage.addChild(mirrorTopRightGreen1);
		    mirrorTopRight1.onClick=null;
		    mirrorTopRight1.onPress=null;
		    setTimeout(function(){
		    	mirrorTopRightGreen1.visible = false;
			    mirrorTopRight1.onClick=showGameOnRightWindowClick;
		    	},GAME_TIME[level][levelcount].highight);

			}
		if(win_rand2!=7){
			mirrorTopRight1.onClick=null;
		    mirrorTopRight1.onPress=null;
		    setTimeout(function(){
			mirrorTopRight1.onClick=Reduce7;
		    },GAME_TIME[level][levelcount].highight);
		}

		if(win_rand2==8){
			mirrorBottomRightGreen1.x=MIRROR_BOTTOM_RIGHT_X+DIS_LEFT_TO_RIGHT_WINDOW;
			mirrorBottomRightGreen1.y=MIRROR_BOTTOM_RIGHT_Y;
		    stage.addChild(mirrorBottomRightGreen1);
		    mirrorBottomRight1.onClick=null;
		    mirrorBottomRight1.onPress=null;
		    setTimeout(function(){
		    	mirrorBottomRightGreen1.visible = false;
		    	mirrorBottomRight1.onClick=showGameOnRightWindowClick;
		    	},GAME_TIME[level][levelcount].highight);

			}
		if(win_rand2!=8){
			mirrorBottomRight1.onClick=null;
		    mirrorBottomRight1.onPress=null;
		    setTimeout(function(){
			mirrorBottomRight1.onClick=Reduce8;
		    },GAME_TIME[level][levelcount].highight);
		}
}

function addKeyBoardInGameView(){
	arrow_right.x=RIGHT_ARROW_X;
	arrow_right.y=RIGHT_ARROW_Y;
	arrow_left.x=LEFT_ARROW_X;
	arrow_left.y=LEFT_ARROW_Y;
	constrainaWire.x=0;
	constrainaWire.y=WIRE_Y;
	new_rect = new Shape();
	new_rect.graphics.beginFill("#ccedff").drawRect(720,0, 304,582);
    stage.addChild(new_rect);

	enterBtn.x=KEYPAD_START_X + KEYPAD_KEY_WIDTH+KEYPAD_KEY_MARGINX; // right of 0
	enterBtn.y=KEYPAD_START_Y + (3 *(KEYPAD_KEY_HEIGHT+KEYPAD_KEY_MARGINY)); // last row

	enter = new Text("Enter", "bold 24px Arial", "#E4F2FF");
	enter.x=enterBtn.x + KEYPAD_KEY_ENTER_TEXT_OFFSETX;
	enter.y=enterBtn.y + KEYPAD_KEY_TEXT_OFFSETY;

    digit = new Array();
    for(var i=9;i>=0;i--){

        var left = 2 - ((3 * Math.ceil(i/3))-i);
        var top = 3 - Math.ceil(i/3);

        if(i==0)
            left = 0 // zero is left aligned

        digit[i] = {};
        digit[i]["img"] = new Bitmap("cal_digit.png");
        digit[i]["img"].x=KEYPAD_START_X + (left *(KEYPAD_KEY_WIDTH+KEYPAD_KEY_MARGINX));
        digit[i]["img"].y=KEYPAD_START_Y + (top *(KEYPAD_KEY_HEIGHT+KEYPAD_KEY_MARGINY));

        digit[i]["txt"] = new Text(i.toString(),BUTTON_TEXT_FONT,BUTTON_TEXT_COLOR);
        digit[i]["txt"].x= digit[i]["img"].x +  KEYPAD_KEY_TEXT_OFFSETX;
        digit[i]["txt"].y= digit[i]["img"].y +  KEYPAD_KEY_TEXT_OFFSETY;

     //   console.log(i + " : "+left+" - "+top+" : "+digit[i]["img"].x+" - "+digit[i]["img"].y);
        stage.addChild(digit[i]["img"],digit[i]["txt"]);
    }

	enter_rect = new Shape();
	enter_rect.graphics.beginFill("#96D3F2").drawRect(755,80,241,55);

	deleteBtn.x=900;
	deleteBtn.y=87;

	deleteText = new Text("Delete", "bold 24px Arial", "#E4F2FF");
	deleteText.x=908;
	deleteText.y=114;

	window_Border.x=WINDOW_BORDER_LEFT_X;
	window_Border.y=WINDOW_BORDER_Y;

	windowGlassBoarder.x=WINDOW_GLASS_BORDER_LEFT_X;
	windowGlassBoarder.y=WINDOW_GLASS_BORDER_LEFT_Y;

	mirrorTopLeft.x=MIRROR_TOP_LEFT_X;
	mirrorTopLeft.y=MIRROR_TOP_LEFT_Y;

	mirrorBottomLeft.x=MIRROR_BOTTOM_LEFT_X;
	mirrorBottomLeft.y=MIRROR_BOTTOM_LEFT_Y;

	mirrorTopRight.x=MIRROR_TOP_RIGHT_X;
	mirrorTopRight.y=MIRROR_TOP_RIGHT_Y;

	mirrorBottomRight.x=MIRROR_BOTTOM_RIGHT_X;
	mirrorBottomRight.y=MIRROR_BOTTOM_RIGHT_Y;		

	window_Border1.x=WINDOW_BORDER_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	window_Border1.y=WINDOW_BORDER_Y;

	windowGlassBoarder1.x=WINDOW_GLASS_BORDER_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	windowGlassBoarder1.y=WINDOW_GLASS_BORDER_LEFT_Y;

	mirrorTopLeft1.x=MIRROR_TOP_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorTopLeft1.y=MIRROR_TOP_LEFT_Y;

	mirrorBottomLeft1.x=MIRROR_BOTTOM_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorBottomLeft1.y=MIRROR_BOTTOM_LEFT_Y;

	mirrorTopRight1.x=MIRROR_TOP_RIGHT_X-1+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorTopRight1.y=MIRROR_TOP_RIGHT_Y;

	mirrorBottomRight1.x=MIRROR_BOTTOM_RIGHT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorBottomRight1.y=MIRROR_BOTTOM_RIGHT_Y;
}

function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}

function randomize(difference){
	max_rand=100;
	if(level==3){
		max_rand=150;
	}
	var x = random(0,max_rand);
	var y = random(0,max_rand);
	valueArray= (y-x==difference || x-y == difference) ? [x,y] : randomize(difference);
	return valueArray;
}

function randomExp(number){
	max_rand=100;
	if(level==3){
		max_rand=150;
	}
	var x = random(0,max_rand);
	var y = random(0,max_rand);
	if(x+y==number)
		return x+'+'+y;
	else if(x-y == number)
		return x+'-'+y;
	else if(y-x == number)
		return y+'-'+x;
	else
	    return randomExp(number);
}

function getExp(a,b){
	var difference = random(a,b);
	var array=randomize(difference);
	return [randomExp(array[0]),randomExp(array[1])];
}

function ReduceLives(e){	
	if(lives>=0){
		if(lives>=1){
    console.log("lives in reducelives "+lives);
    lifeIndicator[lives+1].visible=false;
    lifeIndicator[lives] = new Bitmap(lives+".png");
    lifeIndicator[lives].x  = LIFE_INDICATOR_CIRCLEX;
    lifeIndicator[lives].y  = LIFE_INDICATOR_CIRCLEY;
    livetext.x = LIFE_INDICATOR_TEXTX;
    livetext.text = lives;
    stage.addChild(lifeIndicator[lives]);
		}
		if(lives==0){
			dragger.visible=false;
			dragger1.visible=false;
			arrow_left.onPress=null;
		    arrow_right.onPress=null;
			var playagainButtonred1last = new Shape();
			playagainButtonred1last.graphics.beginFill("#D2546A").drawRect(190,100, 350,130);
			playagainred1last = new Text("You Lose Play Again", "bold 24px helvetica", "#FFFFFF");
			playagainred1last.x=240;
			playagainred1last.y=139;
			btn.x=310;
			btn.y=180;
			playagaindraggerred1last = new Container();
			playagaindraggerred1last.x = 0;
			playagaindraggerred1last.y = 80;
			playagaindraggerred1last.addChild(playagainButtonred1last, playagainred1last,btn);
			stage.addChild(playagaindraggerred1last);
			btn.onClick=NextPlay;
		}
	}
}

function NextPlay(e){
	level=0;
	score=0;
	lives=10;
	val=0;
	levelcount=0;
	stage.removeAllChildren();
	addTitleViewAction(e);
}

function Reduce1(e){	
if(reduce1==0 && lives>=1){
	reduce1++;
	mirrorTopLeftRed.x=MIRROR_TOP_LEFT_X;
	mirrorTopLeftRed.y=MIRROR_TOP_LEFT_Y;
	stage.addChild(mirrorTopLeftRed);
	onWrongClick(e);
}		
}

function Reduce2(e){
	if(reduce2==0 && lives>=1){
		reduce2++;
	mirrorBottomLeftRed.x=MIRROR_BOTTOM_LEFT_X;
	mirrorBottomLeftRed.y=MIRROR_BOTTOM_LEFT_Y;
	stage.addChild(mirrorBottomLeftRed);
	onWrongClick(e);
	}
}

function Reduce3(e){
	if(reduce3==0 && lives>=1){
	reduce3++;
	mirrorTopRightRed.x=MIRROR_TOP_RIGHT_X;
	mirrorTopRightRed.y=MIRROR_TOP_RIGHT_Y;
	stage.addChild(mirrorTopRightRed);
	onWrongClick(e);
	}
}
function Reduce4(e){
	if(reduce4==0 && lives>=1){
		reduce4++;
	mirrorBottomRightRed.x=MIRROR_BOTTOM_RIGHT_X;
	mirrorBottomRightRed.y=MIRROR_BOTTOM_RIGHT_Y;
	stage.addChild(mirrorBottomRightRed);
	onWrongClick(e);
	}
}
function Reduce5(e){
	if(reduce5==0 && lives>=1){
	reduce5++;
	mirrorTopLeftRed1.x=MIRROR_TOP_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorTopLeftRed1.y=MIRROR_TOP_LEFT_Y;
	stage.addChild(mirrorTopLeftRed1);
	onWrongClick(e);
	}
}
function Reduce6(e){
	if(reduce6==0 && lives>=1){
		reduce6++;
	mirrorBottomLeftRed1.x=MIRROR_BOTTOM_LEFT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorBottomLeftRed1.y=MIRROR_BOTTOM_LEFT_Y;
	stage.addChild(mirrorBottomLeftRed1);
	onWrongClick(e);
	}
}
function Reduce7(e){
	if(reduce7==0 && lives>=1){
		reduce7++;
	mirrorTopRightRed1.x=MIRROR_TOP_RIGHT_X-1+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorTopRightRed1.y=MIRROR_TOP_RIGHT_Y;
	stage.addChild(mirrorTopRightRed1);
	onWrongClick(e);
	}
}
function Reduce8(e){
	if(reduce8==0 && lives>=1){
	reduce8++;
	mirrorBottomRightRed1.x=MIRROR_BOTTOM_RIGHT_X+DIS_LEFT_TO_RIGHT_WINDOW;
	mirrorBottomRightRed1.y=MIRROR_BOTTOM_RIGHT_Y;
	stage.addChild(mirrorBottomRightRed1);
	onWrongClick(e);
	
	}
}

function onWrongClick(e){
	stage.update();
	ReduceonWronclick++;
	lives--;
	if(ReduceonWronclick==1){
		SoundJS.play('loss');
		 var playagainButtonred1 = new Shape();
			playagainButtonred1.graphics.beginFill("#D2546A").drawRect(300,100, 150,60);
			playagainred1 = new Text("Try Again", "bold 24px helvetica", "#FFFFFF");
			playagainred1.x=320;
			playagainred1.y=139;
			playagaindraggerred1 = new Container();
			playagaindraggerred1.x = 0;
			playagaindraggerred1.y = 80;
			playagaindraggerred1.addChild(playagainButtonred1, playagainred1);
			stage.addChild(playagaindraggerred1);
            ReduceLives(e);
			setTimeout(function(){
				playagaindraggerred1.visible=false;
			    	},1000);
			
		}
		if(ReduceonWronclick==2){
			SoundJS.play('loss');
			var playagainButtonred2 = new Shape();
			playagainButtonred2.graphics.beginFill("#D2546A").drawRect(275,100, 220,60);
			playagainred2 = new Text(" Let's Try Again", "bold 24px helvetica", "#FFFFFF");
			playagainred2.x=295;
			playagainred2.y=139;
			playagaindraggerred2 = new Container();
			playagaindraggerred2.x = 0;
			playagaindraggerred2.y = 80;
			playagaindraggerred2.addChild(playagainButtonred2, playagainred2);
			stage.addChild(playagaindraggerred2);
            ReduceLives(e);
			setTimeout(function(){
				playagaindraggerred2.visible=false;
				if(lives>=1)
					addGameView(e);
			},1000);

		}
}

function addBalloonMansToMovie(e){
	arrow_right.visible = true;
	arrow_left.visible = true;
	 
	mc = new MovieClip(null, 0, false, {start:0, middle:40});
	stage.addChild(mc);
    console.log("2.Game Levels = " +level+" : "+levelcount+" - " +GAME_TIME[level][levelcount].fallTime);
    
           Tween.get(dragger)
                   .to({y:0}).to({y:BALLON_MAN_DIE_Y}, GAME_TIME[level][levelcount].fallTime);
           Tween.get(dragger1)
                   .to({y:0}).to({y:BALLON_MAN_DIE_Y}, GAME_TIME[level][levelcount].fallTime);
      
   console.log(balloonMaanRight.y);
}

function showGameOnLeftWindowClick(e){
	if(ReduceonWronclick<=1 && lives>=1){
		if(leftval==0 && count==0){
			count=1;;
		}
		if(leftval==0 && count==1){
			count=2;;
		}
		leftval=1;
		if(win_rand1==1){
		mirrorTopLeftGreen.visible = true;	
		}
		if(win_rand1==2){
			mirrorBottomLeftGreen.visible = true;
			}
		if(win_rand1==3){
			mirrorTopRightGreen.visible = true;
			}
		if(win_rand1==4){
			mirrorBottomRightGreen.visible = true;
			}
		console.log("count"+count);
	if(count>=2 && rightval==1){
		SoundJS.play('win');
		stage.removeChild(windowGlassBoarder,mirrorTopLeft,mirrorTopRight,mirrorBottomRight,mirrorBottomLeft,mirrorTopLeftRed,mirrorBottomLeftRed,mirrorTopRightRed,mirrorBottomRightRed);
		openWindow_left.x=OPEN_WINDOW_LEFT_X;
		openWindow_left.y=OPEN_WINDOW_Y;
		openWindow_right.x=OPEN_WINDOW_RIGHT_X;
		openWindow_right.y=OPEN_WINDOW_Y;
		spriteAnimation(e,DIS_LEFT_SPRITE);
		 balloonMaanLeft.x=BALLOONMAN_LEFT_X;
		 balloonMaanLeft.y=BALLOONMAN_Y ;
		 balloonMaanGreen.x=BALLOONMAN_LEFT_X;
		 balloonMaanGreen.y=BALLOONMAN_Y ;
		 balloonMaanYellow.x=BALLOONMAN_LEFT_X;
		 balloonMaanYellow.y=BALLOONMAN_Y ;
		 balloonMaanRed.x=BALLOONMAN_LEFT_X;
		 balloonMaanRed.y=BALLOONMAN_Y ;
		 balloonMaanGreen.visible=false;
		 balloonMaanYellow.visible=false;
		 balloonMaanRed.visible=false;
		state11 = new Text(exp1, "bold 16px Arial", "#1e4a62");
		state11.x=EXP_TEXT_LEFT_X;
		state11.y=EXP_TEXT_Y;
		dragger = new Container();
		dragger.x = 0;
		dragger.y = 0;
		dragger.addChild(balloonMaanLeft,balloonMaanGreen,balloonMaanYellow,balloonMaanRed,state11);
		stage.addChild(dragger);	
		stage.removeChild(windowGlassBoarder1,mirrorTopLeft1,mirrorTopRight1,mirrorBottomRight1,mirrorBottomLeft1);
		openWindow_left1.x=OPEN_WINDOW_LEFT;
		openWindow_left1.y=OPEN_WINDOW_Y;
		openWindow_right1.x=OPEN_WINDOW_RIGHT;
		openWindow_right1.y=OPEN_WINDOW_Y;
		spriteAnimation(e,DIS_RIGHT_SPRITE);
		 balloonMaanRight.x=BALLOONMAN_RIGHT_X;
		 balloonMaanRight.y=BALLOONMAN_Y ;	
		 balloonMaanGreen1.x=BALLOONMAN_RIGHT_X;
		 balloonMaanGreen1.y=BALLOONMAN_Y ;
		 balloonMaanYellow1.x=BALLOONMAN_RIGHT_X;
		 balloonMaanYellow1.y=BALLOONMAN_Y ;
		 balloonMaanRed1.x=BALLOONMAN_RIGHT_X;
		 balloonMaanRed1.y=BALLOONMAN_Y ;
		 balloonMaanGreen1.visible=false;
		 balloonMaanYellow1.visible=false;
		 balloonMaanRed1.visible=false;
		  state22 = new Text(exp2, "bold 16px Arial", "#1e4a62");
		    state22.x=EXP_TEXT_RIGHT_X;
		    state22.y=EXP_TEXT_Y; 
		    dragger1 = new Container();
		    dragger1.x = 0;
		    dragger1.y = 0;
		    dragger1.addChild(balloonMaanRight,balloonMaanGreen1,balloonMaanYellow1,balloonMaanRed1,state22);
		    stage.addChild(dragger1);
	addBalloonMansToMovie(e);
	balloonColorChangeLeft(e);
   
}
	arrow_left.onPress=NextStepLeft;
	arrow_right.onPress=NextStepRight;
	}
}

function showGameOnRightWindowClick(e){
	if(ReduceonWronclick<=1 && lives>=1){
		if(rightval==0 && count==0){
			count=1;;
		}
		if(rightval==0 && count==1){
			count=2;;
		}
		
		rightval=1;
			if(win_rand2==5){
				mirrorTopLeftGreen1.visible = true;
				}
				if(win_rand2==6){
					mirrorBottomLeftGreen1.visible = true;	
					}
				if(win_rand2==7){
					mirrorTopRightGreen1.visible = true;
					}
				if(win_rand2==8){
					mirrorBottomRightGreen1.visible = true;
					}
				console.log("count"+count);
	    if(count>=2 && leftval==1){
	    	SoundJS.play('win');
	    	stage.removeChild(windowGlassBoarder,mirrorTopLeft,mirrorTopRight,mirrorBottomRight,mirrorBottomLeft,mirrorTopLeftRed,mirrorBottomLeftRed,mirrorTopRightRed,mirrorBottomRightRed);
			openWindow_left.x=OPEN_WINDOW_LEFT_X;
			openWindow_left.y=OPEN_WINDOW_Y;
			openWindow_right.x=OPEN_WINDOW_RIGHT_X;
			openWindow_right.y=OPEN_WINDOW_Y;
			spriteAnimation(e,DIS_LEFT_SPRITE);
			 balloonMaanLeft.x=BALLOONMAN_LEFT_X;
			 balloonMaanLeft.y=BALLOONMAN_Y ;
			 balloonMaanGreen.x=BALLOONMAN_LEFT_X;
			 balloonMaanGreen.y=BALLOONMAN_Y ;
			 balloonMaanYellow.x=BALLOONMAN_LEFT_X;
			 balloonMaanYellow.y=BALLOONMAN_Y ;
			 balloonMaanRed.x=BALLOONMAN_LEFT_X;
			 balloonMaanRed.y=BALLOONMAN_Y ;
			 balloonMaanGreen.visible=false;
			 balloonMaanYellow.visible=false;
			 balloonMaanRed.visible=false;
			state11 = new Text(exp1, "bold 16px Arial", "#1e4a62");
			state11.x=EXP_TEXT_LEFT_X;
			state11.y=EXP_TEXT_Y;
			dragger = new Container();
			dragger.x = 0;
			dragger.y = 0;
			dragger.addChild(balloonMaanLeft,balloonMaanGreen,balloonMaanYellow,balloonMaanRed,state11);
			stage.addChild(dragger);	
			stage.removeChild(windowGlassBoarder1,mirrorTopLeft1,mirrorTopRight1,mirrorBottomRight1,mirrorBottomLeft1);
			openWindow_left1.x=OPEN_WINDOW_LEFT;
			openWindow_left1.y=OPEN_WINDOW_Y;
			openWindow_right1.x=OPEN_WINDOW_RIGHT;
			openWindow_right1.y=OPEN_WINDOW_Y;
			spriteAnimation(e,DIS_RIGHT_SPRITE);
			 balloonMaanRight.x=BALLOONMAN_RIGHT_X;
			 balloonMaanRight.y=BALLOONMAN_Y ;	
			 balloonMaanGreen1.x=BALLOONMAN_RIGHT_X;
			 balloonMaanGreen1.y=BALLOONMAN_Y ;
			 balloonMaanYellow1.x=BALLOONMAN_RIGHT_X;
			 balloonMaanYellow1.y=BALLOONMAN_Y ;
			 balloonMaanRed1.x=BALLOONMAN_RIGHT_X;
			 balloonMaanRed1.y=BALLOONMAN_Y ;
			 balloonMaanGreen1.visible=false;
			 balloonMaanYellow1.visible=false;
			 balloonMaanRed1.visible=false;
			  state22 = new Text(exp2, "bold 16px Arial", "#1e4a62");
			    state22.x=EXP_TEXT_RIGHT_X;
			    state22.y=EXP_TEXT_Y; 
			    dragger1 = new Container();
			    dragger1.x = 0;
			    dragger1.y = 0;
			    dragger1.addChild(balloonMaanRight,balloonMaanGreen1,balloonMaanYellow1,balloonMaanRed1,state22);
			    stage.addChild(dragger1);
	    	addBalloonMansToMovie(e);
	    	balloonColorChangeRight(e);
	    }
	    arrow_left.onPress=NextStepLeft;
	    arrow_right.onPress=NextStepRight;

	}
}

function balloonColorChangeRight(e){
    setInterval(function(){
	  	if(dragger.y >=BALLON_MAN_DIE_Y && num==0){
   		showLoseOnLate(e);}	    	  
   	},100);
  
  setInterval(function(){
	  	if(dragger.y <=0 ){
	  		balloonMaanLeft.visible=true;
	  		balloonMaanRight.visible=true;
	  		state11.color="#4d5f04";
	  		state22.color="#4d5f04"
	  		
		}	    	  
	},500);
  setInterval(function(){
	  	if(dragger1.y >=0 && dragger1.y <=80 ){
	  		balloonMaanLeft.visible=false;
	  		balloonMaanRight.visible=false;
	  		balloonMaanGreen.visible=true;
	  		balloonMaanGreen1.visible=true;
	  	scale1=1;
	  state11.color="#4d5f04";
	  state22.color="#4d5f04";
	  		
		}	    	  
	},500);
  setInterval(function(){
  	  	if(dragger1.y >=80 && dragger1.y <=160 && dragger.y !=0){
  	  		balloonMaanLeft.visible=false;
  	  		balloonMaanRight.visible=false;
  	  		balloonMaanYellow.visible=true;
  	  		balloonMaanYellow1.visible=true;
  	  	scale1=2;
  	  state11.color="#616006";
  	  state22.color="#616006";
  	  		
   		}	    	  
   	},500);
  setInterval(function(){
  	  	if(dragger1.y >=160 && dragger1.y <=200 && dragger.y !=0){
  	  		balloonMaanLeft.visible=false;
  	  		balloonMaanRight.visible=false;
  	  		balloonMaanRed.visible=true;
  	  		balloonMaanRed1.visible=true;
  	  	scale1=3;
  	  state11.color="#831423";
  	  state22.color="#831423";
  	
   		}	    	  
   	},500);  
}

function balloonColorChangeLeft(e){
	setInterval(function(){
	  	if(dragger.y >=255 && num==0){
  		showLoseOnLate(e);}	    	  
  	},1000);
   
   setInterval(function(){
	  	if(dragger.y <=0 ){
	  		balloonMaanLeft.visible=true;
	  		balloonMaanRight.visible=true;
	  		state11.color="#4d5f04";
	  		state22.color="#4d5f04"
	  		
 		}	    	  
 	},500);
   
   
   setInterval(function(){
 	  	if(dragger.y >=0 && dragger.y <=80 ){
 	  		balloonMaanLeft.visible=false;
 	  		balloonMaanRight.visible=false;
 	  		balloonMaanGreen.visible=true;
 	  		balloonMaanGreen1.visible=true;
 	  		scale=1;
 	  		state11.color="#4d5f04";
 	  		state22.color="#4d5f04"
 	  		
  		}	    	  
  	},500);
     
     setInterval(function(){
	  	  	if(dragger.y >=80 && dragger.y <=160 && dragger1.y !=0 ){
	  	  		balloonMaanLeft.visible=false;
	  	  		balloonMaanRight.visible=false;
	  	  		balloonMaanYellow.visible=true;
	  	  		balloonMaanYellow1.visible=true;
	  	  	scale=2;
	  	  state11.color="#616006";
	  	state22.color="#616006";
	  	  		
	   		}	    	  
	   	},500);
     
     setInterval(function(){
	  	  	if(dragger.y >=160 && dragger.y <=200 && dragger1.y !=0){
	  	  		balloonMaanLeft.visible=false;
	  	  		balloonMaanRight.visible=false;
	  	  		balloonMaanRed.visible=true;
	  	  		balloonMaanRed1.visible=true;
	  	  		scale=3;
	  	  		state11.color="#831423";
	  	  		state22.color="#831423";
	   		}	    	  
	   	},500);  	  
}

function spriteAnimation(e,distanceFromX){
	var ss = new SpriteSheet({
		"animations":
		{
			"run": [1,4,"jump",1],
			"jump": [4, 4]
	
			},
			"images": ["windowSprite.png"],
			"frames":
				{
					"height": 146,
					"width":178,
					"regX": 0,
					"regY": 0,
					"count": 5
				}
		});
	var grant1 = new BitmapAnimation(ss);
	 grant1.x = distanceFromX;
	 grant1.y = 7;
	 stage.addChild(grant1);
	 grant1.gotoAndPlay("run");
}

function showLoseOnLate(e){
    arrow_left.onPress=null;
    arrow_right.onPress=null;
	SoundJS.play('openwindow');
	mc.stop();
	if(demo==0){
	lives--;
	ReduceLives(e);
	}
	stage.removeChild(mc);
	mc.y=0;
	dragger.y=0;
	dragger1.y=0
	console.log(mc.y,dragger.y,dragger1.y);
	num++;
	k++;
	keyboradValue++;
	balloonMaanLeft.visible=false;
	balloonMaanRight.visible=false;
	state22.visible=false;
	state11.visible=false;
	stage.removeChild(balloonMaanLeft,balloonMaanRight,state22,state11);
	balloonMaan_burstLeft.x=BALLOONMAN_LEFT_X;
	balloonMaan_burstLeft.y=400;
	balloonMaan_burstRight.x=BALLOONMAN_RIGHT_X;
	balloonMaan_burstRight.y=400;
	if(l==0 && r==0 && lives>=1){		
		continueb.visible=true;
		balloonMaan_burstLeft.visible=true;
		balloonMaan_burstRight.visible=true;
		balloonMaanGreen.visible=false;
		balloonMaanGreen1.visible=false;
		balloonMaanYellow.visible=false;
		balloonMaanYellow1.visible=false;
		balloonMaanRed.visible=false;
		balloonMaanRed1.visible=false;
		stage.addChild(balloonMaan_burstLeft,balloonMaan_burstRight);
		balloonMaan_burstLeft.visible=true;
		balloonMaan_burstRight.visible=true;
		balloonMaan_burstLeft.alpha=1;
		balloonMaan_burstRight.alpha=1;
		Tween.get(balloonMaan_burstLeft, {loop:false}, true) // get a new tween targeting circle
		.to({x:BALLOONMAN_LEFT_X,y:400,alpha:0.01},1000,Ease.get(1)) // tween x/y/alpha properties over 1s (1000ms) with ease out
		
		Tween.get(balloonMaan_burstRight, {loop:false}, true) // get a new tween targeting circle
		.to({x:BALLOONMAN_RIGHT_X,y:400,alpha:0.01},1000,Ease.get(1)) // tween x/y/alpha properties over 1s (1000ms) with ease out
		
		var playagainButtonredl = new Shape();
		playagainButtonredl.graphics.beginFill("#D2546A").drawRect(225,120, 280,60);
		playagainredl = new Text(" You Lose Play Again", "bold 24px helvetica", "#FFFFFF");
		playagainredl.x=240;
		playagainredl.y=159;
		playagaindraggerredl = new Container();
		playagaindraggerredl.x = 0;
		playagaindraggerredl.y = 180;
		playagaindraggerredl.addChild(playagainButtonredl, playagainredl);
		stage.addChild(playagaindraggerredl);
		stage.removeChild(dragger);
		stage.removeChild(dragger1);
		
		setTimeout(function(){
			continueb.x=CONTINUE_BUTTON_X;
			continueb.y=CONTINUE_BUTTON_Y;
			stage.addChild(continueb);
			if(demo==1){
				playagaindraggerreddemo2.visible=false;
				playagaindraggerreddemo4.visible=false;
				demoval++;
			continueb.onClick=Reload;
			}
			else{
			continueb.onClick=addGameView;
			}
		    	},2000);	
	}
	if(l==1 && r==0 && lives>=1){
		continueb.visible=true;
		balloonMaan_burstLeft.visible=true;
		balloonMaanGreen.visible=false;
		balloonMaanYellow.visible=false;
		balloonMaanRed.visible=false;
		stage.addChild(balloonMaan_burstLeft);
		balloonMaan_burstLeft.visible=true;
		balloonMaan_burstLeft.alpha=1;
		Tween.get(balloonMaan_burstLeft, {loop:false}, true) // get a new tween targeting circle
		.to({x:BALLOONMAN_LEFT_X,y:400,alpha:0.01},1000,Ease.get(1)) 
		var playagainButtonredl = new Shape();
		playagainButtonredl.graphics.beginFill("#D2546A").drawRect(225,120, 280,60);
		playagainredl = new Text(" You Lose Play Again", "bold 24px helvetica", "#FFFFFF");
		playagainredl.x=240;
		playagainredl.y=159;
		playagaindraggerredl = new Container();
		playagaindraggerredl.x = 0;
		playagaindraggerredl.y = 180;
		playagaindraggerredl.addChild(playagainButtonredl, playagainredl);
		stage.addChild(playagaindraggerredl);
		stage.removeChild(dragger);
		stage.removeChild(dragger1);
	
		setTimeout(function(){
			continueb.x=CONTINUE_BUTTON_X;
			continueb.y=CONTINUE_BUTTON_Y;
			stage.addChild(continueb);
			if(demo==1){
				playagaindraggerreddemo2.visible=false;
				playagaindraggerreddemo4.visible=false;
				demoval++;
				continueb.onClick=Reload;
				}
			else{
			continueb.onClick=addGameView;
			}
		    	},2000);	
		
		}
	if(l==0 && r==1 && lives>=1){
		continueb.visible=true;
		balloonMaan_burstRight.visible=true;
		balloonMaanGreen1.visible=false;
		balloonMaanYellow1.visible=false;
		balloonMaanRed1.visible=false;
		stage.addChild(balloonMaan_burstRight);
		balloonMaan_burstRight.visible=true;
		balloonMaan_burstRight.alpha=1;
		Tween.get(balloonMaan_burstRight, {loop:false}, true) // get a new tween targeting circle
		.to({x:BALLOONMAN_RIGHT_X,y:400,alpha:0.01},1000,Ease.get(1)) // tween x/y/alpha properties over 1s (1000ms) with ease out
		
		var playagainButtonredl = new Shape();
		playagainButtonredl.graphics.beginFill("#D2546A").drawRect(225,120, 280,60);
		
		playagainredl = new Text(" You Lose Play Again", "bold 24px helvetica", "#FFFFFF");
		playagainredl.x=240;
		playagainredl.y=159;
	    
		playagaindraggerredl = new Container();
		playagaindraggerredl.x = 0;
		playagaindraggerredl.y = 180;
		playagaindraggerredl.addChild(playagainButtonredl, playagainredl);
		stage.addChild(playagaindraggerredl);
		stage.removeChild(dragger);
		stage.removeChild(dragger1);
		
		setTimeout(function(){
			continueb.x=CONTINUE_BUTTON_X;
			continueb.y=CONTINUE_BUTTON_Y;
			stage.addChild(continueb);
			continueb.onClick=addGameView;
		    	},2000);	
	}	
}

function NextStepLeft(e){	
	if(valueArray[0]>=valueArray[1]){
		pos=1;	
		arrowLeft_hover.x=LEFT_ARROW_X;
		arrowLeft_hover.y=LEFT_ARROW_Y;
		stage.addChild(arrowLeft_hover);
		arrow_left.visible=false;	
		setTimeout(function(){
			arrowLeft_hover.visible = false;
			arrowLeftGreen.x=LEFT_ARROW_X;
			arrowLeftGreen.y=LEFT_ARROW_Y;
			stage.addChild(arrowLeftGreen);		
	    	},100);
		balloonMaanGreen.visible=true;
		clickVal++;
		count++;
		l++;
		keyboradValue++;
		exp2=valueArray[0];
		arrow_right.onPress = null;
		arrow_left.onPress = null;
		arrowLeftRed.onPress = null;
		arrowRightRed.onPress = null;
		stage.removeChild(arrow_left);
		dragger1.visible = false;
		
			if(level==1){
				gen_rand=Math.floor((Math.random()*40)+1)-20;
			}
			if(level==2){
				gen_rand=Math.floor((Math.random()*80)+1)-40;
					}
			if(level==3){
				gen_rand=Math.floor((Math.random()*199)+1)-100;
					}
		final_value=valueArray[0]+gen_rand;
		var newexp;
		if (gen_rand >= 0)
		{
			newexp = "+" + gen_rand;
		}
		else
		{
			newexp = gen_rand.toString();
		}
		balloonArrowLeft.x=LEFT_RAND_POPUP_X;
		balloonArrowLeft.y=LEFT_RAND_POPUP_Y;
		dragger.removeChild(state11);
		var statenew = new Text(newexp, "bold 22px Arial", "#FFFFFF");
		statenew.x=175;
		statenew.y=165;
		state11 = new Text(exp2, "bold 16px Arial", "#1e4a62");
		state11.x=244;
		state11.y=EXP_TEXT_Y;
		dragger.addChild(balloonArrowLeft, statenew,state11);	
		stage.addChild(dragger);
		onKeyBoradPress(e);	
		enterBtn.onPress =showResult;
		deleteBtn.onPress =DeleteNumber;
	}
	else {
		if(red==0){
		arrow_left.visible = false;
		arrowLeft_hover.x=LEFT_ARROW_X;
		arrowLeft_hover.y=LEFT_ARROW_Y;
		stage.addChild(arrowLeft_hover);
		arrow_left.visible=false;
		setTimeout(function(){
			arrowLeft_hover.visible = false;
			arrowLeftRed.x=LEFT_ARROW_X;
			arrowLeftRed.y=LEFT_ARROW_Y;
			stage.addChild(arrowLeftRed);
	    	},100);
		lives--;
		ReduceLives(e);
		red++;
		arrowLeftRed.onPress=NextStepLeft;
		console.log(lives);
		}
		else{
			arrow_left.visible = false;
			arrowLeftRed.visible=false;
			arrowLeftRed_hover.x=LEFT_ARROW_X;
			arrowLeftRed_hover.y=LEFT_ARROW_Y;
			stage.addChild(arrowLeftRed_hover);
			arrow_left.visible=false;
			setTimeout(function(){
				arrowLeftRed.visible=true;
				arrowLeftRed_hover.visible=false;		
		    	},100);
			lives--;
			ReduceLives(e);
			red++;
			arrowLeftRed.onPress=NextStepLeft;
			console.log(lives);	
			
		}
	}
	
}
function NextStepRight(e){
	if(valueArray[1]>valueArray[0]){
		pos=1;
		arrowRight_hover.x=RIGHT_ARROW_X;
		arrowRight_hover.y=RIGHT_ARROW_Y;
		stage.addChild(arrowRight_hover);
		arrow_right.visible=false;
		setTimeout(function(){
			arrowRight_hover.visible = false;
			arrowRightGreen.x=RIGHT_ARROW_X;
			arrowRightGreen.y=RIGHT_ARROW_Y;
			stage.addChild(arrowRightGreen);		
	    	},100);
		clickVal++;
		balloonMaanGreen1.visible=true;	
		count++;
		keyboradValue++;
		r++;
		exp2=valueArray[1];
		arrow_right.visible = false;
		arrow_right.onPress = null;
		arrow_left.onPress = null;
		arrowLeftRed.onPress = null;
		arrowRightRed.onPress = null;
		stage.removeChild(arrow_right);
		dragger.visible = false;
		balloonMaanRight.x=BALLOONMAN_RIGHT_X;
		balloonMaanRight.y=BALLOONMAN_Y ;		    
		    if(level==1){
				gen_rand=Math.floor((Math.random()*40)+1)-20;
					}
					
					if(level==2){
						gen_rand=Math.floor((Math.random()*80)+1)-40;
							}
					
					if(level==3){
						gen_rand=Math.floor((Math.random()*199)+1)-100;
							}
					
			final_value=valueArray[1]+gen_rand;
			
			var newexp;
			if (gen_rand >= 0)
			{
				newexp = "+" + gen_rand;
			}
			else
			{
				newexp = gen_rand.toString();
			}
			
			balloonArrowRight.x=RIGHT_RAND_POPUP_X;
			balloonArrowRight.y=RIGHT_RAND_POPUP_Y;
			dragger1.removeChild(state22);
			var statenew = new Text(newexp, "bold 22px Arial", "#FFFFFF");
			statenew.x=525;
			statenew.y=165;
			state22 = new Text(exp2, "bold 16px Arial", "#1e4a62");
		    state22.x=463;
		    state22.y=EXP_TEXT_Y;
			dragger1.addChild(balloonArrowRight, statenew,state22);	
			stage.addChild(dragger1);
			onKeyBoradPress(e);
			enterBtn.onPress =showResult;
			deleteBtn.onPress =DeleteNumber;
	}
	else {	
		if(red==0){
		arrow_right.visible = false;
		arrowRight_hover.x=RIGHT_ARROW_X;
		arrowRight_hover.y=RIGHT_ARROW_Y;
		stage.addChild(arrowRight_hover);
		arrow_right.visible=false;
		setTimeout(function(){
			arrowRight_hover.visible = false;
			arrowRightRed.x=RIGHT_ARROW_X;
			arrowRightRed.y=RIGHT_ARROW_Y;
			stage.addChild(arrowRightRed);
	    	},100);
		
		red++;
		lives--;
		ReduceLives(e);
		arrowRightRed.onPress=NextStepRight;
		}
		else {
			arrow_right.visible = false;
			arrowRightRed.visible=false;
			arrowRightRed_hover.x=RIGHT_ARROW_X;
			arrowRightRed_hover.y=RIGHT_ARROW_Y;
			stage.addChild(arrowRightRed_hover);
			arrow_right.visible=false;
			setTimeout(function(){
				arrowRightRed.visible=true;
				arrowRightRed_hover.visible=false;		
		    	},100);	
			lives--;
			ReduceLives(e);
			red++;
			arrowRightRed.onPress=NextStepRight;
		}
		}
}

function onKeyBoradPress(e){
	digit[9]["img"].onPress = update9;
	digit[8]["img"].onPress = update8;
	digit[7]["img"].onPress = update7;
	digit[6]["img"].onPress = update6;
	digit[5]["img"].onPress = update5;
	digit[4]["img"].onPress = update4;
	digit[3]["img"].onPress = update3;
	digit[2]["img"].onPress = update2;
	digit[1]["img"].onPress = update1;
	digit[0]["img"].onPress =update0;
}
function printEnterValue(e){
	key12 = new Shape();
    key12.graphics.beginFill("#96D3F2").drawRoundRectComplex(780,0, 80,50,0,0,0,0);
    statekey12 = new Text(getvalue, "bold 34px Arial", "#1e4a62");
    statekey12.x=780;
    statekey12.y=40;
	newdraggerkey129 = new Container();
	newdraggerkey129.x = 0;
	newdraggerkey129.y = 80;
	newdraggerkey129.addChild(key12, statekey12);
	stage.addChild(newdraggerkey129);
}

function updateOnClick(e,i){
	if((getvalue<MAX_KEYBOARD_INPUT)&&(getvalue>MIN_KEYBOARD_INPUT) && clickVal==1 && result==0 ){
		updatekey(e,i);
		if(pos==-1){
			getvalue=getvalue*10-i;
		}
		else{
			getvalue=getvalue*10+i;	
		}
		printEnterValue(e);
		}	 
}

function update9(e){
 updateOnClick(e,9);
}

function update8(e){
  updateOnClick(e,8);
}

function update7(e){
  updateOnClick(e,7);
}

function update6(e){
 updateOnClick(e,6);
}	

function update5(e){
 updateOnClick(e,5);
}

function update4(e){	
 updateOnClick(e,4);
}

function update3(e){
 updateOnClick(e,3);
}

function update2(e){
updateOnClick(e,2);	
}

function update1(e){
 updateOnClick(e,1);
}

function update0(e){
 updateOnClick(e,0);
}

function updatekey(e,i){
    cal_digit_onClick.x=digit[i]["img"].x;
    cal_digit_onClick.y=digit[i]["img"].y;
    stage.addChild(cal_digit_onClick);
    digit[i]["img"].visible = false;
    setTimeout(function(i){
        cal_digit_onClick.visible = false;
        digit[i]["img"].visible = true;
    },1,i);
}


function Reload(e){
	
	startB.visible=true;
	demoB.visible=true;
	mirrorBottomLeftGreen.visible = true;
	mirrorTopRightGreen1.visible = true;
	i10.visible=true;
	stage.removeChild(dragger,dragger1,mc);
	stage.removeAllChildren();
	stage.update();
	demo=0;	
	score=0;
	lives=10;
	k=0;
	val=0;
	levelcount=0;
	level=1;
	getvalue=0;
	keyboradValue=0;
	clickVal=0;
	lives=10;
	l=0;
	r=0;
	left=0;
	score=0;
	loseval=0;
	enval=0;
	demoval=0;
	mirrorBottomLeftGreen.visible = true;
	mirrorTopRightGreen1.visible = true;
	credits = null;
	count1=0;
	num=0;
	addTitleView();
}

function showMessagefirst(res){
	stage.removeChild(scoreheading);
	 var scoreheading = new Text(res, "bold 22px Arial", "#6D4A36");
		scoreheading.x=SCORE_HEADING_X;
		scoreheading.y=SCORE_HEADING_Y;
		stage.addChild(scoreheading);
	 var playagainButton1 = new Shape();
		playagainButton1.graphics.beginFill("#D2546A").drawRect(143,181, 450,60);
		playagain1 = new Text("wow! you are fast Let's try next one", "bold 24px helvetica", "#FFFFFF");
		playagain1.x=163;
		playagain1.y=220;
		playagaindragger1 = new Container();
		playagaindragger1.x = 0;
		playagaindragger1.y = 100;
		playagaindragger1.addChild(playagainButton1, playagain1);
		stage.addChild(playagaindragger1);
}

function showMessageSecond(res){
	stage.removeChild(scoreheading);
	var scoreheading = new Text(res, "bold 22px Arial", "#6D4A36");
	scoreheading.x=SCORE_HEADING_X;
	scoreheading.y=SCORE_HEADING_Y;
	stage.addChild(scoreheading);
	var playagainButton1 = new Shape();
	playagainButton1.graphics.beginFill("#D2546A").drawRect(180,181, 360,60);
	playagain1 = new Text("Great job! Let's try next one", "bold 24px helvetica", "#FFFFFF");
	playagain1.x=200;
	playagain1.y=220;
	playagaindragger1 = new Container();
	playagaindragger1.x = 0;
	playagaindragger1.y = 100;
	playagaindragger1.addChild(playagainButton1, playagain1);
	stage.addChild(playagaindragger1);
}
function showMessageThird(res){
	stage.removeChild(scoreheading);
	var scoreheading = new Text(res, "bold 22px Arial", "#6D4A36");
	scoreheading.x=SCORE_HEADING_X;
	scoreheading.y=SCORE_HEADING_Y;
	stage.addChild(scoreheading);
 var playagainButton1 = new Shape();
	playagainButton1.graphics.beginFill("#D2546A").drawRect(190,181, 340,60);
	playagain1 = new Text("phew! it was a close one", "bold 24px helvetica", "#FFFFFF");
	playagain1.x=217;
	playagain1.y=220;
	playagaindragger1 = new Container();
	playagaindragger1.x = 0;
	playagaindragger1.y = 100;
	playagaindragger1.addChild(playagainButton1, playagain1);
	stage.addChild(playagaindragger1);
}

function checkLevelcount(levelcount,level){
	if(levelcount==5){
		val=0;
		 levelcount=0;
		 keyboradValue=0;
		 keyValue=0;
		 demo=0;
		 level=level;
		 console.log("level"+level);
		 console.log("levelcount"+levelcount);
		setTimeout(function(){
			addTitleViewAction();
		    	},1000);
		}
		else{
			continueb.x=CONTINUE_BUTTON_X;
			continueb.y=CONTINUE_BUTTON_Y;
			stage.addChild(continueb);
			if(demo==1){
				demoval++;
				continueb.onClick=Reload;
			}
			else{
			continueb.onClick=addGameView;
			}
		}
}
function showResult(e){
	if(keyboradValue!=2 && clickVal==1){
	pos=1;
	enterBtn_onClick.x=842;
	enterBtn_onClick.y=350;
    stage.addChild(enterBtn_onClick);
    enterBtn.visible = false;
    setTimeout(function(){
    	enterBtn_onClick.visible = false;
    	enterBtn.visible = true;
    	},1);
	if((getvalue==final_value || getvalue==-final_value) && k==0){
		result=1;
		continueb.visible=true;
		SoundJS.play('openwindow');
		mc.stop();
		Tween.removeTweens(dragger);
		Tween.removeTweens(dragger1);
		stage.removeChild(dragger);
		stage.removeChild(dragger1);
		stage.update();
		 dragger.visible=false;
		 dragger1.visible=false;
		 balloonMaan_burstLeft.visible=false;
		 balloonMaan_burstRight.visible=false;
		keyboradValue++;
		stage.removeChild(balloonMaanGreen,balloonMaanGreen1,balloonMaanYellow,balloonMaanYellow1,balloonMaanRed,balloonMaanRed1);
		var max=0;
		if(scale<=scale1){
			max=scale1;
		}
		else{
			max=scale;
		}
		if(level==1){
			if(max==1){
				levelcount++;
				 scoreContainer.visible=false;
				 score=score+100*3;
			 var res = "Score :".concat(score); 
			showMessagefirst(res);
			checkLevelcount(levelcount,level);	
			 }
			if(max==2){
				levelcount++;
					scoreContainer.visible=false;
				 score=score+100*2;
				 var res = "Score :".concat(score); 
				 showMessageSecond(res);
				 checkLevelcount(levelcount,level);
				 }
			if(max==3){
				levelcount++;
					scoreContainer.visible=false;
				 score=score+100*1;
				 var res = "Score :".concat(score); 
				 showMessageThird(res);
				 checkLevelcount(levelcount,level);	
				 }
		}
		
		if(level==2){
			if(max==1){
				levelcount++;
					scoreContainer.visible=false;
				 score=score+125*3;
				 var res = "Score :".concat(score); 
					showMessagefirst(res);
					checkLevelcount(levelcount,level);
				 }
				if(max==2){
						levelcount++;
						scoreContainer.visible=false;
						score=score+125*2;
						 showMessageSecond(res);
						 checkLevelcount(levelcount,level);
					 }
				if(max==3){
						levelcount++;
							scoreContainer.visible=false;
						 score=score+125*1;
						 console.log("level=="+level);
						 console.log("max=="+max);
						 showMessageThird(res);
					//stage.addChild(playagaindragger11);
					checkLevelcount(levelcount,level);
					 }
		}
		
		if(level==3){
			if(max==1){
				levelcount++;
				 scoreContainer.visible=false;
				score=score+150*3;
				 var res = "Score :".concat(score); 
					showMessagefirst(res);
					checkLevelcount(levelcount,level);	
				 }
				if(max==2){
					levelcount++;
					 scoreContainer.visible=false;
					score=score+150*2;
					 showMessageSecond(res);
					 checkLevelcount(levelcount,level);		 
					 }
				if(max==3){
					levelcount++;
					 scoreContainer.visible=false;
					score=score+150*1;
					 var res = "Score :".concat(score); 
					 showMessageThird(res);
					 checkLevelcount(levelcount,level);
				}
		}
		stage.removeChild(balloonMaanRed,balloonMaanRed1,balloonMaanGreen,balloonMaanGreen1,balloonMaanYellow,balloonMaanYellow1);
		stage.update();	
		balloonMaanRed.visible=false;
		balloonMaanRed1.visible=false;	
		balloonMaanGreen.visible=false;
		balloonMaanGreen1.visible=false;
		balloonMaanYellow.visible=false;
		balloonMaanYellow1.visible=false;					
	}
	else{
		if(demo==0){
		lives--;
		ReduceLives(e);
		if(lives==0){
			dragger.visible=false;
			dragger1.visible=false;
		}
		SoundJS.play('loss');
		console.log(lives);
		getvalue=0;		
		var key12 = new Shape();
	    key12.graphics.beginFill("#96D3F2").drawRoundRectComplex(780,0, 80,50,0,0,0,0);
	    var statekey12 = new Text(getvalue, "bold 34px Arial", "#1e4a62");
	    statekey12.x=780;
	    statekey12.y=40;
		newdraggerkeynew1 = new Container();
		newdraggerkeynew1.x = 0;
		newdraggerkeynew1.y = 80;
		newdraggerkeynew1.addChild(key12, statekey12);
		stage.addChild(newdraggerkeynew1);	
		}	
	}
	}
}

function DeleteNumber(e){
	delete_click.x=900;
	    deleteBtn.visible = false;
	    setTimeout(function(){
	    	delete_click.visible = false;
	    	deleteBtn.visible = true;
	    	},1);
	getvalue=0;
	var key12 = new Shape();
    key12.graphics.beginFill("#96D3F2").drawRoundRectComplex(780,0, 100,50,0,0,0,0);
    var statekey12 = new Text(getvalue, "bold 34px Arial", "#1e4a62");
    statekey12.x=780;
    statekey12.y=40;
	newdraggerkeydel = new Container();
	newdraggerkeydel.x = 0;
	newdraggerkeydel.y = 80;
	newdraggerkeydel.addChild(key12, statekey12);
	stage.addChild(newdraggerkeydel);	
}

function keyEvent(e) {
	var key = e.keyCode || e.which;
    if(key == 8)
        e.preventDefault();
	  console.log("checkpoint 2 : "+key);
	  if(key==173 || key==189){
		  pos=-1;
		 var key12min = new Shape();
  	    key12min.graphics.beginFill("#96D3F2").drawRoundRectComplex(780,0, 80,50,0,0,0,0);
  	    var statekey12min = new Text("-", "bold 34px Arial", "#1e4a62");
  	    statekey12min.x=780;
  	    statekey12min.y=40;
  		newdraggerkey120min = new Container();
  		newdraggerkey120min.x = 0;
  		newdraggerkey120min.y = 80;
  		newdraggerkey120min.addChild(key12min, statekey12min);
  		stage.addChild(newdraggerkey120min);	
	  }
	  if(key==46){
		  DeleteNumber(e);	  
    }
	  if(key==37 && count==2 && demo==0){
		  NextStepLeft(e);	  
    }
	  if(key==39 && count==2 && demo==0){
		  console.log("count"+count);
		  NextStepRight(e);
    }
	  if(key==37 && demo==1 && checkdemo==0 && democheck==1){
		  rightclickval++;
		  NextStepLeftDemo(e);
    }
	  if(key==39 && demo==1 && checkdemo==0 && democheck==1 && rightclickval==0){
		  console.log(checkdemo);
		  lose(e);	  
    }
	  if(key==13 && keyboradValue==0 && keyValue==0 && val==0 && demo==0){
		  tweenTitleView(e);	  
    } 
	  if(((key>=48 && key<=57)||(key>=96 && key<=105)) && clickVal==1){
          updatekey(e,key - ((key>57)?96:48));
	  var keychar = String.fromCharCode(key);
	  if (key == exampleKey) {
	    metaChar = true;
	  }
	  if (key != exampleKey) {
	    if (metaChar) {
	      alert("Combination of metaKey + " + keychar);
	      metaChar = false;
	    } else {
	    	var temp=((key>57)?96:48);
		      var number = key-temp;
		      var final_string = final_value.toString();
		      if((getvalue<MAX_KEYBOARD_INPUT)&&(getvalue>MIN_KEYBOARD_INPUT) && clickVal==1 && result==0){
		    	  ct++;
		    	  if(pos==-1){
		    		  getvalue=getvalue*10-number;
		    	  }
		    	  else{
		    	  getvalue=getvalue*10+number;
		    	  }
		    	  printEnterValue(e);
		      }
	    }
	  }
	}
	  if(key==13 && demo==1 && left==1 && demoval==0){
		  playagaindraggerreddemo4.visible=false;
		  key=0;
		  showResultdemo(e);
	  }
	  if(key==13 && demoval==1){
		  Reload(e);
	  }
	  if(key==13 && keyboradValue==1 && num==0 && demo==0){
		  key=0;
  	  showResult(e);
  	  if(lives==0){
		var playagainButtonred1last = new Shape();
		playagainButtonred1last.graphics.beginFill("#D2546A").drawRect(190,100, 350,130);
		playagainred1last = new Text("You Lose Play Again", "bold 24px helvetica", "#FFFFFF");
		playagainred1last.x=240;
		playagainred1last.y=139;
		btn.x=310;
		btn.y=180;
		playagaindraggerred1last = new Container();
		playagaindraggerred1last.x = 0;
		playagaindraggerred1last.y = 80;
		playagaindraggerred1last.addChild(playagainButtonred1last, playagainred1last,btn);
		stage.addChild(playagaindraggerred1last);
		btn.onClick=NextPlay;
  		  
  	  }
    }
	  if(key==13 && levelcount>=1 && levelcount<=4 && keyboradValue==2 && num==0 && val==1){
		  key=0;
		  console.log('val='+val);
		 addGameView();
	    }
	  if(key==13 && num==1 && demo==0 && lives>=1 && levelcount!=5){
		  key=0;
		  console.log('num='+num);
		  addGameView();
	  }
	  if(key==8 && keyboradValue==1){
	  	  backspaceAction(e);
	    }
	  if(key==8 && demo==1){
	  	  backspaceAction(e);
	    }
	  	  
}

function metaKeyUp (e) {
	  var key = e.keyCode || e.which;
	  if (key == exampleKey) {
	    metaChar = false;
	  }
	}
	
function backspaceAction(e){
	getvalue=getvalue/10;
	getvalue=parseInt(getvalue);
	if(getvalue==0){
		pos=1;
	}
	var key12 = new Shape();
    key12.graphics.beginFill("#96D3F2").drawRoundRectComplex(780,0, 120,50,0,0,0,0);
    var statekey12 = new Text(getvalue, "bold 34px Arial", "#1e4a62");
    statekey12.x=780;
    statekey12.y=40;
	newdraggerkey120 = new Container();
	newdraggerkey120.x = 0;
	newdraggerkey120.y = 80;
	newdraggerkey120.addChild(key12, statekey12);
	stage.addChild(newdraggerkey120);
}

// * Demo code start From Here *

function tweenTitleViewdemo()
{		
	if(demo>=1){
		demo=0;	
		level=1;
		score=0;
		lives=10;
		val=0;
		levelcount=0;
		mirrorBottomLeftGreen.visible = true;
		mirrorTopRightGreen1.visible = true;
		getvalue=0;
		checkdemo=0;
		democheck=0;
		rightclickval=0;
	}
/*	startB.visible=false;
	demoB.visible=false;
	levelheading.visible=false;
	addGameViewdemo();*/
	Tween.get(TitleView).to({y:-400}, 300).call(addGameViewdemo);
}

function addGameViewdemo(e)
{
	demo++;
	level=1;
	getvalue=0;
	keyboradValue=0;
	clickVal=0;
	lives=10;
	l=0;
	r=0;
	score=0;
	loseval=0;
	enval=0;
	left=0;
	checkdemo=0;
	democheck=0;
	rightclickval=0;
	leftvaldemo=0;
	rightvaldemo=0;
	result=0;
	mirrorBottomLeftGreen.visible = true;
	mirrorTopRightGreen1.visible = true;
	speed=400;
	credits = null;
	count1=0;
	demoval=0;
	addKeyBoardInGameView();
	if(lives==10){
	i10.x=609;
	i10.y=40;
	lifeNumberBg.x=618;
	lifeNumberBg.y=50;
	livetext = new Text(lives, "bold 26px Arial", "#BB8465");
	livetext.x=632;
	livetext.y=88;
	newdraggerkeyc = new Container();
	newdraggerkeyc.x = 0;
	newdraggerkeyc.y = 0;
	newdraggerkeyc.addChild(lifeNumberBg,livetext);
	stage.addChild(newdraggerkeyc,i10);
	}
		var res = "Score :".concat(score); 
		  scoreheading = new Text(res, "bold 22px Arial", "#6D4A36");
			scoreheading.x=SCORE_HEADING_X;
			scoreheading.y=SCORE_HEADING_Y;
			var res = "Score :".concat(score); 
			  scoreheading = new Text(res, "bold 22px Arial", "#6D4A36");
				scoreheading.x=SCORE_HEADING_X;
				scoreheading.y=SCORE_HEADING_Y;			
				scoreContainer = new Container();
				scoreContainer.x = 0;
				scoreContainer.y = 0;
				scoreContainer.addChild(scoreheading);
				stage.addChild(scoreContainer);	
				stage.addChild(constrainaWire,arrow_right,arrow_left,enterBtn,enter_rect,window_Border,windowGlassBoarder,window_Border1,windowGlassBoarder1,mirrorTopLeft,mirrorBottomLeft,mirrorTopRight,mirrorBottomRight,mirrorTopLeft1,mirrorBottomLeft1,mirrorTopRight1,mirrorBottomRight1);
				stage.addChild(enter,deleteBtn,deleteText);
	arrow_right.visible = false;
	arrow_left.visible = false;
	var rand1 = 46;
	var rand2 = 71;
	var rand3 = 98;
	var rand4 = 11;
	if(rand1>rand2){
		exp1=rand1.toString().concat(str2).concat(rand2.toString());
        valueArray[0]=rand1-rand2;
	}
	else {
		exp1=rand1.toString().concat(str1).concat(rand2.toString());
        valueArray[0]=rand1+rand2;
	}
	
	if(rand3>rand4){
		exp2=rand3.toString().concat(str2).concat(rand4.toString());
        valueArray[1]=rand3-rand4;
	}
	else {
		exp2=rand3.toString().concat(str1).concat(rand4.toString());
        valueArray[1]=rand3+rand4;
	}
	var win_rand1 = 2;
	var win_rand2 = 7;	
	if(win_rand1==2){
		mirrorBottomLeftGreen.x=206;
		mirrorBottomLeftGreen.y=85;
	    stage.addChild(mirrorBottomLeftGreen);	
	    mirrorBottomLeft.onClick=null;
	    mirrorBottomLeft1.onClick=null;
		 mirrorTopLeft.onClick=null;
		 mirrorTopLeft1.onClick=null;
		 mirrorTopRight.onClick=null;
		 mirrorBottomRight.onClick=null;
		 mirrorBottomRight1.onClick=null;
	    setTimeout(function(){
	    	mirrorBottomLeftGreen.visible = false;
	    	mirrorBottomLeft.onClick=showGameDemo;
	    	mirrorBottomLeft1.onClick=lose;
			 mirrorTopLeft.onClick=lose;
			 mirrorTopLeft1.onClick=lose;
			 mirrorTopRight.onClick=lose;
			 mirrorBottomRight.onClick=lose;
			 mirrorBottomRight1.onClick=lose;
	    	},GAME_TIME[level][levelcount].highight);
		}
		
		if(win_rand2==7){
			mirrorTopRightGreen1.x=478;
			mirrorTopRightGreen1.y=35;
		    stage.addChild(mirrorTopRightGreen1);
		    mirrorTopRight1.onClick=null;
		    setTimeout(function(){
		    	mirrorTopRightGreen1.visible = false;
		    	mirrorTopRight1.onClick=showGameDemo1;
		    	mirrorBottomLeft1.onClick=lose;
				 mirrorTopLeft.onClick=lose;
				 mirrorTopLeft1.onClick=lose;
				 mirrorTopRight.onClick=lose;
				 mirrorBottomRight.onClick=lose;
				 mirrorBottomRight1.onClick=lose;
		    	},GAME_TIME[level][levelcount].highight);
			}
		playagainButtonreddemo = new Shape();
		playagainButtonreddemo.graphics.beginFill("#D2546A").drawRect(10,100, 270,40);
		playagainreddemo = new Text("Click Green Plane in left window", "bold 16px helvetica", "#FFFFFF");
		playagainreddemo.x=26;
		playagainreddemo.y=125;
		playagaindraggerreddemo = new Container();
		playagaindraggerreddemo.x = 20;
		playagaindraggerreddemo.y = 80;
		playagaindraggerreddemo.addChild(playagainButtonreddemo, playagainreddemo);
		stage.addChild(playagaindraggerreddemo);
		 playagainButtonreddemo1 = new Shape();
		playagainButtonreddemo1.graphics.beginFill("#D2546A").drawRect(400,100, 285,40);
		playagainreddemo1 = new Text("Click Green Plane in right window", "bold 16px helvetica", "#FFFFFF");
		playagainreddemo1.x=420;
		playagainreddemo1.y=125;
		playagaindraggerreddemo1 = new Container();
		playagaindraggerreddemo1.x = 0;
		playagaindraggerreddemo1.y = 80;
		playagaindraggerreddemo1.addChild(playagainButtonreddemo1, playagainreddemo1);
		stage.addChild(playagaindraggerreddemo1);
		 		 
}

function lose(e){
	if(loseval>=1){	
		playagaindraggerreddemo11.visible=false;
		loseval=0;
	}
	else{
	loseval++;
	var playagainButtonreddemo1 = new Shape();
	playagainButtonreddemo1.graphics.beginFill("#D2546A").drawRect(250,85, 200,40);
	
	playagainreddemo1 = new Text("You Clicked Wrong", "bold 16px helvetica", "#FFFFFF");
	playagainreddemo1.x=280;
	playagainreddemo1.y=112;
    
	playagaindraggerreddemo11 = new Container();
	playagaindraggerreddemo11.x = 0;
	playagaindraggerreddemo11.y = 140;
	playagaindraggerreddemo11.addChild(playagainButtonreddemo1, playagainreddemo1);
	stage.addChild(playagaindraggerreddemo11);
	setTimeout(function(){
		playagaindraggerreddemo11.visible=false;
	    	},500);
	}
}

function lose1(e){
if(enval>=1){	
	playagaindraggerreddemo111.visible=false;
		enval=0;
	}
else{
	enval++;
	var playagainButtonreddemo11 = new Shape();
	playagainButtonreddemo11.graphics.beginFill("#D2546A").drawRect(250,85, 200,40);
	
	playagainreddemo11 = new Text("You Enter Wrong", "bold 16px helvetica", "#FFFFFF");
	playagainreddemo11.x=280;
	playagainreddemo11.y=112;
    
	playagaindraggerreddemo111 = new Container();
	playagaindraggerreddemo111.x = 90;
	playagaindraggerreddemo111.y = 260;
	playagaindraggerreddemo111.addChild(playagainButtonreddemo11, playagainreddemo11);
	stage.addChild(playagaindraggerreddemo111);
	setTimeout(function(){
		playagaindraggerreddemo111.visible=false;
	    	},500);
}
}

function showGameDemo1(e){
	mirrorTopRightGreen1.visible = true;
	if(leftvaldemo==0){
		count1++;
	}
	leftvaldemo=1;
	    if(count1>=2){
	    	playagaindraggerreddemo.visible=false;
			SoundJS.play('win');
			stage.removeChild(windowGlassBoarder,mirrorTopLeft,mirrorTopRight,mirrorBottomRight,mirrorBottomLeft,mirrorTopLeftRed,mirrorBottomLeftRed,mirrorTopRightRed,mirrorBottomRightRed);
			openWindow_left.x=OPEN_WINDOW_LEFT_X;
			openWindow_left.y=OPEN_WINDOW_Y;
			openWindow_right.x=OPEN_WINDOW_RIGHT_X;
			openWindow_right.y=OPEN_WINDOW_Y;
			spriteAnimation(e,DIS_LEFT_SPRITE);
			 balloonMaanLeft.x=BALLOONMAN_LEFT_X;
			 balloonMaanLeft.y=BALLOONMAN_Y ;
			 balloonMaanGreen.x=BALLOONMAN_LEFT_X;
			 balloonMaanGreen.y=BALLOONMAN_Y ;
			 balloonMaanYellow.x=BALLOONMAN_LEFT_X;
			 balloonMaanYellow.y=BALLOONMAN_Y ;
			 balloonMaanRed.x=BALLOONMAN_LEFT_X;
			 balloonMaanRed.y=BALLOONMAN_Y ;
			 balloonMaanGreen.visible=false;
			 balloonMaanYellow.visible=false;
			 balloonMaanRed.visible=false;
			state11 = new Text(exp1, "bold 16px Arial", "#1e4a62");
			state11.x=EXP_TEXT_LEFT_X;
			state11.y=EXP_TEXT_Y;
			dragger = new Container();
			dragger.x = 0;
			dragger.y = 0;
			dragger.addChild(balloonMaanLeft,balloonMaanGreen,balloonMaanYellow,balloonMaanRed,state11);
			stage.addChild(dragger);
			
			playagaindraggerreddemo1.visible=false;
			//SoundJS.play('win');
			stage.removeChild(windowGlassBoarder1,mirrorTopLeft1,mirrorTopRight1,mirrorBottomRight1,mirrorBottomLeft1);
			openWindow_left1.x=OPEN_WINDOW_LEFT;
			openWindow_left1.y=OPEN_WINDOW_Y;
			openWindow_right1.x=OPEN_WINDOW_RIGHT;
			openWindow_right1.y=OPEN_WINDOW_Y;
			spriteAnimation(e,DIS_RIGHT_SPRITE);		
			 balloonMaanRight.x=BALLOONMAN_RIGHT_X;
			 balloonMaanRight.y=BALLOONMAN_Y ;	
			 balloonMaanGreen1.x=BALLOONMAN_RIGHT_X;
			 balloonMaanGreen1.y=BALLOONMAN_Y ;
			 balloonMaanYellow1.x=BALLOONMAN_RIGHT_X;
			 balloonMaanYellow1.y=BALLOONMAN_Y ;
			 balloonMaanRed1.x=BALLOONMAN_RIGHT_X;
			 balloonMaanRed1.y=BALLOONMAN_Y ;
			 balloonMaanGreen1.visible=false;
			 balloonMaanYellow1.visible=false;
			 balloonMaanRed1.visible=false;
			  state22 = new Text(exp2, "bold 16px Arial", "#1e4a62");
			    state22.x=EXP_TEXT_RIGHT_X;
			    state22.y=EXP_TEXT_Y; 
			    dragger1 = new Container();
			    dragger1.x = 0;
			    dragger1.y = 0;
			    dragger1.addChild(balloonMaanRight,balloonMaanGreen1,balloonMaanYellow1,balloonMaanRed1,state22);
			    stage.addChild(dragger1);
			    console.log(count);
	    	
	    	
	    	democheck++;
	    	arrow_right.visible = true;
	    	arrow_left.visible = true;
	    	mc = new MovieClip(null, 0, false, {start:0, middle:40});
	    	stage.addChild(mc);
	       mc.timeline.addTween(
	               Tween.get(dragger)
	                       .to({y:0}).to({y:360}, 400)); 
	       mc.timeline.addTween(
	               Tween.get(dragger1)
	                       .to({y:0}).to({y:360}, 400));   
	      balloonColorChangeRight(e);
	      var playagainButtonreddemo2 = new Shape();
			playagainButtonreddemo2.graphics.beginFill("#D2546A").drawRect(10,100, 400,40);
			playagainreddemo2 = new Text("Click Left Arrow if left exp greater else Click Right", "bold 16px helvetica", "#FFFFFF");
			playagainreddemo2.x=24;
			playagainreddemo2.y=125;
			playagaindraggerreddemo2 = new Container();
			playagaindraggerreddemo2.x = 160;
			playagaindraggerreddemo2.y = 180;
			playagaindraggerreddemo2.addChild(playagainButtonreddemo2, playagainreddemo2);
			stage.addChild(playagaindraggerreddemo2);
			var playagainButtonreddemo3 = new Shape();
			playagainButtonreddemo3.graphics.beginFill("#D2546A").drawRect(390,100, 360,40);
			playagainreddemo3 = new Text("Click Right Arrow if Value of right exp greater", "bold 16px helvetica", "#FFFFFF");
			playagainreddemo3.x=400;
			playagainreddemo3.y=125;
			playagaindraggerreddemo3 = new Container();
			playagaindraggerreddemo3.x = 0;
			playagaindraggerreddemo3.y = 180;
			playagaindraggerreddemo3.addChild(playagainButtonreddemo3, playagainreddemo3);  
	    }
	    arrow_right.onClick=lose;	
	    arrow_left.onClick=NextStepLeftDemo;
}

function showGameDemo(e){
	mirrorBottomLeftGreen.visible = true;
	if(rightvaldemo==0){
		count1++;
	}
	rightvaldemo=1;
	if(count1>=2){
		playagaindraggerreddemo.visible=false;
		SoundJS.play('win');
		stage.removeChild(windowGlassBoarder,mirrorTopLeft,mirrorTopRight,mirrorBottomRight,mirrorBottomLeft,mirrorTopLeftRed,mirrorBottomLeftRed,mirrorTopRightRed,mirrorBottomRightRed);
		openWindow_left.x=OPEN_WINDOW_LEFT_X;
		openWindow_left.y=OPEN_WINDOW_Y;
		openWindow_right.x=OPEN_WINDOW_RIGHT_X;
		openWindow_right.y=OPEN_WINDOW_Y;
		spriteAnimation(e,DIS_LEFT_SPRITE);
		 balloonMaanLeft.x=BALLOONMAN_LEFT_X;
		 balloonMaanLeft.y=BALLOONMAN_Y ;
		 balloonMaanGreen.x=BALLOONMAN_LEFT_X;
		 balloonMaanGreen.y=BALLOONMAN_Y ;
		 balloonMaanYellow.x=BALLOONMAN_LEFT_X;
		 balloonMaanYellow.y=BALLOONMAN_Y ;
		 balloonMaanRed.x=BALLOONMAN_LEFT_X;
		 balloonMaanRed.y=BALLOONMAN_Y ;
		 balloonMaanGreen.visible=false;
		 balloonMaanYellow.visible=false;
		 balloonMaanRed.visible=false;
		state11 = new Text(exp1, "bold 16px Arial", "#1e4a62");
		state11.x=EXP_TEXT_LEFT_X;
		state11.y=EXP_TEXT_Y;
		dragger = new Container();
		dragger.x = 0;
		dragger.y = 0;
		dragger.addChild(balloonMaanLeft,balloonMaanGreen,balloonMaanYellow,balloonMaanRed,state11);
		stage.addChild(dragger);
		
		playagaindraggerreddemo1.visible=false;
		//SoundJS.play('win');
		stage.removeChild(windowGlassBoarder1,mirrorTopLeft1,mirrorTopRight1,mirrorBottomRight1,mirrorBottomLeft1);
		openWindow_left1.x=OPEN_WINDOW_LEFT;
		openWindow_left1.y=OPEN_WINDOW_Y;
		openWindow_right1.x=OPEN_WINDOW_RIGHT;
		openWindow_right1.y=OPEN_WINDOW_Y;
		spriteAnimation(e,DIS_RIGHT_SPRITE);		
		 balloonMaanRight.x=BALLOONMAN_RIGHT_X;
		 balloonMaanRight.y=BALLOONMAN_Y ;	
		 balloonMaanGreen1.x=BALLOONMAN_RIGHT_X;
		 balloonMaanGreen1.y=BALLOONMAN_Y ;
		 balloonMaanYellow1.x=BALLOONMAN_RIGHT_X;
		 balloonMaanYellow1.y=BALLOONMAN_Y ;
		 balloonMaanRed1.x=BALLOONMAN_RIGHT_X;
		 balloonMaanRed1.y=BALLOONMAN_Y ;
		 balloonMaanGreen1.visible=false;
		 balloonMaanYellow1.visible=false;
		 balloonMaanRed1.visible=false;
		  state22 = new Text(exp2, "bold 16px Arial", "#1e4a62");
		    state22.x=EXP_TEXT_RIGHT_X;
		    state22.y=EXP_TEXT_Y; 
		    dragger1 = new Container();
		    dragger1.x = 0;
		    dragger1.y = 0;
		    dragger1.addChild(balloonMaanRight,balloonMaanGreen1,balloonMaanYellow1,balloonMaanRed1,state22);
		    stage.addChild(dragger1);
		    console.log(count);
		
		democheck++;
		arrow_right.visible = true;
		arrow_left.visible = true;
		mc = new MovieClip(null, 0, false, {start:0, middle:40});
		stage.addChild(mc);
	   mc.timeline.addTween(
	           Tween.get(dragger)
	                   .to({y:0}).to({y:360}, 400)); 
	   mc.timeline.addTween(
	           Tween.get(dragger1)
	                   .to({y:0}).to({y:360}, 400)); 
	   balloonColorChangeLeft(e);
     var playagainButtonreddemo2 = new Shape();
		playagainButtonreddemo2.graphics.beginFill("#D2546A").drawRect(10,100, 400,40);
		playagainreddemo2 = new Text("Click Left Arrow if left exp greater or Click Right", "bold 16px helvetica", "#FFFFFF");
		playagainreddemo2.x=30;
		playagainreddemo2.y=125;
		playagaindraggerreddemo2 = new Container();
		playagaindraggerreddemo2.x = 160;
		playagaindraggerreddemo2.y = 230;
		playagaindraggerreddemo2.addChild(playagainButtonreddemo2, playagainreddemo2);
		stage.addChild(playagaindraggerreddemo2);
		var playagainButtonreddemo3 = new Shape();
		playagainButtonreddemo3.graphics.beginFill("#D2546A").drawRect(390,100, 360,40);
		playagainreddemo3 = new Text("Click Right Button if Value of right exp greater", "bold 16px helvetica", "#FFFFFF");
		playagainreddemo3.x=400;
		playagainreddemo3.y=125;
		playagaindraggerreddemo3 = new Container();
		playagaindraggerreddemo3.x = 0;
		playagaindraggerreddemo3.y = 230;
		playagaindraggerreddemo3.addChild(playagainButtonreddemo3, playagainreddemo3);	  
}
	arrow_right.onClick=lose;
	arrow_left.onClick=NextStepLeftDemo;
}

function NextStepLeftDemo(e){
	left++;
	playagaindraggerreddemo2.visible=false;
	clickVal=0;
	count=0;
	var playagainButtonreddemo4 = new Shape();
	playagainButtonreddemo4.graphics.beginFill("#D2546A").drawRect(310,100, 400,40);
	playagainreddemo4 = new Text("Enter Sum Of Balloon value(117)and popup value(7)", "bold 16px helvetica", "#FFFFFF");
	playagainreddemo4.x=315;
	playagainreddemo4.y=125;
	playagaindraggerreddemo4 = new Container();
	playagaindraggerreddemo4.x = 0;
	playagaindraggerreddemo4.y = 170;
	playagaindraggerreddemo4.addChild(playagainButtonreddemo4, playagainreddemo4);
	stage.addChild(playagaindraggerreddemo4);
	onKeyBoradPress(e);	
	enterBtn.onPress =showResultdemo;
	deleteBtn.onPress =DeleteNumber;
	if(valueArray[0]>=valueArray[1]){
		arrowLeft_hover.x=LEFT_ARROW_X;
		arrowLeft_hover.y=LEFT_ARROW_Y;
		stage.addChild(arrowLeft_hover);
		arrow_left.visible=false;
		setTimeout(function(){
			arrowLeft_hover.visible = false;
			arrowLeftGreen.x=LEFT_ARROW_X;
			arrowLeftGreen.y=LEFT_ARROW_Y;
			stage.addChild(arrowLeftGreen);		
	    	},100);
		balloonMaanGreen.visible=true;
		clickVal++;
		count1++;
		l++;
		exp2=valueArray[0];
		var dheight=dragger.y;
		arrow_right.onPress = null;
		arrow_left.onPress = null;
		arrowLeftRed.onPress = null;
		arrowRightRed.onPress = null;
		stage.removeChild(arrow_left);
		dragger.visible = false;
		dragger1.visible = false;
		balloonMaanLeft.x=BALLOONMAN_LEFT_X;
		balloonMaanLeft.y=BALLOONMAN_Y ;
		state11 = new Text(exp2, "bold 16px Arial", "#1e4a62");
		state11.x=244;
		state11.y=EXP_TEXT_Y;
		dragger = new Container();
		dragger.x = 0;
		dragger.y = 0;
		
		dragger.addChild(balloonMaanLeft,balloonMaanGreen,balloonMaanYellow,balloonMaanRed,state11);
		stage.addChild(dragger);
		mc.timeline.addTween(
		           Tween.get(dragger)
		                   .to({y:0}).to({y:360}, 400));
		gen_rand=7;
		final_value=124;
		var newexp;
		if (gen_rand >= 0)
		{
			newexp = "+" + gen_rand;
		}
		else
		{
			newexp = gen_rand.toString();
		}
		balloonArrowLeft.x=LEFT_RAND_POPUP_X;
		balloonArrowLeft.y=LEFT_RAND_POPUP_Y;
		var statenew = new Text(newexp, "bold 22px Arial", "#FFFFFF");
		statenew.x=175;
		statenew.y=165;
		newdragger = new Container();
		newdragger.x = 0;
		newdragger.y = 40;
		newdragger.addChild(balloonArrowLeft, statenew);	
		stage.addChild(newdragger);
		mc.timeline.addTween(
		          Tween.get(newdragger)
		                  .to({y:0}).to({y:360}, 400));
	}
	else { 
		if(red==0){
		arrow_left.visible = false;
		arrowLeft_hover.x=LEFT_ARROW_X;
		arrowLeft_hover.y=LEFT_ARROW_Y;
		stage.addChild(arrowLeft_hover);
		arrow_left.visible=false;
		setTimeout(function(){
			arrowLeft_hover.visible = false;
			arrowLeftRed.x=LEFT_ARROW_X;
			arrowLeftRed.y=LEFT_ARROW_Y;
			stage.addChild(arrowLeftRed);
					
	    	},100);
		lives--;
		ReduceLives(e);
		red++;
		arrowLeftRed.onPress=NextStepLeft;
		console.log(lives);
		}
		else{
			arrow_left.visible = false;
			arrowLeftRed.visible=false;
			arrowLeftRed_hover.x=LEFT_ARROW_X;
			arrowLeftRed_hover.y=LEFT_ARROW_Y;
			stage.addChild(arrowLeftRed_hover);
			arrow_left.visible=false;
			setTimeout(function(){
				arrowLeftRed.visible=true;
				arrowLeftRed_hover.visible=false;
						
		    	},100);
			lives--;
			ReduceLives(e);
			red++;
			arrowLeftRed.onPress=NextStepLeft;
			console.log(lives);		
		}
	}	
}

function showResultdemo(e){
	console.log("get="+getvalue);
	if(getvalue==124){
		result=1;
		checkdemo++;
	playagaindraggerreddemo4.visible=false;
	newdragger.visible=false;
	showResult(e);
	}
	else{
		getvalue=0;		
		var keydemo12 = new Shape();
	    keydemo12.graphics.beginFill("#96D3F2").drawRoundRectComplex(780,0, 80,50,0,0,0,0);
	    var statekeydemo12 = new Text(getvalue, "bold 34px Arial", "#1e4a62");
	    statekeydemo12.x=780;
	    statekeydemo12.y=40;
		newdraggerkeynewdemo1 = new Container();
		newdraggerkeynewdemo1.x = 0;
		newdraggerkeynewdemo1.y = 80;
		newdraggerkeynewdemo1.addChild(keydemo12, statekeydemo12);
		stage.addChild(newdraggerkeynewdemo1);
		
		if(demoval==0){
		playagaindraggerreddemo4.visible=true;
		lose1(e);
		}	
	}
}
