/**
 * The class name applied to the body in dark mode
 *
 * @type {string}
 */
const BODY_CLASS = 'dark-mode';
/**
 * The class name for the dark mode switch elements
 *
 * @type {string}
 */
const SWITCHES_CLASS = `.${ BODY_CLASS }-switch`;

/**
 *  Update the dark mode based on the value in local storage.
 *
 * @param {boolean} active - Flag indicating whether the dark mode should be enabled or not
 * @return {*} The current value of the dark mode flag
 */
const onSwitchClick = ( active ) => {
	return setDarkMode( active ); // update color theme
};

/**
 * Initializes the dark mode feature.
 *
 * @param {Array}   switches - An array of checkboxes representing the switches.
 * @param {boolean} isDark   - A boolean indicating whether to enable dark mode.
 */
function initDarkMode( switches, isDark ) {
	switches
		.forEach( ( switchEl ) => {
			// update checkbox
			switchEl.onclick = () => isDark = onSwitchClick( ! isDark );
		} );
}

/**
 * Update the dark mode based on the value in local storage.
 *
 * @param {boolean} enable - Flag indicating whether the dark mode should be enabled or not.
 * @return {boolean} The current value of the dark mode flag.
 */
function setDarkMode( enable ) {
	// update body class and store the value in the local storage
	if ( enable ) { // dark theme has been selected
		document.documentElement.classList.add( BODY_CLASS );
		localStorage.setItem( 'theme', 'dark' ); // save theme selection
	} else {
		document.documentElement.classList.remove( BODY_CLASS );
		localStorage.removeItem( 'theme' ); // reset theme selection
	}

	return enable;
}

/**
 * Enables dark mode by initializing the dark mode switch elements
 * and setting the initial theme based on the value in local storage.
 */
function DarkModeModule() {
	// get the initial theme if dark or not
	const isDark = localStorage.getItem( 'theme' ) === 'dark' || false;

	if ( isDark ) {
		setDarkMode( true );
	}

	window.onload = () => {
		initDarkMode( document.querySelectorAll( SWITCHES_CLASS ), isDark );
	};
}

DarkModeModule();
