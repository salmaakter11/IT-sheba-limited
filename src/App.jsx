import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home"
import MessegeFounder from "./pages/About/MessegeFounder"
import CompanyProfile from "./pages/About/CompanyProfile/CompanyProfile"
import Footer from "./pages/Footer"
import TeamMember from "./pages/About/TeamMember"
import PaymentSystem from "./pages/About/PaymentSystem"
import JoinTheTeam from "./pages/About/JoinTheTeam"
import OurClients from "./pages/About/OurClients"
import OurSkills from "./pages/About/OurSkills"
import Domain from "./pages/Website/Domain/Domain"
import Hosting from "./pages/Website/Hosting/Hosting"
import WebDevelopment from "./pages/Website/Web/WebDevelopment";
import EcommerceWebsite from "./pages/Website/Ecommerce/EcommerceWebsite";
import AccountingSoftware from "./pages/Software/AccountingSoftware/AccountingSoftware";
import TravelAgencySoftware from "./pages/Software/TravelAgency/TravelAgencySoftware";
import HRPayrollSoftware from "./pages/Software/HRPayrollSoftware/HRPayrollSoftware";
import InventorySoftware from "./pages/Software/InventorySoftware/InventorySoftware";
import LawFarm from "./pages/Software/LawFarmSoftware/LawFarm"
import PharmacyMenagement from "./pages/Software/PharmacyMenagement/PharmacyMenagement";
import HospitalERP from "./pages/Software/HospitalERP/HospitalERP";
import PosSoftware from "./pages/Software/PosSoftware/PosSoftware";
import PrescriptionManagement from "./pages/Software/PrescriptionManagement/PrescriptionManagement";
import RestaurantManagement from "./pages/Software/Restaurant/RestaurantManagement";
import SchoolManagement from "./pages/Software/SchoolManagement/SchoolManagement";
import MaskingSms from "./pages/BulkSms/MaskingSms/MaskingSms";
import NonMasking from "./pages/BulkSms/NonMasking/NonMasking";
import SmsMarketing from "./pages/BulkSms/SmsMarketing/SmsMarketing";
import LocationBasedSms from "./pages/BulkSms/LocationBasedSms/LocationBasedSms"
import ElectionSms from "./pages/BulkSms/ElectionSms/ElectionSms";
import Seo from "./pages/Marketing/SEO/Seo";
import Telemarketing from "./pages/Marketing/Telemarketing/Telemarketing";
import EmailMarketing from "./pages/Marketing/EmailMarketing/EmailMarketing";
import WhatsappMarketing from "./pages/Marketing/WhatsappMarketing/WhatsappMarketing";
import DigitalMarketing from "./pages/Marketing/DigitalMarketing/DigitalMarketing";
import Cctv from "./pages/Products/Cctv/Cctv";
import WiftCamera from "./pages/Products/WiftCamera/WiftCamera"
import AttendanceMachine from "./pages/Products/AttendanceMachine/AttendanceMachine";
import Pabx from "./pages/Products/Pabx/Pabx";
import Contact from "./pages/ContactUS/Contact"
function App() {

  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Messegefounder" element={<MessegeFounder />} />
          <Route path="CompanyProfile" element={<CompanyProfile />} />
          <Route path="TeamMember" element={<TeamMember />} />
          <Route path="PaymentSystem" element={<PaymentSystem />} />
          <Route path="JoinTheTeam" element={<JoinTheTeam />} />
          <Route path="OurClients" element={<OurClients />} />
          <Route path="OurSkills" element={<OurSkills />} />
          <Route path="Domain" element={<Domain />} />
          <Route path="Hosting" element={<Hosting />} />
          <Route path="WebDevelopment" element={<WebDevelopment />} />
          <Route path="EcommerceWebsite" element={<EcommerceWebsite />} />
          <Route path="AccountingSoftware" element={<AccountingSoftware />} />
          <Route path="TravelAgencySoftware" element={<TravelAgencySoftware />} />
          <Route path="HRPayrollSoftware" element={<HRPayrollSoftware />} />
          <Route path="InventorySoftware" element={<InventorySoftware />} />
          <Route path="LawFarm" element={<LawFarm />} />
          <Route path="PharmacyMenagement" element={<PharmacyMenagement />} />
          <Route path="HospitalERP" element={<HospitalERP />} />
          <Route path="PosSoftware" element={<PosSoftware />} />
          <Route path="PrescriptionManagement" element={<PrescriptionManagement />} />
          <Route path="RestaurantManagement" element={<RestaurantManagement />} />
          <Route path="SchoolManagement" element={<SchoolManagement />} />
          <Route path="MaskingSms" element={<MaskingSms />} />
          <Route path="NonMasking" element={<NonMasking />} />
          <Route path="SmsMarketing" element={<SmsMarketing />} />
          <Route path="LocationBasedSms" element={<LocationBasedSms />} />
          <Route path="ElectionSms" element={<ElectionSms />} />
          <Route path="Seo" element={<Seo />} />
          <Route path="Telemarketing" element={<Telemarketing />} />
          <Route path="EmailMarketing" element={<EmailMarketing />} />
          <Route path="WhatsappMarketing" element={<WhatsappMarketing />} />
          <Route path="DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="Cctv" element={<Cctv />} />
          <Route path="WiftCamera" element={<WiftCamera />} />
          <Route path="AttendanceMachine" element={<AttendanceMachine />} />
          <Route path="Pabx" element={<Pabx />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
