import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

export function Features({ items }: { items: FeatureItem[] }) {
  const columnSize = Math.floor(12 / items.length);
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {items.map((itemProps, idx) => (
            <Feature key={idx} columnSize={columnSize} {...itemProps} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ columnSize, title, Svg, description }) {
  return (
    <div className={clsx(`col col--${columnSize}`)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Features;
