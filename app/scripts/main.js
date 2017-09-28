
// Author: Sara Tabitha
// Date: 6/2017
// Description: this file handles all click functions for the menu, as well as changing classes for
// the site menu to change between desktop and mobile view, and a fix for the opening of drawers for the
// 360 tour options

// all JS that is not changed depending on the width of the screen
//


   //functions for clicking checkboxes
  function triggerCheck(name){
  document.getElementById(name + "Label").MaterialCheckbox.check();
  }

  function triggerUncheck(name){
  document.getElementById(name + "Label").MaterialCheckbox.uncheck();
  }

 $("#selectAllOne").change(function(){
     
    //  debugger;
   var buildings = "buildings";
   var parking = "parking";
   var accEnt = "accEnt";
   var accPar = "accPar";
   var emergency = "emergency";
   var sust = "sust";
   var gender = "gender";
       if( !$("#selectAllOne").hasClass("is-checked") ){
         //if select all is unchecked, all others should be unchecked
         triggerUncheck(buildings);
         triggerUncheck(parking);
         triggerUncheck(accEnt);
         triggerUncheck(accPar);
         triggerUncheck(emergency);
         triggerUncheck(sust);
         triggerUncheck(gender);
         
       }else{
         //if selectall is checked, all others should be checked
         triggerCheck(buildings);
         triggerCheck(parking);
         triggerCheck(accEnt);
         triggerCheck(accPar);
         triggerCheck(emergency);
         triggerCheck(sust);
         triggerCheck(gender);
       }

 });


    $("#accaF").click(function(){
      var check = !$("#accaF").prop("checked");
      if (check === false){
        $("#accaF").attr("checked", true);
        $("#accaFLabel").addClass("is-checked");
      } else if (check === true){
        $("#accaF").removeAttr("checked", true);
        $("#accaFLabel").removeClass("is-checked");
      }
      });
      $("#ath").click(function(){
      var check = !$("#ath").prop("checked");
      if (check === false){
        $("#ath").attr("checked", true);
        $("#athLabel").addClass("is-checked");
      } else if (check === true){
        $("#ath").removeAttr("checked", true);
        $("#athLabel").removeClass("is-checked");
      }
      });
      $("#accS").click(function(){
      var check = !$("#accS").prop("checked");
      if (check === false){
        $("#accS").attr("checked", true);
        $("#accSLabel").addClass("is-checked");
      } else if (check === true){
        $("#accS").removeAttr("checked", true);
        $("#accSLabel").removeClass("is-checked");
      }
      });
      $("#campS").click(function(){
      var check = !$("#campS").prop("checked");
      if (check === false){
        $("#campS").attr("checked", true);
        $("#campSLabel").addClass("is-checked");
      } else if (check === true){
        $("#campS").removeAttr("checked", true);
        $("#campSLabel").removeClass("is-checked");
      }
      });
      $("#resH").click(function(){
      var check = !$("#resH").prop("checked");
      if (check === false){
        $("#resH").attr("checked", true);
        $("#resHLabel").addClass("is-checked");
      } else if (check === true){
        $("#resH").removeAttr("checked", true);
        $("#resHLabel").removeClass("is-checked");
      }
      });
      $("#dining").click(function(){
      var check = !$("#dining").prop("checked");
      if (check === false){
        $("#dining").attr("checked", true);
        $("#diningLabel").addClass("is-checked");
      } else if (check === true){
        $("#dining").removeAttr("checked", true);
        $("#diningLabel").removeClass("is-checked");
      }
      });
      $("#stuR").click(function(){
      var check = !$("#stuR").prop("checked");
      if (check === false){
        $("#stuR").attr("checked", true);
        $("#stuRLabel").addClass("is-checked");
      } else if (check === true){
        $("#stuR").removeAttr("checked", true);
        $("#stuRLabel").removeClass("is-checked");
      }
      });
      // Start second Select All (identical to above so I will omit comments explaining functionality)

      $("#selectallcheck2").click(function(){
        var checkTwo = !$("#selectallcheck2").prop("checked");
        if(checkTwo === false){
          // academic facilities
          $("#accaF").attr("checked",true);
          $("#accaFLabel").addClass("is-checked");
          // athletics
          $("#ath").attr("checked",true);
          $("#athLabel").addClass("is-checked");
          // academic services
          $("#accS").attr("checked",true);
          $("#accSLabel").addClass("is-checked");
          // campus services
          $("#campS").attr("checked",true);
          $("#campSLabel").addClass("is-checked");
          // residence halls
          $("#resH").attr("checked",true);
          $("#resHLabel").addClass("is-checked");
          // dining
          $("#dining").attr("checked",true);
          $("#diningLabel").addClass("is-checked");
          // student recreation
          $("#stuR").attr("checked",true);
          $("#stuRLabel").addClass("is-checked");
      } else if (checkTwo === true) {
          // academic facilities
          $("#accaF").removeAttr("checked", true);
          $("#accaFLabel").removeClass("is-checked");
          // athletics
          $("#ath").removeAttr("checked", true);
          $("#athLabel").removeClass("is-checked");
          // academic services
          $("#accS").removeAttr("checked", true);
          $("#accSLabel").removeClass("is-checked");
          // campus services
          $("#campS").removeAttr("checked", true);
          $("#campSLabel").removeClass("is-checked");
          // residence halls
          $("#resH").removeAttr("checked", true);
          $("#resHLabel").removeClass("is-checked");
          // dining
          $("#dining").removeAttr("checked", true);
          $("#diningLabel").removeClass("is-checked");
          // student recreation
          $("#stuR").removeAttr("checked", true);
          $("#stuRLabel").removeClass("is-checked");
      }
    });
    // End second Select All
