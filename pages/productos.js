import React, {useEffect} from 'react'
import Link from "next/link";
import Header from "../components/Header";
import Producto from "../components/Producto";
import NavIcons from "../components/NavIcons";
import useRestaurant from "../hooks/useRestaurant";
import Custom404 from './404';


const Productos = () => {

    const {productosActual, autorizado} = useRestaurant();

    let error = <Custom404 />

    return (  
        <div>
           
            {autorizado ? (
                <>
                    <Header  pag={'Productos'}/>  
                    <NavIcons />
                    <div className="flex flex-wrap justify-evenly">
                        {productosActual.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>
                </>
            ): (
                <Custom404 />
            )}
        </div>
    );
}
 
export default Productos;