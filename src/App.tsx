import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import "./i18n";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SEO from "./components/SEO/SEO";

import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import History from "./pages/History/History";
import Services from "./pages/Services/Services";
import Catalog from "./pages/Catalog/Catalog";

import "./App.css";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <SEO
            title={t("home.title")}
            description={t("home.aboutText")}
            keywords="швейне виробництво, пошив одягу, корпоративний одяг, ремонт одягу, дизайн одягу"
          />

          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/history" element={<History />} />
              <Route path="/services" element={<Services />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
