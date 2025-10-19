export default function VennalaStorePage() {
  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-white mb-6">Vennala Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Store Overview</h3>
          <p className="text-gray-400">Welcome to Vennala Store dashboard</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Inventory</h3>
          <p className="text-gray-400">Manage your store inventory</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Sales</h3>
          <p className="text-gray-400">Track your sales performance</p>
        </div>
      </div>
    </div>
  );
}