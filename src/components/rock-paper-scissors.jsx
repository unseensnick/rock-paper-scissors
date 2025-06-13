"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const CHOICES = ["rock", "paper", "scissors"];

const CHOICE_EMOJIS = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️",
};

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function getComputerChoice() {
    return getRandomChoice();
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return { result: "tie", message: "It's a tie!" };
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    // Check if player wins
    if (winConditions[playerSelection] === computerSelection) {
        return {
            result: "win",
            message: `You win! ${capitalize(
                playerSelection
            )} beats ${capitalize(computerSelection)}`,
        };
    } else {
        return {
            result: "lose",
            message: `You lose! ${capitalize(
                computerSelection
            )} beats ${capitalize(playerSelection)}`,
        };
    }
}

export function RockPaperScissors() {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);
    const [gameComplete, setGameComplete] = useState(false);

    const handlePlayerChoice = (playerChoice) => {
        if (gameComplete) return;

        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);

        const newRound = {
            round: currentRound,
            playerChoice,
            computerChoice,
            result: roundResult.result,
            message: roundResult.message,
        };

        setGameHistory((prev) => [...prev, newRound]);

        // Update scores
        if (roundResult.result === "win") {
            setPlayerScore((prev) => prev + 1);
        } else if (roundResult.result === "lose") {
            setComputerScore((prev) => prev + 1);
        }

        // Check if game is complete (5 rounds)
        if (currentRound >= 5) {
            setGameComplete(true);
        } else {
            setCurrentRound((prev) => prev + 1);
        }
    };

    const resetGame = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setGameHistory([]);
        setCurrentRound(1);
        setGameComplete(false);
    };

    const getFinalMessage = () => {
        if (playerScore > computerScore) {
            return "🎉 Congratulations! You won the game!";
        } else if (computerScore > playerScore) {
            return "😔 Computer wins this time. Better luck next time!";
        } else {
            return "🤝 It's a tie game! Great match!";
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">
                        Rock Paper Scissors
                    </CardTitle>
                    <CardDescription>
                        {gameComplete
                            ? "Game Complete!"
                            : `Round ${currentRound} of 5`}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Score Display */}
                    <div className="flex justify-center space-x-8 text-2xl font-bold">
                        <div className="text-center">
                            <div className="text-blue-600 dark:text-blue-400">
                                Player
                            </div>
                            <div>{playerScore}</div>
                        </div>
                        <div className="text-center text-muted-foreground">
                            <div>VS</div>
                            <div>-</div>
                        </div>
                        <div className="text-center">
                            <div className="text-red-600 dark:text-red-400">
                                Computer
                            </div>
                            <div>{computerScore}</div>
                        </div>
                    </div>

                    {/* Game Controls */}
                    {!gameComplete && (
                        <div className="text-center space-y-4">
                            <p className="text-lg">Choose your move:</p>
                            <div className="flex justify-center space-x-4">
                                {CHOICES.map((choice) => (
                                    <Button
                                        key={choice}
                                        onClick={() =>
                                            handlePlayerChoice(choice)
                                        }
                                        variant="outline"
                                        size="lg"
                                        className="flex flex-col items-center space-y-2 h-20 w-20"
                                    >
                                        <span className="text-2xl">
                                            {CHOICE_EMOJIS[choice]}
                                        </span>
                                        <span className="text-sm">
                                            {capitalize(choice)}
                                        </span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Final Result */}
                    {gameComplete && (
                        <div className="text-center space-y-4">
                            <p className="text-xl font-semibold">
                                {getFinalMessage()}
                            </p>
                            <Button onClick={resetGame} size="lg">
                                Play Again
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Game History */}
            {gameHistory.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Game History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {gameHistory.map((round) => (
                                <div
                                    key={round.round}
                                    className={`p-3 rounded-lg border ${
                                        round.result === "win"
                                            ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
                                            : round.result === "lose"
                                            ? "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800"
                                            : "bg-gray-50 border-gray-200 dark:bg-gray-950 dark:border-gray-800"
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold">
                                            Round {round.round}
                                        </span>
                                        <div className="flex items-center space-x-4">
                                            <span className="flex items-center space-x-1">
                                                <span>
                                                    {
                                                        CHOICE_EMOJIS[
                                                            round.playerChoice
                                                        ]
                                                    }
                                                </span>
                                                <span className="text-sm">
                                                    You
                                                </span>
                                            </span>
                                            <span className="text-muted-foreground">
                                                vs
                                            </span>
                                            <span className="flex items-center space-x-1">
                                                <span className="text-sm">
                                                    Computer
                                                </span>
                                                <span>
                                                    {
                                                        CHOICE_EMOJIS[
                                                            round.computerChoice
                                                        ]
                                                    }
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {round.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
