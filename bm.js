$('head').append('<link rel="stylesheet" href="https://github.com/devmer2/interactive/blob/master/bm.css" type="text/css" />');

// adds span around chars in p tag
$('p').each(function() {

  var string = $(this).html();
  var newString = "";

  for (var i = 0; i < string.length; i++) {
    newString += '<span class="char">' + string[i] + '</span>';
  }

  $(this).html(newString); // replaces with newString
});
