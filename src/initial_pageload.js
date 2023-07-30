import home from "./home.js";
export default initial_page_laod;

function initial_page_laod() {
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
  // On first load, initialize home tab
  const home_tab = home()
  // Add components to content div
  content.append(nav, home_tab);
}
