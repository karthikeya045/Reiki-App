// Polyfill Intl.PluralRules for React Native environments
import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      firstLevelTitle: 'First Level',
      firstLevelSymbols: [
        {
          name: 'Cho Ku Rei ',
          description:
            'Cho Ku Rei (Power Symbol) – Amplifies energy, clears spaces, protects, and accelerates healing. Often drawn at the start and end to enhance the flow.',
          bullets: [
            'Boosts the intensity of Reiki flow',
            'Cleanses and charges rooms, food, water, crystals',
            'Creates energetic protection/shielding',
            'Seals treatments at the end',
            'Draw over pain areas to reduce discomfort',
            "Use at the start to 'switch on' power",
          ],
        },
        {
          name: 'Sei Hei Ki ',
          description:
            'Sei Hei Ki (Harmony Symbol) – Balances mind and emotions, supports mental clarity, releases negative patterns, and aids emotional healing.',
          bullets: [
            'Balances left–right brain and emotions',
            'Supports release of stress, anxiety, and habits',
            'Helpful for sleep and mental clarity',
            'Can be placed over solar plexus/heart for calm',
            'Pairs well after Cho Ku Rei to harmonize',
          ],
        },
        {
          name: 'Hon Sha Ze Sho Nen',
          description:
            'Hon Sha Ze Sho Nen (Distant Symbol) - Connects beyond time and space for distant healing, inner-child work, and transforming past patterns.',
          bullets: [
            'Enables distant and across-time healing',
            'Send Reiki to future events and past memories',
            'Useful for relationship and inner-child work',
            'Connects to clients not physically present',
            'Combine with Cho Ku Rei to amplify at a distance',
          ],
        },
      ],

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
      karunaFirstLevelTitle: 'Karuna First Level',
      karunaFirstLevelSymbols: [
        {
          name: 'Zonar',
          description: 'Zonar – Heals at the cellular and karmic level; useful for early-life and deep-seated patterns; gently unwinds stuck energies.',
          bullets: [
            'Karmic and cellular-level healing',
            'Helpful for chronic, repeating patterns',
            'Soothes inner-child and early-life wounds',
            'Combine with Harth for gentle emotional release',
          ],
        },
        {
          name: 'Halu',
          description: 'Halu – An intensified Zonar; excellent for dissolving illusions, psychic protection, trauma release, and clearing attachments.',
          bullets: [
            'Strong psychic protection and clearing',
            'Cuts through fears, illusions, and attachments',
            'Great before sleep and after dense interactions',
            'Amplifies Zonar for deeper extraction',
          ],
        },
        {
          name: 'Harth',
          description: 'Harth – Heart opening and compassion; supports emotional healing, relationships, forgiveness, and self-love.',
          bullets: [
            'Opens heart center and nurtures compassion',
            'Supports forgiveness and relationship harmony',
            'Relieves grief, loneliness, and resentment',
            'Place over heart/thymus for emotional balance',
          ],
        },
        {
          name: 'Rama',
          description: 'Rama – Grounding, manifestation, and balancing masculine–feminine; supports boundaries, decisiveness, and stability.',
          bullets: [
            'Grounds and stabilizes energy',
            'Enhances manifestation and confident action',
            'Balances masculine–feminine polarity',
            "Use at base feet/hips to anchor after sessions",
          ],
        },
      ],
      karunaSecondLevelTitle: 'Karuna Second Level',
      karunaSecondLevelSymbols: [
        {
          name: 'Gnosa',
          description: 'Gnosa - Enhances learning, insight, and integration; supports brain balancing for study, exams, and bridging knowledge with intuition.',
          bullets: [
            'Supports memory, focus, and integration',
            'Balances hemispheres for study and logic+intuition',
            'Place over brow during learning/reading',
            'Use before exams and complex problem - solving',
          ],
        },
        {
          name: 'Kriya',
          description: 'Kriya - Deep physical clearing and detox; accelerates recovery, supports organ cleansing, and improves energy flow through the body.',
          bullets: [
            'Accelerates detox and physical healing',
            'Clears blocks in meridians and chakras',
            'Great for chronic fatigue and sluggish flow',
            'Combine with OM to stabilize after clearing',
          ],
        },
        {
          name: 'Lava',
          description: 'Lava - Purifying transformative fire; burns away stagnant energy and helps transmute anger or intense emotions into creative force.',
          bullets: [
            'Transforms heavy emotions into creative energy',
            'Good for anger release and vitality',
            'Use over liver/solar plexus for purifying',
            'Pair with Shanti to soothe after intensity',
          ],
        },
        {
          name: 'Shanti',
          description: 'Shanti - Peace and tranquility; calms the nervous system, invites harmony, and eases conflict within and around you.',
          bullets: [
            'Restores peace and serenity',
            'Eases insomnia and anxious loops',
            'Send to rooms/relationships for harmony',
            'Wonderful at session end to integrate',
          ],
        },
        {
          name: 'OM',
          description: 'OM - Primordial vibration and unity; aligns with the universal field, centers the mind, and elevates meditation practices.',
          bullets: [
            'Centers meditation and mantra practice',
            'Harmonizes field with universal vibration',
            'Clears mental noise and aligns intention',
            'Place above crown or in room before work',
          ],
        },
        {
          name: 'Johre',
          description: 'Johre - Clears heavy energies, cords, and attachments; brightens the aura and raises one’s vibration after dense encounters.',
          bullets: [
            'Removes cords and dense residues',
            'Brightens aura and raises vibration',
            'Use after crowds or heavy sessions',
            'Follow with Motor Zanon to seal the field',
          ],
        },
        {
          name: 'Motor Zanon',
          description: 'Motor Zanon - Repairs etheric tears and seals the aura; useful post-surgery, post-trauma, and after intense energetic work.',
          bullets: [
            'Repairs and seals tears in the aura',
            'Excellent post-trauma or surgery',
            'Strengthens boundaries and containment',
            'Finish with OM or Shanti for smoothness',
          ],
        },
        {
          name: 'Hosanna',
          description: 'Hosanna - Uplifts the heart and spirit; restores hope, faith, and gratitude, especially in periods of challenge.',
          bullets: [
            'Uplifts mood and restores hope',
            'Invites gratitude and devotion of the heart',
            'Helpful during setbacks or grief',
            'Place at heart and crown for uplift',
          ],
        },
      ],
    },
  },
  te: {
    translation: {
      firstLevelTitle: 'మొదటి స్థాయి',
      firstLevelSymbols: [
        {
          name: 'చో కు రే',
          description:
            'చో కు రే (శక్తి చిహ్నం) - శక్తిని పెంచుతుంది, ఖాళీలను క్లియర్ చేస్తుంది, రక్షిస్తుంది మరియు వైద్యంను వేగవంతం చేస్తుంది. ప్రవాహాన్ని పెంచడానికి తరచుగా ప్రారంభంలో మరియు చివరిలో గీస్తారు.',
          bullets: [
            'రేకి ప్రవాహం యొక్క తీవ్రతను పెంచుతుంది',
            'గదులు, ఆహారం, నీరు, స్ఫటికాలను శుభ్రపరుస్తుంది మరియు ఛార్జ్ చేస్తుంది',
            'శక్తివంతమైన రక్షణ/కవచాన్ని సృష్టిస్తుంది',
            'చికిత్సలను చివరగా ముద్రిస్తుంది',
            'నొప్పి ప్రాంతాలపై గీసి అసౌకర్యాన్ని తగ్గిస్తుంది',
            "ప్రారంభంలో శక్తిని 'స్విచ్ ఆన్' చేయడానికి ఉపయోగించండి",
          ],
        },
        {
          name: 'సే హే కి',
          description:
            'సే హే కి (సామరస్యం చిహ్నం) - మనస్సు మరియు భావోద్వేగాలను సమతుల్యం చేస్తుంది, మానసిక స్పష్టతకు మద్దతు ఇస్తుంది, ప్రతికూల నమూనాలను విడుదల చేస్తుంది మరియు భావోద్వేగ స్వస్థతకు సహాయపడుతుంది.',
          bullets: [
            'ఎడమ-కుడి మెదడు మరియు భావోద్వేగాలను సమతుల్యం చేస్తుంది',
            'ఒత్తిడి, ఆందోళన మరియు అలవాట్ల విడుదలకు మద్దతు ఇస్తుంది',
            'నిద్ర మరియు మానసిక స్పష్టతకు సహాయపడుతుంది',
            'ప్రశాంతత కోసం సోలార్ ప్లెక్సస్/హృదయంపై ఉంచవచ్చు',
            'చో కు రే తర్వాత సమన్వయం చేయడానికి బాగా జత చేస్తుంది',
          ],
        },
        {
          name: 'హోన్ షా జే షో నెన్',
          description:
            'హోన్ షా జే షో నెన్ (సుదూర చిహ్నం) - సుదూర వైద్యం, అంతర్గత-పిల్లల పని మరియు గత నమూనాలను మార్చడానికి సమయం మరియు స్థలాన్ని దాటి కనెక్ట్ చేస్తుంది.',
          bullets: [
            'సుదూర మరియు కాలానుగుణ వైద్యం అనుమతిస్తుంది',
            'భవిష్యత్ సంఘటనలు మరియు గత జ్ఞాపకాలకు రేకిని పంపండి',
            'సంబంధం మరియు అంతర్గత-పిల్లల పనికి ఉపయోగపడుతుంది',
            'భౌతికంగా లేని క్లయింట్లకు కనెక్ట్ అవుతుంది',
            'దూరంలో విస్తరించడానికి చో కు రేతో కలపండి',
          ],
        },
      ],

      secondLevelTitle: 'రెండో స్థాయి',
      symbols: [
        {
          name: 'దై కో మియో (మాస్టర్ సంకేతం)',
          description:
            'ఆధ్యాత్మిక ప్రకాశం, లోతైన చికిత్స మరియు ఇతర సంకేతాలను బలోపేతం చేసే మాస్టర్ సంకేతం. ఇది ఆత్మ స్థాయిలో చికిత్స చేయడానికి, లక్ష్యాన్ని సరిచేయడానికి మరియు అట్ట్యూన్మెంట్లను బలోపేతం చేయడానికి ఉపయోగిస్తారు.',
          bullets: [
            'అన్ని ర శక్తి మరియు సంకేతాలను పెంపొందించి శుద్ధి చేస్తుంది',
            'ఆత్మస్థాయి మరియు వంశపారంపర్య చికిత్సకు తోడ్పడుతుంది',
            'ఆధ్యాత్మిక అభివృద్ధి మరియు లక్ష్య సమన్వయాన్ని ప్రోత్సహిస్తుంది',
            'శక్తి ప్రవాహాన్ని బలోపేతం చేయడానికి అట్ట్యూన్మెంట్లలో ఉపయోగిస్తారు',
            'దీర్ఘకాలిక, లోతైన నమూనాలకు చాలా మంచి ఫలితాలు ఇస్తుంది',
          ],
        },
      ],
      karunaFirstLevelTitle: 'కరుణా మొదటి స్థాయి',
      karunaFirstLevelSymbols: [
        {
          name: 'జోనార్',
          description: 'జోనార్ – సెల్యులర్ మరియు కర్మ స్థాయిలో చికిత్స చేస్తుంది; ప్రారంభ జీవితం మరియు లోతైన నమూనాలకు ఉపయోగకరం; అఘాతం శక్తులను శాంతపరుస్తుంది.',
          bullets: [
            'కర్మ మరియు సెల్యులర్ స్థాయి చికిత్స',
            'దీర్ఘకాలిక, పునరావృత నమూనులకు సహాయం చేస్తుంది',
            'అంతర్గత-పిల్లల గాయాలను soothe చేస్తుంది',
            'సౌమ్య భావోద్వేగ విడుదల కోసం Harth తో కలపండి',
          ],
        },
        {
          name: 'హాలు',
          description: 'హాలు – శక్తివంతమైన జోనార్; మాయలు తొలగించడం, సైకిక్ రక్షణ, గాయ విముక్తి మరియు అంటుకునే వస్తువుల తొలగింపుకు అద్భుతం.',
          bullets: [
            'బలమైన సైకిక్ రక్షణ మరియు శుద్ధి',
            'భయాలు, మాయలు మరియు అంటుకునే వాటిని తీయగలదు',
            'నిద్రకు ముందు మరియు ఘనమైన సమావేశాల తర్వాత బాగుంది',
            'లోతైన బహిష్కరణ కోసం జోనార్ ను పెంపొందిస్తుంది',
          ],
        },
        {
          name: 'హార్థ్',
          description: 'హార్థ్ – హృదయాన్ని తెరవడం మరియు కరుణ; భావోద్వేగ చికిత్స, సంబంధాలు, క్షమాపణ మరియు స్వీయ-ప్రేమకు మద్దతు.',
          bullets: [
            'హృదయ కేంద్రాన్ని తెరిచి కరుణను పెంపొందిస్తుంది',
            'క్షమాపణ మరియు సంబంధ సమన్వయానికి తోడ్పడుతుంది',
            'దుఃఖం, ఒంటరితనం మరియు కోపాన్ని ఉపశమనం చేస్తుంది',
            'భావోద్వేగ సమతుల్యానికి హృదయ/థైమస్ పై ఉంచండి',
          ],
        },
        {
          name: 'రామ',
          description: 'రామ – స్థిరపడటం, ప్రపంచాన్ని ఆకర్షించడం మరియు భావపూరక-పురుష సమతుల్యం; సరిహద్దులు, నిర్ణయాత్మకత మరియు స్థితిస్థాపకతకు మద్దతు.',
          bullets: [
            'శక్తిని స్థిరపరుస్తుంది మరియు గ్రౌండ్ చేస్తుంది',
            'ప్రత్యేక చర్య మరియు ఆత్మవిశ్వాసాన్ని పెంచుతుంది',
            'పురుష-స్త్రీ ధోరణుల సమతుల్యాన్ని కలిగిస్తుంది',
            "సెషన్ల తరువాత అడుగులు/నడుళ్లు వద్ద ఆధారం చేయడానికి ఉపయోగించండి",
          ],
        },
      ],
      karunaSecondLevelTitle: 'కరుణా రెండో స్థాయి',
      karunaSecondLevelSymbols: [
        {
          name: 'గ్నోసా',
          description: 'గ్నోసా - ఈ సింబల్ హయ్యర్ సెల్ఫ్‌తో గాఢమైన సంబంధం ఏర్పడుతుంది. ఇది భౌతిక శరీరంలో న్యాయబద్ధమైన ఆలోచనలను ప్రోత్సహిస్తుంది. సమాచారం తెలుసుకునే మరియు గ్రహించే సామర్థ్యాన్ని మెరుగుపరుస్తుంది. ధ్యానం ప్రారంభించే ముందు ఈ సింబల్‌ను సహస్రార చక్రంపై ఉంచడం ద్వారా హయ్యర్ సెల్ఫ్‌తో అనుబంధాన్ని స్థిరపరచుకోవచ్చు. ఈ సింబల్ ఉపయోగం వల్ల అనవసరమైన ఆలోచనలు తొలగి, ఆధ్యాత్మిక అభివృద్ధి సాధ్యమవుతుంది.',
          bullets: [
            'జ్ఞాపకశక్తి, ఫోకస్ మరియు సమైక్యానికి మద్దతు',
            'అధ్యయనానికి లక్ష్యంగా హెమిస్ఫేర్‌లను సమతుల్యం చేస్తుంది',
            'అధ్యయన/పఠనం సమయంలో బ్రో వద్ద ఉంచండి',
            'పరీక్షలకు ముందు మరియు సంక్లిష్ట సమస్యల పరిష్కారానికి ఉపయోగించండి',
          ],
        },
        {
          name: 'క్రియా',
          description: 'క్రియా - ఈ సింబల్ మనిషిని భౌతికంగా తెచుకోటకు మరియు హీలింగ్ చేయటకు ఉపయోగపడును. భూమిలోని పవర్ ను కనెక్ట్ చేయటకు మరియు హయ్యర్ సెల్ఫ్ పవర్ ను కనెక్ట్ చేయటకు ఉపయోగపడును. హాలు సింబల్ ని మరియు హార్త్ సింబల్ ని కలిపి ఈ సింబల్ ను ఉపయోగిస్తే ఎలాంటి క్రానిక్ వ్యాధులకు వాడవచ్చును. మంచి రిజల్ట్స్ వస్తాయి. మంచి నిర్ణయాలు తీసుకొనుటకు మరియు లక్ష్యాలు చేరుటకు ఈ సింబల్ ఉపయోగపడును మనలో నీ భావాలను బ్యాలెన్స్ చేయను. ఈ సింబల్ ను మూలాధార చక్రం లో ఉపయోగించటం వలన ఆధ్యాత్మికంగా మంచి ఎదుగుదల ప్రారంభం అవుతుంది.',
          bullets: [
            'క్రియా సింబల్ ని అన్ని హీలింగ్ సింబల్స్ తో పాటు ఉపయోగించవచ్చు',
            'డిటాక్స్ మరియు శరీర చికిత్సను వేగవంతం చేస్తుంది',
            'మెరిడియన్లు మరియు చక్రాల‌లో బ్లాక్స్ ను తొలగిస్తుంది',
            'దీర్ఘకాలిక అలసట మరియు మందగమనానికి తోడ్పడుతుంది',
            'శుద్ధి తర్వాత స్థిరత్వం కోసం OM తో కలపండి',
          ],
        },
        {
          name: 'లావా',
          description: 'లావా - శుద్ధికరమైన రూపాంతరం చేయునది; నిలిచిపోయిన శక్తిని దహనం చేసి కోపం లేదా తీవ్రమైన భావోద్వేగాలను సృజనాత్మక శక్తిగా మారుస్తుంది.',
          bullets: [
            'భారీ భావోద్వేగాలను సృజనాత్మక శక్తిగా మార్చుతుంది',
            'కోపు విడుదలకు మరియు ఉత్సాహానికి మంచిది',
            'శుద్ధికి కాలిక్కు/సోలార్ ప్లెక్సస్‌పై ఉంచండి',
            'తీవ్రత తర్వాత శాంతికి Shantiతో జత చేయండి',
          ],
        },
        {
          name: 'శాంతి',
          description: 'శాంతి - శాంతి మరియు ప్రశాంతత; నర్వస్ సిస్టమ్‌ను శాంతింపజేస్తుంది, సౌహార్ద్యాన్ని ఆహ్వానిస్తుంది మరియు మీలో మరియు మీ చుట్టూ కలిగే సంగ్రహాన్ని తగ్గిస్తుంది.',
          bullets: [
            'శాంతి మరియు ప్రశాంతతను తిరిగి ఏర్పాటు చేస్తుంది',
            'నిద్రలేమిని మరియు ఆందోళన వైపుల్లూపులను తగ్గిస్తుంది',
            'గదులు/సంబంధాలకు సమరస్యం పంపండి',
            'సెషన్ చివరలో సమైక్యత కోసం అద్భుతం',
          ],
        },
        {
          name: 'ఓం',
          description: 'ఓం - ప్రాథమిక కంపన మరియు ఏకత్వం; విశ్వ ఫీల్డ్‌తో సమన్వయం చేస్తుంది, మనస్సును కేంద్రీకృతం చేస్తుంది మరియు ధ్యానం పద్ధతులను మెరుగుపరుస్తుంది.',
          bullets: [
            'ధ్యానం మరియు మంత్ర ఆచరణకు కేంద్రం',
            'విశ్వ కంపనతో ఫీల్డ్‌ను సమన్వయం చేయండి',
            'మానసిక శబ్దాన్ని తొలగించి ఉద్దేశ్యాన్ని సర్దుబాటు చేయండి',
            'కార్యానికి ముందు క్రోణ్ లేదా గదిలో ఉంచండి',
          ],
        },
        {
          name: 'జోహ్రే',
          description: 'జోహ్రే - భారమైన శక్తులను, కార్డ్స్ మరియు అంటుకునే వాటిని తొలగిస్తుంది; ఆరాస్సును ప్రకాశవంతం చేస్తుంది మరియు గాఢ సమావేశాల తర్వాత శక్తిని పెంచుతుంది.',
          bullets: [
            'కార్డ్స్ మరియు ఘన అవశేషాలను తొలగిస్తుంది',
            'ఆరా ప్రకాశవంతం చేసి కంపనను పెంచుతుంది',
            'సమూహాల తర్వాత లేదా భారమైన సెషన్ల తర్వాత ఉపయోగించండి',
            'ఫీల్డ్‌ను సీల చేయడానికి Motor Zanon తో అనుసరించండి',
          ],
        },
        {
          name: 'మోటర్ జానాన్',
          description: 'మోటర్ జానాన్ - ఏథెరిక్ రికార్డులను మరమ్మతు చేసి ఆరాను సీల్చేస్తుంది; శస్త్రచికిత్సా తర్వాత, ట్రామా తర్వాత మరియు తీవ్రమైన శక్తి పనుల తర్వాత ఉపయోగకరం.',
          bullets: [
            'ఆరాలో పాడులను మరమ్మతు చేసి సీలింగ్ చేస్తుంది',
            'ట్రామా లేదా శస్త్రచికిత్సా తర్వాత చాల మంచిది',
            'గడపల మరియు కంటైన్మెంట్ ని బలోపేతం చేస్తుంది',
            'సమతుల్యానికి OM లేదా Shanti తో ముగించండి',
          ],
        },
        {
          name: 'హొసన్నా',
          description: 'హొసన్నా - హృదయాన్ని మరియు ఆత్మను ఉద్దీపన పరుస్తుంది; ముఖ్యంగా సవాళ్ల సమయంలో ఆశ, నమ్మకం మరియు కృతజ్ఞతను పునరుద్ధరించుతుంది.',
          bullets: [
            'మూడ్ ను ఉత్ప్రేరేపించి ఆశను పునరుద్ధరించండి',
            'హృదయానికి కృతజ్ఞత మరియు భక్తిని ఆహ్వానిస్తుంది',
            'అసూయలు లేదా దుఃఖ సమయంలో సహాయకం',
            'ఉత్తేజన కోసం హృదయం మరియు క్రో్న్తో ఉంచండి',
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
