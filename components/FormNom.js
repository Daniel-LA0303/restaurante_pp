import React, {useState} from 'react'
import useRestaurant from "../hooks/useRestaurant";
import { useRouter } from 'next/router';

const FormNom = ({pedido}) => {

    const navigate = useRouter();

    const {handleAgregarPedido} = useRestaurant();
    const[nombre, setNombre] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre].includes('')){
            console.log('El nombre es obligatorio');
            return;
        }
        navigate.push('/menu')
        setNombre('')
        handleAgregarPedido(pedido, nombre);
        
    }

    return (  
        <div className="w-full max-w-xs">
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Nombre del cliente" 
                        name='nombre'
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <input
                    // onClick={() => handleAgregarPedido(pedido)}
                    type="submit"
                    value="Finalizar Orden"
                    className=" bg-lime-600 text-white py-2 px-2 rounded cursor-pointer"
                />
            </form>
        </div>
    );
}
 
export default FormNom;