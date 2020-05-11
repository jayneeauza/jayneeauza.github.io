app.controller('registration', function ($location, $scope, $rootScope, $http, $timeout, getdata, savedata, getfromarray) {

    //variables
    $scope.applicantid = "";
    $scope.trackingid = "";
    $scope.departmenttype = "";
    $scope.deptid = "";
    $scope.lname = "";
    $scope.mname = "";
    $scope.fname = "";
    $scope.jhsprevsection = "";
    $scope.jhsincomingsection = "";
    $scope.dateofbirth = "";
    $scope.placeofbirth = "";
    $scope.gender = "";
    $scope.martitalstatus = "";
    $scope.religion = "";
    $scope.citizenship = "";
    $scope.homeaddress = "";
    $scope.homelocation = "";
    $scope.cityaddress = "";
    $scope.citylocation = "";
    $scope.brothercount = "";
    $scope.sistercount = "";
    $scope.birthorder = "";
    $scope.elementaryname = "";
    $scope.elementarytype = "";
    $scope.elementaryyear = "";
    $scope.elementaryaddress = "";
    $scope.highschoolname = "";
    $scope.highschooltype = "";
    $scope.highschoolyyear = "";
    $scope.highschooladdress = "";
    $scope.seniorhighschoolname = "";
    $scope.seniorhighschooltype = "";
    $scope.seniorhighschoolyears = "";
    $scope.seniorhighschooladdress = "";
    $scope.fatherliving = "";
    $scope.fathername = "";
    $scope.fatherphoneno = "";
    $scope.fathereducational = "";
    $scope.fathercourse = "";
    $scope.fatheroccupation = "";
    $scope.fatherposition = "";
    $scope.fatherincome = "5,000.00/ Below";
    $scope.motherliving = "";
    $scope.mothername = "";
    $scope.motherphoneno = "";
    $scope.mothereducational = "";
    $scope.mothercourse = "";
    $scope.motheroccupation = "";
    $scope.motherposition = "";
    $scope.motherincome = "5,000.00/ Below";
    $scope.parentsrelationship = "";
    $scope.supporter = "";
    $scope.supporterincome = "";
    $scope.spousename = "";
    $scope.spousephoneno = "";
    $scope.spouseoccupation = "";
    $scope.spouseincome = "";
    $scope.emergencyname = "";
    $scope.emnergencyrelation = "";
    $scope.emergencyphoneno = "";
    $scope.emergencyaddress = "";
    $scope.collegeschoolname = "";
    $scope.collegeschooltype = "";
    $scope.collegeschoolyyear = "";
    $scope.collegeschooladdress = "";
    $scope.reasonfortransferring = "";
    $scope.emailaddress = "";

    $scope.mydepartmentname = "";
    $scope.departmenttype = "College";
    $scope.dept = [];
    $scope.displayer = "College";
    $scope.years = [];
    $scope.seniorhighschoolname = "";
    $scope.seniorhighschooltype = "";
    $scope.seniorhighschoolyears = "";
    $scope.seniorhighschooladdress = "";
    $scope.collegeschoolname = "";
    $scope.collegeschooltype = "";
    $scope.collegeschoolyyear = "";
    $scope.collegeschooladdress = "";
    $scope.reasonfortransferring = "";
    $scope.supporter = "";
    $scope.supporterincome = "";
    $scope.spousename = "";
    $scope.spousephoneno = "";
    $scope.spouseoccupation = "";
    $scope.spouseincome = "";
    $scope.deptid = 0;
    $scope.applicant = [];

    //variables

    //errorcheck


    var mylabels = [];

    var d = new Date();
    var n = d.getFullYear();


    $scope.searchfullname = function () {
        getdata.searchfullname($scope.fullnamed, getfromarray.getFormattedDate4($scope.birthdated)).then(function (response) {
            console.log(response.data.records);
            if (response.data.records[0].count > 0) {

                var d = []
                d = response.data.records[0];
                $scope.applicantid = d.applicantid;
                s = d.dateofbirth.substring(0, 10);
                $scope.dateofbirth = new Date(s);
                $scope.placeofbirth = d.placeofbirth;
                $scope.gender = d.gender;
                $scope.jhsprevsection = d.jhsprevsection;
                $scope.jhsincomingsection = d.jhsincomingsectiond;
                $scope.departmenttype = d.departmenttype;
                $scope.martitalstatus = d.martitalstatus;
                $scope.deptid = d.deptid;
                $scope.religion = d.religion;
                $scope.citizenship = d.citizenship;
                $scope.homeaddress = d.homeaddress;
                $scope.homelocation = d.homelocation;
                $scope.cityaddress = d.cityaddress;
                $scope.citylocation = d.citylocation;
                $scope.brothercount = parseInt(d.brothercount);
                $scope.mydepartmentname = getfromarray.filters(d.deptid, $scope.dept, "deptid").deptname;
                $scope.sistercount = parseInt(d.sistercount);
                $scope.birthorder = d.birthorder;
                $scope.elementaryname = d.elementaryname;
                $scope.elementarytype = d.elementarytype;
                $scope.elementaryyear = d.elementaryyear;
                $scope.elementaryaddress = d.elementaryaddress;
                $scope.highschoolname = d.highschoolname;
                $scope.highschooltype = d.highschooltype;
                $scope.highschoolyyear = d.highschoolyyear;
                $scope.highschooladdress = d.highschooladdress;
                $scope.seniorhighschoolname = d.seniorhighschoolname;
                $scope.seniorhighschooltype = d.seniorhighschooltype;
                $scope.seniorhighschoolyears = d.seniorhighschoolyears;
                $scope.seniorhighschooladdress = d.seniorhighschooladdress;
                $scope.fatherliving = d.fatherliving;
                $scope.fathername = d.fathername;
                $scope.fatherphoneno = d.fatherphoneno;
                $scope.fathereducational = d.fathereducational;
                $scope.fathercourse = d.fathercourse;
                $scope.fatheroccupation = d.fatheroccupation;
                $scope.fatherposition = d.fatherposition;
                $scope.fatherincome = d.fatherincome;
                $scope.motherliving = d.motherliving;
                $scope.mothername = d.mothername;
                $scope.motherphoneno = d.motherphoneno;
                $scope.mothereducational = d.mothereducational;
                $scope.mothercourse = d.mothercourse;
                $scope.motheroccupation = d.motheroccupation;
                $scope.motherposition = d.motherposition;
                $scope.motherincome = d.motherincome;
                $scope.parentsrelationship = d.parentsrelationship;
                $scope.supporter = d.supporter;
                $scope.supporterincome = d.supporterincome;
                $scope.spousename = d.spousename;
                $scope.spousephoneno = d.spousephoneno;
                $scope.spouseoccupation = d.spouseoccupation;
                $scope.spouseincome = d.spouseincome;
                $scope.emergencyname = d.emergencyname;
                $scope.emnergencyrelation = d.emnergencyrelation;
                $scope.emergencyphoneno = d.emergencyphoneno;
                $scope.emergencyaddress = d.emergencyaddress;
                $scope.collegeschoolname = d.collegeschoolname;
                $scope.collegeschooltype = d.collegeschooltype;
                $scope.collegeschoolyyear = d.collegeschoolyyear;
                $scope.collegeschooladdress = d.collegeschooladdress;
                $scope.reasonfortransferring = d.reasonfortransferring;
                $scope.emailaddress = d.emailaddress;
                $scope.phoneno = d.phoneno;
                $scope.lname = d.lname;
                $scope.mname = d.mname;
                $scope.fname = d.fname;
                $scope.lrn = d.lrn;

                $scope.result = "Found " + d.fname + " " + d.mname + " " + d.lname;

                $timeout(function () {
                    $scope.result = "";
                    $scope.printContents();
                }, 3000);
            } else {
                $scope.result = "Nothing found.";
                $timeout(function () {
                    $scope.result = "";
                }, 3000);
            }

        });
    }
    $scope.searchtrackingno = function () {

        getdata.searchtrackingno($scope.tracks).then(function (response) {
            if (response.data.records[0].count > 0) {

                var d = []
                d = response.data.records[0];
                $scope.applicantid = d.applicantid;
                s = d.dateofbirth.substring(0, 10);
                $scope.dateofbirth = new Date(s);
                $scope.placeofbirth = d.placeofbirth;
                $scope.gender = d.gender;
                $scope.jhsprevsection = d.jhsprevsection;
                $scope.jhsincomingsection = d.jhsincomingsectiond;
                $scope.departmenttype = d.departmenttype;
                $scope.martitalstatus = d.martitalstatus;
                $scope.deptid = d.deptid;
                $scope.religion = d.religion;
                $scope.citizenship = d.citizenship;
                $scope.homeaddress = d.homeaddress;
                $scope.homelocation = d.homelocation;
                $scope.cityaddress = d.cityaddress;
                $scope.citylocation = d.citylocation;
                $scope.brothercount = parseInt(d.brothercount);
                $scope.mydepartmentname = getfromarray.filters(d.deptid, $scope.dept, "deptid").deptname;
                $scope.sistercount = parseInt(d.sistercount);
                $scope.birthorder = d.birthorder;
                $scope.elementaryname = d.elementaryname;
                $scope.elementarytype = d.elementarytype;
                $scope.elementaryyear = d.elementaryyear;
                $scope.elementaryaddress = d.elementaryaddress;
                $scope.highschoolname = d.highschoolname;
                $scope.highschooltype = d.highschooltype;
                $scope.highschoolyyear = d.highschoolyyear;
                $scope.highschooladdress = d.highschooladdress;
                $scope.seniorhighschoolname = d.seniorhighschoolname;
                $scope.seniorhighschooltype = d.seniorhighschooltype;
                $scope.seniorhighschoolyears = d.seniorhighschoolyears;
                $scope.seniorhighschooladdress = d.seniorhighschooladdress;
                $scope.fatherliving = d.fatherliving;
                $scope.fathername = d.fathername;
                $scope.fatherphoneno = d.fatherphoneno;
                $scope.fathereducational = d.fathereducational;
                $scope.fathercourse = d.fathercourse;
                $scope.fatheroccupation = d.fatheroccupation;
                $scope.fatherposition = d.fatherposition;
                $scope.fatherincome = d.fatherincome;
                $scope.motherliving = d.motherliving;
                $scope.mothername = d.mothername;
                $scope.motherphoneno = d.motherphoneno;
                $scope.mothereducational = d.mothereducational;
                $scope.mothercourse = d.mothercourse;
                $scope.motheroccupation = d.motheroccupation;
                $scope.motherposition = d.motherposition;
                $scope.motherincome = d.motherincome;
                $scope.parentsrelationship = d.parentsrelationship;
                $scope.supporter = d.supporter;
                $scope.supporterincome = d.supporterincome;
                $scope.spousename = d.spousename;
                $scope.spousephoneno = d.spousephoneno;
                $scope.spouseoccupation = d.spouseoccupation;
                $scope.spouseincome = d.spouseincome;
                $scope.emergencyname = d.emergencyname;
                $scope.emnergencyrelation = d.emnergencyrelation;
                $scope.emergencyphoneno = d.emergencyphoneno;
                $scope.emergencyaddress = d.emergencyaddress;
                $scope.collegeschoolname = d.collegeschoolname;
                $scope.collegeschooltype = d.collegeschooltype;
                $scope.collegeschoolyyear = d.collegeschoolyyear;
                $scope.collegeschooladdress = d.collegeschooladdress;
                $scope.reasonfortransferring = d.reasonfortransferring;
                $scope.emailaddress = d.emailaddress;
                $scope.phoneno = d.phoneno;
                $scope.lname = d.lname;
                $scope.mname = d.mname;
                $scope.fname = d.fname;
                $scope.lrn = d.lrn;
                if (d.deptid == 0) {
                    $scope.deptid = 0;
                    $scope.mydepartmentname = d.jhsincomingsection;
                }
                if (d.deptid == 1000) {
                    $scope.deptid = 1000;
                    $scope.mydepartmentname = d.jhsincomingsection;
                }
                $scope.result = "Found " + d.fname + " " + d.mname + " " + d.lname;

                $timeout(function () {
                    $scope.result = "";
                    $scope.printContents();
                }, 3000);
            } else {
                $scope.result = "Noting found.";
                $timeout(function () {
                    $scope.result = "";
                }, 3000);
            }

        });
    }
    tracks

    $scope.loaddata = function () {

        //        s = 0;
        //        for (var i = 0; i <= 20; i++) {
        //            (function (ind) {
        //
        //                setTimeout(function () {
        //
        //                    getdata.getapplicant2(s, 300).then(function (response) {
        //
        //                        if ($scope.applicant == undefined || $scope.applicant.length == 0) {
        //                            $scope.applicant = response.data.records;
        //                        } else {
        //                            for (x = 0; x < response.data.records.length; x++) {
        //                                $scope.applicant.push(response.data.records[x]);
        //
        //                            }
        //                        }
        //
        //
        //
        //                    });
        //                    s = s + 300;
        //                }, 5 + (5 * ind));
        //            })(i);
        //        }


        getdata.getenrollmentdept().then(function (response) {
            $scope.dept = response.data.records;


        });


        $scope.years = [];
        for (var x = 1980; x <= n; x++) {
            $scope.years.push(x);
        }



        var newRecord = {
            inputs: "departmenttype",
            labels: "Department Type"
        };
        /*    mylabels.push(newRecord);
            var newRecord = {
                inputs: "deptid",
                labels: "Department"
            };
            mylabels.push(newRecord);*/
        var newRecord = {
            inputs: "lname",
            labels: "Last Name"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "emailaddress",
            labels: "Email Address"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "fname",
            labels: "First Name"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "mname",
            labels: "Middle Name"
        };


        mylabels.push(newRecord);
        var newRecord = {
            inputs: "dateofbirth",
            labels: "Date Of Birth"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "placeofbirth",
            labels: "Place of Birth"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "gender",
            labels: "Gender"
        };
        mylabels.push(newRecord);
        /*  var newRecord = {
              inputs: "martitalstatus",
              labels: "Marital Status"
          };
          mylabels.push(newRecord);*/
        var newRecord = {
            inputs: "religion",

            labels: "Religion"
        }
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "citizenship",
            labels: "Citizenship"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "homeaddress",
            labels: "Home Address"
        };

        mylabels.push(newRecord);
        var newRecord = {
            inputs: "homelocation",
            labels: "Home Location"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "cityaddress",
            labels: "City Address"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "citylocation",
            labels: "City Location"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "brothercount",
            labels: "Brothers"
        };
        //  mylabels.push(newRecord);
        var newRecord = {
            inputs: "sistercount",
            labels: "Sisters"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "birthorder",
            labels: "Birth Order"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "elementaryname",
            labels: "Elementary School Name"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "elementarytype",
            labels: "Elementary School Type"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "elementaryyear",
            labels: "Elementary Year"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "elementaryaddress",
            labels: "Elementary Address"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "highschoolname",
            labels: "High School Name"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "highschooltype",
            labels: "High School Type"
        };
        /*     mylabels.push(newRecord);
             var newRecord = {
                 inputs: "highschoolyyear",
                 labels: "High School Year"
             };
             mylabels.push(newRecord);*/
        var newRecord = {
            inputs: "highschooladdress",
            labels: "High School Address"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "seniorhighschoolname",
            labels: "Senior High School Name"
        };

        //mylabels.push(newRecord);
        var newRecord = {
            inputs: "seniorhighschooltype",
            labels: "Senior High School Type"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "seniorhighschoolyears",
            labels: "Senior High School Year"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "seniorhighschooladdress",
            labels: "Senior High School Address"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "fatherliving",
            labels: "Father Status"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "fathername",
            labels: "Fathers Name"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "fatherphoneno",
            labels: "Fathers Contact Number"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "fathereducational",
            labels: "Fathers Educational Attainment"
        };

        mylabels.push(newRecord);
        var newRecord = {
            inputs: "fathercourse",
            labels: "Fathers Course"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "phoneno",
            labels: "Phone Number"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "fatheroccupation",
            labels: "Fathers Occupation"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "fatherposition",
            labels: "Fathers Position"
        };
        //        mylabels.push(newRecord);
        //        var newRecord = {
        //            inputs: "fatherincome",
        //            labels: "Fathers Income"
        //        };
        //        mylabels.push(newRecord);
        var newRecord = {
            inputs: "motherliving",
            labels: "Mothers Status"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "mothername",
            labels: "Mothers Name"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "motherphoneno",
            labels: "Mothers Phone Number"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "mothereducational",
            labels: "Mothers Educational Attainment"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "mothercourse",
            labels: "Mothers Course"
        };
        //  mylabels.push(newRecord);
        var newRecord = {
            inputs: "motheroccupation",
            labels: "Mothers Occupation"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "motherposition",
            labels: "Mothers Position"
        };
        mylabels.push(newRecord);
        //        var newRecord = {
        //            inputs: "motherincome",
        //            labels: "Mothers Income"
        //        };
        //        mylabels.push(newRecord);
        var newRecord = {
            inputs: "parentsrelationship",
            labels: "Parents Relationship Status"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "supporter",
            labels: "Supporter "
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "supporterincome",
            labels: "Supporter Income"
        };
        //  mylabels.push(newRecord);
        var newRecord = {
            inputs: "spousename",
            labels: "Spouse Name"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "spousephoneno",
            labels: "Spouse Contact Number"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "spouseoccupation",
            labels: "Spouse Occupation"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "spouseincome",
            labels: "Spouse Income"
        };
        // mylabels.push(newRecord);
        var newRecord = {
            inputs: "emergencyname",
            labels: "Emergency Contact Name"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "emnergencyrelation",
            labels: "Emergency Relationship"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "emergencyphoneno",
            labels: "Emergency Contact Number"
        };
        mylabels.push(newRecord);
        var newRecord = {
            inputs: "emergencyaddress",
            labels: "Emergency Contact Address"
        };




    }
    $scope.loaddata();
    //errorcheck


    $scope.clear = function () {

        $scope.jhsprevsection = "";
        $scope.jhsincomingsection = "";
        $scope.trackingid = "";
        $scope.departmenttype = "";
        $scope.deptid = "";
        $scope.lname = "";
        $scope.mname = "";
        $scope.fname = "";
        $scope.dateofbirth = "";
        $scope.placeofbirth = "";
        $scope.gender = "";
        $scope.martitalstatus = "";
        $scope.religion = "";
        $scope.citizenship = "";
        $scope.homeaddress = "";
        $scope.homelocation = "";
        $scope.cityaddress = "";
        $scope.citylocation = "";
        $scope.brothercount = "";
        $scope.sistercount = "";
        $scope.birthorder = "";
        $scope.elementaryname = "";
        $scope.elementarytype = "";
        $scope.elementaryyear = "";
        $scope.elementaryaddress = "";
        $scope.highschoolname = "";
        $scope.highschooltype = "";
        $scope.highschoolyyear = "";
        $scope.highschooladdress = "";
        $scope.seniorhighschoolname = "";
        $scope.seniorhighschooltype = "";
        $scope.seniorhighschoolyears = "";
        $scope.seniorhighschooladdress = "";
        $scope.fatherliving = "";
        $scope.fathername = "";
        $scope.lrn = "";
        $scope.fatherphoneno = "";
        $scope.fathereducational = "";
        $scope.fathercourse = "";
        $scope.fatheroccupation = "";
        $scope.fatherposition = "";
        $scope.fatherincome = "5,000.00/ Below";
        $scope.motherliving = "";
        $scope.mothername = "";
        $scope.motherphoneno = "";
        $scope.mothereducational = "";
        $scope.mothercourse = "";
        $scope.motheroccupation = "";
        $scope.motherposition = "";
        $scope.motherincome = "5,000.00/ Below";
        $scope.parentsrelationship = "";
        $scope.supporter = "";
        $scope.supporterincome = "";
        $scope.spousename = "";
        $scope.spousephoneno = "";
        $scope.spouseoccupation = "";
        $scope.spouseincome = "";
        $scope.emergencyname = "";
        $scope.emnergencyrelation = "";
        $scope.emergencyphoneno = "";
        $scope.emergencyaddress = "";
        $scope.collegeschoolname = "";
        $scope.collegeschooltype = "";
        $scope.collegeschoolyyear = "";
        $scope.collegeschooladdress = "";
        $scope.reasonfortransferring = "";
        $scope.emailaddress = "";
    }

    $scope.changedepttype = function () {

        if ($scope.departmenttype == "College") {
            $scope.displayer = "College";
        } else if ($scope.departmenttype == "Senior High School") {
            $scope.displayer = "Academic Track/Strand";
        } else if ($scope.departmenttype == "Junior High School") {
            $scope.displayer = "Academic Track/Strand";
            $scope.deptid = 0;
        } else {
            $scope.displayer = 'Grade Level/Incoming Section';
            $scope.deptid = 1000;

        }

    }
    $scope.checkid = function () {

        if (getfromarray.filters($scope.deptid, $scope.dept, "deptid").depttype == "College") {

            $scope.mydepartmentname = getfromarray.filters($scope.deptid, $scope.dept, "deptid").deptname;
        } else if (getfromarray.filters($scope.deptid, $scope.dept, "deptid").depttype == "Junior High School") {
            $scope.mydepartmentname = $scope.jhsincomingsection;
        } else {
            $scope.mydepartmentname = getfromarray.filters($scope.deptid, $scope.dept, "deptid").depttype + " (" + getfromarray.filters($scope.deptid, $scope.dept, "deptid").deptname + ") ";
        }


    }


    $scope.applicant = [];

    $scope.orderby = function (d) {

        $scope.orderer = d;
    }
    $scope.loaddata();
    $scope.getaction = function (d) {
        $scope.applicant = d;

    }


    $scope.registerme = function () {
        if ($scope.deptid == "" || $scope.deptid == undefined || $scope.deptid == null) {
            if ($scope.jhsincomingsection != "" && ($scope.deptid == "" || $scope.deptid == undefined || $scope.deptid == null)) {
                $scope.deptid = 0;
                $scope.mydepartmentname = $scope.jhsincomingsection;
            } else {
                var alerter = "Missing inputs for: Department ";
                alerter += " Please complete fields.";

                $scope.alert = alerter;
                $timeout(function () {
                    $scope.alert = "";


                }, 3000);
                return;
            }
        }
        var counter = 0;
        var alerter = "Missing inputs for: ";
        for (var x = 0; x < mylabels.length; x++) {

            if ($scope[mylabels[x].inputs] == undefined || $scope[mylabels[x].inputs] == null || $scope[mylabels[x].inputs] == "") {

                if ((mylabels[x].inputs == "martitalstatus" ||
                        mylabels[x].inputs == "highschoolname" ||
                        mylabels[x].inputs == "highschooltype" ||
                        mylabels[x].inputs == "highschoolyyear" ||
                        mylabels[x].inputs == "highschooladdress" ||
                        mylabels[x].inputs == "seniorhighschoolname" ||
                        mylabels[x].inputs == "seniorhighschooltype" ||
                        mylabels[x].inputs == "seniorhighschoolyears" ||
                        mylabels[x].inputs == "seniorhighschooladdress" ||


                        mylabels[x].inputs == "elementaryname" || mylabels[x].inputs == "elementaryyear" || mylabels[x].inputs == "elementaryaddress" || mylabels[x].inputs == "elementarytype") && $scope.departmenttype == "Grade School") {

                } else if ((
                        mylabels[x].inputs == "martitalstatus" ||
                        mylabels[x].inputs == "seniorhighschoolname" ||
                        mylabels[x].inputs == "seniorhighschooltype" ||
                        mylabels[x].inputs == "seniorhighschoolyears" ||
                        mylabels[x].inputs == "seniorhighschooladdress") && $scope.departmenttype == "Junior High School") {





                } else {
                    alerter = alerter + mylabels[x].labels + ", ";
                    counter = 1;

                }
            }
            if (counter == 1) {
                alerter += " Please complete fields.";

                $scope.alert = alerter;
                $timeout(function () {
                    $scope.alert = "";


                }, 3000);
                return;
            }
            $scope.alert = "Registering Please Wait....";

            $scope.highschoolname = $scope.highschoolname.replace('"', "");
            $scope.elementaryname = $scope.elementaryname.replace('"', "");
            $scope.seniorhighschoolname = $scope.seniorhighschoolname.replace('"', "");


            $scope.trackingid = "LDCU" + getfromarray.getFormattedDate2(new Date());

            if ($scope.applicantid == "" || $scope.applicantid == undefined) {



                getdata.checkapplicant($scope.fname, $scope.mname, $scope.lname, $scope.dateofbirth).then(function (response) {

                    if (response.data.records[0].count == 0) {

                        savedata.saveapplicant($scope.trackingid, $scope.departmenttype, $scope.deptid, $scope.lname, $scope.mname, $scope.fname, $scope.dateofbirth, $scope.placeofbirth, $scope.gender, $scope.martitalstatus, $scope.religion, $scope.citizenship, $scope.homeaddress, $scope.homelocation, $scope.cityaddress, $scope.citylocation, $scope.brothercount, $scope.sistercount, $scope.birthorder, $scope.elementaryname, $scope.elementarytype, $scope.elementaryyear, $scope.elementaryaddress, $scope.highschoolname, $scope.highschooltype, $scope.highschoolyyear, $scope.highschooladdress, $scope.seniorhighschoolname, $scope.seniorhighschooltype, $scope.seniorhighschoolyears, $scope.seniorhighschooladdress, $scope.fatherliving, $scope.fathername, $scope.fatherphoneno, $scope.fathereducational, $scope.fathercourse, $scope.fatheroccupation, $scope.fatherposition, $scope.fatherincome, $scope.motherliving, $scope.mothername, $scope.motherphoneno, $scope.mothereducational, $scope.mothercourse, $scope.motheroccupation, $scope.motherposition, $scope.motherincome, $scope.parentsrelationship, $scope.supporter, $scope.supporterincome, $scope.spousename, $scope.spousephoneno, $scope.spouseoccupation, $scope.spouseincome, $scope.emergencyname, $scope.emnergencyrelation, $scope.emergencyphoneno, $scope.emergencyaddress, $scope.collegeschoolname, $scope.collegeschooltype, $scope.collegeschoolyyear, $scope.collegeschooladdress, $scope.reasonfortransferring, $scope.emailaddress, $scope.phoneno, "Registered", $scope.lrn, $scope.jhsincomingsection, $scope.jhsprevsection).then(function (response) {
                            console.log(response);
                            $scope.alert = "Registered Please Remember your Tracking Number: " + $scope.trackingid;


                            $timeout(function () {
                                // $scope.alert = "";
                                $scope.printContents();


                            }, 2000);


                        });


                    } else {

                        $scope.applicantid = response.data.records[0].applicantid;
                        $scope.alert = "You are Already Registered.";
                        savedata.updateapplicant($scope.applicantid, $scope.trackingid, $scope.departmenttype, $scope.deptid, $scope.lname, $scope.mname, $scope.fname, $scope.dateofbirth, $scope.placeofbirth, $scope.gender, $scope.martitalstatus, $scope.religion, $scope.citizenship, $scope.homeaddress, $scope.homelocation, $scope.cityaddress, $scope.citylocation, $scope.brothercount, $scope.sistercount, $scope.birthorder, $scope.elementaryname, $scope.elementarytype, $scope.elementaryyear, $scope.elementaryaddress, $scope.highschoolname, $scope.highschooltype, $scope.highschoolyyear, $scope.highschooladdress, $scope.seniorhighschoolname, $scope.seniorhighschooltype, $scope.seniorhighschoolyears, $scope.seniorhighschooladdress, $scope.fatherliving, $scope.fathername, $scope.fatherphoneno, $scope.fathereducational, $scope.fathercourse, $scope.fatheroccupation, $scope.fatherposition, $scope.fatherincome, $scope.motherliving, $scope.mothername, $scope.motherphoneno, $scope.mothereducational, $scope.mothercourse, $scope.motheroccupation, $scope.motherposition, $scope.motherincome, $scope.parentsrelationship, $scope.supporter, $scope.supporterincome, $scope.spousename, $scope.spousephoneno, $scope.spouseoccupation, $scope.spouseincome, $scope.emergencyname, $scope.emnergencyrelation, $scope.emergencyphoneno, $scope.emergencyaddress, $scope.collegeschoolname, $scope.collegeschooltype, $scope.collegeschoolyyear, $scope.collegeschooladdress, $scope.reasonfortransferring, $scope.emailaddress, $scope.phoneno, "Registered", $scope.lrn, $scope.jhsincomingsection, $scope.jhsprevsection).then(function (response) {

                            $timeout(function () {
                                $scope.alert = "";

                                $scope.printContents();


                            }, 3000);

                        });





                        $scope.alert = "Updated";
                        $timeout(function () {
                            $scope.alert = "";

                            $scope.printContents();

                        }, 2000);

                    }
                });





            } else {


                savedata.updateapplicant($scope.applicantid, $scope.trackingid, $scope.departmenttype, $scope.deptid, $scope.lname, $scope.mname, $scope.fname, $scope.dateofbirth, $scope.placeofbirth, $scope.gender, $scope.martitalstatus, $scope.religion, $scope.citizenship, $scope.homeaddress, $scope.homelocation, $scope.cityaddress, $scope.citylocation, $scope.brothercount, $scope.sistercount, $scope.birthorder, $scope.elementaryname, $scope.elementarytype, $scope.elementaryyear, $scope.elementaryaddress, $scope.highschoolname, $scope.highschooltype, $scope.highschoolyyear, $scope.highschooladdress, $scope.seniorhighschoolname, $scope.seniorhighschooltype, $scope.seniorhighschoolyears, $scope.seniorhighschooladdress, $scope.fatherliving, $scope.fathername, $scope.fatherphoneno, $scope.fathereducational, $scope.fathercourse, $scope.fatheroccupation, $scope.fatherposition, $scope.fatherincome, $scope.motherliving, $scope.mothername, $scope.motherphoneno, $scope.mothereducational, $scope.mothercourse, $scope.motheroccupation, $scope.motherposition, $scope.motherincome, $scope.parentsrelationship, $scope.supporter, $scope.supporterincome, $scope.spousename, $scope.spousephoneno, $scope.spouseoccupation, $scope.spouseincome, $scope.emergencyname, $scope.emnergencyrelation, $scope.emergencyphoneno, $scope.emergencyaddress, $scope.collegeschoolname, $scope.collegeschooltype, $scope.collegeschoolyyear, $scope.collegeschooladdress, $scope.reasonfortransferring, $scope.emailaddress, $scope.phoneno, "Registered", $scope.lrn, $scope.jhsincomingsection, $scope.jhsprevsection).then(function (response) {

                    $scope.alert = "Registered";
                    $timeout(function () {
                        $scope.alert = "";
                        $scope.printContents();

                    }, 2000);

                });


            }


        }

    }

    $scope.printContents = function () {
        var information = document.getElementById('divprint');
        var information2 = document.getElementById('divprint2');
        var divprintfreshman = document.getElementById('divprintfreshman');
        var divprinttransferee = document.getElementById('divprinttransferee');
        var WindowObject = window.open("", "PrintWindow",
            "width=1100,height=600,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
        WindowObject.document.write('<link rel="stylesheet" type="text/css" href="css/layout.css">');
        WindowObject.document.write('<link rel="stylesheet" type="text/css" href="css/layoutcontent.css">');
        WindowObject.document.write('<link rel="stylesheet" type="text/css" href="css/student.css">');
        WindowObject.document.write('<div id="divhead" class="w3-row">');
        WindowObject.document.write('<div class="column left">');
        WindowObject.document.write('<div class="column left">');
        WindowObject.document.write('<img style="height:100px;width:100px;" src="ico/ico-liceo.png"></img>');
        WindowObject.document.write('</div>');
        WindowObject.document.write('<div class="column right">');
        WindowObject.document.write('<p style="margin-left:1em">Liceo de Cagayan University<br>' + $scope.departmenttype + '<br>A.Y. 2020-2021</p>');
        WindowObject.document.write('</div>');
        WindowObject.document.write('</div>');
        WindowObject.document.write('<div class="column right address">');
        WindowObject.document.write('<p>RNP Blvd., Kauswagan, Cagayan de Oro City 9000<br>inquiries@liceo.edu.ph<br>(63)(88)8584093 to 95 local 109</p>');
        WindowObject.document.write('</div>');
        WindowObject.document.write('</div>');
        WindowObject.document.write('<div id="divprint">');
        WindowObject.document.write(information.innerHTML);
        WindowObject.document.write('</div>');
        WindowObject.document.write('<div id="divprint2" style="page-break-before:always;">');
        WindowObject.document.write(information2.innerHTML);
        WindowObject.document.write('</div>');
        WindowObject.document.write('<div id="divprintfreshman" style="page-break-before:always;">');
        if ($scope.departmenttype == "College") {
            if ($scope.collegeschoolname == "" || $scope.collegeschoolname == undefined) {
                WindowObject.document.write(divprintfreshman.innerHTML);
            } else {
                WindowObject.document.write(divprinttransferee.innerHTML);
            }
        }
        WindowObject.document.write('</div>');
        WindowObject.document.write('<script type="text/javascript">window.print();</script>');

        WindowObject.document.close();
    }

});
