import Nav from "./components/Home/Navbar";
import Footer from "./components/Footer/footer";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/RedirctPage/PrivacyPolicy";
import GoodFaith from "./components/RedirctPage/GoodFaith";


function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Routes>
          <Route path="" element={<Nav />} />
          <Route path="/home" element={<Nav />} />
          <Route path="/privacy-policy" element={< PrivacyPolicy />} />
          <Route path="/good-faith-estimate" element={< GoodFaith />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
export default App;