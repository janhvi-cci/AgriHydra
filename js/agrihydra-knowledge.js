(function () {
  const knowledge = {
    company: {
      name: 'AgriHydra Solutions',
      positioning: "India's integrated polyhouse and precision-irrigation partner.",
      proposition: 'Water-smart, protected cultivation. Multiplied incomes for farmers.',
      summary: 'AgriHydra combines turnkey polyhouse construction, drip irrigation, fertigation, IoT monitoring, subsidy facilitation, NBFC financing assistance, agronomy advisory, market linkage and annual maintenance.',
      problemAreas: [
        'water scarcity',
        'falling groundwater levels',
        'erratic rainfall',
        'climate variability',
        'heatwaves',
        'unseasonal storms',
        'pest pressure',
        'high initial infrastructure costs',
        'complex subsidy processes',
        'poor market access',
        'fragmented support from multiple vendors'
      ],
      value: {
        yieldPotential: '3–10x higher yield potential',
        waterSavings: '40% water savings',
        subsidyPotential: 'up to 60% government subsidy depending on scheme, state and project',
        note: 'These are illustrative and depend on crop, location, structure and farm conditions.'
      }
    },
    services: {
      polyhouse: 'Turnkey polyhouse construction with design, fabrication, cladding and automation.',
      drip: 'Precision drip irrigation engineered for crop, soil, land and irrigation requirements.',
      fertigation: 'Automated nutrient dosing aligned with crop growth stages.',
      iot: 'Monitoring for soil moisture, temperature, humidity and irrigation scheduling.',
      subsidy: 'Eligibility checks, documentation, application support, liaison and disbursal tracking.',
      financing: 'Structured financing facilitation through partner NBFCs and banks.',
      marketLinkage: 'Connections to buyers, FPCs/FPOs, retailers and exporters.',
      maintenance: 'Annual maintenance for structures, irrigation systems and sensors.',
      irrigationAsAService: 'Managed irrigation through a subscription or pay-per-use model.'
    },
    polyhouse: {
      types: {
        nvph: 'Naturally Ventilated Polyhouse (NVPH) uses passive airflow through ridge and side vents and suits moderate climates.',
        fanPad: 'Fan & pad cooling uses evaporative cooling. The website notes it can hold internal temperature around 8–12°C below ambient for heat-sensitive crops, but actual performance depends on farm conditions.',
        shadeNet: 'Shade net houses are lower-cost UV-stabilized structures useful for nursery raising, floriculture and shade-loving crops.',
        multiSpan: 'Multi-span polyhouses are gutter-connected commercial structures designed to maximize covered area.',
        walkInTunnel: 'Walk-in tunnels are lower-cost, quick-install structures for season extension, pilot plots and testing before larger expansion.',
        retractableRoof: 'Retractable roof systems use motorized roof and side curtains to open in favourable weather.'
      },
      materials: {
        frame: 'Galvanized steel frame, hot-dip galvanized and designed for local wind and snow loads.',
        cladding: 'UV-stabilized 200-micron poly film with 3–5 year warranty on website and light diffusion optimization.',
        automation: 'Optional fogging, ventilation, screen control and IoT integration.'
      },
      process: [
        'Consultation',
        'Farm survey',
        'Subsidy assistance',
        'Custom design and costing',
        'Fabrication and installation',
        'Climate and irrigation integration',
        'Handover and training',
        'IoT monitoring',
        'Harvest',
        'Market linkage'
      ],
      installationTimeline: 'Typical installation can take approximately 4–8 weeks after survey approval, depending on size and site conditions.'
    },
    irrigation: {
      drip: 'Drip irrigation is a precision network designed for crop, soil, land and irrigation needs.',
      fertigation: 'Fertigation adds nutrients through the irrigation line, aligned with crop growth stages.',
      waterSavings: 'AgriHydra highlights potential water saving of around 40% compared with conventional flood irrigation, depending on crop and method.'
    },
    subsidies: {
      pmksy: 'PMKSY – Per Drop More Crop (PDMC) supports micro-irrigation such as drip and sprinkler. The website states up to 55% subsidy for small and marginal farmers in the scheme information.',
      midh: 'MIDH – Protected Cultivation supports protected cultivation such as polyhouses and shade-net houses. The website indicates up to 50% of structure cost in displayed scheme information.',
      state: 'State horticulture mission schemes may offer top-ups and vary widely by state and project.',
      mustSay: 'Subsidy percentages, ceilings and eligibility can change. Please confirm current rates with the relevant District Horticulture Office or AgriHydra\'s subsidy team.',
      documents: [
        'Aadhaar Card',
        'Land records such as Khatauni, Khasra or 7/12 extract',
        'Bank passbook',
        'Passport-size photograph',
        'Active Aadhaar-linked mobile number'
      ],
      eligibleApplicants: [
        'Individual farmers',
        'Landowning farmers',
        'Tenant or lease-holding farmers with valid records',
        'FPOs',
        'SHGs',
        'Registered societies',
        'Cooperatives',
        'Agriculture entrepreneurs',
        'Horticulture growers'
      ]
    },
    financing: {
      summary: 'AgriHydra facilitates structured financing through partner NBFCs and banks to bridge the net-of-subsidy investment gap.',
      note: 'I do not have a verified current interest rate to share. AgriHydra facilitates financing through partner NBFCs and banks, and the applicable terms depend on the project and lender.',
      types: ['NBFC financing', 'loan facilitation', 'farmer co-payment financing', 'escrow management']
    },
    roi: {
      illustrativeCost: 'Illustrative turnkey cost is approximately ₹18,00,000 per acre before subsidy.',
      keyMetrics: {
        yieldImprovement: 'The website communicates 3–5x yield improvement in protected cultivation and precision irrigation for select high-demand crops.',
        waterSaving: 'Around 40% water savings is commonly referenced.',
        payback: 'The website indicates typically less than 2 years in subsidized scenarios, but actual payback depends on crop, market price and operational efficiency.'
      },
      unitEconomics: 'Pitch-deck illustrative unit economics: a 4,000 sqm polyhouse with ₹36 lakh total cost, 60% subsidy, farmer co-payment ₹14.4 lakh, and EPC gross margin of 20%. This is illustrative and not a guaranteed farmer quotation.'
    },
    crops: {
      cucumber: 'Cucumber is a strong candidate for protected cultivation and can benefit from year-round off-season production.',
      tomato: 'Tomato is commonly grown in protected structures and responds well to climate control and drip irrigation.',
      capsicum: 'Capsicum is suited to protected cultivation and often benefits from high-value market access.',
      leafyGreens: 'Leafy greens can do well in protected cultivation and often have good off-season demand.',
      strawberry: 'Strawberry can be a premium crop in controlled conditions, depending on climate and market access.',
      horticulture: 'Protected cultivation can work well for vegetables, flowers and high-value horticulture crops.',
      suitability: 'Crop suitability depends on region, climate, soil, water, market demand and your protected-cultivation setup.'
    },
    marketLinkage: {
      summary: 'AgriHydra aims to connect farmers with Farmer Producer Companies, retailers, exporters, wholesale buyers and direct buyers.',
      note: 'This is an opportunity support service, not a guarantee of buyer availability or guaranteed prices.'
    },
    process: {
      consultation: 'Understand land, crop goals and budget.',
      survey: 'Assess soil, water source, topography, wind exposure and terrain.',
      subsidyAssistance: 'Check eligibility, prepare documents and coordinate with government departments.',
      design: 'Prepare structural design, BOQ and subsidy-aligned costing.',
      installation: 'Factory-fabricated components installed by trained teams.',
      training: 'Farmer handover and training, plus optional AMC.',
      monitoring: 'Sensors and dashboard provide visibility on soil and climate conditions.',
      marketLinkage: 'Support for buyer access and produce aggregation.'
    },
    contact: {
      phone: ['96505 60277', '99101 96123'],
      email: 'globalexpressgroup@gmail.com',
      office: '13, Institutional Area, Lodhi Road, New Delhi 110 003',
      ctaLabels: ['Book Consultation', 'Register as Farmer', 'Partner With Us', 'Register Interest']
    },
    faq: [
      'AgriHydra helps farmers move toward protected, water-smart cultivation.',
      'Many projects are eligible for central and state horticulture support depending on scheme and state.',
      'The right polyhouse depends on climate, crop, land size, water source and budget.'
    ]
  };

  window.agriHydraKnowledge = knowledge;
})();
