/*
 * Implement all your JavaScript in this file!
 */

//display blank on page load, declare variables and functions

$(document).ready(function(){	
	$("#display").val();
	});

var leftNum;
var rightNum;
var solution;
var addOp = false;
var subtractOp = false;
var multiplyOp = false;
var divideOp = false;

function addNums(leftNum, rightNum){
	return (Number(leftNum) + Number(rightNum));
	};
function subtractNums(leftNum, rightNum){
	return (Number(leftNum) - Number(rightNum));
	};
function multiplyNums(leftNum, rightNum){
	return (Number(leftNum) * Number(rightNum));
	};
function divideNums(leftNum, rightNum){
	return (Number(leftNum) / Number(rightNum));
	};

// button clicks build number display
	
$("#button0").click(function(){
	$("#display").val($("#display").val() + "0");
	});

$("#button1").click(function(){
	$("#display").val($("#display").val() + "1");
	});

$("#button2").click(function(){
	$("#display").val($("#display").val() + "2");
	});

$("#button3").click(function(){
	$("#display").val($("#display").val() + "3");
	});

$("#button4").click(function(){
	$("#display").val($("#display").val() + "4");
	});

$("#button5").click(function(){
	$("#display").val($("#display").val() + "5");
	});
$("#button6").click(function(){
	$("#display").val($("#display").val() + "6");
	});

$("#button7").click(function(){
	$("#display").val($("#display").val() + "7");
	});

$("#button8").click(function(){
	$("#display").val($("#display").val() + "8");
	});

$("#button9").click(function(){
	$("#display").val($("#display").val() + "9");
	});

//activate operative

$("#addButton").click(function(){
	addOp = true;
	leftNum = $('#display').val();
	$("#display").val(null);
	});
$("#subtractButton").click(function(){
	subtractOp = true;
	leftNum = $('#display').val();
	$("#display").val(null);
	});
$("#multiplyButton").click(function(){
	multiplyOp = true;
	leftNum = $('#display').val();
	$("#display").val(null);
	});
$("#divideButton").click(function(){
	divideOp = true;
	leftNum = $('#display').val();
	$("#display").val(null);
	});
					  
//clear button

$("#clearButton").click(function(){
	$("#display").val(null);
	leftNum = null;
	rightNum = null
	});
//equal button

$("#equalsButton").click(function()
	{
	rightNum = $("#display").val();
		if (addOp == true)
		{
			solution = addNums(leftNum, rightNum);
			$("#display").val(solution);
			addOp = false;
		}
		else if(subtractOp == true)
		{
			solution = subtractNums(leftNum, rightNum);
			$("#display").val(solution);
			subtractOp = false;
		}
		else if(multiplyOp == true)
		{
			solution = multiplyNums(leftNum, rightNum);
			$("#display").val(solution);
			multiplyOp = false;
		}
		else if(divideOp == true)
		{
			solution = divideNums(leftNum, rightNum);
			$("#display").val(solution);
			divideOp = false;
		};
	});



//});
//operator keys, equal solves equation

//function addSolution(){
//	return Number(leftNum) += Number(rightNum)
//	};
//function subtractSolution(){(Number(leftNum) - Number(rightNum))};
/*$("#addButton").click(function(){
	leftNum = $("#display").val();
	operator = function addSolution(leftNum, rightNum){
	return Number(leftNum) += Number(rightNum);
	};
	$("#display").val("");
	});

$("#equalsButton").click(function(){
	rightNum = $("#display").val();
	$("#display").val(operator);
	});

$("#addButton").click(function(){
	var leftNum = $("#display").val();
	$("#display").val(null);
	//$("#output").text(leftNum);
	$("#equalsButton").click(function(){
		//var leftNum = $("#output").html();
		var rightNum = $("#display").val();
		var addSolution = (Number(leftNum) + Number(rightNum));
	$("#display").val(addSolution);
	});
});	
$("#subtractButton").click(function(){
	var leftNum = $("#display").val();
	$("#display").val(null);
	$("#output").text(leftNum);
	$("#equalsButton").click(function(){
		var leftNum = $("#output").html();
		var rightNum = $("#display").val();
		var subtractSolution = (Number(leftNum) - Number(rightNum));
	$("#display").val(subtractSolution);
	});
});
$("#multiplyButton").click(function(){
	var leftNum = $("#display").val();
	$("#display").val(null);
	$("#output").text(leftNum);
	$("#equalsButton").click(function(){
		var leftNum = $("#output").html();
		var rightNum = $("#display").val();
		var multiplySolution = (Number(leftNum) * Number(rightNum));
	$("#display").val(multiplySolution);
	});
});
$("#divideButton").click(function(){
	var leftNum = $("#display").val();
	$("#display").val(null);
	$("#output").text(leftNum);
	$("#equalsButton").click(function(){
		var leftNum = $("#output").html();
		var rightNum = $("#display").val();
		var divideSolution = (Number(leftNum) / Number(rightNum));
	$("#display").val(divideSolution);
	});
});
*/