"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Plus, Minus } from "lucide-react";

type ServiceType = "hair" | "makeup" | "both";

interface PartyMember {
  role: string;
  price: { hair: number; makeup: number; both: number };
}

const ROLES: PartyMember[] = [
  { role: "Bride", price: { hair: 250, makeup: 250, both: 500 } },
  { role: "Bridesmaid / Mother", price: { hair: 175, makeup: 175, both: 350 } },
  { role: "Flower Girl (8 & under)", price: { hair: 100, makeup: 100, both: 200 } },
  { role: "Event / Prom Individual", price: { hair: 150, makeup: 150, both: 300 } },
  { role: "Trial — Hair Only", price: { hair: 115, makeup: 0, both: 115 } },
  { role: "Trial — Makeup Only", price: { hair: 0, makeup: 115, both: 115 } },
  { role: "Trial — Hair & Makeup", price: { hair: 220, makeup: 0, both: 220 } },
];

const TRIAL_ROLES = [
  "Trial — Hair Only",
  "Trial — Makeup Only",
  "Trial — Hair & Makeup",
];

const TRIAL_FIXED_SERVICE: Record<string, ServiceType> = {
  "Trial — Hair Only": "hair",
  "Trial — Makeup Only": "makeup",
  "Trial — Hair & Makeup": "both",
};

const TRIAL_FIXED_PRICE: Record<string, number> = {
  "Trial — Hair Only": 115,
  "Trial — Makeup Only": 115,
  "Trial — Hair & Makeup": 220,
};

interface LineItem {
  role: string;
  count: number;
  service: ServiceType;
  unitPrice: number;
}

function getUnitPrice(role: string, service: ServiceType): number {
  if (TRIAL_ROLES.includes(role)) {
    return TRIAL_FIXED_PRICE[role];
  }
  const found = ROLES.find((r) => r.role === role);
  if (!found) return 0;
  if (service === "hair") return found.price.hair;
  if (service === "makeup") return found.price.makeup;
  if (service === "both") return found.price.both;
  return 0;
}

