import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
// import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
        
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Never miss a chance at cash back again" overTitle="as easy as taking a photo">
            <p>
            It&lsquo;s frustrating to realize you&lsquo;ve spent more than you needed to, especially when every dollar counts. You&lsquo;re not alone in feeling cheated by missed deals, feeling like you have to constantly monitor prices just to get the best value for your money.{' '}
              {/* <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Introducing our game-changing SaaS solution! Our service diligently tracks every receipt from your Costco purchases and actively monitors for any eligible coupon adjustments. When an item you've purchased becomes eligible for a saving, we don't just notify you - we provide clear, straightforward directions to claim your money back. Imagine the satisfaction of saving hundreds on items you've already bought, effortlessly. No more missed deals, no more overpaying. Just easy savings, right back in your pocket where they belong. */}
            </p>
          </BasicSection>
          {/* <BasicSection imageUrl="/demo-illustration-2.svg" title="Lorem ipsum dolor sit." overTitle="lorem ipsum" reversed>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
              <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio?
            </p>
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul>
          </BasicSection> */}
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          <Features />
          <Testimonials />
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
