'use strict';

/**
 * event-eng router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event-eng.event-eng');
