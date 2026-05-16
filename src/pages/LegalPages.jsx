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
  <LegalLayout title="Terms of Service" lastUpdated="May 15, 2024">
    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the Dinasari Agritech platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
    
    <h2>2. Description of Service</h2>
    <p>Dinasari provides a marketplace connecting farmers with agricultural labor and machinery owners. We do not employ workers directly but facilitate the connection and payment processing.</p>
    
    <h2>3. User Responsibilities</h2>
    <p>As a user, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
    
    <h2>4. Payment Terms</h2>
    <p>All payments made through the platform are subject to a platform fee. Workers are paid after the completion of work as verified by the farmer through the app.</p>
  </LegalLayout>
);

export const PrivacyPage = () => (
  <LegalLayout title="Privacy Policy" lastUpdated="May 15, 2024">
    <h2>1. Information Collection</h2>
    <p>We collect information you provide directly to us when you create an account, such as your name, contact information, and farm/business details.</p>
    
    <h2>2. How We Use Information</h2>
    <p>We use the information we collect to provide, maintain, and improve our services, including matching farmers with workers and processing payments.</p>
    
    <h2>3. Information Sharing</h2>
    <p>We do not share your personal information with third parties except as necessary to provide our services (e.g., sharing a worker's name with a farmer) or as required by law.</p>
    
    <h2>4. Data Security</h2>
    <p>We implement appropriate technical and organizational measures to protect the security of your personal information against unauthorized access or disclosure.</p>
  </LegalLayout>
);

export const SafetyPage = () => (
  <LegalLayout title="Safety & Trust" lastUpdated="May 15, 2024">
    <h2>1. Verified Profiles</h2>
    <p>Every worker and farmer on Dinasari undergoes a mandatory verification process including Aadhaar authentication and background checks.</p>
    
    <h2>2. On-Site Safety</h2>
    <p>We encourage all users to follow best practices for agricultural safety. Farmers are expected to provide a safe working environment for all contracted help.</p>
    
    <h2>3. Dispute Resolution</h2>
    <p>In case of any disagreement regarding work quality or payment, Dinasari provides a dedicated mediation service to ensure fair outcomes for both parties.</p>
    
    <h2>4. Zero Tolerance Policy</h2>
    <p>Dinasari maintains a zero-tolerance policy for harassment, discrimination, or unsafe practices. Violators will be permanently banned from the platform.</p>
  </LegalLayout>
);
