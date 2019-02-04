import React from 'react'
import {Link} from 'react-router-dom';
import TripCard from './TripCard';

export default function NewsFeed() {
  return (
    <div>
      <header className="w-full ">
      {/* NAVIGATION */}
        <nav className="w-full flex justify-end h-12 border border-blue items-center  ">
          <Link className="no-underline mx-2 text-lg text-green-dark hover:text-green-darker" to={'/user/:id'}>Profile</Link>
          {/* <span className="text-green "> | </span> */}
          <Link className="no-underline mx-4 text-lg text-red hover:text-red-darker" to={'/login'}>Logout</Link>
        </nav>
        {/* TITLE */}
        <h1 className="text-center text-5xl my-8">Guidr</h1>
      </header>
      {/* FILTER BAR */}
      <div className="filter w-full flex justify-center h-12 border border-blue items-center ">
          <h4 className="mr-4">Filter Trip Type:</h4>
          {/* props.filterItems.map(nav => return <div>{filterItem}</div>) */}
          <div className="mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker ">Hiking</div>
          <div className="mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker ">Back Packing</div>
          <div className="mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker ">Rock Climbing</div>
          <div className="mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker ">Cycling</div>
          <div className="mx-2 bg-green-dark text-white px-2 py-1 rounded tracking-wide hover:bg-green-darker ">Scuba Diving</div>
      </div>
      {/* CARDS */}
      <section className="flex flex-wrap justify-center mt-8">
        {/* props.newsfeed.map(item => return <TripCard newpost="item" />) */}
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
      </section>
    </div>
  )
}