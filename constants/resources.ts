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
    additionalImages: [
      "/resources/rainierfoodbank/rainier_foodbank_1.png",
      "/resources/rainierfoodbank/rainier_foodbank_2.png",
      "/resources/rainierfoodbank/rainier_foodbank_3.png",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
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
    additionalImages: [
      "/resources/seattlecommitte/seattle_committe_1.jpg",
      "/resources/seattlecommitte/seattle_committe_2.jpg",
      "/resources/seattlecommitte/seattle_committe_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      phone: "1-(206)-694-6756",
      address: "1501 N 45th St, Seattle, WA 98103-6708",
      url: "https://www.seattlefoodcommittee.org/",
      socials: { instagram: "https://www.instagram.com/seattlefoodcommittee/" }
    }
  },
  {
    name: "Family Works Seattle",
    category: "Social & Family Support",
    description: "Serves families in North Seattle marginalized by food, economic, and racial injustice through a Food Bank and Family Resource Center, providing culturally responsive services to 6,000 households annually.",
    coverImage: "/resources/familyworks/family_works_logo.png",
    additionalImages: [
      "/resources/familyworks/familyworks_1.jpg",
      "/resources/familyworks/familyworks_2.jpg",
      "/resources/familyworks/familyworks_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "theteam@familyworksseattle.org",
      phone: "1-(206)-647-1770",
      address: "85420, Seattle, WA 98145",
      url: "https://familyworksseattle.org/"
    }
  },
  {
    name: "Neighborhood House",
    category: "Social & Family Support",
    description: "Provides safe spaces for youth to reach their potential through after-school mentoring, college-readiness, and STEAM activities, focusing on students aged 6 to 21.",
    coverImage: "/resources/neighborhoodhouse/neighborhood_house_logo.png",
    additionalImages: [
      "/resources/neighborhoodhouse/neighborhood_house_1.jpg",
      "/resources/neighborhoodhouse/neighborhood_house_2.jpg",
      "/resources/neighborhoodhouse/neighborhood_house_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "info@nhwa.org",
      phone: "1-(206)-923-6480",
      address: "1225 South Weller Street, Suite 510, Seattle, WA 98144",
      url: "https://nhwa.org/",
      socials: { instagram: "https://www.instagram.com/neighborhoodhousekc/" },
    }
  },
  {
    name: "King County Regional Homelessness Authority",
    category: "Housing",
    description: "Administers performance-based homeless services to decrease unsheltered homelessness across King County using equity and social justice principles.",
    coverImage: "/resources/kcrha/KCRHA.png",
    additionalImages: [
      "/resources/kcrha/KCRHA_1.jpg",
      "/resources/kcrha/KCRHA_2.jpg",
      "/resources/kcrha/KCRHA_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
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
    additionalImages: [
      "/resources/marysplace/marys_place_1.jpg",
      "/resources/marysplace/marys_place_2.jpg",
      "/resources/marysplace/marys_place_3.png",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      phone: "1-(206)-621-8474",
      address: "PO Box 1711, Seattle, WA 98111",
      url: "https://www.marysplaceseattle.org/"
    }
  },
  {
    name: "Seattle Roots Community Health",
    category: "Health & Wellness",
    description: "Provides high-quality, culturally appropriate primary health care regardless of ability to pay, nationality, or immigration status.",
    coverImage: "/resources/seattleroots/seattle_roots.png",
    additionalImages: [
      "/resources/seattleroots/seattle_roots_1.jpg",
      "/resources/seattleroots/seattle_roots_2.jpg",
      "/resources/seattleroots/seattle_roots_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
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
    additionalImages: [
      "/resources/thirahealth/thira_health_1.png",
      "/resources/thirahealth/thira_health_2.png",
      "/resources/thirahealth/thira_health_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "admissions@thirahealth.com",
      phone: "1-(855)-483-1561",
      address: "11400 SE 6th St., Ste 200, Bellevue WA 98004",
      url: "https://www.thirahealth.com/"
    }
  },
  {
    name: "Per Scholas",
    category: "Education",
    description: "Provides no-cost technical training and AI skills to advance economic mobility and connect skilled talent to leading tech businesses.",
    coverImage: "/resources/perscholas/per_scholas_logo.png",
    additionalImages: [
      "/resources/perscholas/per_scholas_1.jpg",
      "/resources/perscholas/per_scholas_2.jpg",
      "/resources/perscholas/per_scholas_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
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
    additionalImages: [
      "/resources/seattlerecreative/seattle_recreative_1.jpg",
      "/resources/seattlerecreative/seattle_recreative_2.jpg",
      "/resources/seattlerecreative/seattle_recreative_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
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
    additionalImages: [
      "/resources/farestart/fare_start_1.jpg",
      "/resources/farestart/fare_start_2.jpg",
      "/resources/farestart/fare_start_3.jpg",
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
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
    description: "Our U-District Pantry is open for in-person shopping on Monday, Tuesday, Thursday, and Friday. We offer fresh fruits and vegetables, dairy, eggs or frozen meat, canned and dried goods, toiletries, baby formula, diapers, and pet food plus connections to important community resources. We try to provide food for several days, but please follow posted  guidelines so that food is available for all our customers. We do our best, but sometimes we won’t have everything you hope to find. If there are foods you would like to find on our shelves, please let us know (leave a note in our comment box, tell a food bank staff person) so that we can look for ways to include these foods in the future. We are always excited to consider more produce, dairy, and protein options. If you are uncomfortable shopping in our store directly, you can complete a shopping preference form and a volunteer shopper can collect your groceries while you wait. We primarily support community members from zip codes 98102, 98103, 98105, 98112, 98115, and 98125 although all are welcome. Customers may visit once per week during any of our open hours. We can also help you find more food help if we aren’t meeting your needs. Just ask or check with the Community Information Line (just dial 2-1-1 or toll free at 1-800-621-4636) and the Crisis Connections website. ",
    coverImage: "/resources/universityfoodbank/udfb_logo.jpg",
    additionalImages: [
      "/resources/universityfoodbank/udfb_1.jpg",
      "/resources/universityfoodbank/udfb_2.jpg",
      "/resources/universityfoodbank/udfb_3.jpg",
    ],
    mapSrc: "",
    contact: {
      email: "",
      phone: "1-(206)-523-7060 ",
      address: "5017 Roosevelt Way NE Seattle, WA 98105",
      url: "https://www.udistrictfoodbank.org/"
    }
  },
  {
    name: "Northwest Harvest",
    category: "Food",
    description: "We build partnerships in communities across Washington to get food where it’s needed most. We provide an average of two million meals each month through our statewide network of more than 350 food banks, meal programs, schools, and community-based organizations. Part of a justice-centered movement, we advocate to change inequitable policies, practices, and institutions that perpetuate hunger and poverty. Together, we ensure communities across our state can access the nutritious food they want and need to thrive. ",
    coverImage: "/resources/northwestharvest/nw_harvest_logo.jpg",
    additionalImages: [
      "/resources/northwestharvest/nw_havest_1.jpg",
      "/resources/northwestharvest/nw_havest_2.png",
      "/resources/northwestharvest/nw_havest_3.png",
    ],
    mapSrc: "",
    contact: {
      email: "info@northwestharvest.org",
      phone: "1-(800)-722-6924",
      address: "P.O. Box 12272 Seattle, WA 98102",
      url: "https://www.northwestharvest.org/"
    }
  },
  {
    name: "Pike Market Senior Center & Food Bank",
    category: "Food",
    description: "Free groceries, ready-to-eat food & home delivery. Our Food Bank is available to people of any age. We provide free groceries, ready-to-eat food for those who are without housing, and home delivery for qualified residents of Downtown Seattle. ",
    coverImage: "/resources/pikefoodbank/pike_foodbank_logo.jpg",
    additionalImages: [
      "/resources/pikefoodbank/pike_foodbank_1.jpg",
      "/resources/pikefoodbank/pike_foodbank_2.jpg",
      "/resources/pikefoodbank/pike_foodbank_3.jpg",
    ],
    mapSrc: "",
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
    additionalImages: [
      "/resources/jewishfamilyservice/jfs_1.jpg",
      "/resources/jewishfamilyservice/jfs_2.jpg",
      "/resources/jewishfamilyservice/jfs_3.jpg",
    ],
    mapSrc: "",
    contact: {
      email: "",
      phone: "1-(206)-461-3240",
      address: "1601 16th Ave., Seattle, WA 98122",
      url: "https://www.jfsseattle.org/what-we-do/food-access/"
    }
  },
  {
    name: "Wonderland",
    category: "Social & Family Support",
    description: "Wonderland Child & Family Services is a nonprofit agency dedicated to helping children of all abilities reach their full potential. Founded over five decades ago, Wonderland helps children meet healthy developmental milestones while supporting family members along the way. Our evidence-based services help families flourish through therapy, education, and advocacy. Services include occupational and physical therapy, speech-language pathology, special education, mental health support, educational advocacy, and family resources support. We serve families regardless of income, insurance, or ability to pay. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@wonderlandkids.org",
      phone: "1-(206)-364-3777",
      address: "2402 NW 195th Place Shoreline, WA 98177",
      url: "https://wonderlandkids.org/"
    }
  },
  {
    name: "Akin",
    category: "Social & Family Support",
    description: "Akin exists to support and strengthen Washington state families. From prenatal to adulthood, prevention to intervention, our programs and services are built upon more than a century of helping create nurturing environments and systemic improvements for families in the state. As we move into the future, we’re holding fast to our dedication to keeping families together. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "",
      phone: "1-(206)-695-3200",
      address: "12360 Lake City Way NE, Suite 100 Seattle, WA 98125 ",
      url: "https://akinfamily.org/"
    }
  },
  {
    name: "Step By Step",
    category: "Social & Family Support",
    description: "As a Washington State First Steps provider, we offer both Maternity Support Services and Infant Case Management, using a holistic approach that includes home visits from registered nurses, licensed counselors, and registered dietitians. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "ourfamily@stepbystepfamily.org",
      phone: "1-(253)-896-0903",
      address: "3303 8th Ave SE #A Puyallup, WA 98372",
      url: "https://www.stepbystepfamily.org/"
    }
  },
  {
    name: "Kent Youth & Family Services",
    category: "Social & Family Support",
    description: "Kent Youth and Family Services promotes the healthy development of children, youth and families in our community by providing professional counseling, education, and support services. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@kyfs.org",
      phone: "1-(253)-859-0300",
      address: "232 Second Ave. S Kent, WA 98032",
      url: "https://kyfs.org/"
    }
  },
  {
    name: "Kandelia",
    category: "Social & Family Support",
    description: "We are a community organization addressing systemic inequities so immigrant and refugee families and communities can thrive without having to compromise values, heritage or ethnicity. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@kandelia.org",
      phone: "1-(206)-760-1573",
      address: "PO Box 28058 Seattle, WA 98118 ",
      url: "https://www.kandelia.org/"
    }
  },
  {
    name: "DESC",
    category: "Housing",
    description: "DESC helps people with the complex needs of homelessness, substance use disorders, and serious mental illness achieve their highest potential for health and well-being through comprehensive services, treatment, and housing. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@desc.org",
      phone: "1-(206)-464-1570",
      address: "515 Third Ave, Seattle, WA 98104 ",
      url: "https://www.desc.org/"
    }
  },
  {
    name: "Habitat for Humanity",
    category: "Housing",
    description: "In King and Kittitas Counties, and around the world, Habitat for Humanity brings people together as volunteers, homeowners, donors, and community members to create strength, stability, and self-reliance through shelter. Habitat International was named by Engage for Good as its “2020 Golden Halo Award” nonprofit winner, the group’s highest honor for causes that engage in activities designed to do well by doing good. In 2021 Habitat was also named “One of America’s 100 Favorite Charities*”. In our community, Habitat for Humanity constructs affordable homes, repairs homes for income-qualified homeowners and seniors, operates discount home improvement stores in Auburn, Southcenter, Bellevue, and Ellensburg, and mobilizes nearly 2,500 volunteers a year. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@habitatskc.org",
      phone: "1-(206)-453-2950",
      address: "King County Office: 500 Naches Avenue SW, Suite 200 Renton, WA 98057 ",
      url: "https://www.habitatskc.org/"
    }
  },
  {
    name: "Plymouth Housing",
    category: "Housing",
    description: "With apartment buildings throughout King County, Plymouth Housing provides adults who experienced homelessness with the stable housing and support they need to thrive. ",
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
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
    description: "We can provide you with nutritious food and to-go snacks, help you sign up for shower times, get you clean, warm clothing from our clothing closet, including access to laundry services, and hygiene supplies. We can help with crisis intervention when you’re having a hard time, offer safe shelter, and render first aid and supplies. We arrange drug/alcohol treatment referrals, assist with job search and goal setting, refer to legal support and advocacy, other community referrals…and more! We follow your lead and Case Managers are on-site to support you in reaching any and all of your goals.\n\nOur Outreach Teams are available for off-site appointments and we continue to build recreational, educational, and developmentally appropriate activities throughout the week (subject to COVID restrictions).",
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@nwaafund.org",
      phone: "1-866-NWAAF10 or (1-866-692-2310)",
      address: "",
      url: "https://nwaafund.org/"
    }
  },
  {
    name: "Lahai Health",
    category: "Health & Wellness",
    description: "Lahai Health is a free and charitable health clinic committed to providing quality and compassionate care to individuals and families who face barriers to accessing healthcare in King and Snohomish Counties. Our services include integrated and comprehensive medical, dental, and mental health counseling. ",
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "",
      phone: "1-800-322-2588",
      address: "PO Box 155 N.E. 100th St., #410 Seattle, WA 98125 ",
      url: "https://helpmegrowwa.org/"
    }
  },
  {
    name: "Washington Healthcare Access Alliance",
    category: "Health & Wellness",
    description: "Washington Healthcare Access Alliance is Washington's free clinic association. We provide programming focused on free and charitable care and healthcare volunteerism.",
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
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
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@oneworldnow.org",
      phone: "1-(206)-223-7703",
      address: "PO Box 3263 Seattle, WA 98114",
      url: "https://oneworldnow.org/"
    }
  },
  {
    name: "School Connect WA",
    category: "Education",
    description: "At School Connect WA, we provide exceptional academic afterschool programs for underserved children through the generous support of local churches and the united efforts of our whole community. ",
    coverImage: "",
    mapSrc: "",
    contact: {
      email: "info@schoolconnectwa.org",
      phone: "1-(206)-249-9247",
      address: "2820 S Orcas St  |  Seattle, WA 98108 ",
      url: "https://www.schoolconnectwa.org/"
    }
  }
] satisfies Array<Resources>;
