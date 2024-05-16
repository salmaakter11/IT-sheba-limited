import React from 'react';
import {Helmet} from "react-helmet";
import CompanyProfileAbout from './CompanyProfileAbout';
import CompanyProfileMembership from './CompanyProfileMembership'
import CompanyProfileServices from './CompanyProfileServices';

const MessegeFounder = () => {
    return (
        <>
            <div className="main">
            <Helmet>
                <title>Company Profile</title>
            </Helmet>
            
               <CompanyProfileAbout/>

               <CompanyProfileMembership/>

                <CompanyProfileServices/>
            </div>
        </>

    );
};

export default MessegeFounder;