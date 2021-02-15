var loaderUtils = require('loader-utils');

module.exports = function(source) {
    var options = loaderUtils.getOptions(this) || {};
    
    if(options.deleteConsole) {
        source = source.replace(/console\.(log|dir|info)\(.*?\);?/g, '');
    }
 
    return source;
};