import About from "./Components/About";
import AllProducts from "./Components/AllProducts";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {
  return (
    <div className="flex flex-col ">
      <Header />
      <About/>
      <Products/>
      <AllProducts/>
    </div>
  );
}

export default App;
