import React from "react";

export default function Cards() {
  return (
    <div className="mx-auto my-8 max-w-sm rounded-3xl bg-white p-6 shadow-xl">
    <div className="mb-6 flex justify-center rounded-3xl p-6">
      <img src="https://media.croma.com/image/upload/v1662655662/Croma%20Assets/Communication/Mobiles/Images/261979_oq7vjv.png" alt="Vanilla Ice Cream" className="rounded-3xl" />
    </div>
    <div className="text-center">
      <h2 className="mb-2 text-left text-2xl font-bold">Vanilla Ice Cream</h2>
      <div className="mb-4 flex justify-start space-x-2">
        <span className="mr-2 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:bg-yellow-200 dark:text-yellow-900">Vegan</span>
        <span className="mr-2 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:bg-yellow-200 dark:text-yellow-900">Glutan free</span>
        <span className="rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:bg-yellow-200 dark:text-yellow-900">Organic</span>
      </div>
      <p className="mb-4 text-left text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-2xl font-bold"> ₹ 20000 </span>
      </div>
      <button
  className="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full transition duration-50 ease-in-out"
  type="button">
  Chat With Seller
</button>    </div>
  </div>
  
  );
}
