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

    var sentences = ["I feel ignored", "Fwd: They are not humans!", "Re: we found the diamonds", ":(", "Are you there?", "Me me me me"];
    var randomSentence = sentences[Math.round(Math.random()*(sentences.length - 1))];

    $(document).prop('title', randomSentence + " - javier@tilde.club");
  } else {
    $(document).prop('title', 'Inbox ('+cT+') - javier@tilde.club');
  }
}

function initSubliminal() {

  function handleVisibilityChange() {

    var subliminalMessages = [
      "Pay more attention",
      "Do not blink",
      "Hello, I must be going",
      "You blinked, you missed it",
      "I'm not here",
      "You are beautiful",
      "No incoming calls accepted"
    ];

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

function initNLP() {


  $textarea = $(".js-nlp .textarea-field .textarea");
  $textarea.filteredPaste();
  $submit   = $(".js-nlp .js-nlp-submit");

  var extractAdjectives = function(text) {

    var adjectives = [];

    var sentences = nlp.pos(text);

    _.each(sentences.sentences, function(s) {
      adjectives.push(_.pluck(s.adjectives(), "text"));
    });

    adjectives = _.compact(_.flatten(adjectives));
    adjectives = _.without(adjectives, "replaces", "not", "together");

    return adjectives;

  };

  var replaceAdjectives = function($tag, highlightWords) {

    var text                = $tag.text();
    var textAdjectives      = extractAdjectives(text);
    var percentageOfChanges = 0.7;
    var numChanges          = Math.round(textAdjectives.length * percentageOfChanges);

    if (numChanges < 5) numChanges = textAdjectives.length;

    if (textAdjectives.length === 0) return;

    for (i = 0; i < numChanges; i++) {

      var a = textAdjectives[i];

      if (!a) return;

      if (a.match("ic$")) {
        adjs = adjectives.ic;
      } else if (a.match("ble$")) {
        adjs = adjectives.ble;
      } else if (a.match("ed$")) {
        adjs = adjectives.ed;
      } else if (a.match("ing$")) {
        adjs = adjectives.ing;
      } else if (a.match("al$")) {
        adjs = adjectives.al;
      } else if (a.match("ous")) {
        adjs = adjectives.ous;
      } else {
        adjs = adjectives.adjectives;
      }

      b = adjs[Math.round(Math.random() * (adjs.length - 1))];

      if (a[0] === a[0].toUpperCase()) b = b[0].toUpperCase() + b.substr(1);

      var regex = new RegExp('\\b' + a + '\\b', 'g');

      if (highlightWords) {
        text = text.replace(regex, "<strong>" + b + "</strong>");
      } else {
        text = text.replace(regex, b);
      }

    }

    $tag.html(text);

    return text;

  };

  var onSubmit = function(e) {

    e.preventDefault();
    e.stopPropagation();

    var replaced = replaceAdjectives($textarea, true);

    if (replaced) {
      var $subtitle = $(".js-nlp .js-subtitle small");
      $subtitle.html("&mdash; Paste a short text, punch the black button &mdash;");
      replaceAdjectives($subtitle);
    }

    replaceAdjectives($(".js-adjective"), true);

  };

  $submit.on("click", onSubmit);

}

function initPataphysicalDate() {
  $(".PataphysicalDate-js").html(new PataphysicalDate().toString());
}

function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  } 
  if(mm<10){
    mm='0'+mm;
  } 
  return yyyy+'-'+mm+'-'+dd;
}

function initGraph() {

  var margin = { top: 10, right: 5, bottom: 25, left: 40 };
  var width = $(".walk-diagram-js").width() - margin.left - margin.right;
  var height = 140 - margin.top - margin.bottom;

  var y = d3.scale.linear()
  .range([height, 0]);

  var chart = d3.select(".chart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.json("http://monitor.javierarce.com/api/month", function(error, json) {
    if (error) return console.warn(error);
    data = json;

    var barWidth = width/data.length;

    y.domain([0, d3.max(data, function(d) { return d.steps; } )]);

    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5);

    chart.append("g")
    .attr("class", "y axis")
    .call(yAxis);

    // Draw Y-axis grid lines
    chart.selectAll("line.y")
    .data(y.ticks(5))
    .enter().append("line")
    .attr("class", "y")
    .attr("x1", 5)
    .attr("x2", width + 5)
    .attr("y1", y)
    .attr("y2", y);

    var label = chart.append("text")
    .attr("x", function() {
      return (width/2) - (64/2) + margin.left - margin.right
    })
    .attr("y", height)
    .attr("dy", "1.3em")
    .attr("font-size", ".8em")
    .attr("font-style", "italic")
    .text("Last 30 days")
    .attr("text-anchor", "middle");

    var bar = chart.selectAll(".bar")
    .data(data.reverse())
    .enter().append("rect")
    .attr("class", function(d) {
      var date = d.created_at.split("T")[0];
      if (date == getCurrentDate()) {
        return "bar today";
      } else {
        return "bar";
      }
    })
    .attr("transform", function(d, i) { return "translate(" + (5 + i * barWidth) + ", 0 )"; })

    .attr("y", function(d){ return d.steps ? y(d.steps) : height; })
    .attr("height", function(d) { return d.steps ? height - y(d.steps) : 0; })
    .attr("width", barWidth - 1);

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
  initNLP();
  initPataphysicalDate();

  setTimeout(function() {
    initGraph();
  }, 200);

  Retina.init();

});

