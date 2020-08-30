import React from 'react';
import { CircularProgress } from "@material-ui/core";

const Loading = () => { 
    return (
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          zIndex: "6000",
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  };

  export default Loading;