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

// reloads the page if it is resized so that it reloads this file based on window width! :D
var lastWidth = $(window).width();
$(window).resize(function() {
    var mobileWidth = 1024;
    if($(this).width() != lastWidth && $(this).width() <= mobileWidth){
        location.reload();

        // setTimeout(function(){
        //
        // }, 100);
    }

});

// all JS that is not change depending on the width of the screen
//




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
// NEED FOLLOWING because without it after using the select all,
// the user cannot recheck the individual boxes properly
// building on click/off check box
$("#buildings").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#buildLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#buildLabel").removeClass("is-checked");
    }
});
$("#parkingLots").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#parkingLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#parkingLabel").removeClass("is-checked");
    }
});
$("#accEnt").click(function(){
    var check = !$("#accEnt").prop("checked");
    if (check === false){
        $("#accEnt").prop("checked", true);
        $("#accEntLabel").addClass("is-checked");
    } else if (check === true){
        $("#accEnt").removeProp("checked", true);
        $("#accEntLabel").removeClass("is-checked");
    }
});
$("#accPar").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#accParLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#accParLabel").removeClass("is-checked");
    }
});
$("#emergency").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#emergencyLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#emergencyLabel").removeClass("is-checked");
    }
});
$("#sust").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#sustLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#sustLabel").removeClass("is-checked");
    }
});
$("#gender").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#genderLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#genderLabel").removeClass("is-checked");
    }
});

// event listener for the select all button attached to function clicking
$("#selectallcheck").click(function(){

    //checks the input for the checked property (! = not checked)
    var check = !$(this).prop("checked");
    // because it looks at whether or not the property is checked BEFORE The click is put into effect,
    //it has to do the opposite of what the state of the click is eg. If check was false before click
    // then: check everything (and then the select all with check as the very last step (and become true))
    if(check === false){
        // buildings
        $("#buildings").prop("checked", true);
        $("#buildLabel").addClass("is-checked");

        // parking lots
        $("#parkingLots").prop("checked", true);
        $("#parkingLabel").addClass("is-checked");
        // accessible entries
        $("#accEnt").prop("checked", true);
        $("#accEntLabel").addClass("is-checked");
        // Accessible Parking
        $("#accPar").prop("checked", true);
        $("#accParLabel").addClass("is-checked");
        // Emergency Phones
        $("#emergency").prop("checked", true);
        $("#emergencyLabel").addClass("is-checked");
        // sustainability points of interest
        $("#sust").prop("checked", true);
        $("#sustLabel").addClass("is-checked");
        // gender neutral and family bathrooms
        $("#gender").prop("checked", true);
        $("#genderLabel").addClass("is-checked");

    } else if (check === true) {

        // buildings
        $("#buildings").removeProp("checked", true);
        $("#buildLabel").removeClass("is-checked");

        // parking lots
        $("#parkingLots").removeProp("checked", true);
        $("#parkingLabel").removeClass("is-checked");
        // Accessible entries
        $("#accEnt").removeProp("checked", true);
        $("#accEntLabel").removeClass("is-checked");
        // Accessible Parking
        $("#accPar").removeProp("checked", true);
        $("#accParLabel").removeClass("is-checked");
        // Emergency Phones
        $("#emergency").removeProp("checked", true);
        $("#emergencyLabel").removeClass("is-checked");
        // sustainability points of interest
        $("#sust").removeProp("checked", true);
        $("#sustLabel").removeClass("is-checked");
        // gender neutral and family bathrooms
        $("#gender").removeProp("checked", true);
        $("#genderLabel").removeClass("is-checked");

    }
});

// on click listeners with same disclaimer as above
$("#accaF").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#accaFLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#accaFLabel").removeClass("is-checked");
    }
});
$("#ath").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#athLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#athLabel").removeClass("is-checked");
    }
});
$("#accS").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#accSLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#accSLabel").removeClass("is-checked");
    }
});
$("#campS").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#campSLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#campSLabel").removeClass("is-checked");
    }
});
$("#resH").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#resHLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#resHLabel").removeClass("is-checked");
    }
});
$("#dining").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#diningLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#diningLabel").removeClass("is-checked");
    }
});
$("#stuR").click(function(){
    var check = !$(this).prop("checked");
    if (check === false){
        $(this).prop("checked", true);
        $("#stuRLabel").addClass("is-checked");
    } else if (check === true){
        $(this).removeProp("checked", true);
        $("#stuRLabel").removeClass("is-checked");
    }
});

