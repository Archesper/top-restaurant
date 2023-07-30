import burger from "./burger.jpeg";
import placeholder from "./placeholder.png";
import water from "./water.jpeg";

export default menu_load;

function menu_load() {
  // Create main card
  const main = document.createElement("main");
  // Create headers
  const main_header = document.createElement("h2");
  main_header.textContent = "Menu";
  const sub_header_contents = [
    "Our signature dish, with the same picture as the homepage",
    "Our best selling entree, a placeholder image",
    "Our upcoming drink idea, water!",
  ];
  const sub_headers = sub_header_contents.map((text) => {
    const sub_header = document.createElement("h3");
    sub_header.textContent = text;
    return sub_header;
  });
  // Create images
  const image_sources = [burger, placeholder, water]
  const images = image_sources.map((source) => {
    const image = new Image();
    image.src = source
    return image
  })
  // Append content to main
  main.appendChild(main_header)
  for (let i = 0; i < images.length; i++) {
    main.append(sub_headers[i], images[i]);
  }
  return main
}
