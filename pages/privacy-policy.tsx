import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <h1>Privacy Policy for Coupon Catch</h1>
          <br />
          <h3>Introduction</h3>
          <br />
          <p>
          Welcome to Coupon Catch, a digital service provider focused on e-commerce, operated by Coupon Catch Skypher LLC. Our website, couponcatch.com, is committed to protecting your privacy. This policy outlines how we handle your personal information and your rights as a user. By using our services, you agree to the terms of this policy.
          </p>
          <br />
          <h3>What information do we collect?</h3>
          <br />
          <h4>What We Collect:</h4>
          <ul>
            <li>
            <strong>Photos:</strong> When you upload photos, we process and analyze these images to identify relevant coupons.
            </li>
            <li><strong>Browsing Data:</strong> We collect information about how you use our website, such as pages visited and search queries.</li>
            <li><strong>Device Information:</strong> Information about your device, such as IP address, browser type, and operating system.</li>
          </ul>
          <br />
          <h3>Use of Data</h3>
          <br />
          <h4>We use your data to:</h4>
          <ul>
            <li><strong>Provide Services:</strong> Analyze your photos to find coupons.</li>
            <li><strong>Improve Our Services:</strong> Understand how our services are used to make improvements.</li>
            <li><strong>Analytics:</strong> We use Google Analytics to gather statistical data.</li>
          </ul>
          <br />
          <h3>Protection Measures</h3>
          <br />
          <p>We implement a variety of security measures to maintain the safety of your personal information. These include data encryption, secure servers, and access controls.</p>
          <br />
          <h3>User Rights</h3>
          <br />
          <h4>As a user, you have the right to:</h4>
          <br />
          <ul>
            <li>Access your personal information.</li>
            <li>Request that your personal information be corrected.</li>
            <li>Request that your personal information be deleted.</li>
            <li>Request that we restrict the processing of your personal information.</li>
            <li>Object to the processing of your personal information.</li>
            <li>Request that your personal information be transferred to another organization.</li>
          </ul>
          <br />
          <h3>Third-party Affiliations</h3>
          <br />
          <h4>We may share data with third parties for the following reasons:</h4>
          <br />
          <ul>
            <li><strong>Service Providers:</strong> Companies that perform services on our behalf, like analytics.</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
          </ul>
          <br />
          <h3>Age Restrictions</h3>
          <br />
          <p>Users must be 18 years or older to use Coupon Catch.</p>
          <br />
          <h3>Changes to Policy</h3>
          <br />
          <p>We may update this policy from time to time. If we make significant changes, we will notify you by email or by posting a notice on our website. We encourage you to review this policy periodically.</p>
          <br />
          <h3>Contact Us</h3>
          <br />
          <p>For any questions or concerns regarding your privacy, please contact us through our website.</p>
          <br />
          <p>This policy aims to be clear and transparent, reflecting our commitment to your privacy while you enjoy the benefits of Coupon Catch.</p>

        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
