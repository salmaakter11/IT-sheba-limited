import React from "react";
import { Helmet } from "react-helmet";
import OrderFrom from "../../Software/AccountingSoftware/OrderFrom";
import EmailMarketingPackege from "./EmailMarketingPackege";
import EmailMarketinginfo from "./EmailMarketinginfo"
import EmailMarketingDatabase from "./EmailMarketingDatabase";
const EmailMarketing = () => {
    return (
        <>
            <div className="main">
            <Helmet>
          <title>Email Marketing</title>
        </Helmet>
                <EmailMarketinginfo />

                <EmailMarketingPackege />

               <EmailMarketingDatabase/>
              
                <OrderFrom />
            </div>


        </>
    )
}
export default EmailMarketing;