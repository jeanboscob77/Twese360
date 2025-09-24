import en from "@/app/translations/services/en";
import rw from "@/app/translations/services/rw";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export const useTranslation = () => {
  const language = useSelector((state: RootState) => state.language.language);

  if (language === "rw") return rw;
  return en;
};
