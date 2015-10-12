// LICENSE : MIT
"use strict";
var eaw = require('eastasianwidth');
function stringWidth(config) {
    var ambiguousCharWidth = (config && config.ambiguousEastAsianCharWidth) || 1;
    return function widthOf(str) {
        var i, code, width = 0;
        for (i = 0; i < str.length; i += 1) {
            code = eaw.eastAsianWidth(str.charAt(i));
            switch (code) {
                case 'F':
                case 'W':
                    width += 2;
                    break;
                case 'H':
                case 'Na':
                case 'N':
                    width += 1;
                    break;
                case 'A':
                    width += ambiguousCharWidth;
                    break;
            }
        }
        return width;
    };
}
module.exports = stringWidth;