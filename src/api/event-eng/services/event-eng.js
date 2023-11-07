'use strict';

/**
 * event-eng service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-eng.event-eng');
