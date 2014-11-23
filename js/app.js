var myUsername = "javier";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setTildeFavicon() {
  var randomString = "?v=" + Math.round(Math.random() * 10000000);

  var link  = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel  = 'shortcut icon';
  link.href = 'http://tilde.club/~javier/img/favicons/tilde.ico' + randomString;

  $("head").find("[rel='shortcut icon']").remove();
  document.getElementsByTagName('head')[0].appendChild(link);
  $(document).prop('title', 'Is the ~ Who Is Tall Happy?');
}

function setGmailFavicon() {

  var c     = Math.round(Math.random()*12);
  var cT    = c;
  var link  = document.createElement('link');
  var randomString = "?v=" + Math.round(Math.random() * 10000000);
  link.type = 'image/x-icon';
  link.rel  = 'shortcut icon';

  if (c === 11) {
    c = 50;
    cT = "50+";
    link.href = 'http://tilde.club/~javier/img/favicons/gmail_' + c + '.ico' + randomString;
  } else if (c === 12) {
    c = 100;
    cT = "100+";
    link.href = 'img/favicons/gmail_' + c + '.ico' + randomString;
  } else {
    link.href = 'img/favicons/gmail_' + c + '.ico' + randomString;
  }

  $("head").find("[rel='shortcut icon']").remove();
  document.getElementsByTagName('head')[0].appendChild(link);

  if (c === 0) {
    $(document).prop('title', 'Inbox - javier@tilde.club');
  } else if (c > 0 && c < 3) {
    $(document).prop('title', 'I feel ignored - javier@tilde.club');
  } else {
    $(document).prop('title', 'Inbox ('+cT+') - javier@tilde.club');
  }
}

function initSubliminal() {

  function handleVisibilityChange() {

    var subliminalMessages = ["Pay more attention", "Do not blink", "Hello, I must be going", "You blinked, you missed it", "I'm not here", "No incoming calls accepted"];

    if (document[hidden]) {
      $("body").addClass("hidden");
      $(".subliminal-message-js").removeClass("u--hidden");

      setGmailFavicon();

    } else {

      setTildeFavicon();

      var randomSubliminalMessage = subliminalMessages[Math.round(Math.random()*(subliminalMessages.length - 1))];
      $(".subliminal-message-js").html(randomSubliminalMessage);

      setTimeout(function() {
        $("body").removeClass("hidden");
        $(".subliminal-message-js").addClass("u--hidden");
      }, 250);
    }
  }

  var hidden, visibilityChange; 
  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  document.addEventListener(visibilityChange, handleVisibilityChange, false);


}

function initQR() {
  $qr = $(".qr-js");

  var messages = [
    "http://en.wikipedia.org/wiki/Steganography",
    "http://en.wikipedia.org/wiki/Canary_trap",
    "http://en.wikipedia.org/wiki/Japanese_cryptology_from_the_1500s_to_Meiji",
    "http://en.wikipedia.org/wiki/Nihilist_cipher"
  ];

  var text = messages[Math.round(Math.random() * (messages.length - 1))];

  var src = "http://chart.apis.google.com/chart?cht=qr&chs=200x200&chl=" + text + "&chld=H|0";

  $qr.find("img").attr("src", src);


}

function initAmIOnline() {

  $.ajax({ url: "http://tilde.club/~gabriel/who.json", success: function(data) {
    var online = false;

    $.each(data.online, function(i, username) { 
      if (username === myUsername) { 
        online = true; 
      }
    });

    if (online) $(".online-status-js").removeClass("u--hidden");

  }});


}

function initUpdatedAt() {

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

}

function initMusicSnitch() {

  $(".listening-js").snitch({
    username: "javierarce",
    api_key: "52baf5483029010e0e7ece53ac76449e" 
  }).on("listening", function(e, track) {
    $(".listening-js").removeClass("u--hidden");
  });


}

function initMoments() {

  var moments = [
    "with the help of large amounts of coffee",
    "inconspicuously",
    "in a moment of total sadness",
    "when nobody was looking",
    "because it was the right thing to do",
    "with the assumption that Nature is not grounded in anything beyond herself",
    "in an act of utter desperation",
    "without paying much attention"
  ];

  var randomMoment = moments[Math.round(Math.random()* (moments.length - 1))];
  $(".random-update-moment-js").text(randomMoment);

}

function initNostalgia() {

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

}

function initDisparition() {

  var $disparition = $(".disparition-js");
  var disparitionLetters = ["t", "h", "e", "v", "o", "i", "d"];

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

  var hideLetter = function(e) {

    e.preventDefault();
    e.stopPropagation();

    var letter = $(e.target).attr("data-letter");
    if (!letter) return;

    letter = letter.toLowerCase();

    $(this).attr("data-letter", "");

    var index = disparitionLetters.indexOf(letter);

    if (index > -1) {
      disparitionLetters.splice(index, 1);
    }

    $("body").highlight(letter, { element: 'span', className:'da' });

    $('span.da').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass(".da").addClass("ds");
    });

    if (disparitionLetters.length === 0) {
      $disparition.fadeOut("250", function() {
        $disparition.html("<em>F*n</em>");
        $disparition.fadeIn(250);
      });
    }

  };

  $(document).on("click", "a[data-letter]", hideLetter);

}

function initWalk() {

  var $walk = $(".walk-js");

  $.ajax({ 
    url: "http://monitor.javierarce.com/api/today",
    jsonp: "callback",
    dataType: "jsonp",
    success: function(response) {

      if (response) {
        var data  = response[0];
        var steps = numberWithCommas(data.steps);

        if (data.steps > 0) {
          $walk.html("So far today I've walked <strong>" + steps + "</strong> steps, but I haven't gotten anywhere.");
        } else {
          $walk.html("I haven't moved yet.");
        }

      }

    }
  });

}

function initCheckList() {

  var $checklist = $(".checklist-js");

  $checklist.find("li").on("click", function(e) {
    if ($(e.target).attr("type") !== "checkbox") {
      var $checkbox = $(this).find("input[type='checkbox']");
      $checkbox.attr("checked", !$checkbox.attr("checked"));
    }
    $(this).toggleClass("u--line-through");

  });

}

function initType() {

  $(".js-type").typed({
    strings: ["If you are^300 reading this,^700 the mirrors are working^700."],
    typeSpeed: 20
  });

}

$(function() {

  initSubliminal();
  initCheckList();
  initWalk();
  initDisparition();
  initNostalgia();
  initMoments();
  initMusicSnitch();
  initUpdatedAt();
  initAmIOnline();
  initQR();
  initType();

  Retina.init();

});

