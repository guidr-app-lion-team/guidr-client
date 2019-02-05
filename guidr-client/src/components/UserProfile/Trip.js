import React from 'react'
import {TweenMax, Power2} from "gsap/TweenMax";


const showDescription = e => {
  e.preventDefault();
  if(e.target.nextSibling.classList.contains('hidden')){
    TweenMax.from(e.target.nextSibling, 1, {
      className: '+=hidden',
      ease: Power2.easeOut,
      height: "0",
      width: "0",
      right: "0",
      top: "0",
      fontSize: "0",
      lineHeight: "0"
    });
    TweenMax.to(e.target.nextSibling, 1, {
      ease: Power2.easeOut,
      height: "100%",
      width: "100%",
      top: "0",
      position: "relative",
      lineHeight: "2",
      className: '-=hidden'
    });
  } else{
    TweenMax.from(e.target.nextSibling, 1, {
      ease: Power2.easeOut,
      height: "100%",
      width: "100%",
      top: "0",
      position: "relative",
      lineHeight: "2",
      className: '-=hidden'
    });
    TweenMax.to(e.target.nextSibling, 1, {
      className: '+=hidden',
      ease: Power2.easeOut,
      height: "0",
      width: "0",
      right: "0",
      top: "0",
      fontSize: "0",
      lineHeight: "0"
    });
  }
  
}




export default function Trip() {
  return (
    <div className="w-full absoluite">
      <button onClick={e => showDescription(e)} className="rounded-sm bg-green-dark text-white collapsible border w-full h-12">Title   &loz;  Date   &loz;   Duration   &loz;   Location</button>
      <div className="hidden content">
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
            <h4 className="mr-2">Notes: <span className="font-normal">We didn't go far to experience the great outdoors. Walked 5 miles and camped three nights. Enjoyed meals of hotdogs and marshmellows. Encountered a coyote... how neat! </span></h4>
          </div>
        </div>
      </div>
    </div>
  )
}
