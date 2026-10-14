import timeline from '../data/education'
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <section className="section" id="journey" aria-labelledby="journey-title">
         <Title id="journey-title" eyebrow="The places that shaped me">A little life timeline</Title>
         <p className="section-description">
            School has taken me across countries, into new communities, and through plenty of growing-up moments.
         </p>
         <div className="timeline">
            {timeline.map(item => <TimelineItem key={`${item.year}-${item.title}`} {...item} />)}
         </div>
      </section>
   )
}

export default Timeline;