// VR image click function
// when a new panorama is selected from the menu the
// hideAllVR function makes sure to hide any possible
// visible panoramas
function hideAllVR(){
  $("#titanFieldVR > iframe").css('visibility', 'hidden');
  $("#titanField").removeClass("checked");
  $("#womensCenterVR > iframe").css('visibility', 'hidden');
  $("#womensCenter").removeClass("checked");
  $("#executiveRoomVR > iframe").css('visibility', 'hidden');
  $("#executiveRoom").removeClass("checked");
  $("#sidewalkTour > iframe").css('visibility', 'hidden');
  $("#dempseyStart").removeClass("checked");

  // close button for panoramas
  $("#vrCloseButton").css("visibility", "visible");

}

// close button click
$("#vrCloseButton").click(function(){
  hideAllVR();
  $('#overlay').css('visibility', 'hidden');
  $('#overlay').animate({"opacity": "0"}, "slow");
  $("#vrCloseButton").css("visibility", "hidden");
})

// on click for the menu item that is selected
// to bring up the iframe and grey overlay
$("#titanField").click(function(){
    var check = $(this).hasClass("checked");
    if(check === false){
        hideAllVR();

        $('#overlay').css('visibility', 'visible');
        $('#overlay').animate({"opacity": "0.3"}, "slow");

        $("#vrCloseButton").css("visibility", "visible");

        $("#titanFieldVR > iframe").css('visibility', 'visible');

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#titanFieldVR > iframe").css('visibility', 'hidden');

        $("#vrCloseButton").css("visibility", "hidden");

        $(this).removeClass("checked");
    }
});

$("#womensCenter").click(function(){
  var check = $(this).hasClass("checked");
  if(check === false){
      hideAllVR();
      $('#overlay').css('visibility', 'visible');
      $('#overlay').animate({"opacity": "0.3"}, "slow");

      $("#womensCenterVR > iframe").css('visibility', 'visible');

      $("#vrCloseButton").css("visibility", "visible");

      $(this).addClass("checked");


  } else if (check === true) {
      $('#overlay').css('visibility', 'hidden');
      $('#overlay').animate({"opacity": "0"}, "slow");

      $("#womensCenterVR > iframe").css('visibility', 'hidden');

      $("#vrCloseButton").css("visibility", "hidden");

      $(this).removeClass("checked");
  }
});

