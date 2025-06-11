import React, { useState } from 'react'

const Create = () => {
  const [problem , setProblem] = useState("")
  const [otherProblem, setOtherProblem] = useState("")
  const [solution, setSolution] = useState("")
  const [otherSolution, setOtherSolution] = useState("")
  const [mobileBrand, setMobileBrand] = useState("")
  const [modelNo , setModelNo] = useState("")
  const [mobileModel, setMobileModel] = useState("")
  const inputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
  const labelClass = 'font-medium text-gray-700 mb-1'

  return (
    <div>
      <form className='flex flex-col gap-4 p-4'>
        <label className={labelClass}>Customer Name</label>
        <input type="text" placeholder="Type customer name" required={true} className={inputClass} />

        <label className={labelClass}>Customer Number</label>
        <input type="number" placeholder="Type customer number" required={true} className={inputClass} />

        <label className={labelClass}>Problem</label>
        <select name="problem" value={problem} onChange={(e) => setProblem(e.target.value)} className={inputClass}>
          <option value="">Select Problem</option>
          <option value="comboBroken">Combo broken</option>
          <option value="batteryIssue">Battery issue</option>
          <option value="panelBroken">Panel broken</option>
          <option value="chargingIssue">Charging Jack issue</option>
          <option value="other">Other</option>
        </select>
        {problem ==="other" && (
          <input
            type="text"
            placeholder='Type other problem'
            onChange={(e)=>setOtherProblem(e.target.value)}
            className={inputClass}
          />
        )}

        <label className={labelClass}>Solution</label>
        <select name="solution" value={solution} onChange={(e)=>setSolution(e.target.value)} className={inputClass}>
          <option value="">Select Solution</option>
          <option value="comboChanged">Combo changed</option>
          <option value="BatteryChanged">Battery changed</option>
          <option value="PanelChanged">Panel changed</option>
          <option value="CharginJackChanged">Charging Jack changed</option>
          <option value="other">Other</option>
        </select>
        {solution === "other" && (
          <input
            type="text"
            placeholder='Type other solution'
            onChange={(e)=>setOtherSolution(e.target.value)}
            className={inputClass}
          />
        )}

        <label className={labelClass}>Mobile Brand</label>
        <select
          name="mobileModel"
          value={mobileModel}
          onChange={(e)=>{
            setMobileBrand(e.target.value);
            setMobileModel(e.target.value);
            setModelNo("");
          }}
          className={inputClass}
        >
          <option value="">Select Brand</option>
          <option value="vivo">Vivo</option>
          <option value="samsung">Samsung</option>
          <option value="oppo">Oppo</option>
          <option value="onePlus">OnePlus</option>
          <option value="realme">Realme</option>
          <option value="mi">MI</option>
          <option value="poco">Poco</option>
          <option value="other">Other</option>
        </select>
        {mobileBrand && mobileBrand !== 'other' && (
          <input
            type="text"
            placeholder={`Enter model no. (e.g. ${mobileBrand}:v67)`}
            value={modelNo}
            onChange={e => setModelNo(e.target.value)}
            className={inputClass}
          />
        )}
        {mobileBrand === 'other' && (
          <input
            type="text"
            placeholder="Type mobile model"
            value={modelNo}
            onChange={e => setModelNo(e.target.value)}
            className={inputClass}
          />
        )}

        <label className={labelClass}>Recieiving</label>
        <input type="datetime-local" className={inputClass} />

        <label className={labelClass}>Amount:</label>
        <input type="text" placeholder='type amount number' className={inputClass} />

        <label className={labelClass}>Handover</label>
        <input type="datetime-local" className={inputClass} />

        <button type="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-20'> Submit</button>
      </form>
    </div>
  )
}

export default Create   