import Image from "next/image";
import useRestaurant from "../hooks/useRestaurant";

const NavIcons = () => {

    const {iconosS, handleClickIcon, catActual} = useRestaurant();
    


    return (  
        <nav
            className="flex justify-evenly flex-wrap color-header"
        >
            {iconosS[0].map(icono => (
                <button
                    key={icono.id}
                    icono={icono}
                    className={catActual === icono.categoriaId ? ' bg-amber-800 px-5 my-2 rounded boton-icono' : 'bg-amber-600 px-5 my-2 rounded boton-icono'}
                    onClick={() => handleClickIcon(icono.categoriaId)}
                >
                    <Image 
                        src={`/static/img/${icono.imagen}.svg`}
                        // alt={`Imagen Platillo ${nombre}`}
                        width={50}
                        height={50}

                    />
                    <p className=" text-white font-bold">{icono.categoria}</p>
                </button>
            ))}
            
        </nav>
    );
}
 
export default NavIcons;