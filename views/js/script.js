SC.initialize({
  client_id: '17089d3c7d05cb2cfdffe46c2e486ff0',
  redirect_uri: 'http://jb-blasta-me-staging.herokuapp.com/callback.html'
});

$(document).ready(function() {
  $('#username').html("fhgf");
  $('a.connect').click(function(e) {
    //e.preventDefault();
    SC.connect(function() {
        $('#username').append("bbbb");
        SC.get('/me',function(me){
                $('#username').html("Du bisch der "+me.username);
                alert('Hello' + me.username);
            });
        });
    });
 });