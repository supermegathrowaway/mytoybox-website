$(document).ready(function() {
    $('#games').click(function(){
      $.ajax({
        url: 'games.html', // Replace with your desired URL for loading next part of site
        type: "GET",
        dataType: "html"
      }).done(function(data) {
        $('#main-container').html(data);
      });
    });
  });  
  $(document).ready(function() {
    $('#about').click(function(){
      $.ajax({
        url: 'about.html', // Replace with your desired URL for loading next part of site
        type: "GET",
        dataType: "html"
      }).done(function(data) {
        $('#main-container').html(data);
      });
    });
  });  
  $(document).ready(function() {
    $('#home').click(function(){
      $.ajax({
        url: 'home.html', // Replace with your desired URL for loading next part of site
        type: "GET",
        dataType: "html"
      }).done(function(data) {
        $('#main-container').html(data);
      });
    });
  });  