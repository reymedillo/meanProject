'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		required: 'Please fill first name',
		trim: true
	},
	surName: {
		type: String,
		default: '',
		required: 'Please fill surname',
		trim: true
	},
	suburb: {
		type: String,
		default: '',
		required: 'Please fill suburb',
		trim: true
	},
	country: {
		type: String,
		default: '',
		required: 'Please fill country',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		required: 'Please fill industry',
		trim: true
	},
	email: {
		type: String,
		default: '',
		required: 'Please fill email',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		required: 'Please fill phone',
		trim: true
	},
	referred: {
		type: Boolean
	},
	channel: {
		type: String,
		default: '',
		required: 'Please fill channel',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Customer', CustomerSchema);