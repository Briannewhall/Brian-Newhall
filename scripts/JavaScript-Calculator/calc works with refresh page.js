/*
 * Implement all your JavaScript in this file!
 */

//display blank on page load

$(document).ready(function(){	
	$("#display").val();
});
//var leftNum;
//var rightNum;

//var subtractSolution = leftNum - rightNum;
//var multiplySolution = leftNum * rightNum;
//var divideSolution = leftNum / rightNum;

// button clicks build number display
//function buildNum(){
$("#clearButton").click(function(){
	$("#display").val(null);
	$("#output").text("");
	leftNum = null;
	});
	
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

//});
//operator keys, equal solves equation
var operator
var leftNum
var rightNum
var solution
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
*/
$("#addButton").click(function(){
	var leftNum = $("#display").val();
	$("#display").val(null);
	$("#output").text(leftNum);
	$("#equalsButton").click(function(){
		var leftNum = $("#output").html();
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
