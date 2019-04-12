// ==UserScript==
// @name         AO3: [Wrangling] Highlight Old Tags
// @description  Highlights the created date of older tags in your unwrangled bins.
// @namespace    https://github.com/kaerstyne/ao3-wrangling-scripts
// @version      1.1.1
// @author       kaerstyne
// @match        *://*.archiveofourown.org/tags/*/wrangle?*&status=unwrangled
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// @grant        none
// ==/UserScript==

// SETTINGS //

// Colors to use for different tag ages.
// By default, new tags don't change color, older tags are yellow, and the oldest tags are red.

// Default site skin
var color_new = ""; // default: "" or #C4EAC3
var color_older = "#FDF2A3"; // default: #FDF2A3
var color_oldest = "#FFB7B7"; // default: #FFB7B7
// Reversi
var color_new_rev = ""; // default: "" or #228B22
var color_older_rev = "#999900"; // default: #999900
var color_oldest_rev = "#8B0000"; // default: #8B0000

// Number of days before a tag is considered old.
// By default, older tags are 7+ days old, and the oldest tags are 14+ days old.
var age_older = 7;
var age_oldest = 14;

// END OF SETTINGS //


// DO THE THING //

(function($) {

   // swap colors if Reversi stylesheet detected
   if ($( "link[href*='reversi']" ).length) {
       color_new = color_new_rev;
       color_older = color_older_rev;
       color_oldest = color_oldest_rev;
   }

   var date_today = new Date();
   $( "td[title='created']" ).each( function( index, element ){
       var date_created = new Date($( this ).text().split("-"));
       var tag_age = (date_today - date_created)/(1000*60*60*24);

       if (tag_age >= age_oldest) {
           $( this ).wrapInner("<span style=\"background-color:" + color_oldest + "\"></span>");
       } else if (tag_age >= age_older) {
           $( this ).wrapInner("<span style=\"background-color:" + color_older + "\"></span>");
       } else if (color_new !== "") {
           $( this ).wrapInner("<span style=\"background-color:" + color_new + "\"></span>");
       }
   });
})(jQuery);
