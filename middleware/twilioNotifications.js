import { sendSms } from '../twilioClient';
// var fs = require('fs');
import { forEach } from '../config/administrators.json';

function formatMessage(messageToReport) {
  return '[This is a test] ALERT! It appears the server is' +
    'having issues. Exception: ' + messageToReport +
    '. Go to: http://newrelic.com ' +
    'for more details.';
}

export function notifyOn(appSend, request, response, next) {
  forEach(function(admin) {
    var messageToSend = formatMessage(appSend.message);
    sendSms(admin.phoneNumber, messageToSend);
  });
  next(appSend);
}
