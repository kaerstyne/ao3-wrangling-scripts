// ==UserScript==
// @name         AO3: [Wrangling] Wrangling Home Filter Redux
// @description  A variation on the Wrangling Home Filter script that lets you filter by cowrangled or solo-wrangled fandoms.
// @namespace    https://greasyfork.org
// @version      1.0
// @author       kaerstyne
// @match        https://archiveofourown.org/tag_wranglers/*
// @match        http://archiveofourown.org/tag_wranglers/*
// @match        http://insecure.archiveofourown.org/tag_wranglers/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
// @grant        none
// ==/UserScript==


// SETTINGS //

// Add a list of your cowrangled fandoms here, between the ``.
// DO NOT EDIT ANYTHING OUTSIDE OF THE ``.
// Put each fandom on a separate line.
// Use the EXACT NAME of the fandom as it appears on your wrangling page.

var cowrangled = `
Dangan Ronpa - All Media Types
Homestuck
Star Wars - All Media Types
`;

// END OF SETTINGS //


var cowrangled_list = cowrangled.trim().split("\n");

(function($) {

    var all_fandoms = $("#user-page table tbody tr");

    // label fandoms with shared and unwrangled status
    all_fandoms.each(function() {
        var fandom_name = $(this).find("th").text();
        var unwrangled_counts = $(this).find("td").slice(3, 6).text();

        if (cowrangled_list.includes(fandom_name)) {
            $(this).addClass("shared-fandom");
        } else {
            $(this).addClass("solo-fandom");
        }
        if (unwrangled_counts == "   ") {
            $(this).addClass("no-unwrangled");
        }
    });

    // add toggle menu
    $("#user-page table").before("<p id='filter-fandoms'>Filter fandoms:&nbsp;&nbsp;" +
                                 "<a id='shared-unwrangled'>[ shared unwrangled ]</a>&nbsp;&nbsp;" +
                                 "<a id='solo-unwrangled'>[ solo unwrangled ]</a>&nbsp;&nbsp;" +
                                 "<a id='all-unwrangled'>[ all unwrangled ]</a>&nbsp;&nbsp;" +
                                 "<a id='all-fandoms'>[ all fandoms ]</a>" +
                                 "</p>");

    // add toggle functions
    function add_toggle(toggle_class, ...classes_to_hide) {
        $(toggle_class).click(function() {
            all_fandoms.show();
            classes_to_hide.forEach(function(class_to_hide) {
                $(class_to_hide).hide();
            });
            $("#filter-fandoms").find("a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
    }

    add_toggle("#shared-unwrangled", ".solo-fandom", ".no-unwrangled");
    add_toggle("#solo-unwrangled", ".shared-fandom", ".no-unwrangled");
    add_toggle("#all-unwrangled", ".no-unwrangled");
    add_toggle("#all-fandoms");

})(jQuery);
