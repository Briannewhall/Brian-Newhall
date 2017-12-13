/*
 * Implement all your JavaScript in this file!
 */

//display blank on page load, declare variables and functions

$(document).ready(function()
	{	
		$("#display").val();
	});

var leftNum;
var rightNum;
var solution;
var reset = false;
var mathOp = false;
var addOp = false;
var subtractOp = false;
var multiplyOp = false;
var divideOp = false;

function addNums(leftNum, rightNum)
	{
		return (Number(leftNum) + Number(rightNum));
	};
function subtractNums(leftNum, rightNum)
	{
		return (Number(leftNum) - Number(rightNum));
	};
function multiplyNums(leftNum, rightNum)
	{
		return (Number(leftNum) * Number(rightNum));
	};
function divideNums(leftNum, rightNum)
	{
		return (Number(leftNum) / Number(rightNum));
	};

$(".numButton").click(function()
	{
		if ( reset == true)
			{
				$("#display").val(null);
				reset = false;
			};
	});

// button clicks - build number display
	
$("#button0").click(function()
	{
		$("#display").val($("#display").val() + "0");
	});

$("#button1").click(function()
	{
		$("#display").val($("#display").val() + "1");
	});

$("#button2").click(function()
	{
		$("#display").val($("#display").val() + "2");
	});

$("#button3").click(function()
	{
		$("#display").val($("#display").val() + "3");
	});

$("#button4").click(function()
	{
		$("#display").val($("#display").val() + "4");
	});

$("#button5").click(function()
	{
		$("#display").val($("#display").val() + "5");
	});
$("#button6").click(function()
	{
		$("#display").val($("#display").val() + "6");
	});

$("#button7").click(function()
	{
		$("#display").val($("#display").val() + "7");
	});

$("#button8").click(function()
	{
		$("#display").val($("#display").val() + "8");
	});

$("#button9").click(function()
	{
		$("#display").val($("#display").val() + "9");
	});

//activate mathmatic operative

$(".opButton").click(function()
	{
		reset = true;
		if (mathOp == true)
		{
			reset = true;
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
		}
	});

$("#addButton").click(function()
	{
		addOp = true;
		leftNum = $('#display').val();
		mathOp = true;
	});
$("#subtractButton").click(function()
	{
		subtractOp = true;
		leftNum = $('#display').val();
		mathOp = true;
	});
$("#multiplyButton").click(function()
	{	
		multiplyOp = true;
		leftNum = $('#display').val();
		mathOp = true;
	});
$("#divideButton").click(function()
	{
		divideOp = true;
		leftNum = $('#display').val();
		mathOp = true;
	});
					  
//clear button

$("#clearButton").click(function()
	{
		$("#display").val(null);
		leftNum = null;
		rightNum = null
		mathOp = false;
	});

//equal button

$("#equalsButton").click(function()
	{
		if (reset == true)
		{
			
		}
		else
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
			mathOp = false;
			reset = true;
		}
	});