import React, { useState } from 'react';

const photos = [
  { src: '/assets/gallery-beacon-ridge-53.jpg', alt: 'Aerial view of a residential community and sports courts near Pahrump' },
  { src: '/assets/gallery-beacon-ridge-41.jpg', alt: 'Aerial view of homes, green space, and mountains near Pahrump' },
  { src: '/assets/gallery-roseworthy.jpg', alt: 'Aerial view of a home with a pool and mountain scenery' },
  { src: '/assets/gallery-ailanto-14.jpg', alt: 'Bright sitting room with large windows looking into the desert landscape' },
  { src: '/assets/gallery-ailanto-45.jpg', alt: 'Desert home exterior with mountain views' },
  { src: '/assets/gallery-ailanto-50.jpg', alt: 'Aerial view of a desert home with a private pool' },
];

const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'Listings', href: 'https://marcimetzger.com/listings' },
  { label: "Let's Move", href: 'https://marcimetzger.com/lets-move' },
  { label: 'About Us', href: 'https://marcimetzger.com/about-us' },
];

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand--light' : ''}`} href="#top" aria-label="Marci Metzger Homes, home">
      <span className="brand__name">Marci Metzger</span>
      <span className="brand__home">Homes</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__icon" aria-hidden="true"><i /><i /></span>
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} site navigation</span>
        </button>
        <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} id="primary-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={item.label === 'Home' ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-call" href="tel:+12069196886">Call Marci <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__image" src="/assets/hero-pahrump.jpg" alt="Pahrump landscape with mountain views, park, and homes" fetchPriority="high" />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <h1 id="hero-title">Pahrump<br /><em>Realtor</em></h1>
        <a className="button button--light" href="tel:+12069196886">Call now <span aria-hidden="true">↗</span></a>
      </div>
      <div className="hero__note"><span>Local knowledge</span><span className="hero__rule" /><span>Pahrump, Nevada</span></div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="intro section-shell" aria-labelledby="intro-title">
      <div className="intro__portrait-wrap">
        <img src="/assets/marci-portrait.jpg" alt="Marci Metzger, Pahrump Realtor" className="intro__portrait" loading="lazy" />
        <span className="intro__portrait-label">Marci Metzger</span>
      </div>
      <div className="intro__copy">
        <p className="eyebrow">A steady hand, close to home</p>
        <h2 id="intro-title">Marci<br /><em>Metzger</em></h2>
        <p className="intro__credential">Realtor for nearly 3 decades</p>
        <p className="intro__body">Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, &amp; we want to make sure our best is better every year.</p>
        <a className="text-link" href="https://marcimetzger.com/about-us">Get to know Marci <span aria-hidden="true">↗</span></a>
        <a className="intro__phone" href="tel:+12069196886">206-919-6886</a>
      </div>
      <div className="intro__index" aria-hidden="true">01 / 04</div>
    </section>
  );
}

function SalesSection() {
  return (
    <section className="sales" id="selling" aria-labelledby="sales-title">
      <div className="sales__heading section-shell">
        <div>
          <p className="eyebrow">Thoughtful guidance at every step</p>
          <h2 id="sales-title">Get it <em>sold.</em></h2>
        </div>
        <div className="sales__stat">
          <strong>$28.5M</strong>
          <span>in sales in 2021</span>
        </div>
        <p className="sales__lead"><strong>Top Residential Sales Last 5 Years</strong><br />We helped nearly 90 clients in 2021, and closed 28.5 million in sales!</p>
      </div>
      <div className="sales-story">
        <article className="story-row">
          <img src="/assets/gallery-beacon-ridge-53.jpg" alt="Interior of a Pahrump property" loading="lazy" />
          <div className="story-copy">
            <span className="story-copy__number">01</span>
          <h3>Don't Just List it...</h3>
            <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
            <a className="text-link" href="https://marcimetzger.com/listings">Explore listings <span aria-hidden="true">↗</span></a>
          </div>
        </article>
        <article className="story-row story-row--reverse">
          <img src="/assets/gallery-ailanto-14.jpg" alt="A home from the original Marci Metzger photo gallery" loading="lazy" />
          <div className="story-copy">
            <span className="story-copy__number">02</span>
          <h3>Guide to Buyers</h3>
            <p>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, &amp; more!</p>
            <a className="text-link" href="https://marcimetzger.com/lets-move">Let's move <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>
  );
}

function SearchSection() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('The source site’s MLS integration is not available in this standalone build, so these filters cannot run here. Open its live listings page to search current properties.');
  }

  return (
    <section className="search-section" id="search" aria-labelledby="search-title">
      <div className="search-section__photo" role="img" aria-label="Home from the original Marci Metzger property gallery" />
      <div className="search-panel">
        <p className="eyebrow">Your next chapter starts here</p>
        <h2 id="search-title">Find your<br /><em>dream home</em></h2>
        <p className="search-panel__intro">Search listings</p>
        <form className="listing-form" onSubmit={handleSubmit}>
          <label>Location<select defaultValue=""><option value="" disabled>Select</option><option>Pahrump</option><option>Las Vegas</option></select></label>
          <label>Type<select defaultValue=""><option value="" disabled>Select</option><option>Residential</option><option>Commercial</option></select></label>
          <label>Sort by<select defaultValue=""><option value="" disabled>Select</option><option>Price</option><option>Newest</option></select></label>
          <label>Bedrooms<select defaultValue=""><option value="" disabled>Select</option>{[1, 2, 3, 4, 5].map((n) => <option key={n}>{n}+</option>)}</select></label>
          <label>Baths<select defaultValue=""><option value="" disabled>Select</option>{[1, 2, 3, 4, 5].map((n) => <option key={n}>{n}+</option>)}</select></label>
          <label>Min price<input inputMode="numeric" placeholder="$ Any" /></label>
          <label>Max price<input inputMode="numeric" placeholder="$ Any" /></label>
          <button className="button button--dark listing-form__submit" type="submit">Search now <span aria-hidden="true">↗</span></button>
          {message && <p className="form-note" role="status">{message} <a href="https://marcimetzger.com/listings">View live listings</a></p>}
        </form>
      </div>
    </section>
  );
}

