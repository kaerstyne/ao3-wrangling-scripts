# Changelog

- [Highlight Old Tags](#highlight-old-tags)
- [Save Changes at Top](#save-changes-at-top)
- [Wrangling Home Filter Redux](#wrangling-home-filter-redux)
- [Check Tag Status](#check-tag-status)
- [Hide Canonical Checkboxes](#hide-canonical-checkboxes)

## Highlight Old Tags

### 1.1.1 - 2019-04-12

- Tidied a bit in honor of uploading to GitHub.

### 1.1 - 2018-02-28

- Added ability to auto-detect when Reversi skin is in use and switch colors automatically.
- Made the default red a bit darker to increase contrast.

### 1.0.2 - 2018-02-25

- Cleaned up `@match` parameters.
- Added color options for Reversi skin.

### 1.0.1 - 2018-02-25

- Fussing with `@match` parameters to make the script work properly on more browsers.

### 1.0 - 2018-02-24

- Highlights tag dates based on age. By default, tags 7+ days old will be yellow, and tags 14+ days old will be red.

## Save Changes at Top

### 1.1.1 - 2019-04-12

- Tidied a bit in honor of uploading to GitHub.

### 1.1 - 2019-02-22

- Updated `@match` values to work properly with Greasemonkey.

### 1.0 - 2018-08-01

- Adds a second Save Changes button to the top of the tag edit page.

## Wrangling Home Filter Redux

### 1.0.1 - 2019-04-12

- Tidied a bit in honor of uploading to GitHub.

### 1.0 - 2019-04-08

- Allows filtering the wrangling home page to show only cowrangled or solo-wrangled fandoms with unwrangled tags.

## Check Tag Status

### 1.2 - 2019-04-14

- Added a new check to see if a tag is canonical.
- Added a new check for the fandoms bin to see if a tag is only used on Chinese works.

### 1.1.1 - 2019-04-12

- Tidied a bit in honor of uploading to GitHub.

### 1.1 - 2019-04-11

- Fixed to select the Works link properly if the Tag Comments script is not installed.

### 1.0 - 2019-04-11

- Adds a button to check if tags in your wrangling bins are only used on drafts, unrevealed works, etc.

## Hide Canonical Checkboxes

### 2.0 - 2019-04-13

- Rewritten to be CSS instead of Javascript. Why was it in Javascript. Why did I do this.

### 1.0 - 2018-02-28

- Hides the canonical checkbox column on unwrangled tag pages.

## Fandom Assignment Shortcuts

### 1.0.1 - 2019-08-09

- More recent versions of Greasemonkey apparently don't play nice with `window.jQuery`, so changed it back to just using `@require` to load the jQuery.

### 1.0 - 2019-08-09

- Adds checkboxes to quickly select the most likely fandoms when sending tags to fandoms via the unwrangled bins or tag edit pages.
