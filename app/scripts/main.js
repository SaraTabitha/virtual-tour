
// Author: Sara Tabitha
// Date: 06/2017
// Description: this file handles all click functions for the menu, as well as changing classes for
// the site menu to change between desktop and mobile view, and a fix for the opening of drawers for the
// 360 tour options

// all JS that is not changed depending on the width of the screen
//

//all of the drawers that contain the virtual tour ids
var virtualTourDropdowns = [
    "alumniTour",
    "equityTour",
    "sportsTour",
    "sidewalkTour",
    "clowTour",
    "sageTour",
    "kolfTour",
    "albeeTour",
    "lincolnTour",
    "acTour",
    "appletonTour",
    "eastTour",
    "studentSuccessTour"
]
//add/remove id's for the + button on the drawer; the element is toggled on/off
var virtualTourDropdownButtons = [
    //caps is important because it is the 2nd word in the id
    "Alumni",
    "Equity",
    "Sports",
    "Sidewalk",
    "Clow",
    "Sage",
    "Kolf",
    "Albee",
    "Lincoln",
    "Ac",
    "Appleton",
    "East",
    "StudentSuccess"
]
//for every virtual tour drawer, when clicked it slowly shows the options beneath and the + button changes to a - button
virtualTourDropdowns.forEach(function(thisOne){
    var index = virtualTourDropdowns.indexOf(thisOne);
    $("#" + virtualTourDropdowns[index]).click(function(){
        
        $(this).toggleClass("mdl-shadow--3dp");
        $("#" + virtualTourDropdowns[index] + "Options").toggle("slow");
        $("#add" + virtualTourDropdownButtons[index]).toggle();
        $("#remove" + virtualTourDropdownButtons[index]).toggleClass("remove");
    })
});


    // function for hiding all of the cards beneath the menu for categories
    // function hideAll(){
    //     $("#athCard").hide();
    //     $("#accSCard").hide();
    //     $("#campSCard").hide();
    //     $("#accFCard").hide();
    //     $("#resHCard").hide();
    //     $("#diningCard").hide();
    //     $("#stuRCard").hide();
    // }


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
    //if, on mobile, the map is clicked on then the menu will close
    $("#map").click(function(){
        $("#drawerContents").removeClass("active");
    });


    // function closeAllCards(){
    //   $("#accFCard").removeClass("cardOpen");
    //   $("#athCard").removeClass("cardOpen");
    //   $("#accSCard").removeClass("cardOpen");
    //   $("#campSCard").removeClass("cardOpen");
    //   $("#resHCard").removeClass("cardOpen");
    //   $("#diningCard").removeClass("cardOpen");
    //   $("#stuRCard").removeClass("cardOpen");
    // }
    // accademic facilities// info bulding card slide in from left (when blue link is clicked)
    // academic facilities show and slide out (if clicked again, slides back in)
    // $("#accFText").click(function(){
    //     closeAllCards();
    //     $("#accFiframe").attr("src", "https://www.youtube.com/embed/V4404T_b5No");
    //     $("#accFCard").toggleClass("cardOpen");
    //     $("#drawerContents").toggleClass("active");
    // });
    // // click x button on academic facilities card and it will disappear again
    // $("#accFClose").click(function(){
    //     $("#accFCard").toggleClass("cardOpen");
    //     });
    //     // athletics show and slide out
    //     $("#athText").click(function(){
    //       closeAllCards();
    //         $("#athiframe").attr("src", "https://www.youtube.com/embed/EFlUSVWCA-k");
    //         $("#athCard").toggleClass("cardOpen");
    //         $("#drawerContents").toggleClass("active");
    //     });
    //     // athletics x button hide
    //     $("#athClose").click(function(){
    //         $("#athCard").toggleClass("cardOpen");
    //     });
    //     // start academic services
    //     $("#accSText").click(function(){
    //       closeAllCards();
    //         $("#accSiframe").attr("src", "https://www.youtube.com/embed/f-KdeyV-_dA");
    //         $("#accSCard").toggleClass("cardOpen");
    //         $("#drawerContents").toggleClass("active");
    //     });
    //     // academic services x button hide
    //     $("#accSClose").click(function(){
    //         $("#accSCard").toggleClass("cardOpen");
    //     });
    //     // start campus services show and slide out
    //     $("#campSText").click(function(){
    //       closeAllCards();
    //         $("#campSiframe").attr("src", "https://www.youtube.com/embed/6e59ycgCTi4");
    //         $("#campSCard").toggleClass("cardOpen");
    //         $("#drawerContents").toggleClass("active");
    //     });
    //     //  campus services x button hide
    //     $("#campSClose").click(function(){
    //         $("#campSCard").toggleClass("cardOpen");
    //     });
    //     // start Residence halls show and slide out
    //     $("#resHText").click(function(){
    //       closeAllCards();
    //         $("#resHiframe").attr("src", "https://www.youtube.com/embed/R5RVenezdgM");
    //         $("#resHCard").toggleClass("cardOpen");
    //         $("#drawerContents").toggleClass("active");
    //     });
    //     // Residence halls x button hide
    //     $("#resHClose").click(function(){
    //         $("#resHCard").toggleClass("cardOpen");
    //     });
    //     // start Dining show and slide out
    //     $("#diningText").click(function(){
    //       closeAllCards();
    //         $("#diningiframe").attr("src", "https://www.youtube.com/embed/QBXee6U14FQ");
    //         $("#diningCard").toggleClass("cardOpen");
    //         $("#drawerContents").toggleClass("active");
    //     });
    //     // Dining x button hide
    //     $("#diningClose").click(function(){
    //         $("#diningCard").toggleClass("cardOpen");
    //     });


        // start Student Recreation show and slide out

        // $("#stuRText").click(function(){
        //   closeAllCards();
        //     $("#stuRiframe").attr("src", "https://www.youtube.com/embed/Fi7OiNe2TnU");
        //     $("#stuRCard").toggleClass("cardOpen");
        //     $("#drawerContents").toggleClass("active");
        // });
        // // Student Recreation x button hide
        // $("#stuRClose").click(function(){
        //     $("#stuRCard").toggleClass("cardOpen");
        // });




