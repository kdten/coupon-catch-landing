import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
<Wrapper>
<div id="FAQ"><SectionTitle>Frequently Asked Questions</SectionTitle></div>

  <Accordion title="What is Coupon Catch?">
    Coupon Catch is a mobile app that helps you save money by tracking your Costco purchases and alerting you when a coupon adjustment is available. Coupon adjustments are a little-known Costco policy that allows you to get cash back on purchases when a coupon is released within 30 days of your purchase. Our app makes it easy to take advantage of this policy and get money back on your Costco purchases.
  </Accordion>
  <Accordion title="How does the app notify me about Costco coupon adjustments?">
    Our app monitors your uploaded receipts and alerts you when a Costco purchase is eligible for a coupon adjustment. You&lsquo;ll receive timely notifications, ensuring you can take advantage of cash back opportunities as soon as they arise.
  </Accordion>
  <Accordion title="What is Costco's Coupon Adjustment policy?">
    In order to be eligible for a Coupon Adjustment, the item must be purchased within the last 30 days, and the coupon must be active at the time of redemption. This is different than a Price Adjustment, which generally refers to when the price of an item goes down, thats not on coupon, that was purcahsed within the last 30 days.
  </Accordion>
  <Accordion title="Do you alert users to Price Asjustments too?">
    Sadly there is no way to track Price Adjustments at this time. We are working on a solution to this problem, but for now we are only able to track Coupon Adjustments.
  </Accordion>
  <Accordion title="What do I need to do to get my cash back from Costco?">
    Once you&lsquo;re notified of a coupon adjustment opportunity, the app provides clear, step-by-step instructions on how to claim your cash back from Costco. Coupon adjustments are processed in same area returns are processed, so you can easily claim your money back on your next Costco trip, even while waiting in line for a return.
  </Accordion>
  <Accordion title="How do I add receipts to the app?">
    Simply take a picture of your Costco receipt using the app. Our system will automatically digitize and store the receipt, making it easy to track your purchases and potential cash back opportunities.
  </Accordion>
  <Accordion title="Is my personal information safe with this app?">
    Yes, your privacy and security are our top priorities. We use advanced encryption and security measures to protect your personal information and receipt data.
  </Accordion>
  <Accordion title="Can I track receipts from stores other than Costco?">
    Currently, our app is specialized for Costco receipts to provide the most accurate and timely information about coupon adjustments. We may expand to include other stores in future updates.
  </Accordion>
</Wrapper>

  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
