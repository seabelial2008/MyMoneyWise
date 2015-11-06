/**
 * Created by jerry on 11/5/15.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');
exports.mongoose = mongoose;