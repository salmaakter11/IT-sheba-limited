
import { Helmet } from "react-helmet";
import DigitalMarketingPackege from "./DigitalMarketingPackege";
import GoogleAds from "./GoogleAds";
import DigitalMarketingInfo from "./DigitalMarketingInfo";
const DigitalMarketing = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>DigitalMarketing</title>
                </Helmet>
                <DigitalMarketingInfo />
                <GoogleAds />
                <DigitalMarketingPackege />
            </div>


        </>
    )
}
export default DigitalMarketing;