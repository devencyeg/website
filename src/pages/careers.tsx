import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import JobBoard from '@site/src/components/JobBoard';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Careers
        </Heading>
        <p className="hero__subtitle">
          Join Devency to innovate, grow, and make an impact in the world of software development and technology consulting.
        </p>
      </div>
    </header>
  );
}

export default function Careers(): ReactNode {
  return (
    <Layout
      title={"Careers"}
      description="Careers at Devency">
      <HomepageHeader />
      <main>
        <JobBoard />
      </main>
    </Layout>
  );
}
