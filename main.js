var fs = require('fs');

// Read and eval library
filedata = fs.readFileSync(__dirname + '/lib/wikiwym/lib/GoogleCodeWikiParser.js','utf8');
eval(filedata);

exports.parse = GoogleCodeWikiParser.parse;
exports.GoogleCodeWikiParser = GoogleCodeWikiParser;
