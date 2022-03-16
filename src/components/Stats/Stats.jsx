import React from 'react';

export const Stat = ({ large, small }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 32px 12px 32px'
    }}
  >
    <div
      style={{
        color: '#000033',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '64px',
        lineHeight: '72px'
      }}
      dangerouslySetInnerHTML={{ __html: large }}
    />
    <div
      style={{
        color: '#4c4c6e',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        textAlign: 'center'
      }}
      dangerouslySetInnerHTML={{ __html: small }}
    />
  </div>
);

export const Spacer = () => <div style={{ width: '16px' }} />;

export const Stats = ({ large1, small1, large2, small2, large3, small3 }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    <Stat large={large1} small={small1} />
    <Spacer />
    <Stat large={large2} small={small2} />
    <Spacer />
    <Stat large={large3} small={small3} />
  </div>
);
