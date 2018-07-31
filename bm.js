(function(){
// This part checks for jQuery
var version = "1.10.2";
// Checks for prior inclusion and version
if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
        // If there isn't an instance of jQuery, create one and append it to the head
        // Else run our bookmarklet!
        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
        script.onload = script.onreadystatechange = function(){
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                        done = true;
                        initBookmarklet(window.jQuery);
                }
    else {
        console.log('error loading');
    }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
    console.log(':::');
}
else {
    console.log('jquery loaded');
}
} else {
        initBookmarklet(window.jQuery);
}
function initBookmarklet($) {
        (window.bookmarklet = function() {

          $('head').append('<link rel="stylesheet" href="https://devmer2.github.io/interactive/bm.css" type="text/css" />');
          $('h1,h2,h3,h4,h5,a').addClass('toBlur');
          var textNode, str, newStr;

          $('.toBlur')
          .find('*')
          .addBack('.toBlur')
          .contents()
          .filter(function () {
            return this.nodeType === 3 && typeof this.data != 'undefined' && this.data.replace(/\s+/, "");
          })
          .wrap('<span class="char"></span>');

          $('.toBlur')
          .find('.char')
          .each(function () {
            textNode = $(this);
            str = textNode.text().split('');
            newStr = '';

            $.each(str, function (index, value) {
              newStr += '<span class="char">' + value + '</span>';
            });

            textNode.replaceWith($(newStr));
          });
        })();
}
})();
