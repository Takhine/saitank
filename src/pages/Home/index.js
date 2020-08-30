import React, {useState, useEffect} from 'react';
// Components
import Banner from './Banner';
import Loading from 'components/Loading';
export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(()=>(
        setTimeout(() => {
            setLoading(false);
        }, 800)
    ),[])
    return (
        <div id="homepage">
        {loading  &&
            <Loading />
        }
            <Banner />
        </div>
    )
}
