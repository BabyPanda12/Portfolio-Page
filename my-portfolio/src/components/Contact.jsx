import Title from './Title';

function Contact() {
   return (
      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
         <div className="contact-card">
            <div className="contact-copy">
               <p className="section-kicker">The best things start with hello</p>
               <h2 id="contact-title">Have a little note for me?</h2>
               <p>I’m always happy to talk about projects, ideas, or the next thing I should read.</p>
               <span className="contact-doodle" aria-hidden="true">✿ ↝</span>
            </div>
            <form action="https://getform.io/f/aejrqjkb" method="POST" className="contact-form">
               <label>
                  Your name
                  <input type="text" name="name" placeholder="What should I call you?" autoComplete="name" required />
               </label>
               <label>
                  Your email
                  <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
               </label>
               <label>
                  Your message
                  <textarea name="message" placeholder="Write me a little note..." required />
               </label>
               <button className="button" type="submit">Send a note <span aria-hidden="true">♡</span></button>
            </form>
         </div>
      </section>
   )
}

export default Contact;