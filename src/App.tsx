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
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
