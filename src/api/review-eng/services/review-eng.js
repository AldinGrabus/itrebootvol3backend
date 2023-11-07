'use strict';

/**
 * review-eng service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review-eng.review-eng');
