export type TemplateId = "restaurant" | "delivery" | "cloud-kitchen";

export interface TemplateDefinition {
  id: TemplateId;
  code: string;
  name: string;
  category: string;
  summary: string;
  defaultBrandColor: string;
  defaultBrandName: string;
  nav: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  panels: { label: string; value: string }[];
  listTitle: string;
  list: { name: string; meta: string }[];
}

export const templates: TemplateDefinition[] = [
  {
    id: "restaurant",
    code: "TPL-01",
    name: "Restaurant",
    category: "Dine-in · Café",
    summary: "Menu-first website with reservations, locations and an ordering entry point.",
    defaultBrandColor: "#C2410C",
    defaultBrandName: "MAISON",
    nav: ["Menu", "Reservations", "Locations", "About"],
    heroEyebrow: "Est. 2019 · Table service",
    heroTitle: "A seasonal kitchen, served daily.",
    heroBody: "Reserve a table, browse the menu and order ahead from any device.",
    primaryCta: "Book a table",
    secondaryCta: "View menu",
    panels: [
      { label: "Covers / week", value: "1,240" },
      { label: "Avg. rating", value: "4.8" },
      { label: "Locations", value: "3" },
    ],
    listTitle: "Signature menu",
    list: [
      { name: "Charred heirloom tomato", meta: "£12" },
      { name: "Slow braised short rib", meta: "£26" },
      { name: "Burnt honey cheesecake", meta: "£9" },
    ],
  },
  {
    id: "delivery",
    code: "TPL-02",
    name: "Food Delivery",
    category: "Direct ordering",
    summary: "Conversion-focused ordering flow with live tracking and repeat-order surfaces.",
    defaultBrandColor: "#0EA5E9",
    defaultBrandName: "SWIFTEATS",
    nav: ["Order", "Tracking", "Offers", "Support"],
    heroEyebrow: "Direct delivery · No commission",
    heroTitle: "Order direct. Delivered in 25 minutes.",
    heroBody: "Own your customer relationship with a delivery experience that skips the marketplace fees.",
    primaryCta: "Start order",
    secondaryCta: "Track delivery",
    panels: [
      { label: "Avg. delivery", value: "24m" },
      { label: "Repeat rate", value: "62%" },
      { label: "Live riders", value: "18" },
    ],
    listTitle: "Live orders",
    list: [
      { name: "#48219 · Preparing", meta: "04:12" },
      { name: "#48220 · Out for delivery", meta: "11:38" },
      { name: "#48221 · Delivered", meta: "—" },
    ],
  },
  {
    id: "cloud-kitchen",
    code: "TPL-03",
    name: "Cloud Kitchen",
    category: "Multi-brand ops",
    summary: "Operations-first site for virtual brands running several kitchens and channels.",
    defaultBrandColor: "#7C3AED",
    defaultBrandName: "NODE KITCHEN",
    nav: ["Brands", "Kitchens", "Channels", "Partners"],
    heroEyebrow: "Virtual brands · Multi-channel",
    heroTitle: "Six brands. One kitchen network.",
    heroBody: "Launch delivery-only brands with shared operations, unified menus and channel routing.",
    primaryCta: "Launch a brand",
    secondaryCta: "See operations",
    panels: [
      { label: "Brands live", value: "6" },
      { label: "Kitchens", value: "4" },
      { label: "Orders / day", value: "2.1k" },
    ],
    listTitle: "Channel routing",
    list: [
      { name: "Direct web", meta: "41%" },
      { name: "Marketplace", meta: "37%" },
      { name: "Partner API", meta: "22%" },
    ],
  },
];

export const getTemplate = (id: TemplateId) => templates.find((template) => template.id === id) ?? templates[0];
