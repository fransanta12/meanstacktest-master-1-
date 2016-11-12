# FW6 Data Model
**Version:** 1.0.1 (2013/04/04)

---------------------------------------

##1. Data types:

- ###1.1. String. 
An arbitrarily long string of characters, including spaces, symbols, etc. It's encoded in UTF-8, and may or may not contain valid HTML5 tags. It is always contained between quotation marks.  
**Examples:** `'Hello world'`, `'日本語'`, `"The quick brown fox jumps over the lazy dog."`, `"<p>This is some text.</p><br/><p>This is some other text.</p>"`  
**Counterexamples:** `Hello world`, `14`, `true`.

- ###1.2. GUID.
This is a particular kind of `String`, restricted to five alphanumeric characters (a-z, 0-9). It is used to identify an element uniquely inside its container, or the whole system. It is case insensitive, so for example, 'AAAAA' equals 'aaaaa' equals 'aAaAa'. For practical purposes, the system always stores and processes it as lowercase.  
**Examples:** `"f54gl"`, `"xcw13"`, `"00000"`, `"shift"`, `"softw"`,`"59074"`,`"48vf8"`.  
**Counterexamples:** `"n w f"`, `"%$3gd"`, `"fm_4n"`, `"fgr-y"`.

- ###1.3. Id.
A particular kind of `String`, of arbitrary length (at least one), but restricted to alphanumeric characters (a-z, 0-9) and the symbols "_" and "-". Any other characters would render it invalid. It is used to identify elements inside the data model. The hyphen should be always preferred over the underscore, the later only used when strictly necessary. It is case insensitive.  
**Examples:** `"a1"`,`"background-color"`,`"last-update_date"`.  
**Counterexamples:** `"a 1"`, `"second@audio"`, `"#ffffff"`.

- ###1.4. RGBCode.
Another parcitular kind of `String`, its formed by six digits, and always begins with a #. It represents an RGB color code, according to CSS styles.  
**Examples:** `"#ffffff"`,`"#000000"`,`"#49aa7f"`.  
**Counterexamples:** `"ffffff"`,`"000"`,`"ghmr3e"`.

- ###1.5. URL.
A `String`, representing a valid Uniform Resource Locator. All restrictions and guidelines apply. Usually, this will be relative to the container root folder.  
**Examples:** `"file.ogg"`, `"/one/two/three.gif"`, `"http://www.server.com/image.jpg"`.  
**Counterexamples:** `file*.mp3`, `?????.pdf`. 

- ###1.6. Integer.
Any integer number. Trailing zeroes may or may not be ommited. It must not contain commas or periods. It must not be surrounded by quotation marks, otherwise it will be interpreted as a string.  
**Examples:** `0`, `10384904`, `001`,`-14`.  
**Counterexamples:** `10.4`,`1,493387`,`"483"`.

- ###1.7. Natural.
- An `Integer` that is greater than or equal to zero. All other restrictions and guidelines defined on section 1.6 apply.  
**Examples:** `0`,`1000`,`138578309034847`.  
**Counterexamples:** `-14`.

- ###1.8. Boolean.
It has only two valid values: `true` and `false`. If passed `0`, `""`, `undefined`, or `NaN` it will be interpreted as `false`, everything else will be `true`. It must not be surrounded by quotation marks, otherwise it will be interpreted as a string.  
**Examples:** `true`, `false`.  
**Counterexamples:** `0`, `-1`, `1`.  

---------------------------------------

##2. Data structure:

###2.1. shift  
This is the main data element.  

- ####2.1.1. shift.mainMenu  
This is the mainMenu data element. It contains all the mainMenu's parameters and methods.  

