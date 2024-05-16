import React from "react";
import { Helmet } from "react-helmet";
import OrderFrom from "../../Software/AccountingSoftware/OrderFrom";
import SeoPackege from "./SeoPackege";
import SeoInfo from "./SeoInfo";
import WhatServices from "./WhatServices";
const Seo = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>SEO</title>
                </Helmet>
                <SeoInfo />

                <SeoPackege />

                <WhatServices />

                <OrderFrom />
            </div>

        </>
    )
}
export default Seo;