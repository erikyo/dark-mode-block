<?php
/**
 * Plugin Name:       Dark Mode Block
 * Description:       Enable dark mode for your website without any effort
 * Version:           0.1.1
 * Requires at least: 5.7
 * Tested up to:      6.5
 * Requires PHP:      5.6
 * Author:            codekraft
 * Author URI:        https://codekraft.it
 * License:           GPL v3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       dark-mode-block
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Register the block */
\add_action( 'init', function () {
	\register_block_type( __DIR__ . '/build' );
} );

/** Enqueue the block assets */
\add_action( 'wp_enqueue_scripts', function () {
	\wp_enqueue_script( 'dark-mode-block', \plugin_dir_url( __FILE__ ) . '/build/dark-mode.js', array(), '0.1.1', array( 'strategy' => false, 'in_footer' => false, ) );
}, 0 );
