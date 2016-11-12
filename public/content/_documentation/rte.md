#FW6 Run-time environment
**Version:** 1.1 (2013/04/04)

---------------------------------------

## 1. Methods:

## 1.1. screen Methods:

- ##1.1.1. show
**Method Syntax:** `shift.screen.show(uIndex, tIndex, sIndex)`  
**Description:** It shows the screen indicated by the params received  
**Parameters:** uIndex: The unit Index.  
			 ** tIndex: The topic index.  
			 ** sIndex: The screen Index.  
**Return value:** None.  

- ##1.1.2. showNext  
**Method Syntax:** `shift.screen.showNext(uIndex, tIndex, sIndex)`  
**Description:** It shows next screen  
			  ** The uIndex value define the topic screens lenght and if it is > 0 show the screen indicated by the params received  
**Parameters:** uIndex: The unit Index.  
			 ** tIndex: The topic index.  
			 ** sIndex: The screen Index.  
**Return value:** None.  

- ##1.1.3. showPrevious  
**Method Syntax:** `shift.screen.showPrevious(uIndex, tIndex, sIndex)`  
**Description:** It shows next screen  
			  ** The uIndex value define the topic screens lenght and if it is > 0 show the screen indicated by the params received  
**Parameters:** uIndex: The unit Index.  
			 ** tIndex: The topic index.  
			 ** sIndex: The screen Index.  
**Return value:** None.  

- ##1.1.4. resizeContent  
**Method Syntax:** `shift.screen.resizeContent()`  
**Description:** Resize the content and show footer toolbar when is needed  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.5. attachToolbarBehavior
**Method Syntax:** `shift.screen.attachToolbarBehavior()`  
**Description:** The toolbar navigation buttons click behavior are added ( glossary, toggle-audio and print buttons )  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.6. attachNavigationBehavior  
**Method Syntax:** `shift.screen.attachNavigationBehavior(path, bindForward)`  
**Description:** The navigation buttons click behavior are added ( go-forward, go-menu and go-back buttons )  
**Parameters:** path: actual path to prevent calls from other screens.  
			 ** for path information see the datamodel'description and documentation.  
			 ** bindForward: is false by default.  
**Return value:** None.  

- ##1.1.7. play  
**Method Syntax:** `shift.screen.play()`  
**Description:** Initialize and play the screen, it is always required throughout the project's templates.  
**Values:** shift.screen.play = function() { $.shiftScreen.initialize($("#contentPath")); };  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.8. loaded  
**Method Syntax:** `shift.screen.loaded(screenPath)`  
**Description:** Screen loaded
			  ** for path information see the datamodel'description and documentation.  
**Parameters:** screenPath: the path of the screen.  
**Return value:** None.  

- ##1.1.9. pathEqualTo
**Method Syntax:** `shift.screen.pathEqualTo(path)`  
**Description:** It prevents calls from other screens. Compare the unit, template and screen index from the path provided.  
**Parameters:** path:  the path of the screen.  
			 ** for path information see the datamodel'description and documentation.  
**Return value:** None.  

- ##1.1.10. end  
**Method Syntax:** `shift.screen.end()`  
**Description:** End the screen, call the blinkForwardButton to dispatch the go_next blink.  
**Parameters:** path:  the path of the screen.  
**Return value:** None.  

- ##1.1.11. pause  
**Method Syntax:** `shift.screen.pause()`  
**Description:** pause the screen, pause the audio currently playing.  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.12. toggleAudioButton  
**Method Syntax:** `shift.screen.toggleAudioButton(toStatus)`  
**Description:** Toggles the audio button status. Also, if the screen status is different than `"complete"`, switches it between `"incomplete"` and `"paused"`.  
**Parameters:** toStatus: received the status being toggled to the screen.  
**Return value:** None.  

