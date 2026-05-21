import PrivacyPolicy from "@/components/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-[60vh] w-full flex flex-col items-center justify-center py-16 px-4">
        <h1 className="font-gliker text-3xl md:text-4xl text-[#1b1582] mb-6 text-center">Privacy Policy</h1>
        <PrivacyPolicy />
      </main>
    </>
  );
} 