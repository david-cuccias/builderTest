import React from 'react';

export const Divider = ({ children }) =>
  children ? (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          maxWidth: '100%',
          borderBottom: '2px solid rgba(0, 0, 0, 0.1)'
        }}
      />
      <div style={{ margin: '0 15px' }}>{children}</div>
      <div
        style={{
          maxWidth: '100%',
          borderBottom: '2px solid rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  ) : (
    <div
      style={{
        maxWidth: '100%',
        borderBottom: '2px solid rgba(0, 0, 0, 0.1)'
      }}
    />
  );

export const QuoteAttribution = ({ quotee, quoteeInfo }) => (
  <p
    style={{
      fontSize: '14px',
      lineHeight: '24px',
      margin: 0,
      textTransform: 'uppercase'
    }}
  >
    <span
      style={{ color: '#5a5a5a' }}
      dangerouslySetInnerHTML={{
        __html: `${quotee}${quoteeInfo && ', '}`
      }}
    />
    {quoteeInfo && (
      <span
        style={{ color: '#c4c4c4' }}
        dangerouslySetInnerHTML={{ __html: quoteeInfo }}
      />
    )}
  </p>
);

export const Quote = ({
  wrapperVariant,
  quoteBody,
  quoteLogo,
  quoteAuthor,
  quoteAuthorTitle
}) => {
  return wrapperVariant === 'flame' ? (
    <div
      style={{
        background:
          'url(https://thumbs.dreamstime.com/b/fire-red-background-texture-47008447.jpg) no-repeat 0 0',
        color: '#ffffff'
      }}
    >
      {quoteBody && (
        <h5
          style={{
            textAlign: 'center',
            maxWidth: '520px',
            fontSize: '20px',
            lineHeight: '33px',
            marginBottom: '32px',
            marginTop: '32px',
            fontWeight: 'normal'
          }}
          dangerouslySetInnerHTML={{
            __html: `&ldquo;${quoteBody}&rdquo;`
          }}
        />
      )}
      <img alt={quoteAuthor} src={quoteLogo} />
    </div>
  ) : (
    <div
      style={{
        maxWidth: '1040px',
        margin: '8px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        paddingTop: '0px',
        verticalAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000033',
        background: '#ffffff'
      }}
    >
      <div style={{ width: '100%', paddingBottom: '15px', paddingTop: '20px' }}>
        <Divider>
          <img
            style={{ height: '25px' }}
            src="http://cdn.onlinewebfonts.com/svg/img_273828.png"
          />
        </Divider>
      </div>
      <QuoteAttribution quotee={quoteAuthor} quoteeInfo={quoteAuthorTitle} />
      {quoteBody && (
        <h5
          style={{
            textAlign: 'center',
            maxWidth: '520px',
            fontSize: '20px',
            lineHeight: '33px',
            marginBottom: '32px',
            marginTop: '32px',
            fontWeight: 'normal'
          }}
          dangerouslySetInnerHTML={{
            __html: `&ldquo;${quoteBody}&rdquo;`
          }}
        />
      )}
    </div>
  );
};
