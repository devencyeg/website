import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Custom Software Development',
    Svg: require('@site/static/img/software.svg').default,
    description: (
      <p>
        Our team specializes in building custom software solutions that align with your unique business objectives. From initial concept to deployment, we ensure quality and scalability every step of the way.
      </p>
    ),
  },
  {
    title: 'Technology Consulting',
    Svg: require('@site/static/img/consulting.svg').default,
    description: (
      <p>
        Unlock the full potential of your technology stack with our consulting services. We provide expert guidance to streamline operations, enhance performance, and foster innovation.
      </p>
    ),
  },
  {
    title: 'Global Outsourcing',
    Svg: require('@site/static/img/outsourcing.svg').default,
    description: (
      <p>
        Expand your capabilities with our global outsourcing solutions. Access a diverse pool of talent to accelerate project timelines and optimize resource allocation.
      </p>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function JobBoard(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
