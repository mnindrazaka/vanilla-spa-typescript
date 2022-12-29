import Navbar from "../components/Navbar";
import ProductSearchInput from "../components/ProductSearchInput";
import ProductList from "../components/ProductList";
import { state } from "../state";

function HomePage() {
  const navbar = Navbar();

  const p = document.createElement("p");
  p.textContent = "Welcome to Home Page";

  const textPreview = document.createElement("p");
  textPreview.textContent = state.inputValue;

  const div = document.createElement("div");
  div.append(navbar);
  div.append(p);
  div.append(ProductSearchInput());
  div.append(textPreview);
  div.append(ProductList());

  return div;
}

export default HomePage;
