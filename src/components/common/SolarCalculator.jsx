


// import { useState, useEffect } from "react";
// import { Mail, MessageCircle } from "lucide-react";

// export default function SolarCalculator() {
//   const [category, setCategory] = useState("domestic");
//   const [kw, setKw] = useState("");
//   const [rate, setRate] = useState("");
//   const [importUnits, setImportUnits] = useState("");
//   const [exportUnits, setExportUnits] = useState("");
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     setRate(11.8);
//   }, []);

//   const calculate = () => {
//     if (!importUnits || Number(importUnits) <= 0) {
//       alert("Please enter valid consumption units");
//       return;
//     }

//     let IMPORT = Number(importUnits);
//     let EXPORT = Number(exportUnits);

//     const NETWORK_RATE = 1.69;
//     const EXPORT_RATE =  3.37;

//     // ✅ Auto calculate export (NO setState here)
//     if (kw && !exportUnits) {
//       EXPORT = Number(kw) * 120;
//     }

//     const userRate =
//       Number(rate) ||
//       (category === "commercial"
//         ? 8.8
//         : category === "industrial"
//         ? 7.5
//         : 11.8);

//     // ---------------- DOMESTIC / RELIGIOUS ----------------
//     if (category === "domestic" || category === "religious") {
//       const netUnits = Math.max(IMPORT - EXPORT, 0);
//       const balanceUnits = Math.max(EXPORT - IMPORT, 0);

//       let energy = 0;

//       if (category === "domestic") {
//         if (netUnits > 100) {
//           energy = (netUnits - 100) * userRate;
//         }
//       }

//       if (category === "religious") {
//         if (netUnits <= 120) {
//           energy = netUnits * 2.9;
//         } else {
//           energy = 120 * 2.9 + (netUnits - 120) * 7.15;
//         }
//       }

//       const network = IMPORT * NETWORK_RATE;
//       const total = energy + network;

//       const withoutSolar = IMPORT * userRate;
//       const savings = Math.max(withoutSolar - total, 0);
//       const yearly = savings * 12;
//       const lifetime = yearly * 25;

//       setResult({
//         type: "net-metering",
//         netUnits,
//         balanceUnits,
//         energy,
//         network,
//         total,
//         savings,
//         yearly,
//         lifetime,
//       });
//     }

//     // ---------------- COMMERCIAL / INDUSTRIAL ----------------
//     else {
//       const importRate =
//         Number(rate) ||
//         (category === "commercial" ? 8.8 : 7.5);

//       const importValue = IMPORT * importRate;
//       const exportValue = EXPORT * EXPORT_RATE;
//       const network = IMPORT * NETWORK_RATE;

//       const total = Math.max(
//         importValue - exportValue + network,
//         0
//       );

//       const withoutSolar = IMPORT * importRate;
//      const savings = Math.max(withoutSolar - total, 0);
// const yearly = savings * 12;
// const lifetime = yearly * 25;

//      setResult({
//   type: "net-billing",
//   importValue,
//   exportValue,
//   network,
//   total,
//   savings,
//   yearly,
//   lifetime,
// });
//     }
//   };

//   return (
//   <div className="max-w-5xl mx-auto mt-10 md:mt-16 px-4">
//   <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg">
// <div className="text-center mb-8">

//   <h2 className="text-2xl md:text-3xl font-bold leading-tight">
//   Solar Savings <span className="text-[#67ab19]">Calculator</span>
// </h2>

// <h1 className="text-lg md:text-xl font-semibold mt-2">
//   <span className="text-gray-800">Powered by </span>
//   <span className="text-[#67ab19]">Seapol Energy</span>
// </h1>

//   <p className="text-sm text-gray-500 mt-2">
//     Calculate your electricity savings with solar power
//   </p>

// </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

//         <div>
//           <label className="text-sm text-gray-500">
//             Consumer Category
//           </label>

//           <select
//             value={category}
//             onChange={(e) => {
//               const value = e.target.value;
//               setCategory(value);

