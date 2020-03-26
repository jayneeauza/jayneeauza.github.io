$(document).ready(function () {
    var today = (new Date()).getDay();

    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    var arrmonth = new Array(12);
    var arrday = new Array(7);

    // arrmonth[0] = "January";
    // arrmonth[1] = "February";
    // arrmonth[2] = "March";
    // arrmonth[3] = "April";
    // arrmonth[4] = "May";
    // arrmonth[5] = "June";
    // arrmonth[6] = "July";
    // arrmonth[7] = "August";
    // arrmonth[8] = "September";
    // arrmonth[9] = "October";
    // arrmonth[10] = "November";
    // arrmonth[11] = "December";

    arrmonth[0] = "Jan";
    arrmonth[1] = "Feb";
    arrmonth[2] = "Mar";
    arrmonth[3] = "Apr";
    arrmonth[4] = "May";
    arrmonth[5] = "Jun";
    arrmonth[6] = "Jul";
    arrmonth[7] = "Aug";
    arrmonth[8] = "Sept";
    arrmonth[9] = "Oct";
    arrmonth[10] = "Nov";
    arrmonth[11] = "Dec";

    arrday[0] = "Sunday";
    arrday[1] = "Monday";
    arrday[2] = "Tuesday";
    arrday[3] = "Wednesday";
    arrday[4] = "Thursday";
    arrday[5] = "Friday";
    arrday[6] = "Saturday";

    var nmonth = month - 1;
    $("#idmonth").text(arrmonth[nmonth]);
    $("#iddate").text(day);
    $("#idday").text(arrday[d.getDay()]);
    $("#slctmonth").val(nmonth);
    $("#slctyear").val(year);
    $("#ulmlist li:nth-child("+month+")").addClass("mselected");

    $("#slctmonth").change(function() {
        var xx = this.value;
        var yv = $("#slctyear").val();
        $(".cl-dates").empty();
        xx++;
        month=xx;
        $("#ulmlist li:nth-child("+xx+")").addClass("mselected").siblings().removeClass("mselected");
        getdays(gettotaldaysinmonth(xx), getdayinmonth(xx, yv));
    });

    // $("#idnext").click(function () {
    //     nmonth++;
    //     $("#idmonth").text(arrmonth[nmonth]);
    //     $(".cl-dates").empty();
    //     month += 1;
    //     getdays(gettotaldaysinmonth(month), getdayinmonth(month));
    // });
    // $("#idprev").click(function () {
    //     nmonth--;
    //     $("#idmonth").text(arrmonth[nmonth]);
    //     $(".cl-dates").empty();
    //     month -= 1;
    //     getdays(gettotaldaysinmonth(month), getdayinmonth(month));
    // });

    getdays(gettotaldaysinmonth(month), getdayinmonth(month, year));

    function getdays(nm, nmm) {
        for ($y = 0; $y < nmm; $y++) {
            $(".cl-dates").append("<li><div class='cl-div-dates'>&nbsp;</div></li>");
        }
        // $(".cl-dates").prepentTo("");
        for ($i = 1; $i <= nm; $i++) {
            // $(".cl-dates").append("<li><div class='cl-div-dates'>" + $i + "<span class='cl-events'></span></div></li>");
            if ($i == day && month==d.getMonth()+1) {
                $(".cl-dates").append("<li><div class='cl-div-dates dselected'>" + $i +"</div></li>");
            }
            else {
                $(".cl-dates").append("<li><div class='cl-div-dates'>" + $i +"</div></li>");
            }
        }
        var total = $(".cl-dates li").length;
        for ($x = 0; $x < total; $x += 7) {
            $('.cl-dates li:nth-child(' + $x + ')').append('<br>');
        }
    }

    function getdayinmonth(mm, yy) {
        return new Date(mm + '-' + 01 + '-' + yy).getDay();
    }

    function gettotaldaysinmonth(m) {
        var now = new Date();
        return new Date(now.getFullYear(), m, 0).getDate();
    }

    $("#ulmlist li").click(function() {
        var xy = $(this).text();
        var xx;
        if (xy == 'January') {
            xx = 0;
        }
        else if (xy == 'February') {
            xx = 1;
        }
        else if (xy == 'March') {
            xx = 2;
        }
        else if (xy == 'April') {
            xx = 3;
        }
        else if (xy == 'May') {
            xx = 4;
        }
        else if (xy == 'June') {
            xx = 5;
        }
        else if (xy == 'July') {
            xx = 6;
        }
        else if (xy == 'August') {
            xx = 7;
        }
        else if (xy == 'September') {
            xx = 8;
        }
        else if (xy == 'October') {
            xx = 9;
        }
        else if (xy == 'November') {
            xx = 10;
        }
        else if (xy == 'December') {
            xx = 11;
        }
        $(this).addClass("mselected").siblings().removeClass("mselected");
        $("#slctmonth").val(xx);
        var yv = $("#slctyear").val();
        $(".cl-dates").empty();
        xx++;
        month=xx;
        getdays(gettotaldaysinmonth(xx), getdayinmonth(xx, yv));
    });
});