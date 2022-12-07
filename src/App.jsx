import { lazy } from "solid-js";
import { Routes,Route } from 'solid-app-router'
import Header from "./components/Header"
import Redirect from "./components/Redirect";

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
        <Route path="./academycs" component={Academycs}/>
        <Route path="./professional-exp" component={ExpProfessional}/>
        <Route path="./why-me" component={WhyMe}/>
        <Route path="./contact-me" component={ContactMe}/>
        <Route path="./" component={Home} />
        <Route path="*" element={<Redirect />} />
      </Routes>

  </>);
}

export default App;
