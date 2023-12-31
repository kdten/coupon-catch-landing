import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Pays for itself in one coupon</SectionTitle>
      <AutofitGrid>
        {/* <PricingCard
          title="free"
          description="Give us a try for free"
          benefits={['1 seat', '1 active project', 'Ulimited viewers', '10 blocks']}
        >
          $0<span>/month</span>
        </PricingCard> */}
        <PricingCard
          title="Premium"
          description="$2.99 no matter the savings"
          benefits={['Unlimited receipts', 'Unlock any coupon amount', 'Exact receipt info for cashier']}
          isOutlined
        >
          $2.99<span>/month</span>
        </PricingCard>
        {/* <PricingCard
          title="Premium"
          description="Get your team together"
          benefits={[
            '10 seat',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard> */}
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
