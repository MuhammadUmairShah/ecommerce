import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

let Productcreate = () => {
  let navigate = useNavigate();

  let [data, setData] = useState({
    title: "",
    description: "",
    Imageurl: "",
    price: 0,
    quality: "",
    stock: 0,
    size: "",
    
    category: "",
    discount: 0,
  });


  return (
    <div className="min-h-screen bg-white text-black flex">

      

      <div className="flex-1 min-h-screen p-4 overflow-y-auto">

        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <div className="mb-5">
            <h1 className="text-2xl font-bold">
              Create Product
            </h1>

            <p className="text-zinc-500 text-sm mt-1">
              
            </p>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-2xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-xs text-zinc-400 mb-1">
                  Product Title
                </label>

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
                <label className="block text-xs text-zinc-400 mb-1">
                  Image URL
                </label>

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

              {/* Price */}
              <div>
                <h1 className="block text-xs text-zinc-400 mb-1">
                  Price
                </h1>

                <input
                  onChange={(event) =>
                    setData({
                      ...data,
                      price: (event.target.value),
                    })
                  }
                  type="number"
                  placeholder="Enter price"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-2.5 rounded-lg outline-none focus:border-[#d4af37] transition"
                />
              </div>

              {/* Quality */}
              <div>
                <h1 className="block text-xs text-zinc-400 mb-1">
                  Quality
                </h1>

                <input
                  onChange={(event) =>
                    setData({
                      ...data,
                      quality: event.target.value,
                    })
                  }
                  type="text"
                  placeholder="Enter quality"
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

              {/* Size */}
              <div>
                <p className="block text-xs text-zinc-400 mb-1">
                  Size
                </p>

                <select
                  onChange={(event) =>
                    setData({
                      ...data,
                      size: event.target.value,
                    })
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-2.5 rounded-lg outline-none"
                >
                  <option value="">Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
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

              {/* Discount */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">
                  Discount
                </label>

                <input
                  onChange={(event) =>
                    setData({
                      ...data,
                      discount: (event.target.value),
                    })
                  }
                  type="number"
                  placeholder="Enter discount"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white p-2.5 rounded-lg outline-none focus:border-[#d4af37] transition"
                />
              </div>


            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full mt-5 bg-[#d4af37] text-black font-semibold py-2.5 rounded-lg hover:bg-[#b8962e] transition duration-300"
            >
              Create Product
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Productcreate;