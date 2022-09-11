import Header from "../components/Header";
import useRestaurant from "../hooks/useRestaurant";
import Custom404 from "./404";

const Ordenes = () => {

    const {pedidos, autorizado} = useRestaurant();

    let error = <Custom404 />
    
    return (  
        <div>
            
            {autorizado ? (
                <>
                    <Header  pag={'Ordenes'}/>
                    {pedidos.map(ped => (
                        <div
                            key={ped.id}
                        >
                            {ped.fecha}
                            {ped.nombre}
                        </div>
                    ))}
                </>
            ):(
                <Custom404 />
            )}

        </div>
    );
}
 
export default Ordenes;