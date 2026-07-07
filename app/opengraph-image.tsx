import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Gospel Grounded — Faith, Theology & Gospel Teaching';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 90,
          background: '#0A0A0A',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 16,
              background: '#01BAB4',
              color: '#0A0A0A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              fontWeight: 800,
              marginRight: 22,
            }}
          >
            G
          </div>
          <div style={{ color: '#ffffff', fontSize: 30, fontWeight: 600 }}>
            Gospel Grounded
          </div>
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 74,
            fontWeight: 800,
            marginTop: 44,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Stay grounded in the gospel.
        </div>
        <div style={{ color: '#01BAB4', fontSize: 30, marginTop: 26 }}>
          Faith · Theology · Gospel teaching
        </div>
      </div>
    ),
    { ...size }
  );
}
