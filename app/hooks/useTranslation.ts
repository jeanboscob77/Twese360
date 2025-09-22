import en from "@/app/locales/en.json";
import rw from "@/app/locales/rw.json";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export const useTranslation = () => {
  const language = useSelector((state: RootState) => state.language.language);

  if (language === "rw") return rw;
  return en;
};
