import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import React from 'react';

import './style.scss';
import './editor.scss';

import MarketComingSoon from './components/MarketComingSoon';
import Market from './components/Market';
import MarketDeploy from './components/MarketDeploy';

registerBlockType( 'permafacts/my-block', {
    title: __( 'Permafacts' ),
    icon: 'admin-site-alt3',
    category: 'common',
    keywords: [
        __( 'Permafacts' ),
        __( 'Truth' ),
        __( 'Market' ),
    ],

    attributes: {
        articleId: {
            type: 'string',
            meta: 'article_id',
        },
        articleContent: {
            type: 'string',

        },
        arweaveTxId: {
            type: 'string',
            source: 'meta',
            meta: 'arweaveTxId',
        }
    },


    edit: ( props ) => {
        const { attributes, setAttributes } = props;

        console.log('props', props);

        console.log('wp', wp)

        // Check if the current user is an admin
        const isAdmin = wp.data.select( 'core' ).canUser( 'create', 'posts' );


        // Check if the current post has a market ID
        const marketId = attributes.marketId;

        // Render the appropriate component based on the business logic
        if ( isAdmin && ! marketId ) {
            return <MarketDeploy { ...props } />;
        } else if ( isAdmin && marketId ) {
            return <MarketAdmin { ...props } />;
        } else if ( ! isAdmin && marketId ) {
            return <Market { ...props } />;
        } else {
            return <MarketComingSoon { ...props } />;
        }
    },

    save: ( props ) => {
        const { attributes, setAttributes } = props;

        // Check if the current user is an admin
        const isAdmin = wp.data.select( 'core' ).canUser( 'create', 'posts' );

        // Check if the current post has a market ID
        const marketId = attributes.marketId;

        // Render the appropriate component based on the business logic
        if ( isAdmin && ! marketId ) {
            return <MarketDeploy { ...props } />;
        } else if ( isAdmin && marketId ) {
            return <MarketAdmin { ...props } />;
        } else if ( ! isAdmin && marketId ) {
            return <Market { ...props } />;
        } else {
            return <MarketComingSoon { ...props } />;
        }
    },
} );
