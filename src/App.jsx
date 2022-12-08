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
        <Route path="alimanalc-jossolpue/academycs" element={Academycs}/>
        <Route path="alimanalc-jossolpue/professional-exp" element={ExpProfessional}/>
        <Route path="alimanalc-jossolpue/why-me" element={WhyMe}/>
        <Route path="alimanalc-jossolpue/contact-me" element={ContactMe}/>
        <Route path="alimanalc-jossolpue/" element={Home} />
        <Route path="alimanalc-jossolpue" element={Home} />
        <Route path="*" element={<Redirect />} />
      </Routes>

  </>);
}

export default App;
