
/*
* functions for all of the Building Categories
*/

//looping through all of the <input> elements of the categories to get their slugs and adding them to the category_slug_array
var category_slug_array = [];
var index = 0;
$("#categories").find("input").each(function(){
    category_slug_array[index] = $(this).attr("id");
    index++;
});

function openCategoryCard(category_slug){
    $("#" + category_slug + "Card").addClass("cardOpen");
}
function closeCategoryCard(category_slug){
    $("#" + category_slug + "Card").removeClass("cardOpen");
}
function closeAllCards(category_slug_array){
    $.each(category_slug_array, function(i, category_slug){
        closeCategoryCard(category_slug);
    });
}

function create_x_button_clickEvent(category_slug){
    $("#" + category_slug + "Close").click(function(){
       closeCategoryCard(category_slug);
    });
}

function isCardOpen(category_slug){
    var hasClass = $("#" + category_slug + "Card").hasClass("cardOpen");
    return hasClass;
}
function create_menu_link_ClickEvent(category_slug){
    $("#" + category_slug + "Text").click(function(){
        isOpen = isCardOpen(category_slug);
        closeAllCards();
        if(isOpen){
            closeCategoryCard(category_slug);
        }else{
            closeAllCards(category_slug_array);
            openCategoryCard(category_slug);
        }
    });
}

function uncheckCheckbox(slug){
    //can only use javascript selector apparently for MaterialCheckbox.function()
    document.getElementById( slug + "Label").MaterialCheckbox.uncheck();
}
function checkCheckbox(slug){
    //can only use javascript selector apparently for MaterialCheckbox.function()
    document.getElementById( slug + "Label").MaterialCheckbox.check();
}

function isChecked(slug){
    if( $("#" + slug).hasClass("is-checked") ){
        return true;
    }
    else{
        return false;
    }
}

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

//loops through all of the slugs in the category_slug_array and makes the click events for the menu <a> tag (open/close card), and x button (close card)
//
$.each(category_slug_array, function(i, category_slug){
    create_menu_link_ClickEvent(category_slug);
    create_x_button_clickEvent(category_slug);
});

