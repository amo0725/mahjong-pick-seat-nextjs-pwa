// components/PeiIcon.tsx
import React from 'react';

interface NorthIconProps extends React.SVGProps<SVGSVGElement> {
  // 你可以添加額外的 props 如果需要
}

const NorthIcon: React.FC<NorthIconProps> = ({ className, ...props }) => {
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
          確保 ID 唯一，例如添加後綴 _pei。
        */}
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243_pei'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7847_pei'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243-1_pei'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7876_pei'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14693_pei'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14952_pei'>
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
        <g transform='matrix(0.93642236,0,0,0.93642236,5.154253,91.360642)'>
          <path
            d='m 29.907667,770.38167 c -6.194152,8.02265 21.428513,29.44188 41.676198,35.8917 6.543131,2.43905 26.830033,-18.71391 18.905069,-23.55726 C 68.697873,771.4298 34.310316,764.43141 29.907667,770.38167 Z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='10' // JSX 屬性
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeMiterlimit='4'
            strokeDasharray='none'
            strokeOpacity='1'
          />
          <path
            d='M 67.104158,774.19112 C 42.13506,868.07692 49.447167,858.11075 6.4295069,915.85877 -0.50548575,933.44331 22.298955,948.55984 33.463664,941.83903 48.915156,931.49238 66.363769,919.56071 77.251814,906.15771 97.02135,881.82175 187.80142,814.17483 249.20824,795.20483 c 12.36647,-3.82029 23.89371,-3.27102 35.1811,-5.71061 8.48368,-2.41164 -0.039,-15.01848 -4.69849,-19.79037 -15.70503,-16.54927 -43.36555,-26.34031 -52.42522,-19.8166 -3.97499,1.96567 1.92993,29.4811 -2.89142,32.06441 -46.59775,22.80796 -132.985525,81.67515 -172.248124,111.81826 -1.469515,0.68531 1.342551,-5.30234 2.312223,-7.24359 8.626121,-17.26919 18.010728,-65.73019 22.724979,-115.03932 0.446147,-11.0793 -8.412178,-7.22542 -10.05913,2.70411 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
            strokeWidth='1px' // JSX 屬性
            strokeLinecap='butt'
            strokeLinejoin='miter'
            strokeOpacity='1'
          />
          <path
            d='m 114.09719,711.59755 c -10.01917,-1.06336 -15.49032,8.80873 -14.342756,18.46301 0.973226,8.1876 1.251676,18.6738 9.832116,27.56108 5.64676,6.99777 1.45164,60.0977 1.34299,105.00662 -0.008,3.14771 -2.4216,3.81435 -2.3676,6.84866 -0.0102,7.91188 4.13472,27.85644 9.27843,28.02083 4.80428,-0.23729 11.74209,-7.6051 12.10232,-18.15965 2.70642,-49.99586 7.29702,-115.74474 11.25622,-124.14954 4.98852,-10.58991 13.58939,-7.74231 14.45015,-17.85614 1.2724,-14.15477 -19.13105,-22.60255 -41.55189,-25.73487 z'
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
            d='m 185.33231,661.72592 c -11.04102,2e-5 -32.46283,30.3394 -32.52388,36.72052 0.11709,8.1973 20.7411,15.69941 20.32596,27.9071 -0.39117,69.66027 -18.68319,181.14057 -4.68375,199.36122 20.54014,24.53708 118.85312,1.86586 124.94486,-3.14748 9.69372,-7.94512 13.91122,-15.91222 10.49157,-23.95576 -3.66499,-8.85428 -76.70142,11.15833 -108.85778,-0.69943 -13.49873,-4.95729 -3.98491,-100.61173 -3.75176,-156.79993 0.6848,-12.78519 25.76648,-27.26784 25.87921,-32.87359 0.39967,-10.88258 -18.36945,-45.20268 -31.82443,-46.51265 z'
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

export default NorthIcon;