- ##1.1.13. resetAudio  
**Method Syntax:** `shift.screen.resetAudio()`  
**Description:** reset the audio.  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.14. currentAudio  
**Method Syntax:** `shift.screen.currentAudio(id)`  
**Description:** Gets or sets the screen's current audio (only one active audio is valid at any given time). This is the only allowed way to access the live audio object.  
**Parameters:** The Id of the audio to set as current.  
**Return value:**  If no parameter is passed, the function returns an HTML Audio object (from DOM, not jQuery) representing the current audio.  

- ##1.1.15. stopCurrentAudio  
**Method Syntax:** `shift.screen.stopCurrentAudio()`  
**Description:** pause the screen's current active audio.  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.16. playAudio  
**Method Syntax:** `shift.screen.playAudio(audioId, callback)`  
**Description:** play the screen's current active audio.  
**Parameters:** audioId: The Id of the audio to set as current and play.  
			 ** callback: callback function.  
**Return value:** None.  

- ##1.1.17. stop  
**Method Syntax:** `shift.screen.stop()`  
**Description:** stop the screen, stop's the current active audio and call the toggleAudioButton method.  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.18. getAudio  
**Method Syntax:** `shift.screen.getAudio(id)`  
**Description:** Searches the screen data for an Audio whose Id is equal to the one provided.  
**Parameters:** The Id of the Audio to search for.  
**Return value:** An object representing the corresponding Audio (see data model documentation for details on its structure), or null if not found.  

- ##1.1.19. getImage  
**Method Syntax:** `shift.screen.getImage(id)`  
**Description:** Searches the screen data for an Image whose Id is equal the one provided.  
**Parameters:** The Id of the Image to search for.  
**Return value:** An object representing the corresponding Image (see data model documentation for details on its structure), or null if not found.  

- ##1.1.20. getParam  
**Method Syntax:** `shift.screen.getParam(id)`  
**Description:** Searches the screen data for a Param whose Id is equal the one provided.  
**Parameters:** The Id of the Param to search for.  
**Return value:** An object representing the corresponding Param (see data model documentation for details on its structure), or null if not found.  

- ##1.1.21. getParamBool  
**Method Syntax:** `shift.screen.getParamBool(id, defaultValue)`  
**Description:** Searches the screen data for a Param whose Id is equal the one provided.  
**Parameters:** The Id of the Param to search for. The default value to return if Param not found or has incorrect value.  
**Return value:** true or false according to the Param value, or the value of defaultValue if the Param not exists, the defaultValue is false by default.  

- ##1.1.22. getParamNumber  
**Method Syntax:** `shift.screen.getParamNumber(id, defaultValue)`  
**Description:** Searches the screen data for a Param whose Id is equal the one provided.  
**Parameters:** The Id of the Param to search for. The default value to return if Param not found.  
**Return value:** number contained in the Param value, or the value of defaultValue if the Param not exists, the defaultValue is 0 by default.  

- ##1.1.23. getParamString  
**Method Syntax:** `shift.screen.playAudio(id, defaultValue)`  
**Description:** Searches the screen data for a Param whose Id is equal the one provided.  
**Parameters:** The Id of the Param to search for. The default value to return if Param not found.  
**Return value:** string contained in the Param value, or the value of defaultValue if the Param not exists, the defaultValue is empty string ('') by default.  

- ##1.1.24. getText  
**Method Syntax:** `shift.screen.getText(id)`  
**Description:** Searches the screen data for a Text whose Id is equal the one provided.  
**Parameters:** The Id of the Text to search for.  
**Return value:** An object representing the corresponding Text (see data model documentation for details on its structure), or null if not found.  

- ##1.1.25. getVideo  
**Method Syntax:** `shift.screen.getVideo(id)`  
**Description:** Searches the screen data for a Video whose Id is equal the one provided.  
**Parameters:** The Id of the Video to search for.  
**Return value:** An object representing the corresponding Video (see data model documentation for details on its structure), or null if not found.  

