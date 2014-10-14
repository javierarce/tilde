$(function() {

  var $disparition = $(".disparition-js");

  if ($disparition.length == 1) {
    var letters = [];
    _.each($disparition.text(), function(l) {
      if (l == " ") {
        letters.push(" ");
      } else {
        letters.push("<a href='#' data-letter='" + l + "'>" + l + "</a>");
      }
    });

    $disparition.html(letters.join(""));
  }

  $(document).on("click", "a[data-letter]", function(e) {

    e.preventDefault();
    e.stopPropagation();

    var letter = $(e.target).attr("data-letter").toLowerCase();
    $("body").highlight( letter, { element: 'span', className: 'd' });
    $("span.d").animate({ opacity: 0 }, 250)

    //if ($disparition.text().trim().length == 0) $disparition.html("<em>Fin</em>");

  })

  $(".nostalgia-slider-js").on("input", function() {
    var level = $(this).val();
    if (level >= 99)      msg = "you are just going to die";
    else if (level >= 95) msg = "what are you doing?";
    else if (level >= 90) msg = "watch out";
    else if (level >= 80) msg = "you don't want to do that";
    else if (level >= 75) msg = "haha… wait!";
    else if (level >= 70) msg = "haha";
    else if (level <= 5)  msg = "you insensible machine";
    else if (level <= 10) msg = "c'mon!";
    else if (level <= 20) msg = "what?";
    else if (level <= 30) msg = "mmm";
    else msg = "";

    if (msg) {
      msg = " <small>(" + msg + ")</small>";
      $(".nostalgia-level-msg-js").html("<strong>" + level + "<small>%</small></strong>" + msg);
    } else {
      $(".nostalgia-level-msg-js").html("<strong>" + level + "<small>%</small></strong>");
    }

  });

  var myUsername = "javier";

  var moments = [
    "with the help of large amounts of coffee",
    "inconspicuously",
    "in a moment of total sadness",
    "when nobody was looking",
    "in an act of utter desperation",
    "without paying much attention"
  ];

  var randomMoment = moments[Math.round(Math.random()*moments.length)];
  $(".random-update-moment-js").text(randomMoment)

  Retina.init();

  $(".listening-js").snitch({
    username: "javierarce",
    api_key: "52baf5483029010e0e7ece53ac76449e" 
  }).on("listening", function(e, track) {
    $(".listening-js").removeClass("u--hidden");
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

    if (online) $(".online-status-js").removeClass("u--hidden");

  }});

});

