(function () {
  const knowledge = window.agriHydraKnowledge || {};

  const intentKeywords = {
    GREETING: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'namaste', 'namastey'],
    CASUAL_CONVERSATION: ['how are you', 'how are you doing', 'what can you do', 'what are you', 'thanks', 'thank you', 'goodbye', 'bye', 'see you', 'farewell'],
    WHO_ARE_YOU: ['who are you', 'who is this', 'what is your name'],
    WHAT_IS_AGRIHYDRA: ['what is agrihydra', 'what does agrihydra do', 'what is agrihydra solutions', 'agrihydra company'],
    COMPANY_OVERVIEW: ['company overview', 'about agrihydra', 'who is agrihydra'],
    POLYHOUSE: ['polyhouse', 'poly house', 'greenhouse', 'polyhous', 'polyhosue'],
    POLYHOUSE_TYPES: ['nvph', 'fan pad', 'shade net', 'multi span', 'walk in tunnel', 'retractable roof', 'polyhouse types', 'which structure'],
    POLYHOUSE_COST: ['how much does a polyhouse cost', 'what is polyhouse cost', 'polyhouse price', 'how much money do i need', 'cost per acre', 'investment', 'how much does it cost', 'how much does it cost?', 'polyhouse ki cost'],
    POLYHOUSE_INSTALLATION: ['installation time', 'how long does installation take', 'polyhouse installation', 'how is it installed', 'install polyhouse'],
    POLYHOUSE_MAINTENANCE: ['polyhouse maintenance', 'maintenance', 'do you provide maintenance', 'annual maintenance'],
    POLYHOUSE_LIFESPAN: ['how long does polyhouse last', 'lifetime', 'life of polyhouse', 'durability', 'structural life'],
    POLYHOUSE_CLADDING: ['cladding', 'poly film', 'uv film', 'roof film'],
    POLYHOUSE_STRUCTURE: ['structure', 'galvanized steel', 'frame'],
    DRIP_IRRIGATION: ['drip irrigation', 'drip', 'drip system', 'irrigation'],
    FERTIGATION: ['fertigation', 'nutrient dosing', 'fertilizer application'],
    WATER_SAVING: ['water saving', 'how much water can i save', 'save water', 'water efficiency'],
    IOT: ['iot', 'iot monitoring', 'farm sensor', 'sensors', 'dashboard', 'monitor my farm'],
    IOT_MONITORING: ['monitoring', 'soil moisture', 'temperature', 'humidity', 'irrigation scheduling', 'sm sensors'],
    SENSORS: ['sensor', 'soil sensor', 'moisture sensor', 'climate monitoring'],
    CLIMATE_CONTROL: ['climate control', 'fogging', 'ventilation', 'screen control'],
    IRRIGATION_SCHEDULING: ['irrigation scheduling', 'schedule irrigation'],
    SUBSIDY: ['subsidy', 'government support', 'government subsidy', 'scheme', 'subsidy kitni', 'subsidy kmga', 'govt subsidy'],
    PMKSY: ['pmksy', 'per drop more crop', 'pdmc'],
    PDMC: ['pdmc'],
    MIDH: ['midh', 'protected cultivation', 'what is midh'],
    STATE_SUBSIDY: ['state subsidy', 'state horticulture mission', 'state schemes'],
    SUBSIDY_ELIGIBILITY: ['am i eligible', 'eligibility', 'who can apply', 'eligible'],
    SUBSIDY_DOCUMENTS: ['documents required', 'what documents do i need', 'subsidy documents', 'aadhaar', 'land records'],
    SUBSIDY_APPLICATION: ['apply for subsidy', 'subsidy application', 'how to apply'],
    SUBSIDY_PROCESS: ['subsidy process', 'steps for subsidy', 'how does subsidy work'],
    FINANCING: ['financing', 'loan', 'loan mil sakta hai', 'can you finance me', 'emi', 'borrow money', 'money upfront', 'loans'],
    NBFC: ['nbfc', 'finance partner', 'bank loan', 'loan partner'],
    LOAN: ['loan', 'emi', 'bank loan', 'personal loan'],
    FARMER_COPAYMENT: ['farmer co-payment', 'farmer contribution', 'my share'],
    ESCROW: ['escrow'],
    ROI: ['roi', 'return on investment', 'what is roi', 'how much will i earn', 'profit', 'payback', 'how much can i earn', 'annual income'],
    YIELD: ['yield', 'yield improvement', 'production', 'how much yield'],
    PAYBACK: ['payback', 'payback period'],
    CROP_PROFITABILITY: ['crop profitability', 'profitability'],
    CROPS: ['crops', 'tomato', 'capsicum', 'cucumber', 'leafy greens', 'strawberry', 'which crop'],
    CUCUMBER: ['cucumber'],
    TOMATO: ['tomato'],
    CAPSICUM: ['capsicum'],
    LEAFY_GREENS: ['leafy greens', 'spinach', 'lettuce'],
    STRAWBERRY: ['strawberry'],
    HORTICULTURE: ['horticulture', 'fruit crop', 'vegetable crop', 'flower crop'],
    MARKET_LINKAGE: ['market linkage', 'buyers', 'buying', 'export', 'retailers', 'fpc', 'fpo', 'off-take', 'market access'],
    BUYERS: ['buyers', 'wholesale buyers', 'retailers', 'exporters'],
    FPC: ['fpc', 'fpo', 'farmer producer company'],
    RETAILERS: ['retailers'],
    EXPORT: ['export', 'exporter'],
    OFF_TAKE: ['off-take', 'offtake'],
    PROCESS: ['process', 'consultation', 'farm survey', 'soil testing', 'design', 'installation', 'training', 'amc'],
    CONSULTATION: ['consultation', 'book consultation', 'free farm survey'],
    FARM_SURVEY: ['farm survey', 'site survey', 'soil testing'],
    SOIL_TESTING: ['soil testing', 'soil test'],
    DESIGN: ['design', 'custom design'],
    INSTALLATION: ['installation', 'fabrication', 'erection'],
    TRAINING: ['training', 'farmer training'],
    AMC: ['amc', 'annual maintenance contract'],
    IRRIGATION_AS_A_SERVICE: ['irrigation as a service', 'as a service', 'subscription model'],
    PARTNERSHIP: ['partner with us', 'partnership', 'dealer', 'distributor', 'retailer', 'fpc', 'exporter'],
    DEALERS: ['dealer', 'dealers'],
    DISTRIBUTORS: ['distributor', 'distributors'],
    FPCS: ['fpcs', 'fpos'],
    ROI_CALCULATOR: ['roi calculator', 'calculate roi', 'estimate roi'],
    CONTACT: ['contact', 'phone', 'call', 'email', 'location', 'address', 'where are you located', 'phone number'],
    LOCATION: ['location', 'where are you located', 'office address', 'where is agrihydra'],
    PHONE: ['phone number', 'call', 'mobile number', 'phone'],
    EMAIL: ['email', 'gmail', 'e-mail'],
    LANGUAGE: ['hindi', 'english', 'hinglish', 'hi', 'hindi me'],
    UNKNOWN: ['who is the prime minister', 'what is the capital of france', 'weather today'],
    OUT_OF_SCOPE: ['prime minister', 'capital city', 'weather', 'football', 'movie']
  };

  const responseTemplates = {
    GREETING: [
      "Hello! 🌱 I'm the AgriHydra Assistant. I can help you understand polyhouses, drip irrigation, subsidies, financing, IoT monitoring, ROI, market linkage and how AgriHydra can help with your farm. What would you like to know?",
      "Hello! I'm the AgriHydra Assistant. How can I help with your farm today — polyhouse, drip, subsidy, financing or market linkage?",
      "Hi! 🌱 I'm the AgriHydra Assistant. I can guide you through protected cultivation, irrigation, government support and project planning."
    ],
    CASUAL_CONVERSATION: {
      'how are you': "I'm doing well, thank you! 🌱 I'm ready to help you explore AgriHydra's farming solutions. What are you working on — polyhouse cultivation, irrigation, subsidies, financing or something else?",
      'thanks': "You're welcome! 🌱 If you'd like, I can also help estimate what kind of AgriHydra solution may fit your farm.",
      'bye': "Goodbye! 🌱 Whenever you're ready to explore protected cultivation or precision irrigation, I'm here.",
      default: "I can help with AgriHydra's polyhouse, irrigation, subsidy, financing, IoT and market-linkage services. What would you like to explore?"
    },
    WHO_ARE_YOU: [
      "I'm the AgriHydra Assistant — a digital guide to AgriHydra's polyhouse, precision irrigation, IoT, subsidy, financing and market-linkage solutions.",
      "I'm the AgriHydra Assistant, helping farmers understand AgriHydra's protected-cultivation and water-smart farming services."
    ],
    WHAT_IS_AGRIHYDRA: [
      "AgriHydra Solutions is India's integrated polyhouse and precision-irrigation partner, helping farmers move toward protected, water-smart cultivation.",
      "AgriHydra combines polyhouse construction, drip irrigation, fertigation, IoT monitoring, subsidy support, financing facilitation and market linkage under one roof."
    ],
    COMPANY_OVERVIEW: [
      "AgriHydra Solutions helps farmers with protected cultivation and precision irrigation. The company brings together turnkey polyhouse EPC, drip and fertigation, IoT monitoring, subsidy support, financing assistance and market linkage.",
      "The core idea is simple: reduce water use, improve yields and make protected cultivation more manageable for farmers through a single integrated partner."
    ],
    POLYHOUSE: [
      "Yes — AgriHydra provides turnkey polyhouse solutions. You can get structural design, fabrication, cladding, installation, automation and optional IoT integration.",
      "AgriHydra designs and builds protected cultivation structures including NVPH, fan-pad systems, shade-net houses and multi-span polyhouses based on crop, climate and land conditions."
    ],
    POLYHOUSE_COST: [
      "AgriHydra's website gives an illustrative turnkey cost of around ₹18 lakh per acre before subsidy. Actual cost depends on structure type, cladding, automation, crop, location and site conditions.",
      "Polyhouse cost varies by structure, automation and region. A practical starting point is the website's illustrative ₹18 lakh per acre before subsidy, but the final figure depends on the farm and project design."
    ],
    POLYHOUSE_INSTALLATION: [
      "The typical installation timeline is approximately 4–8 weeks after survey approval, depending on project size and site conditions.",
      "After survey and design sign-off, AgriHydra typically moves into fabrication and installation, with timeline depending on structure size and site access."
    ],
    POLYHOUSE_MAINTENANCE: [
      "Yes — AgriHydra offers annual maintenance support for structures, irrigation systems and sensors. This helps protect the investment after handover.",
      "Maintenance can include structural checks, irrigation upkeep, cladding inspection and planned service support."
    ],
    POLYHOUSE_TYPES: [
      "The main polyhouse types include NVPH, fan-pad cooling, shade net house, multi-span polyhouse, walk-in tunnels and retractable roof structures. The right type depends on your climate, crop and budget.",
      "For example, NVPH suits moderate climates, fan-pad is often used in hot and dry regions, and shade net houses are lower-cost options for nurseries and shade-loving crops."
    ],
    POLYHOUSE_LIFESPAN: [
      "The website states a structural life of 15+ years for the galvanized steel frame, although actual durability depends on site conditions, maintenance and local climate exposure.",
      "The frame is designed for local wind and snow loads, and the cladding is UV-stabilized for field use."
    ],
    POLYHOUSE_CLADDING: [
      "AgriHydra uses UV-stabilized 200-micron poly film, with the website listing a 3–5 year warranty and light diffusion optimization.",
      "Cladding choice affects heat retention, light diffusion and durability, so it is matched to the crop and region."
    ],
    POLYHOUSE_STRUCTURE: [
      "The structure is built with galvanized steel and designed for local wind and snow loads. It is intended to be durable and suitable for protected cultivation.",
      "Structural design depends on site conditions, crop load and climate, which is why AgriHydra starts with a farm survey."
    ],
    DRIP_IRRIGATION: [
      "Yes — Drip irrigation is one of AgriHydra's core offerings. Networks are engineered according to crop, soil, land and irrigation requirements.",
      "A well-designed drip system helps apply water efficiently and can reduce water use materially when combined with proper scheduling and crop planning."
    ],
    FERTIGATION: [
      "Fertigation is a nutrient-dosing system integrated with irrigation. It helps feed the crop in line with growth stages and improves efficiency.",
      "AgriHydra can integrate fertigation into the irrigation design so nutrients and water are delivered more precisely."
    ],
    WATER_SAVING: [
      "AgriHydra's website references around 40% water saving versus conventional flood irrigation in many protected-cultivation setups, depending on crop and management.",
      "Water savings depend on the crop, climate, irrigation design and how closely the schedule matches plant demand."
    ],
    IOT: [
      "AgriHydra's IoT offering focuses on soil moisture, temperature, humidity and irrigation scheduling, with dashboard visibility and threshold alerts as part of the offering.",
      "The platform can help farmers monitor conditions remotely and make better irrigation and climate decisions, though exact availability depends on the project scope."
    ],
    IOT_MONITORING: [
      "IoT monitoring can support soil moisture tracking, temperature and humidity monitoring, irrigation scheduling and alerting based on set thresholds.",
      "This helps farmers respond earlier to stress, heat spikes or moisture drift, especially in protected cultivation."
    ],
    SENSORS: [
      "AgriHydra's monitoring concept includes soil moisture sensors, climate sensors and dashboard visibility. The exact sensor package depends on the project and site conditions.",
      "In many farms, soil and climate sensors help with irrigation decisions, climate control and early alerts."
    ],
    CLIMATE_CONTROL: [
      "Climate control may include venting, fogging and screen automation to manage temperature, humidity and crop stress inside the structure.",
      "AgriHydra can integrate automation with the polyhouse design based on the crop and local climate profile."
    ],
    IRRIGATION_SCHEDULING: [
      "Irrigation scheduling is usually based on soil moisture, crop stage, weather and the irrigation system design. This helps improve efficiency and reduce water waste.",
      "The right schedule varies by crop, season and local climate, and can be adjusted over time as the crop grows."
    ],
    SUBSIDY: [
      "AgriHydra helps farmers with subsidy eligibility, documentation and application support. The final amount depends on scheme, state, crop, project type and local subsidy norms.",
      "Subsidy percentages, ceilings and eligibility can change. Please confirm current rates with the relevant District Horticulture Office or AgriHydra's subsidy team.",
      "Would you like help checking whether your project may qualify, or would you like a list of the documents typically required?"
    ],
    PMKSY: [
      "PMKSY – Per Drop More Crop (PDMC) supports micro-irrigation such as drip and sprinkler systems. The website states up to 55% subsidy for small and marginal farmers in the scheme information.",
      "It is often used for irrigation improvement and water efficiency, especially when paired with fertigation and precision scheduling."
    ],
    MIDH: [
      "MIDH supports protected cultivation such as polyhouses, shade-net houses and plastic mulching. The website states up to 50% of structure cost in displayed scheme information.",
      "The exact subsidy depends on scheme norms, state share and project eligibility, so it is best confirmed with the relevant horticulture office."
    ],
    STATE_SUBSIDY: [
      "State horticulture missions often add top-ups to central schemes, and total support can be higher depending on state and project type.",
      "Because subsidy rules vary by state, the final support depends heavily on the project category and district-level sanctioning rules."
    ],
    SUBSIDY_ELIGIBILITY: [
      "Possible applicants include individual farmers, landowning farmers, tenant or lease-holding farmers with valid records, FPOs, SHGs, registered societies, cooperatives, agricultural entrepreneurs and horticulture growers.",
      "Not every applicant is automatically eligible; it depends on the scheme, project type and state-specific rules."
    ],
    SUBSIDY_DOCUMENTS: [
      "Common documents include Aadhaar Card, land records such as Khatauni/Khasra/7/12, bank passbook, passport-size photograph and an active Aadhaar-linked mobile number.",
      "Exact requirements may vary by scheme and state, so the final list should be confirmed before application."
    ],
    SUBSIDY_APPLICATION: [
      "AgriHydra can support eligibility checks, documentation preparation and application support. The full process usually begins with farm information, scheme matching and documentation review.",
      "The final application is typically routed through district or state horticulture channels, and approval remains subject to scheme norms and local verification."
    ],
    SUBSIDY_PROCESS: [
      "The process normally starts with consultation and farm survey, then eligibility checks, design and costing, documentation, application submission, and follow-up until disbursal.",
      "AgriHydra can help you navigate the documentation and liaison steps so the project is more subsidy-ready."
    ],
    FINANCING: [
      "AgriHydra facilitates structured financing through partner NBFCs and banks to help bridge the net-of-subsidy investment gap.",
      "The applicable terms depend on the project, lender and farmer profile, so I would not quote a rate without verified current information."
    ],
    NBFC: [
      "AgriHydra works with partner NBFCs and banks to help farmers structure financing for protected cultivation and precision-irrigation projects.",
      "This can be useful when the subsidy does not fully cover the upfront capital requirement."
    ],
    LOAN: [
      "AgriHydra can help explore loan facilitation options, but the final approval, terms and conditions depend on the lender, project and eligibility criteria.",
      "I don't have a verified current rate or loan limit to share, but financing is part of the service ecosystem."
    ],
    FARMER_COPAYMENT: [
      "Yes — farmer co-payment and financing support are relevant in many projects, especially when a subsidy covers part of the structure cost.",
      "The remaining investment can be planned with project costing and financing discussion."
    ],
    ESCROW: [
      "Escrow arrangements may be used in some project financing workflows, depending on the agreed structure and lender process.",
      "That is a project-specific financing detail, so the exact arrangement depends on the lender and the agreed commercial terms."
    ],
    ROI: [
      "AgriHydra's website indicates protected cultivation and precision irrigation can improve yields significantly and may reduce water use while improving off-season market potential. Actual results depend on crop, management, market price and local conditions.",
      "A quick estimate is useful, but the final return depends on crop choice, region, structure, inputs, water access and market conditions."
    ],
    YIELD: [
      "AgriHydra references a 3–10x yield potential in protected cultivation under suitable conditions. Real outcomes depend heavily on crop, management and region.",
      "For premium crops like cucumber, leafy greens and capsicum, protected cultivation can often improve quality and market timing."
    ],
    PAYBACK: [
      "AgriHydra's website suggests a typical payback of under 2 years in subsidized scenarios, but this is an illustrative benchmark and not a guarantee.",
      "Payback depends on crop, yields, market prices, subsidy, operating expenses and the actual farm conditions."
    ],
    CROP_PROFITABILITY: [
      "Profitability depends on crop, market prices, yield, quality and the cost of inputs. Protected cultivation can help improve timing and produce quality, but each crop needs a region-specific check.",
      "The best crop depends on your water availability, temperature range, labor access and buyer demand."
    ],
    CROPS: [
      "AgriHydra works with high-value horticulture crops such as cucumber, tomato, capsicum, leafy greens and strawberry, depending on climate and market demand.",
      "The right crop depends on region, water access, farm size and your target market."
    ],
    CUCUMBER: [
      "Cucumber is a strong polyhouse crop in many regions because it responds well to protected cultivation, climate control and off-season market access.",
      "Actual performance depends on the region, structure, management and local market conditions."
    ],
    TOMATO: [
      "Tomato is a common protected-cultivation crop and can do well when irrigation and climate control are managed well.",
      "The right structure and irrigation design matter a lot for yield quality and disease pressure."
    ],
    CAPSICUM: [
      "Capsicum is a high-value crop often suited to protected cultivation, especially where premium pricing and year-round demand are available.",
      "It performs best when water, climate and nutrition are tightly managed."
    ],
    LEAFY_GREENS: [
      "Leafy greens can be attractive for protected cultivation because they benefit from quality control and off-season demand.",
      "Your region, shade or climate control setup and buyer access will shape viability."
    ],
    STRAWBERRY: [
      "Strawberry can be a premium crop in protected cultivation, but it depends heavily on climate control, water availability and market access.",
      "It often requires a more careful management plan than a general vegetable crop."
    ],
    HORTICULTURE: [
      "Yes — AgriHydra supports horticulture crops including vegetables, fruits and high-value crops suited for protected cultivation.",
      "The exact crop recommendation should be based on your region, water source and target market."
    ],
    MARKET_LINKAGE: [
      "AgriHydra aims to connect farmers with Farmer Producer Companies, retailers, exporters, wholesale buyers and direct buyers to improve market access.",
      "Support can help with off-season market opportunities and better price realization, but it is not a guarantee of buyer availability or a guaranteed selling price."
    ],
    BUYERS: [
      "Buyer access may include wholesale buyers, retailers, exporters and direct buyers depending on the crop and aggregation model.",
      "This can improve demand visibility and reduce dependency on informal middlemen."
    ],
    FPC: [
      "Farmer Producer Companies and FPOs can be useful for aggregation, bulk production and collective market access.",
      "AgriHydra's market-linkage support can be especially relevant when a cluster of farmers is working toward shared sales channels."
    ],
    RETAILERS: [
      "Retailer linkage is relevant for quality produce, branded delivery and regular seasonal demand, especially for vegetables and premium horticulture crops.",
      "The actual buyer network depends on the crop, region and aggregation model."
    ],
    EXPORT: [
      "Export linkage can be relevant for suitable crops, but the actual channel depends on quality standards, volumes, certifications and the buyer network.",
      "AgriHydra's market-access support is best viewed as an ecosystem service rather than a guaranteed export contract."
    ],
    OFF_TAKE: [
      "Off-take support is part of the market-linkage approach, especially for protected cultivation where yield timing matters.",
      "This helps improve alignment between harvest timing and buyer demand."
    ],
    PROCESS: [
      "AgriHydra's process is consultation, farm survey, subsidy assistance, custom design and costing, fabrication and installation, climate and irrigation integration, handover and training, and then harvest and market linkage.",
      "The idea is a complete, accountable flow from farm assessment to crop production."
    ],
    CONSULTATION: [
      "The first step is usually a discussion of your land, crop goals, budget and site conditions. From there, AgriHydra can recommend a suitable structure and service package.",
      "That consultation is important because crop choice, climate and site conditions affect the final design."
    ],
    FARM_SURVEY: [
      "A farm survey looks at soil, water source, topography, wind exposure and terrain. This helps determine the right polyhouse or irrigation design.",
      "Survey data is essential because no two farms have the same design requirements."
    ],
    SOIL_TESTING: [
      "Soil testing helps establish the baseline for irrigation planning, fertility management and crop suitability.",
      "It is often part of an engineering and agronomy assessment before structure and irrigation design."
    ],
    DESIGN: [
      "The design stage includes structural layout, BOQ preparation and subsidy-aligned costing based on the crop and farm conditions.",
      "This is where the project becomes more accurate and less speculative."
    ],
    INSTALLATION: [
      "After design approval, the team moves into fabrication and on-site installation, with climate controls, drip and optional monitoring integrated as required.",
      "The actual timeline depends on the structure size and site conditions, but the website gives a typical 4–8 week range after survey approval."
    ],
    TRAINING: [
      "Training and handover are an important part of the AgriHydra process so the farmer knows how to operate the structure and irrigation system properly.",
      "Optional AMC support is also available to maintain the system beyond handover."
    ],
    AMC: [
      "AgriHydra offers an annual maintenance contract for structures, irrigation systems and sensors where appropriate.",
      "This helps maintain reliability and protect long-term performance."
    ],
    IRRIGATION_AS_A_SERVICE: [
      "Irrigation as a Service is a managed model where the farmer can access irrigation infrastructure and monitoring without a full upfront hardware purchase model.",
      "This can be useful where the farmer wants a lower initial capital burden while still accessing precision irrigation."
    ],
    PARTNERSHIP: [
      "AgriHydra works with distributors, dealers, FPOs, retailers and exporters across the agricultural ecosystem. You can reach out through the website's Partner With Us flow.",
      "A partnership is likely most suitable when your organization is active in agri services, distribution, production or market access."
    ],
    DEALERS: [
      "Dealer or channel partnerships can help extend AgriHydra's reach into regions and farmer clusters where installation and support are needed.",
      "The exact partner model depends on territory, crop and service coverage."
    ],
    DISTRIBUTORS: [
      "Distributors can play a role in hardware, farming inputs and local support for protected-cultivation projects.",
      "AgriHydra's approach is built around integrated service, so the partner model depends on the local ecosystem."
    ],
    ROI_CALCULATOR: [
      "The AgriHydra ROI calculator is a quick benchmark tool. It uses illustrative assumptions and can be useful for getting a broad sense of project economics.",
      "For a more precise estimate, a farm survey and project-specific costing are recommended."
    ],
    CONTACT: [
      "You can reach AgriHydra Solutions at 96505 60277 or 99101 96123. Email: globalexpressgroup@gmail.com.",
      "The office address is 13, Institutional Area, Lodhi Road, New Delhi 110 003."
    ],
    LOCATION: [
      "AgriHydra's office is in Lodhi Road, New Delhi. The provided address is 13, Institutional Area, Lodhi Road, New Delhi 110 003.",
      "You can also connect through the website's contact and consultation forms."
    ],
    PHONE: [
      "AgriHydra's phone numbers are 96505 60277 and 99101 96123.",
      "Use the website contact or consultation flow if you prefer to register your interest."
    ],
    EMAIL: [
      "AgriHydra's email is globalexpressgroup@gmail.com.",
      "You can also register for a consultation or project discussion through the website."
    ],
    LANGUAGE: [
      "Mainly English, but I can respond in Hinglish and Hindi where helpful. Ask in your preferred language and I’ll answer naturally.",
      "Aap Hinglish mein bhi pooch sakte ho — main aise hi jawab dunga."
    ],
    UNKNOWN: [
      "I'm focused on AgriHydra and farming solutions. I can help with polyhouses, irrigation, fertigation, subsidies, financing, IoT monitoring, ROI and market linkage.",
      "For specific questions outside AgriHydra's services, I can help redirect to the right farm or project discussion instead."
    ],
    OUT_OF_SCOPE: [
      "I'm focused on AgriHydra and agriculture solutions. I can help with polyhouses, irrigation, fertigation, subsidies, financing, IoT monitoring, ROI and market linkage.",
      "If you want information about your farm or project, I can help with that."
    ]
  };

  function normalizeText(value) {
    if (!value) return '';
    return String(value)
      .toLowerCase()
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[^a-z0-9\s\u0900-\u097f%]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function hasAny(text, terms) {
    if (!text) return false;
    return terms.some((term) => text.includes(term));
  }

  function scoreIntent(text, contextText) {
    const normalized = normalizeText(text);
    const context = normalizeText(contextText || '');

    if (!normalized) return 'UNKNOWN';

    // Direct, high-confidence intent checks first.
    if (/(^|\s)(hi|hello|hey|namaste|good morning|good evening)(\s|$)/.test(normalized)) return 'GREETING';
    if (/(thank you|thanks|bye|goodbye|see you)/.test(normalized)) return 'CASUAL_CONVERSATION';
    if (/(how are you|how are you doing|what can you do|what are you)/.test(normalized)) return 'CASUAL_CONVERSATION';
    if (/(who are you|who is this|what is your name)/.test(normalized)) return 'WHO_ARE_YOU';
    if (/(what is agrihydra|what does agrihydra do|who is agrihydra|about agrihydra)/.test(normalized)) return 'WHAT_IS_AGRIHYDRA';
    if (/(what is your phone number|what are your phone numbers|what is your email|where are you located|phone number|phone numbers|call me|email|location|address)/.test(normalized)) return 'CONTACT';
    if (/(partner with us|partnership|dealer|distributor|retailer|exporter|partner)/.test(normalized)) return 'PARTNERSHIP';
    if (/(pmksy|per drop more crop|pdmc)/.test(normalized)) return 'PMKSY';
    if (/(what is midh|midh)/.test(normalized)) return 'MIDH';
    if (/(loan|finance|financing|emi|nbfc|money upfront|dont have enough money|mil sakta hai|loan mil sakta)/.test(normalized)) return 'FINANCING';
    if (/(subsidy|grant|government support|govt|scheme|state subsidy|subsidy kitni|milegi|cm)/.test(normalized) && /(documents|aadhaar|land records|khatauni|khasra|7 12|eligibility|apply|application|kitni|milegi)/.test(normalized)) {
      if (/(documents|aadhaar|land records|khatauni|khasra|7 12)/.test(normalized)) return 'SUBSIDY_DOCUMENTS';
      if (/(apply|application|how to apply|process|steps)/.test(normalized)) return 'SUBSIDY_APPLICATION';
      if (/(eligibility|eligible|who can apply)/.test(normalized)) return 'SUBSIDY_ELIGIBILITY';
      return 'SUBSIDY';
    }
    if (/(subsidy|grant|government support|govt|scheme|subsidy kitni|milegi)/.test(normalized)) return 'SUBSIDY';
    if (/(polyhouse|poly house|greenhouse|polyhous|polyhosue)/.test(normalized) && /(cost|price|investment|money|kitna|paisa|budget|laga|lagta)/.test(normalized)) return 'POLYHOUSE_COST';
    if (/(polyhouse|poly house|greenhouse|polyhous|polyhosue)/.test(normalized) && /(maintain|maintenance|amc|repair)/.test(normalized)) return 'POLYHOUSE_MAINTENANCE';
    if (/(how long|installation time|weeks|timeline|after survey|install)/.test(normalized) && /(polyhouse|greenhouse|structure|install)/.test(normalized)) return 'POLYHOUSE_INSTALLATION';
    if (/(water saving|water efficiency|how much water can i save|save water)/.test(normalized)) return 'WATER_SAVING';
    if (/(nvph|fan pad|shade net|multi span|walk in tunnel|retractable roof|polyhouse types|which structure)/.test(normalized)) return 'POLYHOUSE_TYPES';
    if (/(market linkage|buyers|fpc|fpo|retailers|export|off take|market access|do you provide market linkage)/.test(normalized)) return 'MARKET_LINKAGE';
    if (/(iot|sensor|soil moisture|temperature|humidity|dashboard|monitor my farm|what is iot|kya hota hai)/.test(normalized)) return 'IOT';
    if (/(drip|irrigation|drip irrigation)/.test(normalized) && !/(what is|how much)/.test(normalized)) return 'DRIP_IRRIGATION';
    if (/(tomato|capsicum|cucumber|leafy greens|strawberry|crop|grow karu|kaunsi crop|which crop|grow cucumber)/.test(normalized)) return 'CROPS';
    if (/(roi|return on investment|payback|profit|how much will i earn|how much can i earn|earn)/.test(normalized)) return 'ROI';
    if (/(i have .*\d+.*acres?|\d+\s*acres?|\d+\s*acre)/.test(normalized)) return 'CROPS';
    if (/(what can you do|what are you)/.test(normalized)) return 'CASUAL_CONVERSATION';
    if (/(who is the prime minister|capital of france|weather today|movie|football)/.test(normalized)) return 'OUT_OF_SCOPE';

    let bestIntent = 'UNKNOWN';
    let highestScore = -1;

    Object.entries(intentKeywords).forEach(([intent, keywords]) => {
      let score = 0;
      keywords.forEach((keyword) => {
        if (!keyword) return;
        if (normalized.includes(keyword)) score += 4;
      });

      if (intent === 'SUBSIDY' && /\b(subsidy|grant|support|scheme)\b/.test(normalized)) score += 2;
      if (intent === 'FINANCING' && /(loan|emi|finance|money up front|dont have enough money)/.test(normalized)) score += 2;
      if (intent === 'ROI' && /(earn|profit|payback|roi|investment)/.test(normalized)) score += 2;
      if (intent === 'CROPS' && /(which crop|crop|grow cucumber|grow tomato|grow capsicum)/.test(normalized)) score += 2;

      if (context && /(polyhouse|horticulture|subsidy|loan|roi)/.test(context) && /what about/.test(normalized)) {
        if (intent === 'SUBSIDY' && /subsidy/.test(normalized)) score += 3;
        if (intent === 'FINANCING' && /finance|loan|emi/.test(normalized)) score += 3;
        if (intent === 'POLYHOUSE_COST' && /cost|price|investment/.test(normalized)) score += 3;
      }

      if (score > highestScore) {
        highestScore = score;
        bestIntent = intent;
      }
    });

    return highestScore > 0 ? bestIntent : 'UNKNOWN';
  }

  function extractEntities(text) {
    const normalized = normalizeText(text);
    const entities = {
      acres: null,
      crop: null,
      state: null,
      askAboutCost: false,
      askAboutSubsidy: false
    };

    const acresMatch = normalized.match(/(\d+(?:\.\d+)?)\s*(?:acres?|acre|ac)/i);
    if (acresMatch) entities.acres = Number(acresMatch[1]);

    const states = ['rajasthan', 'maharashtra', 'karnataka', 'telangana', 'gujarat'];
    const foundState = states.find((state) => normalized.includes(state));
    if (foundState) entities.state = foundState;

    const crops = ['cucumber', 'tomato', 'capsicum', 'leafy greens', 'strawberry', 'leafy', 'green'];
    const foundCrop = crops.find((crop) => normalized.includes(crop));
    if (foundCrop) entities.crop = foundCrop;

    if (/(cost|price|investment|money|kitna|paisa|lagta|laga)/.test(normalized)) entities.askAboutCost = true;
    if (/(subsidy|grant|scheme|govt|government)/.test(normalized)) entities.askAboutSubsidy = true;

    return entities;
  }

  function getFollowUps(intent, entities) {
    const map = {
      POLYHOUSE: ['Which polyhouse is right for my climate?', 'How much does a polyhouse cost?', 'How long does installation take?'],
      POLYHOUSE_COST: ['Which polyhouse is right for my climate?', 'What documents do I need?', 'Do you provide financing?'],
      SUBSIDY: ['What documents do I need?', 'Can AgriHydra handle the application?', 'Do you provide financing?'],
      FINANCING: ['How much subsidy can I get?', 'Which polyhouse fits my budget?', 'Can you help with the project estimate?'],
      DRIP_IRRIGATION: ['How much water can I save?', 'Can I do drip without a polyhouse?', 'Do you provide maintenance?'],
      IOT: ['How does IoT help?', 'Do you provide maintenance?', 'Can I monitor my farm from my phone?'],
      ROI: ['What documents do I need?', 'How much does a polyhouse cost?', 'Can you help with subsidy eligibility?'],
      CROPS: ['Which polyhouse suits my crop?', 'How much subsidy can I get?', 'How do I register interest?'],
      CONTACT: ['How much subsidy can I get?', 'Can you guide me on ROI?', 'Where is your office?'],
      default: ['How much does a polyhouse cost?', 'How much subsidy can I get?', 'Do you provide financing?']
    };

    return map[intent] || map.default;
  }

  function addContextualLead(text, context) {
    if (!context || !context.lastUserText) return text;
    const last = normalizeText(context.lastUserText);
    if (/\b(polyhouse|greenhouse|structure)\b/.test(last) && /subsidy/.test(normalizeText(text))) {
      return "Because you are asking about a polyhouse project, subsidy support is relevant here. " + text;
    }
    if (/\b(2\s*acres?|acre|acres)\b/.test(last) && /\b(crop|grow|plant|cucumber|tomato|capsicum)\b/.test(normalizeText(text))) {
      return "With 2 acres, the best setup depends on crop, climate and water access. " + text;
    }
    return text;
  }

  function buildResponse(intent, text, context, entities) {
    const base = knowledge || {};
    const cleanedText = normalizeText(text);
    const lang = /\b(kitni|hai|hai\?|kya|mila|mil sakta|drip|loan|crop)\b/.test(cleanedText) ? 'hi' : 'en';

    if (intent === 'GREETING') {
      return responseTemplates.GREETING[Math.floor(Math.random() * responseTemplates.GREETING.length)];
    }

    if (intent === 'CASUAL_CONVERSATION') {
      const lookups = {
        'how are you': responseTemplates.CASUAL_CONVERSATION['how are you'],
        'thank you': responseTemplates.CASUAL_CONVERSATION['thanks'],
        'thanks': responseTemplates.CASUAL_CONVERSATION['thanks'],
        'bye': responseTemplates.CASUAL_CONVERSATION['bye'],
        'goodbye': responseTemplates.CASUAL_CONVERSATION['bye']
      };
      const matchKey = Object.keys(lookups).find((key) => cleanedText.includes(key));
      return lookups[matchKey] || responseTemplates.CASUAL_CONVERSATION.default;
    }

    if (intent === 'WHO_ARE_YOU') {
      return responseTemplates.WHO_ARE_YOU[Math.floor(Math.random() * responseTemplates.WHO_ARE_YOU.length)];
    }

    if (intent === 'WHAT_IS_AGRIHYDRA' || intent === 'COMPANY_OVERVIEW') {
      return responseTemplates.WHAT_IS_AGRIHYDRA[Math.floor(Math.random() * responseTemplates.WHAT_IS_AGRIHYDRA.length)];
    }

    if (intent === 'POLYHOUSE') {
      return responseTemplates.POLYHOUSE[Math.floor(Math.random() * responseTemplates.POLYHOUSE.length)];
    }

    if (intent === 'POLYHOUSE_COST') {
      return addContextualLead(responseTemplates.POLYHOUSE_COST[Math.floor(Math.random() * responseTemplates.POLYHOUSE_COST.length)], context);
    }

    if (intent === 'POLYHOUSE_TYPES') {
      return responseTemplates.POLYHOUSE_TYPES[Math.floor(Math.random() * responseTemplates.POLYHOUSE_TYPES.length)];
    }

    if (intent === 'POLYHOUSE_INSTALLATION') {
      return responseTemplates.POLYHOUSE_INSTALLATION[Math.floor(Math.random() * responseTemplates.POLYHOUSE_INSTALLATION.length)];
    }

    if (intent === 'POLYHOUSE_MAINTENANCE') {
      return responseTemplates.POLYHOUSE_MAINTENANCE[Math.floor(Math.random() * responseTemplates.POLYHOUSE_MAINTENANCE.length)];
    }

    if (intent === 'POLYHOUSE_LIFESPAN') {
      return responseTemplates.POLYHOUSE_LIFESPAN[Math.floor(Math.random() * responseTemplates.POLYHOUSE_LIFESPAN.length)];
    }

    if (intent === 'POLYHOUSE_CLADDING') {
      return responseTemplates.POLYHOUSE_CLADDING[Math.floor(Math.random() * responseTemplates.POLYHOUSE_CLADDING.length)];
    }

    if (intent === 'POLYHOUSE_STRUCTURE') {
      return responseTemplates.POLYHOUSE_STRUCTURE[Math.floor(Math.random() * responseTemplates.POLYHOUSE_STRUCTURE.length)];
    }

    if (intent === 'DRIP_IRRIGATION') {
      return responseTemplates.DRIP_IRRIGATION[Math.floor(Math.random() * responseTemplates.DRIP_IRRIGATION.length)];
    }

    if (intent === 'FERTIGATION') {
      return responseTemplates.FERTIGATION[Math.floor(Math.random() * responseTemplates.FERTIGATION.length)];
    }

    if (intent === 'WATER_SAVING') {
      return responseTemplates.WATER_SAVING[Math.floor(Math.random() * responseTemplates.WATER_SAVING.length)];
    }

    if (intent === 'IOT' || intent === 'IOT_MONITORING' || intent === 'SENSORS' || intent === 'CLIMATE_CONTROL' || intent === 'IRRIGATION_SCHEDULING') {
      return responseTemplates.IOT[Math.floor(Math.random() * responseTemplates.IOT.length)];
    }

    if (intent === 'SUBSIDY' || intent === 'PMKSY' || intent === 'MIDH' || intent === 'STATE_SUBSIDY' || intent === 'SUBSIDY_ELIGIBILITY' || intent === 'SUBSIDY_DOCUMENTS' || intent === 'SUBSIDY_APPLICATION' || intent === 'SUBSIDY_PROCESS') {
      const subsidytext = responseTemplates.SUBSIDY[Math.floor(Math.random() * responseTemplates.SUBSIDY.length)];
      if (lang === 'hi') {
        return "Subsidy state aur scheme ke hisaab se vary karti hai. AgriHydra ki website ke according, kuch protected-cultivation projects mein support 60% tak ho sakta hai, lekin exact eligibility aur amount state, scheme aur project par depend karega.\n\nSubsidy percentages, ceilings and eligibility can change. Please confirm current rates with the relevant District Horticulture Office or AgriHydra's subsidy team.";
      }
      return subsidytext;
    }

    if (intent === 'FINANCING' || intent === 'NBFC' || intent === 'LOAN' || intent === 'FARMER_COPAYMENT' || intent === 'ESCROW') {
      return responseTemplates.FINANCING[Math.floor(Math.random() * responseTemplates.FINANCING.length)];
    }

    if (intent === 'ROI' || intent === 'YIELD' || intent === 'PAYBACK' || intent === 'CROP_PROFITABILITY') {
      return responseTemplates.ROI[Math.floor(Math.random() * responseTemplates.ROI.length)];
    }

    if (intent === 'CROPS' || intent === 'CUCUMBER' || intent === 'TOMATO' || intent === 'CAPSICUM' || intent === 'LEAFY_GREENS' || intent === 'STRAWBERRY' || intent === 'HORTICULTURE') {
      if (/(polyhouse|greenhouse|structure)/.test(cleanedText) && /(cucumber|tomato|capsicum|leafy|strawberry)/.test(cleanedText)) {
        return "For a cucumber polyhouse project, the best fit depends on your region, climate and water access. In many cases, a well-designed protected structure with climate control and drip irrigation improves yield consistency and quality. If you share your acreage, state and water availability, I can suggest a more suitable setup.";
      }
      return responseTemplates.CROPS[Math.floor(Math.random() * responseTemplates.CROPS.length)];
    }

    if (intent === 'MARKET_LINKAGE' || intent === 'BUYERS' || intent === 'FPC' || intent === 'RETAILERS' || intent === 'EXPORT' || intent === 'OFF_TAKE') {
      return responseTemplates.MARKET_LINKAGE[Math.floor(Math.random() * responseTemplates.MARKET_LINKAGE.length)];
    }

    if (intent === 'PROCESS' || intent === 'CONSULTATION' || intent === 'FARM_SURVEY' || intent === 'SOIL_TESTING' || intent === 'DESIGN' || intent === 'INSTALLATION' || intent === 'TRAINING' || intent === 'AMC') {
      return responseTemplates.PROCESS[Math.floor(Math.random() * responseTemplates.PROCESS.length)];
    }

    if (intent === 'IRRIGATION_AS_A_SERVICE') {
      return responseTemplates.IRRIGATION_AS_A_SERVICE[Math.floor(Math.random() * responseTemplates.IRRIGATION_AS_A_SERVICE.length)];
    }

    if (intent === 'PARTNERSHIP' || intent === 'DEALERS' || intent === 'DISTRIBUTORS' || intent === 'FPCS' || intent === 'RETAILERS' || intent === 'EXPORTERS') {
      return responseTemplates.PARTNERSHIP[Math.floor(Math.random() * responseTemplates.PARTNERSHIP.length)];
    }

    if (intent === 'ROI_CALCULATOR') {
      return responseTemplates.ROI_CALCULATOR[Math.floor(Math.random() * responseTemplates.ROI_CALCULATOR.length)];
    }

    if (intent === 'CONTACT' || intent === 'LOCATION' || intent === 'PHONE' || intent === 'EMAIL') {
      return responseTemplates.CONTACT[Math.floor(Math.random() * responseTemplates.CONTACT.length)];
    }

    if (intent === 'LANGUAGE') {
      return responseTemplates.LANGUAGE[Math.floor(Math.random() * responseTemplates.LANGUAGE.length)];
    }

    if (intent === 'OUT_OF_SCOPE' || intent === 'UNKNOWN') {
      return responseTemplates.UNKNOWN[Math.floor(Math.random() * responseTemplates.UNKNOWN.length)];
    }

    return "I can help with polyhouses, drip irrigation, fertigation, subsidies, financing, IoT monitoring, ROI and market linkage. What would you like to know?";
  }

  function generateReply(userText, history) {
    const context = history && history.length ? {
      lastUserText: history.filter((msg) => msg.role === 'user').slice(-1)[0]?.text || ''
    } : {};

    const intent = scoreIntent(userText, context.lastUserText);
    const entities = extractEntities(userText);
    const text = buildResponse(intent, userText, context, entities);
    const suggestions = getFollowUps(intent, entities);

    return {
      intent,
      text,
      suggestions
    };
  }

  window.AgriHydraChatEngine = {
    normalizeText,
    scoreIntent,
    generateReply,
    extractEntities,
    getFollowUps,
    knowledge
  };
})();
