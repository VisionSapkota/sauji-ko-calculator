import Sidebar from "@/components/Sidebar"

const page = () => {

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-4 md:ml-70 md:mt-0">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-black">Home Page</h1>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-xl text-gray-700 font-semibold">👋 Welcome back, Sauji!</p>
            <p className="text-gray-600 mt-2">
              You can start managing your inventory using the sidebar. Select an option to proceed.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-4 text-black">Sales Report</h1>
          <div className="flex items-center flex-wrap gap-5">
            <div className="bg-white p-6 rounded shadow w-full flex-1">
              <p className="text-xl text-gray-700 font-semibold">Total Sales</p>
              <p className="text-gray-600 mt-2 text-2xl font-bold">
                10000
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow w-full flex-1">
              <p className="text-xl text-gray-700 font-semibold">Total Earning</p>
              <p className="text-gray-600 mt-2 text-2xl font-bold">
                $2000
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow w-full flex-1">
              <p className="text-xl text-gray-700 font-semibold">Sold items</p>
              <p className="text-gray-600 mt-2 text-2xl font-bold">
                100000
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow w-full flex-1">
              <p className="text-xl text-gray-700 font-semibold">Stock</p>
              <p className="text-gray-600 mt-2 text-2xl font-bold">
                2000
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page