// mostly borrowed from
// https://github.com/strongloop/loopback-component-passport/blob/master/lib/index.js
var loopback = require('loopback');
var DataModel = loopback.PersistedModel || loopback.DataModel;

function loadModel(jsonFile) {
  var modelDefinition = require(jsonFile);
  return DataModel.extend(modelDefinition.name, modelDefinition.properties);
}

var InstallationModel = loadModel('./installation.json');
var NotificationModel = loadModel('./notification.json');

/**
 * Export two model classes as properties
 */
exports.Installation = require('./installation')(InstallationModel);
exports.Notification = require('./notification')(NotificationModel);

exports.Installation.autoAttach = 'db';
exports.Notification.autoAttach = 'db';
