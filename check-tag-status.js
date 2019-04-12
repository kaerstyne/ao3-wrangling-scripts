// ==UserScript==
// @name         AO3: [Wrangling] Check Tag Status
// @description  Adds a button to check if tags in your wrangling bins are in draft, on unrevealed works, etc.
// @namespace    https://github.com/kaerstyne/ao3-wrangling-scripts
// @version      1.1.1
// @author       kaerstyne
// @match        *://*.archiveofourown.org/tags/*/wrangle?*&status=unwrangled
// @match        *://*.archiveofourown.org/tag_wranglings*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// @grant        none
// ==/UserScript==

function convertDate(dateStr) {
    var dateArray = dateStr.split(" ");
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthIndex = months.indexOf(dateArray[1]) + 1;
    if (monthIndex < 10) {
        monthIndex = "0" + monthIndex;
    }
    return dateArray[2] + "-" + monthIndex + "-" + dateArray[0];
}

(function($) {

    // is this a mass bin page?
    var mass_bins = false;
    var page_url = window.location.href;
    if (page_url.includes("tag_wranglings") && !page_url.includes("show=fandoms")) {
        mass_bins = true;
    }

    // add the button
    var status_check_button = $('<ul class="actions" role="menu"><li><a id="check_status">Status?</a></li></ul>');
    $("thead").find("th:contains('Taggings')").append(status_check_button);

    // when button is pressed
    $("a[id='check_status']").on("click", function() {

        // check each tag on page
        $("tbody tr").each(function(i, row) {
            var tag_link = $(this).find("a[href$='/works']").attr("href");
            var taggings_cell = $(this).find("td[title='taggings']");
            if (mass_bins) {
                var tag_date = new Date($(this).find("td[title='created']").text().split("-"));
            }

            // check the tag's landing page
            $.get(tag_link, function(response) {
                // console.log("checking page " + tag_link + " ...");

                // check for works
                if ($(response).find("div.work").length) {

                    // check for unrevealed works
                    if ($(response).find("div.mystery").length) {

                        // check if there are any revealed works present
                        var total_works = $(response).find("li.work").length;
                        var total_unrevealed = $(response).find("div.mystery").length;
                        if (total_works == total_unrevealed) {
                            taggings_cell.append(" [unrevealed]");
                        } else {
                            taggings_cell.append(" [\u2714]");
                        }

                    // check for new works (non-fandom mass bins only)
                    } else if (mass_bins) {

                        // find the earliest date used on the works
                        var use_dates = $(response).find("div.work p.datetime").map(function() {
                            return convertDate($(this).text());
                        }).get();
                        use_dates.sort();

                        // compare tag creation date to earliest work date
                        var work_date = new Date(use_dates[0].split("-"));
                        var date_today = new Date();
                        var work_age = (date_today - work_date)/(1000*60*60*24);

                        // check if work only posted in the last two months
                        if (work_date > tag_date && work_age <= 62) {
                            taggings_cell.append(" [new]");
                        } else {
                            taggings_cell.append(" [\u2714]");
                        }
                    } else {
                        taggings_cell.append(" [\u2714]");
                    }

                // check for bookmarks
                } else if ($(response).find("div.bookmark").length) {
                    taggings_cell.append(" [bookmark]");

                // nothing there, must be a draft
                } else {
                    taggings_cell.append(" [draft]");
                }
            });
        });

        // remove the button when finished
        $("ul").remove(":has(li a[id='check_status'])");
    });
})(jQuery);
