import React, { Fragment, useState } from 'react';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React$1 = _interopDefault(React);

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = function () {
  var array = [];

  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }

  return array;
}();

var compactQueue = function compactQueue(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];

    if (isArray(obj)) {
      var compacted = [];

      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== 'undefined') {
          compacted.push(obj[j]);
        }
      }

      item.obj[item.prop] = compacted;
    }
  }
};

var arrayToObject = function arrayToObject(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};

  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }

  return obj;
};

var merge = function merge(target, source, options) {
  /* eslint no-param-reassign: 0 */
  if (!source) {
    return target;
  }

  if (typeof source !== 'object') {
    if (isArray(target)) {
      target.push(source);
    } else if (target && typeof target === 'object') {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }

    return target;
  }

  if (!target || typeof target !== 'object') {
    return [target].concat(source);
  }

  var mergeTarget = target;

  if (isArray(target) && !isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }

  if (isArray(target) && isArray(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        var targetItem = target[i];

        if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }

  return Object.keys(source).reduce(function (acc, key) {
    var value = source[key];

    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }

    return acc;
  }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};

var decode = function (str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, ' ');

  if (charset === 'iso-8859-1') {
    // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  } // utf-8


  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};

var encode = function encode(str, defaultEncoder, charset) {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }

  var string = str;

  if (typeof str === 'symbol') {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== 'string') {
    string = String(str);
  }

  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
  }

  var out = '';

  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);

    if (c === 0x2D // -
    || c === 0x2E // .
    || c === 0x5F // _
    || c === 0x7E // ~
    || c >= 0x30 && c <= 0x39 // 0-9
    || c >= 0x41 && c <= 0x5A // a-z
    || c >= 0x61 && c <= 0x7A // A-Z
    ) {
        out += string.charAt(i);
        continue;
      }

    if (c < 0x80) {
      out = out + hexTable[c];
      continue;
    }

    if (c < 0x800) {
      out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    if (c < 0xD800 || c >= 0xE000) {
      out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    i += 1;
    c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
    out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
  }

  return out;
};

var compact = function compact(value) {
  var queue = [{
    obj: {
      o: value
    },
    prop: 'o'
  }];
  var refs = [];

  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);

    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];

      if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj: obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }

  compactQueue(queue);
  return value;
};

var isRegExp = function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
  return [].concat(a, b);
};

var utils = {
  arrayToObject: arrayToObject,
  assign: assign,
  combine: combine,
  compact: compact,
  decode: decode,
  encode: encode,
  isBuffer: isBuffer,
  isRegExp: isRegExp,
  merge: merge
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};
var formats = utils.assign({
  'default': Format.RFC3986,
  formatters: {
    RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function (value) {
      return String(value);
    }
  }
}, Format);
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + '[]';
  },
  comma: 'comma',
  indices: function indices(prefix, key) {
    return prefix + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$1 = Array.isArray;
var push = Array.prototype.push;

var pushToArray = function (arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  charset: 'utf-8',
  charsetSentinel: false,
  delimiter: '&',
  encode: true,
  encoder: utils.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats.formatters[defaultFormat],
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
  return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};

var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
  var obj = object;

  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate(obj);
  } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
    obj = obj.join(',');
  }

  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
    }

    obj = '';
  }

  if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
      return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
    }

    return [formatter(prefix) + '=' + formatter(String(obj))];
  }

  var values = [];

  if (typeof obj === 'undefined') {
    return values;
  }

  var objKeys;

  if (isArray$1(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    if (isArray$1(obj)) {
      pushToArray(values, stringify(obj[key], typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    } else {
      pushToArray(values, stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    }
  }

  return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
  if (!opts) {
    return defaults;
  }

  if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }

  var charset = opts.charset || defaults.charset;

  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  var format = formats['default'];

  if (typeof opts.format !== 'undefined') {
    if (!has$1.call(formats.formatters, opts.format)) {
      throw new TypeError('Unknown format option provided.');
    }

    format = opts.format;
  }

  var formatter = formats.formatters[format];
  var filter = defaults.filter;

  if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
    filter = opts.filter;
  }

  return {
    addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
    allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
    encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
    encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
    filter: filter,
    formatter: formatter,
    serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
    skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
    sort: typeof opts.sort === 'function' ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
};

var stringify_1 = function (object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;

  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (isArray$1(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }

  var keys = [];

  if (typeof obj !== 'object' || obj === null) {
    return '';
  }

  var arrayFormat;

  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && 'indices' in opts) {
    arrayFormat = opts.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = 'indices';
  }

  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

  if (!objKeys) {
    objKeys = Object.keys(obj);
  }

  if (options.sort) {
    objKeys.sort(options.sort);
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (options.skipNulls && obj[key] === null) {
      continue;
    }

    pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.formatter, options.encodeValuesOnly, options.charset));
  }

  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';

  if (options.charsetSentinel) {
    if (options.charset === 'iso-8859-1') {
      // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
      prefix += 'utf8=%26%2310003%3B&';
    } else {
      // encodeURIComponent('✓')
      prefix += 'utf8=%E2%9C%93&';
    }
  }

  return joined.length > 0 ? prefix + joined : '';
};

var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var defaults$1 = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  charset: 'utf-8',
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: '&',
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};

var interpretNumericEntities = function (str) {
  return str.replace(/&#(\d+);/g, function ($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
}; // This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.


var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.

var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
  var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1; // Keep track of where the utf8 sentinel was found

  var i;
  var charset = options.charset;

  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf('utf8=') === 0) {
        if (parts[i] === charsetSentinel) {
          charset = 'utf-8';
        } else if (parts[i] === isoSentinel) {
          charset = 'iso-8859-1';
        }

        skipIndex = i;
        i = parts.length; // The eslint settings do not allow break;
      }
    }
  }

  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }

    var part = parts[i];
    var bracketEqualsPos = part.indexOf(']=');
    var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
    var key, val;

    if (pos === -1) {
      key = options.decoder(part, defaults$1.decoder, charset, 'key');
      val = options.strictNullHandling ? null : '';
    } else {
      key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset, 'key');
      val = options.decoder(part.slice(pos + 1), defaults$1.decoder, charset, 'value');
    }

    if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
      val = interpretNumericEntities(val);
    }

    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
      val = val.split(',');
    }

    if (part.indexOf('[]=') > -1) {
      val = isArray$2(val) ? [val] : val;
    }

    if (has$2.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }

  return obj;
};

