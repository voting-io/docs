import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Features, { FeatureItem } from '../components/Features';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            Sobre este projeto
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Crie sua votação em segundos, para qualquer tipo de evento',
    Svg: require('@site/static/img/logo.svg').default,
    description: (<>Configure seu sistema de vota&ccedil;&atilde;o de acordo com a sua necessidade, Do mais simples ao mais complexo.</>),
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <Features items={FeatureList} />
      </main>
    </Layout>
  );
}
