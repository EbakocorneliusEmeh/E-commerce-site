
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { AppProvider } from "./Context/AppContext"
// import Header from "./Components/Head/Head"
// import Footer from "./Components/Footer/Footer"


// import Flash from "./Components/Flash/Flash"
// import Banner from "./Components/Banner/Banner"
// import Bread from "./Components/Bread/Bread"
// import Products from "./Components/Products/Products"
// import Services from "./Components/Services/Services"



// import { Home } from "lucide-react"
// import Login from "./Pages/Login/Login"
// import SignUp from "./Pages/SignUp/SignUp"



// function App() {
//   return (
//     <AppProvider>
//       <Router>
//         <div className="App">
//           <Header />
//           <main>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<SignUp />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </AppProvider>
//   )
// }

// export default App







import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Flash from "./Components/Flash/Flash";
// import Banner from "./Components/Banner/Banner";
// import Bread from "./Components/Bread/Bread";
// import Products from "./Components/Products/Products";
// import Services from "./Components/Services/Services";
import Home from "./Pages/Home/Home.jsx";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx"


// import { Home } from "lucide-react";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
// import { Route } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Wishlist" element={<Wishlist />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
