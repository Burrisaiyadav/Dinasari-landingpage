import React from 'react';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="main-badge">
              <span className="dot" />
              LEGAL DOCUMENT
            </div>
            <h1>{title}</h1>
            <p className="last-updated">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="rich-text-content">
            {children}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .legal-page { background: white; font-family: 'Outfit', sans-serif; }

        .legal-hero {
          padding-top: 180px;
          padding-bottom: 60px;
          text-align: center;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .main-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(31, 138, 61, 0.08);
          border-radius: 50px;
          color: var(--primary);
          font-weight: 700;
          font-size: 12px;
          margin-bottom: 32px;
          letter-spacing: 1px;
        }

        .dot { height: 6px; width: 6px; background: var(--primary); border-radius: 50%; }

        .legal-hero h1 {
          font-size: 64px;
          font-weight: 900;
          letter-spacing: -2px;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .last-updated { color: var(--text-muted); font-weight: 500; }

        .rich-text-content h2 { font-size: 28px; font-weight: 800; margin: 48px 0 24px; color: var(--text-main); }
        .rich-text-content p { font-size: 17px; color: var(--text-muted); line-height: 1.8; margin-bottom: 24px; }
        .rich-text-content ul { padding-left: 24px; margin-bottom: 24px; }
        .rich-text-content li { font-size: 17px; color: var(--text-muted); line-height: 1.8; margin-bottom: 12px; }

        @media (max-width: 992px) {
          .legal-hero h1 { font-size: 40px; }
        }
      `}} />
    </div>
  );
};

export const TermsPage = () => (
  <LegalLayout title="Terms of Service" lastUpdated="July 2026">
    <h2>1. Governing Law & Compliance</h2>
    <p>These terms are governed by the laws of India, including the Indian Contract Act, 1872 and the Information Technology Act, 2000. Exclusive jurisdiction is Bengaluru, India.</p>

    <h2>2. Platform Intermediary Status</h2>
    <p>Dinasari operates as an intermediary under Section 79 of the IT Act, 2000. We connect independent Farmers with independent Workers/Leaders. We do not employ workers or control daily farming work.</p>

    <h2>3. Eligibility</h2>
    <p>You must be at least 18 years old. Under the Child Labour (Prohibition and Regulation) Act, 1986, child labor under 14 is strictly prohibited.</p>

    <h2>4. User Conduct</h2>
    <p>Do not post fraudulent jobs. Do not discriminate or harass based on caste, religion, gender, age, language, or region.</p>

    <h2>5. Payments & Fees</h2>
    <p>Farmers must pay workers promptly. Dinasari reserves the right to charge platform fees in the future, which will be shown beforehand.</p>

    <h2>6. Disclaimers & Liability</h2>
    <p>The app is provided 'as is'. We are not liable for crop yield failures, farm hazards, or wage defaults between parties.</p>

    <h2>7. Grievance Redressal</h2>
    <p>
      <strong>Grievance Officer:</strong> Hitesh<br />
      <strong>Email:</strong> support@dinasari.in<br />
      <strong>Acknowledgment:</strong> 24 Hours | <strong>Resolution:</strong> 15 Days.
    </p>
  </LegalLayout>
);

export const PrivacyPage = () => (
  <LegalLayout title="Privacy Policy (DPDP Act 2023 Compliant)" lastUpdated="July 2026">
    <h2>1. Consent & Rights (Data Principal)</h2>
    <p>By using Dinasari, you give your explicit consent to process your personal data.</p>
    <p>Your rights under India's Digital Personal Data Protection (DPDP) Act, 2023:</p>
    <ul>
      <li><strong>Right to Access:</strong> Request summary of processed data.</li>
      <li><strong>Right to Correction/Erasure:</strong> Correct errors or delete account data.</li>
      <li><strong>Right to Withdraw Consent:</strong> Revoke consent anytime.</li>
      <li><strong>Right to Grievance:</strong> Raise queries to the DPO or escalate to the DPB of India.</li>
    </ul>

    <h2>2. Data We Collect</h2>
    <ul>
      <li>Name, Phone Number, Profile Photo, Age, Gender.</li>
      <li><strong>Role:</strong> Farmer, Worker, Leader, Machinery Owner.</li>
      <li><strong>GPS Location (Foreground & Background):</strong> Essential to find nearby jobs, match workers, navigate, and verify QR attendance.</li>
      <li>Bank/UPI details for payment tracking.</li>
    </ul>

    <h2>3. Use of Personal Data</h2>
    <p>Data is processed to match jobs, confirm QR attendance, send OTPs via SMS, and resolve disputes.</p>

    <h2>4. Data Retention & Security</h2>
    <p>Data is kept as long as your account is active. We use industry-standard HTTPS, JWT, and encrypted databases to protect your data.</p>

    <h2>5. Grievance / Data Protection Officer</h2>
    <p><strong>Contact:</strong> support@dinasari.in</p>
  </LegalLayout>
);

export const SafetyPage = () => (
  <LegalLayout title="Safety & Trust" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
    <p>Safety is our top priority. We strive to provide a secure environment.</p>

    <h2>1. Farm Work Safety Protocols</h2>
    <ul>
      <li><strong>Machinery:</strong> Operate heavy machinery only if trained. Keep safety guards in place.</li>
      <li><strong>Chemicals:</strong> Wear protective gear when handling fertilizers/pesticides. Wash hands thoroughly.</li>
      <li><strong>Hydration:</strong> Drink plenty of water and take breaks in shade during heat.</li>
      <li><strong>First Aid:</strong> Keep a first aid kit ready on the farm.</li>
    </ul>

    <h2>2. Platform Trust & Verification</h2>
    <ul>
      <li><strong>Verification:</strong> Phone OTP verification on registration.</li>
      <li><strong>Reviews:</strong> Two-way rating system keeps the community honest.</li>
      <li><strong>Underage Labor:</strong> Strict prohibition of child labor. All users must be 18+.</li>
    </ul>

    <h2>3. Harassment & Abuse Policy</h2>
    <ul>
      <li><strong>Zero Tolerance:</strong> Report harassment or abuse immediately.</li>
      <li><strong>Dispute Resolution:</strong> Raise a dispute ticket in the app.</li>
      <li><strong>Emergency:</strong> In case of immediate threat, call 112.</li>
    </ul>
  </LegalLayout>
);

export const CookiePage = () => (
  <LegalLayout title="Cookie & Local Storage Policy" lastUpdated="July 2026">
    <h2>1. Local Storage & Async Storage</h2>
    <p>Dinasari uses HTML5 LocalStorage, React Native AsyncStorage, and Expo SecureStore to ensure offline capabilities.</p>

    <h2>2. How We Use Storage</h2>
    <ul>
      <li><strong>Authentication:</strong> We store your JWT session token securely using device keystores (Expo SecureStore) so you don't need to re-verify OTP on every app launch.</li>
      <li><strong>Preferences:</strong> We store your language code and active role preference.</li>
      <li><strong>Cache:</strong> We store lists offline to save your mobile data package.</li>
    </ul>

    <h2>3. Management</h2>
    <p>To clear your authentication token and reset preferences, simply tap the Logout button on the Profile screen.</p>
  </LegalLayout>
);

export const UserAgreementPage = () => (
  <LegalLayout title="User Agreement & Code of Conduct" lastUpdated="July 2026">
    <h2>1. Core Ethics</h2>
    <ul>
      <li><strong>Non-Discrimination:</strong> Equal opportunities. Zero tolerance for caste, gender, or religious discrimination.</li>
      <li><strong>Child Labor:</strong> No hiring of children under 14. Workers must be 18+ to register.</li>
      <li><strong>Safety first:</strong> Farmers should provide clean drinking water and a safe environment.</li>
    </ul>

    <h2>2. Farmer Duties</h2>
    <p>Post accurate rates and details. Pay workers immediately upon work completion.</p>

    <h2>3. Worker Duties</h2>
    <p>Arrive on time, complete tasks diligently, and scan QR for check-in and check-out.</p>

    <h2>4. Group Leader Duties</h2>
    <p>Register real members with their consent. Manage QR scanning fairly. Distribute wages to members fairly.</p>
  </LegalLayout>
);
