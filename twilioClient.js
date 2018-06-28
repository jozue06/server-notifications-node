import { accountSid, authToken, sendingNumber } from './config';

export function sendSms(to, message) {
  var client = require('twilio')(accountSid, authToken);
  // console.log(client.api.messages.create())
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: sendingNumber,
    }).then(function(data) {
      console.log('Administrator notified');
    }).catch(function(err) {
      console.error('Could not notify administrator');
      console.error(err);
    });
}
