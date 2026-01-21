/** eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import licenseData from '../../licenses.json';

interface LicenseInfo {
  "licenses": string
  "repository": string
  "publisher": string
  "email": string
  "url": string
}

interface WorkLogItem {
  names: string
  hours: number
  description: string
}

export default function ReferencesPage() {

  const workLogs = [{ names: "JunJie Huang", description: "locking in", hours: 3 }] satisfies Array<WorkLogItem>

  const licenseMap = new Map(Object.entries(licenseData));

  return <div className="p-4">
    <h1 className="text-2xl">References</h1>

    <p>
      This website is deployed via vercel and uses nextjs + react framework with tailwindcss css framework and daisyui on top of tailwind
    </p>


    <label className='mt-10'>Work log:</label>
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Names</th>
            <th>Hours</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workLogs.map((items) =>
          (
            <tr key={items.description + items.hours + items.names}>
              <td>{items.names}</td>
              <td>{items.hours}</td>
              <td>{items.description}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>

    <label>Packages used</label>

    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Package</th>
            <th>Email</th>
            <th>Licenses</th>
            <th>Publisher</th>
            <th>Repository</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(licenseMap.entries()).map(([packageName, items]: [string, any]) => (
            <tr key={packageName}>
              <td>{packageName}</td>
              <td>{items.email || "N/A"}</td>
              <td>{items.licenses}</td>
              <td>{items.publisher}</td>
              <td>
                {items.repository &&
                  <Link href={items.repository} className="link link-primary" target="_blank">
                    Repo
                  </Link>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
}
