import English from "./English";
import {result} from 'lodash';


const languageMap = {
  en: English,
}

let language = languageMap.en;

export const setLanguage = (id) => {
  language = result(languageMap, id, English);
  return language;
}

export const getAvailableLanguage = () => Object.keys(languageMap);

// returns input if language is available, default otherwise
export const checkLanguageAvailability = (langId) => Object.keys(languageMap).includes(langId) ? langId : 'en'; 

export const getLanguage = (index) => language[index];

export const getDictionary = () => language;

export default getLanguage;