var parseObject = function (chain, val, options) {
  var leaf = val;

  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];

    if (root === '[]' && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);

      if (!options.parseArrays && cleanRoot === '') {
        obj = {
          0: leaf
        };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
        obj = [];
        obj[index] = leaf;
      } else {
        obj[cleanRoot] = leaf;
      }
    }

    leaf = obj;
  }

  return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
  if (!givenKey) {
    return;
  } // Transform dot notation to bracket notation


  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey; // The regex chunks

  var brackets = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g; // Get the parent

  var segment = options.depth > 0 && brackets.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key; // Stash the parent if it exists

  var keys = [];

  if (parent) {
    // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
    if (!options.plainObjects && has$2.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(parent);
  } // Loop through children appending to the array until we hit depth


  var i = 0;

  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;

    if (!options.plainObjects && has$2.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(segment[1]);
  } // If there's a remainder, just add whatever is left


  if (segment) {
    keys.push('[' + key.slice(segment.index) + ']');
  }

  return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
  if (!opts) {
    return defaults$1;
  }

  if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
    throw new TypeError('Decoder has to be a function.');
  }

  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  var charset = typeof opts.charset === 'undefined' ? defaults$1.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults$1.allowPrototypes,
    arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults$1.arrayLimit,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
    comma: typeof opts.comma === 'boolean' ? opts.comma : defaults$1.comma,
    decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults$1.decoder,
    delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults$1.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults$1.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults$1.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};

var parse = function (str, opts) {
  var options = normalizeParseOptions(opts);

  if (str === '' || str === null || typeof str === 'undefined') {
    return options.plainObjects ? Object.create(null) : {};
  }

  var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {}; // Iterate over the keys and setup the new object

  var keys = Object.keys(tempObj);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }

  return utils.compact(obj);
};

var lib = {
  formats: formats,
  parse: parse,
  stringify: stringify_1
};
var lib_2 = lib.parse;
var lib_3 = lib.stringify;

function fixedZero(val) {
  return val * 1 < 10 ? "0".concat(val) : val;
}

function getPlainNode(nodeList) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var arr = [];
  nodeList.forEach(function (node) {
    var item = node;
    item.path = "".concat(parentPath, "/").concat(item.path || '').replace(/\/+/g, '/');
    item.exact = true;

    if (item.children && !item.component) {
      arr.push.apply(arr, _toConsumableArray(getPlainNode(item.children, item.path)));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }

      arr.push(item);
    }
  });
  return arr;
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }

  var arr1 = str1.split('/');
  var arr2 = str2.split('/');

  if (arr2.every(function (item, index) {
    return item === arr1[index];
  })) {
    return 1;
  }

  if (arr1.every(function (item, index) {
    return item === arr2[index];
  })) {
    return 2;
  }

  return 3;
}

function getRenderArr(routes) {
  var renderArr = [];
  renderArr.push(routes[0]);

  var _loop = function _loop(i) {
    // 去重
    renderArr = renderArr.filter(function (item) {
      return getRelation(item, routes[i]) !== 1;
    }); // 是否包含

    var isAdd = renderArr.every(function (item) {
      return getRelation(item, routes[i]) === 3;
    });

    if (isAdd) {
      renderArr.push(routes[i]);
    }
  };

  for (var i = 1; i < routes.length; i += 1) {
    _loop(i);
  }

  return renderArr;
}
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */


function getRoutes(path, routerData) {
  var routes = Object.keys(routerData).filter(function (routePath) {
    return routePath.indexOf(path) === 0 && routePath !== path;
  }); // Replace path to '' eg. path='user' /user/name => name

  routes = routes.map(function (item) {
    return item.replace(path, '');
  }); // Get the route to be rendered to remove the deep rendering

  var renderArr = getRenderArr(routes); // Conversion and stitching parameters

  var renderRoutes = renderArr.map(function (item) {
    var exact = !routes.some(function (route) {
      return route !== item && getRelation(route, item) === 1;
    });
    return _objectSpread2({
      exact: exact
    }, routerData["".concat(path).concat(item)], {
      key: "".concat(path).concat(item),
      path: "".concat(path).concat(item)
    });
  });
  return renderRoutes;
}

function getPageQuery() {
  return lib_2(window.location.href.split('?')[1]);
}

function getQueryPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var search = lib_3(query);

  if (search.length) {
    return "".concat(path, "?").concat(search);
  }

  return path;
}
/* eslint no-useless-escape:0 */


var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

function isUrl(path) {
  return reg.test(path);
}

function formatWan(val) {
  var v = val * 1;
  if (!v || Number.isNaN(v)) return '';
  var result = val;

  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = React$1.createElement("span", null, result, React$1.createElement("span", {
      style: {
        position: 'relative',
        top: -2,
        fontSize: 14,
        fontStyle: 'normal',
        marginLeft: 2
      }
    }, "\u4E07"));
  }

  return result;
} // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性


function isAntdPro() {
  return window.location.hostname === 'preview.pro.ant.design';
} // 类型判断


var isType = function isType(type) {
  return function (obj) {
    return obj != null && Object.prototype.toString.call(obj) === "[object ".concat(type, "]");
  };
};

var isFn = isType('Function');
var isArr = Array.isArray || isType('Array');
var isPlainObj = isType('Object');
var isStr = isType('String');
var isBool = isType('Boolean');
var isNum = isType('Number');

var isObj = function isObj(val) {
  return _typeof(val) === 'object';
};

var isRegExp$1 = isType('RegExp');

var isEmpty = function isEmpty(val) {
  if (!val && !isNum(val)) {
    return true;
  }
};

var isEmptyArr = function isEmptyArr(list) {
  if (!isArr(list)) return;
  return list.every(function (ele) {
    return isEmpty(ele);
  });
};

var filterRender = function filterRender(val, children) {
  return isEmpty(val) ? '--' : children || val;
};

