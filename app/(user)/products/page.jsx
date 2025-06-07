import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-4 md:ml-70 md:mt-0">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-black">All Products</h1>

          <div className="bg-white p-6 rounded shadow max-w-6xl overflow-x-auto text-black">
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border-b border-gray-200">S.N.</th>
                  <th className="p-2 border-b border-gray-200">Barcode</th>
                  <th className="p-2 border-b border-gray-200">Product Name</th>
                  <th className="p-2 border-b border-gray-200">Category</th>
                  <th className="p-2 border-b border-gray-200">CP</th>
                  <th className="p-2 border-b border-gray-200">SP</th>
                  <th className="p-2 border-b border-gray-200">Quantity</th>
                  <th className="p-2 border-b border-gray-200">Status</th>
                  <th className="p-2 border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-gray-200">1</td>
                  <td className="p-2 border-b border-gray-200">123456789012</td>
                  <td className="p-2 border-b border-gray-200">Apple</td>
                  <td className="p-2 border-b border-gray-200">Fruits</td>
                  <td className="p-2 border-b border-gray-200">$1.00</td>
                  <td className="p-2 border-b border-gray-200">$1.50</td>
                  <td className="p-2 border-b border-gray-200">10</td>
                  <td className="p-2 border-b border-gray-200">
                    <span className="text-green-600 font-medium">In Stock</span>
                  </td>
                  <td className="p-2 border-b border-gray-200 flex gap-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"><FontAwesomeIcon icon={faPen} /></button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
                </tr>

                <tr>
                  <td className="p-2 border-b border-gray-200">2</td>
                  <td className="p-2 border-b border-gray-200">987654321098</td>
                  <td className="p-2 border-b border-gray-200">Banana</td>
                  <td className="p-2 border-b border-gray-200">Fruits</td>
                  <td className="p-2 border-b border-gray-200">$0.50</td>
                  <td className="p-2 border-b border-gray-200">$1.00</td>
                  <td className="p-2 border-b border-gray-200">0</td>
                  <td className="p-2 border-b border-gray-200">
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </td>
                  <td className="p-2 border-b border-gray-200 flex gap-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"><FontAwesomeIcon icon={faPen} /></button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"><FontAwesomeIcon icon={faTrash} /></button>
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