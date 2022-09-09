import axios from "axios";
import { createContext, useState, useEffect } from "react";

import { generarId, formatearFecha } from "../helpers/funciones";
import iconos from "../helpers/iconos";

const RestaurantContext = createContext();

const RestaurantProvider = ({children}) => {

    const[productosS, setProductos] = useState([]);
    const[iconosS, setIconos] = useState([iconos]);
    const[productosActual, setProductosActual] = useState([]);
    const[pedido, setPedido] = useState([]);
    const[orden, setOrden] = useState({})
    const[pedidos, setPedidos] = useState([]);
    const[precio, setPrecio] = useState(0);
    const[catActual, setCatActual]=useState('cafe');
    const[total, setTotal]=useState(0);
    const[cantidad, setCantidad]=useState(0)

    useEffect(() => {
        const obtenerProductos = async () => {
            const data = await axios.get('https://daniel-la0303.github.io/json-restaurante/db.json')
            setProductos(data.data.productos); 
        }

        obtenerProductos();
    }, []);

    useEffect(() => {
        // const variable = "cafe"
        const nuevoProducto= productosS.filter( pro => pro.categoriaId === catActual );
        setProductosActual(nuevoProducto);

    }, [productosS]);

    useEffect(() => {
      setTotal(total+precio)
    }, [pedido])
    
    

    //functions
    const handleClickIcon = (id) => {
        const nuevoProducto= productosS.filter( pro => pro.categoriaId === id );
        setProductosActual(nuevoProducto);
        setCatActual(id);
    }

    const handleNuevoPedido = (producto) => {
        // console.log(producto);
        const {precio} = producto
        setPrecio(precio)
        console.log(producto, precio, total);
        setPedido([
            ...pedido, producto
        ]);
    }

    const handleEliminarProPedido = (id) => {
        const nuevoPedido= pedido.filter( ped => ped.id !== id );
        setPedido(nuevoPedido);
    }

    const handleAgregarPedido = (pedido, nombre) => {

        console.log(pedido, nombre);
        const fecha = new Date();
        orden.pedido = pedido;
        orden.fecha = formatearFecha(fecha);
        orden.id = generarId();
        orden.nombre = nombre;
        setPedidos([
            ...pedidos, orden
        ]);
        setPedido([]);
        setOrden({});
        
        // console.log(pedidos);
    }

    const clickMas = (cant) => {
        console.log('mas');
        setCantidad(cant+1)
    }
    const clickMenos = (cant) => {
        setCantidad(cant-1)
    }
    

    return(
        <RestaurantContext.Provider
            value={{
                productosS,
                iconosS,
                handleClickIcon,
                handleNuevoPedido,
                handleEliminarProPedido,
                handleAgregarPedido,
                clickMas,
                clickMenos,
                productosActual,
                pedido,
                pedidos,
                catActual,
                cantidad
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}

export {RestaurantProvider}
export default RestaurantContext;