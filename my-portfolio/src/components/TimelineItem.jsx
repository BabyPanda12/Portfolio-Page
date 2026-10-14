function TimelineItem({ year, title, duration, imgUrl, captions, details }) {
   return (
      <article className="timeline-card">
         <span className="timeline-marker" aria-hidden="true">✿</span>
         <div className="timeline-content">
            <div className="timeline-meta">
               <span className="timeline-year">{year}</span>
               <span className="timeline-duration">{duration}</span>
            </div>
            <h3>{title}</h3>
            <p className="timeline-details">{details}</p>
            {imgUrl?.length > 0 && (
               <div className="memory-gallery">
                  {imgUrl.map((url, index) => (
                     <figure className="memory-photo" key={url}>
                        <img src={url} alt={captions?.[index] || `${title} memory`} />
                        {captions?.[index] && <figcaption>{captions[index]}</figcaption>}
                     </figure>
                  ))}
               </div>
            )}
         </div>
      </article>
   )
}

export default TimelineItem;