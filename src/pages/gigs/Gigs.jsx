import React, { useRef, useState } from "react";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
import "./Gigs.scss";

const Gigs = () => {
  const [sort, setSort] = useState('sales');
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  const apply = () =>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">Graphics & Design</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with kankot AI Artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder='max' />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" onClick={() => setOpen(!open)} alt="" />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ):(
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs