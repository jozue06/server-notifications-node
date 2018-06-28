'use strict';

var app = app || {};


(function(module) {
  var SearchObj = {};

  SearchObj.create = function(key) {

    router.get(`/api/ivertinimas`, {
      title: key.title,
      artBody: key.artBody,
      author: key.author})
      .then(console.log('teheeeennnnn'))
      .then(data => {
        console.log('lakjdslfkj', data);})
      .catch(err => console.error(err));

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
    $('#article-body').val(''),
    $('#article-author').val('');

  };


  module.SearchObj = SearchObj;




})(app);
