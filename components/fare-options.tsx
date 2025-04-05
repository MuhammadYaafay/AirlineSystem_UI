"use client"
import { Check, X } from "lucide-react"
import { useState } from "react"

export default function FareOptions() {
  const [selectedFare, setSelectedFare] = useState<string>("standard")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          selectedFare === "economy" ? "border-primary bg-primary/5 dark:bg-primary/10" : ""
        }`}
        onClick={() => setSelectedFare("economy")}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium">Economy Light</h3>
            <p className="text-sm text-muted-foreground">Basic fare</p>
          </div>
          <div className="text-lg font-bold">$649</div>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>Carry-on bag included</span>
          </li>
          <li className="flex items-center gap-2">
            <X className="h-4 w-4 text-destructive" />
            <span className="text-muted-foreground">No checked baggage</span>
          </li>
          <li className="flex items-center gap-2">
            <X className="h-4 w-4 text-destructive" />
            <span className="text-muted-foreground">No seat selection</span>
          </li>
          <li className="flex items-center gap-2">
            <X className="h-4 w-4 text-destructive" />
            <span className="text-muted-foreground">No changes or refunds</span>
          </li>
        </ul>
      </div>

      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          selectedFare === "standard" ? "border-primary bg-primary/5 dark:bg-primary/10" : ""
        }`}
        onClick={() => setSelectedFare("standard")}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium">Economy Standard</h3>
            <p className="text-sm text-muted-foreground">Recommended</p>
          </div>
          <div className="text-lg font-bold">$749</div>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>Carry-on bag included</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>1 checked bag (23kg)</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>Standard seat selection</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>Changes for a fee</span>
          </li>
        </ul>
      </div>

      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          selectedFare === "flex" ? "border-primary bg-primary/5 dark:bg-primary/10" : ""
        }`}
        onClick={() => setSelectedFare("flex")}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium">Economy Flex</h3>
            <p className="text-sm text-muted-foreground">Maximum flexibility</p>
          </div>
          <div className="text-lg font-bold">$899</div>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>Carry-on bag included</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>2 checked bags (23kg each)</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>Premium seat selection</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>Free changes and refunds</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

