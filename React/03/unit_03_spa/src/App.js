import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import CategoryDescription from "./CategoryDescription";
import Footer from "./Footer";
import Error from "./Error";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const navProps = {
  mainNav: [
    {'link': '/', 'text': 'Главная'},
    {'link': '/about', 'text': 'О сайте'},
    {'link': '/cat', 'text': 'Категории'}
  ],
  categoryNav: [
    {'link': '/cat/notebook', 'text': 'Ноутбуки'},
    {'link': '/cat/monitor', 'text': 'Мониторы'},
    {'link': '/cat/cellphone', 'text': 'Мобильные телефоны'}
  ]
}

function App() {
  return (
   <>
      <Router>
        <Header data={navProps}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cat" element={<Category data={navProps}/>}/>
          <Route path="/cat/:categoryItem" element={<CategoryDescription/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>
   </>
  )
}

export default App;
