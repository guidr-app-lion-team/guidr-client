import React from 'react'
import { Link } from 'react-router-dom'

export default function TripCard() {
  return (
    <div className="my-2 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-evenly leading-normal">
      <div className="text-black font-bold text-xl mb-2">Back Packing in the Tetons</div>
      <p className="text-grey-darker text-base">Location: Grand Teton Naitional Park</p>
      <p className="text-grey-darker text-base">Type: Back Packing</p>
      <p className="text-grey-darker text-base">Duration: Two Weeks</p>
      <p className="text-grey-darker text-base">Work or Pleasure: Pleasure</p>

      <div className="flex items-center mt-4">
        <div className="text-sm">
          <Link to='/user/:id' className="text-black leading-none">MattyHikes778</Link>
          <p className="text-grey-dark">July 20th, 2018</p>
        </div>
      </div>
    </div>
  )
}
