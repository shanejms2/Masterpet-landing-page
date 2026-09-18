import {
  ArrowRight,
  BookOpen,
  Boxes,
  Building2,
  CalendarCheck,
  Check,
  FolderInput,
  Gift,
  Mail,
  Phone,
  Scissors,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY_INFO } from "@/lib/constants";
import CrmDashboardPreview from "./CrmDashboardPreview";
import CrmFooter from "./CrmFooter";
import CrmNav from "./CrmNav";

const crmMailto = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent("Masterpet CRM enquiry")}`;

const modules = [
  {
    icon: CalendarCheck,
    title: "Bookings",
    description: "Calendar, staff, packages, and reminders for grooming, boarding, and shop appointments.",
    points: ["Daily and weekly schedules", "Service packages and add-ons", "Reminders for pet parents"],
  },
  {
    icon: Boxes,
    title: "Inventory",
    description: "Stock for food, accessories, and salon consumables — with alerts before you run out.",
    points: ["Stock levels by SKU", "Low-stock alerts", "Purchase and usage history"],
  },
  {
    icon: Users,
    title: "Customers",
    description: "Pet and parent profiles, visit history, and notes your team can actually find.",
    points: ["Pet and parent profiles", "Visit and purchase history", "Staff notes"],
  },
  {
    icon: Gift,
    title: "Loyalty",
    description: "Points and visit rewards at checkout, without a separate app.",
    points: ["Points on bookings and sales", "Visit-based rewards", "Balances at checkout"],
  },
  {
    icon: BookOpen,
    title: "Accounting",
    description: "Keep the books next to the work — invoices, payments, and a clear view of what came in.",
    points: ["Invoices and payments", "Books the AI agent can look up", "Sales alongside bookings and stock"],
  },
  {
    icon: FolderInput,
    title: "Import, export & migrations",
    description: "Bring data in, take data out, and move off tools you have already outgrown.",
    points: ["Import and export your records", "Migration support from other CRMs", "Zoho and similar tools"],
  },
];

const aiCapabilities = [
  {
    title: "Creates charts",
    copy: "Ask for a view of the week, the month, or a service — the agent draws the chart from your live data.",
  },
  {
    title: "Looks up the books",
    copy: "Revenue, open invoices, and what the accounting module already knows, in plain language.",
  },
  {
    title: "Answers questions",
    copy: "How busy was Saturday? Which SKU is low? Who still owes? Ask it like you would ask a teammate.",
  },
];

const audiences = [
  { icon: Scissors, title: "Grooming salons", copy: "Fill the day without double-booking." },
  { icon: Store, title: "Pet shops", copy: "Tie walk-ins to stock, customers, and the books." },
  { icon: Building2, title: "Boarding", copy: "Check-in, occupancy, and history in one place." },
  { icon: Users, title: "Mixed teams", copy: "One customer list across shop, salon, and desk." },
];

const faqs = [
  {
    value: "who",
    q: "Who is Masterpet CRM for?",
    a: "Pet shops, grooming salons, boarding and daycare, and mixed pet businesses that want bookings, inventory, customers, loyalty, and accounting in one place — without a steep learning curve.",
  },
  {
    value: "ai",
    q: "What does the AI agent do?",
    a: "It sits inside Masterpet CRM. It creates charts, looks up your accounting books, and answers questions about your data — bookings, stock, customers, loyalty, and the ledger.",
  },
  {
    value: "migrate",
    q: "Can we move from Zoho or another CRM?",
    a: "Yes. We support import and export, and we help with migrations from other CRMs such as Zoho so you are not starting from a blank database.",
  },
  {
    value: "cost",
    q: "How much does a subscription cost?",
    a: `Plans are tailored to your locations and team size. We do not publish a rate card. Email ${COMPANY_INFO.email} or call ${COMPANY_INFO.phoneDisplay}.`,
  },
  {
    value: "separate",
    q: "Is this the same as Masterpet grooming in Kochi?",
    a: "No. At-home grooming is our consumer service. Masterpet CRM is a separate software product for other pet-related companies.",
  },
  {
    value: "try",
    q: "Can we see it before subscribing?",
    a: "Yes. Email or call and we will walk you through the modules, the AI agent, and a migration path from the tools you use today.",
  },
];

const CrmPageContent = () => (
  <div data-crm-page className="min-h-screen bg-background">
    <CrmNav />

    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary">Trusted by 500+ businesses</Badge>
          <h1 className="font-lora text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A simpler CRM — with an AI agent on your data.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            We simplified everyday use for pet shops, grooming salons, boarding, and clinics. Bookings, inventory, customers, loyalty, and accounting sit in one place. An AI agent inside the product creates charts, looks up the books, and answers questions about your data.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={crmMailto}>
                <Mail data-icon="inline-start" />
                Email {COMPANY_INFO.email}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <PhoneLink>
                <Phone data-icon="inline-start" />
                Call <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
              </PhoneLink>
            </Button>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="size-4 shrink-0 text-primary" />
            Over 500 businesses are happy with our service. Import, export, and Zoho migrations included. Pricing on request.
          </p>
        </div>
        <CrmDashboardPreview />
      </div>
    </section>

    <section id="ai" className="border-t bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            AI agent
          </Badge>
          <h2 className="font-lora text-3xl font-semibold tracking-tight md:text-4xl">
            Ask your CRM. Don&apos;t hunt through screens.
          </h2>
          <p className="mt-3 text-muted-foreground">
            An agent inside Masterpet CRM reads your operational data and your accounting books, then replies in plain language — and draws a chart when a picture is faster.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {aiCapabilities.map((item) => (
            <Card key={item.title}>
              <CardHeader className="flex flex-col gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Sparkles />
                </div>
                <CardTitle className="font-lora">{item.title}</CardTitle>
                <CardDescription>{item.copy}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section id="modules" className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-lora text-3xl font-semibold tracking-tight md:text-4xl">
            Modules, without the clutter
          </h2>
          <p className="mt-3 text-muted-foreground">
            Usage is simplified on purpose. You get the stack a pet business actually runs — including accounting, import/export, and a path off tools like Zoho.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.title}>
                <CardHeader className="flex flex-col gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Icon />
                  </div>
                  <CardTitle className="font-lora">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {module.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    <section id="who" className="border-t bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-lora text-3xl font-semibold tracking-tight md:text-4xl">
            Built for pet companies
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <CardHeader className="flex flex-col gap-3">
                  <Icon className="text-primary" />
                  <CardTitle className="font-lora text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.copy}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-lora text-3xl font-semibold tracking-tight md:text-4xl">
            Pricing on request
          </h2>
          <p className="mt-3 text-muted-foreground">
            There is no public rate card. Email or call and we will quote for your locations, seats, and migration.
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-lora">
                <Mail />
                Email
              </CardTitle>
              <CardDescription>
                Send a short brief: business type, locations, and whether you are on Zoho or another CRM today.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={crmMailto}>
                  {COMPANY_INFO.email}
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-lora">
                <Phone />
                Call
              </CardTitle>
              <CardDescription>
                Speak with the Masterpet team about onboarding, AI, accounting, and a subscription.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <PhoneLink>
                  <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
                  <ArrowRight data-icon="inline-end" />
                </PhoneLink>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

    <section className="border-t bg-muted/40 py-16 md:py-24" aria-label="Masterpet CRM frequently asked questions">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-lora">Questions</CardTitle>
            <CardDescription>About the product, AI, migrations, and pricing.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.value} value={faq.value}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>

    <section className="py-16 pb-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-lora text-2xl font-semibold md:text-3xl">
              Ready for a simpler CRM?
            </CardTitle>
            <CardDescription className="text-base">
              Join 500+ businesses on Masterpet CRM. We will walk through AI, accounting, and a migration from Zoho or the tools you use today — then share a subscription.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col items-stretch gap-3 sm:flex-row">
            <Button asChild>
              <a href={crmMailto}>Email us</a>
            </Button>
            <Button asChild variant="outline">
              <PhoneLink>
                Call <span data-google-ads-phone-label>{COMPANY_INFO.phoneDisplay}</span>
              </PhoneLink>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>

    <CrmFooter />
  </div>
);

export default CrmPageContent;
