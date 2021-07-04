/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
/**
 * User schema
 */

const User = new Schema();

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

User.method({});

/**
 * Statics
 */

User.static({});

/**
 * Register
 */
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
