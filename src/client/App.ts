import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";
import { state } from "./state";

function App() {
  const homePage = HomePage();
  const aboutPage = AboutPage();

  if (state.path == "/home") {
    return homePage;
  } else if (state.path == "/about") {
    return aboutPage;
  } else {
    return homePage;
  }
}

export default App;
