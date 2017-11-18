
var mh = require('../..');
var fs = require('fs');
var lazy = require('lazy');

args = [ 'word.list.txt', 'sigword.list.txt' ];
tree = mh.tree();

// http://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js

args.forEach(function (filename) {
    new lazy(fs.createReadStream(filename))
     .lines
     .forEach(function(line){
        var word = line.toString().trim();
        if (!(word[0] >= 'a' && word[0] <= 'z'))
            return;
        var p = word.indexOf("'");
        if (p >= 0)
            word = word.substring(0, p);

        tree.add(word);

        console.log(word);
     }
    ).join(function() {
        var text = JSON.stringify(tree.words());
        fs.writeFileSync('words.json', text);
    });
});

