$(document).ready(function () {
  $('.introduction').readmore({
    speed: 100,
    collapsedHeight: 190,
    heightMargin: 24,
    moreLink: '<a class="btn-outline-primary" href="#">Know More</a>',
    lessLink: '<a class="btn-outline-primary" href="#">Close</a>',
    embedCSS: true,
    blockCSS: 'display: block; width: 100%;',
    startOpen: false,

    // callbacks
    blockProcessed: function () { },
    beforeToggle: function () { },
    afterToggle: function () { }
  });
});

$(document).ready(function () {
  $('.large_text').readmore({
    speed: 100,
    collapsedHeight: 190,
    heightMargin: 24,
    moreLink: '<a href="#">Know More</a>',
    lessLink: '<a href="#">Close</a>',
    embedCSS: true,
    blockCSS: 'display: block; width: 100%;',
    startOpen: false,

    // callbacks
    blockProcessed: function () { },
    beforeToggle: function () { },
    afterToggle: function () { }
  });
});
