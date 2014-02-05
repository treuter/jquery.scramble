(function($) {
  var replaceWord = function(match) {
    if (match.length < 4) {
      return match;
    }
    return match.charAt(0) +
      shuffle(match.slice(1, -1)) + 
      match.charAt(match.length - 1);
  }

  var shuffle = function(str) {
    var a = str.split(''),
    n = a.length;
    for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join('');
  };

  $.fn.scramble = function(options) {   
    options =
      $.extend({}, $.fn.scramble.defaults, options); 

    return $(this).each(function() {
      text = $(this).text();
      text = text.replace(options.regex, replaceWord);
      $(this).text(text);
    });
  };

  // default options
  $.fn.scramble.defaults = {
    regex: /[A-Za-z]+/g
  };
})(jQuery);
