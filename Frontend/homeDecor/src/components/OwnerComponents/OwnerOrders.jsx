import { useState } from "react";

const initialOrders = [
  {
    id: "#1001",
    customer: "Rahul Sharma",
    amount: 1200,
    status: "Pending",
    date: "2025-06-20",
  },
  {
    id: "#1002",
    customer: "Priya Singh",
    amount: 2500,
    status: "Shipped",
    date: "2025-06-21",
  },
  {
    id: "#1003",
    customer: "Amit Kumar",
    amount: 900,
    status: "Delivered",
    date: "2025-06-22",
  },
];

const statusOptions = ["Pending", "Shipped", "Delivered", "Cancelled"];

const OwnerOrders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (idx, newStatus) => {
    const updated = [...orders];
    updated[idx].status = newStatus;
    setOrders(updated);
    // TODO: Send update to backend
  };

  const handleDiscountChange = (idx, value) => {
    const updated = [...orders];
    setOrders(updated);
    // TODO: Send update to backend
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-xl font-bold mb-4">All Orders</h2>
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
            {orders.map((order, idx) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.customer}</td>
                <td className="py-2 px-4 border-b">
                  ₹{order.amount.toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(idx, e.target.value)}
                    className="border rounded p-1"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border-b">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerOrders;
