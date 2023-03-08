import "./base.css"
import Dialogs from "./components/dialogs/dialogs";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Nav from "./components/navigation/nav";


import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import News from "./components/news/news";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-main">
          <Routes>
            <Route path='/profile' element={<Main/>} />
            <Route path='/dialogs' element={<Dialogs/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Dialogs/>} />
            <Route path='/settings' element={<Dialogs/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
