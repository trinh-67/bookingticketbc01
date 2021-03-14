import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Header from './Components/Header/Header'
import Loading from "./Components/Loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Loading />
        <Switch>
          {/*duyet theo tung / trang */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* Route mặc định để dưới cùng của ứng dụng*/}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
