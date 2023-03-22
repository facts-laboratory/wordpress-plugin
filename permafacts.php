<?php
/**
 * Plugin Name: Permafacts 
 * Description: Deploy articles to the permaweb with the Permafacts Truth Market block. This customizable block lets you showcase articles and invite readers to vote on their accuracy, promoting transparency and accountability in journalism.
 * Version: 0.1.0
 * Author: Permafacts
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

defined( 'ABSPATH' ) or die();

// Load the React app
function load_react() {
    wp_enqueue_script( 'permafacts-react-app', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-blocks', 'wp-element', 'wp-components' ), '0.1.0', true );
}
add_action( 'enqueue_block_editor_assets', 'load_react' );

function gutenberg_my_block_init() {
    register_post_meta( 'post', 'arweaveTxId', array(
        'show_in_rest' => true,
    ) );
}
add_action( 'init', 'gutenberg_my_block_init' );

// Add custom meta data to published posts
function add_article_id_meta( $post_id, $post, $update ) {
    // If this is a revision, don't send the email.
    if ( wp_is_post_revision( $post_id ) )
        return;

    // Check if the permafacts_article_id meta value already exists for the post
    $article_id = get_post_meta( $post_id, 'permafacts_article_id', true );
    if ( empty( $article_id ) ) {
        // Generate a unique article ID
        $article_id = 'article_' . wp_generate_password( 16, false );

        // Add the article ID as post meta data
        add_post_meta( $post_id, 'permafacts_article_id', $article_id );
    } else {
        // Update the existing article ID
        return;
    }
}
add_action( 'wp_insert_post', 'add_article_id_meta', 10, 3 );

function feedback_arweave_tx(){
    if(isset($_REQUEST)){
        $arweave_tx_id = $_REQUEST['arweave_tx_id'];
        $post_id = $_REQUEST['post_id'];

        // Add the article ID as post meta data
        add_post_meta( $post_id, 'arweaveTxId', $arweave_tx_id);
    }

    die();
}
add_action('wp_ajax_arweave_tx', 'feedback_arweave_tx');

function get_arweave_tx() {
    $post_id = get_the_ID();
    $meta_value = get_post_meta( $post_id, 'arweaveTxId', true );
    var_dump($meta_value);

    echo json_encode( array( 'meta_value' => $meta_value ) );

    wp_die();
}
add_action( 'wp_ajax_get_arweave_tx', 'get_arweave_tx' );
