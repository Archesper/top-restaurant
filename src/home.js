import burger from './burger.jpeg'
export default home_component
function home_component() {
  // Create main card
  const main = document.createElement("main");
  // Create header
  const header = document.createElement("h2");
  header.textContent = "Arch's very original restaurant"
  // Create image and caption
  const image_wrapper = document.createElement("div");
  const image = new Image();
  image.src = burger;
  const caption = document.createElement("span");
  caption.textContent = "Our signature dish";
  caption.id = "caption";
  image_wrapper.classList.add("image-wrapper");
  image_wrapper.append(image, caption);
  // Create description paragraph
  const paragraph = document.createElement("p");
  paragraph.classList.add("description");
  const text =
    "Welcome to our eccentric little corner! Home of high contrast and rounded corners, we are here to challenge your taste buds with the most remarkable dishes! - monochrome burgers and placeholder items. We do hope you'll enjoy your time!";
  paragraph.textContent = text;
  // Add components to main
  main.append(header, image_wrapper, paragraph)
  return main
}