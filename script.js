jQuery(function() {
  jQuery("a.nav-toggle").addClass("icon-reorder");
  var nav = responsiveNav("#top-menu", {
    animate: true,
    transition: 100,
    label: "Menu",
    insert: "before",
    closeOnNavClick: false,
    openPos: "static",
    navClass: "nav-collapse",
    navActiveClass: "js-nav-activated",
    jsClass: "js",
    init: function () {
    },
    open: function () {
      jQuery(".region-header").insertBefore("#top-menu");
      jQuery(".region-header").hide();
    },
    close: function () {
      //$(".region-header").toggle();
    }
  });
  
  jQuery('<a href="#" class="mag-search" title="Search website">Search</a>').insertAfter('.nav-toggle');
  /* Moves search bar above main menu and adds a toggle on click for nav-toggle */

  jQuery(document).on('click', '.mag-search', function (event) {
    event.preventDefault();
    jQuery("#block-apachesolr-panels-search-form").insertBefore("#top-menu");
    jQuery("#block-apachesolr-panels-search-form").toggle();
    jQuery(".mag-search").toggleClass('active');
  });
  
  jQuery(document).ready(function() {
    if (jQuery(window).scrollTop() > 10) {
      jQuery('#page').addClass('fixed-header');
    }
    else {
      jQuery('#page').removeClass('fixed-header');
    }
    jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 10) {
      jQuery('#page').addClass('fixed-header');
      }
      else {
      jQuery('#page').removeClass('fixed-header');
      }
    });
  });
});



