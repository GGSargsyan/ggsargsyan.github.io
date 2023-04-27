// $("#gallery").imagesLoaded(function () {
//   $("#gallery").masonry({
//     itemSelector: ".card",
//   });
// });

// $("#card").imagesLoaded(function () {
//   $(".gallery").masonry({
//     // set itemSelector so .grid-sizer is not used in layout
//     itemSelector: ".card",
//     percentPosition: true,
//   });
// });

function setHeight(img) {
  // Get the height of the image
  var height = img.offsetHeight;

  // Set the height of the parent col div to the height of the image
  img.parentNode.parentNode.style.height = height + "px";
}
