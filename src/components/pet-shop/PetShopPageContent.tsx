"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  ArrowRight,
  Bone,
  Car,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Route,
  Scissors,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Container from "@/components/Container";
import PhoneLink from "@/components/PhoneLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";
import {
  PET_SHOP,
  PET_SHOP_CATEGORIES,
  PET_SHOP_FAQS,
  PET_SHOP_REACH_TIPS,
  VENNALA_NEARBY_AREAS,
} from "@/lib/pet-shop";

const shopWhatsApp = getWhatsAppUrl(
  "Hi Masterpet! I want to visit / enquire about the pet shop in Vennala. [From Pet Shop page]"
);

const directionsWhatsApp = (area: string) =>
  getWhatsAppUrl(
    `Hi Masterpet! I'm near ${area} and looking for the Vennala pet shop / pet supplies. [From Pet Shop page]`
  );

const stockItems = [
  { icon: Bone, ...PET_SHOP_CATEGORIES[0] },
  { icon: ShoppingBag, ...PET_SHOP_CATEGORIES[1] },
  { icon: Sparkles, ...PET_SHOP_CATEGORIES[2] },
  { icon: Scissors, ...PET_SHOP_CATEGORIES[3] },
];

const reachItems = [
  { icon: MapPin, ...PET_SHOP_REACH_TIPS[0] },
  { icon: Navigation, ...PET_SHOP_REACH_TIPS[1] },
  { icon: Route, ...PET_SHOP_REACH_TIPS[2] },
  { icon: Car, ...PET_SHOP_REACH_TIPS[3] },
];

