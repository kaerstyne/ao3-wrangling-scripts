// ==UserScript==
// @name         AO3: [Wrangling] Fandom Assignment Shortcuts
// @description  Adds some shortcuts to assign tags to fandoms more quickly.
// @version      1.0

// @author       kaerstyne
// @namespace    https://github.com/kaerstyne/ao3-wrangling-scripts
// @license      GPL-3.0 <https://www.gnu.org/licenses/gpl.html>

// @match        *://*archiveofourown.org/tags/*/edit
// @match        *://*archiveofourown.org/tags/*/wrangle*&status=unwrangled
// @grant        none
// ==/UserScript==

(function($) {

    // which page is this?
    var page_url = window.location.pathname;

    // unwrangled bin
    if (page_url.includes("/wrangle")) {

        // add shortcut checkboxes
        var current_fandom = $("h2.heading a").text();
        var fandoms_to_add = new Array(current_fandom, "No Fandom", "Original Work");
        var fandom_shortcuts = $('<ul class="filters" style="padding-bottom: .643em;"></ul>');
        for (let fandom of fandoms_to_add) {
            fandom_shortcuts.append('<li style="display: inline"><label>' +
                                    '<input type="checkbox" name="fandom_shortcut" value="' + fandom + '">' +
                                    '<span class="indicator" aria-hidden="true"></span>' +
                                    '<span>' + fandom + '</span>' +
                                    '</label></li>');
        }
        $("dd[title='wrangle to fandom(s)'").prepend(fandom_shortcuts);

        // you should only have one fandom checked at once
        $("input[name='fandom_shortcut']").change(function() {
            $("input[name='fandom_shortcut']").not(this).prop("checked", false);
        });

        // add fandom on form submit
        $("form#wrangulator").submit(function() {
            var selected_fandom = $("input[name='fandom_shortcut']:checked").val();
            if (selected_fandom) {
                var fandom_input = $("input#fandom_string");
                var existing_fandoms = fandom_input.val();
                var separator = existing_fandoms == "" ? "" : ",";
                fandom_input.val(existing_fandoms + separator + selected_fandom);
            }
        });

    // tag edit page
    } else if (page_url.includes("/edit")) {

        // add shortcut checkboxes
        $("dt:contains('Suggested Fandoms')").next().find("ul").addClass("filters");
        var suggested_fandoms = $("dt:contains('Suggested Fandoms')").next().find("li");
        suggested_fandoms.each(function() {
            var fandom_link = $(this).html();
            $(this).html('<label>' +
                         '<input type="checkbox" name="fandom_shortcuts" value="' + $(this).text() + '">' +
                         '<span class="indicator" aria-hidden="true"></span>' +
                         '<span>' + fandom_link + '</span>' +
                         '</label>');
        });

        // add fandoms on form submit
        $("form#edit_tag").submit(function() {
            var selected_fandoms = $("input[name='fandom_shortcuts']:checked").map(function() {
                return $(this).val();
            }).toArray().join();
            var fandom_input = $("input#tag_fandom_string");
            var existing_fandoms = fandom_input.val();
            var separator = existing_fandoms == "" ? "" : ","
            fandom_input.val(existing_fandoms + separator + selected_fandoms);
        });

    }

})(window.jQuery);
