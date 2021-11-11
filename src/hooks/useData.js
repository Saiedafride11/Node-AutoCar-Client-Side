import { useEffect, useState } from "react";


const useData = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://polar-dusk-34230.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return [cars, setCars]
};

export default useData;