//               if (value === "domestic") setRate(11.8);
//               if (value === "commercial") setRate(8.8);
//               if (value === "industrial") setRate(7.5);
//               if (value === "religious") setRate(""); // ✅ FIX
//             }}
//             className="w-full mt-1 border rounded-lg p-3"
//           >
//             <option value="domestic">Domestic (Home)</option>
//             <option value="commercial">Commercial (LT)</option>
//             <option value="industrial">Industrial (HT)</option>
//             <option value="religious">Religious</option>
//           </select>
//         </div>

//         <div>
//           <label className="text-sm text-gray-500">
//             Billing Mechanism
//           </label>
//           <input
//             value={
//               category === "domestic" || category === "religious"
//                 ? "Net Metering"
//                 : "Net Billing"
//             }
//             disabled
//            className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-500">
//             Solar Plant Capacity (kW)
//           </label>
//           <input
//             type="number"
//             value={kw}
//             onChange={(e) => setKw(e.target.value)}
//             placeholder="e.g. 5"
//             className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-500">
//             Unit Rate / Tariff (₹)
//           </label>
//           <input
//             type="number"
//             value={
//   category === "religious"
//     ? "₹2.9 / ₹7.15 (Fixed)"
//     : rate
// }
//             onChange={(e) => setRate(e.target.value)}
//             disabled={category === "religious"}
//             className={`w-full mt-1 border rounded-lg p-3 ${
//               category === "religious"
//                 ? "bg-gray-100 cursor-not-allowed"
//                 : ""
//             }`}
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-500">
//             Total Consumption (Import Units)
//           </label>
//           <input
//             type="number"
//             value={importUnits}
//             onChange={(e) => setImportUnits(e.target.value)}
//             placeholder="e.g. 600"
//             className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-500">
//             Solar Generated (Export Units)
//           </label>
//           <input
//             type="number"
//             value={exportUnits}
//             onChange={(e) => setExportUnits(e.target.value)}
//             placeholder="e.g. 400"
//           className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
//           />
//         </div>

//       </div>

//       <button
//         onClick={calculate}
//       className="w-full mt-6 md:mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-sm md:text-base"
//       >
//         Calculate Bill
//       </button>

//       {result && (
//         <div className="mt-8 bg-gray-50 rounded-xl p-5 md:p-6 shadow-sm border">

//           <h3 className="text-lg font-bold mb-4 text-center">
//             Bill Breakdown Details
//           </h3>

//           {result.type === "net-metering" && (
//             <div className="space-y-3">

//               <div className="flex justify-between">
//                 <span>Total Consumption</span>
//                 <span>{importUnits} Units</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Solar Generation</span>
//                 <span>{exportUnits || (kw ? kw * 120 : 0)} Units</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Net Units</span>
//                 <span>{result.netUnits}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Energy Charges</span>
//                 <span>₹ {result.energy.toFixed(0)}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Network Charges</span>
//                 <span>₹ {result.network.toFixed(0)}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Balance Units</span>
//                 <span>{result.balanceUnits}</span>
//               </div>

//               <div className="flex justify-between text-green-600 font-semibold">
//                 <span>Total Savings</span>
//                 <span>₹ {result.savings.toFixed(0)}</span>
//               </div>

//               <div className="flex justify-between bg-blue-100 p-3 rounded-lg font-bold">
//                 <span>Net Payable</span>
//                 <span>₹ {result.total.toFixed(0)}</span>
//               </div>
//          <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 p-4 md:p-5 rounded-xl text-center border border-green-200">

//   <p className="text-sm md:text-lg font-semibold text-green-700">
//     You Save ₹{(result.savings || 0).toFixed(0)} / month
//   </p>

//   <p className="text-sm md:text-lg font-semibold text-green-700  mt-2">
//     ₹{(result.yearly || 0).toFixed(0)} per year
//   </p>

//   <p className="text-base md:text-xl font-bold text-green-800 mt-2">
//     ₹{(result.lifetime || 0).toFixed(0)} in 25 years
//   </p>

// </div>

//             </div>
//           )}

//           {result.type === "net-billing" && (
//             <div className="space-y-3">

