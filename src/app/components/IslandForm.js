"use client"

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island, incrementVisitors }) {
  const [nameValue, setNameValue] = useState('');
  const [telValue, setTelValue] = useState('');

  function handleNameChange(event) {
    setNameValue(event.target.value);
  };

  function handleTelChange(event) {
    setTelValue(event.target.value);
  }

  function confirmMessage(e) {
    e.preventDefault();

    // const { nameValue, telValue, island } = form;
    const message = 
    `Are you sure you want to book ${island.name}? 
    Name: ${nameValue} 
    Telephone Number: ${telValue}`

    const isConfirmed = confirm(message)
    if (isConfirmed) {
      setNameValue('');
      setTelValue('');
      incrementVisitors(island.id);
      alert('Booking confirmed!')
    }
    else {
      alert('Booking cancelled!')
    }
  }

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image
        src={island.img}
        alt={island.name}
        width="300"
        height="300"
      />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={confirmMessage}>
        <input placeholder="Type Full Name" type="text" value={nameValue} onChange={handleNameChange}/>
        <input placeholder="Type Phone Number" type="tel" value={telValue} onChange={handleTelChange}/>
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm
