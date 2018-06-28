// import { notifyOn } from '../middleware/twilioNotifications.js';

'use strict';

var app = app || {};

// const ENV = {};

// ENV.isProduction = window.location.protocol.includes('the-spot-sea');
// console.log('ENV.isProduction', ENV.isProduction);

// ENV.productionApiUrl = 'https://the-spot-sea.herokuapp.com';
// ENV.developmentApiUrl = 'http://localhost:3000';
// ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {
  var SearchObj = {};

  SearchObj.create = function(key) {

    // let formArray = [];

    $.get(`/api/ivertinimas`, {
      title: key.title,
      artBody: key.artBody,
      author: key.author})
      .then(console.log('teheeeennnnn'))
      // .then(formArray.push('key', key))
      .then(data => {
        
        console.log('', data);})
      .catch(err => console.error(err));
    // localStorage.setItem('key', JSON.stringify(formArray));

  };

  SearchObj.submit = function() {
    let key = {
      title : $('#article-title').val(),
      artBody : $('#article-body').val(),
      author : $('#article-author').val(),
     
    };
    console.log('submitted !!!!', key);
    SearchObj.create(key);
    $('#article-title').val(''),
    $('#artBody').val(''),
    $('#article-author').val('');

  };

  const form = JSON.parse(localStorage.getItem('key'));

  SearchObj.localHis = function() {
    if (localStorage.getItem('key') === null) {
      return;
    }
    $('#budget').val(form[1].budget);
    $('#location').val(form[1].location);
  };


  module.SearchObj = SearchObj;




})(app);
