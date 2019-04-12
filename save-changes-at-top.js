// ==UserScript==
// @name         AO3: [Wrangling] Save Changes at Top
// @description  Adds another Save Changes button at the top of the tag edit page.
// @version      1.1.1
// @updateURL    https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/save-changes-at-top.js
// @downloadURL  https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/save-changes-at-top.js

// @author       kaerstyne
// @namespace    https://github.com/kaerstyne/ao3-wrangling-scripts
// @license      GPL-3.0 <https://www.gnu.org/licenses/gpl.html>

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
