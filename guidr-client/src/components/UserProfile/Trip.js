import React from 'react'


const showDescription = e =>{
    e.preventDefault();
    e.target.nextSibling.classList.toggle('hidden')
}

export default function Trip() {
  return (
    <div className="w-full">
      <button onClick={e=> showDescription(e)}className="collapsible border border-red w-full h-12">Title - Date - Duration - Location</button>
      <div className="hidden content border border-red">
        <div class=" border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex">
            <h4 className="mr-2">Title: </h4>
            <p> Backyard Hike</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Location: </h4>
            <p> Appalachian Trail</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Duration: </h4>
            <p> 2 Nights</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Type of Trip: </h4>
            <p> Back Packing</p>
          </div>
          <div className="flex">
            <h4 className="mr-2">Professional or Pleasure: </h4>
            <p> Pleasure</p>
          </div>
          
          <div className="flex">
            <h4 className="mr-2">Notes: <span className="font-normal">We didn't go far to experience the great outdoors. Walked 5 miles and camped three nights. Enjoyed meals of hotdogs and marshmellows. Encounter a coyote... how neat! </span></h4>
          </div>
        </div>
        </div>
    </div>
  )
}