var filterEmptyAttr = function filterEmptyAttr(obj) {
  if (!isObj(obj)) return obj;
  Object.keys(obj).forEach(function (ele) {
    if (isEmpty(obj[ele])) delete obj[ele];
  });
  return obj;
};
/**
 * 例如
 * https://XXX/测试文件_6bd8d67918157897f68728b369caaa14.jpeg  ===> 测试文件.jpeg
 * https://XXX/6bd8d67918157897f68728b369caaa14.jpeg  ===> 6bd8d67918157897f68728b369caaa14.jpeg
 */


function simplifyFileName(url, code) {
  var index = url.indexOf('_');
  var nameStartIndex = url.lastIndexOf('/');

  if (typeof url !== 'string') {
    return url;
  }

  if (index < 0) {
    return url.substring(nameStartIndex + 1); // 直接返回文件名
  }

  var extensionName = url.substring(url.lastIndexOf('.')); // 扩展名

  var nameEndIndex = url.lastIndexOf('_');
  var retStr = url.substring(nameStartIndex + 1, nameEndIndex);

  if (code * 1 !== 4) {
    return retStr + extensionName.substring(0, extensionName.indexOf('?'));
  }

  return retStr + extensionName;
} // 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式


function simplifyUrlMapToFileList(arr, code) {
  if (!arr || !arr.length) {
    return arr;
  }

  if (typeof arr === 'string') {
    arr = [arr];
  }

  var data = arr.map(function (urlStr, i) {
    if (typeof urlStr !== 'string') {
      return urlStr;
    }

    var element = {}; // console.log(urlStr, 123);
    // const index = urlStr.lastIndexOf('/');

    element.uid = -i + 10;
    element.status = 'done';
    element.name = simplifyFileName(urlStr, code); // urlStr.substring(index + 1);

    element.url = urlStr;
    return element;
  }); // debugger

  return data;
} // 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式


function urlMapToFileList(arr) {
  if (!arr || !arr.length) {
    return arr;
  }

  if (typeof arr === 'string') {
    arr = [arr];
  }

  var data = arr.map(function (urlStr, i) {
    if (typeof urlStr !== 'string') {
      return urlStr;
    }

    var element = {}; // console.log(urlStr, 123);

    var index = urlStr.lastIndexOf('/');
    element.uid = -i + 10;
    element.status = 'done';
    element.name = urlStr.substring(index + 1);
    element.url = urlStr;
    return element;
  }); // debugger

  return data;
} // 返回url对应的文件名


function urlMapToFile(urlStr) {
  if (typeof urlStr !== 'string') {
    return urlStr;
  }

  var index = urlStr.lastIndexOf('/');
  return urlStr.substring(index + 1);
}

function fileListTourlMap(arr) {
  if (!arr || !arr.length) {
    return arr;
  }

  var data = arr.map(function (ele) {
    return ele.url || null;
  });
  return data.filter(function (ele) {
    return ele;
  });
}

function transformServerDataForDefaultTreeData(data) {
  var Tdata = {};
  var childMeun = [];
  var childFunList = [];
  Tdata.title = data.name;
  Tdata.value = data.token;
  Tdata.key = data.token;
  Tdata.children = [];

  if (data.childMenuDefList && data.childMenuDefList.length) {
    childMeun = data.childMenuDefList.map(function (chidData) {
      return transformServerDataForDefaultTreeData(chidData);
    });
  }

  if (data.funList && data.funList.length) {
    childFunList = data.funList.map(function (chidData) {
      return transformServerDataForDefaultTreeData(chidData);
    });
  }

  Tdata.children = Tdata.children.concat(childMeun).concat(childFunList);
  return Tdata;
}

function trim() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!isStr(str)) return str;
  return str.replace(/^\s+|\s+$/g, '');
}

function beforeTrim() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/^\s+/g, '');
}

function trimFormValue(formDate) {
  var excludeArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var copyFormDate = _objectSpread2({}, formDate);

  Object.keys(copyFormDate).forEach(function (ele) {
    if (excludeArr.indexOf(copyFormDate[ele]) > -1) return;

    if (typeof copyFormDate[ele] === 'string') {
      copyFormDate[ele] = trim(copyFormDate[ele]);
    }
  });
  return copyFormDate;
}

function mapToObject(list, key) {
  if (!list || !list.length) return list;
  var data = {};
  list.forEach(function (ele) {
    data[ele[key]] = ele;
  });
  return data;
}

function beforeFieldsToRedux(fields, actions) {
  if (!fields) return fields;
  var backData = {};
  var isOrigin = true;
  var fAction = isArr(actions);
  Object.keys(fields).forEach(function (ele, i) {
    var data = fields[ele];

    if (!fAction) {
      if (data.name && isOrigin) {
        backData[ele] = data.value;
      } else {
        isOrigin = false;
        backData[data.name || ele] = beforeFieldsToRedux(backData[ele]);
      }
    } else {
      var toAddAttr = true;

      if (data.name) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ac = _step.value;

            if (!data[ac]) {
              toAddAttr = false;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      if (toAddAttr) {
        if (data.name && isOrigin) {
          backData[data.name || ele] = data.value;
        } else if (data.name && !isOrigin) {
          backData[ele] = data.value;
        } else {
          isOrigin = false;
          backData[data.name || ele] = beforeFieldsToRedux(data);
        }
      }
    }
  });
  return backData;
} // 添加了dirty和touched判断


function fieldsToRedux(fields) {
  return beforeFieldsToRedux(fields, ['touched', 'dirty']);
}

function assignObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function arrayFilterSame(list) {
  if (!list || !list.length) return;
  var hasMap = {};
  var backList = [];
  list.forEach(function (ele, i) {
    if (!hasMap[ele]) {
      backList.push(ele);
    }

    hasMap[ele] = ele;
  });
  return backList;
}

function arrayDelOne(list, one, changeOrigin) {
  if (!list || !list.length) return list;
  var index = list.indexOf(one);
  if (index === -1) return list;

  if (changeOrigin) {
    list.splice(index, 1);
    return list;
  }

  var copyList = _toConsumableArray(list);

  copyList.splice(index, 1);
  return copyList;
}

function arrayHasSame(list) {
  if (!list || !list.length) return false;
  var hasMap = {};
  var hasSame = false;

  for (var i = 0; i < list.length; i++) {
    var value = list[i];

    if (hasMap[value]) {
      hasSame = true;
      break;
    }

    hasMap[value] = value;
  }

  return hasSame;
} // 获取深层object指定的值


function findDataByKey(data, key) {
  if (!key) return data;
  var keys = key.split('.');
  var backData = data;

  for (var i = 0; i < keys.length; i++) {
    if (!backData[keys[i]]) break;
    backData = data[keys[i]];
  }

  return backData;
} // 分转化为元


function MinuteToyuan(value) {
  if (value === null) return value;
  return value / 100;
}

function YuanAndMinuteReverse(data, keys, backYuan) {
  if (!keys) return data;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = null;

    if (backYuan) {
      value = MinuteToyuan(data[key]);
    } else {
      value = yuanToMinute(data[key]);
    }

    if (key in data) {
      data[key] = value;
    }
  }
}

