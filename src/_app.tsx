import IconLinks from "./ui/IconLinks";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";
import Main from "./ui/Main";
import SiteWrapper from "./ui/SiteWrapper";

function App() {
  return (
    <SiteWrapper>
      <div className="flex">
        <IconLinks />
        <Main />
        <Navigation />
      </div>
      <Footer />
    </SiteWrapper>
  );
}

export default App;
