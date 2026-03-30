export interface Fund {
  slug: string;
  name: string;
  organization: string;
  description: string;
  category: "Community" | "Arts & Film" | "International" | "Faith" | "Education" | "Environment";
  country: string;
  fundraiseUpCampaignId: string;
  impactStats: Array<{ value: string; label: string }>;
  impactBullets: string[];
  status: "active" | "featured";
}

export const FUNDS: Fund[] = [
  {
    slug: "sun-country-giving-fund",
    name: "Sun Country Giving Fund",
    organization: "Sun Country Airlines",
    description:
      "The Sun Country Giving Fund connects communities across the country through the power of generosity and flight. We support neighbors in need — from emergency relief to local youth programs — ensuring that everyone has a chance to thrive. Sun Country Airlines believes in the communities we serve, and this fund is our commitment to lifting them up.",
    category: "Community",
    country: "United States",
    fundraiseUpCampaignId: "PLACEHOLDER_001",
    impactStats: [
      { value: "$2.4M+", label: "Donated to date" },
      { value: "120+", label: "Communities reached" },
      { value: "15,000+", label: "Individuals supported" },
    ],
    impactBullets: [
      "Fund emergency relief grants for families displaced by natural disasters",
      "Support youth aviation programs that inspire the next generation of pilots",
      "Provide meals and essentials to food-insecure households near our hubs",
      "Sponsor community events that bring neighbors together across the country",
    ],
    status: "featured",
  },
  {
    slug: "what-you-deserve-film",
    name: "What You Deserve Production Fund",
    organization: "What You Deserve",
    description:
      "What You Deserve is an independent film that explores the intersecting lives of three strangers navigating love, loss, and second chances in a rapidly changing city. Your contribution directly funds production costs, crew salaries, and post-production so this story can reach audiences everywhere. Every dollar moves us closer to premiering a film that reflects the full complexity of the human experience.",
    category: "Arts & Film",
    country: "United States",
    fundraiseUpCampaignId: "PLACEHOLDER_002",
    impactStats: [
      { value: "85%", label: "Production funded" },
      { value: "40+", label: "Crew members employed" },
      { value: "6", label: "Months in production" },
    ],
    impactBullets: [
      "Support independent crew members, actors, and artists earning fair wages",
      "Help bring a culturally authentic story to film festivals and streaming audiences",
      "Fund post-production sound, color, and visual effects for a polished final cut",
      "Enable community screening events in underserved neighborhoods",
    ],
    status: "active",
  },
  {
    slug: "uncharitable-documentary",
    name: "UnCharitable Documentary Fund",
    organization: "UnCharitable",
    description:
      "UnCharitable is a feature documentary challenging the conventional wisdom about how nonprofits should operate — and why overhead ratios are the wrong way to measure impact. Based on Dan Pallotta's landmark TED Talk and book, the film makes the case for a bold new era of philanthropy. Your donation funds finishing the documentary and bringing it to audiences, policymakers, and the next generation of nonprofit leaders.",
    category: "Arts & Film",
    country: "United States",
    fundraiseUpCampaignId: "PLACEHOLDER_003",
    impactStats: [
      { value: "4M+", label: "TED Talk views that inspired the film" },
      { value: "30+", label: "Expert interviews filmed" },
      { value: "10", label: "Cities on the festival circuit" },
    ],
    impactBullets: [
      "Fund final editing, sound mixing, and distribution costs for the documentary",
      "Bring the film to college campuses, philanthropy conferences, and faith communities",
      "Spark a national conversation about reimagining the rules of giving",
      "Equip nonprofit leaders with a shareable tool to advocate for fair funding practices",
    ],
    status: "active",
  },
  {
    slug: "global-education-initiative",
    name: "Global Education Initiative",
    organization: "International Learning Collective",
    description:
      "The Global Education Initiative provides learning materials, trained teachers, and digital access to students in underserved Kenyan communities. We believe every child deserves the tools to build a better future, regardless of where they were born. Your gift directly funds classroom construction, curriculum development, and teacher training that transforms lives.",
    category: "International",
    country: "Kenya",
    fundraiseUpCampaignId: "PLACEHOLDER_004",
    impactStats: [
      { value: "4,200+", label: "Students enrolled" },
      { value: "18", label: "Schools supported" },
      { value: "92%", label: "Graduation rate" },
    ],
    impactBullets: [
      "Provide textbooks, school supplies, and uniforms to students in need",
      "Train and pay local teachers with competitive, dignified wages",
      "Build and repair classroom infrastructure in rural communities",
      "Connect schools to digital learning resources and the wider world",
    ],
    status: "active",
  },
  {
    slug: "faith-community-scholarships",
    name: "Faith Community Scholarship Fund",
    organization: "Cornerstone Community Church",
    description:
      "The Faith Community Scholarship Fund awards need-based scholarships to members of Cornerstone Community Church pursuing higher education and vocational training. We believe faith and education go hand in hand — empowering individuals to serve their communities with skill, wisdom, and purpose. Donors to this fund invest in the next generation of faith-driven leaders.",
    category: "Faith",
    country: "United States",
    fundraiseUpCampaignId: "PLACEHOLDER_005",
    impactStats: [
      { value: "85", label: "Scholarships awarded" },
      { value: "$1.1M", label: "In education funding" },
      { value: "97%", label: "Scholars completing programs" },
    ],
    impactBullets: [
      "Award need-based scholarships to college and trade-school students",
      "Provide mentorship pairing each scholar with a community leader",
      "Cover tuition, books, and living stipends so students can focus on studies",
      "Celebrate scholars at annual community recognition events",
    ],
    status: "active",
  },
  {
    slug: "young-artists-collective",
    name: "Young Artists Collective",
    organization: "Young Artists Collective",
    description:
      "The Young Artists Collective nurtures the creative potential of youth ages 12–24 through free workshops, mentorship, and public exhibitions. We remove financial barriers so that talent — not zip code — determines who gets to create. From mural projects to short films, our artists shape the cultural fabric of their communities.",
    category: "Arts & Film",
    country: "United States",
    fundraiseUpCampaignId: "PLACEHOLDER_006",
    impactStats: [
      { value: "600+", label: "Young artists supported" },
      { value: "50+", label: "Public exhibitions" },
      { value: "12", label: "Cities with active chapters" },
    ],
    impactBullets: [
      "Fund free art workshops in painting, photography, film, and digital design",
      "Provide supplies and equipment so cost is never a barrier to participation",
      "Connect young artists with professional mentors in their creative field",
      "Host public gallery shows and film screenings that amplify youth voices",
    ],
    status: "active",
  },
];

export const CATEGORIES = Array.from(new Set(FUNDS.map((f) => f.category))).sort();

export const COUNTRIES = Array.from(new Set(FUNDS.map((f) => f.country))).sort();
