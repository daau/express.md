const fs = require('fs');
const marked = require('marked');

var expmd = function(filePath, options, callback){
    fs.readFile(filePath, function (err, content){
        if (err) return callback(err)
            var rendered = marked(content.toString());
            return callback(null, rendered)
    });
}

module.exports = expmd