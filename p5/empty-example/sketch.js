var sound; //Variables
var fft2;
var button;
var w;
var fft;

function preload() { 
  sound = loadSound('enjoy.mp3'); // preloads the song
}

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas size
  //colorMode(HSB);
  //angleMode(DEGREES);
  sound.play(); //plays the song
  fft = new p5.FFT(0.9, 2048); //fast fourier transform (smoothing and binsize)
  w = width / 70; // an equation for the variable w
}

function draw() {
  background(20, 20, 20); //canvas colour
 
//Part 1
//top half
  push(); //saves the drawing style
  translate(windowWidth/2,0); // moves this drawing to create a reflection
  scale(-1.0,1.0); // sets the scale of the circles
  spectrum = fft.analyze(); //Visualize the frequency spectrum of the sound
  noStroke(); // Don’t create an outline around the shapes
  fill(255, 0, 255) // Set the fill color of the shapes


  for (var i = 0; i < spectrum.length; i++) { //for loop used to correlate how the circles react to the specturm length
    ellipse(i, (windowHeight/2)-spectrum[i], 2, 2);
  }

pop();//restores the drawing style
translate(windowWidth*0.5,0);//check for the other version
noStroke(); // no outlines
fill(204, 0, 102) // Set the fill color of the shapes

 for (var i = 0; i < spectrum.length; i++) { //for loop used to correlate how the circles react to the specturm length
    ellipse(i, (windowHeight/2)-spectrum[i], 2, 2);
  }




  //Part 2

  //start bottom half
  	push(); //saves the drawing style
    translate(windowWidth/360,0); //windowWidth was the changing element value is 360 
	scale(0.5,0.5); //sets the scale of the rectangle
	noStroke(); //no outlines

	for (var i = 0; i < spectrum.length; i++) { //for loop used to correlate how the circles react to the specturm length
		var amp = spectrum[i];
		var y = map(amp, 0, -256, height, 0); //-256 makes it go in the bottom half
		fill(204, 0, 102); // colour of rectangles
		rect(i*w, y, w-5, height - y); //size and position of the rectangles
	}
	

	pop(); //restores the drawing style
	translate(windowWidth/360,0); //windowWidth was the changing element value is 360
	scale(0.5,0.5); //sets the scale
	noStroke(); // no outline
		
	for (var i = 0; i < spectrum.length; i++) { //for loop used to correlate how the circles react to the specturm length
	var amp = spectrum[i];
	var y = map(amp, 0, -256, height, 0); //-256 makes it go in the bottom half
	fill(255, 0, 255); //colour of rectangles
	rect(i*-w, y, w-5, height - y); //size and position of the rectangle
	}

}