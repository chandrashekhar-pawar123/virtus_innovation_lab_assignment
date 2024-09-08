import GameScene from "../scenes/GameScene";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <h1 className="text-center text-4xl font-bold p-4 text-white">Vehicle Game</h1>
      <GameScene />
    </div>
  );
}
