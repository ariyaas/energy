import { useState } from "react"
import homeIcon from "../../assets/icons/home-white.svg"

function SavingsCalculatorBox() {
  const UNIT_RATE = 10
  const UNITS_PER_KW_MONTH = 120
  const BILLS_PER_YEAR = 6
  const YEARS = 25

  const [kw, setKw] = useState("")
  const [units, setUnits] = useState("")
  const [bill, setBill] = useState("")

  const handleKwChange = (value) => {
    setKw(value)
    if (!value) return
    const unitsPerBill = value * UNITS_PER_KW_MONTH * 2
    const monthlyBill = (unitsPerBill / 2) * UNIT_RATE
    setUnits(Math.round(unitsPerBill))
    setBill(Math.round(monthlyBill))
  }

  const handleUnitsChange = (value) => {
    setUnits(value)
    if (!value) return
    const calculatedKw = value / (UNITS_PER_KW_MONTH * 2)
    const monthlyBill = (value / 2) * UNIT_RATE
    setKw(calculatedKw.toFixed(1))
    setBill(Math.round(monthlyBill))
  }

  const handleBillChange = (value) => {
    setBill(value)
    if (!value) return
    const monthlyUnits = value / UNIT_RATE
    const unitsPerBill = monthlyUnits * 2
    const calculatedKw = monthlyUnits / UNITS_PER_KW_MONTH
    setUnits(Math.round(unitsPerBill))
    setKw(calculatedKw.toFixed(1))
  }

  const savingPerBill = units ? units * UNIT_RATE : 0
  const saving25Years = savingPerBill * BILLS_PER_YEAR * YEARS

  return (
    <div className="mb-14">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-[26px] md:text-[36px] font-bold text-[#0B1F33]">
          Calculate Your Solar Savings
        </h2>

        {/* CHANGED TO GREEN */}
        <div className="mt-2 h-[3px] w-[260px] bg-[#84cc16] mx-auto" />

        <p className="mt-3 text-[15px] text-gray-500">
          Enter any one value — others update automatically
        </p>
      </div>

      {/* BOX */}
      <div className="max-w-5xl mx-auto border border-[#E1E7EE] rounded-2xl p-6 md:p-8 bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* INPUTS */}
          <div className="space-y-5">
            <div>
              <label className="text-[12px] uppercase text-gray-500">
                Solar System Size (kW)
              </label>
              <div className="flex items-center gap-2 mt-1">
                <img src={homeIcon} className="w-5 h-5" />
                <input
                  type="number"
                  value={kw}
                  onChange={(e)=>handleKwChange(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#84cc16]"
                  placeholder="e.g. 5"
                />
              </div>
            </div>

            <div>
              <label className="text-[12px] uppercase text-gray-500">
                Units Generated per Bill
              </label>
              <input
                type="number"
                value={units}
                onChange={(e)=>handleUnitsChange(e.target.value)}
                className="mt-1 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#84cc16]"
                placeholder="e.g. 1200"
              />
            </div>

            <div>
              <label className="text-[12px] uppercase text-gray-500">
                Monthly Approx EB Bill (₹)
              </label>
              <input
                type="number"
                value={bill}
                onChange={(e)=>handleBillChange(e.target.value)}
                className="mt-1 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#84cc16]"
                placeholder="e.g. 3000"
              />
            </div>
          </div>

          {/* OUTPUT */}
          <div className="flex flex-col justify-center gap-5">

            {/* PER BILL */}
            <div className="bg-[#F0FDF4] rounded-xl p-5">
              <p className="text-[11px] uppercase text-gray-500">
                Approx. savings per bill
              </p>
              <p className="text-[30px] font-bold text-[#16A34A]">
                ₹{savingPerBill.toLocaleString()}
              </p>
            </div>

            {/* 25 YEARS – CHANGED TO GREEN */}
            <div className="bg-[#ECFDF5] rounded-xl p-5">
              <p className="text-[11px] uppercase text-gray-500">
                25-year total savings
              </p>
              <p className="text-[30px] font-bold text-[#15803D]">
                ₹{saving25Years.toLocaleString()}
              </p>
            </div>

          </div>
        </div>

        <p className="mt-6 text-center text-[16px] text-gray-500">
          * Savings shown are approximate and for illustration purposes.
        </p>

      </div>
    </div>
  )
}

export default SavingsCalculatorBox