// function for loading different functions based on screen width
var desktop = function(){
        // the view is at least 1025 px wide
        // web

        // all necessary class changes to move the menu back to the left side
        $("#menu").addClass("mdl-layout--fixed-drawer");
        $("#menuDrawer").addClass("mdl-layout__drawer");

        $("#mobileSpacer").removeClass("mdl-layout-spacer");

        $("#drawerContents").addClass("mdl-layout--fixed-drawer");
        $("#drawerContents").removeClass("mdl-layout__drawer-right");

        // issue with dynamically changing the css top of
        // drawer contents when the search results come down
        // on web differently than on mobile
        // have to add class and manually reset the "top" otherwise
        // it keeps whatever it was previously when going between mobile and desktop
        $("#drawerContents").addClass("drawerContentsAdjust");
        $("#drawerContents").css("top", "0px");

        // height issue with the tour drop downs
        $("#drawerContents").css("height", "900px");

        
        
        
        

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

        //on mobile: if the search is being interacted with and there are more than 3 characters typed: only have the 
        // search results visible when the search is being interacted with
        // (people wanted the search to close when they selected something to look at, but then open back up to the search they were doing when they 
        // clicked back on the search line)
        $("#mobileSearch").click(function(){
            var characters = $("#searchInput").val().length;

            if (characters >= 3){
                if($("#mobileSearch").hasClass("is-focused") === true){
                    $("#searchResults").css("visibility","visible" );
                 }
                 else{
                    $("#searchResults").css("visibility", "hidden");
                 }
            }
             
          });

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
var mobileWidth = 1025;
$(window).resize(function() {
   
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





