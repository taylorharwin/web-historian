var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!



exports.handleRequest = function (req, res) {
  if(req.method === 'POST'){
    archive.readListOfUrls();
  }
  res.end(archive.paths.list);
};
