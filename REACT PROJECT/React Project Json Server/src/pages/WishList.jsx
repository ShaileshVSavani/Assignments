
// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, getCartTotal } from "../redux/cartSlice";
// import PageHeading from "../common/PageHeading";
// import { Link } from "react-router-dom";
// import { removeFromWishList } from "../redux/wishListSlice";

// const Wishlist = () => {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();
//   const { data: wishlistProducts } = useSelector((state) => state.wishlist);

//   const MoveToCart = (product) => {
//     let totalPrice = qty * product.price;

//     const tempProduct = {
//       ...product,
//       quantity: qty,
//       totalPrice,
//     };

//     dispatch(addToCart(tempProduct));
//     dispatch(removeFromWishList({ id: product.id })); // Remove from wishlist after adding to cart
//     dispatch(getCartTotal());
//   };

//   const removeFromWishlist = (itemId) => {
//     dispatch(removeFromWishList({ id: itemId }));
//     dispatch(getCartTotal());
//   };

//   return (
//     <div>
//       <PageHeading home={"home"} pagename={"Wishlist"} />
//       <div className="w-10/12 m-auto">
//         <div className="mt-8">
//           {wishlistProducts.length === 0 ? (
//             <div className="text-3xl font-bold uppercase">
//               Your Wish List is Empty
//             </div>
//           ) : (
//             <div className="w-full shadow-2xl rounded-2xl overflow-hidden">
//               <table className="w-full table-auto">
//                 <thead className="bg-blue-950 text-white font-semibold">
//                   <tr>
//                     <th className="px-4 py-3">Sr. No.</th>
//                     <th className="px-4 py-3">Product</th>
//                     <th className="px-4 py-3">Price</th>
//                     <th className="px-4 py-3">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {wishlistProducts.map((item, index) => (
//                     <tr key={item.id} className="border-t">
//                       <td className="text-center px-4 py-3">{index + 1}</td>
//                       <td className="text-center px-4 py-3">
//                         <div className="flex flex-col items-center">
//                           <img
//                             src={item.img}
//                             alt={item.title}
//                             className="h-40 w-40 object-contain mb-2"
//                           />
//                           <p className="font-semibold text-gray-800">
//                             {item.title}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="text-center px-4 py-3">${item.price}</td>
//                       <td className="text-center px-4 py-3">
//                         <div className="flex flex-col space-y-2 items-center">
//                           <button
//                             onClick={() => removeFromWishlist(item.id)}
//                             className="text-red-500 px-3 py-1 border border-red-500 rounded-md hover:bg-red-700 hover:text-white transition-colors duration-300 w-2/3"
//                           >
//                             Delete
//                           </button>

//                           <button
//                             onClick={() => MoveToCart(item)}
//                             className="text-green-600 px-4 py-2 rounded-md border border-green-500 hover:bg-green-700 hover:text-white transition-colors duration-300 w-2/3"
//                           >
//                             Move to Cart
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;



//===================================================


import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartTotal } from "../redux/cartSlice";
import PageHeading from "../common/PageHeading";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../redux/wishListSlice";

const Wishlist = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { data: wishlistProducts } = useSelector((state) => state.wishlist);

  const MoveToCart = (product) => {
    let totalPrice = qty * product.price;

    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(removeFromWishList({ id: product.id })); // Remove from wishlist after adding to cart
    dispatch(getCartTotal());
  };

  const removeFromWishlist = (itemId) => {
    dispatch(removeFromWishList({ id: itemId }));
    dispatch(getCartTotal());
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeading home={"home"} pagename={"Wishlist"} />
      <div className="max-w-screen-xl mx-auto mt-8">
        {wishlistProducts.length === 0 ? (
          <div className="text-3xl font-bold text-center uppercase">
            Your Wish List is Empty
          </div>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="w-full min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Sr. No.</th>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {wishlistProducts.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">{index + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col items-center sm:flex-row sm:items-start">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-32 w-32 object-contain mb-2 sm:mb-0 sm:mr-4"
                        />
                        <p className="font-semibold text-gray-800">{item.title}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">${item.price}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex flex-col space-y-2 items-center">
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-red-500 px-3 py-1 border border-red-500 rounded-md hover:bg-red-700 hover:text-white transition-colors duration-300 w-full sm:w-32"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => MoveToCart(item)}
                          className="text-green-600 px-4 py-2 rounded-md border border-green-500 hover:bg-green-700 hover:text-white transition-colors duration-300 w-full sm:w-32"
                        >
                          Move to Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
