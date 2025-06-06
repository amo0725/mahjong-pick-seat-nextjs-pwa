// components/TonIcon.tsx
import React from 'react';

const EastIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      viewBox='0 0 300 400'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      className={className} // 這裡應用 Tailwind classes
      {...props} // 傳遞其他 SVG 屬性，例如 onClick, aria-label 等
    >
      <defs>
        {/*
          保留 <defs> 中的 clipPath 等定義，因為它們定義了圖形的形狀。
          確保這些定義中沒有硬編碼的顏色，除非那是固定不變的。
          在這個 SVG 中，clipPath 主要用於遮罩，而不是著色。
        */}
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243_ton'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7847_ton'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath4243-1_ton'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath7876_ton'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14693_ton'>
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
        <clipPath clipPathUnits='userSpaceOnUse' id='clipPath14952_ton'>
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
        {/* 注意：原始 SVG 中的 path-effect 和 linearGradient 沒有被實際使用，可以考慮移除 */}
      </defs>
      <g transform='translate(0,-652.36216)'>
        <g transform='matrix(0.90070005,0,0,0.97528977,22.480539,21.079387)'>
          <path
            d='M 233.62512,755.29109 C 178.13441,766.77996 64.370638,790.79873 58.640429,785.71129 42.658218,774.8367 25.686157,781.4533 35.789288,796.11051 c 16.240064,27.58037 41.08272,52.95267 53.054176,82.84405 2.288277,4.33456 4.578233,5.00952 6.866511,4.97624 34.894055,0.59778 59.617015,-7.13696 92.959705,-10.00028 5.24648,-0.50585 12.18032,5.19713 16.07777,3.49424 3.45211,-1.88029 4.88869,-8.56661 5.7989,-12.75873 6.85855,-25.41545 28.05224,-47.67676 39.89617,-72.71328 1.50503,-2.99478 9.84505,-3.54971 9.78218,-6.44028 -1.21917,-10.81663 -17.3035,-30.7056 -26.59958,-30.22138 z m -23.13944,33.57895 c 12.46189,-0.30489 -0.39856,25.04533 -5.5016,26.11044 -5.68441,0.83505 -6.59045,-7.30247 -13.55667,-7.44593 -5.23392,0.54881 -4.04327,3.93106 -9.43905,5.54094 -32.92047,6.46479 -57.05235,8.76033 -91.40148,12.13597 -4.332557,0.10941 -15.065211,-17.22193 -9.013958,-18.63046 40.940618,-9.93723 109.784008,-17.44402 128.912758,-17.71096 z m -16.38918,50.02681 c 4.01395,6.86764 -2.84402,13.79985 -7.80917,14.56359 -30.19331,4.51502 -78.25363,12.14709 -82.00667,8.23091 -2.66879,-2.84434 -8.082537,-10.97917 -7.221842,-16.53793 11.136252,-3.71556 92.300252,-14.42426 97.037682,-6.25657 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1' // <-- 如果需要，也可以作為 prop
            fillRule='evenodd'
            stroke='none'
          />
          <path
            d='m 123.10112,656.13043 c -18.37065,-7.40086 -20.37189,5.83216 -17.90295,14.33847 6.2135,20.20143 14.42853,28.63207 24.53852,42.67785 1.80515,2.41778 3.80884,7.05879 3.50496,9.27068 l -2.80317,207.5969 c 0.0245,6.49844 -1.22391,27.05521 -5.33713,23.81363 -16.25707,-12.35739 -21.17086,-19.29273 -47.244611,-51.54601 -11.141011,-14.92882 -19.888636,-6.9441 -6.365572,12.59128 42.459393,54.62391 46.079123,59.83408 46.706613,115.10687 1.6238,29.1788 31.75855,24.6486 34.5721,6.1383 3.42954,-19.9718 -1.64734,-51.78318 -1.84988,-73.7618 -0.77433,-84.02764 -0.85925,-158.3381 12.84541,-239.53344 2.59385,-12.6668 22.99001,-23.06614 33.97476,-26.71095 4.86607,-1.61964 10.28698,-13.97417 0.90028,-14.45229 -25.17978,-2.64878 -52.28301,-15.55116 -75.53933,-25.52949 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
          />
          <path
            d='m 90.058998,749.95518 c -28.498411,-1.30744 -7.40777,15.78722 -1.003352,15.35489 35.469434,-3.22236 93.934624,-11.66451 130.102704,-19.88981 2.50231,-0.0783 -0.19108,-17.18993 -17.33839,-18.91906 -5.21285,-0.25484 -4.31683,2.60115 -10.47943,4.83506 -27.63258,6.00227 -76.15552,20.22066 -101.281532,18.61892 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
          />
          <path
            d='M 101.07932,860.47476 C 81.038575,899.28326 62.611644,913.1005 1.9825743,939.28575 -21.477214,948.67859 -19.805065,962.93934 8.6272375,953.18208 85.796234,923.19531 101.97857,904.47533 114.56321,868.12926 Z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
          />
          <path
            d='m 148.90381,861.23655 c 24.81185,28.93873 58.74403,106.95253 77.55965,95.36697 14.85312,-9.54021 33.94987,-10.66782 42.06647,-8.48169 10.62302,2.79871 11.13375,7.75465 17.07981,10.96967 15.63489,6.5882 12.36449,-2.02074 6.9373,-9.59456 -14.04344,-21.5996 -80.57109,-34.66827 -122.31035,-92.57081 z'
            fill='currentColor' // <-- 修改這裡
            fillOpacity='1'
            fillRule='evenodd'
            stroke='none'
          />
        </g>
      </g>
    </svg>
  );
};

export default EastIcon;
