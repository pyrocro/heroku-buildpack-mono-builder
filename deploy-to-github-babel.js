var version = process.argv[2];
var monotar = process.argv[3];
var token = process.env.GITHUB_TOKEN;

var api = require('github');
var github = new api({
    version: '3.0.0'
});
var owner = 'AdamBurgess';
github.authenticate({
    type: 'basic',
    username: owner,
    password: token
});


var repo = 'heroku-buildpack-mono';

github.releases.createRelease({
    owner, repo,
    tag_name: version,
    name: version,
    body: `building mono @ ${version}`,
    draft: false,
}, function(err, res) {
    if(err) throw err;
    github.releases.uploadAsset({
        owner, repo,
        id: res.id,
        name: `mono-${version}.tar.gz`,
        filePath: monotar
    }, function(err, res) {
        if(err) throw err;
    });
});