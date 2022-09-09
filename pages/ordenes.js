import Header from "../components/Header";
import useRestaurant from "../hooks/useRestaurant";

const Ordenes = () => {

    const {pedidos, autorizado} = useRestaurant();
    
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
                        </div>
                    ))}
                </>
            ):(
                <p>Usted no tiene los permisos para esta información</p>
            )}

        </div>
    );
}
 
export default Ordenes;