
$(document).ready(function(){

var quote1 = " ";
var speaker1 = " ";

var quote2 = "You can write def hippo?!";
var speaker2 = "-Tasnim Shamma";

var quote3 = "We had a whole section about the chairs. There was a line that said, Take for instance, the chair.";
var speaker3 = "-Charles Ornstein & Tracy Weber";

var quote4 = "(N-O)/O!!";
var speaker4 = "-Ryann Grochowski Jones";

var quote5 = "This is the only time you'll see a snail in my slide.";
var speaker5 = "-Sisi Wei";

var quote6 = "We did the chitlin circuit of reporting. None of y'all probably knows what a chitlin is.";
var speaker6 = "-Topher Sanders";

var quote7 = "Like all the Aprils here...you want to be treated individually. You are each your own unique April.";
var speaker7 = "-Derek Willis";

var quote8 = "Scraping is like our hazing tradition here at ProPublica.";
var speaker8 = "-Olga Pierce";

var quote9 = "I'll just erase Lena from my phone book... (N-O)/O!!";
var speaker9 = "-Sisi and Lena";

var quote10 = " ";
var speaker10 = " ";

// When someone clicks

$("img").click(function(){

	var currentQuote =	$("h1").text();
	var fadeTime = 500;
	
	$("h1").fadeOut(0);
	$("#image1").fadeTo(fadeTime,0);
		
	if(currentQuote == quote1){
		$("h1").text(quote2);
		$("#image2").fadeTo(fadeTime,1);
		$("p").text(speaker2);
	} 

	if(currentQuote == quote2){
		$("h1").text(quote3);
		$("#image3").fadeTo(fadeTime,1);
		$("p").text(speaker3);
	} 


	if(currentQuote == quote3){
		$("h1").text(quote4);
		$("#image4").fadeTo(fadeTime,1);
		$("p").text(speaker4);
	} 

	if(currentQuote == quote4){
		$("h1").text(quote5);
		$("#image5").fadeTo(fadeTime,1);
		$("p").text(speaker5);
	} 


	if(currentQuote == quote5){
		$("h1").text(quote6);
		$("#image6").fadeTo(fadeTime,1);
		$("p").text(speaker6);
	} 


	if(currentQuote == quote6){
		$("h1").text(quote7);
		$("#image7").fadeTo(fadeTime,1);
		$("p").text(speaker7);
	} 


	if(currentQuote == quote7){
		$("h1").text(quote8);
		$("#image8").fadeTo(fadeTime,1);
		$("p").text(speaker8);
	} 

	if(currentQuote == quote8){
		$("h1").text(quote9);
		$("#image9").fadeTo(fadeTime,1);
		$("p").text(speaker9);
	} 

	if(currentQuote == quote9){
		$("h1").text(quote10);
		$("#image10").fadeTo(fadeTime,1);
		$("p").text(speaker10);
	} 

	$("h1").fadeIn(500);


});

})