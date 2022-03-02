import Header from "./components/Header";
import Main from "./components/Main";
import Collection from "./components/Collection";
import Products from "./components/Products";
import SalesComponents from "./components/SalesComponents";

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
    </div>
  )
}

export default App;
