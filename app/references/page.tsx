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
export default function ReferencesPage() {
  const licenseMap = new Map(Object.entries(licenseData));

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

    {/* PDF files section */}
    <div className="flex flex-col lg:flex-row gap-6 h-200 py-9">
      {/* Work Log pdf file*/}
      <div className="w-full lg:w-1/2 h-full bg-white rounded-xl shadow-lg p-4">
        <h2 className="text-lime-700 text-2xl font-semibold text-center mb-4">Work Log</h2>
        <iframe
          src="/worklog.pdf"
          className="w-full h-[calc(100%-3rem)] rounded-lg border border-gray-300"
          title="Work Log"
        />
      </div>
      {/* Copyright pdf file*/}
      <div className="w-full lg:w-1/2 h-full bg-white rounded-xl shadow-lg p-4">
        <h2 className="text-lime-700 text-2xl font-semibold text-center mb-4">Copyright</h2>
        <iframe
          src="/copyright.pdf"
          className="w-full h-[calc(100%-3rem)] rounded-lg border border-gray-300"
          title="Copyright"
        />
      </div>
    </div>
    <div className='grid'>
      <label className='font-black text-2xl'>Packages</label>
      <label className='text-gray-500'>(this includes indirect packages used by other libraries/dependencies)</label>
    </div>

    <div className='mb-4'></div>

    <div className="overflow-x-auto shadow-2xl">
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
