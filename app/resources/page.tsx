import Image from "next/image";

interface Opportunity {
  name: string
  description: string
}

export default function ResourcesPage() {
  const opportunities = [
    {
      name: "hello", description: "world",
    },
    {
      name: "hello", description: "world",
    },
    {
      name: "hello", description: "world",
    },
    {
      name: "hello", description: "world",
    },
    {
      name: "hello", description: "world",
    },
  ] satisfies Array<Opportunity>

  return <div className="p-4">
    <div className="grid grid-cols-2">

      <div className="hidden lg:flex md:flex gap-4 ">
        <div>
          <label className="font-extrabold">Categories</label>
          <div className="grid px-4">
            <label className="font-bold">Food</label>
            <label className="font-bold">Social & Family Support</label>
            <label className="font-bold">Housing</label>
            <label className="font-bold">Health & Wellness</label>
            <label className="font-bold">Education</label>
          </div>
        </div>
      </div>

      <div>
        <label className="text-3xl font-extrabold">Resources</label>

        <div className="flex flex-wrap gap-4">
          {opportunities.map((item) =>
          (<div className="gap-10" key={item.description + item.name}>
            <Image src="/about_page_hero.jpg" className="rounded-xl" alt="test" width={200} height={100}></Image>
            <label className="text-xl font-bold">{item.name}</label>
            <br />
            <label className="text-gray-400">{item.description}</label>
          </div>)
          )}
        </div>
      </div>

    </div>
  </div >
}
