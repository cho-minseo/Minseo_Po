// Enlarge a gameplay image without leaving the article.
const viewer = document.getElementById("viewer");
const largeImage = document.getElementById("viewer-img");
const closeButton = document.getElementById("close-viewer");

function openImage(button) {
  const image = button.querySelector("img");
  largeImage.src = image.src;
  largeImage.alt = image.alt;
  viewer.showModal();
}

function closeImage() {
  viewer.close();
}

document.querySelectorAll(".zoom").forEach((button) => {
  button.addEventListener("click", () => openImage(button));
});

closeButton.addEventListener("click", closeImage);

// Clicking the area outside the dialog closes the image.
viewer.addEventListener("click", (event) => {
  const bounds = viewer.getBoundingClientRect();
  const isOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (event.target === viewer && isOutside) {
    closeImage();
  }
});
