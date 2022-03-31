import React from 'react';
import { useSelector } from 'react-redux';

import Event from './Event/Event';

const Events = () => {
  const events = useSelector((state) => state.events);

  console.log(events);

  return (
    <div>
      <h1>Events</h1>
      <Event />
      <Event />
    </div>
  );
}

export default Events;
