import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          About
        </Heading>
        <p className="hero__subtitle">
            Learn more about Devency.
        </p>
      </div>
    </header>
  );
}

export default function About(): ReactNode {
  return (
    <Layout
      title={"About"}
      description="About Devency">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