$("#executiveRoom").click(function(){
    var check = $(this).hasClass("checked");
    if(check === false){
        hideAllVR();

        $('#overlay').css('visibility', 'visible');
        $('#overlay').animate({"opacity": "0.3"}, "slow");

        $("#executiveRoomVR > iframe").css('visibility', 'visible');

        $("#vrCloseButton").css("visibility", "visible");

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#executiveRoomVR > iframe").css('visibility', 'hidden');

        $("#vrCloseButton").css("visibility", "hidden");

        $(this).removeClass("checked");
    }
});

$("#dempseyStart").click(function(){
    var check = $(this).hasClass("checked");
    if(check === false){
        hideAllVR();

        $('#overlay').css('visibility', 'visible');
        $('#overlay').animate({"opacity": "0.3"}, "slow");

        $("#sidewalkTour > iframe").css('visibility', 'visible');

        $(".vrCloseButton").css("visibility", "visible");

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#sidewalkTour > iframe").css('visibility', 'hidden');

        $("#vrCloseButton").css("visibility", "hidden");

        $(this).removeClass("checked");
    }
});

    // Start hide/show 360 navigation items
    $("#linkOne").click(function(){
        // add shadow
        $(this).toggleClass("mdl-shadow--3dp");
        // div toggle
        $("#linkOneOptions").toggle("slow");
        // + symbol toggle
        $("#addOne").toggle();
        $("#removeOne").toggleClass("remove");
    });
    $("#linkTwo").click(function(){
      // add shadow
      $(this).toggleClass("mdl-shadow--3dp");
        $("#linkTwoOptions").toggle("slow");
        $("#addTwo").toggle();
        $("#removeTwo").toggleClass("remove");
    });
    $("#linkThree").click(function(){
      // add shadow
      $(this).toggleClass("mdl-shadow--3dp");
        $("#linkThreeOptions").toggle("slow");
        $("#addThree").toggle();
        $("#removeThree").toggleClass("remove");
    });
    $("#linkFour").click(function(){
      // add shadow
      $(this).toggleClass("mdl-shadow--3dp");
        $("#linkFourOptions").toggle("slow");
        $("#addFour").toggle();
        $("#removeFour").toggleClass("remove");
    });
    // End hide/show 360 navigation items


    // function for hiding all of the cards beneath the menu for categories
    function hideAll(){
        $("#athCard").hide();
        $("#accSCard").hide();
        $("#campSCard").hide();
        $("#accFCard").hide();
        $("#resHCard").hide();
        $("#diningCard").hide();
        $("#stuRCard").hide();
    }

    //searchfield

    $("#searchIcon").click(function(){

      // checking and using if/else prevents the click function
      //  from having issues with the is-focused class
      // toggling on/off with material design
      var check = $("#mobileSearch").hasClass("mobileSearchOpen");
      if(check === true){
        $("#mobileSearch").removeClass("is-focused");
        $("#searchResults").css("visibility","hidden");
        $(".drawerContentsAdjust").css("top", "0px");
        $("#mobileSearch").removeClass("mobileSearchOpen");
        // console.log("I am true");
      }
      else if (check === false){
        // console.log("I am false");
      $("#mobileSearch").addClass("is-focused");
      $("#mobileSearch").addClass("mobileSearchOpen");

      $("#searchResults").css("visibility","visibile");
      }
      // needs to be: if closed->empty val
      $("#searchInput").val("");
      $("#searchInput").toggleClass("searchInputOpen");
      // $("#searchResults").toggleClass("searchResultsOpen");

    });

    // mobile
    // mobile nav opens on menu button click
    $("#notif").click(function(){
      var check = $("#drawerContents").hasClass("active");
      if(check === false){
        $("#drawerContents").addClass("active");
      }else if (check === true){
        $("#drawerContents").removeClass("active");
      }
      // ^ need to check for class instead of toggle because
      // otherwise the open/close button gets stuck on active
      // going between web and mobile if the menu is open
        // $("#drawerContents").toggleClass("active");
    });


    function closeAllCards(){
      $("#accFCard").removeClass("cardOpen");
      $("#athCard").removeClass("cardOpen");
      $("#accSCard").removeClass("cardOpen");
      $("#campSCard").removeClass("cardOpen");
      $("#resHCard").removeClass("cardOpen");
      $("#diningCard").removeClass("cardOpen");
      $("#stuRCard").removeClass("cardOpen");
    }
    // accademic facilities// info bulding card slide in from left (when blue link is clicked)
    // academic facilities show and slide out (if clicked again, slides back in)
    $("#accFText").click(function(){
        closeAllCards();
        $("#accFiframe").attr("src", "https://www.youtube.com/embed/V4404T_b5No");
        $("#accFCard").toggleClass("cardOpen");
        $("#drawerContents").toggleClass("active");
    });
    // click x button on academic facilities card and it will disappear again
    $("#accFClose").click(function(){
        $("#accFCard").toggleClass("cardOpen");
        });
        // athletics show and slide out
        $("#athText").click(function(){
          closeAllCards();
            $("#athiframe").attr("src", "https://www.youtube.com/embed/EFlUSVWCA-k");
            $("#athCard").toggleClass("cardOpen");
            $("#drawerContents").toggleClass("active");
        });
        // athletics x button hide
        $("#athClose").click(function(){
            $("#athCard").toggleClass("cardOpen");
        });
        // start academic services
        $("#accSText").click(function(){
          closeAllCards();
            $("#accSiframe").attr("src", "https://www.youtube.com/embed/f-KdeyV-_dA");
            $("#accSCard").toggleClass("cardOpen");
            $("#drawerContents").toggleClass("active");
        });
        // academic services x button hide
        $("#accSClose").click(function(){
            $("#accSCard").toggleClass("cardOpen");
        });
        // start campus services show and slide out
        $("#campSText").click(function(){
          closeAllCards();
            $("#campSiframe").attr("src", "https://www.youtube.com/embed/6e59ycgCTi4");
            $("#campSCard").toggleClass("cardOpen");
            $("#drawerContents").toggleClass("active");
        });
        //  campus services x button hide
        $("#campSClose").click(function(){
            $("#campSCard").toggleClass("cardOpen");
        });
        // start Residence halls show and slide out
        $("#resHText").click(function(){
          closeAllCards();
            $("#resHiframe").attr("src", "https://www.youtube.com/embed/R5RVenezdgM");
            $("#resHCard").toggleClass("cardOpen");
            $("#drawerContents").toggleClass("active");
        });
        // Residence halls x button hide
        $("#resHClose").click(function(){
            $("#resHCard").toggleClass("cardOpen");
        });
        // start Dining show and slide out
        $("#diningText").click(function(){
          closeAllCards();
            $("#diningiframe").attr("src", "https://www.youtube.com/embed/QBXee6U14FQ");
            $("#diningCard").toggleClass("cardOpen");
            $("#drawerContents").toggleClass("active");
        });
        // Dining x button hide
        $("#diningClose").click(function(){
            $("#diningCard").toggleClass("cardOpen");
        });
        // start Student Recreation show and slide out

        $("#stuRText").click(function(){
          closeAllCards();
            $("#stuRiframe").attr("src", "https://www.youtube.com/embed/Fi7OiNe2TnU");
            $("#stuRCard").toggleClass("cardOpen");
            $("#drawerContents").toggleClass("active");
        });
        // Student Recreation x button hide
        $("#stuRClose").click(function(){
            $("#stuRCard").toggleClass("cardOpen");
        });