//               <div className="flex justify-between">
//                 <span>Import Value</span>
//                 <span>₹ {result.importValue.toFixed(0)}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Export Credit</span>
//                 <span>₹ {result.exportValue.toFixed(0)}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Network Charges</span>
//                 <span>₹ {result.network.toFixed(0)}</span>
//               </div>

//               <div className="flex justify-between text-green-600 font-semibold">
//                 <span>Total Savings</span>
//                 <span>₹ {result.savings.toFixed(0)}</span>
//               </div>

//               <div className="flex justify-between bg-blue-100 p-3 rounded-lg font-bold">
                
//                 <span>Net Payable</span>
//                 <span>₹ {result.total.toFixed(0)}</span>
                
//               </div>
              
// {/* ✅ NOW OUTSIDE */}
// <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 p-4 md:p-5 rounded-xl text-center border border-green-200">

//   <p className="text-sm md:text-lg font-semibold text-green-700">
//     You Save ₹{(result.savings || 0).toFixed(0)} / month
//   </p>

//   <p className="text-sm md:text-lg font-semibold text-green-700 mt-2">
//     ₹{(result.yearly || 0).toFixed(0)} per year
//   </p>

//   <p className="text-base md:text-xl font-bold text-green-800 mt-2">
//     ₹{(result.lifetime || 0).toFixed(0)} in 25 years
//   </p>
  

// </div>



//             </div>
            
            
//           )}

          
          

//         </div>
//       )}
      

//    <div className="mt-6 flex flex-col gap-2 text-xs md:text-sm">

// <a
//   href="mailto:enqenergy@seapol.com"
//   className="text-[#67ab19] font-semibold flex items-center gap-2 justify-center md:justify-start transition-all duration-200 hover:text-black hover:scale-105"
// >
//   <Mail size={16} />
//   <span>enqenergy@seapol.com</span>
// </a>

//   <a
//     href="https://wa.me/919500699955"
//     target="_blank"
//     className="text-[#67ab19] font-semibold flex items-center gap-2 justify-center md:justify-start transition-all duration-200 hover:text-black hover:scale-105"
//   >
//     <MessageCircle size={16} />
//     <span>+91 95006 99955</span>
//   </a>

// </div>
//     </div>
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import { Mail, MessageCircle } from "lucide-react";
import solarImg from "../../assets/solar-investment.png";


