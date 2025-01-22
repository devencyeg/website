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
          Services
        </Heading>
        <p className="hero__subtitle">
            Explore our software development and technology consulting services.
        </p>
      </div>
    </header>
  );
}

export default function Services(): ReactNode {
  return (
    <Layout
      title={"Services"}
      description="Services at Devency">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
