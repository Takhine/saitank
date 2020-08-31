import React, {useState, useEffect} from 'react';
// Components
import Banner from './Banner';
import Introduction from './Introduction';
import History from "./History";
import Types from "./Types";


import Loading from 'components/Loading';
export default function Flexitank() {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        }, 1300)
    },[])
    return (
        <div id="flexitank">
        {loading  &&
            <Loading />
        }
            <Banner />
            <Introduction />
            <History />
            <Types />
        </div>
    )
}
