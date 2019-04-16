// ==UserScript==
// @name         AO3: [Wrangling] Select Suggested Fandoms
// @description  
// @version      1.0
// @updateURL    
// @downloadURL  

// @author       kaerstyne
// @namespace    https://github.com/kaerstyne/ao3-wrangling-scripts
// @license      GPL-3.0 <https://www.gnu.org/licenses/gpl.html>

// @match        *://*.archiveofourown.org/tags/*/edit
// @grant        none
// ==/UserScript==

(function($) {

    // find suggested fandoms
    var suggested_fandoms = $("dt:contains('Suggested Fandoms')").next().find("a");
    
    // insert checkboxes
    suggested_fandoms.each(function() {
        $(this).before('<input type="checkbox" name="fandoms_to_add" value="' + $(this).text() + '">';);
    });
    
    $("#edit_tag").submit(function(event) {
        var selected_fandoms = $("input[name='fandoms_to_add']:checked").map(function() {
            return $(this).val();
        }).toArray().join();
        var fandom_input = $("input#tag_fandom_string");
        var existing_fandoms = fandom_input.val();
        var separator = existing_fandoms == "" ? "" : ","
        fandom_input.val(existing_fandoms + separator + selected_fandoms);
    });

})(window.jQuery);
