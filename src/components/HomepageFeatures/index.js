import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi languages',
    description: (
      <>
        Sibyl2 was designed for different languages.
      </>
    ),
  },
  {
    title: 'In seconds',
    description: (
      <>
        Based on tree-sitter. Writen in go. Fast and stable.
      </>
    ),
  },
  {
    title: 'Easy to use',
    description: (
      <>
        Single File, single command. But also extendable.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
