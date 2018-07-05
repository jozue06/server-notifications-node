// let twilioClient = require('../twilioClient');
// // let fs = require('fs');
// let admins = require('../config/administrators.json');

// function formatMessage(message) {
//   return '  message;
// }

// exports.notifyOnError = function(appError, request, response, next) {
//   admins.forEach(function(admin) {
//     let messageToSend = formatMessage(appError.message);
//     twilioClient.sendSms(admin.phoneNumber, messageToSend);
//   });
//   next(appError);
// };
