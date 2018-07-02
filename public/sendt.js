'use strict';


$('#text-send').on('submit', function(e) {
  let author = $('#budget').val();
  let article = $('#location').val();
  let tag = $('#tag').val();
  let sendData = {author,article,tag};
  console.log('data to send?? 1 ', sendData);
  e.preventDefault();
  $.post('http://localhost:3300/api/ivertinimas',(sendData, res) => {
    
    console.log('consoleloggglkajsdlkfjlkajsdf 2 ', sendData );
    // $.send(sendData);
    
  });
  author = $(this).find('[name=budget]').val('');
  article = $(this).find('[name=location]').val('');
  tag = $(this).find('[name=tag]').val('');

});
