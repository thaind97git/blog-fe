'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
/**
 * File name: src/index.ts
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2021-03-10 17:07:50
 */
var path = require('path');
var glob = require('glob');
var babelJest = require('babel-jest');
var createTransformer = function (options) {
  var transformer = babelJest.createTransformer(options);
  var process = transformer.process;
  transformer.process = function (sourceText, sourcePath) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var regexp = /^\s*import\s+(?:[^"'`{}]+\s)?(["'])(.+)\1/gm;
    var patterns = [];
    var match = regexp.exec(sourceText);
    while (match !== null) {
      var fileImport = match[2];
      var lineReplace = match[0];
      if (glob.hasMagic(fileImport)) {
        patterns.push({
          fileImport: fileImport,
          lineReplace: lineReplace,
        });
      }
      match = regexp.exec(sourceText);
    }
    if (patterns.length > 0) {
      var cwd = path.dirname(sourcePath);
      var importNameRegex = /import ([a-zA-Z0-9]{1,}) from /;
      var _loop = function (fileImport, lineReplace) {
        var modNames = [];
        var matchModuleName = importNameRegex.exec(lineReplace);
        var files = glob
          .sync(fileImport, { cwd: cwd, dot: true })
          .map(function (mod, index) {
            if (!matchModuleName) {
              return "import '" + mod + "'";
            }
            var moduleName = '' + matchModuleName[1] + index;
            modNames.push(moduleName);
            return 'import * as ' + moduleName + " from '" + mod + "'";
          });
        if (matchModuleName && modNames.length) {
          files.push(
            'const ' +
              matchModuleName[1] +
              ' = [ ' +
              modNames.join(', ') +
              ' ]',
          );
        }
        sourceText = sourceText.replace(lineReplace, files.join('\n'));
      };
      for (var _a = 0, _patterns = patterns; _a < _patterns.length; _a++) {
        var _b = _patterns[_a],
          _fileImport = _b.fileImport,
          _lineReplace = _b.lineReplace;
        _loop(_fileImport, _lineReplace);
      }
    }
    return process.apply(void 0, __spreadArray([sourceText, sourcePath], args));
  };
  return transformer;
};
var transformer = __assign(__assign({}, createTransformer()), {
  createTransformer: createTransformer,
});
module.exports = transformer;
