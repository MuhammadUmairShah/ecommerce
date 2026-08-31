import axios from 'axios';
import { useEffect, useState } from 'react';

function Products() {


    let [products, setproducts] = useState([]);

    async function allproduncts() {

        let responce = await axios.get("http://localhost:4000/product/allproducts")
        setproducts(responce.data.products);
        console.log(responce)
    }


    useEffect(()=> {
        allproduncts()
    }, [])
    return (
        <div className='flex border border-black gap-50 h-10 w-20 justify-center items-center mt-50 '>

            {
                products.map(function (eachdata ,index) {
                    return (
                        <div className='flex gap-1 items-center justify-center flex-col border border-black p-10' key={index}>
                            <img src={eachdata.imageurl} />
                            <h1 className=''>{eachdata.title}</h1>
                            <h1>{eachdata.price}</h1>
                            <h1>{eachdata.stock}</h1>
                            <h1>{eachdata.description}</h1>
                            <button className='bg-amber-400' onClick={async function(){
                                
                            }}>Delete</button>
                            
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Products;