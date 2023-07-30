import burger from "./burger.jpeg";
export default initial_page_load;

function initial_page_load() {
  const content = document.getElementById("content");
  // Create navbar
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.appendChild(ul);
  const nav_buttons = ["Home", "Menu", "Contact"];
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = nav_buttons[i];
    ul.appendChild(li);
  }
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
  // Add components to content div
  content.append(nav, main);
}
