import Sidebar from "@/components/Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPrint, faTrash } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-4 md:ml-70 md:mt-0">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-black">Past Orders</h1>
          <div className="bg-white p-6 rounded shadow max-w-6xl text-black overflow-x-auto">
              <table className="w-full text-left border border-gray-200 whitespace-nowrap">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border-b border-gray-200">S.N.</th>
                    <th className="p-2 border-b border-gray-200">Bill No.</th>
                    <th className="p-2 border-b border-gray-200">Date</th>
                    <th className="p-2 border-b border-gray-200">Total Items</th>
                    <th className="p-2 border-b border-gray-200">Total Amount</th>
                    <th className="p-2 border-b border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-gray-200">1</td>
                    <td className="p-2 border-b border-gray-200">425</td>
                    <td className="p-2 border-b border-gray-200">2025-06-02</td>
                    <td className="p-2 border-b border-gray-200">5</td>
                    <td className="p-2 border-b border-gray-200">$24.75</td>
                    <td className="p-2 border-b border-gray-200 flex gap-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm cursor-pointer">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-sm cursor-pointer">
                        <FontAwesomeIcon icon={faPrint} />
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm cursor-pointer">
                        <FontAwesomeIcon icon={faTrash} />
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