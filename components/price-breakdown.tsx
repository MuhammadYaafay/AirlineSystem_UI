import { Separator } from "@/components/ui/separator"

interface PriceBreakdownProps {
  baseFare: number
  taxes: number
  fees: number
  passengers: number
  extras?: { name: string; price: number }[]
}

export default function PriceBreakdown({ baseFare, taxes, fees, passengers, extras = [] }: PriceBreakdownProps) {
  const totalBaseFare = baseFare * passengers
  const totalTaxes = taxes * passengers
  const totalFees = fees * passengers
  const totalExtras = extras.reduce((sum, item) => sum + item.price, 0)
  const grandTotal = totalBaseFare + totalTaxes + totalFees + totalExtras

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Base fare ({passengers} passenger{passengers > 1 ? "s" : ""})
          </span>
          <span>${totalBaseFare.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Taxes</span>
          <span>${totalTaxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Fees</span>
          <span>${totalFees.toFixed(2)}</span>
        </div>

        {extras.length > 0 && (
          <>
            <Separator />
            {extras.map((extra, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-muted-foreground">{extra.name}</span>
                <span>${extra.price.toFixed(2)}</span>
              </div>
            ))}
          </>
        )}
      </div>

      <Separator />

      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      <div className="text-xs text-muted-foreground">All prices are in USD. Additional baggage fees may apply.</div>
    </div>
  )
}

