import React, {useContext} from 'react';

import RestaurantContext from '../context/RestaunratProvider';
const useRestaurant = () => {
    return useContext(RestaurantContext);
}

export default useRestaurant;