export default function PetShopPageContent() {
  return (
    <div className="bg-background font-fractul">
      <section className="border-b py-12 md:py-20" aria-label="Masterpet Pet Shop Vennala">
        <Container>
          <div className="flex flex-col gap-10">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Pet Shop Kochi</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="flex flex-col items-start gap-6">
                <Badge variant="secondary">Vennala shop · Open daily</Badge>
                <h1 className="font-fractul text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Pet Shop in Vennala, Kochi
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground">
                  Food, treats, accessories, and everyday essentials for your pets —
                  opposite St. Mathews Church on Vennala High School Road.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg" variant="brand">
                    <PhoneLink>
                      <Phone data-icon="inline-start" />
                      Call shop
                      <span className="sr-only" data-google-ads-phone-label>
                        {PET_SHOP.phoneDisplay}
                      </span>
                    </PhoneLink>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a
                      href={shopWhatsApp}
                      onClick={() => trackWhatsappClick()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp data-icon="inline-start" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="ghost">
                    <a href={PET_SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation data-icon="inline-start" />
                      Get directions
                    </a>
                  </Button>
                </div>
                <Alert>
                  <Clock />
                  <AlertTitle>Walk-ins welcome</AlertTitle>
                  <AlertDescription>
                    Open daily {PET_SHOP.hoursDisplay}. Message us before you come if you need a
                    specific food or size.
                  </AlertDescription>
                </Alert>
              </div>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-fractul">Find us in Vennala</CardTitle>
                  <CardDescription>
                    {PET_SHOP.addressLandmark}, {PET_SHOP.addressLocality}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-xl border">
                    <iframe
                      src={PET_SHOP.mapsEmbedUrl}
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Masterpet pet shop on Google Maps"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={PET_SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                      <ArrowRight data-icon="inline-end" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-label="Shop location and hours">
        <Container>
          <div className="mb-10 flex max-w-2xl flex-col gap-3">
            <h2 className="font-fractul text-3xl font-bold tracking-tight md:text-4xl">
              Visit us in Vennala
            </h2>
            <p className="text-muted-foreground">
              Walk in for pet supplies, or message us before you come so we can keep your
              favourites ready.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-col gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <MapPin />
                </div>
                <CardTitle className="font-fractul">Address</CardTitle>
                <CardDescription>
                  {PET_SHOP.addressLine1}
                  <br />
                  {PET_SHOP.addressLandmark}
                  <br />
                  {PET_SHOP.addressLocality}, {PET_SHOP.addressCity}, {PET_SHOP.addressRegion}{" "}
                  {PET_SHOP.postalCode}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-col gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Clock />
                </div>
                <CardTitle className="font-fractul">Hours</CardTitle>
                <CardDescription>
                  Open daily
                  <br />
                  {PET_SHOP.hoursDisplay}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-col gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Phone />
                </div>
                <CardTitle className="font-fractul">Contact</CardTitle>
                <CardDescription className="flex flex-col gap-2">
                  <PhoneLink className="text-foreground hover:underline">
                    <span data-google-ads-phone-label>{PET_SHOP.phoneDisplay}</span>
                  </PhoneLink>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t bg-muted/40 py-16 md:py-24" aria-label="What you can find at the shop">
        <Image
          src="/brand_assets/Mascot/catwball/MP_catwball.svg"
          alt=""
          aria-hidden
          width={180}
          height={180}
          className="pointer-events-none absolute right-4 top-6 hidden size-32 object-contain md:block lg:right-10 lg:size-36"
        />
        <Container>
          <div className="mb-10 flex max-w-2xl flex-col gap-3">
            <h2 className="font-fractul text-3xl font-bold tracking-tight md:text-4xl">
              What you&apos;ll find
            </h2>
            <p className="text-muted-foreground">
              A neighbourhood pet shop stocked for daily care — not just grooming day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stockItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardHeader className="flex flex-col gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Icon />
                    </div>
                    <CardTitle className="font-fractul">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-label="How to reach Masterpet Vennala">
        <Container>
          <div className="mb-10 flex max-w-2xl flex-col gap-3">
            <h2 className="font-fractul text-3xl font-bold tracking-tight md:text-4xl">
              How to reach the shop
            </h2>
            <p className="text-muted-foreground">
              Easy to find if you know Vennala High School Road and St. Mathews Church.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reachItems.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card key={tip.title}>
                  <CardHeader className="flex flex-col gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Icon />
                    </div>
                    <CardTitle className="font-fractul">{tip.title}</CardTitle>
                    <CardDescription>{tip.detail}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        className="border-t bg-muted/40 py-16 md:py-24"
        id="near-vennala"
        aria-label="Areas near Vennala pet shop"
      >
        <Container>
          <div className="mb-10 flex max-w-2xl flex-col gap-3">
            <h2 className="font-fractul text-3xl font-bold tracking-tight md:text-4xl">
              Near Vennala? We&apos;re close
            </h2>
            <p className="text-muted-foreground">
              Pet parents from these neighbourhoods visit us for supplies — message us
              your area, or book at-home grooming nearby.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VENNALA_NEARBY_AREAS.map((area) => (
              <Card key={area.name}>
                <CardHeader>
                  <CardTitle className="font-fractul text-lg">{area.name}</CardTitle>
                  <CardDescription>{area.blurb}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={directionsWhatsApp(area.name)}
                      onClick={() => trackWhatsappClick()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                  {area.groomingSlug ? (
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/kochi-pet-grooming/${area.groomingSlug}`}>Grooming</Link>
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-label="Pet shop frequently asked questions">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-fractul text-2xl md:text-3xl">
                  <h2 className="text-inherit">Pet shop FAQs</h2>
                </CardTitle>
                <CardDescription>Quick answers before you visit or message us.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {PET_SHOP_FAQS.map((item, index) => (
                    <AccordionItem key={item.question} value={`faq-${index}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24" aria-label="At-home grooming">
        <Container>
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-brand-blue p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
            <div className="flex max-w-xl flex-col gap-3">
              <Badge variant="on-dark" className="w-fit">
                Same Masterpet team
              </Badge>
              <h2 className="font-fractul text-3xl font-bold tracking-tight md:text-4xl">
                Need grooming too?
              </h2>
              <p className="text-white/70">
                Professional at-home pet grooming across Kochi, including homes near Vennala.
              </p>
            </div>
            <div className="flex items-end gap-4">
              <Button asChild size="lg" variant="brand" className="shrink-0">
                <Link href="/kochi-pet-grooming">
                  At-home grooming
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Image
                src="/brand_assets/Mascot/withaheart/MP_withaheart.svg"
                alt=""
                aria-hidden
                width={160}
                height={160}
                className="hidden size-32 object-contain object-bottom lg:block"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t bg-muted/40 py-16 md:py-20">
        <Container>
          <Card className="relative overflow-hidden">
            <Image
              src="/brand_assets/Mascot/bothwaving/MP_bothwaving.svg"
              alt=""
              aria-hidden
              width={180}
              height={180}
              className="pointer-events-none absolute -bottom-4 right-2 hidden size-32 object-contain opacity-90 md:block lg:right-8 lg:size-40"
            />
            <CardHeader className="md:pr-40">
              <CardTitle className="font-fractul text-2xl font-bold md:text-3xl">
                <h2 className="text-inherit">Come say hi in Vennala</h2>
              </CardTitle>
              <CardDescription className="text-base">
                Call, WhatsApp, or follow directions to Masterpet on Vennala High School
                Road — open {PET_SHOP.hoursDisplay}.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-stretch gap-3 sm:flex-row md:pr-40">
              <Button asChild variant="brand">
                <PhoneLink>
                  <Phone data-icon="inline-start" />
                  <span data-google-ads-phone-label>{PET_SHOP.phoneDisplay}</span>
                </PhoneLink>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={shopWhatsApp}
                  onClick={() => trackWhatsappClick()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp data-icon="inline-start" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href={PET_SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation data-icon="inline-start" />
                  Open in Maps
                </a>
              </Button>
            </CardFooter>
          </Card>
        </Container>
      </section>
    </div>
  );
}
