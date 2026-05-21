import Container from "@/components/Container";

export default function PageLoadingSkeleton() {
  return (
    <div className="w-full py-8 md:py-12" aria-busy="true" aria-label="Loading page">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6 animate-pulse">
          <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto" />
          <div className="h-5 bg-gray-200 rounded w-full" />
          <div className="h-5 bg-gray-200 rounded w-5/6 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="h-48 bg-gray-200 rounded-2xl" />
            <div className="h-48 bg-gray-200 rounded-2xl" />
          </div>
          <div className="h-64 bg-gray-200 rounded-2xl w-full" />
        </div>
      </Container>
    </div>
  );
}
