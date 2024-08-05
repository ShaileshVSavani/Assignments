// import React, { useEffect, useState } from "react";
// import Product from "./Product";
// import axios from "axios";

// const ProductData = () => {
//   const [product, setProduct] = useState({
//     title: "",
//     image: "",
//     price: "",
//   });
//   const [products, setProducts] = useState([]);

//   const getProductData = async () => {
//     try {
//       let res = await axios.get("http://localhost:3000/user");
//       let data = res.data;
//       console.log(data);
//       setProducts(data);
//     } catch (error) {
//       console.log("Error fetching the products:", error);
//     }
//   };

//   const postData = async () => {
//     try {
//       await axios.post("http://localhost:3000/user", product);
//       console.log("Data Posted Successfully");
//       getProductData();
//     } catch (error) {
//       console.log("Error posting the product:", error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { title, price, image } = product;
//     if (title === "" || price === "" || image === "") {
//       alert("Please fill all the fields");
//       return;
//     }

//     postData();
//     setProduct({ title: "", image: "", price: "" });
//   };

//   useEffect(() => {
//     getProductData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto p-6">
//         <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-xl shadow-2xl">
//           <h2 className="text-3xl font-extrabold mb-6">Add New Product</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <input
//                 className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="url"
//                 name="image"
//                 placeholder="Enter Image URL"
//                 value={product.image}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="text"
//                 name="title"
//                 placeholder="Enter Title"
//                 value={product.title}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="number"
//                 name="price"
//                 placeholder="Enter Price"
//                 value={product.price}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <button
//                 className="w-full p-4 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-transform transform hover:scale-105"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((ele) => (
//             <div key={product.id} className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
//               {/* <Product {...product} /> */}





//               <div className="card bg-base-100 ">
//       <figure className="">
//         <img src={ele.image} alt="image" className=""  />
//       </figure>
//       <div className="card-body items-center text-center">
//         <h2 className="card-title">{ele.title}</h2>
//         <p>{ele.price}</p>
//         <button className="btn btn-outline-primary ">Buy Now</button>
//       </div>
//     </div>



//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductData;















import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductData = () => {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
  });
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    try {
      let res = await axios.get("http://localhost:3000/user");
      let data = res.data;
      setProducts(data);
    } catch (error) {
      console.log("Error fetching the products:", error);
    }
  };

  const postData = async () => {
    try {
      await axios.post("http://localhost:3000/user", product);
      getProductData();
    } catch (error) {
      console.log("Error posting the product:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, image } = product;
    if (title === "" || price === "" || image === "") {
      alert("Please fill all the fields");
      return;
    }

    postData();
    setProduct({ title: "", image: "", price: "" });
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto p-6">
        <div className="bg-white p-5 max-w-md mx-auto  rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4  p-6 ">
            <div>
              <input
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="url"
                name="image"
                placeholder="Enter Image URL"
                value={product.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="title"
                placeholder="Enter Title"
                value={product.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                name="price"
                placeholder="Enter Price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="btn btn-outline btn-primary w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((ele) => (
            <div
              key={ele.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <figure className="relative w-full h-64 bg-gray-200">
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{ele.title}</h2>
                <p className="text-lg text-gray-600 mb-4">${ele.price}</p>
                <button className="w-full btn btn-outline btn-success">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
  