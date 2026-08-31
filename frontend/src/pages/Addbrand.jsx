import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';






function Addbrands() {
    let [formdata, setformdata] = useState({
        title: "",
        price: "",
        stock: "",
        imageurl: "",
        description: "",
    })
    console.log(formdata)

    async function addbrand() {
        let responce = await axios.post("http://localhost:4000/brand/addbrands",formdata)
        console.log(responce)
        if(responce.data.success==true){
            Navigate('/brands')
        }
        
    }


    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='h-100 w-100 flex justify-center items-center flex-col border border-black p-7 rounded-2xl gap-2 '>
                <h1 className="">Add Product</h1>
                <input onChange={async function (event) {
                    setformdata({
                        ...formdata,
                        title: event.target.value
                    })
                }}
                    className='border border-slate-400' type="text" name="" id="" placeholder="Title" />
                <input onChange={async function (event) {
                    setformdata({
                        ...formdata,
                        price: event.target.value
                    })
                }}
                    className='border border-slate-400' type="text" name="" id="" placeholder="Price" />
                <input onChange={async function (event) {
                    setformdata({
                        ...formdata,
                        stock: event.target.value
                    })
                }}
                    className='border border-slate-400' type="text" name="" id="" placeholder="Stock" />
                <input onChange={async function (event) {
                    setformdata({
                        ...formdata,
                        imageurl: event.target.value
                    })
                }}
                    className='border border-slate-400' type="text" placeholder="Image URL" />
                <input onChange={async function (event) {
                    setformdata({
                        ...formdata,
                        description: event.target.value
                    })
                }}
                    className='' type="text" name="" id="" placeholder="Description" />
                <button onClick={addbrand}
                >Add Brand</button>


            </div>
        </div>

    )
}

export default Addbrands;