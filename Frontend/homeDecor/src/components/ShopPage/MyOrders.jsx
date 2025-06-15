import MyOrdersProduct from "./MyOrdersProduct";

const MyOrders = () => {
  return (
    <>
      <div className="w-[85%] h-full m-auto">
        <div>
          <p className="text-2xl font-bold px-3 py-4 pl-5 border-b-1 border-gray-800">
            My Orders
          </p>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <MyOrdersProduct />
          <MyOrdersProduct />
          <MyOrdersProduct />
        </div>
      </div>
    </>
  );
};

export default MyOrders;
