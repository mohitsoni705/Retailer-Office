import React from 'react'

const Create = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Type customer name" requireds />
        <input type="number" placeholder="Type customer number" required/>
        <select name="problem" id="">
          <option value="">Combo</option>
          <option value="">Battery</option>
          <option value="">Panel</option>
          <option value="">Charging Jack</option>
          <option value="">Other</option>

        </select>
      </form>
    </div>
  )
}

export default Create
