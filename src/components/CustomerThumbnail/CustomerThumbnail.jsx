import React from 'react';

export const Accomplishment = ({ value, label }) => (
  <div
    style={{
      fontFamily: 'DM Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      lineHeight: '18px',
      textAlign: 'center',
      border: '1px solid #dad5d2',
      color: '#33335c',
      boxSizing: 'border-box',
      borderRadius: '4px',
      display: 'flex',
      padding: '3px 8px'
    }}
  >
    <div dangerouslySetInnerHTML={{ __html: value }} />
    <div
      dangerouslySetInnerHTML={{ __html: label }}
      style={{
        marginLeft: '4px'
      }}
    />
  </div>
);

export const CustomerThumbnail = ({
  link,
  image,
  title,
  text,
  calloutValue,
  calloutLabel
}) => {
  return (
    <div
      style={{
        width: '512px',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '8px 8px 0 0'
      }}
    >
      <a href={link} style={{ textDecoration: 'none' }}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '186px',
            overflow: 'hidden',
            borderRadius: '8px',
            height: '260px'
          }}
        >
          <img
            src={image}
            alt={title}
            title={title}
            style={{
              width: '100%',
              position: 'absolute',
              top: 0,
              bottom: 0,
              margin: 'auto',
              width: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          style={{
            color: '#e20626',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '26px',
            padding: '20px 0 6px 0'
          }}
        />
        {text && (
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            style={{
              fontFamily: 'DM Serif Display',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '34px',
              letterSpacing: '0.01em',
              textAlign: 'left',
              color: '#33335c',
              margin: '6px 0 16px 0',
              maxHeight: '106px',
              overflow: 'hidden'
            }}
          />
        )}
        {(calloutLabel || calloutValue) && (
          <div style={{ display: 'flex' }}>
            <Accomplishment value={calloutValue} label={calloutLabel} />
          </div>
        )}
      </a>
    </div>
  );
};
