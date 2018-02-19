
var DemoTool = DemoTool || {};

DemoTool.init = function() {
  var modules = [
    DemoTool.Accordian,
    DemoTool.Gallery,
    DemoTool.SplitFix,
    DemoTool.MiniSlider
  ];

  for (var i = modules.length - 1; i >= 0; i--) {
    modules[i].init.call();
  }
};

DemoTool.Accordian = (function() {
  var accToggle = document.getElementById("acc-toggle");
  var accContent = document.getElementById("acc-content");

  var toggleAccordian = function() {
    var text = accToggle.innerHTML === "Learn More" ? "Close" : "Learn More";

    accContent.classList.toggle("hidden");
    accToggle.innerHTML = text;
  };

  var eventListeners = function() {
    accToggle.addEventListener("click", toggleAccordian);
  };

  var init = function() {
    eventListeners();
  };

  return {
    init: init
  };
})();

DemoTool.Gallery = (function() {
  var galleryWrap = document.getElementById("gallery").children[0];
  var galleryItems = galleryWrap.children;

  var getWrapperWidth = function() {
    var totalWidth = 0;

    for (var i = galleryItems.length - 1; i >= 0; i--) {
      totalWidth += galleryItems[i].offsetWidth + 40;

      if (i === 0) {
        setWrapperWidth(totalWidth);
      }
    }
  };

  var setWrapperWidth = function(width) {
    galleryWrap.style.width = width + "px";
  };

  var init = function() {
    getWrapperWidth();
  };

  return {
    init: init
  };
})();

DemoTool.SplitFix = (function() {
  var splitBlock = document.getElementsByClassName("split-block")[0];
  var splitBlockImageBlock = splitBlock.children[0];
  var blockOffest = 0;

  var scrollListener = function(event) {
    if (
      window.scrollY >= splitBlock.offsetTop &&
      window.scrollY < splitBlock.offsetTop + blockOffset
    ) {
      splitBlockImageBlock.classList.add("fixed");
      splitBlockImageBlock.classList.remove("bottomed");
    } else if (window.scrollY > splitBlock.offsetTop + blockOffset) {
      splitBlockImageBlock.classList.remove("fixed");
      splitBlockImageBlock.classList.add("bottomed");
    } else {
      splitBlockImageBlock.classList.remove("fixed");
    }
  };

  var calculateValues = function() {
    var imageHeight = splitBlockImageBlock.offsetHeight;
    var blockHeight = splitBlock.offsetHeight;

    blockOffset = blockHeight - imageHeight;
  };

  var eventListeners = function() {
    window.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", calculateValues);
  };

  var init = function() {
    eventListeners();
    calculateValues();
  };

  return {
    init: init
  };
})();

DemoTool.MiniSlider = (function() {
  var miniSlider;

  var initSwiper = function() {
    miniSlider = new Swiper(".swiper-container", {
      //       // Optional parameters
      //       direction: 'vertical',
      //       loop: true,
      //       // If we need pagination
      //       pagination: '.swiper-pagination',
      //       // Navigation arrows
      //       nextButton: '.swiper-button-next',
      //       prevButton: '.swiper-button-prev',
      //       // And if we need scrollbar
      //       scrollbar: '.swiper-scrollbar',
    });
  };

  var init = function() {
    initSwiper();
  };

  return {
    init: init
  };
})();

DemoTool.init();
