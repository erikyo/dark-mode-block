/**
 * The class name applied to the body in dark mode
 *
 * @type {string}
 */
const DM_CLASS = 'dark-mode';
/**
 * The class name for the dark mode switch elements
 *
 * @type {string}
 */
const SWITCHES_CLASS = `.${ DM_CLASS }-switch`;

/**
 * Initializes the dark mode feature.
 *
 * @param {NodeList} switches - An array of checkboxes representing the switches.
 * @param {string}   mode     - the value of the dark mode flag
 */
function initDarkMode( switches, mode ) {
	switches
		.forEach( ( switchEl ) => {
			// update checkbox
			switchEl.onclick = () => mode = setMode( mode );
		} );
}

/**
 * Update the dark mode based on the value in local storage.
 *
 * @param {string=} mode - Flag indicating whether the dark mode should be enabled or not.
 * @return {string} The current value of the dark mode flag.
 */
function setMode( mode ) {
	const rootClassList = document.documentElement.classList;
	const isDark = mode === 'dark';

	// Toggle dark mode class
	rootClassList[ isDark ? 'add' : 'remove' ]( DM_CLASS );

	// Update local storage
	localStorage[ mode ? 'setItem' : 'removeItem' ]( DM_CLASS, mode );

	return isDark ? 'light' : 'dark';
}

/**
 * Returns whenever the dark mode is enabled or not based on the user's system settings.
 *
 * @return {string} true if the dark mode is enabled, false otherwise
 */
function detectDarkMode() {
	return window.matchMedia( '(prefers-color-scheme: dark)' )?.matches ? 'dark' : 'light';
}

/**
 * Checks if the dark mode is stored in the local storage.
 *
 * @return {string|undefined} Returns the value of the color-scheme mode stored in the local storage
 */
function hasStoredDarkMode() {
	return localStorage.getItem( DM_CLASS ) ?? undefined;
}

/**
 * Initializes the dark mode feature for the UI based on
 * stored settings or system preference.
 */
function DarkModeModule() {
	let mode = hasStoredDarkMode();

	// if mode is undefined, detect the mode
	if ( ! mode ) {
		mode = detectDarkMode();
	}

	window.onload = () => {
		initDarkMode( document.querySelectorAll( SWITCHES_CLASS ), setMode( mode ) );
	};
}

DarkModeModule();
