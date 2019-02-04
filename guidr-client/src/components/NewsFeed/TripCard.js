import React from 'react'

export default function TripCard() {
  return (
    
        <div class="m-2  border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal ">
            <div class="text-black font-bold text-xl mb-2">Back Packing in the Tetons</div>
            <p class="text-grey-darker text-base">Location: Grand Teton Naitional Park</p>
            <p class="text-grey-darker text-base">Type: Back Packing</p>
            <p class="text-grey-darker text-base">Duration: Two Weeks</p>
            <p class="text-grey-darker text-base">Work or Pleasure: Pleasure</p>
            
            <div class="flex items-center mt-4">
            <div class="text-sm">
                <p class="text-black leading-none">MattyHikes778</p>
                <p class="text-grey-dark">July 20th, 2018</p>
            </div>
            </div>
        </div>
    
  )
}
