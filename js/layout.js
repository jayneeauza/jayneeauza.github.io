$(document).ready(function() {
	$("#divadmin #divbody").on("click", ".column", function() {
		$("#divadminprofile").css("display", "block");
	});

	$(".cl-cls").click(function() {
		$(".w3-modal").css("display", "none");
	});

	$("#divnstp .btn-1").click(function() {
		$("#divnstpcntnt1").css("display", "block");
	});	

	$("#divnstp .btn-2").click(function() {
		$("#divnstpcntnt2").css("display", "block");
	});	

	$("#diveteeap .cl-btn").click(function() {
		$("#divattndeg").css("display", "block");
	});

	$("#divresearch .cl-btn").click(function() {
		$("#divfndmore").css("display", "block");
	});

	$("#divsophia .cl-txt .cl-btn").click(function() {
		$("#divhseandreg").css("display", "block");
	});

	$("#divorg .cl-txt .cl-btn").click(function() {
		$("#divguidelines").css("display", "block");
	});

	$("#divsps .cl-txt .cl-btn-2").click(function() {
		$("#divhandbook").css("display", "block");
	});

	$("#divsps .cl-txt .cl-btn-1").click(function() {
		$("#divsaservices").css("display", "block");
	});

	$("#divenrollment .btnsched").click(function() {
		$("#divsched").css("display", "block");
	});

	$("#divrodelsa .cl-txt .cl-btn").click(function() {
		$("#divconcert").css("display", "block");
	});

	$("#slctscholar").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $("#divscholar .w3-table").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $("#divscholar .w3-table").hide();
            }
        });
    }).change();

    $("#slctdept").change(function() {
    	$(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $("#divtuition .w3-table").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $("#divtuition .w3-table").hide();
            }
        });
    }).change();

    $("#divguidance .cl-txt .cl-btn").click(function() {
		$("#divexmsched").css("display", "block");
    });

    $("#divnav").on("click", "#divmnav", function() {
    	alert("ads");
    });

    $(".cl-drpdwn").click(function() {
    	$(this).children("div").slideToggle();
    });

	showDivs(slideIndex);
	showPage(sIndex);

	setInterval(function() {
		plusDivs(1);
	}, 5000);
	setInterval(function() {
		nlink(1);
	}, 5000);
});

var slideIndex = 1;
var sIndex = 1;

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function nlink(n) {
	showPage(sIndex += n);
}

function plink(n) {
	showPage(sIndex -= n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-red", "");
	}
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " w3-red";
}

function showPage(n) {
	var i;
	var x = document.getElementsByClassName("clpage");
	if (n > x.length) {sIndex = 1}
	if (n < 1) {sIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[sIndex-1].style.display = "block"; 
}