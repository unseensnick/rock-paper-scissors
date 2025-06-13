import { RockPaperScissors } from "@/components/rock-paper-scissors";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto py-8">
                <RockPaperScissors />
            </div>
        </main>
    );
}
