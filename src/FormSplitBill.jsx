import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({selectedFriend}) => {

  const [bill,setBill] = useState("")
  const [paidByUser,setPaidByUser] = useState("");
  const PaidByFriend = bill ? bill - paidByUser : ""
  const [whoISpaying,setWhoIsPaying] = useState("user")
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input type='text' value={bill}
      onChange={(e)=>setBill(Number(e.target.value))}/>

      <label>🕴️ Your Expense</label>
      <input type='text' value={paidByUser}
      onChange={(e)=>setPaidByUser(Number(e.target.value)
      > bill ? paidByUser : Number(e.target.value))}/>

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expense</label>
      <input type='text' disabled value={PaidByFriend}/>

      <label>🤑 Who is paying the bill</label>

      <select value={whoISpaying}
      onChange={(e)=>setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill
