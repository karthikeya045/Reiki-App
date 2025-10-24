// Polyfill Intl.PluralRules for React Native environments
import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      secondLevelTitle: 'Second Level',
      symbols: [
        {
          name: 'Dai Ko Myo (Master Symbol)',
          description:
            "The master symbol associated with spiritual enlightenment, deep healing, and empowering all other symbols. It’s used to heal at the soul level, align purpose, and strengthen attunements.",
          bullets: [
            'Amplifies and refines all Reiki energy and symbols',
            'Supports soul-level and lineage healing',
            'Promotes spiritual growth and purpose alignment',
            'Used in attunements to empower the channel',
            'Excellent for chronic, deep-rooted patterns',
          ],
        },
      ],
    },
  },
  te: {
    translation: {
      secondLevelTitle: 'రెండో స్థాయి',
      symbols: [
        {
          name: 'దై కో మియో (మాస్టర్ సంకేతం)',
          description:
            'ఆధ్యాత్మిక ప్రకాశం, లోతైన చికిత్స మరియు ఇతర సంకేతాలను బలోపేతం చేసే మాస్టర్ సంకేతం. ఇది ఆత్మ స్థాయిలో చికిత్స చేయడానికి, లక్ష్యాన్ని సరిచేయడానికి మరియు అట్ట్యూన్\u200cమెంట్లను బలోపేతం చేయడానికి ఉపయోగిస్తారు.',
          bullets: [
            'అన్ని ర శక్తి మరియు సంకేతాలను పెంపొందించి శుద్ధి చేస్తుంది',
            'ఆత్మస్థాయి మరియు వంశపారంపర్య చికిత్సకు తోడ్పడుతుంది',
            'ఆధ్యాత్మిక అభివృద్ధి మరియు లక్ష్య సమన్వయాన్ని ప్రోత్సహిస్తుంది',
            'శక్తి ప్రవాహాన్ని బలోపేతం చేయడానికి అట్ట్యూన్\u200cమెంట్\u200cలలో ఉపయోగిస్తారు',
            'దీర్ఘకాలిక, లోతైన నమూనాలకు చాలా మంచి ఫలితాలు ఇస్తుంది',
          ],
        },
      ],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
