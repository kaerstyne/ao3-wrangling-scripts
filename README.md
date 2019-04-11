# AO3 Wrangling Scripts

A collection of userscripts for tag wrangling on [Archive of Our Own](https://archiveofourown.org), intended to make tag wranglers' lives easier.

If you use any of these and run into problems, feel free to ping me in OTW chat (@Relle) and I will do my best to help you out!

Available Scripts:

- [Highlight Old Tags](#highlight-old-tags)
- [Save Changes at Top](#save-changes-at-top)
- [Wrangling Home Filter Redux](#wrangling-home-filter-redux)
- [Check Tag Status](#check-tag-status)

## Highlight Old Tags

### Installation

- [Github](highlight-old-tags.js)
- [Greasyfork](https://greasyfork.org/en/scripts/38866-ao3-wrangling-highlight-old-tags)

### Features

- Highlights the created date of older tags in your unwrangled bins, to help prioritize tags that have been sitting around for longer.
- Allows you to customize the highlight colors and the number of days before a tag is considered "old".
- Uses different colors for the Reversi site skin and will automatically switch to those when Reversi is active.

## Save Changes at Top

### Installation

- [Github](save-changes-at-top.js)
- [Greasyfork](https://greasyfork.org/en/scripts/370820-ao3-wrangling-save-changes-at-top)

### Features

- On tag edit pages, adds a second Save Changes button at the top of the screen, so you don't have to scroll down to the bottom.

## Wrangling Home Filter Redux

### Installation

- [Github](wrangling-home-filter-redux.js)
- [Greasyfork](https://greasyfork.org/en/scripts/381543-ao3-wrangling-wrangling-home-filter-redux)

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

### Installation

- [Github](check-tag-status.js)
- [Greasyfork](https://greasyfork.org/en/scripts/381677-ao3-wrangling-check-tag-status)

### Features

- Adds a button to check if tags in your wrangling bins are only used on drafts, unrevealed works, etc.
- Has options specific to the mass bins.

### Warnings

- May behave oddly in certain edge cases. If you get unexpected results, please let me know so I can look into it!

### Statuses

| Status | Meaning |
| ------ | ------- |
| draft | tag is only used on draft works |
| bookmark | tag is only used on bookmarks |
| unrevealed | tag is only used on unrevealed works |
| new | **(mass bins only)** tag is only used on works less than two months old |
| ✔ | none of the above apply, tag is good to go |