function minuteToyuanStr(minute, noText) {
  var text = noText ? '' : ' 元';
  if (!minute) return "0.00".concat(text);
  var yuanStr = "".concat(minute / 100);
  var yuans = yuanStr.split('.');
  var yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return "".concat(yuanPart, ".").concat(yuans[1] ? "".concat(yuans[1], "00").substring(0, 2) : '00').concat(text);
} // 分转元


var fen2yuan = function fen2yuan(fen) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var flag = /[￥¥]/.test("".concat(fen));
  var money = (parseInt(fen, 10) / 100).toFixed(len) - 0;
  return flag ? "\xA5".concat(money) : money;
}; // 元转分


var yuan2fen = function yuan2fen(yuan) {
  var flag = /[￥¥]/.test("".concat(yuan));
  var money = (+yuan * 100).toFixed(0) - 0;
  return flag ? "\xA5".concat(money) : money;
}; // 分转万


var fen2wan = function fen2wan(fen) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var flag = /[￥¥]/.test("".concat(fen));
  var money = (Math.floor(parseInt(fen, 10) / 1000000 * 10) / 10).toFixed(len) - 0;
  return flag ? "\xA5".concat(money) : money;
};

function getYuanStr(yuan, noText) {
  var text = noText ? '' : ' 元';
  if (!yuan) return "0.00".concat(text);
  var yuanStr = "".concat(yuan);
  var yuans = yuanStr.split('.');
  var yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return "".concat(yuanPart, ".").concat(yuans[1] ? "".concat(yuans[1], "00").substring(0, 2) : '00').concat(text);
}

function valuesToFileds(values) {
  if (!values || !isObj(values)) return values;
  var backData = {};
  Object.keys(values).forEach(function (ele) {
    backData[ele] = {
      value: values[ele]
    };
  });
  return backData;
} // 选取 object的部分属性


var pickSomeAttr = function pickSomeAttr(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!obj) return obj;
  var backObj = {};
  var deepCopyObj = assignObj(obj);
  attrs.forEach(function (ele, i) {
    backObj[ele] = deepCopyObj[ele];
  });
  return backObj;
}; // eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **


var mapSomeAttr = function mapSomeAttr(obj) {
  var mapObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extendObjFn = arguments.length > 2 ? arguments[2] : undefined;
  if (!obj) return obj;
  var backObj = null;
  var keys = Object.keys(mapObj);

  var mapObjToNew = function mapObjToNew(data, leval) {
    var backData = {};

    if (isFn(extendObjFn)) {
      backData = extendObjFn(leval, data) || {};
    }

    for (var i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      var key = keys[i];
      var mapKey = mapObj[key];
      var value = data[key];

      if (isArr(value) && key !== 'all_connect') {
        backData[mapKey] = value.map(function (ele) {
          return mapObjToNew(ele, leval + 1);
        });
      } else {
        backData[mapKey] = value;
      }
    }

    return backData;
  };

  if (isArr(obj)) {
    backObj = obj.map(function (ele) {
      return mapObjToNew(ele, 1);
    });
  } else {
    backObj = mapObjToNew(obj);
  }

  return backObj;
}; // eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **


var mapSomeAttrWithParents = function mapSomeAttrWithParents(obj) {
  var mapObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var key = arguments.length > 3 ? arguments[3] : undefined;
  if (!obj) return obj;
  var backObj = null;
  var keyMap = {};
  var keys = Object.keys(mapObj);

  var mapObjToNew = function mapObjToNew(data, leval, pdata) {
    var backData = {};
    var pickObj = pickSomeAttr(data, pMap);

    if (pdata) {
      backData.all_connect = [].concat(_toConsumableArray(pdata), [pickObj]);
    } else {
      backData.all_connect = [pickObj];
    }

    keyMap[data[key]] = backData.all_connect;

    for (var i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      var keyValue = keys[i];
      var mapKey = mapObj[keyValue];
      var value = data[keyValue];

      if (isArr(value)) {
        backData[mapKey] = value.map(function (ele) {
          return mapObjToNew(ele, leval + 1, backData.all_connect);
        });
      } else {
        backData[mapKey] = "".concat(value);
      }
    }

    return backData;
  };

  if (isArr(obj)) {
    backObj = obj.map(function (ele) {
      return mapObjToNew(ele, 1);
    });
  } else {
    backObj = mapObjToNew(obj);
  }

  return {
    backData: backObj,
    keyMap: keyMap
  };
};

var pickListSomeAttr = function pickListSomeAttr(list) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (isArr(list)) {
    return list.map(function (ele) {
      return pickSomeAttr(ele, attrs);
    });
  }
};

var pickAttr = function pickAttr(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var backData = null;

  if (isArr(obj)) {
    backData = pickListSomeAttr(obj, attrs);
  } else {
    backData = pickSomeAttr(obj, attrs);
  }

  return backData;
};

var getSearchFormProperties = function getSearchFormProperties(columns) {
  var extendFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filter = arguments.length > 2 ? arguments[2] : undefined;
  var columnsFields = columns.filter(function (ele) {
    if (filter) {
      return filter(ele.fieldProps, ele);
    }

    return ele.fieldProps;
  });
  var jsonSchemaProperties = {};
  columnsFields.forEach(function (ele) {
    var data = pickSomeAttr(ele, ['title', 'dataIndex', 'fieldProps']);

    var filed = _objectSpread2({
      dataIndex: data.dataIndex,
      name: data.dataIndex,
      title: data.title
    }, data.fieldProps);

    jsonSchemaProperties[filed.dataIndex] = filed;
  });
  return _objectSpread2({}, jsonSchemaProperties, {}, extendFields);
};

