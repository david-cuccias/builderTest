import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';
import { Helmet } from 'react-helmet';
import Link from '../components/Link/Link';

const defaultDescription = 'Edit this in your entry for a better SEO';

const defaultTitle = 'Builder: Drag and Drop Page Building for Any Site';

function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const page = models.page[0]?.content;

  return (
    <>
      <Helmet>
        <title>{(page && page.data.title) || defaultTitle}</title>
        <meta
          name="description"
          content={(page && page.data.description) || defaultDescription}
        />
      </Helmet>
      {/** name of the model is landing page, change it if you decided to build*/}
      <BuilderComponent renderLink={Link} name="page" content={page} />
    </>
  );
}

export default PageTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    allBuilderModels {
      page(target: { urlPath: $path }, limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`;
