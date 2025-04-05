"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SeatMap() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>(["14A", "14B"])

  const toggleSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else {
      if (selectedSeats.length < 2) {
        setSelectedSeats([...selectedSeats, seatId])
      }
    }
  }

  const isSeatSelected = (seatId: string) => selectedSeats.includes(seatId)

  const renderSeat = (seatId: string, type: "standard" | "premium" | "extra-legroom" | "occupied" = "standard") => {
    const isSelected = isSeatSelected(seatId)

    let bgColor = "bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
    let hoverClass = "hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"

    if (isSelected) {
      bgColor = "bg-primary border-primary/70 text-primary-foreground"
      hoverClass = "hover:bg-primary/90 cursor-pointer"
    } else if (type === "occupied") {
      bgColor = "bg-gray-500 border-gray-600 dark:bg-gray-600 dark:border-gray-700"
      hoverClass = "cursor-not-allowed"
    } else if (type === "premium") {
      bgColor = "bg-amber-200 border-amber-300 dark:bg-amber-900/40 dark:border-amber-800/60"
      hoverClass = "hover:bg-amber-300 dark:hover:bg-amber-900/60 cursor-pointer"
    } else if (type === "extra-legroom") {
      bgColor = "bg-blue-200 border-blue-300 dark:bg-blue-900/40 dark:border-blue-800/60"
      hoverClass = "hover:bg-blue-300 dark:hover:bg-blue-900/60 cursor-pointer"
    }

    return (
      <button
        className={`w-8 h-8 ${bgColor} border rounded flex items-center justify-center text-xs font-medium ${type !== "occupied" ? hoverClass : ""}`}
        onClick={() => type !== "occupied" && toggleSeat(seatId)}
        disabled={type === "occupied"}
      >
        {seatId.replace(/[0-9]/g, "")}
      </button>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="outbound">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="outbound">Outbound Flight</TabsTrigger>
          <TabsTrigger value="return">Return Flight</TabsTrigger>
        </TabsList>
        <TabsContent value="outbound" className="pt-4">
          <div className="flex flex-col items-center">
            {/* Plane Nose */}
            <div className="w-24 h-12 border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t-full mb-4"></div>

            {/* Cabin */}
            <div className="relative bg-muted p-6 rounded-lg w-full max-w-md">
              {/* Extra Legroom Rows */}
              <div className="mb-6">
                <div className="text-xs font-medium text-center mb-2 text-blue-600 dark:text-blue-400">
                  Extra Legroom Seats
                </div>
                <div className="grid grid-cols-7 gap-2 mb-2">
                  <div className="text-xs font-medium text-center">1</div>
                  <div>{renderSeat("1A", "extra-legroom")}</div>
                  <div>{renderSeat("1B", "extra-legroom")}</div>
                  <div className="w-8"></div>
                  <div>{renderSeat("1C", "extra-legroom")}</div>
                  <div>{renderSeat("1D", "extra-legroom")}</div>
                  <div>{renderSeat("1E", "extra-legroom")}</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  <div className="text-xs font-medium text-center">2</div>
                  <div>{renderSeat("2A", "extra-legroom")}</div>
                  <div>{renderSeat("2B", "occupied")}</div>
                  <div className="w-8"></div>
                  <div>{renderSeat("2C", "extra-legroom")}</div>
                  <div>{renderSeat("2D", "occupied")}</div>
                  <div>{renderSeat("2E", "extra-legroom")}</div>
                </div>
              </div>

              {/* Premium Rows */}
              <div className="mb-6">
                <div className="text-xs font-medium text-center mb-2 text-amber-600 dark:text-amber-400">
                  Premium Seats
                </div>
                {[10, 11, 12, 13, 14].map((row) => (
                  <div key={row} className="grid grid-cols-7 gap-2 mb-2">
                    <div className="text-xs font-medium text-center">{row}</div>
                    <div>{renderSeat(`${row}A`, row === 14 ? "premium" : row % 3 === 0 ? "occupied" : "premium")}</div>
                    <div>{renderSeat(`${row}B`, row === 14 ? "premium" : row % 2 === 0 ? "occupied" : "premium")}</div>
                    <div className="w-8"></div>
                    <div>{renderSeat(`${row}C`, row % 4 === 0 ? "occupied" : "premium")}</div>
                    <div>{renderSeat(`${row}D`, row % 5 === 0 ? "occupied" : "premium")}</div>
                    <div>{renderSeat(`${row}E`, row % 3 === 1 ? "occupied" : "premium")}</div>
                  </div>
                ))}
              </div>

              {/* Standard Rows */}
              <div>
                <div className="text-xs font-medium text-center mb-2">Standard Seats</div>
                {[20, 21, 22, 23, 24, 25].map((row) => (
                  <div key={row} className="grid grid-cols-7 gap-2 mb-2">
                    <div className="text-xs font-medium text-center">{row}</div>
                    <div>{renderSeat(`${row}A`, row % 4 === 0 ? "occupied" : "standard")}</div>
                    <div>{renderSeat(`${row}B`, row % 3 === 0 ? "occupied" : "standard")}</div>
                    <div className="w-8"></div>
                    <div>{renderSeat(`${row}C`, row % 5 === 0 ? "occupied" : "standard")}</div>
                    <div>{renderSeat(`${row}D`, row % 2 === 0 ? "occupied" : "standard")}</div>
                    <div>{renderSeat(`${row}E`, row % 3 === 2 ? "occupied" : "standard")}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="return" className="pt-4">
          <div className="text-center p-8 text-muted-foreground">
            Return flight seat selection will be available after confirming outbound seats.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

