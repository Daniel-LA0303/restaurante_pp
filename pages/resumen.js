import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import FormNom from "../components/FormNom";
import useRestaurant from "../hooks/useRestaurant";

const Resumen = () => {

    const {pedido, handleEliminarProPedido, autorizado} = useRestaurant();

    return (  
        <div>
            <Header  pag={'Resumen'}/>
            {autorizado ? (
                <>
                    
                    <p className=" text-center text-5xl">Resumen</p>
                    {pedido.length>0 ? (
                    <>
                    <div
                            className="flex justify-end mx-2"
                        >
                            <FormNom 
                                pedido={pedido}
                            />

                        </div>
                        <div
                            className="flex justify-around"
                        >
                                                    <div
                                className="sm:w-1/5 w-full"
                            >
                                esto sera el ticket
                            </div>
                            <div 
                                className=" sm:w-3/5 w-full flex flex-wrap justify-center items-center"
                            >
                                {pedido.map(ped => (
                                    <div
                                        key={ped.id}
                                        ped={ped}
                                        className='w-auto m-3 color-marron shadow-2xl p-5 rounded text-white'
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
                                            className=" bg-red-600 text-white px-4 py-2 rounded my-2"
                                            onClick={() => handleEliminarProPedido(ped.id)}
                                        >Eliminar</button>
                                    </div>
                                ))}
                            </div>

                        </div>
                </>
                ) : <p>Aun no hay ningun pedido en esta orden</p>}
                    </>
            ): (
                <p>Usted no tiene los permisos para esta información</p>
            )}
           
            


        </div>
    );
}
 
export default Resumen;