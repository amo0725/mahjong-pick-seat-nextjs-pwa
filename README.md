# 麻將選位神器 (Mahjong Pick Seat) - Next.js PWA Edition

一個簡單好用的線上麻將選位、風位決定工具，使用 Next.js (App Router) 重構並具備完整 PWA 功能，支援離線使用。

## ✨ 功能特色 (Features)

- **現代化 Web 技術棧**: 使用最新版 Next.js (App Router), React, TypeScript。
- **漸進式網頁應用 (PWA)**:
  - 可安裝到主螢幕 (Add to Home Screen)。
  - Service Worker 支援離線使用 (Offline Fallback)。
  - Web App Manifest (`manifest.json`)。
  - 多尺寸應用程式圖示。
- **響應式設計 (Responsive Design)**: 介面適應各種螢幕尺寸。
- **深色/淺色模式 (Dark/Light Mode)**: 根據系統偏好或手動切換，並有平滑過渡動畫。
- **麻將選位邏輯**:
  - 隨機抽取東、南、西、北風位。
  - 防止重複抽取。
  - 顯示當前抽到的牌。
- **抽牌歷史紀錄**:
  - 在本機儲存 (localStorage) 抽牌結果。
  - 清晰展示已抽出的牌和順序。
- **互動回饋**:
  - 抽牌與重置時有音效。
  - 抽牌時有卡片翻轉動畫與燈光閃爍效果。
  - 按鈕點擊時有震動回饋 (支援的裝置)。
- **清晰的程式碼結構**: 模組化、可重用的 Component 架構。
- **客製化主題**: 遵循提供的設計風格指南進行 UI/UX 設計。
- **SEO 優化**: 基本的 Meta 標籤設定。

## 🛠️ 技術棧 (Tech Stack)

- **框架 (Framework)**: [Next.js](https://nextjs.org/) (App Router)
- **語言 (Language)**: [TypeScript](https://www.typescriptlang.org/)
- **UI 元件庫/樣式 (UI/Styling)**: [Tailwind CSS](https://tailwindcss.com/)
- **PWA 工具 (PWA Toolkit)**: [next-pwa](https://www.npmjs.com/package/next-pwa)
- **主題管理 (Theming)**: [next-themes](https://www.npmjs.com/package/next-themes)
- **圖示 (Icons)**: [React Icons](https://react-icons.github.io/react-icons/), Unicode Mahjong Characters
- **字型 (Fonts)**: Google Fonts (Inter, Noto Sans TC) via `next/font`
- **PWA 圖示產生 (Icon Generation)**: [favicons](https://www.npmjs.com/package/favicons)

## 📁 專案結構 (Project Structure)

```
mahjong-pick-seat-nextjs-pwa/
├── public/                # 靜態資源 (icons, manifest.json, offline.html, sounds)
│   ├── icons/             # PWA 應用程式圖示
│   ├── sounds/            # 音效檔案
│   ├── manifest.json      # Web App Manifest
│   └── offline.html       # PWA 離線時的備援頁面
├── scripts/               # 輔助腳本
│   └── generate-icons.mjs # PWA 圖示產生腳本
├── src/
│   ├── app/               # Next.js App Router 核心
│   │   ├── globals.css    # 全域 CSS 樣式
│   │   ├── layout.tsx     # 主要版面配置
│   │   └── page.tsx       # 主頁面元件
│   ├── components/        # 共用 React 元件 (例如 ThemeTransitionWrapper)
│   └── lib/               # (可選) 共用函式庫或輔助函式
├── next.config.ts         # Next.js 設定檔 (包含 PWA 設定)
├── package.json           # 專案依賴與腳本
├── postcss.config.mjs     # PostCSS 設定檔
├── tailwind.config.ts     # Tailwind CSS 設定檔
└── README.md              # 專案說明文件
```

## 🚀 開始使用 (Getting Started)

### 先決條件 (Prerequisites)

- [Node.js](https://nodejs.org/) (建議 LTS 版本)
- [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)

### 安裝 (Installation)

1.  **複製儲存庫 (Clone the repository):**

    ```bash
    git clone https://github.com/<YOUR_USERNAME>/mahjong-pick-seat-nextjs-pwa.git
    cd mahjong-pick-seat-nextjs-pwa
    ```

2.  **安裝依賴 (Install dependencies):**

    ```bash
    npm install
    # 或者使用 yarn
    # yarn install
    ```

3.  **產生 PWA 圖示 (Generate PWA icons):**
    如果 `public/icons` 資料夾為空或您更新了 `icon-source.png`，請執行以下指令：
    ```bash
    node scripts/generate-icons.mjs
    ```
    (請確保 `scripts/icon-source.png` 存在作為圖示來源)

### 開發 (Development)

執行以下指令以啟動本地開發伺服器：

```bash
npm run dev
# 或者使用 yarn
# yarn dev
```

然後在瀏覽器中開啟 `http://localhost:3000`。

## 📜 可用腳本 (Available Scripts)

- `dev`: 在開發模式下啟動 Next.js 應用程式。
- `build`: 建置生產版本的應用程式。
- `start`: 啟動生產版本的 Next.js 伺服器 (需先執行 `build`)。
- `lint`: 使用 ESLint 檢查程式碼風格。
- `generate:icons`: 手動執行 PWA 圖示產生腳本 (同 `node scripts/generate-icons.mjs`)。

## ⚙️ PWA 設定

PWA 功能主要透過 `next-pwa` 在 `next.config.ts` 中設定。
`public/manifest.json` 檔案定義了 Web App 的元數據，例如名稱、圖示、啟動 URL 等。
`public/offline.html` 是在使用者離線且無法存取快取內容時顯示的備援頁面。

## 🌐 部署 (Deployment)

此 Next.js 應用程式可以部署到任何支援 Node.js 的平台，例如：

- [Vercel](https://vercel.com/) (官方推薦，對 Next.js 支援最佳)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) (可能需要額外設定以支援 Next.js 的部分功能，特別是 App Router 和 PWA)
- 其他雲端服務提供商 (AWS, Google Cloud, Azure)

對於靜態匯出 (如果適用)，請參考 Next.js 官方文件。由於本專案使用 App Router 並期望 PWA 功能完整，建議使用支援 Next.js SSR/ISR 的平台。

## 🎨 設計風格 (Design Choices)

本專案的 UI/UX 設計遵循專案初期提供的「設計風格指南」，旨在提供一個現代、簡潔且具東方趣味的使用者體驗。
主要設計元素包括：

- 特定的亮色與暗色主題色彩配置。
- 使用 Inter 和 Noto Sans TC 字體。
- 卡片翻轉動畫、按鈕互動回饋等。

詳細的設計指南請參考專案相關文件。

---

祝您使用愉快！如果您有任何問題或建議，歡迎提出。