// Start second Select All (identical to above so I will omit comments explaining functionality)
$("#selectallcheck2").click(function(){
    var checkTwo = !$(this).prop("checked");
    if(checkTwo === false){
        // academic facilities
        $("#accaF").prop("checked",true);
        $("#accaFLabel").addClass("is-checked");
        // athletics
        $("#ath").prop("checked",true);
        $("#athLabel").addClass("is-checked");
        // academic services
        $("#accS").prop("checked",true);
        $("#accSLabel").addClass("is-checked");
        // campus services
        $("#campS").prop("checked",true);
        $("#campSLabel").addClass("is-checked");
        // residence halls
        $("#resH").prop("checked",true);
        $("#resHLabel").addClass("is-checked");
        // dining
        $("#dining").prop("checked",true);
        $("#diningLabel").addClass("is-checked");
        // student recreation
        $("#stuR").prop("checked",true);
        $("#stuRLabel").addClass("is-checked");
    } else if (checkTwo === true) {
        // academic facilities
        $("#accaF").removeProp("checked", true);
        $("#accaFLabel").removeClass("is-checked");
        // athletics
        $("#ath").removeProp("checked", true);
        $("#athLabel").removeClass("is-checked");
        // academic services
        $("#accS").removeProp("checked", true);
        $("#accSLabel").removeClass("is-checked");
        // campus services
        $("#campS").removeProp("checked", true);
        $("#campSLabel").removeClass("is-checked");
        // residence halls
        $("#resH").removeProp("checked", true);
        $("#resHLabel").removeClass("is-checked");
        // dining
        $("#dining").removeProp("checked", true);
        $("#diningLabel").removeClass("is-checked");
        // student recreation
        $("#stuR").removeProp("checked", true);
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
  $("#womensCenterImage > iframe").css('visibility', 'hidden');
  $("#womensCenter").removeClass("checked");
  $("#executiveRoomImage > iframe").css('visibility', 'hidden');
  $("#executiveRoom").removeClass("checked");
  $("#sidewalkTour > iframe").css('visibility', 'hidden');
  $("#dempseyStart").removeClass("checked");

}

// on click for the menu item that is selected
// to bring up the iframe and grey overlay
$("#titanField").click(function(){
    var check = $(this).hasClass("checked");
    if(check === false){
        hideAllVR();

        $('#overlay').css('visibility', 'visible');
        $('#overlay').animate({"opacity": "0.3"}, "slow");

        $("#titanFieldImage > iframe").css('visibility', 'visible');

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#titanFieldImage > iframe").css('visibility', 'hidden');

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

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#womensCenterImage > iframe").css('visibility', 'hidden');

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

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#executiveRoomImage > iframe").css('visibility', 'hidden');

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

        $(this).addClass("checked");


    } else if (check === true) {
        $('#overlay').css('visibility', 'hidden');
        $('#overlay').animate({"opacity": "0"}, "slow");

        $("#sidewalkTour > iframe").css('visibility', 'hidden');

        $(this).removeClass("checked");
    }
});





// function for loading different functions based on screen width
if(window.matchMedia("(min-width: 1025px)").matches){
        // the view is at least 1025 px wide
        // web

        //searchfield
        $("#searchIcon").click(function(){
          $("#mobileSearch").addClass("is-focused");
        });

        // academic facilities show and slide out (if clicked again, slides back in)
        $("#accFText").click(function(){
            var check = $("#accFCard").hasClass("cardPresent");
            if (check === false){
                $("#accFCard").addClass("cardPresent");

                // hide + removeClass for others is so that if they leave
                // one open and click on another/click between category links
                // they will open/close properly
                hideAll();
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#accFiframe").attr("src", "https://www.youtube.com/embed/V4404T_b5No");
                $("#accFCard").show();
                $("#accFCard").animate(
                    {left: "377px"});
            } else if (check === true){
                $("#accFCard").removeClass("cardPresent");
                $("#accFCard").animate(
                    {left:"-377px"});
            }
        });

        // click x button on academic facilities card and it will disappear again
        $("#accFClose").click(function(){
            // remove class when x is clicked so that
            // it will open again on the first click when they
            // click the link (now that it depends on whether cardPresent is there)
            $("#accFCard").removeClass("cardPresent");
            $("#accFCard").animate(
                {left:"-377px"});
        });
        // end academic facilities
        //
        // athletics show and slide out

        $("#athText").click(function(){
            var check = $("#athCard").hasClass("cardPresent");
                if (check === false){
                $("#athCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#athiframe").attr("src", "https://www.youtube.com/embed/EFlUSVWCA-k");
                $("#athCard").show();
                $("#athCard").animate(
                    {left: "377px"});
            } else if (check === true){
                $("#athCard").removeClass("cardPresent");
                $("#athCard").animate(
                    {left:"-377px"});
            }
        });
        // athletics x button hide
        $("#athClose").click(function(){
            $("#athCard").removeClass("cardPresent");
            $("#athCard").animate(
                {left:"-377px"});
        });
        // end athletics
        //
        // start academic services show and slide out

        $("#accSText").click(function(){
            var check = $("#accSCard").hasClass("cardPresent");
            if (check === false){
                $("#accSCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#accSiframe").attr("src", "https://www.youtube.com/embed/f-KdeyV-_dA");
                $("#accSCard").show();
                $("#accSCard").animate(
                    {left: "377px"});
            } else if (check === true){
                $("#accSCard").removeClass("cardPresent");
                $("#accSCard").animate(
                    {left:"-377px"});
            }
        });
        // academic services x button hide
        $("#accSClose").click(function(){
            $("#accSCard").removeClass("cardPresent");
            $("#accSCard").animate(
                {left:"-377px"});
        });
        // end accademic services
        //
        // start campus services show and slide out

        $("#campSText").click(function(){
            var check = $("#campSCard").hasClass("cardPresent");
            if (check === false){
                $("#campSCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#campSiframe").attr("src", "https://www.youtube.com/embed/6e59ycgCTi4");
                $("#campSCard").show();
                $("#campSCard").animate(
                    {left: "377px"});
            } else if (check === true){
                $("#campSCard").removeClass("cardPresent");
                $("#campSCard").animate(
                    {left:"-377px"});
            }
        });
        //  campus services x button hide
        $("#campSClose").click(function(){
            $("#campSCard").removeClass("cardPresent");
            $("#campSCard").animate(
                {left:"-377px"});
        });
        // end campus services
        //
        // start Residence halls show and slide out

        $("#resHText").click(function(){
            var check = $("#resHCard").hasClass("cardPresent");
            if (check === false){
                $("#resHCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#resHiframe").attr("src", "https://www.youtube.com/embed/R5RVenezdgM");
                $("#resHCard").show();
                $("#resHCard").animate(
                    {left: "377px"});
            } else if (check === true){
                $("#resHCard").removeClass("cardPresent");
                $("#resHCard").animate(
                    {left:"-377px"});
            }
        });
        // Residence halls x button hide
        $("#resHClose").click(function(){
            $("#resHCard").removeClass("cardPresent");
            $("#resHCard").animate(
                {left:"-377px"});
        });
        // end residence halls
        //
        // start Dining show and slide out

        $("#diningText").click(function(){
        var check = $("#diningCard").hasClass("cardPresent");
            if (check === false){
                $("#diningCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#diningiframe").attr("src", "https://www.youtube.com/embed/QBXee6U14FQ");
                $("#diningCard").show();
                $("#diningCard").animate(
                    {left: "377px"});
            } else if (check === true){
                $("#diningCard").removeClass("cardPresent");
                $("#diningCard").animate(
                    {left:"-377px"});
            }
        });
        // Dining x button hide
        $("#diningClose").click(function(){
            $("#diningCard").removeClass("cardPresent");
            $("#diningCard").animate(
                {left:"-377px"});
        });
        // end Dining
        //
        // start Student Recreation show and slide out

        $("#stuRText").click(function(){
            var check = $("#stuRCard").hasClass("cardPresent");
            if (check === false){
                $("#stuRCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");

                $("#stuRiframe").attr("src", "https://www.youtube.com/embed/Fi7OiNe2TnU");
                $("#stuRCard").show();
                $("#stuRCard").animate(
                    {left: "377px"});
            } else if (check === true){
                $("#stuRCard").removeClass("cardPresent");
                $("#stuRCard").animate(
                    {left:"-377px"});
            }
        });
        // Student Recreation x button hide
        $("#stuRClose").click(function(){
            $("#stuRCard").removeClass("cardPresent");
            $("#stuRCard").animate(
                {left:"-377px"});
        });
        // end Student Recreation
        //

        // changing height of drawer (for scroll bar) based on if a Building dropdown is selected
        $("#linkOne").click(function(){
            var check = $(this).hasClass("open");
            if(check === false){
                // takes height of drawer and adds 100 to it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height + y;
                function adding (value){
                    $("#drawerContents").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
            // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $("#drawerContents").height(value);
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
                    $("#drawerContents").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
                // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $("#drawerContents").height(value);
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
                    $("#drawerContents").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
                // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $("#drawerContents").height(value);
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
                    $("#drawerContents").height(value);
                }
                adding(added);
                $(this).addClass("open");
            } else if (check === true) {
                // takes height of drawer and removes 100 from it
                var height = parseInt($("#drawerContents").height());
                var y = 100;
                var added = height - y;
                function adding (value){
                    $("#drawerContents").height(value);
                }
                adding(added);
                $(this).removeClass("open");
            }
        });


} else{

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
        $("#webSearch").removeClass("mdl-color--yellow-A700");

        // mobile nav opens on menu button click
        $("#notif").click(function(){
            var check = $("#drawerContents").hasClass("clicked");
            if (check === false){
                $(".mdl-layout__drawer-right").animate(
                    {right: "250px"});
                $("#drawerContents").addClass("clicked");
            } else if (check === true){
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});
            }
        });


        //searchfield
        $("#mobileSearch").css("left", "0px");
        $("#searchIcon").click(function(){
          var check = $("#mobileSearch").hasClass("clicked");

          if(check === false){
            $("#mobileSearch").addClass("is-focused");
            $("#mobileSearch").addClass("clicked");
            $("#mobileSearch").css("left", "-14%");
          } else if (check === true){
            $("#mobileSearch").css("left", "0px");
            $("#mobileSearch").removeClass("clicked");
            $("#mobileSearch").removeClass("is-focused");
          }


        });



        // all cards functions are repeated here and change the direction that they
        // slide from

        // accademic facilities// info bulding card slide in from left (when blue link is clicked)
        // academic facilities show and slide out (if clicked again, slides back in)
        $("#accFText").click(function(){
            var check = $("#accFCard").hasClass("cardPresent");
            if (check === false){
                $("#accFCard").addClass("cardPresent");

                // hide + removeClass for others is so that if they leave
                // one open and click on another/click between category links
                // they will open/close properly
                hideAll();
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#accFiframe").attr("src", "https://www.youtube.com/embed/V4404T_b5No");
                $("#accFCard").show();
                $("#accFCard").animate(
                    {top:"0px"});
                // closes menu when this opens
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});

            } else if (check === true){
                $("#accFCard").removeClass("cardPresent");
                $("#accFCard").animate(
                    {top:"-100%"});
            }
        });

        // click x button on academic facilities card and it will disappear again
        $("#accFClose").click(function(){
            // remove class when x is clicked so that
            // it will open again on the first click when they
            // click the link (now that it depends on whether cardPresent is there)
            $("#accFCard").removeClass("cardPresent");
            $("#accFCard").animate(
            {top:"-100%"});
            });
            // end academic facilities
            // athletics show and slide out

            $("#athText").click(function(){
            var check = $("#athCard").hasClass("cardPresent");
            if (check === false){
                $("#athCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#athiframe").attr("src", "https://www.youtube.com/embed/EFlUSVWCA-k");
                $("#athCard").show();
                $("#athCard").animate(
                    {top:"0px"});
                // closes menu when this opens
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});
            } else if (check === true){
                $("#athCard").removeClass("cardPresent");
                $("#athCard").animate(
                    {top:"-100%"});
            }
        });
        // athletics x button hide
        $("#athClose").click(function(){
            $("#athCard").removeClass("cardPresent");
            $("#athCard").animate(
                {top:"-100%"});
        });
        // end athletics
        // start academic services show and slide out

        $("#accSText").click(function(){
        var check = $("#accSCard").hasClass("cardPresent");
            if (check === false){
                $("#accSCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#accSiframe").attr("src", "https://www.youtube.com/embed/f-KdeyV-_dA");
                $("#accSCard").show();
                $("#accSCard").animate(
                    {top:"0px"});
                // closes menu when this opens
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});
            } else if (check === true){
                $("#accSCard").removeClass("cardPresent");
                $("#accSCard").animate(
                    {top:"-100%"});
            }
        });
        // academic services x button hide
        $("#accSClose").click(function(){
            $("#accSCard").removeClass("cardPresent");
            $("#accSCard").animate(
                {top:"-100%"});
        });
        // end accademic services
        // start campus services show and slide out

        $("#campSText").click(function(){
            var check = $("#campSCard").hasClass("cardPresent");
            if (check === false){
                $("#campSCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#campSiframe").attr("src", "https://www.youtube.com/embed/6e59ycgCTi4");
                $("#campSCard").show();
                $("#campSCard").animate(
                    {top:"0px"});
                // closes menu when this opens
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});
            } else if (check === true){
                $("#campSCard").removeClass("cardPresent");
                $("#campSCard").animate(
                    {top:"-100%"});
            }
        });
        //  campus services x button hide
        $("#campSClose").click(function(){
            $("#campSCard").removeClass("cardPresent");
            $("#campSCard").animate(
                {top:"-100%"});
        });
        // end campus services
        // start Residence halls show and slide out

        $("#resHText").click(function(){
            var check = $("#resHCard").hasClass("cardPresent");
            if (check === false){
                $("#resHCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#resHiframe").attr("src", "https://www.youtube.com/embed/R5RVenezdgM");
                $("#resHCard").show();
                $("#resHCard").animate(
                    {top:"0px"});
                // closes menu when this opens
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});
            } else if (check === true){
                $("#resHCard").removeClass("cardPresent");
                $("#resHCard").animate(
                    {top:"-100%"});
            }
        });
        // Residence halls x button hide
        $("#resHClose").click(function(){
            $("#resHCard").removeClass("cardPresent");
            $("#resHCard").animate(
                {top:"-100%"});
        });
        // end residence halls
        // start Dining show and slide out

        $("#diningText").click(function(){
        var check = $("#diningCard").hasClass("cardPresent");
            if (check === false){
                $("#diningCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#stuRCard").removeClass("cardPresent");

                $("#diningiframe").attr("src", "https://www.youtube.com/embed/QBXee6U14FQ");
                $("#diningCard").show();
                $("#diningCard").animate(
                    {top:"0px"});
                // closes menu when this opens
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});
            } else if (check === true){
                $("#diningCard").removeClass("cardPresent");
                $("#diningCard").animate(
                    {top:"-100%"});
            }
        });
        // Dining x button hide
        $("#diningClose").click(function(){
            $("#diningCard").removeClass("cardPresent");
            $("#diningCard").animate(
                {top:"-100%"});
        });
        // end Dining
        // start Student Recreation show and slide out

        $("#stuRText").click(function(){
            var check = $("#stuRCard").hasClass("cardPresent");
            if (check === false){
                $("#stuRCard").addClass("cardPresent");

                hideAll();
                $("#accFCard").removeClass("cardPresent");
                $("#athCard").removeClass("cardPresent");
                $("#accSCard").removeClass("cardPresent");
                $("#campSCard").removeClass("cardPresent");
                $("#resHCard").removeClass("cardPresent");
                $("#diningCard").removeClass("cardPresent");

                $("#stuRiframe").attr("src", "https://www.youtube.com/embed/Fi7OiNe2TnU");
                $("#stuRCard").show();
                $("#stuRCard").animate(
                    {top:"0px"});
                // closes menu when this opens
                $("#drawerContents").removeClass("clicked");
                $(".mdl-layout__drawer-right").animate(
                    {right:"-380px"});
            } else if (check === true){
                $("#stuRCard").removeClass("cardPresent");
                $("#stuRCard").animate(
                    {top:"-100%"});
            }
        });
        // Student Recreation x button hide
        $("#stuRClose").click(function(){
            $("#stuRCard").removeClass("cardPresent");
            $("#stuRCard").animate(
                {top:"-100%"});
        });
        // end Student Recreation


        }


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


})();
