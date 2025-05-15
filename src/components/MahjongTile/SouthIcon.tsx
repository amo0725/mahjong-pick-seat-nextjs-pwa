// components/NanIcon.tsx
import React from 'react';

interface SouthIconProps extends React.SVGProps<SVGSVGElement> {
  // 你可以添加額外的 props 如果需要
}

const SouthIcon: React.FC<SouthIconProps> = ({ className, ...props }) => {
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
          確保 ID 唯一，例如添加後綴 _nan。
        */}
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243_nan'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7847_nan'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243-1_nan'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7876_nan'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14693_nan'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14952_nan'>
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
        <g transform='matrix(1.0044125,0,0,1.0044125,-10.100723,-17.440744)'>
          <g transform='matrix(0.96971821,0,0,1,4.8296528,0)'>
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 180.01019,689.47005 c -6.60859,-0.48504 -30.38318,25.26489 -36.60586,34.32229 -5.69504,6.90501 4.79486,11.13002 8.86231,16.9841 5.13346,8.06071 1.22147,89.90666 -8.33752,135.13699 l 15.46785,-2.31045 c 10.15168,-37.07022 17.66151,-105.92002 25.26199,-112.07982 7.23438,-5.64883 23.67201,-5.05439 21.67531,-13.41661 -4.13317,-18.67217 -20.44655,-58.42532 -26.32408,-58.6365 z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 122.01681,796.92731 c -18.91603,0.87973 -28.798248,10.69738 -1.04916,14.50033 32.69916,1.34438 100.914,-5.95887 100.99124,-15.21074 0.50007,-12.38604 -9.68021,-30.36115 -15.72706,-30.24973 -4.80999,0.0666 -14.60707,6.08199 -15.49735,13.35218 -0.7723,8.52441 -50.99279,16.5893 -68.71767,17.60796 z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 153.67205,848.84527 c 25.63242,-10.5633 45.92829,-20.43381 70.16669,-33.78515 8.50421,-4.39856 16.45949,4.65195 14.71585,10.49483 -1.13333,3.79775 -14.08578,26.76789 -2.69599,27.66397 -10.29756,8.02971 -38.07021,31.79678 -54.00467,67.80402 l -24.83006,-2.09832 c 10.65568,-26.66627 51.36933,-71.18083 48.61096,-74.10112 -4.70145,-5.08631 -42.1547,13.5402 -50.3375,11.1914 z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='M 58.289846,893.36579 C 98.37429,871.73604 187.21397,852.18031 258.85433,851.06873 c 9.11568,-0.5564 30.91343,52.37414 30.72079,61.51831 -0.59867,26.02805 -45.433,88.49816 -73.24718,126.11726 -5.79302,6.4227 -18.89804,4.8464 -27.69634,-0.6182 l -47.53702,-31.5645 c -4.80435,-4.0497 -3.00434,-12.59097 5.05004,-7.74355 10.64061,6.55005 32.405,14.85845 44.46529,16.43385 11.0746,1.4727 48.13752,-86.15338 50.35477,-100.92899 1.30281,-6.70884 -7.4831,-39.24423 -23.33301,-40.27292 -107.24408,3.99322 -143.146386,35.79646 -157.540505,37.24847 z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 35.176769,856.0746 c -8.329143,2.47339 -5.543427,12.92357 -4.359061,19.23455 9.767401,43.24858 46.332868,125.35065 53.641585,130.24035 22.498047,12.4821 31.295027,4.1632 30.912857,-5.2458 -1.13661,-9.1203 -30.281081,-84.44338 -48.575803,-124.19996 -6.317716,-12.70167 -22.0543,-22.43785 -31.619578,-20.02914 z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 69.201953,835.83331 c -13.711354,-6.44835 -9.284101,-18.12879 9.262409,-11.09585 42.105238,15.7158 58.236628,41.97104 71.995068,93.68228 l -15.46785,4.19662 C 121.71411,873.69471 105.90056,855.54714 69.201953,835.83331 Z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 121.2172,943.33039 c -15.90514,5.90334 -13.03153,-18.01065 -2.259,-21.03137 74.13079,-23.14959 77.60464,-21.1582 89.99832,-16.23043 11.85218,4.7626 16.09417,21.95025 0.35075,21.09865 -31.18654,-1.96893 -55.58683,2.54929 -88.09007,16.16315 z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 124.2573,959.25452 c -10.22238,2.70755 -7.0172,18.26947 3.27761,15.95048 26.7444,-5.66326 45.57025,-9.03231 73.05055,-12.99668 8.28191,-1.37467 8.02256,-22.57795 0.5386,-25.88353 -10.0892,-3.02726 -11.21854,3.61802 -15.65202,6.11282 -12.14009,6.20765 -37.21982,10.4483 -61.21474,16.81691 z'
            />
            <path
              fill='currentColor' // <-- 修改這裡
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              strokeWidth='1px'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeOpacity='1'
              d='m 146.80164,925.40788 c 2.23284,25.80046 4.91455,54.74838 1.7486,80.54882 l 17.52265,9.6443 c 3.12723,-29.67464 6.5145,-63.19621 4.2514,-92.87087 z'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SouthIcon;
