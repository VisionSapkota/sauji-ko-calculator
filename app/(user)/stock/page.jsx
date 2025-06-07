import Sidebar from "@/components/Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-4 md:ml-70 md:mt-0">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-black">Left Stock</h1>
          <div className="bg-white p-6 rounded shadow max-w-6xl text-black overflow-x-auto">
            <table className="w-full min-w-[800px] text-left border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border-b border-gray-200 whitespace-nowrap">S.N.</th>
                  <th className="p-2 border-b border-gray-200 whitespace-nowrap">Barcode</th>
                  <th className="p-2 border-b border-gray-200 whitespace-nowrap">Product Name</th>
                  <th className="p-2 border-b border-gray-200 whitespace-nowrap">Quantity</th>
                  <th className="p-2 border-b border-gray-200 whitespace-nowrap">Unit</th>
                  <th className="p-2 border-b border-gray-200 whitespace-nowrap">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-2 border-b border-gray-200 whitespace-nowrap">1</td>
                  <td className="p-2 border-b border-gray-200 whitespace-nowrap">123456789012</td>
                  <td className="p-2 border-b border-gray-200 whitespace-nowrap">Apple</td>
                  <td className="p-2 border-b border-gray-200 whitespace-nowrap">20</td>
                  <td className="p-2 border-b border-gray-200 whitespace-nowrap">kg</td>
                  <td className="p-2 border-b border-gray-200 whitespace-nowrap">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm cursor-pointer">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page