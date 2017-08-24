/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

// Your custom JavaScript goes here



// all JS that is not change depending on the width of the screen
//


// NEED FOLLOWING because without it after using the select all,
// the user cannot recheck the individual boxes properly
// building on click/off checks check box
$("#buildings").click(function(){
  $("#buildLabel").toggleClass("is-checked");
});
$("#parkingLots").click(function(){
  $("#parkingLabel").toggleClass("is-checked");
});
$("#accEnt").click(function(){
  $("#accEntLabel").toggleClass("is-checked");
});
$("#accPar").click(function(){
  $("#accParLabel").toggleClass("is-checked");
});
$("#emergency").click(function(){
  $("#emergencyLabel").toggleClass("is-checked");
});
$("#sust").click(function(){
  $("#sustLabel").toggleClass("is-checked");
});
$("#gender").click(function(){
  $("#genderLabel").toggleClass("is-checked");
});

// on click for the select all button
$("#selectallcheck").click(function(){
$("#buildLabel").toggleClass("is-checked");
$("#parkingLabel").toggleClass("is-checked");
$("#accEntLabel").toggleClass("is-checked");
$("#accParLabel").toggleClass("is-checked");
$("#emergencyLabel").toggleClass("is-checked");
$("#sustLabel").toggleClass("is-checked");
$("#genderLabel").toggleClass("is-checked");
});


// on click  with same disclaimer as above
$("#accaF").click(function(){
    $("#accaFLabel").toggleClass("is-checked");
});
$("#ath").click(function(){
    $("#athLabel").toggleClass("is-checked");
});
$("#accS").click(function(){
  $("#accSLabel").toggleClass("is-checked");
});
$("#campS").click(function(){
  $("#campSLabel").toggleClass("is-checked");
});
$("#resH").click(function(){
    $("#resHLabel").toggleClass("is-checked");
});
$("#dining").click(function(){
    $("#diningLabel").toggleClass("is-checked");
});
$("#stuR").click(function(){
  $("#stuRLabel").toggleClass("is-checked");
});

// second Select All
$("#selectallcheck2").click(function(){
$("#accaFLabel").toggleClass("is-checked");
$("#athLabel").toggleClass("is-checked");
$("#accSLabel").toggleClass("is-checked");
$("#campSLabel").toggleClass("is-checked");
$("#resHLabel").toggleClass("is-checked");
$("#diningLabel").toggleClass("is-checked");
$("#stuRLabel").toggleClass("is-checked");

});

// VR image click function
// when a new panorama is selected from the menu the
// hideAllVR function makes sure to hide any possible
// visible panoramas
function hideAllVR(){
  $("#titanFieldImage > iframe").css('visibility', 'hidden');
  $("#titanField").removeClass("checked");
  $("#womensCenterImage > iframe").css('visibility', 'hidden');
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

        $("#womensCenterImage > iframe").css('visibility', 'visible');

        $("#vrCloseButton").css("visibility", "visible");

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#womensCenterImage > iframe").css('visibility', 'hidden');

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
        // div toggle
        $("#linkOneOptions").toggle("slow");
        // + symbol toggle
        $("#addOne").toggle();
    });
    $("#linkTwo").click(function(){
        $("#linkTwoOptions").toggle("slow");
        $("#addTwo").toggle();
    });
    $("#linkThree").click(function(){
        $("#linkThreeOptions").toggle("slow");
        $("#addThree").toggle();
    });
    $("#linkFour").click(function(){
        $("#linkFourOptions").toggle("slow");
        $("#addFour").toggle();
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
      }
      else if (check === false){
      $("#mobileSearch").addClass("is-focused");
      }
      // needs to be: if closed->empty val
      $("#searchInput").val("");
      $("#mobileSearch").toggleClass("mobileSearchOpen");
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




})();
