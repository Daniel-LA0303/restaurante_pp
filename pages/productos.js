import React, {useEffect} from 'react'
import Link from "next/link";
import Header from "../components/Header";
import Producto from "../components/Producto";
import NavIcons from "../components/NavIcons";
import useRestaurant from "../hooks/useRestaurant";


const Productos = () => {

    const {productosActual, autorizado} = useRestaurant();

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
                <p>Usted no tiene los permisos para esta información</p>
            )}
        </div>
    );
}
 
export default Productos;