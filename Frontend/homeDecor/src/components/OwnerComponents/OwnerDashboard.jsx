import { useState, useEffect } from "react";

const OwnerDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    revenue: 0,
    pendingOrders: 0,
  });

  // State for recent orders
  const [recentOrders, setRecentOrders] = useState([]);

  // Example: Fetch data from backend (replace with your API)
  useEffect(() => {
    // fetch("/api/dashboard-stats")
    //   .then(res => res.json())
    //   .then(data => setStats(data));
    // fetch("/api/recent-orders")
    //   .then(res => res.json())
    //   .then(data => setRecentOrders(data));

    // Demo data for UI
    setStats({
      totalProducts: 120,
      totalOrders: 350,
      revenue: 250,
      pendingOrders: 8,
    });
    setRecentOrders([
      {
        id: "#1001",
        customer: "Rahul Sharma",
        amount: 1200,
        status: "Delivered",
        date: "2025-06-20",
      },
      {
        id: "#1002",
        customer: "Priya Singh",
        amount: 2500,
        status: "Pending",
        date: "2025-06-21",
      },
      {
        id: "#1003",
        customer: "Amit Kumar",
        amount: 900,
        status: "Cancelled",
        date: "2025-06-22",
      },
    ]);
  }, []);

  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 rounded-lg p-4 shadow text-center">
          <p className="text-lg font-semibold">Total Products</p>
          <p className="text-2xl font-bold mt-2">{stats.totalProducts}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-4 shadow text-center">
          <p className="text-lg font-semibold">Total Orders</p>
          <p className="text-2xl font-bold mt-2">{stats.totalOrders}</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-4 shadow text-center">
          <p className="text-lg font-semibold">Revenue</p>
          <p className="text-2xl font-bold mt-2">
            ₹{stats.revenue.toLocaleString()}
          </p>
        </div>
        <div className="bg-red-100 rounded-lg p-4 shadow text-center">
          <p className="text-lg font-semibold">Pending Orders</p>
          <p className="text-2xl font-bold mt-2">{stats.pendingOrders}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <p className="text-lg font-semibold mb-4">Sales Overview</p>
        <div className="h-40 flex items-center justify-center text-gray-400">
          [Sales Chart Here]
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-lg font-semibold mb-4">Recent Orders</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.customer}</td>
                  <td className="py-2 px-4 border-b">
                    ₹{order.amount.toLocaleString()}
                  </td>
                  <td
                    className={`py-2 px-4 border-b ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="py-2 px-4 border-b">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
