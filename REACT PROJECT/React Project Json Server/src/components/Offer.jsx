// import React from "react";
// import { offer } from "../data/Data";

// const Offer = () => {
//   return (
//     <div className="mt-8">
//       <div className="w-11/12 m-auto">
//         <div>
//           {offer.map((data, key) => (
//             <div key={key}>
//               <div className="relative">
//                 <div className="craft-img rounded-3xl">
//                   <img
//                     src={data.customer_img}
//                     alt="img"
//                     className="w-full rounded-3xl"
//                   />
//                 </div>
//                 <div>
//                   <p className="bg-white p-4 text-xl rounded-full absolute top-0 -right-6">
//                     {data.title}
//                   </p>
//                   <h1 className="bg-white px-6 py-6 text-3xl absolute top-14 -right-6 rounded-full">
//                     {data.subtitle}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offer;



//==================================================



import React from "react";
import { offer } from "../data/Data";

const Offer = () => {
  return (
    <div className="mt-8">
      <div className="w-11/12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offer.map((data, key) => (
            <div key={key} className="relative overflow-hidden rounded-3xl">
              <img
                src={data.customer_img}
                alt={data.title}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute top-0 right-0 p-4">
                <p className="bg-white p-4 text-xl rounded-full shadow-lg">
                  {data.title}
                </p>
                <h1 className="bg-white px-6 py-6 text-3xl rounded-full shadow-lg mt-4">
                  {data.subtitle}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
