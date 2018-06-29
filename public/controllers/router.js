// Map routes to controller functions
(router) => {
  router.get('/error', function(req, res) {

    let SendObj = {};

    SendObj.create = function(key) {

      router.get(`/api/ivertinimas`, {
        title: key.title,
        artBody: key.artBody,
        author: key.author})
        .then(console.log('teheeeennnnn'))
        .then(data => {
          console.log('lakjdslfkj', data);})
        .catch(err => console.error(err));
  
    };
  
    SendObj.submit = function() {
      let key = {
        title : $('#article-title').val(),
        artBody : $('#article-body').val(),
        author : $('#article-author').val(),
       
      };
      console.log('submitted !!!!', key);
      SendObj.create(key);
      $('#article-title').val(''),
      $('#article-body').val(''),
      $('#article-author').val('');
  
    };
  
    throw new Error('Derp. An error occurred.');
  });
}
