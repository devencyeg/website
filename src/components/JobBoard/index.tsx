import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type JobItem = {
  id: string;
  title: string;
  location: string;
  description: ReactNode;
};

const JobList: JobItem[] = [
  {
    id: '1131',
    title: 'Senior iOS Engineer',
    location: 'Remote (Egypt)',
    description: (
      <p>
        Craft seamless and innovative iOS applications, driving excellence in user experience and performance.
      </p>
    ),
  },
  {
    id: '1132',
    title: 'Senior QA Engineer',
    location: 'Remote (Egypt)',
    description: (
      <p>
        Ensure software reliability with rigorous testing and quality assurance methodologies.
      </p>
    ),
  },
  {
    id: '1123',
    title: 'Android Engineer',
    location: 'Remote (Egypt)',
    description: (
      <p>
        Build cutting-edge Android applications that align with modern design and functionality standards.
      </p>
    ),
  },
  {
    id: '1124',
    title: 'Frontend Engineer',
    location: 'Remote (Egypt)',
    description: (
      <p>
        Create dynamic and visually stunning user interfaces using the latest web technologies.
      </p>
    ),
  },
  {
    id: '1125',
    title: 'Backend Engineer',
    location: 'Remote (Egypt)',
    description: (
      <p>
        Develop robust and scalable server-side solutions to power innovative applications.
      </p>
    ),
  },
];

function Job({ id, title, location, description }: JobItem) {
  return (
    <div className={clsx('card col col--4')}>
      <div className="card__header">
        <Heading as="h3">{title}</Heading>
        <small className='avatar__subtitle'>{location}</small>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
      <Link to={`jobs/${id}`}>
        <button className="button button--secondary button--block">
          Learn more
        </button>
        </Link>
      </div>
    </div>
  );
}

export default function JobBoard(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="card-demo">
          <div className="row">
            {JobList.map((props, idx) => (
              <Job key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
