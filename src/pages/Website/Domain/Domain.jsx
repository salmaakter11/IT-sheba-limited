import React from 'react';
import { Helmet } from "react-helmet";
import DomainBD from './DomainBD';
import DomainPackage from './DomainPackage';
const Domain = () => {
    return (
        <>
            <div className="main">
            <Helmet>
                    <title>Domain</title>
                </Helmet>
               <DomainBD/>
               <DomainPackage/>
            </div>

        </>
    )
}

export default Domain;
