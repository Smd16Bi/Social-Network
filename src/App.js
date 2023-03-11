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
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

const App = ({state}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <header className="app-wrapper-header">
          <Header />
        </header>
        <aside className="app-wrapper-aside">
          <Nav  state={state.nav} />
        </aside>
        <main className="app-wrapper-main">
          <Routes>
            <Route path='/profile' element={<Main state={state.dataPosts} />}  />
            <Route path='/dialogs/*' element={<Dialogs state={state.dataDialogs} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
        <footer className="app-wrapper-footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
