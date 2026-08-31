import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

let Brand = () => {
  let navigate = useNavigate();

  let [data, setData] = useState({
    title: "",
    Imageurl: "",
    stock: 0,
    category: "",
  });

  const handilsubmite = async (e) => {
    e.preventDefault();
    try {
      // Changed 'formData' to 'data' to match your state variable name
      const response = await axios.post('http://localhost:4000/brand/brandcreate', data);
      console.log('Success:', response.data);
    } catch (err) {
      console.error('Server Error:', err.response?.data || err.message);
      alert('Something went wrong on the server. Please try again later.');
    }
  };
  return (
    <div className="min-h-screen bg-white text-black flex">

      

      <div className="flex-1 min-h-screen w-50">

        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <div className="mb-5">
            <h1 className="text-2xl font-bold">
              Create Brand
            </h1>

            <p className="text-zinc-500 text-sm mt-1">
              
            </p>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-2xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Title */}
              <div className="md:col-span-2">
                <h1 className="block text-xs text-zinc-400 mb-1">
                  Product Title
                </h1>

                <input
                  onChange={(event) =>
                    setData({
                      ...data,
                      title: event.target.value,
                    })
                  }
                  type="text"
                  placeholder="Enter product title"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-2.5 rounded-lg outline-none focus:border-[#d4af37] transition"
                />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <h1 className="block text-xs text-zinc-400 mb-1">
                  Image URL
                </h1>

                <input
                  onChange={(event) =>
                    setData({
                      ...data,
                      Imageurl: event.target.value,
                    })
                  }
                  type="text"
                  placeholder="https:/image.jpg"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-2.5 rounded-lg outline-none focus:border-[#d4af37] transition"
                />
              </div>

             

             

              {/* Stock */}
              <div>
                <h1 className="block text-xs text-zinc-400 mb-1">
                  Stock
                </h1>

                <input
                  onChange={(event) =>
                    setData({
                      ...data,
                      stock: (event.target.value),
                    })
                  }
                  type="number"
                  placeholder="Enter stock"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-2.5 rounded-lg outline-none focus:border-[#d4af37] transition"
                />
              </div>

             

              {/* Category */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">
                  Category
                </label>

                <select
                  onChange={(event) =>
                    setData({
                      ...data,
                      category: event.target.value,
                    })
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-2.5 rounded-lg outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                </select>
              </div>

             

            </div>

            {/* Button */}
            <button
            onClick={ handilsubmite}
              type="button"
              className="w-full mt-5 bg-[#d4af37] text-black font-semibold py-2.5 rounded-lg hover:bg-[#b8962e] transition duration-300"
            >
              Create Brand
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Brand;