- ####2.1.2. shift.screen  
This is the screen data element. It contains all the screen's information, parameters, media ponters and methods.  
	- ####2.1.2.1. shift.screen.id  
	**Description:** Screen unique identifier.  
	**Data type:** `GUID`.  
	**Required:** Yes.  
	
	- ####2.1.2.2. shift.screen.name  
	**Description:** Screen full name.  
	**Data type:** `String`.  
	**Required:** No.  
	**Default value:** "".  
	
	- ####2.1.2.3. shift.screen.type  
	**Description:** Screen type, according to the system's sequence.  See separate Type Definition document.    
	**Data type:** `Natural`.  
	**Required:** Yes.  
	
	- ####2.1.2.4. shift.screen.path  
	**Description:** Store the current screen path.  
	**Data type:** `Boolean`.  
	**Values:**  `uIndex`, `tIndex`, `sIndex`.  
	**Required:** Yes.  
	
	- ####2.1.2.5. shift.screen.rawdata  
	**Description:** Store the data value.  
	**Data type:** `String`.  
	**Required:** Yes.  
	
	- ####2.1.2.6. shift.screen.name  
	**Description:** The name of the course where this particular screen is located.  
	**Data type:** `String`.  
	**Required:** No.  
	**Default value:** ""  

	- #####2.1.2.7. shift.screen.isIOS  
	**Description:** It defines if the screen is open in iOS.  
	**Data type:** `Boolean`.  
	**Required:** No.  

	- #####2.1.2.8. shift.screen.isAndroid  
	**Description:** It defines if the screen is open in Android.  
	**Data type:** `Boolean`.  
	**Required:** No.  

	- #####2.1.2.9. shift.screen.isTest  
	**Description:** It defines if the screen is Test.  
	**Data type:** `Boolean`.  
	**Required:** No.  

	- #####2.1.2.10. shift.screen.path  
	**Description:** It defines the screen path.  
				  ** The path define the unit, topic and screen Indexes, initially all of them were starting from 0.  
	**Data type:** `Object`.  
	**Required:** Yes.  
		- ######2.1.2.10.1. shift.screen.path.uIndex  
		**Description:** It defines the screen path unit index, initial value 0.  
		**Data type:** `int`.  
		**Required:** Yes.  

		- ######2.1.2.10.2. shift.screen.path.tIndex  
		**Description:** It defines the screen path topic index, initial value 0.  
		**Data type:** `int`.  
		**Required:** Yes.  

		- ######2.1.2.10.3. shift.screen.path.sIndex  
		**Description:** It defines the screen path screen index, initial value 0.  
		**Data type:** `int`.  
		**Required:** Yes.  

	- #####2.1.2.11. shift.screen.audioStatus  
	**Description:** It defines if the audio status is play or pause mode.  
	**Data type:** `Object`.  
	**Required:** Yes.  
		- ######2.1.2.11.1. shift.screen.audioStatus.play  
		**Description:** It defines the audio status play.  
		**Data type:** `String`.  
		**Required:** Yes.  

		- ######2.1.2.11.2. shift.screen.audioStatus.pause  
		**Description:** It defines the audio status pause.  
		**Data type:** `String`.  
		**Required:** Yes.  

	- #####2.1.2.12. shift.screen.eventType  
	**Description:** It defines if the window is manipulated with a touch or mouse after the ontouchstart event is dispatched.  
	**Data type:** `String`.  
	**Required:** No.  

	- #####2.1.2.13. shift.screen.layout  
	**Description:** It defines the window position horizontal or vertical depending of the width and height's value compared.  
	**Data type:** `String`.  
	**Required:** Yes.  

	- #####2.1.2.14. shift.screen.transitionSpeed  
	**Description:** It defines the speed of the transition.  
	**Data type:** `int`.  
	**Required:** No.  

- ####2.1.3. shift.screenStatus  
**Description:** Represents the current screen status.  
**Values:**  case insensitive, status string. When comparing, what matters is the first letter.  
**Data type:** `Object`.  
**Required:** No.  
	- ####2.1.3.1. shift.screen.notAttempted  
	**Description:** Screen status not attempted identifier, value 0.  
	**Data type:** case `insensitive`, status `int`.  
	**Required:** No.  

	- ####2.1.3.2. shift.screenStatus.incomplete  
	**Description:** Screen status incomplete identifier, value 1.  
	**Data type:** case `insensitive`, status `int`.  
	**Required:** No.  

	- ####2.1.3.3. shift.screenStatus.completed  
	**Description:** Screen status completed identifier, value 2.  
	**Data type:** case `insensitive`, status `int`.  
	**Required:** No.  

	- ####2.1.3.4. shift.screenStatus.paused  
	**Description:** Screen status paused identifier, value 3.  
	**Data type:** case `insensitive`, status `int`.  
	**Required:** No.  

- ####2.1.4. shift.trackers  
**Description:** This is the tracker data element. It contains all the tracker's information, parameters and methods.  
**Data type:** `Object`.  
**Required:** Yes.  
	- #####2.1.4.1. shift.trackers.startTime  
	**Description:** It is the date time.  
	**Data type:** `Date`.  
	**Required:** Yes.  

	- #####2.1.4.2. shift.trackers.current  
	**Description:** This is the current tracker. It defines all the current tracker parameters and methods.      
	**Data type:** `Object`.  
	**Values:**  id, api, browse.  
	**Required:** Yes.  

	- #####2.1.4.3. shift.trackers.scorm  
	**Description:** It defines the tracker scorm.  
	**Data type:** `Object`.  
	**Values:**  id, api, data, browse.  
	**Required:** Yes.  

