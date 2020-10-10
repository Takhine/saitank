import React, {useState, useEffect} from 'react';
// Components
import Banner from './Banner';
import Loading from 'components/Loading';
import Layout from "Layout";
export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        }, 1300)
    },[])
    return (
        <Layout>
        <div id="homepage">
        {loading  &&
            <Loading />
        }
            <Banner />
        </div>
        </Layout>
    )
}
