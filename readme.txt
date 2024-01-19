=== Dark Mode Block ===
Contributors:      codekraft
Tags:              dark mode, theme, css, block
Requires at least: 5.8
Tested up to:      6.4
Stable tag:        0.1.0
Requires PHP:      7.1
License:           GPLv3 or later
License URI:       http://www.gnu.org/licenses/gpl-3.0.html

== Description ==

Dark Mode Block is a simple yet powerful WordPress block plugin that allows you to enable dark mode for your website, enhancing readability and reducing eye strain without altering your website's colors. Give your users the flexibility to switch between light and dark modes seamlessly.
Designed to be lightweight and efficient the whole frontend script weights less than half of a kb gzipped 😉

Features:
- Toggle dark mode with a user-friendly icon.
- Preserve your website's color scheme while improving readability in low-light environments.
- Enhanced user experience with reduced eye strain.
- Customizable

Make your website more accessible and user-friendly by offering a dark mode option. With Dark Mode Block, your users can enjoy your content without compromising on aesthetics.

== Installation ==

1. Upload the 'dark-mode-block' folder to the '/wp-content/plugins/' directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.

== Usage ==

1. After activating the plugin, add the "Dark Mode" block to your WordPress page or post editor.
2. Publish or update your content.

== Customization ==

Unleash your creativity! This block is designed to be fully customizable graphically, and since it's entirely CSS-based, it's straightforward for anyone to modify and adapt it according to their own taste or template.

You even have control over how the dark mode is applied! Currently, I've applied an invert filter on the background as I don't know the variables in your template.
However, you have the flexibility to make it even better by setting the text color as the background and vice versa.

Here's how to do it:

1. Add the following code to your functions.php file.
2. Edit the $custom_css in order to fit your preferences

First dequeue the current style in this way:

`

add_action( 'wp_enqueue_scripts', function () {
	/** dequeue the default dark mode */
	wp_dequeue_style( 'codekraft-dark-mode-style' );
}, 9 );

`

Then add yours!

`

add_action( 'wp_head', function () {
	/** @var {string} $custom_css - your custom css for the dark mode */
	$custom_css = "html.dark-mode body {
		--wp--preset--color--background: #232323;
		--wp--preset--color--foreground: #f3f3f3;
	}
	.dark-mode-switch::before {
		width: 1.6rem;
		cursor: pointer;
		display: flex;
		font-size: 1.6rem;
		line-height: 1.6rem;
		content: '🌞'
	}
	.dark-mode .dark-mode-switch::before {
		content: '🌚'
	}";
	echo "<style id='dark-mode-custom'>$custom_css</style>";
}, 20 );

`

Please support the plugin posting your custom style and a screenshot in the WordPress support forum section!

== Frequently Asked Questions ==

**Q: Does this plugin work with all WordPress themes?**
A: Dark Mode Block is designed to be compatible with most of FSE WordPress themes. However, some themes may require additional styling adjustments for optimal dark mode functionality.

== Changelog ==

= 0.1.0 =
* Initial release

