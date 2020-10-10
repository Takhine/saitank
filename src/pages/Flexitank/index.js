import React, { useState, useEffect } from "react";
// Components
import Banner from "./Banner";
import Introduction from "./Introduction";
import Types from "./Types";
import Layout from "Layout";
import Loading from "components/Loading";
// Images
import flexitank from 'static/images/flexitank/desktop-flexitank.png';

export default function Flexitank() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);
  return (
    <Layout>
      <div id="flexitank">
        {loading && <Loading />}
        <Banner />
        <Introduction />
        <img className="desktop-flexitank" src={flexitank} alt="Sai Flexitank" />
        <Types />
      </div>
    </Layout>
  );
}
