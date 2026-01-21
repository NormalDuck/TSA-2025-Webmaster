"use client";

import { Apple, GraduationCap, House, Plus, UsersRound } from "lucide-react";

import Image from "next/image";

export interface Opportunity {
  name: string;
  description: string;
  category: Category;
  coverImage: string; // The main image shown on the card
  additionalImages?: string[]; // Optional array for a gallery
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

export type Category = "Food" | "Social & Family Support" | "Housing" | "Health & Wellness" | "Education";

const opportunities: Opportunity[] = [
  {
    name: "Rainier Valley Food Bank",
    category: "Food",
    description: "RVFB is the primary emergency food resource for Seattle’s most racially, ethnically, and economically diverse neighborhood. It serves as a critical resource for people of color, immigrants, and refugees facing systemic obstacles.",
    coverImage: "/resources/rainier_valley_foodbank.png",
    contact: {
      email: "info@rvfb.org",
      phone: "(206) 723-4105",
      address: "9021 Rainier Ave S, Seattle, WA 98118",
      url: "https://www.rvfb.org/"
    }
  },
  {
    name: "Seattle Food Committee",
    category: "Food",
    description: "Applying an equitable anti-racist and food justice lens, SFC partners with distributors and BIPOC vendors to ensure the city’s emergency food system continues to grow stronger and more sustainable.",
    coverImage: "/resources/seattle_food_committee.png",
    contact: {
      phone: "(206) 694-6756",
      address: "1501 N 45th St, Seattle, WA 98103-6708",
      url: "https://www.seattlefoodcommittee.org/",
      socials: { instagram: "https://www.instagram.com/seattlefoodcommittee/" }
    }
  },
  {
    name: "Family Works Seattle",
    category: "Food",
    description: "Serves families in North Seattle marginalized by food, economic, and racial injustice through a Food Bank and Family Resource Center, providing culturally responsive services to 6,000 households annually.",
    coverImage: "/resources/family_works.png",
    contact: {
      email: "theteam@familyworksseattle.org",
      phone: "(206) 647-1770",
      address: "85420, Seattle, WA 98145",
      url: "https://familyworksseattle.org/"
    }
  },
  {
    name: "Neighborhood House",
    category: "Social & Family Support",
    description: "Provides safe spaces for youth to reach their potential through after-school mentoring, college-readiness, and STEAM activities, focusing on students aged 6 to 21.",
    coverImage: "/resources/neighborhood_house.png",
    contact: {
      email: "info@nhwa.org",
      phone: "206-923-6480",
      address: "1225 South Weller Street, Suite 510, Seattle, WA 98144",
      url: "https://nhwa.org/",
      socials: { instagram: "https://www.instagram.com/neighborhoodhousekc/" }
    }
  },
  {
    name: "King County Regional Homelessness Authority",
    category: "Housing",
    description: "Administers performance-based homeless services to decrease unsheltered homelessness across King County using equity and social justice principles.",
    coverImage: "/resources/KCRHA.png",
    contact: {
      email: "info@kcrha.org",
      phone: "(206) 930-8846",
      address: "400 Yesler Way, Suite 600, Seattle, WA 98104",
      url: "https://kcrha.org/",
      socials: { instagram: "https://www.instagram.com/kingcoRHA/" }
    }
  },
  {
    name: "Mary's Place",
    category: "Housing",
    description: "Since 1999, Mary’s Place has helped women and families move out of homelessness into stable situations, providing emergency shelter, housing, and employment services.",
    coverImage: "/resources/marys_place.png",
    contact: {
      phone: "206-621-8474",
      address: "PO Box 1711, Seattle, WA 98111",
      url: "https://www.marysplaceseattle.org/"
    }
  },
  {
    name: "Seattle Roots Community Health",
    category: "Health & Wellness",
    description: "Provides high-quality, culturally appropriate primary health care regardless of ability to pay, nationality, or immigration status.",
    coverImage: "/resources/seattle_roots.png",
    contact: {
      phone: "(206) 299-1900",
      address: "2101 East Yesler Way, Seattle, WA 98122",
      url: "https://seattleroots.org/"
    }
  },
  {
    name: "THIRA Health",
    category: "Health & Wellness",
    description: "Adult residential treatment program for individuals aged 18+ struggling with anxiety, depression, and trauma, offering paths toward mental wellness.",
    coverImage: "/resources/thira_health.png",
    contact: {
      email: "admissions@thirahealth.com",
      phone: "855-483-1561",
      address: "11400 SE 6th St., Ste 200, Bellevue WA 98004",
      url: "https://www.thirahealth.com/"
    }
  },
  {
    name: "Per Scholas",
    category: "Education",
    description: "Provides no-cost technical training and AI skills to advance economic mobility and connect skilled talent to leading tech businesses.",
    coverImage: "/resources/per_scholas.png",
    contact: {
      email: "seattletraining@perscholas.org",
      phone: "206-209-2940",
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
    coverImage: "/resources/seattle_recreative.png",
    contact: {
      email: "info@seattlerecreative.org",
      phone: "1-833-467-3873",
      address: "6521 5th Ave S, Seattle, WA 98108",
      url: "https://www.seattlerecreative.org/"
    }
  }
];

export default function ResourcesPage() {
  return (<div className="grid grid-cols-12 gap-6 p-4 md:p-8">

    {/* Sidebar: Responsive visibility and column management */}
    <aside className="hidden md:flex flex-col gap-4 md:col-span-4 lg:col-span-3">
      <h2 className="text-sm uppercase tracking-wider text-gray-500 font-extrabold">Categories</h2>

      <nav className="flex flex-col gap-4 mt-2">
        {[
          { icon: <Apple size={20} />, label: "Food" },
          { icon: <UsersRound size={20} />, label: "Social & Family Support" },
          { icon: <House size={20} />, label: "Housing" },
          { icon: <Plus size={20} />, label: "Health & Wellness" },
          { icon: <GraduationCap size={20} />, label: "Education" },
        ].map((cat) => (
          <button
            key={cat.label}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-blue-600">{cat.icon}</span>
            <span className="font-bold text-gray-700">{cat.label}</span>
          </button>
        ))}
      </nav>
    </aside>

    {/* Main Content: Adjusts column span based on sidebar presence */}
    <main className="col-span-12 md:col-span-8 lg:col-span-9">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-extrabold">Resources</h2>
        <span className="text-sm text-gray-500 font-medium">{opportunities.length} results found</span>
      </div>

      {/* Responsive Grid: Changes column count based on available space */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
        {opportunities.map((item) => (
          <div
            key={item.name + item.description}
            className="flex flex-col group cursor-pointer"
          >
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl mb-4 bg-gray-100">
              <Image
                src={item.coverImage}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>)

}
