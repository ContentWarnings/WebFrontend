import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import MovieEntry from "./pages/MovieEntry";
import Settings from "./pages/Settings";
import AccountSettings from "./pages/AccountSettings";
import TosPage from "./pages/Tos";
import AboutPage from "./pages/About";
import AttributionPage from "./pages/Attribution";
import PrivacyPage from "./pages/PrivacyPolicy";
function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col justify-between bg-dark-2">
        <Header />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/*" element={<MovieEntry />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/profile" element={<AccountSettings />} />
            <Route path="/tos" element={<TosPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/attributions" element={<AttributionPage />}/>
            <Route path="/privacypolicy" element={<PrivacyPage />}/>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
