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


  // function for hiding all of the cards
  function hideAll(){
    $("#athCard").hide();
    $("#accSCard").hide();
    $("#campSCard").hide();
    $("#accFCard").hide();
    $("#resHCard").hide();
    $("#diningCard").hide();
    $("#stuRCard").hide();
  }

  // info bulding card slide in from left (when blue link is clicked)
  // academic facilities show and slide out (if clicked again, slides back in)

  $("#accFText").click(function(){
  var check = $("#accFCard").hasClass("cardPresent");
  if (check === false){
    $("#accFCard").addClass("cardPresent");

    hideAll();
    $("#athCard").removeClass("cardPresent");
    $("#accSCard").removeClass("cardPresent");
    $("#campSCard").removeClass("cardPresent");
    $("#resHCard").removeClass("cardPresent");
    $("#diningCard").removeClass("cardPresent");
    $("#stuRCard").removeClass("cardPresent");

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
    $("#stuRCard").animate(
      {left:"-377px"});
  });
  // end Student Recreation
  //

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
  // End hide/show 360 navigation items

    // NEED FOLLOWING because without it after using the select all,
    // the user cannot recheck the individual boxes properly
    // building on click/off check box
    $("#buildings").click(function(){
    var check = !$("#buildings").prop("checked");
    if (check === false){
      $("#buildings").prop("checked", true);
      $("#buildLabel").addClass("is-checked");
    } else if (check === true){
      $("#buildings").removeProp("checked", true);
      $("#buildLabel").removeClass("is-checked");
    }
    });
    $("#parkingLots").click(function(){
    var check = !$("#parkingLots").prop("checked");
    if (check === false){
      $("#parkingLots").prop("checked", true);
      $("#parkingLabel").addClass("is-checked");
    } else if (check === true){
      $("#parkingLots").removeProp("checked", true);
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
    var check = !$("#accPar").prop("checked");
    if (check === false){
      $("#accPar").prop("checked", true);
      $("#accParLabel").addClass("is-checked");
    } else if (check === true){
      $("#accPar").removeProp("checked", true);
      $("#accParLabel").removeClass("is-checked");
    }
    });
    $("#emergency").click(function(){
    var check = !$("#emergency").prop("checked");
    if (check === false){
      $("#emergency").prop("checked", true);
      $("#emergencyLabel").addClass("is-checked");
    } else if (check === true){
      $("#emergency").removeProp("checked", true);
      $("#emergencyLabel").removeClass("is-checked");
    }
    });
    $("#sust").click(function(){
    var check = !$("#sust").prop("checked");
    if (check === false){
      $("#sust").prop("checked", true);
      $("#sustLabel").addClass("is-checked");
    } else if (check === true){
      $("#sust").removeProp("checked", true);
      $("#sustLabel").removeClass("is-checked");
    }
    });
    $("#gender").click(function(){
    var check = !$("#gender").prop("checked");
    if (check === false){
      $("#gender").prop("checked", true);
      $("#genderLabel").addClass("is-checked");
    } else if (check === true){
      $("#gender").removeProp("checked", true);
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

  // listeners with same disclaimer as lines 206-208
  $("#accaF").click(function(){
  var check = !$("#accaF").prop("checked");
  if (check === false){
    $("#accaF").prop("checked", true);
    $("#accaFLabel").addClass("is-checked");
  } else if (check === true){
    $("#accaF").removeProp("checked", true);
    $("#accaFLabel").removeClass("is-checked");
  }
  });
  $("#ath").click(function(){
  var check = !$("#ath").prop("checked");
  if (check === false){
    $("#ath").prop("checked", true);
    $("#athLabel").addClass("is-checked");
  } else if (check === true){
    $("#ath").removeProp("checked", true);
    $("#athLabel").removeClass("is-checked");
  }
  });
  $("#accS").click(function(){
  var check = !$("#accS").prop("checked");
  if (check === false){
    $("#accS").prop("checked", true);
    $("#accSLabel").addClass("is-checked");
  } else if (check === true){
    $("#accS").removeProp("checked", true);
    $("#accSLabel").removeClass("is-checked");
  }
  });
  $("#campS").click(function(){
  var check = !$("#campS").prop("checked");
  if (check === false){
    $("#campS").prop("checked", true);
    $("#campSLabel").addClass("is-checked");
  } else if (check === true){
    $("#campS").removeProp("checked", true);
    $("#campSLabel").removeClass("is-checked");
  }
  });
  $("#resH").click(function(){
  var check = !$("#resH").prop("checked");
  if (check === false){
    $("#resH").prop("checked", true);
    $("#resHLabel").addClass("is-checked");
  } else if (check === true){
    $("#resH").removeProp("checked", true);
    $("#resHLabel").removeClass("is-checked");
  }
  });
  $("#dining").click(function(){
  var check = !$("#dining").prop("checked");
  if (check === false){
    $("#dining").prop("checked", true);
    $("#diningLabel").addClass("is-checked");
  } else if (check === true){
    $("#dining").removeProp("checked", true);
    $("#diningLabel").removeClass("is-checked");
  }
  });
  $("#stuR").click(function(){
  var check = !$("#stuR").prop("checked");
  if (check === false){
    $("#stuR").prop("checked", true);
    $("#stuRLabel").addClass("is-checked");
  } else if (check === true){
    $("#stuR").removeProp("checked", true);
    $("#stuRLabel").removeClass("is-checked");
  }
  });
  // Start second Select All (identical to above so I will omit comments explaining functionality)

  $("#selectallcheck2").click(function(){
    var checkTwo = !$("#selectallcheck2").prop("checked");
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
})();
