var html = document.documentElement,
  WebP = new Image();

WebP.onload = WebP.onerror = function () {
  isSupported = WebP.height === 2;

  if (!isSupported) {
    console.log(1);

    html.className = html.className.replace(/webp/, "no-webp");
  }
};
WebP.src =
  "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
