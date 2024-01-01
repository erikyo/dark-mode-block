<?php

/**
 * Plugin Name:       Dark Mode Block
 * Description:       Enable dark mode for your website without any effort
 * Version:           0.1.0
 * Requires at least: 5.7
 * Tested up to:      6.3
 * Requires PHP:      5.6
 * Author:            codekraft
 * Author URI:        https://codekraft.it
 * License:           GPL v3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       dark-mode-block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

\add_action( 'init', function() {
    \register_block_type( __DIR__ );
} );
