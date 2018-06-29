'use strict';
import notifyOn from '../middleware/twilioNotifications.js';
import express from 'express';
const router = express.Router();
// import myApp from './model.js';

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write('hello');
  res.end();
});

router.get('/api/ivertinimas', (req, res) => {
  console.log('huh???');
  // res.sendFile('index.html', {root: './public'});
  // myApp.SearchObj.submit();
 
  res.send(notifyOn(req.body));
  res.end();
}
  
);


export default router;
