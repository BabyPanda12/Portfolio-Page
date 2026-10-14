import cvUrl from '../data/Ivana Stojanova_CV.pdf?url'
import Title from './Title'

function Portfolio() {
   return (
      <section className="section" id="work" aria-labelledby="work-title">
         <Title id="work-title" eyebrow="A little about my experience">My CV</Title>
         <div className="cv-actions">
            <a className="button" href={cvUrl} download="Ivana-Stojanova-CV.pdf">
               Download my CV <span aria-hidden="true">↓</span>
            </a>
         </div>
         <iframe className="cv-preview" src={cvUrl} title="Ivana Stojanova CV" />
      </section>
   )
}

export default Portfolio;