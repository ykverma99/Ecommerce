import Header from "./components/Header";
import Main from "./components/Main";
import Collection from "./components/Collection";
import Products from "./components/Products";
import SalesComponents from "./components/SalesComponents";
import MaleCollection from "./components/MaleCollection";
import Footer from "./components/Footer";

function App() {
  return(
    <div className="flex flex-col gap-36">
     <div>
        <Header />
        <Main />
     </div>
      <Collection />
      <Products />
      <SalesComponents />
      <MaleCollection />
      <Footer />
    </div>
  )
}

export default App;
