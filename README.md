# Rock Paper Scissors

A modern, interactive Rock Paper Scissors game built with Next.js, Tailwind CSS v4, and shadcn/ui components.

## Features

-   🎮 **Interactive Gameplay**: Click buttons to make your choice
-   🏆 **Score Tracking**: Keep track of wins, losses, and ties
-   📊 **Game History**: View detailed history of all rounds
-   🌙 **Dark Mode**: Toggle between light, dark, and system themes
-   📱 **Responsive Design**: Works perfectly on desktop and mobile
-   ✨ **Modern UI**: Beautiful components with smooth animations

## Game Rules

-   Rock beats Scissors
-   Scissors beats Paper
-   Paper beats Rock
-   Games are played in 5 rounds
-   The player with the most wins after 5 rounds is the winner

## Tech Stack

-   **Next.js 15** - React framework with App Router
-   **Tailwind CSS v4** - Utility-first CSS framework
-   **shadcn/ui** - Beautiful, accessible UI components
-   **next-themes** - Theme management with system preference support
-   **Lucide React** - Beautiful icons

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── rock-paper-scissors.jsx
│   ├── theme-provider.jsx
│   ├── theme-toggle.jsx
│   └── ui/
│       ├── button.jsx
│       └── card.jsx
└── lib/
    └── utils.js
```

## How to Play

1. Click on one of the three choice buttons: Rock (🪨), Paper (📄), or Scissors (✂️)
2. The computer will make its choice automatically
3. See the result of each round in the game history
4. Play 5 rounds to complete a game
5. Click "Play Again" to start a new game

## Theme Toggle

Use the theme toggle button in the top-right corner to switch between:

-   ☀️ Light mode
-   🌙 Dark mode
-   🖥️ System preference

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
