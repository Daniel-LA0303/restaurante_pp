import React, {useEffect} from 'react'
import Link from "next/link";
import Header from "../components/Header";
import Producto from "../components/Producto";
import NavIcons from "../components/NavIcons";
import useRestaurant from "../hooks/useRestaurant";


const Productos = () => {

    const {productosActual} = useRestaurant();


    

    return (  
        <div>
            
            <Header  pag={'Productos'}/>
            
            {/* <h1 className=" text-center my-5 text-5xl">Products</h1> */}
            <NavIcons />
            <div className="flex flex-wrap justify-evenly">
                {productosActual.map(producto => (
                    <Producto 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>

        </div>
    );
}
 
export default Productos;