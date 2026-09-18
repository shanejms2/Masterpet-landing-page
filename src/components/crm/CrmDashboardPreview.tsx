import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { label: "Bookings today", value: "8" },
  { label: "Active pets", value: "124" },
  { label: "Invoices due", value: "5" },
  { label: "Loyalty points", value: "2.4k" },
];

const bookings = [
  { time: "10:00", pet: "Buddy", service: "Full Groom", status: "Confirmed" },
  { time: "11:30", pet: "Coco", service: "Mini Groom", status: "Confirmed" },
  { time: "14:00", pet: "Simba", service: "Hygiene", status: "Waiting" },
];

const bars = [
  { label: "Mon", height: "2.8rem" },
  { label: "Tue", height: "3.8rem" },
  { label: "Wed", height: "2.4rem" },
  { label: "Thu", height: "5rem" },
  { label: "Fri", height: "4.4rem" },
  { label: "Sat", height: "6.2rem" },
  { label: "Sun", height: "3.4rem" },
];

const CrmDashboardPreview = () => (
  <Card aria-hidden className="border bg-background shadow-none">
    <CardHeader className="flex flex-row items-start justify-between gap-3 pb-4">
      <div className="flex flex-col gap-1">
        <CardTitle className="font-lora text-lg">Ask anything about your data</CardTitle>
        <CardDescription>AI charts, books lookup, and a simple daily view</CardDescription>
      </div>
      <Badge variant="secondary">Preview</Badge>
    </CardHeader>
    <CardContent className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-muted px-3 py-3">
            <p className="font-lora text-2xl font-semibold">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-xl bg-muted p-4">
          <p className="text-xs font-medium text-muted-foreground">This week&apos;s revenue</p>
          <div className="flex items-end gap-2">
            {bars.map((bar) => (
              <div
                key={bar.label}
                className="min-h-2 flex-1 rounded-sm bg-primary"
                style={{ height: bar.height }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {bars.map((bar) => (
              <span key={bar.label} className="flex-1 text-center text-[10px] text-muted-foreground">
                {bar.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border bg-background p-4">
          <p className="text-xs font-medium text-muted-foreground">AI agent</p>
          <p className="text-sm">What did grooming vs shop bring in this week?</p>
          <p className="text-sm text-muted-foreground">
            Grooming ₹42,400 · Shop ₹18,200. Saturday was the peak. Three invoices are still open in the books.
          </p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Pet</TableHead>
            <TableHead className="hidden sm:table-cell">Service</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((row) => (
            <TableRow key={`${row.time}-${row.pet}`}>
              <TableCell className="font-medium">{row.time}</TableCell>
              <TableCell>{row.pet}</TableCell>
              <TableCell className="hidden sm:table-cell">{row.service}</TableCell>
              <TableCell>
                <Badge variant={row.status === "Waiting" ? "outline" : "secondary"}>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default CrmDashboardPreview;
