import React from 'react';
import Image from 'next/image';
import useRestaurant from '../hooks/useRestaurant';

const Producto = ({producto}) => {

    const {handleNuevoPedido, clickMas, clickMenos, cantidad} = useRestaurant();

    const {categoriaId, imagen, nombre, precio} = producto;



    return (  
        <div className='flex flex-col justify-center w-60 sm:w-72 h-auto  m-3 color-marron shadow-2xl p-3 rounded text-white'>
            <div>
                <Image 
                    src={`/static/img/${imagen}.jpg`}
                    width={300}
                    height={350}
                    className=' rounded'
                />
            </div>
            <p className=' text-center py-1'>{nombre}</p>
            <p className=' text-center text-2xl font-semibold'>$ {precio}</p>
            {/* <div className=''> */}
                <button
                    className=' bg-amber-600 hover:bg-amber-700 transition-all duration-300  py-2 px-5 my-2 rounded text-white'
                    onClick={() => handleNuevoPedido(producto)}
                >Add</button>
                {/* <div className="custom-number-input">
                    <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                        <button 
                            data-action="decrement" 
                            className=" bg-amber-600 text-whit hover:text-gray-700 hover:bg-amber-700 h-full w-20 rounded-l cursor-pointer outline-none"
                            onClick={() => clickMenos(cantidad)}        
                        >
                            <span className="text-xl">−</span>
                        </button>
                        <label
                            // type="number" 
                            className=" text-center w-full bg-gray-300 flex items-center justify-center text-black" 
                            // name="custom-input-number" 
                        >{cantidad}</label>
                        <button 
                            data-action="increment" 
                            className="bg-amber-600 text-white hover:text-gray-700 hover:bg-amber-700 h-full w-20 rounded-r cursor-pointer"
                            onClick={() => clickMas(cantidad)}                            
                        >
                            <span className=" text-xl">+</span>
                        </button>
                    </div>
                </div> */}
            {/* </div> */}

        </div>
    );
}
 
export default Producto;