function Gallery() {
  const [activePhoto, setActivePhoto] = useState(0);

  function move(direction) {
    setActivePhoto((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <section className="gallery section-shell" id="gallery" aria-labelledby="gallery-title">
      <div className="section-heading">
        <div><p className="eyebrow">A glimpse of what home can be</p><h2 id="gallery-title">Photo <em>gallery</em></h2></div>
        <div className="gallery-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous gallery photo">←</button>
          <span>{String(activePhoto + 1).padStart(2, '0')} <i /> {String(photos.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next gallery photo">→</button>
        </div>
      </div>
      <div className="gallery__stage" aria-live="polite">
        <img src={photos[activePhoto].src} alt={photos[activePhoto].alt} />
        <div className="gallery__caption"><span>Pahrump, Nevada</span><span>Property photography</span></div>
      </div>
      <div className="gallery__thumbnails" aria-label="Choose a gallery photo">
        {photos.map((photo, index) => (
          <button className={index === activePhoto ? 'is-active' : ''} type="button" key={photo.src} onClick={() => setActivePhoto(index)} aria-label={`Show photo ${index + 1}`} aria-pressed={index === activePhoto}>
            <img src={photo.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    number: '01', title: 'Real Estate Done Right', image: '/assets/gallery-beacon-ridge-53.jpg', imageAlt: 'Aerial view of homes and sports courts in the Pahrump area',
    copy: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    number: '02', title: 'Commercial & residential', image: '/assets/gallery-roseworthy.jpg', imageAlt: 'Pahrump home from the original photo gallery',
    copy: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
  },
  {
    number: '03', title: 'Rely on Expertise', image: '/assets/gallery-ailanto-45.jpg', imageAlt: 'Desert home exterior with mountain views',
    copy: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.',
  },
];

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="section-heading section-heading--services">
          <div><p className="eyebrow">Here for the whole journey</p><h2 id="services-title">Our <em>services</em></h2></div>
          <p>Real estate done right</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__image"><img src={service.image} alt={service.imageAlt} loading="lazy" /><span>{service.number}</span></div>
              <div className="service-card__copy"><h3>{service.title}</h3><p>{service.copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__intro">
        <p className="eyebrow eyebrow--light">Pahrump · Nevada</p>
        <h2 id="contact-title">Call or<br /><em>visit</em></h2>
        <a className="contact__phone" href="tel:+12069196886">(206) 919-6886 <span aria-hidden="true">↗</span></a>
        <div className="contact__address"><strong>Marci Metzger — The Ridge Realty Group</strong><address>3190 HW-160, Suite F<br />Pahrump, Nevada 89048, United States</address></div>
        <div className="contact__hours"><strong>Office hours</strong><span>Open today · 08:00 am–07:00 pm</span><p>Open daily · 8:00 am–7:00 pm</p><p>Appointments outside office hours available upon request. Just call!</p></div>
      </div>
      <div className="contact__form-wrap">
        <p className="eyebrow">A note is always welcome</p>
        <h3>Send Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required />
          <label htmlFor="contact-email">Email*</label><input id="contact-email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="3" required />
          <button className="button button--light" type="submit">Send <span aria-hidden="true">↗</span></button>
          <p className="form-note form-note--light" role="status">{submitted ? 'The original website’s contact form is handled by its site provider. Please call Marci at (206) 919-6886 to send your message.' : 'The original contact form uses a site-provider connection that is not available in this standalone redesign. You can call Marci directly at (206) 919-6886.'}</p>
          <p className="captcha-note">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
        </form>
      </div>
      <div className="contact__map">
        <iframe title="Map showing the Marci Metzger office in Pahrump, Nevada" src="https://maps.google.com/maps?q=3190%20HW-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <a href="https://maps.google.com/maps?ll=36.184402,-115.955288&z=14&t=m&hl=en-US&gl=US&mapclient=apiv3" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top"><div className="footer-brand"><img src="/assets/ridge-realty-group.png" alt="The Ridge Realty Group" /><Brand light /></div><div className="footer-socials" aria-label="Social profiles">
        <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.instagram.com/marcimetzger_theridge/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" target="_blank" rel="noreferrer">Yelp</a>
      </div></div>
      <div className="site-footer__bottom"><span>Marci Metzger — The Ridge Realty Group</span><span>Copyright © 2026 Marci Metzger · All rights reserved</span></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Introduction />
        <SalesSection />
        <SearchSection />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
