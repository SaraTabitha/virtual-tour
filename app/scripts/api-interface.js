// lincoln hall test

$(document).ready(function() {

    var image_index; 
        //content
    $.ajax({
            url: "http://virtualtourv2.local/wp-json/wp/v2/posts?categories=2",
            success: function(result) {
                        // console.log(result[0].title.rendered);

                        //lincoln hall title     
                        $("#lincoln-hall-title").html(result[0].title.rendered);
                        // lincoln hall info
                        $("#lincoln_text").html(result[0].content.rendered);

                        //id # of the featured media (full width image of lincoln hall)     
                        image_index = result[0].featured_media;
                        //this should return 29
                        //console.log("this is the index of the featured image for Lincoln Hall: " +image_index);

                        var test = result[0].acf.test;
                        //console.log("test data: " + test);

                       $("#lincoln_address").html(test);

                       /*
                       * below i am trying to figure out how to take in the post text and split it up into pages on the popup 
                       * (so if someone submits a lot of text it will not break out of the space allotted by the popup ui)
                       */
                       
                       /*
                        var contents = $("#lincoln_text > p").text();
                        var words  = contents.split(" ");
                        //console.log(words);
                        */

                        /*
                        var test = "Remodeled in 2014, Lincoln Hall houses the Division of Lifelong Learning and Community Engagement and the UW Oshkosh Children’s Learning and Care Center. Lincoln Hall is also home to the UW Oshkosh Learning in Retirement group. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie ullamcorper eros et tincidunt. Nunc tincidunt lectus nec consequat luctus. Aenean ante sem, fermentum id consequat ac, pretium vel nunc. "
                        var w_test = test.split(" ");
                        console.log(w_test.length);
                        */
                        //average length of popup-page should be 67words

                        var post_text = result[0].content.rendered;
                        var post_text_words = post_text.split(" ");
                        console.log(post_text_words);
                        /*
                        * Get header separated from popup_text
                        */

                        //searches through the array of words for the index of the string that contains the closing heading tag
                        //end_header is the index of the closing heading tag in the post_text_words array
                        var end_header; 
                        for(var i = 0; i < post_text_words.length; i++){
                                if(post_text_words[i].indexOf("</h") != -1){
                                        end_header = i;
                                }
                        }
                        //find the index within the string to find the start of the closing header tag
                        //h_index is the index of the < in the string 
                        var h_index = post_text_words[end_header].indexOf("</h");
                        
                        //get the start of the string up until the end of the </h#> tag (+5 to get to the end of the closing tag >)
                        //ex. closing_head_tag should become some string that ends with </h5>
                        var closing_head_tag = post_text_words[end_header].substring(0, (h_index + 5));
                        

                        //stictches together into a string the full header <h>content</h> and puts it into the 'heading' variable
                        var heading = post_text_words[0];
                        for(var i = 1; i < end_header; i++){
                                heading = heading + " " + post_text_words[i];
                        }
                        heading = heading + " " + closing_head_tag;

                        /*
                        * Get popup_text separated
                        */
                       //index within string of where the < is of the opening paragraph tag
                       var p_start_index = post_text_words[end_header].indexOf("<p>");
                       //p_content begins with the opening <p> and the content in this string
                       var p_content = post_text_words[end_header].substring(p_start_index);
                       
                       //stitches together the remaining strings to result in p_content being filled with a string containing <p> content </p> 
                       for(var i = (end_header + 1); i < post_text_words.length; i++){
                                p_content = p_content+ " " + post_text_words[i];
                       }
                       //console.log(p_content);

                        /*
                        * page count for popup_text > (max number) words
                        */
                       //content length = number of words/strings in the <p></p> 
                       var content_length = post_text_words.length - (end_header + 1);
                       //console.log(content_length);

                       //if the p content is worthy of multiple pages
                       var max_words = 70;
                       if(content_length > max_words){
                                var p_words = p_content.split(" ");

                                // you could ask, why not just divide? 
                                // A: ain't nobody got time for remainders
                                var num_pages = 0; 
                                while(content_length > max_words){
                                        num_pages++;
                                        content_length = content_length - max_words;
                                }
                                console.log(num_pages);
                                //num_pages -> whole number of pages needed to display all le content within the p tags
                                var pages_content = {};
                                var start_index = 0; 
                                var end_index = max_words;
                                var x = 0; 
                                //var num = num_pages - 1;
                                while(x < num_pages){

                                        //p_words[0] -> max_words
                                        //max_words + 1 -> max_words + max_words
                                        //
                                        //start = 0, increments by max_words
                                        //end = max_words, increments by max_words UNTIL pages = 1, in that case end = content_length
                                        var content = p_words[start_index]
                                        for(var i = (start_index + 1); i < end_index; i++){
                                                content = content + " " + p_words[i];
                                        }
                                        pages_content[x] = content;

                                        start_index = start_index + max_words;
                                        end_index = end_index + max_words;
                                        // console.log("start: " + start_index);
                                        // console.log("end: " + end_index);
                                        // console.log("x: " + x);
                                        // console.log("num: " + num);
                                        x++;
                                }
                                var content = p_words[start_index];
                                for(var i = (start_index + 1); i < p_words.length; i++){
                                        content = content + " " + p_words[i];
                                }
                                pages_content[num_pages] = content;


                                console.log(pages_content[0]);
                                console.log(pages_content[1]);
                                console.log(pages_content[2]);
                       }else{
                        //if the content can all fit on one page
                                $("#lincoln_text").html(heading + p_content);
                       }

                        

                        //console.log(post_text_words);

                        var start;
                        var end;
                        //searches for <p> begins and </p> ends to get the contents within these two tags
                        for(var i = 0; i < post_text_words.length; i++){

                                if(post_text_words[i].indexOf("<p>") != -1){
                                        start = i;
                                }
                                if(post_text_words[i].indexOf("</p>") != -1){
                                        end = i;
                                }
                        }

                        /*
                        * finds where the <p> tag starts 
                        */
                        var index_p = post_text_words[start].indexOf("<p>");

                        //cuts out the beginning of the string before<p>
                        var p_only_str = post_text_words[start].substring(index_p);

                        //if you don't start the first_page with the first part of the string you get "undefined"
                        var first_page = post_text_words[0];
                        // 67words - the heading for the first page
                        var count = 67 - start;
                        for(var i = 1; i < count; i++){
                                first_page = first_page + " " + post_text_words[i];
                        }
                        //console.log(first_page);
                         
                        //render content now cut so that it fits in the window
                        var page_count = "<p><a href='#'>1</a></p>";
                        $("#lincoln_text").html(first_page + page_count);

                        

                        

                        
                        


                        
                   
            }
    });
        //featured image     
    $.ajax({
        //     should go to media @ index 29 ^ lincoln hall's featured image
        url: "http://virtualtourv2.local/wp-json/wp/v2/media?categories="+ image_index + "",
        success: function(result) {
                //console.log("this is the url of the featured image for Lincoln Hall: " + result[0].media_details.sizes.full.source_url);
                // id for div lincolnAboutImage >img
                $("#lincolnAboutImage > img").attr("src",  result[0].media_details.sizes.full.source_url);
        }
    });
});