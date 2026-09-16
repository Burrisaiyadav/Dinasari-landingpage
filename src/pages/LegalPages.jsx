import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const navTabs = [
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Refund and Cancellation', path: '/refund-policy' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Safety & Trust', path: '/safety' },
  { name: 'Cookie Policy', path: '/cookies' },
  { name: 'User Agreement', path: '/agreement' },
];

const LegalLayout = ({ title, description, children }) => {
  const location = useLocation();

  return (
    <div className="legal-page">
      <SEO title={`${title} | dinasari`} description={description} />
      
      <section className="legal-hero">
        <div className="container" style={{ maxWidth: '820px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1>{title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Document Navigation Tabs */}
      <div className="legal-tabs-bar">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="tabs-scroller">
            {navTabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) => 
                  `legal-tab-item ${isActive || (tab.path === '/terms' && location.pathname === '/terms-and-conditions') || (tab.path === '/privacy' && location.pathname === '/privacy-policy') || (tab.path === '/refund-policy' && location.pathname === '/cancellation-and-refund') ? 'active' : ''}`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <section className="legal-content section-padding">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="rich-text-content">
            {children}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .legal-page { 
          background: #ffffff; 
          font-family: 'Outfit', sans-serif; 
          color: #1a1c19;
        }

        .legal-hero {
          padding-top: 150px;
          padding-bottom: 30px;
          text-align: left;
          background: #ffffff;
          border-bottom: 1px solid #eef2ed;
        }

        .legal-hero h1 {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -1px;
          color: #1a1c19;
          margin: 0;
        }

        /* ── Tabs bar ── */
        .legal-tabs-bar {
          background: #fbfdfa;
          border-bottom: 1px solid #e4ebe1;
          position: sticky;
          top: 76px;
          z-index: 100;
        }

        .tabs-scroller {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding: 10px 0;
          scrollbar-width: thin;
        }

        .legal-tab-item {
          font-size: 13.5px;
          font-weight: 600;
          color: #4f574d;
          text-decoration: none;
          padding: 7px 16px;
          border-radius: 50px;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .legal-tab-item:hover {
          background: rgba(31, 138, 61, 0.08);
          color: var(--primary);
        }

        .legal-tab-item.active {
          background: var(--primary);
          color: #ffffff;
        }

        /* ── Content Styling ── */
        .rich-text-content {
          font-size: 15.5px;
          line-height: 1.85;
          color: #242922;
          padding-top: 20px;
        }

        .rich-text-content h2 { 
          font-size: 22px; 
          font-weight: 800; 
          margin: 36px 0 14px; 
          color: #1a1c19;
        }

        .rich-text-content h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 24px 0 10px;
          color: #1a1c19;
        }

        .rich-text-content p { 
          font-size: 15.5px; 
          color: #333a30; 
          line-height: 1.85; 
          margin-bottom: 20px; 
          text-align: justify;
        }

        .clause-list {
          list-style: decimal;
          padding-left: 22px;
          margin-bottom: 24px;
        }

        .clause-item {
          margin-bottom: 18px;
          padding-left: 6px;
        }

        .clause-item > p {
          margin-bottom: 12px;
        }

        .sub-clause-list {
          list-style: decimal;
          padding-left: 20px;
          margin: 12px 0 16px;
        }

        .sub-clause-item {
          margin-bottom: 12px;
          padding-left: 4px;
        }

        @media (max-width: 900px) {
          .legal-hero h1 { font-size: 32px; }
          .rich-text-content h2 { font-size: 20px; }
        }
      `}} />
    </div>
  );
};

/* ─── TERMS & CONDITIONS (Pages 1 & 2 of PDF) ─── */
export const TermsPage = () => (
  <LegalLayout 
    title="Terms & Conditions" 
    description="Terms and Conditions for dinasari (dinasari.co.in) owned by dinasari with registered office at tarlupadu."
  >
    <ol className="clause-list">
      <li className="clause-item">
        <p>
          This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.
        </p>
      </li>

      <li className="clause-item">
        <p>
          This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name dinasari.co.in ('Website'), including the related mobile site and mobile application (hereinafter referred to as 'Platform').
        </p>
      </li>

      <li className="clause-item">
        <p>
          The Platform is owned by dinasari, a company incorporated under the Companies Act, 1956 with its registered office at tarlupadu (hereinafter referred to as ‘Platform Owner’, 'we', 'us', 'our')..
        </p>
      </li>

      <li className="clause-item">
        <p>
          Your use of the Platform and services and tools are governed by the following terms and conditions (“Terms of Use”) as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with the Platform Owner and these terms and conditions including the policies constitute Your binding obligations, with Platform Owner. These Terms of Use relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, 'Services'). Any terms and conditions proposed by You which are in addition to or which conflict with these Terms of Use are expressly rejected by the Platform Owner and shall be of no force or effect. These Terms of Use can be modified at any time without assigning any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates..
        </p>
      </li>

      <li className="clause-item">
        <p>
          For the purpose of these Terms of Use, wherever the context so requires ‘you’, 'your' or ‘user’ shall mean any natural or legal person who has agreed to become a user/buyer on the Platform..
        </p>
      </li>

      <li className="clause-item">
        <p>
          <strong>ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING..</strong>
        </p>
      </li>

      <li className="clause-item">
        <p>The use of Platform and/or availing of our Services is subject to the following Terms of Use:</p>
        <ol className="sub-clause-list">
          <li className="sub-clause-item">
            To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account on the Platform..
          </li>
          <li className="sub-clause-item">
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law..
          </li>
          <li className="sub-clause-item">
            Your use of our Services and the Platform is solely and entirely at your own risk and discretion for which we shall not be liable to you in any manner. You are required to independently assess and ensure that the Services meet your requirements..
          </li>
          <li className="sub-clause-item">
            The contents of the Platform and the Services are proprietary to us and are licensed to us. You will not have any authority to claim any intellectual property rights, title, or interest in its contents. The contents includes and is not limited to the design, layout, look and graphics..
          </li>
          <li className="sub-clause-item">
            You acknowledge that unauthorized use of the Platform and/or the Services may lead to action against you as per these Terms of Use and/or applicable laws..
          </li>
          <li className="sub-clause-item">
            You agree to pay us the charges associated with availing the Services..
          </li>
          <li className="sub-clause-item">
            You agree not to use the Platform and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
          </li>
          <li className="sub-clause-item">
            You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites. These links are provided for your convenience for provide further information..
          </li>
          <li className="sub-clause-item">
            You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the Platform Owner for the Services..
          </li>
        </ol>
      </li>

      <li className="clause-item" value="10">
        <p>
          You shall indemnify and hold harmless Platform Owner, its affiliates, group companies (as applicable) and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorney's fees, made by any third party or penalty imposed due to or arising out of Your breach of this Terms of Use, privacy Policy and other Policies, or Your violation of any law, rules or regulations or the rights (including infringement of intellectual property rights) of a third party.
        </p>
      </li>

      <li className="clause-item">
        <p>
          Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event..
        </p>
      </li>

      <li className="clause-item">
        <p>
          These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India..
        </p>
      </li>

      <li className="clause-item">
        <p>
          All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in tarlupadu and .
        </p>
      </li>

      <li className="clause-item">
        <p>
          All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website
        </p>
      </li>
    </ol>
  </LegalLayout>
);

/* ─── PRIVACY POLICY (Pages 3 & 4 of PDF) ─── */
export const PrivacyPage = () => (
  <LegalLayout 
    title="Privacy Policy" 
    description="Privacy Policy for dinasari (dinasari.co.in) owned by dinasari with registered office at tarlupadu."
  >
    <h2>Introduction</h2>
    <p>
      This Privacy Policy describes how dinasari and its affiliates (collectively "dinasari, we, our, us") collect, use, share, protect or otherwise process your information/ personal data through our website dinasari.co.in (hereinafter referred to as Platform). Please note that you may be able to browse certain sections of the Platform without registering with us.We do not offer any product/service under this Platform outside India and your personal data will primarily be stored and processed in India. By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.
    </p>

    <h2>Collection</h2>
    <p>
      We collect your personal data when you use our Platform, services or otherwise interact with us during the course of our relationship.and related information provided from time to time. Some of the information that we may collect includes but is not limited to personal data / information provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email IDand/or any such information shared as proof of identity or address. Some of the sensitive personal data may be collected with your consent, such as your bank account or credit or debit card or other payment instrument information or biometric information such as your facial features or physiological information (in order to enable use of certain features when opted for, available on the Platform) etc all of the above being in accordance with applicable law(s) You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform. We may track your behaviour, preferences, and other information that you choose to provide on our Platform. This information is compiled and analysed on an aggregated basis. We will also collect your information related to your transactions on Platform and such third-party business partner platforms. When such a third-party business partner collects your personal data directly from you, you will be governed by their privacy policies. We shall not be responsible for the third-party business partner’s privacy practices or the content of their privacy policies, and we request you to read their privacy policies prior to disclosing any information. If you receive an email, a call from a person/association claiming to be dinasari seeking any personal data like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such information. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.
    </p>

    <h2>Usage</h2>
    <p>
      We use personal data to provide the services you request. To the extent we use your personal data to market to you, we will provide you the ability to opt-out of such uses. We use your personal data to assist sellers and business partners in handling and fulfilling orders; enhancing customer experience; to resolve disputes; troubleshoot problems; inform you about online and offline offers, products, services, and updates; customise your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; conduct marketing research, analysis and surveys; and as otherwise described to you at the time of collection of information. You understand that your access to these products/services may be affected in the event permission is not provided to us.
    </p>

    <h2>Sharing</h2>
    <p>
      We may share your personal data internally within our group entities, our other corporate entities, and affiliates to provide you access to the services and products offered by them. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out. We may disclose personal data to third parties such as sellers, business partners, third party service providers including logistics partners, prepaid payment instrument issuers, third-party reward programs and other payment opted by you. These disclosure may be required for us to provide you access to our services and products offered to you, to comply with our legal obligations, to enforce our user agreement, to facilitate our marketing and advertising activities, to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services. We may disclose personal and sensitive personal data to government agencies or other authorised law enforcement agencies if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal data to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms of Use or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.
    </p>

    <h2>Security Precautions</h2>
    <p>
      To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable security practices and procedures. Once your information is in our possession or whenever you access your account information, we adhere to our security guidelines to protect it against unauthorised access and offer the use of a secure server. However, the transmission of information is not completely secure for reasons beyond our control. By using the Platform, the users accept the security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform. Users are responsible for ensuring the protection of login and password records for their account.
    </p>

    <h2>Data Deletion and Retention</h2>
    <p>
      You have an option to delete your account by visiting your profile and settings on our Platform , this action would result in you losing all information related to your account. You may also write to us at the contact information provided below to assist you with these requests. We may in event of any pending grievance, claims, pending shipments or any other services we may refuse or delay deletion of the account. Once the account is deleted, you will lose access to the account. We retain your personal data information for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. However, we may retain data related to you if we believe it may be necessary to prevent fraud or future abuse or for other legitimate purposes. We may continue to retain your data in anonymised form for analytical and research purposes.
    </p>

    <h2>Your Rights</h2>
    <p>
      You may access, rectify, and update your personal data directly through the functionalities provided on the Platform.
    </p>

    <h2>Consent</h2>
    <p>
      By visiting our Platform or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information on the Platform in accordance with this Privacy Policy. If you disclose to us any personal data relating to other people, you represent that you have the authority to do so and permit us to use the information in accordance with this Privacy Policy. You, while providing your personal data over the Platform or any partner platforms or establishments, consent to us (including our other corporate entities, affiliates, lending partners, technology partners, marketing channels, business partners and other third parties) to contact you through SMS, instant messaging apps, call and/or e-mail for the purposes specified in this Privacy Policy. You have an option to withdraw your consent that you have already provided by writing to the Grievance Officer at the contact information provided below. Please mention “Withdrawal of consent for processing personal data” in your subject line of your communication. We may verify such requests before acting on our request. However, please note that your withdrawal of consent will not be retrospective and will be in accordance with the Terms of Use, this Privacy Policy, and applicable laws. In the event you withdraw consent given to us under this Privacy Policy, we reserve the right to restrict or deny the provision of our services for which we consider such information to be necessary.
    </p>

    <h2>Changes to this Privacy Policy</h2>
    <p>
      Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices. We may alert / notify you about the significant changes to the Privacy Policy, in the manner as may be required under applicable laws.
    </p>

    <h2>Grievance Officer</h2>
    <p>
      Insert Name of the Office: Grievance Officer<br />
      Designation: Grievance Officer<br />
      Insert Name and Address of the Company: dinasari, tarlupadu
    </p>
  </LegalLayout>
);

/* ─── REFUND AND CANCELLATION POLICY (Page 6 of PDF) ─── */
export const RefundPolicyPage = () => (
  <LegalLayout 
    title="Refund and Cancellation policy" 
    description="Refund and Cancellation policy for dinasari."
  >
    <p>
      This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the Platform. Under this policy:
    </p>

    <ol className="clause-list">
      <li className="clause-item">
        <p>
          Cancellations will only be considered if the request is made <strong>5 days</strong> of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
        </p>
      </li>

      <li className="clause-item">
        <p>
          <strong>dinasari</strong> does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that the quality of the product delivered is not good.
        </p>
      </li>

      <li className="clause-item">
        <p>
          In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within <strong>5 days</strong> of receipt of products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within <strong>5 days</strong> of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.
        </p>
      </li>

      <li className="clause-item">
        <p>
          In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.
        </p>
      </li>

      <li className="clause-item">
        <p>
          In case of any refunds approved by <strong>dinasari</strong>, it will take <strong>12 days</strong> for the refund to be processed to you.
        </p>
      </li>
    </ol>
  </LegalLayout>
);

/* ─── SAFETY & TRUST PAGE ─── */
export const SafetyPage = () => (
  <LegalLayout 
    title="Safety & Trust" 
    description="Safety and trust guidelines for the dinasari platform."
  >
    <p>Safety is our top priority. We strive to provide a secure environment.</p>

    <h2>1. Farm Work Safety Protocols</h2>
    <p>
      Operate machinery only if trained. Wear protective gear when handling chemicals. Farm owners should provide clean drinking water. First aid kits should be accessible.
    </p>

    <h2>2. Platform Trust & Verification</h2>
    <p>
      Phone OTP verification on registration. Two-way rating system keeps the community honest. Strict prohibition of child labor. All users must be 18+.
    </p>

    <h2>3. Harassment & Abuse Policy</h2>
    <p>
      Zero tolerance for discrimination, harassment, or abuse. Report violations immediately.
    </p>
  </LegalLayout>
);

/* ─── COOKIE & LOCAL STORAGE POLICY ─── */
export const CookiePage = () => (
  <LegalLayout 
    title="Cookie & Local Storage Policy" 
    description="Cookie and storage policy for dinasari."
  >
    <h2>1. Local Storage & Async Storage</h2>
    <p>dinasari uses HTML5 LocalStorage, React Native AsyncStorage, and Expo SecureStore to ensure offline capabilities.</p>

    <h2>2. How We Use Storage</h2>
    <p>
      We use storage for session authentication, user role and language preferences, and offline data caching.
    </p>

    <h2>3. Management</h2>
    <p>
      To clear your authentication token and reset preferences, simply tap the Logout button on the Profile screen.
    </p>
  </LegalLayout>
);

/* ─── USER AGREEMENT & CODE OF CONDUCT ─── */
export const UserAgreementPage = () => (
  <LegalLayout 
    title="User Agreement & Code of Conduct" 
    description="User agreement and code of conduct for dinasari."
  >
    <h2>1. Core Ethics</h2>
    <p>
      Equal opportunities. Zero tolerance for discrimination. No hiring of children under 14. Workers must be 18+ to register. Safe and humane working environment.
    </p>

    <h2>2. Farmer Duties</h2>
    <p>Post accurate rates and details. Pay workers promptly upon work completion.</p>

    <h2>3. Worker Duties</h2>
    <p>Arrive on time, complete tasks diligently, and scan QR for check-in and check-out.</p>

    <h2>4. Group Leader Duties</h2>
    <p>Register real members with their consent. Manage QR scanning fairly. Distribute wages to members fairly.</p>
  </LegalLayout>
);
