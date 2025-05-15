'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Keep for other images if any, or remove if only SVG icons are used for tiles
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

// Import your new SVG Icon components
import EastIcon from '@/components/MahjongTile/EastIcon';
import SouthIcon from '@/components/MahjongTile/SouthIcon';
import WestIcon from '@/components/MahjongTile/WestIcon';
import NorthIcon from '@/components/MahjongTile/NorthIcon';

type Card = '東' | '南' | '西' | '北';
type TileVariant = 'east' | 'south' | 'west' | 'north';
interface DrawnCardInfo {
  card: Card;
  id: number;
  tileName: TileVariant;
}

const ALL_CARDS: Card[] = ['東', '南', '西', '北'];

// Map TileVariant to the corresponding Icon Component
const MahjongTileComponents: Record<
  TileVariant,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  east: EastIcon,
  south: SouthIcon,
  west: WestIcon,
  north: NorthIcon,
};

export default function HomePage() {
  const [drawnCards, setDrawnCards] = useState<DrawnCardInfo[]>([]);
  const [currentCard, setCurrentCard] = useState<DrawnCardInfo | null>(null);
  const [resultMessage, setResultMessage] = useState<string>('');
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const [animationTriggerKey, setAnimationTriggerKey] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
    const storedCards = localStorage.getItem('drawnCardsHistory');
    if (storedCards) {
      const parsedCards: DrawnCardInfo[] = JSON.parse(storedCards);
      setDrawnCards(parsedCards);
      if (parsedCards.length > 0) {
        setCurrentCard(parsedCards[parsedCards.length - 1]);
      }
      if (parsedCards.length === ALL_CARDS.length) {
        setResultMessage('所有牌已經抽完！');
      }
    }
  }, []);

  const saveHistory = (updatedDrawnCards: DrawnCardInfo[]) => {
    localStorage.setItem(
      'drawnCardsHistory',
      JSON.stringify(updatedDrawnCards)
    );
  };

  const translateCardToTileName = (card: Card): TileVariant => {
    switch (card) {
      case '東':
        return 'east';
      case '南':
        return 'south';
      case '西':
        return 'west';
      case '北':
        return 'north';
      default:
        throw new Error('Invalid card');
    }
  };

  const handleDrawCard = () => {
    if (typeof navigator.vibrate === 'function') navigator.vibrate(10);
    if (drawnCards.length >= ALL_CARDS.length) {
      setResultMessage('所有牌已經抽完！');
      return;
    }
    const availableCards = ALL_CARDS.filter(
      (card) => !drawnCards.some((dc) => dc.card === card)
    );
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const newCard = availableCards[randomIndex];
    const newCardInfo: DrawnCardInfo = {
      card: newCard,
      id: Date.now(),
      tileName: translateCardToTileName(newCard),
    };
    const updatedDrawnCards = [...drawnCards, newCardInfo];
    setDrawnCards(updatedDrawnCards);
    setCurrentCard(newCardInfo);
    setResultMessage(`抽到的牌是: ${newCard}`);
    saveHistory(updatedDrawnCards);
    setAnimationTriggerKey((prevKey) => prevKey + 1);
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error('音效播放失敗:', error));
    }
    if (updatedDrawnCards.length >= ALL_CARDS.length) {
      setResultMessage('所有牌已經抽完！');
    }
  };

  const handleResetGame = () => {
    if (typeof navigator.vibrate === 'function') navigator.vibrate(10);
    setDrawnCards([]);
    setCurrentCard(null);
    setResultMessage('');
    localStorage.removeItem('drawnCardsHistory');
  };

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!isClient) return null;

  const CurrentTileIcon = currentCard
    ? MahjongTileComponents[currentCard.tileName]
    : null;

  return (
    <div className='min-h-screen flex flex-col items-center justify-between p-4 sm:p-8 font-sans transition-colors duration-300'>
      <header className='w-full flex justify-between items-center mb-8'>
        <h1 className='text-3xl sm:text-4xl font-bold text-theme-light-text dark:text-theme-dark-text tracking-tight flex items-center'>
          <Image
            src='/icons/favicon-48x48.png'
            alt='麻將 Logo'
            width={40}
            height={40}
            className='mr-3 rounded-md'
          />
          <span>麻將選位神器</span>
        </h1>
        <button
          onClick={handleToggleTheme}
          title={resolvedTheme === 'dark' ? '切換到亮色模式' : '切換到暗色模式'}
          className='p-3 rounded-full text-theme-light-text dark:text-theme-dark-text hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-light-main dark:focus-visible:ring-theme-dark-main focus-visible:ring-opacity-75 transition-all'
        >
          {resolvedTheme === 'dark' ? (
            <FiSun size={24} />
          ) : (
            <FiMoon size={24} />
          )}
        </button>
      </header>

      <main className='flex flex-col items-center w-full max-w-md flex-grow'>
        {currentCard && CurrentTileIcon ? (
          <div
            key={animationTriggerKey}
            id='current-card'
            className='my-6 p-2 rounded-lg shadow-xl transform transition-all duration-500 ease-out hover:scale-105 bg-white/80 dark:bg-slate-700 animate-card-flip flex justify-center items-center'
          >
            <CurrentTileIcon className='w-32 h-40 sm:w-36 sm:h-48 md:w-40 md:h-52 text-theme-light-text dark:text-theme-dark-text' />
          </div>
        ) : (
          <div className='my-6 w-32 h-40 sm:w-36 sm:h-48 md:w-40 md:h-52 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-lg shadow-inner text-slate-400 dark:text-slate-500'>
            <p>請抽牌</p>
          </div>
        )}

        {resultMessage && (
          <div
            id='result'
            className='text-xl sm:text-2xl font-semibold my-5 text-theme-light-text dark:text-theme-dark-text text-center'
          >
            {resultMessage}
          </div>
        )}

        <div className='mt-auto w-full space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center'>
          <button
            onClick={handleDrawCard}
            disabled={drawnCards.length >= ALL_CARDS.length}
            className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 ease-in-out 
                       bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white 
                       dark:bg-emerald-700 dark:hover:bg-emerald-800 dark:active:bg-emerald-900 dark:text-white 
                       shadow-md hover:shadow-lg active:shadow-sm 
                       disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:text-slate-500 dark:disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-70`}
          >
            抽牌 🀄
          </button>
          <button
            onClick={handleResetGame}
            className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200 ease-in-out 
                       bg-red-500 hover:bg-red-600 active:bg-red-700 text-white
                       dark:bg-red-700 dark:hover:bg-red-800 dark:active:bg-red-900 dark:text-white`}
          >
            重置
          </button>
        </div>
      </main>

      {drawnCards.length > 0 && (
        <footer
          id='card-container'
          className='w-full max-w-lg mt-10 p-4 bg-white/80 dark:bg-slate-700 rounded-xl shadow-lg'
        >
          <h3 className='text-lg font-semibold mb-3 text-theme-light-text dark:text-theme-dark-text'>
            抽牌紀錄
          </h3>
          <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
            {drawnCards.map((drawnCardInfo, index) => {
              const HistoryTileIcon =
                MahjongTileComponents[drawnCardInfo.tileName];
              return (
                <div
                  key={drawnCardInfo.id}
                  className={`history-item flex flex-col items-center p-1 rounded-md bg-white dark:bg-slate-700 shadow opacity-0 animate-fadeIn transform hover:scale-110 transition-all duration-200 ${
                    currentCard && drawnCardInfo.id === currentCard.id
                      ? 'highlight-current-history-item'
                      : ''
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {HistoryTileIcon && (
                    <HistoryTileIcon className='w-9 h-12 text-theme-light-text dark:text-theme-dark-text' />
                  )}
                  <span className='mt-1 text-xs font-medium text-theme-light-text opacity-75 dark:text-theme-dark-text dark:opacity-75'>
                    #{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </footer>
      )}

      <audio ref={audioRef} src='/sounds/draw-sound.mp3' preload='auto' />

      <style jsx global>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes cardFlipAnimation {
          0% {
            transform: rotateY(-180deg) scale(0.8);
            opacity: 0;
            filter: brightness(1);
          }
          80% {
            transform: rotateY(0) scale(1);
            opacity: 1;
            filter: brightness(1);
          }
          90% {
            transform: rotateY(0) scale(1);
            opacity: 1;
            filter: brightness(1.5);
          }
          100% {
            transform: rotateY(0) scale(1);
            opacity: 1;
            filter: brightness(1);
          }
        }
        .animate-card-flip {
          animation: cardFlipAnimation 0.6s ease-out forwards;
        }
        .highlight-current-history-item {
          border: 2px solid var(--color-theme-light-main);
          box-shadow: 0 0 8px var(--color-theme-light-main);
          transform: scale(1.05);
        }
        .dark .highlight-current-history-item {
          border-color: var(--color-theme-dark-main);
          box-shadow: 0 0 8px var(--color-theme-dark-main);
        }
      `}</style>
    </div>
  );
}
