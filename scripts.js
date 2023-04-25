function setHeight(img) {
  // Get the height of the image
  var height = img.offsetHeight;

  // Set the height of the parent col div to the height of the image
  img.parentNode.parentNode.style.height = height + "px";
}
