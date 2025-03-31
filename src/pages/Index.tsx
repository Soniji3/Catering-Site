
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add the script element to the document
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);

    // Remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Culinary Canvas - Premium Catering Services</title>
  <meta name="description" content="Experience exclusive catering tailored to your occasion with Culinary Canvas. Premium food presentation and sophisticated service for unforgettable events.">
  <link rel="stylesheet" href="/style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
  <!-- Header & Navigation -->
  <header id="header" class="header">
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <a href="#">Culinary Canvas</a>
        </div>
        <button id="navToggle" class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="navMenu" class="nav-menu">
          <li><a href="#" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#chef" class="nav-link">Our Chef</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#menu" class="nav-link">Menu</a></li>
          <li><a href="#gallery" class="nav-link">Gallery</a></li>
          <li><a href="#contact" class="nav-link contact-btn">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Exquisite Catering for Memorable Occasions</h1>
      <p>Elevating culinary experiences with artful presentation and premium ingredients</p>
      <div class="hero-buttons">
        <a href="#menu" class="btn btn-primary">View Our Menu</a>
        <a href="#contact" class="btn btn-outline">Book A Tasting</a>
      </div>
    </div>
    <a href="#about" class="scroll-down">
      <i class="fas fa-arrow-down"></i>
    </a>
  </section>

  <!-- About Section -->
  <section id="about" class="about section">
    <div class="container">
      <div class="section-header">
        <h2>Our Story</h2>
        <p>Crafting culinary experiences with passion and precision since 2010</p>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p>Culinary Canvas was born from a passion for creating extraordinary dining experiences that transcend the ordinary. We believe that each event deserves its own unique culinary narrative, meticulously crafted to reflect the vision and personality of our clients.</p>
          <p>Our approach combines classic techniques with contemporary innovations, always prioritizing exceptional ingredients and impeccable presentation. Whether an intimate gathering or a grand celebration, we bring the same dedication to excellence and attention to detail.</p>
          <div class="about-features">
            <div class="feature">
              <div class="feature-icon">
                <i class="fas fa-utensils"></i>
              </div>
              <h3>Bespoke Menus</h3>
            </div>
            <div class="feature">
              <div class="feature-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h3>Finest Ingredients</h3>
            </div>
            <div class="feature">
              <div class="feature-icon">
                <i class="fas fa-award"></i>
              </div>
              <h3>Expert Service</h3>
            </div>
          </div>
        </div>
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Elegant catering setup">
          <div class="image-accent accent-1"></div>
          <div class="image-accent accent-2"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Chef Section -->
  <section id="chef" class="chef section">
    <div class="container">
      <div class="section-header">
        <h2>Meet Our Executive Chef</h2>
        <p>The culinary vision behind our exceptional catering experience</p>
      </div>
      <div class="chef-content">
        <div class="chef-image">
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Executive Chef James Laurent">
        </div>
        <div class="chef-bio">
          <h3>James Laurent</h3>
          <h4>Executive Chef & Founder</h4>
          <p>With over 20 years of culinary expertise, Chef James has established himself as a visionary in modern cuisine. After training at the prestigious Culinary Institute of Paris and working in Michelin-starred restaurants across Europe, he returned to create Culinary Canvas with a mission to redefine catering.</p>
          <p>Chef James combines classical techniques with contemporary innovation, creating dishes that are both visually stunning and exquisitely flavored. His philosophy centers on respecting each ingredient and allowing its natural qualities to shine through thoughtful preparation.</p>
          <p>"I believe food should tell a story and create a memorable experience. Every dish we serve is crafted with intention, precision, and passion."</p>
          <div class="chef-credentials">
            <div class="credential">
              <i class="fas fa-star"></i>
              <span>Michelin Experience</span>
            </div>
            <div class="credential">
              <i class="fas fa-trophy"></i>
              <span>Award-Winning</span>
            </div>
            <div class="credential">
              <i class="fas fa-globe"></i>
              <span>International Training</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services section">
    <div class="container">
      <div class="section-header">
        <h2>Our Services</h2>
        <p>Exceptional catering customized for your special occasions</p>
      </div>
      <div class="tabs">
        <div class="tab-links">
          <button class="tab-link active" data-tab="tab1">Wedding Catering</button>
          <button class="tab-link" data-tab="tab2">Corporate Events</button>
          <button class="tab-link" data-tab="tab3">Private Dinners</button>
          <button class="tab-link" data-tab="tab4">Special Occasions</button>
        </div>
        <div class="tab-content">
          <div id="tab1" class="tab-pane active">
            <div class="service-content">
              <div class="service-image">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wedding catering">
              </div>
              <div class="service-info">
                <h3>Wedding Celebrations</h3>
                <p>Your wedding day deserves nothing less than perfection. Our dedicated team works closely with you to create a menu that reflects your taste and style, ensuring your special day is memorable for you and your guests.</p>
                <ul class="service-features">
                  <li>Customized menu planning and tasting sessions</li>
                  <li>Elegant presentation and professional service</li>
                  <li>Full-service catering including setup and cleanup</li>
                  <li>Options for cocktail hour, dinner service, and dessert bars</li>
                </ul>
                <a href="#contact" class="btn btn-primary">Request Wedding Quote</a>
              </div>
            </div>
          </div>
          <div id="tab2" class="tab-pane">
            <div class="service-content">
              <div class="service-image">
                <img src="https://images.unsplash.com/photo-1576097492152-4687ccd1c6e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Corporate catering">
              </div>
              <div class="service-info">
                <h3>Corporate Events</h3>
                <p>Impress your clients, partners, and employees with exceptional cuisine. From business lunches to gala dinners, we provide professional catering services tailored to your corporate needs.</p>
                <ul class="service-features">
                  <li>Breakfast meetings and executive lunches</li>
                  <li>Conferences and trade show catering</li>
                  <li>Product launch events and client appreciation dinners</li>
                  <li>Holiday parties and team-building events</li>
                </ul>
                <a href="#contact" class="btn btn-primary">Corporate Catering Inquiry</a>
              </div>
            </div>
          </div>
          <div id="tab3" class="tab-pane">
            <div class="service-content">
              <div class="service-image">
                <img src="https://images.unsplash.com/photo-1529543544282-cdab85927b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Private dinner">
              </div>
              <div class="service-info">
                <h3>Private Dinners</h3>
                <p>Transform your home gatherings into extraordinary dining experiences. Our private chef services bring restaurant-quality cuisine directly to your personal space for intimate celebrations.</p>
                <ul class="service-features">
                  <li>In-home chef experiences for special occasions</li>
                  <li>Multi-course tasting menus with wine pairings</li>
                  <li>Family-style dinners and buffet service</li>
                  <li>Cooking classes and interactive culinary experiences</li>
                </ul>
                <a href="#contact" class="btn btn-primary">Private Dining Details</a>
              </div>
            </div>
          </div>
          <div id="tab4" class="tab-pane">
            <div class="service-content">
              <div class="service-image">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Special occasion">
              </div>
              <div class="service-info">
                <h3>Special Occasions</h3>
                <p>Celebrate life's milestone moments with exceptional food and service. From anniversaries to graduations, we help create memorable celebrations with custom menus and impeccable presentation.</p>
                <ul class="service-features">
                  <li>Birthday celebrations and anniversary dinners</li>
                  <li>Graduation parties and retirement events</li>
                  <li>Holiday gatherings and seasonal celebrations</li>
                  <li>Engagement parties and rehearsal dinners</li>
                </ul>
                <a href="#contact" class="btn btn-primary">Plan Your Celebration</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Menu Section -->
  <section id="menu" class="menu section">
    <div class="container">
      <div class="section-header">
        <h2>Our Menu</h2>
        <p>A glimpse into our culinary offerings, customizable for your event</p>
      </div>
      <div class="menu-categories">
        <button class="menu-category active" data-category="all">All</button>
        <button class="menu-category" data-category="starters">Starters</button>
        <button class="menu-category" data-category="mains">Main Courses</button>
        <button class="menu-category" data-category="desserts">Desserts</button>
        <button class="menu-category" data-category="beverages">Beverages</button>
      </div>
      <div class="menu-grid">
        <!-- Starters -->
        <div class="menu-item starters">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1626082929543-5bdf3f4b9b20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Truffle Arancini">
          </div>
          <div class="menu-details">
            <h3>Truffle Arancini</h3>
            <p>Crispy risotto balls infused with black truffle, served with parmesan aioli</p>
            <span class="menu-price">$14</span>
          </div>
        </div>
        <div class="menu-item starters">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tuna Tartare">
          </div>
          <div class="menu-details">
            <h3>Tuna Tartare</h3>
            <p>Fresh ahi tuna with avocado, citrus, and wasabi served with sesame crisps</p>
            <span class="menu-price">$18</span>
          </div>
        </div>
        <!-- Main Courses -->
        <div class="menu-item mains">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Filet Mignon">
          </div>
          <div class="menu-details">
            <h3>Filet Mignon</h3>
            <p>Prime beef tenderloin with red wine reduction, truffle mashed potatoes, and seasonal vegetables</p>
            <span class="menu-price">$42</span>
          </div>
        </div>
        <div class="menu-item mains">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Pan Seared Salmon">
          </div>
          <div class="menu-details">
            <h3>Pan Seared Salmon</h3>
            <p>Wild-caught salmon with lemon beurre blanc, herbed quinoa, and asparagus</p>
            <span class="menu-price">$36</span>
          </div>
        </div>
        <!-- Desserts -->
        <div class="menu-item desserts">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Chocolate Soufflé">
          </div>
          <div class="menu-details">
            <h3>Chocolate Soufflé</h3>
            <p>Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis</p>
            <span class="menu-price">$16</span>
          </div>
        </div>
        <div class="menu-item desserts">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1591400354854-1d827b3541dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Crème Brûlée">
          </div>
          <div class="menu-details">
            <h3>Crème Brûlée</h3>
            <p>Classic vanilla bean custard with caramelized sugar crust and fresh berries</p>
            <span class="menu-price">$14</span>
          </div>
        </div>
        <!-- Beverages -->
        <div class="menu-item beverages">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Signature Cocktails">
          </div>
          <div class="menu-details">
            <h3>Signature Cocktails</h3>
            <p>Custom-crafted cocktails using premium spirits, fresh juices, and house-made syrups</p>
            <span class="menu-price">From $16</span>
          </div>
        </div>
        <div class="menu-item beverages">
          <div class="menu-image">
            <img src="https://images.unsplash.com/photo-1560626056-5a68c8e3dc76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Curated Wine Selection">
          </div>
          <div class="menu-details">
            <h3>Curated Wine Selection</h3>
            <p>Hand-selected wines from renowned vineyards, paired perfectly with your menu</p>
            <span class="menu-price">By Request</span>
          </div>
        </div>
      </div>
      <div class="menu-cta">
        <p>This is just a sample of our offerings. We create custom menus tailored to your preferences and event needs.</p>
        <a href="#contact" class="btn btn-primary">Request Full Menu</a>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery" class="gallery section">
    <div class="container">
      <div class="section-header">
        <h2>Gallery</h2>
        <p>A visual feast of our culinary creations and events</p>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Elegant wedding table setting">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Wedding Reception</h3>
              <p>Elegant plated dinner service</p>
            </div>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Corporate event catering">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Corporate Event</h3>
              <p>Executive luncheon</p>
            </div>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Plated gourmet dessert">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Signature Dessert</h3>
              <p>Chocolate ganache torte</p>
            </div>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Fine dining plate presentation">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Plated Main Course</h3>
              <p>Seasonal tasting menu</p>
            </div>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cocktail station">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Craft Cocktail Bar</h3>
              <p>Private event service</p>
            </div>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1604345190860-25f4b904fe57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Appetizer selection">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Passed Hors d'oeuvres</h3>
              <p>Cocktail hour reception</p>
            </div>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1606103836293-2e67611d00b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Chef plating food">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Chef's Attention to Detail</h3>
              <p>Live cooking station</p>
            </div>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1525088554196-4f08c782af4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Dessert table display">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>Dessert Display</h3>
              <p>Wedding celebration finale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <div class="section-header">
        <h2>Client Testimonials</h2>
        <p>What our clients say about their Culinary Canvas experience</p>
      </div>
      <div class="testimonial-slider">
        <div class="testimonial-track">
          <div class="testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>"Culinary Canvas exceeded our expectations in every way possible. The attention to detail, from menu planning to presentation, was impeccable. Our wedding guests are still raving about the food months later!"</p>
              <div class="testimonial-author">
                <h4>Emily & Michael Thompson</h4>
                <p>Wedding Reception, June 2023</p>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>"We hired Culinary Canvas for our company's annual gala, and they delivered an exceptional dining experience. Their professionalism, creative menu, and flawless execution impressed our executive team and clients alike."</p>
              <div class="testimonial-author">
                <h4>Robert Chen</h4>
                <p>Director of Events, Global Innovations Inc.</p>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>"Chef James created a memorable in-home dining experience for my wife's 40th birthday. The personalized menu, impeccable service, and extraordinary flavors made it a night to remember. Worth every penny!"</p>
              <div class="testimonial-author">
                <h4>David Wilson</h4>
                <p>Private Dinner Party, March 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-controls">
          <button class="testimonial-arrow prev">
            <i class="fas fa-arrow-left"></i>
          </button>
          <div class="testimonial-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <button class="testimonial-arrow next">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-header">
        <h2>Get In Touch</h2>
        <p>Inquire about our services and start planning your perfect event</p>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-content">
              <h3>Our Location</h3>
              <p>123 Culinary Avenue, Metropolis, NY 10001</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="info-content">
              <h3>Phone Number</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email Address</h3>
              <p>info@culinarycanvas.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="info-content">
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div class="contact-form-container">
          <form id="contactForm" class="contact-form">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
              <label for="date">Event Date</label>
              <input type="date" id="date" name="date">
            </div>
            <div class="form-group full-width">
              <label for="event-type">Event Type</label>
              <select id="event-type" name="event-type">
                <option value="">Please Select</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Dinner</option>
                <option value="special">Special Occasion</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group full-width">
              <label for="guests">Number of Guests</label>
              <select id="guests" name="guests">
                <option value="">Please Select</option>
                <option value="1-20">1-20</option>
                <option value="21-50">21-50</option>
                <option value="51-100">51-100</option>
                <option value="101-200">101-200</option>
                <option value="201+">201+</option>
              </select>
            </div>
            <div class="form-group full-width">
              <label for="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary full-width">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h3>Culinary Canvas</h3>
          <p>Elevating culinary experiences through artful presentation and premium ingredients.</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#chef">Our Chef</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Wedding Catering</a></li>
              <li><a href="#services">Corporate Events</a></li>
              <li><a href="#services">Private Dinners</a></li>
              <li><a href="#services">Special Occasions</a></li>
              <li><a href="#contact">Request Quote</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Contact Us</h4>
            <ul class="contact-list">
              <li><i class="fas fa-map-marker-alt"></i> 123 Culinary Avenue, Metropolis, NY 10001</li>
              <li><i class="fas fa-phone"></i> (555) 123-4567</li>
              <li><i class="fas fa-envelope"></i> info@culinarycanvas.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Culinary Canvas. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fab fa-pinterest-p"></i></a>
          <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
    ` }} />
  );
};

export default Index;
