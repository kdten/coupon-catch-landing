import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
// import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import CountupCard from 'components/CountupCard';
import { media } from 'utils/media';

const COUNTUP_CARDS = [
  {
    title: 'Coupons redeemed this year',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    start: 23242,
    end: 23845,
  },
  {
    title: 'Amount saved',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    start: 24123,
    end: 24512.34,
    prefix: '$',
    decimals: 2,
  },
  {
    title: 'Coupons redeemed all time',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    start: 111000,
    end: 111282,
  },
];


// const FEATURES = [
//   {
//     imageUrl: '/grid-icons/asset-1.svg',
//     title: 'Lorem ipsum dolor sit amet.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   },
//   {
//     imageUrl: '/grid-icons/asset-2.svg',
//     title: 'Lorem ipsum dolor sit amet.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   },
//   {
//     imageUrl: '/grid-icons/asset-3.svg',
//     title: 'Lorem ipsum dolor sit amet.',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   },
//   // {
//   //   imageUrl: '/grid-icons/asset-4.svg',
//   //   title: 'Lorem ipsum dolor sit amet.',
//   //   description:
//   //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   // },
//   // {
//   //   imageUrl: '/grid-icons/asset-5.svg',
//   //   title: 'Lorem ipsum dolor sit amet.',
//   //   description:
//   //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   // },
//   // {
//   //   imageUrl: '/grid-icons/asset-6.svg',
//   //   title: 'Lorem ipsum dolor sit amet.',
//   //   description:
//   //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   // },
//   // {
//   //   imageUrl: '/grid-icons/asset-7.svg',
//   //   title: 'Lorem ipsum dolor sit amet.',
//   //   description:
//   //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   // },
//   // {
//   //   imageUrl: '/grid-icons/asset-8.svg',
//   //   title: 'Lorem ipsum dolor sit amet.',
//   //   description:
//   //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   // },
//   // {
//   //   imageUrl: '/grid-icons/asset-9.svg',
//   //   title: 'Lorem ipsum dolor sit amet.',
//   //   description:
//   //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
//   // },
// ];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {/* {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))} */}
        {COUNTUP_CARDS.map((singleCountupCard, idx) => (
          <CountupCard key={singleCountupCard.title} {...singleCountupCard} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}



const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
