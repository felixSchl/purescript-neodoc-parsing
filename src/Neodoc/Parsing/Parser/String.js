/* global exports */
"use strict";

exports.getFirst = function(s) {
  return s.slice(0, 1);
}

exports.getRest = function(s) {
  return s.slice(1);
}
