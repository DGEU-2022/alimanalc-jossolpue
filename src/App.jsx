import { lazy } from "solid-js";
import { Routes,Route } from 'solid-app-router'
import { Container } from 'solid-bootstrap'
import Header from "./components/Header"

const Academycs = lazy(() => import("./pages/Academycs"));
const Home = lazy(() => import("./pages/Home"));
const ExpProfessional = lazy(() => import("./pages/ExpProfessional"));
const WhyMe = lazy(() => import("./pages/WhyMe"));
const ContactMe = lazy(() => import("./pages/ContactMe"));

function App() {
  return (
  <>
    <Header/>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/academycs" component={Academycs}/>
        <Route path="/professional-exp" component={ExpProfessional}/>
        <Route path="/why-me" component={WhyMe}/>
        <Route path="/contact-me" component={ContactMe}/>
      </Routes>

  </>);
}

export default App;
