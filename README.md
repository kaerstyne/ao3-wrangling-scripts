# AO3 Wrangling Scripts

A collection of userscripts for tag wrangling on [Archive of Our Own](https://archiveofourown.org), intended to make tag wranglers' lives easier.

If you use any of these and run into problems, feel free to ping me in OTW chat (@Relle) and I will do my best to help you out!

| Script | Install | Created | Updated |
| ------ | ------- | ------- | ------- |
| [Highlight Old Tags](#highlight-old-tags) | [GitHub](https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/highlight-old-tags.user.js) &#124; [Greasy Fork](https://greasyfork.org/en/scripts/38866-ao3-wrangling-highlight-old-tags) | 2018-02-24 | [2020-12-22](CHANGELOG.md#highlight-old-tags) |
| [Save Changes at Top](#save-changes-at-top) | [GitHub](https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/save-changes-at-top.user.js) &#124; [Greasy Fork](https://greasyfork.org/en/scripts/370820-ao3-wrangling-save-changes-at-top) | 2018-08-01 | [2019-04-12](CHANGELOG.md#save-changes-at-top) |
| [Wrangling Home Filter Redux](#wrangling-home-filter-redux) | [GitHub](https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/wrangling-home-filter-redux.user.js) &#124; [Greasy Fork](https://greasyfork.org/en/scripts/381543-ao3-wrangling-wrangling-home-filter-redux) | 2019-04-08 | [2021-01-26](CHANGELOG.md#wrangling-home-filter-redux) |
| [Check Tag Status](#check-tag-status) | [GitHub](https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/check-tag-status.user.js) &#124; [Greasy Fork](https://greasyfork.org/en/scripts/381677-ao3-wrangling-check-tag-status) | 2019-04-11 | [2020-09-16](CHANGELOG.md#check-tag-status) |
| [Hide Canonical Checkboxes](#hide-canonical-checkboxes) | [GitHub](https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/hide-canonical-checkboxes.user.css) | 2018-02-28 | [2019-04-13](CHANGELOG.md#hide-canonical-checkboxes) |
| [Fandom Assignment Shortcuts](#fandom-assignment-shortcuts) | [GitHub](https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/fandom-assignment-shortcuts.user.js) &#124; [Greasy Fork](https://greasyfork.org/en/scripts/388351-ao3-wrangling-fandom-assignment-shortcuts) | 2019-08-09 | [2021-03-04](CHANGELOG.md#fandom-assignment-shortcuts) |
| [Prevent Curly Quotes](#prevent-curly-quotes) | [GitHub](https://raw.githubusercontent.com/kaerstyne/ao3-wrangling-scripts/master/prevent-curly-quotes.user.js) &#124; [Greasy Fork](https://greasyfork.org/en/scripts/424720-ao3-wrangling-prevent-curly-quotes) | 2021-04-08 | [2021-04-08](CHANGELOG.md#prevent-curly-quotes) |

## Highlight Old Tags

<img src="screenshots/highlight-old-tags.png" alt="the Highlight Old Tags script in use" width="373px" height="231px" />

### Features

- Highlights the created date of older tags in your unwrangled bins, to help prioritize tags that have been sitting around for longer.
- Allows you to customize the highlight colors and the number of days before a tag is considered "old".
- Uses different colors for the Reversi site skin and will automatically switch to those when Reversi is active.

## Save Changes at Top

<img src="screenshots/save-changes-at-top.png" alt="the new Save Changes button added by the Save Changes at Top script" width="455px" height="215px" />

### Features

- On tag edit pages, adds a second Save Changes button at the top of the screen, so you don't have to scroll down to the bottom.

## Wrangling Home Filter Redux

<img src="screenshots/wrangling-home-filter-redux.png" alt="the new options added by the Wrangling Home Filter Redux script" width="457px" height="93px" />

### Features

- Based on Min's beloved [Wrangling Home Filter](https://greasyfork.org/en/scripts/10496-ao3-wrangling-home-filter) script, with additions.
- Allows filtering the wrangling home page to show only cowrangled or solo-wrangled fandoms with unwrangled tags.

### Warnings

- You have to manually edit the script code to include a list of your cowrangled fandoms; the script won't detect them automatically. See the code for further instructions.
- If you drop, pick up, or rename a cowrangled fandom, you'll have to update the list.
- **If you install a new version of the script, your list of cowrangled fandoms will be reset.** Be sure to save the list somewhere before updating!

### Options

| Option | Result |
| ------ | ------ |
| shared unwrangled | show only cowrangled fandoms with unwrangled tags |
| solo unwrangled | show only solo-wrangled fandoms with unwrangled tags |
| all unwrangled | show all fandoms with unwrangled tags |
| all fandoms | show all fandoms, whether they have unwrangled tags or not |

## Check Tag Status

<img src="screenshots/check-tag-status1.png" alt="the new button added by the Check Tag Status script" width="478px" height="210px" />

<img src="screenshots/check-tag-status2.png" alt="the Check Status Script's output after the button is pressed" width="478px" height="210px" />

### Features

- Adds a button to check if tags in your wrangling bins are only used on drafts, unrevealed works, etc.
- Has options specific to the mass bins and the fandoms bin.

### Warnings

- May behave oddly in certain edge cases. If you get unexpected results, please let me know so I can look into it!

### Statuses

| Status | Meaning |
| ------ | ------- |
| canonical | tag is canonical |
| draft | tag is only used on draft works |
| bookmark | tag is only used on bookmarks |
| unrevealed | tag is only used on unrevealed works |
| new | **(mass bins only)** tag is only used on works less than two months old |
| Chinese | **(fandoms bin only)** tag is only used on Chinese works |
| ✔ | none of the above apply, tag is good to go |

## Hide Canonical Checkboxes

<img src="screenshots/hide-canonical-checkboxes1.png" alt="the unwrangled tag page before the script is installed" width="307px" height="176px" /> <img src="screenshots/hide-canonical-checkboxes2.png" alt="the unwrangled tag page after the script is installed, without the column of canonical checkboxes" width="276px" height="176px" />

### Features

- Hides the canonical checkbox column on unwrangled tag pages, in case you're like me and constantly click on those by accident.
- Note: This is a CSS style, rather than a script, so you need to have [Stylus](https://add0n.com/stylus.html) or similar installed.

## Fandom Assignment Shortcuts

<img src="screenshots/fandom-assignment-shortcuts1.png" alt="the tag edit page with the new checkboxes added by the Fandom Assignment Shortcuts script" width="496px" height="208px" /> <img src="screenshots/fandom-assignment-shortcuts2.png" alt="the unwrangled tags page with the new options added by the Fandom Assignment Shortcuts script" width="638px" height="238px" />

### Features

- Tries to save you from having to type the same things over and over when sending tags to fandoms, by adding options to quickly select the most likely fandoms.
- On tag edit pages, adds checkboxes by each suggested fandom.
- On unwrangled bin pages, adds checkboxes for the current fandom, No Fandom, and Original Work to the Wrangle to Fandom(s) section.

### Warnings

- You cannot send tags to non-canonical fandoms. If you select the checkbox for a non-canonical fandom on a tag edit page, you'll get an error message when you save your changes. Be careful which options you check!


## Prevent Curly Quotes

<img src="screenshots/prevent-curly-quotes1.jpg" alt="the tag edit page with a warning below the tag name field indicating that the tag contains a curly quote" width="500px" height="255px" /> <img src="screenshots/prevent-curly-quotes2.jpg" alt="the tag edit page with a warning below the synonym of field indicating that the tag contains a curly quote" width="500px" height="150px" /> <img src="screenshots/prevent-curly-quotes3.jpg" alt="the mass wrangle page with the canonical checkbox for one tag replaced with the text 'curly quote'" width="500px" height="195px" />

### Features

- Helps prevent you from accidentally making new canonicals with curly quotes.
- On tag edit pages, will warn you if you try to check the canonical checkbox for a tag that has curly quotes, or if you enter a tag with curly quotes in the Synonym Of field. The warning also includes a fixed version of the tag with straight quotes for easy copy/pasting.
- On the New Tag page, automatically replaces any curly quotes with straight quotes when you submit the form with the Canonical box checked.
- On mass wrangle pages, replaces the Canonical checkbox with the text "Curly Quote" for any tag that contains curly quotes.