var validateFormListFields = function validateFormListFields(formMaps) {
  if (!isPlainObj(formMaps)) {
    return null;
  }

  var error = false;
  var values = [];
  Object.keys(formMaps).forEach(function (ele) {
    formMaps[ele].validateFields(function (hasErr, value) {
      if (hasErr) {
        error = true;
        values.push(_objectSpread2({}, value, {
          error: error
        }));
      } else {
        values.push(_objectSpread2({}, value));
      }
    });
  });
  return {
    error: error,
    values: values
  };
};

var extendXprops = function extendXprops(columns, name, extendData) {
  var objMap = mapToObject(columns, 'dataIndex');

  if (objMap[name]) {
    var data = objMap[name].fieldProps['x-props'];
    objMap[name].fieldProps['x-props'] = _objectSpread2({}, data, {}, extendData);
  }
};

var doneMaxDo = function doneMaxDo(num, callback) {
  var time = 0;
  var values = [];
  return function (value) {
    time += 1;
    values.push(value);

    if (time === num && callback) {
      callback(values);
    }
  };
};

var stringifySome = function stringifySome(data, keys) {
  if (!isObj(data)) return;

  if (isArr(keys)) {
    keys.forEach(function (ele) {
      if (isObj(data[ele])) {
        data[ele] = JSON.stringify(data[ele]);
      }
    });
  } else {
    Object.keys(data).forEach(function (ele) {
      var value = data[ele];

      if (isObj(value)) {
        data[ele] = JSON.stringify(value);
      }
    });
  } // eslint-disable-next-line consistent-return


  return data;
};

var dateSplit = function dateSplit(data, noTime) {
  if (!data) return data;

  var _data$split = data.split(' '),
      _data$split2 = _slicedToArray(_data$split, 2),
      da = _data$split2[0],
      time = _data$split2[1];

  return noTime ? React$1.createElement("span", null, da) : React$1.createElement("span", null, da, React$1.createElement("br", null), time);
};

var strSplit = function strSplit(str, number) {
  if (typeof str !== 'string') return str;
  var length = str.length;

  if (length > number) {
    var formatedStr = "".concat(str.slice(0, number), "...");
    return formatedStr;
  }

  return str;
};

var isImage = function isImage(value) {
  var exp = /\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i;
  return exp.test(value);
};

var listPlusByKey = function listPlusByKey(key) {
  var backList = [];
  return function () {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var backListMap = backList.length ? mapToObject(backList, key) : {};

    for (var i = 0; i < list.length; i++) {
      var data = list[i];

      if (!backListMap[data[key]]) {
        backList.push(data);
      }
    }

    return backList;
  };
};
/**
 * 对象的值进行包装: { name: 'xx'} to { name: { value: 'xx'}}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {*} key
 */


var wrapperByKey = function wrapperByKey(obj) {
  var keyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
  var result = {};
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    result[key] = _defineProperty({}, keyName, obj[key]);
  });
  return result;
};

var isUNaN = function isUNaN(value) {
  return "".concat(trim(value)) === '' || isNaN(value);
};

function convertBase64ToBlob(base64) {
  var base64Arr = base64.split(',');

  var _base64Arr = _slicedToArray(base64Arr, 2),
      content = _base64Arr[0],
      contentTwo = _base64Arr[1];

  var type = '';
  var base64String = '';

  if (contentTwo) {
    // 如果是图片base64，去掉头信息
    base64String = contentTwo;
    type = base64Arr[0].substring(base64Arr[0].indexOf(':') + 1, base64Arr[0].indexOf(';'));
  } else {
    base64String = content;
    type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  } // 将base64解码


  var bytes = atob(base64String); // var bytes = base64;

  var uInt8Array = new Uint8Array(bytes.length); // 将base64转换为ascii码

  for (var i = 0; i < bytes.length; i++) {
    uInt8Array[i] = bytes.charCodeAt(i);
  } // 生成Blob对象（文件对象）


  return new Blob([uInt8Array], {
    type: type
  });
}

var downLoadFile = function downLoadFile(base64, fileName) {
  var blob = convertBase64ToBlob(base64);
  var objectUrl = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};

var downLoadFileByBlob = function downLoadFileByBlob(blob, fileName) {
  var objectUrl = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};
/**
 * 对象的值使用函进行包装: { name: 'xx'} to { name: Form.createFormField({ value: 'xx'})}
 * 主要用于对 formFields 封装
 * @param {*} obj
 * @param {*} func
 */


var wrapperByFunc = function wrapperByFunc(obj, func) {
  var result = {};
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    result[key] = func(obj[key]);
  });
  return result;
};
/**
 * formFields 转化为普通对象: { name: { value: 'xx'}} to { name: 'xx'}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {*} key
 */


var fieldsToData = function fieldsToData(fields) {
  var result = {};
  var keys = Object.keys(fields);
  keys.forEach(function (key) {
    result[key] = fields[key].value;
  });
  return result;
}; // 分转万


var fenToWan = function fenToWan(fen) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var afterfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (!fen) return fen;
  var result = (fen / 1000000).toFixed(decimal);
  return "".concat(result).concat(afterfix);
}; // 获取文件的后缀名


var getFileTypeByName = function getFileTypeByName(name) {
  var index = name.lastIndexOf('.');
  return name.slice(index);
};

