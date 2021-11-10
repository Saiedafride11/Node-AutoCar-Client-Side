import { useEffect, useState } from "react";


const useData = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('/car.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return [cars]
};

export default useData;