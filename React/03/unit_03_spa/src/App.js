import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import CategoryDescription from "./CategoryDescription";
import Footer from "./Footer";
import Error from "./Error";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cat" element={<Category/>}/>
          <Route path="/cat/:categoryItem" element={<CategoryDescription/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>
   </>
  )
}

export default App;
