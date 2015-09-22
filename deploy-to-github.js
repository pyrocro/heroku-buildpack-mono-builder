require('babel/register')({
    optional: ['es7.asyncFunctions'],
    retainLines: true
});
require('./deploy-to-github-babel')