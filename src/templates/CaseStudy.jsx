import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';
import { Helmet } from 'react-helmet';
import Link from '../components/Link/Link';

const defaultDescription = 'Edit this in your entry for a better SEO';

const defaultTitle = 'Builder: Drag and Drop Page Building for Any Site';

function CaseStudyTemplate({ data }) {
  const models = data?.allBuilderModels;
  const caseStudy = models.caseStudy[0]?.content;

  return (
    <>
      <Helmet>
        <title>{(caseStudy && caseStudy.data.title) || defaultTitle}</title>
        <meta
          name="description"
          content={
            (caseStudy && caseStudy.data.description) || defaultDescription
          }
        />
      </Helmet>
      {/** name of the model is landing page, change it if you decided to build*/}
      <BuilderComponent
        renderLink={Link}
        name="case-study"
        content={caseStudy}
      />
    </>
  );
}

export default CaseStudyTemplate;

export const caseStudyQuery = graphql`
  query($path: String!) {
    allBuilderModels {
      caseStudy(
        target: { urlPath: $path }
        limit: 1
        options: { cachebust: true }
      ) {
        content
      }
    }
  }
`;
