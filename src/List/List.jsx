import React, { useEffect, useState } from "react";
import Tours from "../Tours/Tours";
import "./List.css"

const url = "https://course-api.com/react-tours-project";
const List = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <main className="loading">Loading...</main>;
  }
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if (tours.length === 0) {
    return <main>
      <h2 className="noTours">No tours left</h2>
      <button className="fetchTours" onClick={fetchTours}>refresh</button>
    </main>;
  }
  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <div className="underline"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default List;
