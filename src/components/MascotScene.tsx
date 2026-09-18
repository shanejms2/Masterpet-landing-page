import Image from "next/image";
import { cn } from "@/lib/utils";

type MascotSceneProps = {
  className?: string;
};

const MascotScene = ({ className }: MascotSceneProps) => (
  <div className={cn("relative w-full max-w-md lg:max-w-lg", className)}>
    <div aria-hidden className="pointer-events-none absolute inset-[-12%] -z-0">
      <div className="mp-fluid-blob left-[4%] top-[6%] size-[90%] bg-brand-green/50" />
      <div
        className="mp-fluid-blob-alt right-[-6%] top-[16%] size-[62%] bg-[#d4c4ff]/55"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="mp-fluid-blob left-[8%] bottom-[2%] size-[52%] bg-[#9ad4ff]/45"
        style={{ animationDelay: "-9s" }}
      />
    </div>
    <Image
      src="/brand_assets/Mascot/couch_dog_cat/MP_Couch_dog_cat.svg"
      alt="Masterpet mascot on a couch with a cat, representing comfort and care"
      width={480}
      height={400}
      className="relative z-10 w-full h-auto"
      priority
      loading="eager"
    />
  </div>
);

export default MascotScene;
