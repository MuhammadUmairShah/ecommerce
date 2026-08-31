import axios from "axios";
import { useNavigate } from "react-router-dom";


function Sidebar() {
    let Navigate=useNavigate()
    return (
        <div className="flex  ">


            <button onClick={async function () {
                Navigate('/addproducts')
            }}>Add Products</button>
            <button onClick={async function () {
                Navigate('/products')
            }}>Add Products</button>





        </div>
    )
}

export default Sidebar;