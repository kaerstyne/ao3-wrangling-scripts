// ==UserScript==
// @name         AO3: [Wrangling] Save Changes at Top
// @description  Adds another Save Changes button at the top of the tag edit page.
// @namespace    https://greasyfork.org/
// @version      1.1
// @author       kaerstyne
// @match        https://archiveofourown.org/tags/*/edit
// @match        http://archiveofourown.org/tags/*/edit
// @match        http://insecure.archiveofourown.org/tags/*/edit
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function($) {

    $("form.edit_tag fieldset").first().before("<fieldset>\
                                               <legend>Submit</legend>\
                                               <p class=\"submit actions\">\
                                               <input type=\"submit\" name=\"commit\" value=\"Save changes\"/>\
                                               </p>\
                                               </fieldset>");
})(jQuery);
