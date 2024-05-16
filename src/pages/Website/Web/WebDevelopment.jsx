import React from "react";
import { Helmet } from "react-helmet";
import WebBanner from "./WebBanner";
import Webinfo from "./Webinfo";
import WebsitePackage from "./WebsitePackage";
import HowToSelect from "./HowToSelect"
import WebSupport from "./WebSupport";
import WebProject from "./WebProject";
const WebDevelopment = () => {
    return (
        <>

            <div className="main">
                <Helmet>
                    <title>Web Development</title>
                </Helmet>
                <WebBanner />

                <Webinfo />

                <WebsitePackage />

                <HowToSelect />

                <WebSupport />

                <WebProject />

            </div>
        </>
    )
}
export default WebDevelopment;