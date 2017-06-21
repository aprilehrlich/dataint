
$(document).ready(function(){

var quote1 = "“Quote 1”";
var speaker1 = "-Olga Pierce";

var quote2 = "“Quote 2”";
var speaker2 = "-Ryann Grochowski Jones";

var quote3 = "“Quote 3”";
var speaker3 = "-Sisi Wei";

var quote4 = "“Quote 4”";
var speaker4 = "-Lena Groeger";

var quote5 = "“Quote 5”";
var speaker5 = "-Tracy Weber";

var quote6 = "“Quote 6”";
var speaker6 = "-Charlie Ornstein";

var quote7 = "“Quote 7”";
var speaker7 = "-Topher Sanders";

var quote8 = "“Quote 8”";
var speaker8 = "-Olga Pierce";

var quote9 = "“Quote 9”";
var speaker9 = "-Derek Willis";

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