
// Author: Sara Tabitha
// Date: 6/2017
// Description: this file handles all click functions for the menu, as well as changing classes for
// the site menu to change between desktop and mobile view, and a fix for the opening of drawers for the
// 360 tour options

// all JS that is not changed depending on the width of the screen
//

// NEED FOLLOWING because without it after using the select all,
    // the user cannot recheck the individual boxes properly
    // building on click/off check box

    //most browser friendly solution
    //have to check by prop otherwise it doesn't "check" the box in safari
    //have to use attr & removeattr otherwise after using a selectAll the boxes have to be double clicked to be selected again
    //have to also use addClass & removeClass otherwise Chrome and Safari do not behave the same (chrome prefers add/remove class, safari prefers attr)
   
   function clickCheckboxes(name){
     
    //  var name = name.toString();
    $( "#" + name + "Label").toggleClass("is-checked");
    if($("#" + name).prop("checked")){
      $("#" + name).removeProp("checked");
    }else{
      $("#" + name).prop("checked");
    }
   }
   $("#buildings").click(function(){
     var buildings = "buildings";
    clickCheckboxes(buildings);
   });
    // $("#buildings").click(function(){
    // var check = !$("#buildings").prop("checked");
    // if (check === false){
    //   $("#buildings").attr("checked", true);
    //   $("#buildingsLabel").addClass("is-checked");
    // } else if (check === true){
    //   $("#buildings").removeAttr("checked", true);
    //   $("#buildingsLabel").removeClass("is-checked");
    // }
    // });
    $("#parkingLots").click(function(){
    var check = !$("#parkingLots").prop("checked");
    if (check === false){
      $("#parkingLots").attr("checked", true);
      $("#parkingLabel").addClass("is-checked");
    } else if (check === true){
      $("#parkingLots").removeAttr("checked", true);
      $("#parkingLabel").removeClass("is-checked");
    }
    });
    $("#accEnt").click(function(){
    var check = !$("#accEnt").prop("checked");
    if (check === false){
      $("#accEnt").attr("checked", true);
      $("#accEntLabel").addClass("is-checked");
    } else if (check === true){
      $("#accEnt").removeAttr("checked", true);
      $("#accEntLabel").removeClass("is-checked");
    }
    });
    $("#accPar").click(function(){
    var check = !$("#accPar").prop("checked");
    if (check === false){
      $("#accPar").attr("checked", true);
      $("#accParLabel").addClass("is-checked");
    } else if (check === true){
      $("#accPar").removeAttr("checked", true);
      $("#accParLabel").removeClass("is-checked");
    }
    });
    $("#emergency").click(function(){
    var check = !$("#emergency").prop("checked");
    if (check === false){
      $("#emergency").attr("checked", true);
      $("#emergencyLabel").addClass("is-checked");
    } else if (check === true){
      $("#emergency").removeAttr("checked", true);
      $("#emergencyLabel").removeClass("is-checked");
    }
    });
    $("#sust").click(function(){
    var check = !$("#sust").prop("checked");
    if (check === false){
      $("#sust").attr("checked", true);
      $("#sustLabel").addClass("is-checked");
    } else if (check === true){
      $("#sust").removeAttr("checked", true);
      $("#sustLabel").removeClass("is-checked");
    }
    });
    $("#gender").click(function(){
    var check = !$("#gender").prop("checked");
    if (check === false){
      $("#gender").attr("checked", true);
      $("#genderLabel").addClass("is-checked");
    } else if (check === true){
      $("#gender").removeAttr("checked", true);
      $("#genderLabel").removeClass("is-checked");
    }
    });

    // event listener for the select all button attached to function clicking
    $("#selectallcheck").click(function(){

      //checks the input for the checked property (! = not checked)
      var check = !$("#selectallcheck").prop("checked");
    // because it looks at whether or not the property is checked BEFORE The click is put into effect,
    //it has to do the opposite of what the state of the click is ex. If check was false before click
    // do: check everything (and then the select all with check as the very last step (and become true))
      if(check === false){

      // buildings
      $("#buildings").attr("checked", true);
      $("#buildLabel").addClass("is-checked");
      // parking lots
      $("#parkingLots").attr("checked", true);
      $("#parkingLabel").addClass("is-checked");
      // accessible entries
      $("#accEnt").attr("checked", true);
      $("#accEntLabel").addClass("is-checked");
      // Accessible Parking
      $("#accPar").attr("checked", true);
      $("#accParLabel").addClass("is-checked");
      // Emergency Phones
      $("#emergency").attr("checked", true);
      $("#emergencyLabel").addClass("is-checked");
      // sustainability points of interest
      $("#sust").attr("checked", true);
      $("#sustLabel").addClass("is-checked");
      // gender neutral and family bathrooms
      $("#gender").attr("checked", true);
      $("#genderLabel").addClass("is-checked");

      } else if (check === true) {

      // buildings
      $("#buildings").removeAttr("checked", true);
      $("#buildLabel").removeClass("is-checked");
      // parking lots
      $("#parkingLots").removeAttr("checked", true);
      $("#parkingLabel").removeClass("is-checked");
      // Accessible entries
      $("#accEnt").removeAttr("checked", true);
      $("#accEntLabel").removeClass("is-checked");
      // Accessible Parking
      $("#accPar").removeAttr("checked", true);
      $("#accParLabel").removeClass("is-checked");
      // Emergency Phones
      $("#emergency").removeAttr("checked", true);
      $("#emergencyLabel").removeClass("is-checked");
      // sustainability points of interest
      $("#sust").removeAttr("checked", true);
      $("#sustLabel").removeClass("is-checked");
      // gender neutral and family bathrooms
      $("#gender").removeAttr("checked", true);
      $("#genderLabel").removeClass("is-checked");

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
  $("#titanFieldImage > iframe").css('visibility', 'hidden');
  $("#titanField").removeClass("checked");
  $("#womensCenterVR > iframe").css('visibility', 'hidden');
  $("#womensCenter").removeClass("checked");
  $("#executiveRoomImage > iframe").css('visibility', 'hidden');
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

        $("#titanFieldImage > iframe").css('visibility', 'visible');

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#titanFieldImage > iframe").css('visibility', 'hidden');

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

        $("#executiveRoomImage > iframe").css('visibility', 'visible');

        $("#vrCloseButton").css("visibility", "visible");

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#executiveRoomImage > iframe").css('visibility', 'hidden');

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





