import Header from "../components/Header";
import useRestaurant from "../hooks/useRestaurant";

const Ordenes = () => {

    const {pedidos} = useRestaurant();
    
    return (  
        <div>
            <Header  pag={'Ordenes'}/>
            {pedidos.map(ped => (
                <div
                    key={ped.id}
                >
                    {ped.fecha}
                </div>
            ))}
        </div>
    );
}
 
export default Ordenes;