- ##1.1.26. getAnimation  
**Method Syntax:** `shift.screen.getAnimation(id)`  
**Description:** Searches the screen data for an Edge Animation whose Id is equal the one provided and it have isanimation='True'.   
**Parameters:** The Id of the Text to search for.  
**Return value:** An object representing the corresponding Animation {id:string, filePath:string, play:function, stop:function}, or null if not found.  

- ##1.1.27. removeAnimation  
**Method Syntax:** `shift.screen.removeAnimation()`  
**Description:** remove the Edge animation.   
**Parameters:** None.  
**Return value:** None

- ##1.1.28. setScore  
**Method Syntax:** `shift.screen.setScore(path, n)`  
**Description:** setting the score of the course.  
**Parameters:** path:  the path of the screen.  
			 ** n: score value provided.  
**Return value:** None.  

- ##1.1.29. reportScoreToTracker  
**Method Syntax:** `shift.screen.reportScoreToTracker()`  
**Description:** reporting the score of the course to shift tracker setting the score average  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.30. blinkForwardButton  
**Method Syntax:** `shift.screen.blinkForwardButton(path)`  
**Description:** If the screen status is `"complete"` for an layout whose path is equal to the one provided, makes the go_next Screen button blink. Otherwise, does nothing.  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.31. clearTimeOuts  
**Method Syntax:** `shift.screen.clearTimeOuts(id)`  
**Description:**  
**Parameters:** None.  
**Return value:** None.  

- ##1.1.32. addAudioPlayer  
**Method Syntax:** `shift.screen.addAudioPlayer()`  
**Description:** Add an AudioPlayer to the screen. get the screenAudio element and add an audio-progress   
**Parameters:** None.  
**Return value:** None

- ##1.1.33. unbindPreviousCss  
**Method Syntax:** `shift.screen.unbindPreviousCss()`  
**Description:** empty the container and screen-container css and remove the body style attribute  
**Parameters:**  None  
**Return value:** None  

- ##1.1.34. unbindPreviousEvents  
**Method Syntax:** `shift.screen.unbindPreviousEvents()`  
**Description:**  remove the resize and scroll Events and attach the dialogs's behavior.  
**Parameters:**  None  
**Return value:** None  

## 1.2. mainMenu Methods:  

- ##1.2.1. show  
**Method Syntax:** `shift.screen.show()`  
**Description:** It shows the mainMenu, it loads the views/mainmenu.html file and show the viewport containing the menu.  
**Parameters:** None.  
**Return value:** None.  

- ##1.2.1. getUnitStatus  
**Method Syntax:** `shift.screen.getUnitStatus(u)`  
**Description:** Get the status and advance of the unit;
			  ** It's implementation is necesary when is filled the maiMenu status buttons at the left of the units categories into the mainMenu informing the user about the advance of each unit.  
			  ** important** only works when the course runs from an LMS. If not, it always return completed.  
**Parameters:** u: The unit Index.  
**Return value:** shift.trackers.current.getUnitStatus(u) value passing the u param received.  

- ##1.2.1. getTopicStatus  
**Method Syntax:** `shift.screen.show(u, t)`  
**Description:** Get the status and advance of the topic.  
			  ** It's implemention is neecesary when is filled the maiMenu topic buttons showed at the left of the topic categories into the mainMenu informing the user about the advance of each topic.  
			  ** important** only works when the course runs from an LMS. If not, it always return completed.  
**Parameters:** u: The unit Index.  
			 ** t: The topic index.  
**Return value:** shift.trackers.current.getTopicStatus(u, t) value passing the u and t params received.  

---------------------------------------

## 2. Important Variables:  

- ##2.1. shift.screen.getParam("title_color")  
**Description:** Each screen that has a title, must use the value of this parameter as its text color. If the parameter is not present, or has an invalid value, it should default to black.  

- ##2.1. shift.screen.getParam("title_size")  
**Description:** Each screen that has a title, must use the value of this parameter as its text size. If the parameter is not present, or has an invalid value, it should default to 18px.  

