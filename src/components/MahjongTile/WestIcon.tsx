// components/ShaaIcon.tsx
import React from 'react';

const WestIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      viewBox='0 0 300 400'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      className={className} // 這裡應用 Tailwind classes
      {...props} // 傳遞其他 SVG 屬性
    >
      <defs>
        {/*
          保留 <defs> 中的 clipPath 等定義，因為它們定義了圖形的形狀。
          確保 ID 唯一，例如添加後綴 _shaa。
        */}
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243_shaa'>
          <circle
            style={{
              opacity: 1,
              fill: '#000000',
              fillOpacity: 0.29670332,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 19.13299942,
              strokeLinecap: 'butt',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx='-264.65997'
            cy='-198.20665'
            r='293.95438'
          />
        </clipPath>
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7847_shaa'>
          <ellipse
            style={{
              opacity: 1,
              fill: '#822600',
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: 'none',
              strokeWidth: 12,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx='394'
            cy='552.36218'
            rx='349.49533'
            ry='216'
          />
        </clipPath>
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243-1_shaa'>
          <circle
            style={{
              opacity: 1,
              fill: '#000000',
              fillOpacity: 0.29670332,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 19.13299942,
              strokeLinecap: 'butt',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx='-264.65997'
            cy='-198.20665'
            r='293.95438'
          />
        </clipPath>
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7876_shaa'>
          <circle
            style={{
              opacity: 1,
              fill: '#000000',
              fillOpacity: 0.29670332,
              fillRule: 'nonzero',
              stroke: '#000000',
              strokeWidth: 19.13299942,
              strokeLinecap: 'butt',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx='-264.65997'
            cy='-198.20665'
            r='293.95438'
          />
        </clipPath>
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14693_shaa'>
          <rect
            style={{
              opacity: 1,
              fill: '#a53c3c',
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            width='131.78395'
            height='168.82127'
            x='-332.59583'
            y='383.49765'
            rx='1.2551664'
            ry='3.7514515'
            transform='matrix(0.99939083,-0.03489951,0.03489951,0.99939083,0,0)'
          />
        </clipPath>
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14952_shaa'>
          <ellipse
            style={{
              opacity: 1,
              fill: '#a53c3c',
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: 'none',
              strokeWidth: 7,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx='-271.34384'
            cy='647.25604'
            rx='69.057365'
            ry='116.91089'
            transform='matrix(0.99939083,-0.03489951,0.03489951,0.99939083,0,0)'
          />
        </clipPath>
        {/* 原始 SVG 中的 path-effect 和 linearGradient 沒有被實際使用，可以考慮移除 */}
      </defs>
      <g transform='translate(0,-652.36216)'>
        <g transform='matrix(0.85008915,0,0,0.93538583,19.53046,57.10894)'>
          <path
            d='m 18.30334,756.6 c -9.5861174,1.25345 -21.0440188,-11.12964 -7.344369,-14.65998 43.689934,-8.44524 191.763199,-31.91375 208.715039,-38.96975 14.88198,-4.47664 48.7794,19.64597 69.77151,30.82355 13.03521,7.62589 7.09752,16.27427 -2.93775,20.17489 -8.12469,2.44737 -55.98052,6.84692 -81.61317,3.75897 -4.8897,-0.5 -3.03411,-12.30852 -13.95543,-14.00216 C 140.83486,734.41525 69.224299,750.33502 18.30334,756.6 Z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='1px'
            strokeLinecap='butt'
            strokeLinejoin='miter'
            strokeOpacity='1'
          />
          <path
            d='m 202.30089,755.15533 c -1.27562,3.78866 -1.92477,9.05905 -4.62306,10.31729 -5.17933,1.7767 -10.93285,0.56235 -13.80762,5.00084 -4.18958,6.73156 -29.81038,25.81302 -47.58108,39.89277 -5.03872,3.99218 -13.55856,1.05692 -14.10863,-6.38647 l -0.0687,27.46438 12.61993,-0.6238 c 10.98748,-8.58886 41.27908,-37.35888 54.83042,-37.69627 10.77175,-0.85493 23.24146,-4.16643 26.20981,-11.33902 2.49974,-6.40744 -4.91423,-10.92996 -4.22864,-14.50428 1.06948,-4.17667 9.93603,-8.48091 12.90992,-8.51388 5.07625,-0.0563 -20.88362,-7.64511 -22.15235,-3.61156 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='1px'
            strokeLinecap='butt'
            strokeLinejoin='miter'
            strokeOpacity='1'
          />
          <path
            d='M 44.513437,845.65221 C 96.654824,833.25125 219.71831,794.8025 237.75017,801.99454 c 22.3396,10.87105 63.54417,36.44588 64.11439,47.24215 0.22691,10.50433 0.0984,11.39774 -8.75819,19.87413 -13.17018,12.93087 -55.35363,77.18637 -61.49898,101.9057 -1.42211,6.27152 -0.44292,18.40166 -5.16715,23.4281 -6.61336,7.36518 -88.04586,-1.12959 -141.055824,-3.22941 -17.921009,-0.60114 -26.244151,-18.98182 0.533046,-19.54016 34.105198,-0.61411 92.367578,-2.02228 99.275418,-10.49309 6.23883,-7.95297 49.26453,-97.45139 49.36461,-107.09074 0.10549,-6.04568 -10.73558,-20.20992 -17.19309,-24.29398 -7.88187,-5.57042 -118.387423,28.03071 -167.577947,35.01891 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='1px'
            strokeLinecap='butt'
            strokeLinejoin='miter'
            strokeOpacity='1'
          />
          <path
            d='m 22.789896,858.99298 c 13.914207,26.906 43.909736,76.58459 55.890318,124.51516 l 32.083776,-2.12639 C 102.82771,945.31445 83.44735,884.02726 64.641487,853.9626 30.77162,800.25976 -5.5262875,807.3679 22.789896,858.99298 Z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='1px'
            strokeLinecap='butt'
            strokeLinejoin='miter'
            strokeOpacity='1'
          />
          <path
            d='m 121.1644,783.92288 c -3.21262,-15.5446 -15.49505,-12.91539 -13.58709,3.49686 l 18.46383,193.39277 14.14333,-0.69937 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='1px'
            strokeLinecap='butt'
            strokeLinejoin='miter'
            strokeOpacity='1'
          />
          <path
            d='m 189.6572,785.11604 -13.32425,0 -25.12742,191.8783 12.92012,0 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='1px'
            strokeLinecap='butt'
            strokeLinejoin='miter'
            strokeOpacity='1'
          />
        </g>
      </g>
    </svg>
  );
};

export default WestIcon;
