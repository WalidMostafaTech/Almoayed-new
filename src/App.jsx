import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import FixedSection from "./components/sections/FixedSection";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";
import { useDispatch } from "react-redux";
import { fetchSetting } from "./store/setting/setting";
import ScrollToTopBtn from "./components/common/ScrollToTopBtn";

dayjs.extend(relativeTime);
dayjs.locale("ar");

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchSetting());
  }, [dispatch]);

  return (
    <main>
      <Header />

      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>

      <Footer />

      <FixedSection />
      <ScrollToTopBtn />
    </main>
  );
}

export default App;
