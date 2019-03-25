// google map!
// what you need to know: there are markers which are objects that are created and need a lat/lng of where they are on the map
// a title (so when you hover over the marker you know what it is called), and an icon image (made by the artists!)
// when you click on a marker there is an InfoWindow that pops up (also objects that have their content set to a selector for an 
// element in index.html)
// each InfoWindow for a Building has a thumbnail and a link that says "click here" which opens a Popup that has all of the information about 
// the building and tabs for things like bathrooms, sustainability etc. 
// all of this is handled in this file!
// recap: Markers, InfoWindows(might be referred to as Hover), and Popups
//


// function for intitial map load 
function initMap() {
        // center of map (UWO coordinates)
        var uwo = {lat: 44.025098, lng: -88.554610};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: uwo
        });

        /*
        * Promise: https://developers.google.com/web/fundamentals/primers/promises
        * "Promisifying XMLHttpRequest"
        */
        /*
        * NOTE: url = a php file that cannot contain or link/require any files that have html/css/js embedded otherwise it breaks the responseText
        */
        function get(url){
            
            return new Promise(function(resolve, reject){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", url, true); 

            xmlhttp.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        resolve(JSON.parse(this.responseText));
                    }
                    
            };
            xmlhttp.onerror = function(){
                reject(Error("Network Error"));
            };
            xmlhttp.send(); 
            });
        }
        var select_checkbox_id = "selectAllOne";
        var select2_checkbox_id = "selectAllTwo";
   
        /*
        * get() Param: ../Classes/Emergency_Phones/phones_json.php" (url to the php file that returns the json data this function needs)
        * then() Param: response (the parsed JSON data that phones_json.php returned)
        * 
        * Asks to get data from php file, gets data from php file as parsed JSON, splits the JSON up into arrays that we need to make Markers
        * Creates markers by calling createMarkers()
        * Creates Checkbox eventlistener for Emergency Phones & hooks it up to the created google.maps.Marker object array 
        * SelectAll checkbox eventlistener that sets/removes the Emergency Phones markers 
        */
        get("../Classes/Emergency_Phones/phones_json.php").then(function(response){
            //var select_checkbox_id = "selectAllOne";
            var checkbox_slug = "emergency"; 
            var emergencyPhones_markers_array = createMarkersFromResponse(response);
            var emergencyPhones_icon_url = response.icon;
            hookupCheckboxesToMarkers(select_checkbox_id, checkbox_slug, emergencyPhones_markers_array, emergencyPhones_icon_url);
        
        })

        /*
        * Params: 
            select_checkbox_id (string id for the selectAll checkbox this checkbox will be attached to)
            checkbox_slug (string id for the checkbox these markers should be attached to)
            markers_array (array of google.maps.Marker objects)
            icon_url (string url of an icon image for the markers)
        * Stores marker array by calling createMarkersFromResponse and then passes it to a function that creates the Checkboxes event listener
        */
        function hookupCheckboxesToMarkers(select_checkbox_id, checkbox_slug, markers_array, icon_url, markerGroups_array, group_slugs, group_icons){

            selectAllEventListener(select_checkbox_id, checkbox_slug, markers_array, icon_url, markerGroups_array, group_slugs, group_icons);

            checkboxCheck(checkbox_slug, markers_array, icon_url);
            checkboxUncheck(checkbox_slug, markers_array,  markerGroups_array, group_slugs, group_icons);
        }

        /*
        * Params: response (parsed json object containing array of titles, array of latitudes, and an array of longitudes; also an icon string url)
        * Converts object to an array of google.maps.Marker objects and returns the array for use in other methods
        * Return: markers_array (an array of google.maps.Marker objects)
        */
        function createMarkersFromResponse(response){
            var titles = response.titles;
            var lat_arr = response.latitudes; //need to be converted to Number
            var lng_arr = response.longitudes; //need to be converted to Number
            var markers_array = createMarkers(titles, lat_arr, lng_arr);

            return markers_array;
        }
 
        /*
        * Params: titles_arr(array of strings containing titles for the markers)
        *         lat_arr(array of strings of the latitudes for the markers)
        *         lng_array(array of strings of the longitudes for the markers)
        *  Creates a marker_array that will contain the google.maps.Marker objects
        *  Loops through the title array (title_arr, lat_arr and lng_arr should all be the same length)
        *  and puts together new google.maps.Marker objects and adds them to the markers_array array
        * Return: the markers_array filled with google.maps.Marker objects filled with the data from titles_arr, lat_arr and lng_arr
        */
        function createMarkers(titles_arr, lat_arr, lng_arr){
            var markers_array = [];

            titles_arr.forEach(function(this_title, index){
                markers_array[index] = new google.maps.Marker({
                    position: {lat: Number(lat_arr[index]), lng: Number(lng_arr[index])}, //converting strings to Numbers
                    title: decodeHTML(this_title)
                });
            });

            return markers_array;
        }

        /*
        * https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it/7394787
        */
        function decodeHTML(html) {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        }

        /*
        * Params: slug (string of id for checkbox and the checkbox's label elements in the menu)
        *         markers_array (array of google.maps.Marker objects)
        *         icon (string with the url to the marker icon png)
        * Creates an onChange eventlistener for the checkbox
        * Checks if the checkbox's label has the "is-checked" class
        * If the checkbox is checked -> put the markers in the markers_array on the map w/ the right icon image
        */
        function checkboxCheck(slug, markers_array, icon){
            $("#" + slug).change(function(){
                if($("#" + slug + "Label").hasClass("is-checked")){
                    setMarkers(markers_array, icon);
                }
            });
        }

        /*
        * params:
            this_slug (string slug for the checkbox id)
            this_markers_array (array of markers for the one checkbox)
            markerGroups_array (array of all marker groups related to the group of checkboxes that this checkbox is related to)
            group_slugs (array of slugs related to the group of checkboxes that this checkbox is related to)
            group_icons (array of icons for the markers in the groups of the other checkboxes)
        * Else if the checkbox is not checked -> remove the markers from the markers_array from the map
        * also if this checkbox belongs to a group of checkboxes make sure that when this checkbox is unchecked the markers
        * for the other groups are reset
        * note: the reset_checkedMarkers is a fix for markers disappearing from other groups when one checkbox is unchecked
        */
        function checkboxUncheck(this_slug, this_markers_array,  markerGroups_array, group_slugs, group_icons){
            $("#" + this_slug).change(function(){
                if(!$("#" + this_slug + "Label").hasClass("is-checked")){
                    removeMarkers(this_markers_array);
                    if(markerGroups_array!=null && group_slugs!=null && group_icons!=null){
                        reset_checkedMarkers(markerGroups_array, group_slugs, group_icons);
                    }
                }
            });
        }
        
        /*
        * params:
            markerGroups_array (array of groups of markers)
            group_slugs (array of slugs for a checkbox group)
            group_icons (array of marker icon urls for the checkbox group)
        * when a checkbox is unchecked it may result in markers disappearing from other checkbox markerGroups that are shown, 
        * to prevent this when a checkbox is unchecked this function goes through the group of shared markers and resets the marker
        * groups so that any missing markers are no longer missing
        */
        function reset_checkedMarkers(markerGroups_array, group_slugs, group_icons){
            group_slugs.forEach(function(this_slug, index){
                if($("#" + this_slug + "Label").hasClass("is-checked")){
                    setMarkers(markerGroups_array[index], group_icons[index]); 
                }
            });
        }

        /*
        * Params: markers_array (array of google.maps.Marker objects)
        *         icon (string with the url to the marker icon png)
        * loops through the markers_array and displays all of the markers on the map and also sets the icon image for each marker
        */
        function setMarkers(markers_array, icon){
            markers_array.forEach(function(this_marker){
                this_marker.setMap(map); //display on map @ lat/lng
                this_marker.setIcon(icon); //display with this icon image
            });
        }

        /*
        * Params: markers_array(array of google.maps.Marker objects)
        * loops through the markers_array and removes all markers from the map
        */
        function removeMarkers(markers_array){
            markers_array.forEach(function(this_marker){
                this_marker.setMap(null); //remove from map
            });
        }

        /*TODO update comments
        * Params: marker_array (array of google.maps.Marker objects)
        *         icon_url (string containing url for the marker icon image)
        *  Sets up an event listener for the first Select All checkbox in the menu, adds the passed marker_array
        *  to the set of markers that gets added & removed based on the Select All checkbox being checked/unchecked
        */
        function selectAllEventListener(select_checkbox_id, checkbox_slug, markers_array, icon_url, markerGroups_array, group_slugs, group_icons){
            $("#" + select_checkbox_id).change(function(){
                if( !$("#" + select_checkbox_id).hasClass("is-checked") ){
                    //unchecked
                    removeMarkers(markers_array);
                    document.getElementById(checkbox_slug + "Label").MaterialCheckbox.uncheck();

                    if(markerGroups_array!=null && group_slugs!=null && group_icons!=null){
                        reset_checkedMarkers(markerGroups_array, group_slugs, group_icons);
                    }
                }else{
                    //checked
                    setMarkers(markers_array, icon_url);
                    document.getElementById(checkbox_slug + "Label").MaterialCheckbox.check();
                }
            });
        }

        /*
        * Parking Lots
        *   -all lots
        *   -accessible lots 
        */
        get("../Classes/Parking_Lots/parking_json.php").then(function(response){
            //all parking
            var checkbox_slug = "parking"; 
            var allParking = response.allParking;
            var all_parking_markers_array = createMarkersFromResponse(allParking);

            var all_parking_infoWindows = createInfoWindows(allParking.slugs);
            setMarkerClick_openCloseInfo(all_parking_infoWindows, all_parking_markers_array);

            var accessibleParking = response.accessibleParking;
            var accessibleParking_markers = getAllMarkersForTheseIndices(accessibleParking.indices, all_parking_markers_array);

            var markerGroups_array = [all_parking_markers_array, accessibleParking_markers];
            var group_slugs = [checkbox_slug, accessibleParking.checkbox_slug];
            var group_icons = [allParking.icon, accessibleParking.marker_icon];
            hookupCheckboxesToMarkers(select_checkbox_id, checkbox_slug, all_parking_markers_array, allParking.icon, markerGroups_array, group_slugs, group_icons)
            hookupCheckboxesToMarkers(select_checkbox_id, accessibleParking.checkbox_slug, accessibleParking_markers, accessibleParking.marker_icon, markerGroups_array, group_slugs, group_icons)

        })

        /*
        * Params: slugs (array of strings of slugs for infoWindow ids)
        * loops through slugs array and creates google.maps.InfoWindow objects from the divs made in create_parkingInfoWindows.php
        * adds each new object to the infoWindows_array and returns that array
        * 
        * Return: infoWindows_array (an array filled with google.maps.InfoWindow objects)
        */
        function createInfoWindows(slugs){
            var infoWindows_array = [];
            
            slugs.forEach(function(this_slug, index){
                infoWindows_array[index] = new google.maps.InfoWindow({
                    content: document.getElementById(this_slug + "Hover")
                });
            });

            return infoWindows_array;
        }

        /*
        * Params: infoWindows_array (an array of google.maps.InfoWindow objects)
        *         markers_array (an array of google.maps.Marker objects)
        * 
        * Loops through every marker and creates a click function for it; 
        * When clicked: checks if the corresponding infoWindow is open or not (has "hoverOen" class) 
        * if infoWindow is not open -> open it
        * else infoWindow is open -> close it
        */
        function setMarkerClick_openCloseInfo(infoWindows_array, markers_array, thumbnail_array){
            markers_array.forEach(function(this_marker, index){
                this_marker.addListener('click', function(){
                    if(!$("#" + infoWindows_array[index].content.id).hasClass("hoverOpen")){
                        //if not open, open it
                        closeAllInfoWindows(infoWindows_array, markers_array);
                        infoWindows_array[index].open(map, this_marker);
                        $("#" + infoWindows_array[index].content.id).addClass("hoverOpen");

                        if($("#" + infoWindows_array[index].content.id).hasClass("generalHover")){
                            setThumbnailSrc(infoWindows_array[index].content.id, thumbnail_array[index]);
                        }
                    }
                    else{
                        //if open, close it
                        $("#" + infoWindows_array[index].content.id).removeClass("hoverOpen");
                        closeAllInfoWindows(infoWindows_array, markers_array);
                    }
                });
            });
        }

        /*
        * Params: infoWindows_array (an array of google.maps.InfoWindow objects)
        *         markers_array (an array of google.maps.Marker objects)
        *  Closes all infoWindows in the array
        */
        function closeAllInfoWindows(infoWindows_array, markers_array){
            infoWindows_array.forEach(function(this_infoWindow, index){
                this_infoWindow.close(map, markers_array[index]);

                if($("#" + infoWindows_array[index].content.id).hasClass("generalHover")){
                    clearThumbnailSrc(this_infoWindow.content.id);
                }
            });
        }

        function getAllMarkersForTheseIndices(indices_array, all_markers_array){
            var all_markers_for_these_indices = [];

            indices_array.forEach(function(this_index){
                all_markers_for_these_indices.push(all_markers_array[this_index]);
            });

            return all_markers_for_these_indices;
        }

        /*
        * Buildings 
        *   -pre-defined categories:
        *       -all buildings
        *       -accessible entries
        *       -sustainability points of interest
        *       -gender neutral and family restrooms
        * 
        * Categories
        *   -all Building Categories submit to the CMS
        *       -building attached to each category is defined by checking them in the categories list when a building is created/edited in the CMS
        */
        get("../Classes/Buildings/buildings_json.php").then(function(response){
            //console.log(response);

            //all buildings
            var checkbox_slug = "buildings";
            var allBuildings = response.allBuildings;
            var building_slugs_array = allBuildings.slugs;
            var popups = response.popups;

            popups.forEach(function(this_popup){
                if(this_popup.tabs.length > 1){
                    hideAllTabs(this_popup);
                    showThisTab(this_popup, this_popup.tabs[0]); //show about tab 
                    popupLiClickEvents(this_popup);
                }
            });
            
            var building_map_objects = building_createMarkersAndInfoWindows(allBuildings, building_slugs_array, popups);

            var building_markers_array = building_map_objects[0];
            var building_infoWindows_array = building_map_objects[1];
            var building_thumbnail_array = response.allBuildings.thumbnail_urls;
           
            //if google.maps.Marker is clicked -> open corresponding google.maps.InfoWindow
            setMarkerClick_openCloseInfo(building_infoWindows_array, building_markers_array, building_thumbnail_array);
            

            //set building markers on page load
            setMarkers(building_markers_array, allBuildings.icon);
            document.getElementById("buildingsLabel").MaterialCheckbox.check();

            //accessible, sustainable and bathroom Buildings
            var accessibleBuildings = response.accessibleBuildings;
            var accessibleBuilding_markers = getAllMarkersForTheseIndices(accessibleBuildings.indices, building_markers_array);
        
            var sustainableBuildings = response.sustainableBuildings;
            var sustainableBuildings_markers = getAllMarkersForTheseIndices(sustainableBuildings.indices, building_markers_array);
       
            var bathroomBuildings = response.bathroomBuildings;
            var bathroomBuildings_markers = getAllMarkersForTheseIndices(bathroomBuildings.indices, building_markers_array);
        

            var markerGroups_array = [building_markers_array, accessibleBuilding_markers, sustainableBuildings_markers, bathroomBuildings_markers];
            var group_slugs = [checkbox_slug, accessibleBuildings.checkbox_slug, sustainableBuildings.checkbox_slug, bathroomBuildings.checkbox_slug];
            var group_icons = [allBuildings.icon, accessibleBuildings.marker_icon, sustainableBuildings.marker_icon, bathroomBuildings.marker_icon];

            /*
                categories
            */
            var categories = response.categories;
            var category_markers_array = [];
            categories.forEach(function(this_category){
                var category_markers = getAllMarkersForTheseIndices(this_category.indices, building_markers_array);
                category_markers_array.push(category_markers);
                markerGroups_array.push(category_markers);
                group_slugs.push(this_category.checkbox_slug);
                group_icons.push(this_category.marker_icon);
            });

            hookupCheckboxesToMarkers(select_checkbox_id,checkbox_slug, building_markers_array, allBuildings.icon, markerGroups_array, group_slugs, group_icons);
            hookupCheckboxesToMarkers(select_checkbox_id, accessibleBuildings.checkbox_slug, accessibleBuilding_markers, accessibleBuildings.marker_icon, markerGroups_array, group_slugs, group_icons);
            hookupCheckboxesToMarkers(select_checkbox_id, sustainableBuildings.checkbox_slug, sustainableBuildings_markers, sustainableBuildings.marker_icon, markerGroups_array, group_slugs, group_icons);
            hookupCheckboxesToMarkers(select_checkbox_id, bathroomBuildings.checkbox_slug, bathroomBuildings_markers, bathroomBuildings.marker_icon, markerGroups_array, group_slugs, group_icons);

            categories.forEach(function(this_category, index){
                hookupCheckboxesToMarkers(select2_checkbox_id, this_category.checkbox_slug, category_markers_array[index], this_category.marker_icon, markerGroups_array, group_slugs, group_icons);

            });
        })

        /*
        * params:
        *   building_json (json string of allbuilding info for markers)
        *   slugs_array (array of strings of all of the building slugs)
        *   popups (array of all popup data -> how many tabs, images/video srcs)
        * this function creates a group for google.maps.Marker & google.maps.InfoWindow objects from the params it is passed
        * return: 
        *   map_objects (2d array of google.maps.Marker[0] & google.maps.InfoWindow[1] object arrays)
        */
        function building_createMarkersAndInfoWindows(building_json, slugs_array, popups){
            var markers_array = createMarkersFromResponse(building_json);
            var infoWindows_array = createInfoWindows(slugs_array);

            moreInfoLinkClickEvent(slugs_array, popups);
            popupCloseButtonClickEvent(slugs_array);
    
            var map_objects = [markers_array, infoWindows_array];
            return map_objects;
       }

       /*
        * params:
                infoWindow_id (string id of the html infoWindow (not the google.maps.InfoWindow))
                this_thumbnail_url (string url of the thumnbnail image for the html infoWindow)

            * if the infowindow is for a building(has "generalHover" class, as opposed to a "parkingHover"),
            * set the url for the img's src attribute so the thumbnail shows up on the infoWindow
        */
        function setThumbnailSrc(infoWindow_id, this_thumbnail_url){
            if($("#" + infoWindow_id).hasClass("generalHover")){
                $("#" + infoWindow_id + "Thumbnail").attr("src", this_thumbnail_url);
            }
        }

        /*
        * params:
            infoWindow_id (string id of the html infoWindow (not the google.maps.InfoWindow))
        * if the infowindow is for a building(has "generalHover" class, as opposed to a "parkingHover"),
        * clear the img's src attribute (so the page isn't super slow from loading a ton of images) 
        */
        function clearThumbnailSrc(infoWindow_id){
            if($("#" + infoWindow_id).hasClass("generalHover")){
                $("#" + infoWindow_id + "Thumbnail").attr("src", "#");
            }
        }

        //TODO comment
        function moreInfoLinkClickEvent(slugs_array, popups){
            slugs_array.forEach(function(this_slug, index){
                var about_image_src = popups[index].tabs[0].media;
                 $("#" + this_slug + "Link").click(function(){
                     openPopup(this_slug);
                     //sets about image
                     $("#" + this_slug + "AboutImage > img").attr("src", about_image_src);
                 });
            });
        }

        //TODO comment
        function popupCloseButtonClickEvent(slugs_array){
             slugs_array.forEach(function(this_slug){
                 $("#" + this_slug + "PopupClose").click(function(){
                     closePopup(this_slug);
                     //removes about image
                     $("#" + this_slug + "AboutImage > img").attr("src", "");
                 })
             });
        }
     
        // TODO: ugh tabs

        //TODO comment
        function openPopup(slug){
             $("#overlay").css('visibility', 'visible');
             $("#overlay").animate({"opacity": "0.3"}, "slow");
     
             $("#" + slug + "Popup").css('visibility', 'visible');
             $("#" + slug + "Popup").animate({'opacity': "1"}, "slow");
        }

        //TODO comment
        function closePopup(slug){
             $("#overlay").animate({'opacity': '0'}, "slow");
             $("#overlay").css('visibility', "hidden");
     
             $("#" + slug + "Popup").animate({"opacity": "0"}, "slow");
             $("#" + slug + "Popup").css("visibility", "hidden");
        }

        function popupLiClickEvents(popup){
            popup.tabs.forEach(function(this_tab){
                $("#" + popup.buildingSlug + this_tab.tabSlug + "Li").click(function(){
                    hideAllTabs(popup);
                    showThisTab(popup, this_tab);
                });
            });

        }

        //TODO comment
        function showThisTab(popup, tab){
            switch(tab.tabType){
                case "noMedia":
                    $("#" + popup.buildingSlug + tab.tabSlug).css("display", "initial");
                break;
                case "image":
                    $("#" + popup.buildingSlug + tab.tabSlug + "Image > img").attr("src", tab.media);
                    $("#" + popup.buildingSlug + tab.tabSlug + "Image").css("display", "block");
                    $("#" + popup.buildingSlug + tab.tabSlug + "Text").css("display", "initial");
                break;
                case "video":
                    $("#" + popup.buildingSlug + "iframe").attr("src", tab.media);
                    $("#" + popup.buildingSlug + tab.tabSlug + "Video").css("display", "initial");
                    $("#" + popup.buildingSlug + tab.tabSlug + "Text").css("display", "initial");
            }
        }
        //TODO comment
        function hideAllTabs(popup){
            popup.tabs.forEach(function(this_tab){
                switch(this_tab.tabType){
                    case "noMedia":
                        $("#" + popup.buildingSlug + this_tab.tabSlug).css("display", "none");
                    break;
                    case "image":
                        $("#" + popup.buildingSlug + this_tab.tabSlug + "Image > img").attr("src", "");
                        $("#" + popup.buildingSlug + this_tab.tabSlug + "Image").css("display", "none");
                        $("#" + popup.buildingSlug + this_tab.tabSlug + "Text").css("display", "none");
                    break;
                    case "video":
                        $("#" + popup.buildingSlug + "iframe").attr("src", "");
                        $("#" + popup.buildingSlug + this_tab.tabSlug + "Video").css("display", "none");
                        $("#" + popup.buildingSlug + this_tab.tabSlug + "Text").css("display", "none");
                }
            });
        }
        
        /*
        O L D   C O D E   B E L O W
        */
         //start of code for search that needs to interact with the infoWindows and Popups here in map.js
         $( "#searchInput" ).keyup(function() {
            //takes the length of the value of the string in
            // the search and returns a number
            // ex. "hello" = 5
            var characters = $(this).val().length;
            // console.log("# of characters in search:" + characters);

            //if someone types it opens the search but does not run a search until they've typed at least 3 characters
            if(  characters < 3 ){
                $("#searchResults").css("visibility", "hidden");
                // web adjustment only
                $(".drawerContentsAdjust").css("top", "0px ");
                //if there are is no input: clear the search result list 
                $("#searchResults").html("<ul><li id='noResults' class='text'></li></ul>");
            } else if ( characters >= 3 ) {
                callAjax();
                  
            }
         });
         
        

        //function for closing all of the popups (making them invisible)
        // function closeAllPopup(){
        //   //debugger;
        //      for(cc = 0; cc < 45; cc++){
        //          $("#"+ allMarkersInfo[cc].shortHand + "Popup").css('visibility', 'hidden');
        //      }
        // }
            
          function callAjax(){
          $.ajax({
            type: "GET",
            url: "../php/search.php",
            data: ({search: $("#searchInput").val()}),
            success: function(results){
        
                // console.log("success!");
                // console.log(results);
            
                $("#searchResults").css("visibility","visible");
            
            
                var emptyResult = "<ul><li class='firstResults text'><h6>Search Results:</h6></li></ul>";
              if( emptyResult == results){
                    // note to self: if you want to add class/id to these make sure to use
                    // different quotations than you use to wrap the string~
                    // "" string, '' for classes and ids
                    $("#searchResults").html("<ul><li id='noResults' class='text'> No results</li></ul>");
            
              } else if (emptyResult !== results){
                    $("#searchResults").html(results);
                    //do while loop that selects all present list items and creates + assigns a unique id based on their value
                    // which is converted into a lowercase string without spaces (and has "Result" added onto it)
                    var n = 1;
                    // counting number of list items
                    var listItems = $("#searchResults > ul").children().length;
                    do {
                    n++
                    // gets value of element
                    // / /g <- selects all spaces in the string
                    var customId = $("#searchResults > ul > li:nth-child(" + n + ")").text().toLowerCase().replace(/ /g, "");
                    // sets the id of the element ^ to the string returned above
                    $("#searchResults > ul > li:nth-child(" + n + ")").prop("id", customId + "Result");
                    clickResults(customId);
                    // increase n until it matches the number of listItems that are present
                    } while (n <= listItems);
                    //array of the ids that are generated above for the search result list items
                    var possibleIds = [
                        //0 albee
                        "albeehall",
                        //1 baseball
                        "alumnibaseballstadium",
                        //2 
                        "alumniwelcomeandconferencecenter",
                        //3 ac
                        "artsandcommunicationscenter",
                        //4 athletic
                        "athleticservicebuilding",
                        //5 blackhawk
                        "blackhawkcommons",
                        //6 biodigester
                        "biodigester",
                        //7 buckstaff
                        "buckstaffplanetarium",
                        //8 equity 
                        "campuscenterforequityanddiversity",
                        //9 campus services
                        "campusservices",
                        //10 ceramics
                        "ceramicslaboratory",
                        //11 clow
                        "clowsocialsciencecenter",
                        //12 gardens
                        "communitygardens",
                        //13 dempsey
                        "dempseyhall",
                        //14 donner
                        "donnerhall",
                        //15 east
                        "easthall",
                        //16 environmental
                        "environmentalscienceandresearchcenter",
                        //17 evans
                        "evanshall",
                        //18 fletcher
                        "fletcherhall",
                        //19 fredric
                        "fredricmarchtheater",
                        //20 gruenhagen
                        "gruenhagenconferencecenter",
                        //21 halsey
                        "halseysciencecenter",
                        //22 harrington
                        "harringtonhall",
                        //23 heating 
                        "heatingplant",
                        //24 parking ramp
                        "highavenueparkingramp",
                        //25 horizon
                        "horizonvillage",
                        //26 kolf
                        "kolfsportscenter",
                        //27 lincoln
                        "lincolnhall",
                        //28 multicultural
                        "multiculturaleducationcenter",
                        //29 nursing
                        "nursingeducationbuilding",
                        //30 oviatt
                        "oviatthouse",
                        //31 pollock
                        "pollockhouse",
                        //32 polk
                        "polklibrary",
                        //33 radford
                        "radfordhallandstudenthealthcenter",
                        //34 reeve
                        "reevememorialunion",
                        //35 sage
                        "sagehall",
                        //36 scott
                        "scotthall",
                        //37 stewart
                        "stewarthall",
                        //38 recreation
                        "studentrecreationandwellnesscenter",
                        //39 success
                        "studentsuccesscenter",
                        //40 swart
                        "swarthall",
                        //41 taylor
                        "taylorhall",
                        //42 titan
                        "titanstadium",
                        //43 police
                        "universitypolicestation",
                        //44 webster
                        "websterhall"
                    ]
                    // console.log(n);
                    // console.log("number of list elements:" + listItems);
                    // $("#albeehallResult").click(function(){
                    //   $("#albeeLink").trigger("click");
                    // });
                     function clickResults(id){
                    // debugger;
                    // console.log(id);
                           $("#"+ id + "Result").click(function(){
                          closeAllPopup();
                          //checks id of clicked result and triggers a click for the "more info" link on the corresponding infoWindow
                          //debugger;
                         for(bb = 0; bb < 45; bb++){
                             if (id == possibleIds[bb]){
                                popupOpen(allMarkersInfo[bb].shortHand);
                            }
                          }
                     });
                }
              }
        
              var check = $("#drawerContents").hasClass("drawerContentsAdjust");
              if(check === true){
                // only for desktop
                // adjust position of menu drawer based on height of search results
                function getTotalHeight(){
                  var searchHeight = $("#searchResults").height();
                  // var mobileHeaderHeight = $("#mobileHeader").height();
                  // var webSearchHeight = $("#webSearch").height();
                  return(searchHeight - 3);
                }
                // console.log("Height of search div:" + getTotalHeight());
        
                // get element, apply css to the element(not to the class)
                // for mobile: top reset is forced with another .css
                $(".drawerContentsAdjust").css("top", getTotalHeight());
        
              }
        
        
            }
          })
        };
        //end search code
        //
    
}