exports.MinuteToyuan = MinuteToyuan;
exports.YuanAndMinuteReverse = YuanAndMinuteReverse;
exports.arrayDelOne = arrayDelOne;
exports.arrayFilterSame = arrayFilterSame;
exports.arrayHasSame = arrayHasSame;
exports.assignObj = assignObj;
exports.beforeFieldsToRedux = beforeFieldsToRedux;
exports.beforeTrim = beforeTrim;
exports.dateSplit = dateSplit;
exports.doneMaxDo = doneMaxDo;
exports.downLoadFile = downLoadFile;
exports.downLoadFileByBlob = downLoadFileByBlob;
exports.extendXprops = extendXprops;
exports.fen2wan = fen2wan;
exports.fen2yuan = fen2yuan;
exports.fenToWan = fenToWan;
exports.fieldsToData = fieldsToData;
exports.fieldsToRedux = fieldsToRedux;
exports.fileListTourlMap = fileListTourlMap;
exports.filterEmptyAttr = filterEmptyAttr;
exports.filterRender = filterRender;
exports.findDataByKey = findDataByKey;
exports.fixedZero = fixedZero;
exports.formatWan = formatWan;
exports.getFileTypeByName = getFileTypeByName;
exports.getPageQuery = getPageQuery;
exports.getPlainNode = getPlainNode;
exports.getQueryPath = getQueryPath;
exports.getRoutes = getRoutes;
exports.getSearchFormProperties = getSearchFormProperties;
exports.getYuanStr = getYuanStr;
exports.isAntdPro = isAntdPro;
exports.isArr = isArr;
exports.isBool = isBool;
exports.isEmpty = isEmpty;
exports.isEmptyArr = isEmptyArr;
exports.isFn = isFn;
exports.isImage = isImage;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isPlainObj = isPlainObj;
exports.isRegExp = isRegExp$1;
exports.isStr = isStr;
exports.isUNaN = isUNaN;
exports.isUrl = isUrl;
exports.listPlusByKey = listPlusByKey;
exports.mapSomeAttr = mapSomeAttr;
exports.mapSomeAttrWithParents = mapSomeAttrWithParents;
exports.mapToObject = mapToObject;
exports.minuteToyuanStr = minuteToyuanStr;
exports.pickAttr = pickAttr;
exports.pickSomeAttr = pickSomeAttr;
exports.simplifyFileName = simplifyFileName;
exports.simplifyUrlMapToFileList = simplifyUrlMapToFileList;
exports.strSplit = strSplit;
exports.stringifySome = stringifySome;
exports.transformServerDataForDefaultTreeData = transformServerDataForDefaultTreeData;
exports.trim = trim;
exports.trimFormValue = trimFormValue;
exports.urlMapToFile = urlMapToFile;
exports.urlMapToFileList = urlMapToFileList;
exports.validateFormListFields = validateFormListFields;
exports.valuesToFileds = valuesToFileds;
exports.wrapperByFunc = wrapperByFunc;
exports.wrapperByKey = wrapperByKey;
exports.yuan2fen = yuan2fen;
});

unwrapExports(dist);
var dist_1 = dist.MinuteToyuan;
var dist_2 = dist.YuanAndMinuteReverse;
var dist_3 = dist.arrayDelOne;
var dist_4 = dist.arrayFilterSame;
var dist_5 = dist.arrayHasSame;
var dist_6 = dist.assignObj;
var dist_7 = dist.beforeFieldsToRedux;
var dist_8 = dist.beforeTrim;
var dist_9 = dist.dateSplit;
var dist_10 = dist.doneMaxDo;
var dist_11 = dist.downLoadFile;
var dist_12 = dist.downLoadFileByBlob;
var dist_13 = dist.extendXprops;
var dist_14 = dist.fen2wan;
var dist_15 = dist.fen2yuan;
var dist_16 = dist.fenToWan;
var dist_17 = dist.fieldsToData;
var dist_18 = dist.fieldsToRedux;
var dist_19 = dist.fileListTourlMap;
var dist_20 = dist.filterEmptyAttr;
var dist_21 = dist.filterRender;
var dist_22 = dist.findDataByKey;
var dist_23 = dist.fixedZero;
var dist_24 = dist.formatWan;
var dist_25 = dist.getFileTypeByName;
var dist_26 = dist.getPageQuery;
var dist_27 = dist.getPlainNode;
var dist_28 = dist.getQueryPath;
var dist_29 = dist.getRoutes;
var dist_30 = dist.getSearchFormProperties;
var dist_31 = dist.getYuanStr;
var dist_32 = dist.isAntdPro;
var dist_33 = dist.isArr;
var dist_34 = dist.isBool;
var dist_35 = dist.isEmpty;
var dist_36 = dist.isEmptyArr;
var dist_37 = dist.isFn;
var dist_38 = dist.isImage;
var dist_39 = dist.isNum;
var dist_40 = dist.isObj;
var dist_41 = dist.isPlainObj;
var dist_42 = dist.isRegExp;
var dist_43 = dist.isStr;
var dist_44 = dist.isUNaN;
var dist_45 = dist.isUrl;
var dist_46 = dist.listPlusByKey;
var dist_47 = dist.mapSomeAttr;
var dist_48 = dist.mapSomeAttrWithParents;
var dist_49 = dist.mapToObject;
var dist_50 = dist.minuteToyuanStr;
var dist_51 = dist.pickAttr;
var dist_52 = dist.pickSomeAttr;
var dist_53 = dist.simplifyFileName;
var dist_54 = dist.simplifyUrlMapToFileList;
var dist_55 = dist.strSplit;
var dist_56 = dist.stringifySome;
var dist_57 = dist.transformServerDataForDefaultTreeData;
var dist_58 = dist.trim;
var dist_59 = dist.trimFormValue;
var dist_60 = dist.urlMapToFile;
var dist_61 = dist.urlMapToFileList;
var dist_62 = dist.validateFormListFields;
var dist_63 = dist.valuesToFileds;
var dist_64 = dist.wrapperByFunc;
var dist_65 = dist.wrapperByKey;
var dist_66 = dist.yuan2fen;

var isZero = function isZero(val) {
  return "".concat(val) === '0';
};

