

$(document).ready(function(){

var quote1 = "“The chair came to be a symbol of the project and the story. We had a whole section about the chairs. There was a line that said 'Take for instance, the chair.'”";
var speaker1 = "-Charlie Ornstein and Tracy Weber";

var quote2 = "“Like all the Aprils here...you want to be treated individually. You are each your own unique April.”";
var speaker2 = "-Derek Willis";

var quote3 = "“Scraping is like our hazing tradition here at ProPublica.”";
var speaker3 = "-Lena Groeger";

var quote4 = "“NO/O!!!”";
var speaker4 = "-Ryann Grochowski Jones";

var quote5 = "“In python I don’t know if I can clear. Sad!”";
var speaker5 = "-Sisi Wei";

var quote6 = "“Quote 6”";
var speaker6 = "-Charlie Ornstein";

var quote7 = "“Quote 7”";
var speaker7 = "-Topher Sanders";

var quote8 = "“We did the chitlin circuit of reporting. None of y’all probably knows what a chitlin is.”";
var speaker8 = "-Topher Sanders";

var quote9 = "“Erase that. No one feels that way.”";
var speaker9 = "-Olga Pierce";

var quote10 = "“Quote 10”";
var speaker10 = "-Sisi Wei";

// When someone clicks

$("img").click(function(){

	var currentQuote =	$("h1").text();
	var fadeTime = 1000;
	
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

	$("h1").fadeIn(1000);






});


})