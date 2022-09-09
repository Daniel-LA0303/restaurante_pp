import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import FormNom from "../components/FormNom";
import NoPedido from "../components/NoPedido";
import useRestaurant from "../hooks/useRestaurant";
import { useRouter } from 'next/router';

const Resumen = () => {

    const {pedido, handleEliminarProPedido, autorizado} = useRestaurant();
    const navigate = useRouter();

    return (  
        <div>
            <Header  pag={'Resumen'}/>
            {autorizado ? (
                <>
                    
                    <p className=" text-center text-5xl">Resumen</p>
                    {pedido.length>0 ? (
                    <>
                    <div
                            className="flex justify-center mx-2 sm:w-2/6 w-full"
                        >
                            <FormNom 
                                pedido={pedido}
                            />

                        </div>
                        <div
                            className="flex justify-around flex-wrap"
                        >
                            <div
                                className="sm:w-1/5 w-full my-5"
                            >
                                <p className=" text-center">esto sera el ticket</p>
                                
                            </div>
                            <div 
                                className=" sm:w-3/5 w-full flex flex-wrap justify-center items-center my-2"
                            >
                                {pedido.map(ped => (
                                    <div
                                        key={ped.id}
                                        ped={ped}
                                        className='w-auto m-1 color-marron shadow-2xl p-5 rounded text-white'
                                    >   
                                        <div className="flex justify-center">
                                            <Image 
                                                src={`/static/img/${ped.imagen}.jpg`}
                                                width={200}
                                                height={250}
                                                className=' rounded'
                                            />
                                        </div>

                                        <p className="my-1 text-sm">{ped.nombre}</p>
                                        <p className=" text-2xl">${ped.precio}</p>
                                        <button
                                            className=" bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-4 py-2 rounded my-2 w-full"
                                            onClick={() => handleEliminarProPedido(ped.id)}
                                        >Eliminar</button>
                                    </div>
                                ))}
                            </div>

                        </div>
                </>
                ) : <NoPedido />}
                    </>
            ): (
                <p>Usted no tiene los permisos para esta información</p>
            )}
           
            


        </div>
    );
}
 
export default Resumen;