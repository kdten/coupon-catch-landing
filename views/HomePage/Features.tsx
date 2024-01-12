import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
// import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import CountupCard from 'components/CountupCard';
import { media } from 'utils/media';

const COUNTUP_CARDS = [
  {
    title: 'Coupons redeemed in the last year',
    description: '365 days of savings!',
    start: 3742,
    end: 3845,
  },
  {
    title: 'Amount saved',
    description: 'Total amount saved in the last year.',
    start: 20423,
    end: 20512.34,
    prefix: '$',
    decimals: 2,
  },
  {
    title: 'Coupons redeemed all time',
    description: 'All time savings by our users.',
    start: 11100,
    end: 11282,
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
