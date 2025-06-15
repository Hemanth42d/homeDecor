const ReviewCard = () => {
  return (
    <>
      <div className="w-[90%] border-1 bg-gray-100 rounded-md shadow-lg mt-10 mb-10">
        <div className="flex justify-between items-center p-2">
          <p className="text-lg font-semibold">John Doe</p>
          <p className="text-sm text-gray-500">2 days ago</p>
        </div>
        <div className="p-2">
          <p className="text-gray-700">
            This product exceeded my expectations! The quality is top-notch and
            it arrived on time. Highly recommend!
          </p>
        </div>
        <div className="flex justify-end p-2">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
