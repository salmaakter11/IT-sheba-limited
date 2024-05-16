import EcommerceBanner from "./EcommerceBanner";
import { Helmet } from "react-helmet";
import EcommerceFeatures from "./EcommerceFeatures";
import EcommerceProject from "./EcommerceProject";
import EcommerceSupport from "./EcommerceSupport";
import EcommerceWebsiteDesign from "./EcommerceWebsiteDesign";
import EcommerceWebsitePackege from "./EcommerceWebsitePackege";
import Ecommerceinfo from "./Ecommerceinfo";

const EcommerceWebsite = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Ecommerce Website</title>
                </Helmet>

                <EcommerceBanner />
                <Ecommerceinfo />
                <EcommerceFeatures />
                <EcommerceWebsiteDesign />
                <EcommerceSupport />
                <EcommerceWebsitePackege />
                <EcommerceProject />
            </div>

        </>
    )
}
export default EcommerceWebsite;