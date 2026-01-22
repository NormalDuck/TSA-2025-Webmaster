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

  // const licenseMap = new Map(Object.entries(licenseData));

  return <div className="p-8 space-y-5">
    <h1 className="text-4xl font-extrabold">References</h1>

    <div className='grid grid-cols-2 gap-6'>

      <div className='shadow-2xl p-8'>
        <h1 className='text-2xl font-black'>
          Code Stack
        </h1>
        <p>This website uses NextJS, a framework built on top of ReactJS to deliver fast </p>
      </div>

      <div className='shadow-2xl p-8'>
        <h1 className='text-2xl font-black'>
          Code Stack
        </h1>
      </div>

    </div>

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
  </div>
}
