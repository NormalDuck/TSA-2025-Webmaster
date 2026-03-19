export type Category = "Food" | "Social & Family Support" | "Housing" | "Health & Wellness" | "Education" | "All";

export interface Resources {
  name: string;
  description: string;
  category: Category;
  coverImage: string;
  additionalImages?: string[];
  mapSrc: string;
  contact: {
    email?: string;
    phone?: string;
    address: string;
    url?: string;
    socials?: {
      instagram?: string;
      facebook?: string;
      linkedin?: string;
      x?: string;
    };
  };
}

export const resources = [
  {
  name: "Rainier Valley Food Bank",
  category: "Food",
    description: "RVFB is the primary emergency food resource for Seattle's most racially, ethnically, and economically diverse neighborhood. It serves as a critical resource for people of color, immigrants, and refugees facing systemic obstacles.",
    coverImage: "/resources/rainierfoodbank/rainier_valley_foodbank.png",
    additionalImages:[
      "/resources/rainierfoodbank/rainier_foodbank_1.png",
      "/resources/rainierfoodbank/rainier_foodbank_2.png",
      "/resources/rainierfoodbank/rainier_foodbank_3.png",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.3236218779557!2d-122.27304808782165!3d47.522562171062035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a7277905cf3%3A0xcf72a6fd7d818510!2sRainier%20Valley%20Food%20Bank!5e0!3m2!1sen!2sus!4v1773889120146!5m2!1sen!2sus",
    contact: {
      email: "info@rvfb.org",
      phone: "1-(206)-723-4105",
      address: "9021 Rainier Ave S, Seattle, WA 98118",
      url: "https://www.rvfb.org/"
    }
  },
  {
    name: "Seattle Food Committee",
    category: "Food",
    description: "Applying an equitable anti-racist and food justice lens, SFC partners with distributors and BIPOC vendors to ensure the city's emergency food system continues to grow stronger and more sustainable.",
    coverImage: "/resources/seattlecommitte/seattle_food_committee.png",
    additionalImages:[
      "/resources/seattlecommitte/seattle_committe_1.jpg",
      "/resources/seattlecommitte/seattle_committe_2.jpg",
      "/resources/seattlecommitte/seattle_committe_3.jpg",
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.7953087387546!2d-122.33912240534836!3d47.66136351643756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901450d4c55555%3A0xf63a035030d163b7!2sSeattle%20Food%20Committee!5e0!3m2!1sen!2sus!4v1773888914778!5m2!1sen!2sus",
    contact: {
      phone: "1-(206)-694-6756",
      address: "1501 N 45th St Floor 2, Seattle, WA 98103",
      url: "https://www.seattlefoodcommittee.org/",
      socials: { instagram: "https://www.instagram.com/seattlefoodcommittee/" }
    }
  },
  {
    name: "Family Works Seattle",
    category: "Social & Family Support",
    description: "Serves families in North Seattle marginalized by food, economic, and racial injustice through a Food Bank and Family Resource Center, providing culturally responsive services to 6,000 households annually.",
    coverImage: "/resources/familyworks/family_works_logo.png",
    additionalImages:[
      "/resources/familyworks/familyworks_1.jpg",
      "/resources/familyworks/familyworks_2.jpg",
      "/resources/familyworks/familyworks_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10747.140552383338!2d-122.33821908412904!3d47.66917028720501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901450d4870cdb%3A0x2b3362f3ef9dbb87!2sFamilyWorks%20-%20Wallingford%20Food%20Bank!5e0!3m2!1sen!2sus!4v1773889265595!5m2!1sen!2sus",
    contact: {
      email: "theteam@familyworksseattle.org",
      phone: "1-(206)-647-1770",
      address: "1501 N 45th St, Seattle, WA 98103",
      url: "https://familyworksseattle.org/"
    }
  },
  {
    name: "Neighborhood House",
    category: "Social & Family Support",
    description: "Provides safe spaces for youth to reach their potential through after-school mentoring, college-readiness, and STEAM activities, focusing on students aged 6 to 21.",
    coverImage: "/resources/neighborhoodhouse/neighborhood_house_logo.png",
    additionalImages:[
      "/resources/neighborhoodhouse/neighborhood_house_1.jpg",
      "/resources/neighborhoodhouse/neighborhood_house_2.jpg",
      "/resources/neighborhoodhouse/neighborhood_house_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85977.17397033336!2d-122.41051272991047!3d47.669140207609686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abe284bb36f%3A0x515939951fdb212d!2sNeighborhood%20House!5e0!3m2!1sen!2sus!4v1773889383224!5m2!1sen!2sus",
    contact: {
      email: "info@nhwa.org",
      phone: "1-(206)-923-6480",
      address: "1225 S Weller St #510, Seattle, WA 98144",
      url: "https://nhwa.org/",
      socials: { instagram: "https://www.instagram.com/neighborhoodhousekc/" },
    }
  },
  {
    name: "King County Regional Homelessness Authority",
    category: "Housing",
    description: "Administers performance-based homeless services to decrease unsheltered homelessness across King County using equity and social justice principles.",
    coverImage: "/resources/kcrha/KCRHA.png",
    additionalImages:[
      "/resources/kcrha/KCRHA_1.jpg",
      "/resources/kcrha/KCRHA_2.png",
      "/resources/kcrha/KCRHA_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.2420378459615!2d-122.33078448781747!3d47.601983171069286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906aba49d1dc51%3A0xc7796d11c38c8fdd!2s400%20Yesler%20Wy%20%23600%2C%20Seattle%2C%20WA%2098104!5e0!3m2!1sen!2sus!4v1773889591491!5m2!1sen!2sus",
    contact: {
      email: "info@kcrha.org",
      phone: "1-(206)-930-8846",
      address: "400 Yesler Way, Suite 600, Seattle, WA 98104",
      url: "https://kcrha.org/",
      socials: { instagram: "https://www.instagram.com/kingcoRHA/" }
    }
  },
  {
    name: "Mary's Place",
    category: "Housing",
    description: "Since 1999, Mary's Place has helped women and families move out of homelessness into stable situations, providing emergency shelter, housing, and employment services.",
    coverImage: "/resources/marysplace/marys_place.png",
    additionalImages:[
      "/resources/marysplace/marys_place_1.jpg",
      "/resources/marysplace/marys_place_2.jpg",
      "/resources/marysplace/marys_place_3.png",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.465746010114!2d-122.3424010878167!3d47.617077171070676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154a2ac5c6b3%3A0xdb4d17fe27a0a61a!2s720%20Blanchard%20St%2C%20Seattle%2C%20WA%2098121!5e0!3m2!1sen!2sus!4v1773889963217!5m2!1sen!2sus",
    contact:{
      phone: "1-(206)-621-8474",
      address: "720 Blanchard St, Seattle, WA 98121",
      url: "https://www.marysplaceseattle.org/"
    }
  },
  {
    name: "Seattle Roots Community Health",
    category: "Health & Wellness",
    description: "Provides high-quality, culturally appropriate primary health care regardless of ability to pay, nationality, or immigration status.",
    coverImage: "/resources/seattleroots/seattle_roots.png",
    additionalImages:[
      "/resources/seattleroots/seattle_roots_1.jpg",
      "/resources/seattleroots/seattle_roots_2.jpg",
      "/resources/seattleroots/seattle_roots_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10761.104417151988!2d-122.31487487119468!3d47.601320709604515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ac20f021829%3A0x8cb8add3d8a172a7!2s2101%20E%20Yesler%20Wy%2C%20Seattle%2C%20WA%2098122!5e0!3m2!1sen!2sus!4v1773893204929!5m2!1sen!2sus",
    contact: {
      phone: "1-(206)-299-1900",
      address: "2101 East Yesler Way, Seattle, WA 98122",
      url: "https://seattleroots.org/"
    }
  },
  {
    name: "THIRA Health",
    category: "Health & Wellness",
    description: "Adult residential treatment program for individuals aged 18+ struggling with anxiety, depression, and trauma, offering paths toward mental wellness.",
    coverImage: "/resources/thirahealth/thira_health.png",
    additionalImages:[
      "/resources/thirahealth/thira_health_1.png",
      "/resources/thirahealth/thira_health_2.png",
      "/resources/thirahealth/thira_health_3.jpg",
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10760.326146655712!2d-122.19769857119168!3d47.60510420856364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c883df529ad%3A0xb31b3a53fc6aa2f8!2sTHIRA%20Health!5e0!3m2!1sen!2sus!4v1773893272775!5m2!1sen!2sus",
    contact: {
      email: "admissions@thirahealth.com",
      phone: "1-(855)-483-1561",
      address: "11400 SE 6th St Ste 200, Bellevue, WA 98004",
      url: "https://www.thirahealth.com/"
    }
  },
  {
    name: "Per Scholas",
    category: "Education",
    description: "Provides no-cost technical training and AI skills to advance economic mobility and connect skilled talent to leading tech businesses.",
    coverImage: "/resources/perscholas/per_scholas_logo.png",
    additionalImages:[
      "/resources/perscholas/per_scholas_1.jpg",
      "/resources/perscholas/per_scholas_2.jpg",
      "/resources/perscholas/per_scholas_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.615457781105!2d-122.3425843!3d47.6141665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015afb0767ad3%3A0x889c28932e25aeaa!2sPer%20Scholas%20Seattle!5e0!3m2!1sen!2sus!4v1773907605015!5m2!1sen!2sus",
    contact: {
      email: "seattletraining@perscholas.org",
      phone: "1-(206)-209-2940",
      address: "2101 4th Ave Suite 600, Seattle, WA 98121",
      url: "https://perscholas.org/",
      socials: {
        instagram: "https://www.instagram.com/perscholas/",
        linkedin: "https://www.linkedin.com/school/perscholas/"
      }
    }
  },
  {
    name: "Seattle ReCreative",
    category: "Education",
    description: "A non-profit collecting donated reusable materials to fund arts programming and free creative workshops, serving as a hub for environmental stewardship.",
    coverImage: "/resources/seattlerecreative/seattle_recreative.png",
    additionalImages:[
      "/resources/seattlerecreative/seattle_recreative_1.jpg",
      "/resources/seattlerecreative/seattle_recreative_2.jpg",
      "/resources/seattlerecreative/seattle_recreative_3.jpg",
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86181.6275711991!2d-122.39874464179685!3d47.54490590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490410e304c67e9%3A0x4acd8e9976c324d2!2sSeattle%20ReCreative%20Georgetown!5e0!3m2!1sen!2sus!4v1773907669044!5m2!1sen!2sus",
    contact: {
      email: "info@seattlerecreative.org",
      phone: "1-(833)-467-3873",
      address: "6521 5th Ave S, Seattle, WA 98108",
      url: "https://www.seattlerecreative.org/"
    }
  },
  {
    name: "FareStart",
    category: "Food",
    description: "HOW IT ALL BEGAN. Our James Beard Award-winning model for social change dates back to 1992. It started with an idea that we could help people gain the job and self-empowerment skills needed to move out of poverty while also feeding the community and generating revenue to support our work. Since then, we have run various social enterprise businesses as on-the-job classrooms for our students that also nourish our communities. This innovative, entrepreneurial approach ensures that we address the root causes of poverty and food insecurity to empower brighter futures. Throughout the past three decades, our commitment to transforming lives through food, life skills and job training has remained steadfast. We have served nearly 15,000 youth and adults in our job training programs and provided 19 million meals to local nonprofits, shelters, respite centers, youth and adult daycare centers and schools.",
    coverImage: "/resources/farestart/fare_start_logo.jpg",
    additionalImages:[
      "/resources/farestart/fare_start_1.jpg",
      "/resources/farestart/fare_start_2.jpg",
      "/resources/farestart/fare_start_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.554061573195!2d-122.33999038781683!3d47.61536017107042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490152d828a1fdf%3A0x63e06b5c4302ef82!2sFareStart!5e0!3m2!1sen!2sus!4v1773890568063!5m2!1sen!2sus",
    contact: {
      email: "info@farestart.org",
      phone: "1-(206)-443-1233",
      address: "700 Virginia St. Seattle, WA 98101",
      url: "https://www.farestart.org/food-security/?gad_source=1&gad_campaignid=22950836372&gbraid=0AAAAADf1YoQ-bav_A82gTe5Y65KQA8n84&gclid=EAIaIQobChMInOKi5O2lkwMV0yStBh3GexinEAAYASAAEgJ0PvD_BwE"
    }
  },
  {
    name: "University District Food Bank",
    category: "Food",
    description: "Our U-District Pantry is open for in-person shopping on Monday, Tuesday, Thursday, and Friday. We offer fresh fruits and vegetables, dairy, eggs or frozen meat, canned and dried goods, toiletries, baby formula, diapers, and pet food plus connections to important community resources. We try to provide food for several days, but please follow posted  guidelines so that food is available for all our customers. We do our best, but sometimes we won't have everything you hope to find. If there are foods you would like to find on our shelves, please let us know (leave a note in our comment box, tell a food bank staff person) so that we can look for ways to include these foods in the future. We are always excited to consider more produce, dairy, and protein options. If you are uncomfortable shopping in our store directly, you can complete a shopping preference form and a volunteer shopper can collect your groceries while you wait. We primarily support community members from zip codes 98102, 98103, 98105, 98112, 98115, and 98125 although all are welcome. Customers may visit once per week during any of our open hours. We can also help you find more food help if we aren't meeting your needs. Just ask or check with the Community Information Line (just dial 2-1-1 or toll free at 1-800-621-4636) and the Crisis Connections website. ",
    coverImage: "/resources/universityfoodbank/udfb_logo.jpg",
    additionalImages:[
      "/resources/universityfoodbank/udfb_1.jpg",
      "/resources/universityfoodbank/udfb_2.jpg",
      "/resources/universityfoodbank/udfb_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10747.884982921762!2d-122.328075171144!3d47.66555499192537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901461e96af555%3A0x655a593a0e433b7!2sUniversity%20District%20Food%20Bank!5e0!3m2!1sen!2sus!4v1773890631657!5m2!1sen!2sus",
      contact:{
      phone: "1-(206)-523-7060 ",
      address: "5017 Roosevelt Way NE Seattle, WA 98105",
      url: "https://www.udistrictfoodbank.org/"
    }
  },
  {
    name: "Northwest Harvest",
    category: "Food",
    description: "We build partnerships in communities across Washington to get food where it's needed most. We provide an average of two million meals each month through our statewide network of more than 350 food banks, meal programs, schools, and community-based organizations. Part of a justice-centered movement, we advocate to change inequitable policies, practices, and institutions that perpetuate hunger and poverty. Together, we ensure communities across our state can access the nutritious food they want and need to thrive. ",
    coverImage: "/resources/northwestharvest/nw_harvest_logo.jpg",
    additionalImages:[
      "/resources/northwestharvest/nw_havest_1.jpg",
      "/resources/northwestharvest/nw_havest_2.png",
      "/resources/northwestharvest/nw_havest_3.png",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10764.352446633531!2d-122.33986827120708!3d47.58552821394863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a9db07d9dd5%3A0x74227091ebb2076d!2s1915%204th%20Ave%20S%2C%20Seattle%2C%20WA%2098134!5e0!3m2!1sen!2sus!4v1773890783499!5m2!1sen!2sus",
    contact:{
      email: "info@northwestharvest.org",
      phone: "1-(800)-722-6924",
      address: "1915 4th Ave S, Seattle, WA 98134",
      url: "https://www.northwestharvest.org/"
    }
  },
  {
    name: "Pike Market Senior Center & Food Bank",
    category: "Food",
    description: "Free groceries, ready-to-eat food & home delivery. Our Food Bank is available to people of any age. We provide free groceries, ready-to-eat food for those who are without housing, and home delivery for qualified residents of Downtown Seattle. ",
    coverImage: "/resources/pikefoodbank/pike_foodbank_logo.jpg",
    additionalImages:[
      "/resources/pikefoodbank/pike_foodbank_1.jpg",
      "/resources/pikefoodbank/pike_foodbank_2.jpg",
      "/resources/pikefoodbank/pike_foodbank_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10759.63764619227!2d-122.35095537118903!3d47.60845110764282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab258d11f7d%3A0x4bde5e3783afe660!2sPike%20Market%20Senior%20Center!5e0!3m2!1sen!2sus!4v1773890848133!5m2!1sen!2sus",
    contact: {
      email: "",
      phone: "1-(206)-626-6462",
      address: "85 Pike St. #200 Seattle, WA 98101 ",
      url: "https://www.pmsc-fb.org/food-bank"
    }
  },
  {
    name: "Jewish Family Service",
    category: "Food",
    description: "JFS has been providing free food to our community for close to 100 years. We improve access to healthy, culturally appropriate food, with dignity and respect, to individuals and families throughout the Puget Sound region. ",
    coverImage: "/resources/jewishfamilyservice/jfs_logo.jpg",
    additionalImages:[
      "/resources/jewishfamilyservice/jfs_1.jpg",
      "/resources/jewishfamilyservice/jfs_2.jpg",
      "/resources/jewishfamilyservice/jfs_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344308.35982325656!2d-122.66962655231384!3d47.608457921400024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ad223a8ca7f%3A0x761b686c5bb524db!2sJewish%20Family%20Service%20of%20Seattle!5e0!3m2!1sen!2sus!4v1773890895107!5m2!1sen!2sus",
    contact: {
      email: "",
      phone: "1-(206)-461-3240",
      address: "1601 16th Ave, Seattle, WA 98122",
      url: "https://www.jfsseattle.org/what-we-do/food-access/"
    }
  },
  {
    name: "Wonderland",
    category: "Social & Family Support",
    description: "Wonderland Child & Family Services is a nonprofit agency dedicated to helping children of all abilities reach their full potential. Founded over five decades ago, Wonderland helps children meet healthy developmental milestones while supporting family members along the way. Our evidence-based services help families flourish through therapy, education, and advocacy. Services include occupational and physical therapy, speech-language pathology, special education, mental health support, educational advocacy, and family resources support. We serve families regardless of income, insurance, or ability to pay. ",
    coverImage: "/resources/wonderland/wonderland_logo.jpg",
    additionalImages:[
      "/resources/wonderland/wonderland_1.jpg",
      "/resources/wonderland/wonderland_2.jpg",
      "/resources/wonderland/wonderland_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10726.03010740254!2d-122.39936187106025!3d47.77160596270232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549011e549f5cc83%3A0x6dca1179f2da770f!2sWonderland%20Child%20%26%20Family%20Services!5e0!3m2!1sen!2sus!4v1773891028121!5m2!1sen!2sus",
    contact: {
      email: "info@wonderlandkids.org",
      phone: "1-(206)-364-3777",
      address: "2402 NW 195th Pl, Shoreline, WA 98177",
      url: "https://wonderlandkids.org/"
    }
  },
  {
    name: "Akin",
    category: "Social & Family Support",
    description: "Akin exists to support and strengthen Washington state families. From prenatal to adulthood, prevention to intervention, our programs and services are built upon more than a century of helping create nurturing environments and systemic improvements for families in the state. As we move into the future, we're holding fast to our dedication to keeping families together. ",
    coverImage: "/resources/akin/akin_logo.jpg",
    additionalImages:[
      "/resources/akin/akin_1.jpg",
      "/resources/akin/akin_2.jpg",
      "/resources/akin/akin_3.jpg",
      "/resources/akin/akin_4.jpg",
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10736.859453683106!2d-122.30511577110177!3d47.71907877718191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901164a9baa81f%3A0x5d7b6a49e4129468!2s12360%20Lake%20City%20Way%20NE%20%23100%2C%20Seattle%2C%20WA%2098125!5e0!3m2!1sen!2sus!4v1773891774682!5m2!1sen!2sus",
    contact:{
      phone: "1-(206)-695-3200",
      address: "12360 Lake City Way NE #100, Seattle, WA 98125",
      url: "https://akinfamily.org/"
    }
  },
  {
    name: "Step By Step",
    category: "Social & Family Support",
    description: "As a Washington State First Steps provider, we offer both Maternity Support Services and Infant Case Management, using a holistic approach that includes home visits from registered nurses, licensed counselors, and registered dietitians. ",
    coverImage: "/resources/stepbystep/step_by_step_logo.png",
    additionalImages:[
      "/resources/stepbystep/step_by_step_1.jpg",
      "/resources/stepbystep/step_by_step_2.jpg",
      "/resources/stepbystep/step_by_step_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10846.384508349316!2d-122.25998057152117!3d47.18534352370835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490f857ba6d6643%3A0xdbaa7a78fbad34dc!2sStep%20By%20Step%20Family%20Organization!5e0!3m2!1sen!2sus!4v1773891343602!5m2!1sen!2sus",
    contact:{
      email: "ourfamily@stepbystepfamily.org",
      phone: "1-(253)-896-0903",
      address: "8th Ave SE, Puyallup, WA 98372",
      url: "https://www.stepbystepfamily.org/"
    }
  },
  {
    name: "Kent Youth & Family Services",
    category: "Social & Family Support",
    description: "Kent Youth and Family Services promotes the healthy development of children, youth and families in our community by providing professional counseling, education, and support services. ",
    coverImage: "/resources/kyfs/kyfs_logo.png",
    additionalImages:[
      "/resources/kyfs/kyfs_1.jpg",
      "/resources/kyfs/kyfs_2.jpg",
      "/resources/kyfs/kyfs_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10806.558461686196!2d-122.24480287136872!3d47.37995187040995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549059567b45d057%3A0x519127dffcdcd415!2sKent%20Youth%20and%20Family%20Services!5e0!3m2!1sen!2sus!4v1773891485760!5m2!1sen!2sus",
    contact: {
      email: "info@kyfs.org",
      phone: "1-(253)-859-0300",
      address: "232 2nd Ave S #201, Kent, WA 98032",
      url: "https://kyfs.org/"
    }
  },
  {
    name: "Kandelia",
    category: "Social & Family Support",
    description: "We are a community organization addressing systemic inequities so immigrant and refugee families and communities can thrive without having to compromise values, heritage or ethnicity. ",
    coverImage: "/resources/kandelia/kandelia_logo.png",
    additionalImages:[
      "/resources/kandelia/kandelia_1.jpg",
      "/resources/kandelia/kandelia_2.jpg",
      "/resources/kandelia/kandelia_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10769.89551943958!2d-122.29447727122833!3d47.55856762136261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549042016514691f%3A0x42a16ed687a7c880!2sKandelia!5e0!3m2!1sen!2sus!4v1773891663794!5m2!1sen!2sus",
    contact: {
      email: "info@kandelia.org",
      phone: "1-(206)-760-1573",
      address: "3829B S Edmunds St, Seattle, WA 98118",
      url: "https://www.kandelia.org/"
    }
  },
  {
    name: "DESC",
    category: "Housing",
    description: "DESC helps people with the complex needs of homelessness, substance use disorders, and serious mental illness achieve their highest potential for health and well-being through comprehensive services, treatment, and housing. ",
    coverImage: "/resources/desc/desc_logo.jpg",
    additionalImages:[
      "/resources/desc/desc_1.jpg",
      "/resources/desc/desc_2.jpg",
      "/resources/desc/desc_3.jpg"
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.2158545237044!2d-122.33344376635799!3d47.60249233137637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906aba88fe95f5%3A0x263de6921bebe775!2s515%203rd%20Ave%2C%20Seattle%2C%20WA%2098104!5e0!3m2!1sen!2sus!4v1773892125603!5m2!1sen!2sus",
    contact: {
      email: "info@desc.org",
      phone: "1-(206)-464-1570",
      address: "515 3rd Ave, Seattle, WA 98104",
      url: "https://www.desc.org/"
    }
  },
  {
    name: "Habitat for Humanity",
    category: "Housing",
    description: "In King and Kittitas Counties, and around the world, Habitat for Humanity brings people together as volunteers, homeowners, donors, and community members to create strength, stability, and self-reliance through shelter. Habitat International was named by Engage for Good as its 2020 Golden Halo Award nonprofit winner, the group's highest honor for causes that engage in activities designed to do well by doing good. In 2021 Habitat was also named One of America's 100 Favorite Charities*. In our community, Habitat for Humanity constructs affordable homes, repairs homes for income-qualified homeowners and seniors, operates discount home improvement stores in Auburn, Southcenter, Bellevue, and Ellensburg, and mobilizes nearly 2,500 volunteers a year.",
    coverImage: "/resources/habitatforhumanity/habitat_logo.jpg",
    additionalImages:[
      "/resources/habitatforhumanity/habitat_1.jpg",
      "/resources/habitatforhumanity/habitat_2.jpg",
      "/resources/habitatforhumanity/habitat_3.jpg"
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43147.32498010609!2d-122.27442994150809!3d47.476123053918016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549042ca1f922e51%3A0x769f7e355ea649e4!2sHabitat%20for%20Humanity%20Seattle-King%20County%20Offices!5e0!3m2!1sen!2sus!4v1773892288019!5m2!1sen!2sus",
    contact: {
      email: "info@habitatskc.org",
      phone: "1-(206)-453-2950",
      address: "King County Office: 500 Naches Ave SW STE 200, Renton, WA 98057",
      url: "https://www.habitatskc.org/"
    }
  },
  {
    name: "Plymouth Housing",
    category: "Housing",
    description: "With apartment buildings throughout King County, Plymouth Housing provides adults who experienced homelessness with the stable housing and support they need to thrive. ",
    coverImage: "/resources/plymouth/plymouth_logo.jpg",
    additionalImages:[
      "/resources/plymouth/plymouth_1.jpg",
      "/resources/plymouth/plymouth_2.jpg",
      "/resources/plymouth/plymouth_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43147.32498010609!2d-122.27442994150809!3d47.476123053918016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549042ca1f922e51%3A0x769f7e355ea649e4!2sHabitat%20for%20Humanity%20Seattle-King%20County%20Offices!5e0!3m2!1sen!2sus!4v1773892421926!5m2!1sen!2sus",
    contact: {
      email: "admin@plymouthhousing.org",
      phone: "1-(206)-374-9409",
      address: "2113 Third Ave. Seattle, WA 98121",
      url: "https://plymouthhousing.org/"
    }
  },
  {
    name: "Parkview Services",
    category: "Housing",
    description: "Parkview Services began in 1967 with the innovative vision of the Chivers family. Dr. Norman Chivers and his wife Stella were the parents of a child with Intellectual and Developmental Disabilities (IDDs), and they wanted to create a safe, healthy, community-based housing option for their child and others like him. The goal was to create a home where children with IDDs could live and grow together over a lifetime. The Chivers started Parkview Group Home, (named for its proximity to Volunteer Park on Capitol Hill in Seattle) and it has been a home to people with IDDs ever since. ",
    coverImage: "/resources/parkview/parkview_logo.png",
    additionalImages:[
      "/resources/parkview/parkview_1.jpg",
      "/resources/parkview/parkview_2.jpg",
      "/resources/parkview/parkview_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10716.658511501102!2d-122.30745247102435!3d47.81702715017307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549010ee15d09d67%3A0xde1d0d5f0208b080!2sParkview%20Services!5e0!3m2!1sen!2sus!4v1773892659193!5m2!1sen!2sus",
    contact: {
      email: "",
      phone: "1-(206)-542-6644",
      address: "4720 200th Street SW, Suite 200 Lynnwood, WA 98036",
      url: "https://www.parkviewservices.org/"
    }
  },
  {
    name: "Community Youth Services",
    category: "Housing",
    description: "We can provide you with nutritious food and to-go snacks, help you sign up for shower times, get you clean, warm clothing from our clothing closet, including access to laundry services, and hygiene supplies. We can help with crisis intervention when you're having a hard time, offer safe shelter, and render first aid and supplies. We arrange drug/alcohol treatment referrals, assist with job search and goal setting, refer to legal support and advocacy, other community referrals…and more! We follow your lead and Case Managers are on-site to support you in reaching any and all of your goals.\n\nOur Outreach Teams are available for off-site appointments and we continue to build recreational, educational, and developmentally appropriate activities throughout the week (subject to COVID restrictions).",
    coverImage: "/resources/cys/cys_logo.jpg",
    additionalImages:[
      "/resources/cys/cys_1.jpg",
      '/resources/cys/cys_2.jpg',
      '/resources/cys/cys_3.jpg',
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.525300063392!2d-122.89192640186084!3d47.04345460395453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491751f953e2c63%3A0x201682d590dfb593!2s520%20Pear%20St%20SE%2C%20Olympia%2C%20WA%2098501!5e0!3m2!1sen!2sus!4v1773892944674!5m2!1sen!2sus",
    contact: {
      email: "liz.snyder@communityyouthservices.org",
      phone: "1-(360)-918-7828",
      address: "520 Pear St. SE Olympia, WA 98501",
      url: "https://communityyouthservices.org/programs/rosies-placeyoung-adult-shelter/"
    }
  },
  {
    name: "ASIAN COUNSELING AND REFERRAL SERVICE",
    category: "Health & Wellness",
    description: "ACRS is a social justice organization that promotes the health and well-being of Asians and Native Hawaiians/Pacific Islanders (A&NH/PIs) and other communities by providing and advocating for responsive community-based services.",
    coverImage: "/resources/acrs/ACRS_logo.jpg",
    additionalImages:[
      "/resources/acrs/ACRS_1.jpg",
      "/resources/acrs/ACRS_2.jpg",
      "/resources/acrs/ACRS_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10767.342275835368!2d-122.30767357121852!3d47.57098761794754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a7ababbd389%3A0xd781cada1b602a05!2sAsian%20Counseling%20and%20Referral%20Service!5e0!3m2!1sen!2sus!4v1773893414877!5m2!1sen!2sus",
    contact: {
      email: "info@acrs.org",
      phone: "1-(206) 695-7600",
      address: "3639 Martin Luther King Jr. Way S Seattle, WA 98144",
      url: "https://acrs.org/"
    }
  },
  {
    name: "Northwest Abortion Access Fund",
    category: "Health & Wellness",
    description: "The Northwest Abortion Access Fund is an abortion fund serving Washington, Oregon, Idaho, and Alaska. Trained, compassionate volunteer advocates run our toll-free helpline. We help people pay for their abortion care by sending funding directly to the clinic. We also help people get to and from the clinic. And we make sure people traveling for care have a safe place to stay. ",
    coverImage: "/resources/northwestabortion/NW_Abortion_Fund_logo.png",
    additionalImages:[
      "/resources/northwestabortion/NW_Abortion_Fund_1.jpg",
    ],
    mapSrc: "",
    contact: {
      email: "info@nwaafund.org",
      phone: "1-(866)-692-2310",
      address: "N/A",
      url: "https://nwaafund.org/"
    }
  },
  {
    name: "Lahai Health",
    category: "Health & Wellness",
    description: "Lahai Health is a free and charitable health clinic committed to providing quality and compassionate care to individuals and families who face barriers to accessing healthcare in King and Snohomish Counties. Our services include integrated and comprehensive medical, dental, and mental health counseling. ",
    coverImage: "/resources/lahai/lahai_logo.png",
    additionalImages:[
      "/resources/lahai/lahai_1.jpg",
      "/resources/lahai/lahai_2.jpeg",
      "/resources/lahai/lahai_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344554.90611666394!2d-122.6263447859742!3d47.5709947177569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549005366c2ab2d5%3A0xb52b4dc0a8f9ca5a!2sLahai%20Health%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1773893553516!5m2!1sen!2sus",
    contact: {
      email: "",
      phone: "1-(206)-363-4105",
      address: "19820 Scriber Lake Rd Suite #2 Lynnwood, WA 98036 ",
      url: "https://lahai.org/"
    }
  },
  {
    name: "Help Me Grow",
    category: "Health & Wellness",
    description: "Help Me Grow Washington is a growing system of nonprofit organizations, Tribal nations, regional and county health and social service organizations, providers and provider organizations, and state agencies working together to serve families in Washington. We weave together state and community systems, providers, and resources to offer a full spectrum of supports to all families in Washington state with young children. ",
    coverImage: "/resources/helpmegrow/help_me_grow_logo.png",
    additionalImages:[
      "/resources/helpmegrow/help_me_grow_1.jpg",
      "/resources/helpmegrow/help_me_grow_2.jpg",
      "/resources/helpmegrow/help_me_grow_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.3727139914065!2d-122.32741160487296!3d47.700670345920884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013ff9c4debb9%3A0x4887dfc8b26bcdbd!2sNorthgate%20Executive%20Center%20I%2C%20155%20NE%20100th%20St%20%23410%2C%20Seattle%2C%20WA%2098125!5e0!3m2!1sen!2sus!4v1773906763515!5m2!1sen!2sus",
    contact: {
      email: "",
      phone: "1-800-322-2588",
      address: "PO Box 155 N.E. 100th St., #410 Seattle, WA 98125",
      url: "https://helpmegrowwa.org/"
    }
  },
  {
    name: "Washington Healthcare Access Alliance",
    category: "Health & Wellness",
    description: "Washington Healthcare Access Alliance is Washington's free clinic association. We provide programming focused on free and charitable care and healthcare volunteerism.",
    coverImage: "/resources/whaa/WHAA_logo.png",
    additionalImages:[
      "/resources/whaa/WHAA_1.jpg",
      "/resources/whaa/WHAA_2.jpg",
      "/resources/whaa/WHAA_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.140185297283!2d-122.48806884999999!3d47.2725141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549054eef8fb1a15%3A0xeea7e0f2b4990c32!2sTacoma%2C%20WA%2098417!5e0!3m2!1sen!2sus!4v1773906930020!5m2!1sen!2sus",
    contact: {
      email: "",
      phone: "1-(206)-788-3700",
      address: "P.O. Box 7242 Tacoma, Washington 98417",
      url: "https://www.wahealthcareaccessalliance.org/"
    }
  },
  {
    name: "Youth in Focus",
    category: "Education",
    description: "As Seattle’s only photography-based youth development organization, we provide free photography classes and mentorship to over 450 middle and high school students each year. We create a safe, inclusive community where teens can explore their creativity, develop technical skills, and gain the confidence to share their stories—and shape their futures. ",
    coverImage: "/resources/yif/yif_logo.jpg",
    additionalImages:[
      "/resources/yif/yif_1.jpg",
      "/resources/yif/yif_2.jpg",
      "/resources/yif/yif_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5382.321016559659!2d-122.30147479999998!3d47.58412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a8be911926f%3A0x5492562a2e4c9870!2sYouth%20in%20Focus!5e0!3m2!1sen!2sus!4v1773907075189!5m2!1sen!2sus",
    contact: {
      email: "",
      phone: "1-(206)-723-1479",
      address: "2100 24th Avenue South Suite 310 Seattle, WA 98144 ",
      url: "https://www.youthinfocus.org/"
    }
  },
  {
    name: "Treehouse",
    category: "Education",
    description: "Started in 1988, Treehouse is the only nonprofit in Washington state focused on the specific educational, material and financial needs of youth in foster care. Our approach is to walk alongside youth and support their unique needs. Together, we are creating a road to hope and possibility for youth in foster care in Washington state. ",
    coverImage: "/resources/treehouse/treehouse_logo.png",
    additionalImages:[
      "/resources/treehouse/treehouse_1.jpg",
      "/resources/treehouse/treehouse_2.jpg",
      "/resources/treehouse/treehouse_3.jpg",
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5382.310508415388!2d-122.30126709999998!3d47.584222199999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a8be911926f%3A0x11c15d8aa8964cbc!2sTreehouse!5e0!3m2!1sen!2sus!4v1773907191976!5m2!1sen!2sus",
    contact: {
      email: "info@treehouseforkids.org",
      phone: "1-(206)-767-7000",
      address: "2100 24th Avenue S./Suite 200 Seattle, WA 98144-4643",
      url: "https://www.treehouseforkids.org/?gad_source=1&gad_campaignid=14463705750&gbraid=0AAAAAD91O2_jBIyE9jgO2oZSzXeqkJmqQ&gclid=EAIaIQobChMIuLT4uLKnkwMVfBqtBh02czd3EAAYASAAEgI2DvD_BwE"
    }
  },
  {
    name: "Rainier Scholars",
    category: "Education",
    description: "Rainier Scholars cultivates students’ academic and leadership potential through rigorous, transformative opportunities that increase college graduation rates and empower new generations of leaders. ",
    coverImage: "/resources/rainierscholars/rainier_scholars_logo.jpg",
    additionalImages:[
      "/resources/rainierscholars/rainier_scholars_1.jpg",
      "/resources/rainierscholars/rainier_scholars_2.jpg",
      "/resources/rainierscholars/rainier_scholars_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.163217568084!2d-122.30131349999999!3d47.58406730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a8be911926f%3A0x5db51753e6775f4e!2sRainier%20Scholars!5e0!3m2!1sen!2sus!4v1773907304197!5m2!1sen!2sus",
    contact: {
      email: "info@rainierscholars.org",
      phone: "1-(206)-407-2111",
      address: "2100 24th Ave S Suite 360 Seattle, Washington 98144-4646",
      url: "https://www.rainierscholars.org/"
    }
  },
  {
    name: "One World Now!",
    category: "Education",
    description: "OneWorld Now! was founded in Seattle, Washington, in 2002, following the events of 9/11. It was a brave vision in the atmosphere of the time. OWN Founder, Kristin Hayden, sought to build bridges of connection with cultures the U.S. has been challenged to understand. She also believed in the power of focusing on high school students who have the least access to global education. In the beginning, we launched a pilot Arabic language program at Ingraham High School in north Seattle with just 12 students. Today, OWN involves 250 students annually. Our programs enroll students in person in Seattle and online from across the U.S. – and beyond!",
    coverImage: "/resources/oneworld/one_world_logo.jpg",
    additionalImages:[
      "/resources/oneworld/one_world_1.jpg",
      "/resources/oneworld/one_world_2.png",
      "/resources/oneworld/one_world_3.png",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.4907250088904!2d-122.3248519!3d47.597147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abaae2e4f17%3A0x44851467320b8d76!2sOneWorld%20Now!5e0!3m2!1sen!2sus!4v1773907457612!5m2!1sen!2sus",
    contact: {
      email: "info@oneworldnow.org",
      phone: "1-(206)-223-7703",
      address: "610 Maynard Ave S, Seattle, WA 98104",
      url: "https://oneworldnow.org/"
    }
  },
  {
    name: "School Connect WA",
    category: "Education",
    description: "At School Connect WA, we provide exceptional academic afterschool programs for underserved children through the generous support of local churches and the united efforts of our whole community. ",
    coverImage: "/resources/schoolconnect/school_connect_logo.jpg",
    additionalImages:[
      "/resources/schoolconnect/school_connect_1.jpg",
      "/resources/schoolconnect/school_connect_2.jpg",
      "/resources/schoolconnect/school_connect_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.797623853004!2d-122.2962424!3d47.5522674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041f1a213e61f%3A0x2344aa62b300442e!2sSchool%20Connect%20WA!5e0!3m2!1sen!2sus!4v1773907564402!5m2!1sen!2sus",
    contact: {
      email: "info@schoolconnectwa.org",
      phone: "1-(206)-249-9247",
      address: "2820 S Orcas St, Seattle, WA 98108",
      url: "https://www.schoolconnectwa.org/"
    }
  }
] satisfies Array<Resources>;