export default function SolarCalculator() {
  const [category, setCategory] = useState("domestic");
  const [kw, setKw] = useState("");
  const [rate, setRate] = useState("");
  const [importUnits, setImportUnits] = useState("");
  const [exportUnits, setExportUnits] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    setRate(11.8);
  }, []);

  const calculate = () => {
    if (!importUnits || Number(importUnits) <= 0) {
      alert("Please enter valid consumption units");
      return;
    }

    let IMPORT = Number(importUnits);
    let EXPORT = Number(exportUnits);

    const systemCost = Number(kw || 0) * 60000;

    const NETWORK_RATE = 1.69;
    const EXPORT_RATE =  3.37;

    // ✅ Auto calculate export (NO setState here)
    if (kw && !exportUnits) {
      EXPORT = Number(kw) * 120;
    }

    const userRate =
      Number(rate) ||
      (category === "commercial"
        ? 8.8
        : category === "industrial"
        ? 7.5
        : 11.8);

    // ---------------- DOMESTIC / RELIGIOUS ----------------
    if (category === "domestic" || category === "religious") {
      const netUnits = Math.max(IMPORT - EXPORT, 0);
      const balanceUnits = Math.max(EXPORT - IMPORT, 0);

      let energy = 0;

      if (category === "domestic") {
        if (netUnits > 100) {
          energy = (netUnits - 100) * userRate;
        }
      }

      if (category === "religious") {
        if (netUnits <= 120) {
          energy = netUnits * 2.9;
        } else {
          energy = 120 * 2.9 + (netUnits - 120) * 7.15;
        }
      }

      const network = IMPORT * NETWORK_RATE;
      const total = energy + network;

      const withoutSolar = IMPORT * userRate;
      const savings = Math.max(withoutSolar - total, 0);
      const yearly = savings * 12;
      const lifetime = yearly * 25;

      setResult({
        type: "net-metering",
        netUnits,
        balanceUnits,
        energy,
        network,
        total,
        savings,
        yearly,
        lifetime,
        systemCost,
      });
    }

    // ---------------- COMMERCIAL / INDUSTRIAL ----------------
    else {
      const importRate =
        Number(rate) ||
        (category === "commercial" ? 8.8 : 7.5);

      const importValue = IMPORT * importRate;
      const exportValue = EXPORT * EXPORT_RATE;
      const network = IMPORT * NETWORK_RATE;

      const total = Math.max(
        importValue - exportValue + network,
        0
      );

      const withoutSolar = IMPORT * importRate;
     const savings = Math.max(withoutSolar - total, 0);
const yearly = savings * 12;
const lifetime = yearly * 25;

     setResult({
  type: "net-billing",
  importValue,
  exportValue,
  network,
  total,
  savings,
  yearly,
  lifetime,
  systemCost,
});
    }
  };

  return (
  <div className="max-w-5xl mx-auto mt-10 md:mt-16 px-4">
  <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg">
<div className="text-center mb-8">

  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
  Solar Savings <span className="text-brandPrimary">Calculator</span>
</h2>

<h1 className="text-lg md:text-xl font-semibold mt-2">
  <span className="text-gray-800">Powered by </span>
  <span className="text-brandPrimary">Seapol Energy</span>
</h1>

  <p className="text-sm text-gray-500 mt-2">
    Calculate your electricity savings with solar power
  </p>

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        <div>
          <label className="text-sm text-gray-500">
            Consumer Category
          </label>

          <select
            value={category}
            onChange={(e) => {
              const value = e.target.value;
              setCategory(value);

              if (value === "domestic") setRate(11.8);
              if (value === "commercial") setRate(8.8);
              if (value === "industrial") setRate(7.5);
              if (value === "religious") setRate(""); // ✅ FIX
            }}
            className="w-full mt-1 border rounded-lg p-3"
          >
            <option value="domestic">Domestic (Home)</option>
            <option value="commercial">Commercial (LT)</option>
            <option value="industrial">Industrial (HT)</option>
            <option value="religious">Religious(Site)</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Billing Mechanism
          </label>
          <input
            value={
              category === "domestic" || category === "religious"
                ? "Net Metering"
                : "Net Billing"
            }
            disabled
           className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Solar Plant Capacity (kW)
          </label>
          <input
            type="number"
            value={kw}
            onChange={(e) => setKw(e.target.value)}
            placeholder="e.g. 5"
            className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Unit Rate / Tariff (₹)
          </label>
          <input
            type="number"
            value={
  category === "religious"
    ? "₹2.9 / ₹7.15 (Fixed)"
    : rate
}
            onChange={(e) => setRate(e.target.value)}
            disabled={category === "religious"}
            className={`w-full mt-1 border rounded-lg p-3 ${
              category === "religious"
                ? "bg-gray-100 cursor-not-allowed"
                : ""
            }`}
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Total Consumption (Import Units)
          </label>
          <input
            type="number"
            value={importUnits}
            onChange={(e) => setImportUnits(e.target.value)}
            placeholder="e.g. 600"
            className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Solar Generated (Export Units)
          </label>
          <input
            type="number"
            value={exportUnits}
            onChange={(e) => setExportUnits(e.target.value)}
            placeholder="e.g. 400"
          className="w-full mt-1 border rounded-lg p-3 text-sm md:text-base"
          />
        </div>

      </div>

      <button
  onClick={calculate}
  className="w-full mt-6 md:mt-8 bg-brandPrimary text-white py-3 rounded-xl 
  font-semibold text-sm md:text-base 
  hover:bg-blue-800 hover:scale-[1.03] transition duration-300 
  shadow-lg hover:shadow-xl"
>
  Calculate Bill →
</button>

      {result && (
        <div className="mt-8 bg-gray-50 rounded-xl p-5 md:p-6 shadow-sm border">

          <h3 className="text-lg font-bold mb-4 text-center">
            Bill Breakdown Details
          </h3>

          {result.type === "net-metering" && (
            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Total Consumption</span>
                <span>{importUnits} Units</span>
              </div>

              <div className="flex justify-between">
                <span>Solar Generation</span>
                <span>{exportUnits || (kw ? kw * 120 : 0)} Units</span>
              </div>

              <div className="flex justify-between">
                <span>Net Units</span>
                <span>{result.netUnits}</span>
              </div>

              <div className="flex justify-between">
                <span>Energy Charges</span>
                <span>₹ {result.energy.toFixed(0)}</span>
              </div>

              <div className="flex justify-between">
                <span>Network Charges</span>
                <span>₹ {result.network.toFixed(0)}</span>
              </div>

              <div className="flex justify-between">
                <span>Balance Units</span>
                <span>{result.balanceUnits}</span>
              </div>

              <div className="flex justify-between text-brandPrimary font-semibold">
                <span>Total Savings</span>
                <span>₹ {result.savings.toFixed(0)}</span>
              </div>

              <div className="flex justify-between bg-blue-100 p-3 rounded-lg font-bold">
                <span>Net Payable</span>
                <span>₹ {result.total.toFixed(0)}</span>
              </div>
         <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 p-4 md:p-5 rounded-xl text-center border border-green-200">

  <p className="text-sm md:text-lg font-semibold text-brandPrimary">
    You Save ₹{(result.savings || 0).toFixed(0)} / per EB bill 
  </p>

  <p className="text-sm md:text-lg font-semibold text-brandPrimary  mt-2">
    ₹{(result.yearly || 0).toFixed(0)} per year
  </p>

  <p className="text-base md:text-xl font-bold text-brandPrimary mt-2">
    ₹{(result.lifetime || 0).toFixed(0)} in 25 years
  </p>

</div>

<div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-5 rounded-xl text-center shadow-sm">

  <p className="text-sm md:text-base text-gray-600 font-medium">
    Estimated Solar System Cost
  </p>

  <p className="text-xl md:text-2xl font-extrabold text-blue-700 mt-2 tracking-wide">
    ₹ {result.systemCost?.toFixed(0)}
  </p>

  <p className="text-xs text-gray-500 mt-1">
    Based on ₹60,000 per kW
  </p>

</div>

            </div>
          )}

          {result.type === "net-billing" && (
            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Import Value</span>
                <span>₹ {result.importValue.toFixed(0)}</span>
              </div>

              <div className="flex justify-between">
                <span>Export Credit</span>
                <span>₹ {result.exportValue.toFixed(0)}</span>
              </div>

              <div className="flex justify-between">
                <span>Network Charges</span>
                <span>₹ {result.network.toFixed(0)}</span>
              </div>

              <div className="flex justify-between text-brandPrimary font-semibold">
                <span>Total Savings</span>
                <span>₹ {result.savings.toFixed(0)}</span>
              </div>

              <div className="flex justify-between bg-blue-100 p-3 rounded-lg font-bold">
                
                <span>Net Payable</span>
                <span>₹ {result.total.toFixed(0)}</span>
                
              </div>
              
{/* ✅ NOW OUTSIDE */}
<div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 p-4 md:p-5 rounded-xl text-center border border-green-200">

  <p className="text-sm md:text-lg font-semibold text-brandPrimary">
    You Save ₹{(result.savings || 0).toFixed(0)} / per EB bill 
  </p>

  <p className="text-sm md:text-lg font-semibold text-brandPrimary  mt-2">
    ₹{(result.yearly || 0).toFixed(0)} per year
  </p>

  <p className="text-base md:text-xl font-bold text-brandPrimary mt-2">
    ₹{(result.lifetime || 0).toFixed(0)} in 25 years
  </p>
  

</div>

<div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-5 rounded-xl text-center shadow-sm">

  <p className="text-sm md:text-base text-gray-600 font-medium">
    Estimated Solar System Cost
  </p>

  <p className="text-xl md:text-2xl font-extrabold text-brandPrimary mt-2 tracking-wide">
    ₹ {result.systemCost?.toFixed(0)}
  </p>

  <p className="text-xs text-gray-500 mt-1">
    Based on ₹60,000 per kW
  </p>

</div>

            </div>
            
            
          )}

          
          

        </div>
      )}
      

   <div className="mt-6 flex flex-col gap-2 text-xs md:text-sm">

<a
  href="mailto:enqenergy@seapol.com"
  className="text-brandPrimary font-semibold flex items-center gap-2 justify-center md:justify-start transition-all duration-200 hover:text-black hover:scale-105"
>
  <Mail size={16} />
  <span>enqenergy@seapol.com</span>
</a>

  <a
    href="https://wa.me/919500699955"
    target="_blank"
    className="text-brandPrimary font-semibold flex items-center gap-2 justify-center md:justify-start transition-all duration-200 hover:text-black hover:scale-105"
  >
    <MessageCircle size={16} />
    <span>+91 95006 99955</span>
  </a>


  

</div>

<div className="mt-8 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 p-5 rounded-xl shadow-sm">

  <p className="text-base md:text-lg font-bold text-brandPrimary mb-3 text-center">
    How to Use
  </p>

  <div className="space-y-2 text-sm md:text-base text-gray-700 text-center md:text-left">

    <p>1️⃣ Select your category (Domestic / Commercial / Industrial)</p>
    <p>2️⃣ Billing type is auto-selected (Net Metering / Net Billing)</p>
    <p>3️⃣ Enter your solar capacity in kW (e.g., 3 kW)</p>
    <p>4️⃣ Enter import units (EB usage) and export units (solar units)</p>
    <p>5️⃣ Click "Calculate Bill" to view your savings and payable amount</p>

  </div>

</div>


    </div>




    <div className="mt-10 bg-white rounded-xl shadow-md p-5 md:p-8">

<div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">    {/* LEFT IMAGE (FULL HEIGHT) */}
   {/* LEFT IMAGE (BIG) */}
<div className="md:col-span-3 flex items-center justify-center">
  <img
    src={solarImg}
    alt="Solar Investment"
    className="w-full rounded-xl"
  />
</div>

{/* RIGHT CONTENT (SMALLER) */}
<div className="md:col-span-2 flex flex-col justify-center text-left">

  {/* TITLE */}
  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1F33] leading-tight">
    Smart Investment Comparison
  </h2>

  {/* SUBTEXT */}
  <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
    Investing wisely means balancing returns, safety, and long-term value. 
    Here's how traditional options compare with solar energy.
  </p>

  {/* FD */}
  <div className="mt-6 p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
    <h3 className="font-semibold text-lg text-[#0B1F33] mb-2">
      💰 Bank Fixed Deposit (FD)
    </h3>
    <ul className="text-gray-600 text-base space-y-1">
      <li>• 6–7% annual returns</li>
      <li>• ~25% returns over 5 years</li>
      <li>• Safe and predictable investment</li>
    </ul>
  </div>

  {/* GOLD */}
  <div className="mt-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
    <h3 className="font-semibold text-lg text-[#0B1F33] mb-2">
      🪙 Gold Investment
    </h3>
    <ul className="text-gray-600 text-base space-y-1">
      <li>• Up to ~50% returns in 5 years</li>
      <li>• Prices fluctuate with market trends</li>
      <li>• Highly liquid asset</li>
    </ul>
  </div>

  {/* SOLAR (HIGHLIGHT) */}
  <div className="mt-4 p-5 rounded-xl bg-green-50 border border-green-200 shadow-sm">
    <h3 className="font-semibold text-lg text-brandPrimary mb-2">
      ☀️ Solar Installation
    </h3>
    <ul className="text-gray-700 text-base space-y-1">
      <li>• Save 60–80% on electricity bills</li>
      <li>• Up to ~70% returns in 5 years</li>
      <li>• Payback in 4–6 years</li>
      <li>• Long-term profit for 20+ years</li>
    </ul>
  </div>

  {/* CTA */}
  <p className="mt-6 text-brandPrimary font-semibold text-lg">
    Switch to solar and turn your energy costs into long-term savings.
  </p>

</div>

  </div>

</div>
    
    
    </div>



    
  );
}