var SquareMeterInfo = function SquareMeterInfo(props) {
  var info = props.info;
  return React.createElement("span", null, info || '---', "\xA0", info && '㎡');
};
var defaultKayMap = {
  bedroomNum: 'bedroomNum',
  livingRoomNum: 'livingRoomNum',
  kitchenNum: 'kitchenNum',
  bathroomNum: 'bathroomNum',
  balconyNum: 'balconyNum'
};
var HouseType = function HouseType(props) {
  var data = props.data,
      _props$map = props.map,
      map = _props$map === void 0 ? {} : _props$map;

  var keyMap = _objectSpread2({}, defaultKayMap, {}, map);

  var bedroom = data[keyMap.bedroomNum] || isZero(data[keyMap.bedroomNum]) ? data[keyMap.bedroomNum] : '--';
  var livingRoom = data[keyMap.livingRoomNum] || isZero(data[keyMap.livingRoomNum]) ? data[keyMap.livingRoomNum] : '--';
  var kitchen = data[keyMap.kitchenNum] || isZero(data[keyMap.kitchenNum]) ? data[keyMap.kitchenNum] : '--';
  var bathroom = data[keyMap.bathroomNum] || isZero(data[keyMap.bathroomNum]) ? data[keyMap.bathroomNum] : '--';
  var balconyNum = data[keyMap.balconyNum] || isZero(data[keyMap.balconyNum]) ? data[keyMap.balconyNum] : '--';
  return React.createElement("span", null, "".concat(bedroom, "\u5BA4").concat(livingRoom, "\u5385").concat(kitchen, "\u53A8").concat(bathroom, "\u536B").concat(balconyNum, "\u9633\u53F0"));
};
var defaultAreaKayMap = {
  provinceName: 'provinceName',
  cityName: 'cityName',
  districtName: 'districtName'
};
var defaultAreaKayMapTwo = {
  provinceName: 'province',
  cityName: 'city',
  districtName: 'district'
};
var AreaInfo = function AreaInfo(props) {
  var data = props.data,
      _props$map2 = props.map,
      map = _props$map2 === void 0 ? {} : _props$map2,
      address = props.address,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'keyNoName' : _props$mode;

  var keyMap = _objectSpread2({}, defaultAreaKayMap, {}, map);

  if (mode === 'keyNoName') {
    keyMap = _objectSpread2({}, defaultAreaKayMapTwo, {}, map);
  }

  var province = data[keyMap.provinceName] ? data[keyMap.provinceName] : '--';
  var city = data[keyMap.cityName] ? data[keyMap.cityName] : '--';
  var district = data[keyMap.districtName] ? data[keyMap.districtName] : ''; // 区可能没有

  return React.createElement("span", null, "".concat(province).concat(city).concat(district), "\xA0\xA0", address || null);
};
var UpLoadInfo = function UpLoadInfo(props) {
  var noHref = props.noHref,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  var data = props.data;
  if (!data || !data.length) return null;
  if (typeof data === 'string') data = [data];
  return React.createElement(Fragment, null, data.map(function (ele, i) {
    var extendStyle = {};

    if (i) {
      extendStyle.marginLeft = '15px';
    }

    extendStyle = _objectSpread2({}, extendStyle, {}, style);

    if (noHref) {
      extendStyle.target = '_blank';
    }

    return React.createElement("a", {
      href: noHref ? 'javascript:void(0);' : ele,
      key: -i,
      rel: "noopener noreferrer"
    }, React.createElement("img", {
      src: ele,
      alt: "pic",
      width: "86px",
      style: _objectSpread2({}, extendStyle)
    }));
  }));
};
var VideoList = function VideoList(props) {
  var _props$style2 = props.style,
      style = _props$style2 === void 0 ? {} : _props$style2;
  var list = props.list;
  if (!list || !list.length) return null;
  if (typeof list === 'string') list = [list];
  return React.createElement(Fragment, null, list.map(function (ele, i) {
    var extendStyle = {
      width: 160,
      height: 120,
      style: {}
    };

    if (i) {
      extendStyle.style.marginLeft = '15px';
    }

    extendStyle = _objectSpread2({}, extendStyle, {}, style);
    return React.createElement("video", {
      key: ele,
      style: _objectSpread2({
        display: 'inline-block'
      }, extendStyle),
      src: ele,
      controls: "controls"
    });
  }));
};
var MainPic = function MainPic(props) {
  var _props$style3 = props.style,
      style = _props$style3 === void 0 ? {} : _props$style3,
      url = props.url,
      isPrivate = props.isPrivate;
  var _style$width = style.width,
      width = _style$width === void 0 ? 100 : _style$width,
      _style$height = style.height,
      height = _style$height === void 0 ? 86 : _style$height;
  var w = "".concat(width).replace(/px/, '');
  var h = "".concat(height).replace(/px/, '');

  if (url && isPrivate) {
    return React.createElement("a", {
      href: url,
      rel: "noopener noreferrer",
      target: "_blank"
    }, React.createElement("img", {
      src: "".concat(url),
      alt: "pic",
      height: "100px",
      width: "86px",
      style: _objectSpread2({}, style)
    }));
  }

  if (url) {
    return React.createElement("a", {
      href: url,
      rel: "noopener noreferrer",
      target: "_blank"
    }, React.createElement("img", {
      src: "".concat(url, "?x-oss-process=image/resize,m_fixed,h_").concat(h, ",w_").concat(w),
      alt: "pic",
      height: "100px",
      width: "86px",
      style: _objectSpread2({}, style)
    }));
  }

  return React.createElement("a", {
    href: "javascript:void(0);",
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("img", {
    src: "https://asman-img.oss-cn-hangzhou.aliyuncs.com/noPic_0e7bffac7958f603a8b37fe3cda07499.png",
    alt: "pic",
    height: "100px",
    width: "86px",
    style: _objectSpread2({}, style)
  }));
};
var UploadPreview = function UploadPreview(props) {
  var value = props.value,
      height = props.height; // eslint-disable-next-line prefer-const

  var _props$list = props.list,
      list = _props$list === void 0 ? [] : _props$list,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      _props$style4 = props.style,
      style = _props$style4 === void 0 ? {} : _props$style4,
      _props$innerStyle = props.innerStyle,
      innerStyle = _props$innerStyle === void 0 ? {} : _props$innerStyle,
      rest = _objectWithoutProperties(props, ["list", "params", "style", "innerStyle"]);

  if (!list || !list.length) {
    list = value;
  }

  if (!list) return null;

  var showImagePreview = function showImagePreview() {
    // eslint-disable-next-line no-underscore-dangle
    window.g_app._store.dispatch({
      type: 'global/showImagePreviewVisiable',
      payload: {
        list: list,
        params: params
      }
    });
  };

  innerStyle = height == null ? _objectSpread2({}, innerStyle) : _objectSpread2({}, innerStyle, {
    height: height
  });
  return React.createElement("div", _extends({}, rest, {
    style: _objectSpread2({}, style),
    className: "poi tc",
    onClick: function onClick() {
      showImagePreview();
    }
  }), params.type === 'video' ? React.createElement(VideoList, {
    list: list[0],
    style: _objectSpread2({}, innerStyle)
  }) : React.createElement(UpLoadInfo, {
    style: _objectSpread2({}, innerStyle),
    noHref: true,
    data: list[0]
  }), React.createElement("div", {
    className: "bc tc"
  }, "\u5171", list.length, params.type === 'video' ? '个视频' : '张图片'));
};
var UrlLink = function UrlLink(props) {
  var list = props.list;
  if (!list) return;

  if (dist_43(list)) {
    list = [list];
  } // eslint-disable-next-line consistent-return


  return list.map(function (ele) {
    var url = dist_53(ele);
    return React.createElement("div", null, React.createElement("a", {
      href: ele,
      rel: "noopener noreferrer",
      target: "_blank"
    }, url));
  });
};
var BlankLink = function BlankLink(props) {
  var href = props.href,
      title = props.title;
  return React.createElement("a", {
    href: href,
    rel: "noopener noreferrer",
    target: "_blank"
  }, title || href);
};
var TitleInfo = function TitleInfo(props) {
  var len = props.len,
      info = props.info,
      rest = _objectWithoutProperties(props, ["len", "info"]);

  var tit = info;

  if (info.length && len && info.length >= len) {
    tit = "".concat(tit.substring(0, len), "...");
  }

  return React.createElement("span", _extends({}, rest, {
    title: info
  }), tit);
};
var BuleWrapper = function BuleWrapper(props) {
  var info = props.info,
      text = props.text,
      _props$color = props.color,
      color = _props$color === void 0 ? '#0066FF' : _props$color;
  if (!info) return null;
  return React.createElement("span", null, React.createElement("span", {
    style: {
      color: color
    }
  }, info), text);
};
var Bule = function Bule(props) {
  var info = props.info,
      _props$color2 = props.color,
      color = _props$color2 === void 0 ? '#0066FF' : _props$color2;
  if (!info) return null;
  return React.createElement("span", {
    style: {
      color: color
    }
  }, info);
};
var Red = function Red(props) {
  var info = props.info,
      _props$color3 = props.color,
      color = _props$color3 === void 0 ? '#FF0000' : _props$color3;
  if (!info) return null;
  return React.createElement("span", {
    style: {
      color: color
    }
  }, info);
};
var getColorWrapper = function getColorWrapper(props) {
  var info = props.info;
  return info ? React.createElement(BuleWrapper, props) : null;
};
var ShowMoreInfo = function ShowMoreInfo(props) {
  var info = props.info,
      len = props.len;
  var initValue = '';
  var needSubstring = false;

  if (info && info.length > len) {
    initValue = "".concat(info.substring(0, len), "...");
    needSubstring = true;
  } else {
    initValue = info;
  }

  var _useState = useState(initValue),
      _useState2 = _slicedToArray(_useState, 2),
      showInfo = _useState2[0],
      setShowInfo = _useState2[1];

  var isShowAll = function isShowAll() {
    return showInfo === info;
  };

  var showMore = function showMore() {
    setShowInfo(isShowAll() ? initValue : info);
  };

  return React.createElement("span", null, showInfo, " ", needSubstring ? React.createElement("span", {
    className: "likeA",
    onClick: function onClick() {
      return showMore();
    }
  }, isShowAll() ? '收起' : '更多') : null, " ");
};
/**
 * xx幢xxx单元xxxx
 * @param {*} props 
 */

var HouseDesc = function HouseDesc(props) {
  var buildingNo = props.buildingNo,
      unitNo = props.unitNo,
      roomNo = props.roomNo;
  return React.createElement("span", null, "".concat(buildingNo || '--', "\u5E62").concat(unitNo || '--', "\u5355\u5143").concat(roomNo || '--', "\u5BA4"));
};
var SomeRed = function SomeRed(props) {
  var info = props.info,
      keyWord = props.keyWord;
  if (!info || !keyWord) return info;
  var trimkey = dist_58(keyWord);
  var subIndex = info.indexOf(trimkey);
  if (subIndex === -1) return info;
  var start = info.substring(0, subIndex);
  var end = info.substring(subIndex + trimkey.length);
  return React.createElement("span", null, start, React.createElement("span", {
    style: {
      color: 'red'
    }
  }, keyWord), end);
};
var LRInfo = function LRInfo(props) {
  var title = props.title,
      info = props.info,
      width = props.width,
      _props$hasColon = props.hasColon,
      hasColon = _props$hasColon === void 0 ? true : _props$hasColon,
      onClick = props.onClick,
      len = props.len;
  var _props$titleStyle = props.titleStyle,
      titleStyle = _props$titleStyle === void 0 ? {} : _props$titleStyle;

  if (len) {
    titleStyle = _objectSpread2({}, titleStyle, {
      width: "".concat(30 + 12 * len, "px"),
      textAlign: 'right'
    });
  }

  var titleProps = {
    style: width ? _objectSpread2({}, titleStyle, {
      width: width,
      textAlign: 'right'
    }) : _objectSpread2({}, titleStyle)
  };
  var infoProps = {};

  if (dist_37(onClick)) {
    infoProps = {
      onClick: onClick
    };
  }

  if (!title) {
    return React.createElement("div", infoProps, info);
  }

  return React.createElement("div", {
    className: "df"
  }, React.createElement("div", _extends({
    className: "g0"
  }, titleProps), title || ' -- ', "\xA0", hasColon ? ':' : null, " \xA0"), React.createElement("div", _extends({
    className: "df flex1"
  }, infoProps), info !== 0 ? info || '---' : info));
};
var BuildingArea = function BuildingArea(props) {
  var data = props.data;

  var _ref = data || {},
      buildingName = _ref.buildingName,
      houseCode = _ref.houseCode,
      buildingNo = _ref.buildingNo,
      unitNo = _ref.unitNo,
      roomNo = _ref.roomNo;

  return React.createElement("span", null, "".concat(buildingName || '--').concat(houseCode ? "".concat(houseCode, "\u6237\u578B") : ''), " ", React.createElement("br", null), " ", buildingNo ? "".concat(buildingNo || '--', "\u680B").concat(unitNo || '--', "\u5355\u5143").concat(roomNo || '--', "\u5BA4") : '');
};

export default LRInfo;
export { AreaInfo, BlankLink, BuildingArea, Bule, BuleWrapper, HouseDesc, HouseType, LRInfo, MainPic, Red, ShowMoreInfo, SomeRed, SquareMeterInfo, TitleInfo, UpLoadInfo, UploadPreview, UrlLink, VideoList, getColorWrapper };
