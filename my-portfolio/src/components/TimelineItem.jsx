import React from 'react';

function TimelineItem({ year, title, duration, imgUrl, captions, details }) {
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>

               <h3 className="text-lg font-semibold text-stone-900">
                  {title}
               </h3>

               <div className="my-1 text-sm font-normal leading-none text-stone-400">
                  {duration}
               </div>

            </p>

            {imgUrl && imgUrl.length > 0 && (
               <div className="flex flex-wrap gap-4 my-2">
                  {imgUrl.map((url, index) => (
                     <div key={index} className="w-full md:w-1/2">
                        <img
                           src={url}
                           alt={`${title} image ${index + 1}`}
                           className="w-full rounded-md"
                        />
                        {/* Display caption under each image */}
                        {captions && captions[index] && (
                           <p className="text-sm text-center text-stone-500 mt-2">{captions[index]}</p>
                        )}
                     </div>
                  ))}
               </div>
            )}

<p className="my-1 text-sm font-normal leading-none text-stone-900">
                  {details}
               </p>

         </li>

      </ol>
   )
}

export default TimelineItem;