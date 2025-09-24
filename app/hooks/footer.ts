import en from "@/app/translations/Footer/en";
import rw from "@/app/translations/Footer/rw";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export const useFooterTranslation = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const translations = language === "rw" ? rw : en;
  return translations.footer;
};
