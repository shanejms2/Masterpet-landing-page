type FooterProps = {
  mascotImage: string;
  disclaimer: string;
};

export function Footer({ mascotImage, disclaimer }: FooterProps) {
  return (
    <footer className="w-full max-w-4xl mx-auto mt-8 text-center">
      <div className="pt-1 pb-4 px-4">
        <div className="-mt-1">
          <img
            src={mascotImage}
            alt="Masterpet Mascots Waving"
            width="250"
            height="125"
            className="mx-auto -mb-4"
            style={{ maxWidth: '250px', height: 'auto' }}
            crossOrigin="anonymous"
          />
        </div>

        <h2 className="text-[#1b1582] text-2xl font-bold mb-8">
          THANK YOU FOR TRUSTING US
        </h2>
        
        <div className="text-[#1b1582]">
          <h3 className="font-bold mb-1">DISCLAIMER</h3>
          <p className="text-sm leading-relaxed max-w-3xl mx-auto">
            {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
} 