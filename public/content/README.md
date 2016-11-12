# FW6

## Overview

**FW6**, HTML5-based eLearning development. Next version.
*This version allows automatic audio playing on iOS*

----

### File structure:
- **/audio:** This folder contains all the audio files for the screens.
- **/css:** Here go all css files. there must existe one file for each screen html, with its same type name.
- **/data:** Data JSON objects describing each screen are stored here. They must not be modified by hand.
- **/img:** All images must reside inside this folder.
- **/js:** All javascript will be located at this folder. There must exist at least one for each screen html, with its same type name.
- **/views:** All html template files must be copied into this folder. There must e one file per template, i.e, p1.html.
- **app.html** This is the main html loader.

### Notes:
- Due to many web browsers default security features, the content may not run via FILE protocol. If you see no content, and need it to load directly from your filesystem, use a different  browser. When the content is run via HTTP, it does render properly.  
- HTML files must only have html markup code. No javascript (including <script> tags), style or any graphical or operative elements should be used.  
- JS files will contain all the javascript content. They must be loaded via AJAX (or jQuery getScript) from the main script.
- CSS files will contain all the styling, graphical layout, etc.