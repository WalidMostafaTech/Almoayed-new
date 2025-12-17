import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/languageSlice/languageSlice";
import LoadingModal from "../Loading/LoadingModal";
import { RiGlobalLine } from "react-icons/ri";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.language);

  const [openLoading, setOpenLoading] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleToggle = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
    setOpenLoading(true);
  };

  return (
    <>
      <button onClick={handleToggle} className="mainBtn light">
        <span className="font-semibold">
          {lang === "en" ? "العربية" : "English"}
        </span>
        <RiGlobalLine />
      </button>

      <LoadingModal openModal={openLoading} />
    </>
  );
};

export default LanguageSwitcher;
