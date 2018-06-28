import { sendSms } from '../twilioClient';
// var fs = require('fs');
import { forEach } from '../config/administrators.json';

function formatMessage(messageToReport) {
  console.log('sent maybe?  ', messageToReport);
  return '[This is a test] ALERT! It appears the server is'  
  + messageToReport +
    '. Go to: ' +
    'for more details.';  
}

export function notifyOn(appSend, request, response, next) {
  forEach(function(admin) {
    var messageToSend = formatMessage(appSend.message);
    sendSms(admin.phoneNumber, messageToSend);
  });
  next(appSend);
}
