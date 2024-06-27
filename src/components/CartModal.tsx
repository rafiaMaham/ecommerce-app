"use client";
import Image from "next/image";

// TEMPORARY
const cartItems = true;

const CartModal = () => {
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
          <h2 className="children">Shopping Cart</h2>
          {/* list */}
          <div className="flex flex-col gap-8">
            {/* item */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/20842755/pexels-photo-20842755/free-photo-of-portrait-of-man-standing-by-the-shore.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      Rs 49
                    </div>
                  </div>
                  {/* desc    */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex  justify-between text-sm">
                  <span className="text-gray-500">Qty - 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            {/* item */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/20842755/pexels-photo-20842755/free-photo-of-portrait-of-man-standing-by-the-shore.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">Rs 49</div>
                  </div>
                  {/* desc    */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex  justify-between text-sm">
                  <span className="text-gray-500">Qty - 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semi-bold">
              <span className="">Subtotal</span>
              <span className="">Rs 98</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
