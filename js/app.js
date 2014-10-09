$(function() {

  var myUsername = "javier";

  var moments = [
    "with the help of large amounts of coffee",
    "inconspicuously",
    "in a moment of total sadness",
    "without paying much attention"
  ];

  var randomMoment = moments[Math.round(Math.random()*moments.length)];
  $(".random-update-moment-js").text(randomMoment)

  Retina.init();

  $(".listening-js").snitch({
    username: "javierarce",
    api_key: "52baf5483029010e0e7ece53ac76449e" 
  }).on("listening", function(e, track) {
    $(".listening-js").removeClass("hidden");
  });


  $.ajax({ url: "http://tilde.club/~delfuego/tilde.24h.json", success: function(data) {

    var modtime;

    $.each(data.pagelist, function(i, user) { 
      if (user.username === myUsername) { 
        modtime = user.modtime; 
      }
    });

    if (modtime) {
      var date = new Date(modtime);
      $(".updated-at-js").html("on " + date.toString());
    }

  }});

  $.ajax({ url: "http://tilde.club/~gabriel/who.json", success: function(data) {
    var online = false;

    $.each(data.online, function(i, username) { 
      if (username === myUsername) { 
        online = true; 
      }
    });

    if (online) $(".online-status-js").removeClass("hidden");

  }});

});

