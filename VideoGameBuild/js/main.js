// Get the image gallery and lightbox container
const gallery = document.querySelector('.image-gallery');
const lightbox = document.querySelector('.lightbox-container');

// Get the lightbox content and close button
const lightboxContent = lightbox.querySelector('.lightbox-content');
const closeButton = lightbox.querySelector('.close');

// Add event listener to each image in the gallery
gallery.querySelectorAll('img').forEach(image => {
  image.addEventListener('click', () => {
    // Set the lightbox content to the clicked image
    lightboxContent.setAttribute('src', image.getAttribute('src'));
    lightboxContent.setAttribute('alt', image.getAttribute('alt'));
    // Show the lightbox
    lightbox.style.display = 'block';
  });
});

// Add event listener to close button
closeButton.addEventListener('click', () => {
  // Hide the lightbox
  lightbox.style.display = 'none';
});
