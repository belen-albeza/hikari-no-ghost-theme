(function ($) {
  $(document).ready(function () {
    $('.post').fitVids({
      customSelector: "iframe[src^='https://videopress.com']"
    });
  });
})(jQuery);
