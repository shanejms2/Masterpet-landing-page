import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Container from "./Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNavigation = ({ items }: BreadcrumbNavigationProps) => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-3">
      <Container>
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-brand-blue/70 hover:text-brand-blue transition-colors"
              tabIndex={0}
              aria-label="Go to homepage"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-brand-blue/50 mx-1" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-brand-blue/70 hover:text-brand-blue transition-colors"
                  tabIndex={0}
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-blue font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
};

export default BreadcrumbNavigation;
