import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Manager from "./Components/Manager";
import Footer from "./Components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="bg-green-100 min-h-[90vh]">
        <Manager />
      </div>
      <Footer />
    </div>
  );
}

export default App;
