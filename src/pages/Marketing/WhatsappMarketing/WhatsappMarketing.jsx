import React from "react";
import { Helmet } from "react-helmet";
import WhatsappMarketingPackege from "./WhatsappMarketingPackege";
import WhatsappMarketinginfo from "./WhatsappMarketinginfo";
const WhatsappMarketing = () => {
  return (
    <>
      <div className="main">
      <Helmet>
          <title>Whatsapp Marketing</title>
        </Helmet>
       <WhatsappMarketinginfo/>
        <WhatsappMarketingPackege />
      </div>

    </>
  )
}
export default WhatsappMarketing;