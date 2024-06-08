// external imports
const convict = require('convict');

let config = convict({
	server: {
		enableHttpLogging: {
			doc: 'Enable HTTP Logging',
			format: Boolean,
			default: true
		},
	},
	mongodb: {
		connectionUri: 'mongodb+srv://joshikrupa51:admin@cluster0.st7tfr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
		database: {
			doc: 'user info database',
			format: String,
			default: 'user_management_system'
		},
		collection: {
			user: {
				doc: 'user details collection',
				format: String,
				default: 'user'
			}
		}
	},
	maxAge: {
		doc: 'Maximum age of a jwt, Default: 30 minutes',
		format: Number,
		default: 30 * 60 * 1000
	},
});

module.exports = config;