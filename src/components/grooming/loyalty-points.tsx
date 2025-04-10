type LoyaltyPointsProps = {
  points: {
    currentPoints: number;
    lifetimePoints: number;
  };
};

export function LoyaltyPoints({ points }: LoyaltyPointsProps) {
  return (
    <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
      <div className="bg-[#bfe5fb] rounded-lg p-6 text-center min-w-[200px] shadow-md">
        <h3 className="text-[#6d76c3] text-base font-bold mb-2">Current Points</h3>
        <p className="text-[#1b1582] text-2xl font-bold">{points.currentPoints}</p>
      </div>
      <div className="bg-[#bfe5fb] rounded-lg p-6 text-center min-w-[200px] shadow-md">
        <h3 className="text-[#6d76c3] text-base font-bold mb-2">Lifetime Points</h3>
        <p className="text-[#1b1582] text-2xl font-bold">{points.lifetimePoints}</p>
      </div>
    </div>
  );
} 