/*
* functions for all of the Building Categories
*/
var category_slug_array = [];

//category "Select All" checkbox event
//if selectall checkbox is checked, check all category checkboxes; else uncheck all category checkboxes
$("#selectAllTwo").change(function(){
    var id = $(this).attr("id");
    
    $.each(category_slug_array, function(i, category_slug){
        if(isChecked(id)){
            checkCheckbox(category_slug);
        }
        else{
            uncheckCheckbox(category_slug);

        }
    });
});

//slug: string, id of category
function isChecked(slug){
    if( $("#" + slug).hasClass("is-checked") ){
        return true;
    }
    else{
        return false;
    }
}
//slug: string, id of category
function checkCheckbox(slug){
    //can only use javascript selector apparently for MaterialCheckbox.function()
    document.getElementById( slug + "Label").MaterialCheckbox.check();
}
//slug: string, id of category
function uncheckCheckbox(slug){
    //can only use javascript selector apparently for MaterialCheckbox.function()
    document.getElementById( slug + "Label").MaterialCheckbox.uncheck();
}

//response: json object containing array of category slugs & an array of corresponding youtube_urls
get('../Classes/Building_Categories/categories_json.php').then(function(response){
   
    category_slug_array = response.buildingCategories.slugs;
    var category_youtube_urls = response.buildingCategories.youtube_urls;

    //loops through all of the slugs in the category_slug_array and makes the click events for the menu <a> tag (open/close card), and x button (close card)
    //
    $.each(category_slug_array, function(i, category_slug){
        create_menu_link_ClickEvent(category_slug, category_youtube_urls[i]);
        create_x_button_clickEvent(category_slug);
    });

    console.log(category_youtube_urls);
})

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

//category_slug: string of category id
//youtube_url: string of corresponding youtube_url for the category
//this function sets up a click event for when the text of the category is clicked in the virtual tour menu
//a corresponding card slides out & the youtube video for that card gets set/cleared when the user is viewing
//that particular category information
function create_menu_link_ClickEvent(category_slug, youtube_url){
    $("#" + category_slug + "Text").click(function(){
        isOpen = isCardOpen(category_slug);
        closeAllCards();
        if(isOpen){
            closeCategoryCard(category_slug);
            clearMedia(category_slug);
        }else{
            closeAllCards(category_slug_array);
            openCategoryCard(category_slug);
            setMedia(youtube_url, category_slug);
        }
    });
}
//click event for when the x button on the category card (which slides out from under the menu when the category link is clicked)
function create_x_button_clickEvent(category_slug){
    $("#" + category_slug + "Close").click(function(){
       closeCategoryCard(category_slug);
       clearMedia(category_slug);
    });
}

//checks if the category's card is open or not
function isCardOpen(category_slug){
    var hasClass = $("#" + category_slug + "Card").hasClass("cardOpen");
    return hasClass;
}

//close all cards that are open
function closeAllCards(category_slug_array){
    $.each(category_slug_array, function(i, category_slug){
        closeCategoryCard(category_slug);
        clearMedia(category_slug);
    });
}
//set the src url for the youtube video for the category
//url: youtube url
//slug: category id 
function setMedia(url, slug){
    $("#" + slug + "iframe").attr("src", url);
}
//url: youtube url
//slug: category id
//clears the src url for the youtube video for the category
function clearMedia(slug){
    $("#" + slug + "iframe").attr("src", "");
}

//adds class to open category card (transition slide-out from under menu)
function openCategoryCard(category_slug){
    $("#" + category_slug + "Card").addClass("cardOpen");
}
//removes class to open category card (transition hide beneath menu)
function closeCategoryCard(category_slug){
    $("#" + category_slug + "Card").removeClass("cardOpen");
}














