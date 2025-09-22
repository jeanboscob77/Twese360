import en from "@/app/translations/aboutPage/en";
import rw from "@/app/translations/aboutPage/rw.js";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export const useTranslation = () => {
  const language = useSelector((state: RootState) => state.language.language);

  if (language === "rw") return rw;
  return en;
};
