import hjPhoto from '../assets/images/HJ.jpg'
import klPhoto from '../assets/images/KL.jpg'
import amsterdamPhoto from '../assets/images/ams.jpg'
import waPhoto from '../assets/images/WhatsApp Image 2026-10-14 at 14.03.00.jpeg'
import iviPhoto from '../assets/images/Ivi.jpg'

const placePhotos = [
    { src: hjPhoto, alt: 'A live concert' },
    { src: klPhoto, alt: 'The skyline of Kuala Lumpur' },
    { src: amsterdamPhoto, alt: 'Canal houses in Amsterdam' },
    { src: waPhoto, alt: 'A visit to the Batu Caves in Malaysia' },
]

function Intro() {
    return (
        <>
            <section className="hero" id="home" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow">A little corner of the internet ✿</p>
                    <h1 id="hero-title">Hello, I’m <span>Ivana.</span></h1>
                    <p className="hero-lede">
                        A curious software engineer in the making, learning how to build thoughtful things with code.
                    </p>
                    <div className="hero-actions">
                        <a className="button" href="#about">A little more about me <span aria-hidden="true">↓</span></a>
                    </div>
                    <span className="hero-doodle" aria-hidden="true">✳</span>
                </div>
                <figure className="hero-portrait">
                    <img src={iviPhoto} alt="Ivana wearing a pink sweater" />
                </figure>
            </section>

            <section className="about-section" id="about" aria-labelledby="about-title">
                <div className="about-copy">
                    <p className="section-kicker">A little more about me</p>
                    <h2 className="section-title" id="about-title">Curious by nature, happiest around good people.</h2>
                    <p>
                        I love finding out how things work and making something useful from what I learn.
                        When I’m away from my laptop, you’ll find me travelling, reading, watching a good show,
                        or cooking (and eating—I believe I live to eat!).
                    </p>
                </div>
                <div className="about-photo-grid" role="list" aria-label="Snapshots from places Ivana has visited">
                    {placePhotos.map(({ src, alt }) => (
                        <div className="about-photo" key={alt} role="listitem">
                            <img src={src} alt={alt} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Intro;