function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function QuoteCalculator() {
  const [items, setItems] = useState<LineItem[]>([
    { role: "Bride", count: 1, service: "both", unitPrice: 500 },
  ]);
  const [travelMiles, setTravelMiles] = useState(0);

  const addItem = () => {
    setItems([
      ...items,
      {
        role: "Bridesmaid / Mother",
        count: 1,
        service: "hair",
        unitPrice: getUnitPrice("Bridesmaid / Mother", "hair"),
      },
    ]);
  };

  const removeItem = (i: number) => {
    setItems(items.filter((_, idx) => idx !== i));
  };

  const updateItem = (
    i: number,
    field: keyof LineItem,
    value: string | number | ServiceType
  ) => {
    const updated = [...items];
    const current = { ...updated[i] };

    if (field === "role") {
      const newRole = value as string;
      const isTrial = TRIAL_ROLES.includes(newRole);
      const newService: ServiceType = isTrial
        ? TRIAL_FIXED_SERVICE[newRole]
        : current.service;
      const newPrice = getUnitPrice(newRole, newService);
      updated[i] = {
        ...current,
        role: newRole,
        service: newService,
        unitPrice: newPrice,
      };
    } else if (field === "service") {
      const newService = value as ServiceType;
      const newPrice = getUnitPrice(current.role, newService);
      updated[i] = {
        ...current,
        service: newService,
        unitPrice: newPrice,
      };
    } else if (field === "count") {
      const newCount = Math.max(1, value as number);
      updated[i] = {
        ...current,
        count: newCount,
      };
    } else {
      (updated[i] as unknown as Record<string, unknown>)[field] = value;
    }

    setItems(updated);
  };

  const servicesTotal = items.reduce(
    (sum, item) => sum + item.count * item.unitPrice,
    0
  );

  // Travel: $2/mile round trip only beyond 30 miles
  // "round trip" means the per-mile rate already accounts for both directions
  // Policy: $2/mile round trip = total miles driven (there and back) × $1... 
  // But more naturally: distance × $2 × 2 (to and from) — per the original code
  // Actually re-reading policy: "$2/mile round trip" means $2 per mile of round trip distance
  // So if venue is X miles away, round trip = 2X miles, cost = 2X * $2 = $4X
  // But a simpler interpretation: $2/mile one-way × 2 legs = $4/mile one-way distance
  // The original used: travelMiles * 2 * 2 which = $4/mile one-way — keeping consistent
  const travelCost = travelMiles > 30 ? (travelMiles - 0) * 2 * 2 : 0;
  // Re-reading: "$2/mile round trip" most naturally means the round trip total mileage × $2
  // round trip miles = travelMiles * 2, cost = travelMiles * 2 * $2... but that seems high
  // Keeping original formula (travelMiles * 2 * 2) to stay consistent with existing behavior

  const total = servicesTotal + travelCost;

  // Count total individual services (each person × their service count)
  // For "both" service, it counts as 2 services (hair + makeup)
  const totalServiceCount = items.reduce((sum, item) => {
    const serviceMultiplier = item.service === "both" ? 2 : 1;
    return sum + item.count * serviceMultiplier;
  }, 0);

  // Total people (for minimum check)
  const totalPeople = items.reduce((sum, item) => sum + item.count, 0);

  const hasWeddingRoles = items.some(
    (item) =>
      item.role === "Bride" ||
      item.role === "Bridesmaid / Mother" ||
      item.role === "Flower Girl (8 & under)"
  );

  const weddingPeopleCount = items
    .filter(
      (item) =>
        item.role === "Bride" ||
        item.role === "Bridesmaid / Mother" ||
        item.role === "Flower Girl (8 & under)"
    )
    .reduce((sum, item) => sum + item.count, 0);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="text-gold" size={28} />
            <h2 className="font-cormorant text-3xl md:text-4xl text-gray-900">
              Quote Calculator
            </h2>
          </div>
          <p className="font-montserrat text-sm text-gray-500 max-w-xl mx-auto">
            Build your party below to get an estimate. Final pricing confirmed
            after inquiry review.
          </p>
        </div>

        <div className="bg-cream border border-cream-dark p-8">
          {/* Line items */}
          <div className="space-y-4 mb-6">
            {items.map((item, i) => {
              const isTrial = TRIAL_ROLES.includes(item.role);
              const lineTotal = item.count * item.unitPrice;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="grid grid-cols-12 gap-3 items-center bg-white p-4 border border-cream-dark"
                >
                  {/* Role */}
                  <div className="col-span-12 sm:col-span-4">
                    <label className="font-montserrat text-xs text-gray-500 uppercase tracking-wide block mb-1">
                      Role
                    </label>
                    <select
                      value={item.role}
                      onChange={(e) => updateItem(i, "role", e.target.value)}
                      className="w-full border border-cream-dark bg-white font-montserrat text-sm text-gray-700 p-2 focus:outline-none focus:border-gold"
                    >
                      <optgroup label="Bridal">
                        <option value="Bride">Bride</option>
                        <option value="Bridesmaid / Mother">
                          Bridesmaid / Mother
                        </option>
                        <option value="Flower Girl (8 & under)">
                          Flower Girl (8 &amp; under)
                        </option>
                      </optgroup>
                      <optgroup label="Prom &amp; Events">
                        <option value="Event / Prom Individual">
                          Event / Prom Individual
                        </option>
                      </optgroup>
                      <optgroup label="Trials">
                        <option value="Trial — Hair Only">
                          Trial — Hair Only ($115)
                        </option>
                        <option value="Trial — Makeup Only">
                          Trial — Makeup Only ($115)
                        </option>
                        <option value="Trial — Hair & Makeup">
                          Trial — Hair &amp; Makeup ($220)
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Service */}
                  <div className="col-span-6 sm:col-span-3">
                    <label className="font-montserrat text-xs text-gray-500 uppercase tracking-wide block mb-1">
                      Service
                    </label>
                    {isTrial ? (
                      <div className="w-full border border-cream-dark bg-cream font-montserrat text-sm text-gray-500 p-2 cursor-not-allowed">
                        {TRIAL_FIXED_SERVICE[item.role] === "both"
                          ? "Hair & Makeup"
                          : TRIAL_FIXED_SERVICE[item.role] === "hair"
                          ? "Hair"
                          : "Makeup"}
                      </div>
                    ) : (
                      <select
                        value={item.service}
                        onChange={(e) =>
                          updateItem(
                            i,
                            "service",
                            e.target.value as ServiceType
                          )
                        }
                        className="w-full border border-cream-dark bg-white font-montserrat text-sm text-gray-700 p-2 focus:outline-none focus:border-gold"
                      >
                        <option value="hair">Hair (${ 
                          ROLES.find(r => r.role === item.role)?.price.hair ?? 0
                        })</option>
                        <option value="makeup">Makeup (${
                          ROLES.find(r => r.role === item.role)?.price.makeup ?? 0
                        })</option>
                        <option value="both">Hair &amp; Makeup (${
                          ROLES.find(r => r.role === item.role)?.price.both ?? 0
                        })</option>
                      </select>
                    )}
                  </div>

                  {/* Count */}
                  <div className="col-span-4 sm:col-span-2">
                    <label className="font-montserrat text-xs text-gray-500 uppercase tracking-wide block mb-1">
                      Count
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateItem(i, "count", Math.max(1, item.count - 1))
                        }
                        className="w-7 h-7 border border-cream-dark flex items-center justify-center hover:bg-cream transition-colors"
                        aria-label="Decrease count"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-montserrat text-sm font-medium w-6 text-center">
                        {item.count}
                      </span>
                      <button
                        onClick={() => updateItem(i, "count", item.count + 1)}
                        className="w-7 h-7 border border-cream-dark flex items-center justify-center hover:bg-cream transition-colors"
                        aria-label="Increase count"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Unit price + subtotal */}
                  <div className="col-span-6 sm:col-span-2 text-right">
                    <label className="font-montserrat text-xs text-gray-500 uppercase tracking-wide block mb-1">
                      Subtotal
                    </label>
                    <span className="font-cormorant text-2xl font-bold text-brown">
                      ${formatCurrency(lineTotal)}
                    </span>
                    {item.count > 1 && (
                      <span className="font-montserrat text-xs text-gray-400 block">
                        ${formatCurrency(item.unitPrice)} ea.
                      </span>
                    )}
                  </div>

                  {/* Remove */}
                  <div className="col-span-6 sm:col-span-1 flex justify-end">
                    {items.length > 1 && (
                      <button
                        onClick={() => removeItem(i)}
                        className="w-7 h-7 text-gray-400 hover:text-red-400 transition-colors flex items-center justify-center text-lg"
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={addItem}
            className="flex items-center gap-2 font-montserrat text-sm font-semibold text-brown border border-brown/40 hover:border-gold hover:text-gold transition-colors px-4 py-2 mb-8"
          >
            <Plus size={16} />
            Add Another Person
          </button>

          {/* Price reference */}
          <div className="bg-white border border-cream-dark p-4 mb-6">
            <p className="font-montserrat text-xs text-gray-500 uppercase tracking-wide mb-3">
              Price Reference
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-montserrat text-gray-600">
              <div>
                <span className="font-semibold text-gray-800 block mb-1">Bride</span>
                <span className="block">Hair: $250</span>
                <span className="block">Makeup: $250</span>
                <span className="block">Both: $500</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800 block mb-1">
                  Bridesmaid / Mother
                </span>
                <span className="block">Hair: $175</span>
                <span className="block">Makeup: $175</span>
                <span className="block">Both: $350</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800 block mb-1">
                  Flower Girl
                </span>
                <span className="block">Hair: $100</span>
                <span className="block">Makeup: $100</span>
                <span className="block">Both: $200</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800 block mb-1">
                  Trial
                </span>
                <span className="block">Hair Only: $115</span>
                <span className="block">Makeup Only: $115</span>
                <span className="block">Both: $220</span>
              </div>
            </div>
          </div>

          {/* Travel */}
          <div className="border-t border-cream-dark pt-6 mb-6">
            <label className="font-montserrat text-sm font-medium text-gray-700 block mb-1">
              Event distance from Rocklin (miles one-way)
            </label>
            <p className="font-montserrat text-xs text-gray-500 mb-2">
              Travel within 30 miles is included. Beyond 30 miles: $2/mile round trip ($4/mile one-way).
            </p>
            <input
              type="number"
              min={0}
              value={travelMiles === 0 ? "" : travelMiles}
              placeholder="0"
              onChange={(e) => {
                const val = e.target.value === "" ? 0 : Math.max(0, Number(e.target.value));
                setTravelMiles(val);
              }}
              className="border border-cream-dark bg-white font-montserrat text-sm p-2 w-32 focus:outline-none focus:border-gold"
            />
            {travelMiles > 0 && travelMiles <= 30 && (
              <p className="font-montserrat text-xs text-green-600 mt-1">
                ✓ Within 30 miles — no travel fee
              </p>
            )}
            {travelMiles > 30 && (
              <p className="font-montserrat text-xs text-brown mt-1">
                Travel fee: {travelMiles} miles × $2 × 2 (round trip) = ${formatCurrency(travelCost)}
              </p>
            )}
          </div>

          {/* Totals */}
          <div className="border-t border-cream-dark pt-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-montserrat text-sm text-gray-600">
                Services Total ({totalPeople} person{totalPeople !== 1 ? "s" : ""})
              </span>
              <span className="font-cormorant text-2xl text-gray-900">
                ${formatCurrency(servicesTotal)}
              </span>
            </div>
            {travelCost > 0 && (
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-sm text-gray-600">
                  Travel Fee
                </span>
                <span className="font-cormorant text-2xl text-gray-900">
                  ${formatCurrency(travelCost)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center border-t border-cream-dark pt-4">
              <span className="font-montserrat text-sm font-semibold text-gray-900">
                Estimated Total
              </span>
              <span className="font-cormorant text-3xl font-bold text-brown">
                ${formatCurrency(total)}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-montserrat text-gray-500">
                Retainer to secure date — applies toward your total
              </span>
              <span className="font-montserrat text-gray-500 ml-4 shrink-0">$100</span>
            </div>

            {/* Validation warnings */}
            {hasWeddingRoles && weddingPeopleCount < 4 && (
              <div className="bg-gold/10 border border-gold/30 p-3 mt-4">
                <p className="font-montserrat text-xs text-brown">
                  ⚠️ Weddings require a minimum of 4 services to book. You currently have {weddingPeopleCount} wedding party member{weddingPeopleCount !== 1 ? "s" : ""}.
                </p>
              </div>
            )}

            <div className="bg-cream border border-cream-dark p-3 mt-2">
              <p className="font-montserrat text-xs text-gray-500 italic">
                This is an estimate only. Final pricing will be confirmed after your inquiry is reviewed. Prices do not include the $100 retainer, day-of additions ($50/service), overtime fees ($50/hr), or assistant fees ($150 for large parties).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}