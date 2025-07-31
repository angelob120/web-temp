// Template 7 - Plumber Green
function generateTemplate7() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    
    return `
        <!-- PASTE THE ENTIRE HTML CONTENT FROM plumber.html HERE -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Service Landing Page</title>
        <style>
            /* Reset & base */
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: 'Arial', sans-serif; color: #2A2A2A; background: #F5F8FA; line-height: 1.6; }
            a { text-decoration: none; color: inherit; }

            /* Header */
            .header { background: #fff; padding: 0.5rem 0; border-bottom: 1px solid #eee; }
            .header-top { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 2rem; font-size: 0.9rem; color: #666; }
            .header-top .location { }
            .header-top .phone { color: #4CAF50; font-weight: 600; }

            .navbar { background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%); }
            .nav-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center; }
            .logo { color: #fff; font-size: 1.5rem; font-weight: bold; padding: 1rem 0; }
            .nav-menu { display: flex; list-style: none; gap: 2rem; }
            .nav-menu li a { color: #fff; padding: 1rem 0; transition: opacity 0.3s; }
            .nav-menu li a:hover { opacity: 0.8; }
            .nav-menu li.active { background: rgba(255,255,255,0.1); }
            .nav-menu li.active a { padding: 1rem; border-radius: 4px; }

            /* Container */
            .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

            /* Hero */
            .hero { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 3rem; padding: 4rem 0; background: #fff; margin-top: 0; }
            .hero-content { flex: 1 1 500px; }
            .hero-content h1 { font-size: 3.2rem; margin-bottom: 1.5rem; line-height: 1.2; color: #2A2A2A; }
            .highlight { color: #4CAF50; }
            .hero-content > p { margin-bottom: 2rem; color: #666; font-size: 1.1rem; }
            
            .testimonial { background: #E8F5E8; padding: 1.5rem; border-radius: 8px; display: flex; align-items: flex-start; margin-bottom: 2rem; border-left: 4px solid #4CAF50; }
            .testimonial img { width: 48px; height: 48px; border-radius: 50%; margin-right: 1rem; object-fit: cover; }
            .testimonial-content { flex: 1; }
            .stars { color: #FFC107; margin-bottom: 0.5rem; font-size: 1.1rem; }
            .testimonial-text { margin-bottom: 0.5rem; font-style: italic; }
            .author { font-weight: bold; color: #4CAF50; font-size: 0.9rem; }
            
            .btn { display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%); color: #fff; border-radius: 6px; font-weight: 600; font-size: 1rem; transition: transform 0.2s, box-shadow 0.2s; }
            .btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3); }

            .hero-image { flex: 1 1 400px; position: relative; }
            .hero-image img { width: 100%; display: block; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
            
            .request-form { position: absolute; top: 15%; right: -10%; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); width: 280px; z-index: 2; }
            .request-form h3 { margin-bottom: 1.5rem; font-size: 1.3rem; color: #2A2A2A; }
            .request-form input,
            .request-form select { width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.95rem; }
            .request-form input:focus,
            .request-form select:focus { outline: none; border-color: #4CAF50; }
            .request-form button { width: 100%; padding: 0.75rem; background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%); color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: transform 0.2s; }
            .request-form button:hover { transform: translateY(-1px); }

            /* Why Choose Us */
            .why { padding: 4rem 0; background: #f8f9fa; }
            .why-container { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; }
            .why-image { flex: 1 1 400px; background: #ddd; height: 550px; border-radius: 12px; position: relative; overflow: hidden; }
            .why-image::before { content: "GMB image"; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #666; font-size: 1.5rem; font-weight: bold; }
            .why-content { flex: 1 1 500px; }
            .section-label { color: #4CAF50; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; }
            .why-content h2 { font-size: 2.8rem; margin-bottom: 1.5rem; line-height: 1.2; color: #2A2A2A; }
            .why-content > p { color: #666; margin-bottom: 3rem; font-size: 1.1rem; }
            
            .features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
            .feature { background: #fff; padding: 2rem; border-radius: 12px; text-align: left; box-shadow: 0 4px 16px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; }
            .feature:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
            .feature-icon { width: 48px; height: 48px; background: #E8F5E8; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
            .feature svg { width: 24px; height: 24px; fill: #4CAF50; }
            .feature h4 { margin-bottom: 0.5rem; font-size: 1.1rem; color: #2A2A2A; }
            .feature p { font-size: 0.95rem; color: #666; }

            /* Services */
            .services { padding: 4rem 0; background: #fff; }
            .services .section-label { text-align: center; }
            .services h2 { font-size: 2.8rem; margin-bottom: 3rem; text-align: center; line-height: 1.2; color: #2A2A2A; }
            .services-header { text-align: right; margin-bottom: 2rem; }
            .services-header a { color: #4CAF50; font-weight: 600; }
            .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
            .service-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; }
            .service-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
            .service-card .service-emoji { width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; font-size: 4rem; }
            .service-card .card-content { padding: 1.5rem; }
            .service-card h3 { margin-bottom: 0.75rem; font-size: 1.3rem; color: #2A2A2A; }
            .service-card p { font-size: 0.95rem; color: #666; margin-bottom: 1rem; }
            .service-card a { display: inline-block; color: #4CAF50; font-weight: 600; transition: color 0.3s; }
            .service-card a:hover { color: #45a049; }

            /* Responsive */
            @media (max-width: 968px) {
            .request-form { position: static; margin: 2rem auto 0; right: auto; }
            .features { grid-template-columns: 1fr; }
            }

            @media (max-width: 768px) {
            .nav-container { flex-direction: column; gap: 1rem; }
            .nav-menu { flex-wrap: wrap; justify-content: center; }
            .hero, .why-container { flex-direction: column; }
            .hero-image, .why-image { width: 100%; }
            .hero-content h1 { font-size: 2.5rem; }
            .why-content h2, .services h2 { font-size: 2.2rem; }
            .features { grid-template-columns: 1fr; }
            }
        </style>
        </head>
        <body>
        <!-- Header -->
        <header class="header">
            <div class="header-top">
            <div class="location">📍 123 Main St, Anywhere.</div>
            <div class="phone">📞 +${phoneNumber}</div>
            </div>
        </header>

        <!-- Navigation -->
        <nav class="navbar">
            <div class="nav-container">
            <div class="logo">${companyName}</div>
            <ul class="nav-menu">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            </div>
        </nav>

        <div class="container">
            <!-- Hero -->
            <section class="hero">
            <div class="hero-content">
                <h1>Your <span class="highlight">Reliable</span><br>${serviceName}<br>Partner</h1>
                <p>${companyName} offers reliable ${serviceName} services that cater to all your ${serviceName} needs. From simple repairs to complex installations.</p>
                <div class="testimonial">
                <img src="https://via.placeholder.com/48" alt="Jhon Smith">
                <div class="testimonial-content">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">Great Service From Dedicated Team. They Are Very Experienced In Fixing All The HVAC/R Problems That Plague Homes.</p>
                    <div class="author">Jhon Smith, Idaho</div>
                </div>
                </div>
                <a href="#" class="btn">Request Services</a>
            </div>
            <div class="hero-image">
                <img src="https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/688b0b2f08dbc30d46255ba4.png" alt="Technician at work">
                <form class="request-form">
                <h3>Request a Service</h3>
                <input type="text" placeholder="Your name">
                <input type="email" placeholder="Email">
                <input type="tel" placeholder="Phone number">
                <select>
                    <option>Choose a service</option>
                    <option>Plumbing</option>
                    <option>HVAC</option>
                    <option>Installation</option>
                </select>
                <button type="submit">Request Services</button>
                </form>
            </div>
            </section>
        </div>

        <!-- Why Choose Us -->
        <section class="why">
            <div class="container">
            <div class="why-container">
                <div class="why-image"></div>
                <div class="why-content">
                <div class="section-label">🛠️ Why Choose Us</div>
                <h2>Choose Us for Expert ${serviceName} Solutions</h2>
                <p>When it comes to your ${serviceName} needs, you need a team you can trust. At ${companyName}, we're committed to providing our clients with the highest quality ${serviceName} solutions and exceptional customer service.</p>
                <div class="features">
                    <div class="feature">
                    <div class="feature-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <h4>Fast and Reliable Service</h4>
                    <p>Quick response times and efficient solutions for all jobs.</p>
                    </div>
                    <div class="feature">
                    <div class="feature-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l6 2.67V11c0 4.08-2.75 7.94-6 9-3.25-1.06-6-4.92-6-9V5.85l6-2.67z"/></svg>
                    </div>
                    <h4>Affordable Rates</h4>
                    <p>Transparent pricing with no hidden fees.</p>
                    </div>
                    <div class="feature">
                    <div class="feature-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>
                    <h4>Upfront Pricing</h4>
                    <p>Know your costs before work begins.</p>
                    </div>
                    <div class="feature">
                    <div class="feature-icon">
                        <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                    </div>
                    <h4>Comprehensive Services</h4>
                    <p>From repairs to installations, we handle it all.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <!-- Services -->
        <section class="services">
            <div class="container">
            <div class="section-label">🔧 Our Services</div>
            <h2>Comprehensive ${serviceName} for Your Need</h2>
            <div class="services-header">
                <a href="#">All Services →</a>
            </div>
            <div class="services-grid">
                <div class="service-card">
                <div class="service-emoji">🔧</div>
                <div class="card-content">
                    <h3>Pipe Repair</h3>
                    <p>Expert repair for leaks, bursts, and clogs.</p>
                    <a href="#">Learn More →</a>
                </div>
                </div>
                <div class="service-card">
                <div class="service-emoji">🚿</div>
                <div class="card-content">
                    <h3>Water Heater Installation</h3>
                    <p>Professional installation of energy-efficient heaters.</p>
                    <a href="#">Learn More →</a>
                </div>
                </div>
                <div class="service-card">
                <div class="service-emoji">🚰</div>
                <div class="card-content">
                    <h3>Drain Cleaning</h3>
                    <p>Effective cleaning for smooth drainage.</p>
                    <a href="#">Learn More →</a>
                </div>
                </div>
            </div>
            </div>
        </section>
        </body>
        </html>
        <!-- Replace static text with variables -->
    `;
}