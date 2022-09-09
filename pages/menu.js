import Link from "next/link";
import Header from "../components/Header";
import useRestaurant from "../hooks/useRestaurant";

const Menu = () => {

    const{autorizado} = useRestaurant();

    return (  
        <div>
            {autorizado ? (
                <>
                    <Header  pag={'Menu'}/>
                    Menu y precios
                </>
            ): (
                <p>Usted no tiene los permisos para esta información</p>
            )}


        </div>
    );
}
 
export default Menu;