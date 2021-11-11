import { useEffect, useState } from "react";


const useReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://polar-dusk-34230.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return [reviews]
};

export default useReview;