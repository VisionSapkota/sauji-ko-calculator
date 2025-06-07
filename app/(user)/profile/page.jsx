import Sidebar from "@/components/Sidebar"
import StoreInfo from "@/components/StoreInfo"

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-4 md:ml-70 md:mt-0 text-black">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-6 text-center">Store Profile</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <StoreInfo label="Store Name" info="ABC Store" />
              <StoreInfo label="Address" info="Tokha Road, Kathmandu, Nepal" />
              <StoreInfo label="Contact Number 1" info="+977 9812345678" />
              <StoreInfo label="Contact Number 2 (Optional)" info="+977 9809876543" />
              <StoreInfo label="Email" info="store@example.com" />

              <div className="flex gap-4 mt-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Store Info</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page