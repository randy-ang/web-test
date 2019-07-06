import React from 'react';
import {getDictionary} from '../util/language';

const LanguageContext = React.createContext(getDictionary());

export default LanguageContext;