// function for loading different functions based on screen width
var desktop = function(){
        // the view is at least 1025 px wide
        // web

        // all necessary class changes to move the menu back to the left side
        $("#menu").addClass("mdl-layout--fixed-drawer");
        $("#menuDrawer").addClass("mdl-layout__drawer");

        $("#mobileSpacer").removeClass("mdl-layout-spacer");

        $("#drawerContents").addClass("mdl-layout");
        $("#drawerContents").addClass("mdl-layout--fixed-drawer");
        $("#drawerContents").removeClass("mdl-layout__drawer-right");
        $("#drawerDivTwo").addClass("mdl-layout__drawer");
        // issue with dynamically changing the css top of
        // drawer contents when the search results come down
        // on web differently than on mobile
        // have to add class and manually reset the "top" otherwise
        // it keeps whatever it was previously when going between mobile and desktop
        $("#drawerContents").addClass("drawerContentsAdjust");
        $("#drawerContents").css("top", "0px");

        // height issue with the tour drop downs
        $("#drawerContents").css("height", "900px");

        //
        // start academic services show and slide out

        // changing height of drawer (for scroll bar) based on if a Building dropdown is selected
        $("#linkOne").click(function(){
            var check = $(this).hasClass("open");
            if(check === false){
                // takes height of drawer and adds 100 to it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height + y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
            // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).removeClass("open");
            }
        });
        // changing height of drawer (for scroll bar) based on if a Building dropdown is selected
        $("#linkTwo").click(function(){
            var check = $(this).hasClass("open");
            if(check === false){
                // takes height of drawer and adds 100 to it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height + y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
                // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).removeClass("open");
            }
        });
        $("#linkThree").click(function(){
            var check = $(this).hasClass("open");
            if(check === false){
                // takes height of drawer and adds 100 to it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height + y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
                // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).removeClass("open");
            }
        });
        $("#linkFour").click(function(){
            var check = $(this).hasClass("open");
            if(check === false){
                // takes height of drawer and adds 100 to it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height + y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
                // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $(".drawerContentsAdjust").height(value);
                }
                adding(added);
                $(this).removeClass("open");
            }
        });


};
// appearance
var mobile = function(){

        // the view is less than 1025 px wide
        // mobile
        // all necessary class changes to move the menu from the left side
        // to a top menu bar + sliding out menu
        $("#menu").removeClass("mdl-layout--fixed-drawer");
        $("#menuDrawer").removeClass("mdl-layout__drawer");

        $("#mobileSpacer").addClass("mdl-layout-spacer");

        $("#drawerContents").removeClass("mdl-layout");
        $("#drawerContents").removeClass("mdl-layout--fixed-drawer");

        $("#drawerContents").addClass("mdl-layout__drawer-right");

        $("#drawerDivTwo").removeClass("mdl-layout__drawer");

        // search results changing height of menu only needed for desktop
        $("#drawerContents").removeClass("drawerContentsAdjust");
        // need this because otherwise dynamic changes on desktop screw up the menu
        // on mobile and needs to be manually reset this way
        $("#drawerContents").css("top", "70px");
        // height issue with the tour drop downs
        $("#drawerContents").css("height", "auto");

};


if(window.matchMedia("(min-width: 1025px)").matches){
// web
desktop();

} else {
// mobile
mobile();

}

// reloads the page if it is resized so that it reloads this file based on window width! :D
var lastWidth = $(window).width();
var mobileWidth = 1024;
$(window).resize(function() {
    // if($(this).width() !== lastWidth && $(this).width() <= mobileWidth){
    //     setTimeout(function(){
    //       location.reload();
    //     }, 100);
    // }
    // widthFunctions();
    if($(this).width() >= mobileWidth){
      // Screen is desktop
      // console.log("I am going to desktop!");
      desktop();
    } else if ($(this).width() <= mobileWidth){
      // Screen is mobile
      // console.log("I am going to mobile!");
      mobile();
    }
});





