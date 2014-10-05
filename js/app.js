$(function() {

  $(".listening-js").snitch({
    username: "javierarce",
    api_key: "52baf5483029010e0e7ece53ac76449e" 
  }).on("listening", function(e, track) {
    $("listening-js").removeClass("hidden");
  });

  var myUsername = "javier";

  $.ajax({ url: "http://tilde.club/~gabriel/who.json", success: function(data) {
    var online = false;

    $.each(data.online, function(i, username) { 
      if (username === myUsername) { 
        online = true; }
    });

    if (online) $(".online-status-js").removeClass("hidden");

  }});

});

