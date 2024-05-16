import React from 'react';
import { Helmet } from "react-helmet";
import HostingBd from './HostingBd';
import HostingFeatures from './HostingFeatures';
import HostingpriceFrom from './HostingpriceFrom';

const HostingComponent = () => {
  return (
    <>
      <div className="main">
        <Helmet>
          <title>Hosting</title>
        </Helmet>
        
        <HostingBd />

        <HostingFeatures />

        <HostingpriceFrom />

      </div>

    </>
  )
}
export default HostingComponent;