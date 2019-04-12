// ==UserScript==
// @name         AO3: [Wrangling] Save Changes at Top
// @description  Adds another Save Changes button at the top of the tag edit page.
// @namespace    https://github.com/kaerstyne/ao3-wrangling-scripts
// @version      1.1
// @author       kaerstyne
// @match        *://*.archiveofourown.org/tags/*/edit
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function($) {

    $("form.edit_tag fieldset").first().before("<fieldset>" +
                                               "<legend>Submit</legend>" +
                                               "<p class='submit actions'>" +
                                               "<input type='submit' name='commit' value='Save changes' />" +
                                               "</p>" +
                                               "</fieldset>");
})(jQuery);
