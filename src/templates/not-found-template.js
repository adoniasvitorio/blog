// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Página não encontrada !">
        <p>Desculpe, esta página não pode ser encontrada.</p>
        <p>Tente buscar por <a href="/tags">Tags</a> ou <a href="/categories">Categorias</a></p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
