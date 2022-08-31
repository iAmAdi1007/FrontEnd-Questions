import React from 'react';
import {useState} from 'react';
import './Calculator.css'

export default function Calculator() {
   const [bill, setBill] = useState(50);
   const [tip, setTip] = useState(18);
   const [people, setPeople] = useState(1);
   const totalBill = (bill * tip) / 100;
   const tipPerPerson = totalBill / people;

  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
          type="number"
          id="bill" 
          value={bill} 
          onChange={(event)=>{setBill(parseInt(event.target.value))}}
        />
            <label htmlFor="percent">Tip Percentage</label>
      <input
          type="number"
          id="percent" 
          value={tip} 
          onChange={(event)=>{setTip(parseInt(event.target.value))}}
        />
            <label htmlFor="people">Number of People</label>
      <input
          type="number"
          id="people" 
          value={people} 
          onChange={(event)=>{setPeople(parseInt(event.target.value))}}
        />
      <p>Total Tip: {isNaN(totalBill) ? '-' : `$${totalBill.toFixed(2)}`}</p>
      <p>Tip Per Person: {isNaN(tipPerPerson) ? '-' : `$${tipPerPerson.toFixed(2)}`}</p>
    </>
  );
}