/*	VCO.Util
	Class of utilities
================================================== */
VCO.Util = {
	
	extend: function (/*Object*/ dest) /*-> Object*/ {	// merge src properties into dest
		var sources = Array.prototype.slice.call(arguments, 1);
		for (var j = 0, len = sources.length, src; j < len; j++) {
			src = sources[j] || {};
			for (var i in src) {
				if (src.hasOwnProperty(i)) {
					dest[i] = src[i];
				}
			}
		}
		return dest;
	},
	
	setOptions: function (obj, options) {
		obj.options = VCO.Util.extend({}, obj.options, options);
	},
	
	stamp: (function () {
		var lastId = 0, key = '_vco_id';
		return function (/*Object*/ obj) {
			obj[key] = obj[key] || ++lastId;
			return obj[key];
		};
	}()),
	
	unique_ID: function(size) {
		
		var getRandomNumber = function(range) {
			return Math.floor(Math.random() * range);
		};

		var getRandomChar = function() {
			var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
			return chars.substr( getRandomNumber(62), 1 );
		};

		var randomID = function(size) {
			var str = "";
			for(var i = 0; i < size; i++) {
				str += getRandomChar();
			}
			return str;
		};
		
		return randomID(size);
	},
	
	getParamString: function (obj) {
		var params = [];
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				params.push(i + '=' + obj[i]);
			}
		}
		return '?' + params.join('&');
	},
	
	template: function (str, data) {
		return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
			var value = data[key];
			if (!data.hasOwnProperty(key)) {
				throw new Error('No value provided for variable ' + str);
			}
			return value;
		});
	}
};