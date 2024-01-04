import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>as easy as taking a photo</OverTitle>
          <SectionTitle>You work hard to earn your money, why not keep more of it?</SectionTitle>
          <Description>
            Upload your receipts to Coupon Catch and you&lsquo;ll never miss a chance to save again. Our software tracks receipts and alerts you about coupon adjustments, with simple steps to claim your money back. Save more effortlessly!
          </Description>
          <ButtonGroup>
          <NextLink href="https://app.couponcatchapp.com" passHref>
              <Button>
                Sign up to start saving <span>&rarr;</span>
              </Button>
            </NextLink>
            {/* <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink> */}
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

// const OutlinedButton = styled(Button)`
//   border: 1px solid rgb(var(--textSecondary));
//   color: rgb(var(--textSecondary));
// `;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
