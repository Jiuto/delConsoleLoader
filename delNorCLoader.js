var loaderUtils = require('loader-utils');

module.exports = function(source) {
    console.log("start process code...");
    source = source.replace(/console\.(log|dir|info)\(.*\);?/g, '');

    var options = loaderUtils.getOptions(this) || {};
    if(options.deleteNote) {
        // 匹配出所有的字符串和行块注释
        var reg = /('([\\\']|.)*')|("([\\\"]|.)*")|(\/\*[\s\S]*?\*\/)|(\/\/(.)*.*?(\r|\n))/g;
        // 得到块生成的每个文件资源的源码
        source = (source+"\r").replace(reg,function(word) {
            // 忽略字符串并替换行块注释
            return /^\/\//.test(word)||/^\/\*/.test(word)?"":word;
        });
    }
    if(options.deleteConsole) {
        source = source.replace(/console\.(log|dir|info)\(.*\);?/g,'');
    }
 
    return source;
};