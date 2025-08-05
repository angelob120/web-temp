// Template 5 - Construction Orange
function generateTemplate5() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    const heroBackground = currentClient.backgroundImage || 'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/688a7635a2af291018c3da77.png';
    
    // Check if using custom background (not default)
    const isCustomBackground = currentClient.backgroundImage !== null;
    const overlayOpacity = isCustomBackground ? '0.7' : '0.5'; // Stronger overlay for custom images
    
    return `
        <!-- PASTE THE ENTIRE HTML CONTENT FROM orangecons.html HERE -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>${companyName}</title>
        <style>
            :root {
            --yellow: #ffb600;
            --dark: #333;
            --light: #f9f9f9;
            --white: #fff;
            --black: #000;
            }
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body, html { font-family: Arial, sans-serif; color: var(--dark); }
            a { text-decoration: none; }

            /* Navbar */
            .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 40px;
            background: var(--white);
            }
            .navbar .logo {
            font-size: 1.5rem;
            font-weight: bold;
            }
            .navbar .nav-links {
            display: flex;
            gap: 20px;
            list-style: none;
            }
            .navbar .nav-links a {
            color: var(--dark);
            font-weight: 500;
            }
            .navbar .nav-links .dropdown::after {
            content: '▼';
            margin-left: 5px;
            font-size: 0.7rem;
            }
            .navbar .btn-phone {
            background: var(--yellow);
            color: var(--white);
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: 600;
            }

            /* Hero with Smart Overlay Protection */
            .hero {
            display: grid;
            grid-template-columns: 1fr 350px;
            min-height: 350px;
            background: url('${heroBackground}') center/cover no-repeat;
            position: relative;
            ${isCustomBackground ? 'backdrop-filter: blur(1px);' : ''}
            }
            
            .hero::before {
            content: '';
            position: absolute; 
            inset: 0;
            background: rgba(0,0,0,${overlayOpacity});
            z-index: 1;
            }
            
            /* Additional protection layer for custom backgrounds */
            ${isCustomBackground ? `
            .hero::after {
                content: '';
                position: absolute;
                inset: 0;
                background: rgba(0,0,0,0.2);
                backdrop-filter: blur(2px);
                z-index: 2;
            }
            ` : ''}
            
            .hero-content {
            position: relative;
            padding: 60px 40px;
            color: var(--white);
            z-index: 3;
            ${isCustomBackground ? 'text-shadow: 2px 2px 4px rgba(0,0,0,0.8);' : ''}
            }
            .hero-content h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            display: inline-block;
            position: relative;
            ${isCustomBackground ? 'text-shadow: 2px 2px 6px rgba(0,0,0,0.9);' : ''}
            }
            .hero-content h1::before {
            content: '';
            position: absolute;
            left: -30px; top: 50%;
            transform: translateY(-50%);
            width: 5px; height: 60%;
            background: var(--yellow);
            ${isCustomBackground ? 'box-shadow: 2px 2px 4px rgba(0,0,0,0.5);' : ''}
            }
            .hero-content p {
            max-width: 500px;
            line-height: 1.6;
            margin-bottom: 30px;
            ${isCustomBackground ? 'text-shadow: 1px 1px 3px rgba(0,0,0,0.8);' : ''}
            }
            .hero-content .btn-primary {
            background: var(--yellow);
            color: var(--white);
            padding: 8px 20px;
            border-radius: 5px;
            font-weight: 600;
            }

            .hero-services {
            position: relative;
            background: var(--yellow);
            padding: 40px 30px;
            color: var(--dark);
            z-index: 3;
            }

            .hero-services h2 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 0;
            }

            .services-list {
            list-style: none;
            margin-top: 20px;
            }

            .services-list li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            }

            .services-list .icon {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            font-size: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            }
            
            .services-list h3 {
            margin: 0 0 5px;
            font-size: 1rem;
            font-weight: 600;
            }
            .services-list p {
            margin: 0;
            font-size: 0.9rem;
            line-height: 1.4;
            }

            /* Quote section */
            .quote-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 40px;
            background: var(--white);
            }
            .quote-section h2 {
            font-size: 2rem;
            }
            .quote-section .btn-outline {
            padding: 10px 20px;
            border: 2px solid var(--yellow);
            border-radius: 5px;
            color: var(--yellow);
            font-weight: 600;
            }

            /* Projects section */
            .projects {
            display: flex;
            flex-wrap: wrap;
            }
            .projects-image {
            flex: 1 1 40%;
            background: var(--black);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-weight: bold;
            min-height: 300px;
            }
            .projects-content {
            flex: 1 1 60%;
            background: var(--light);
            padding: 60px 40px;
            }
            .projects-content h2 {
            font-size: 2rem;
            position: relative;
            display: inline-block;
            margin-bottom: 20px;
            }
            .projects-content h2::after {
            content: '';
            position: absolute;
            left: 0; bottom: -10px;
            width: 40px; height: 4px;
            background: var(--yellow);
            }
            .projects-content p {
            line-height: 1.6;
            margin: 15px 0;
            }
            .projects-content .btn-outline {
            margin-top: 20px;
            padding: 10px 20px;
            border: 2px solid var(--dark);
            border-radius: 5px;
            color: var(--dark);
            font-weight: 600;
            }

            /* Stats */
            .stats {
            display: flex;
            }
            .stat {
            flex: 1;
            padding: 30px 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            }
            .stat:nth-child(odd) {
            background: var(--yellow);
            color: var(--dark);
            }
            .stat:nth-child(even) {
            background: var(--dark);
            color: var(--white);
            }
            .stat-number {
            font-size: 2rem;
            font-weight: 700;
            }
            .stat-label {
            margin-top: 5px;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            }

            /* Latest Projects */
            .latest-projects {
            text-align: center;
            padding: 60px 0;
            background: var(--white);
            }
            .latest-projects h2 {
            font-size: 2rem;
            font-weight: 700;
            position: relative;
            display: inline-block;
            }
            .latest-projects h2::after {
            content: '';
            display: block;
            width: 40px;
            height: 4px;
            background: var(--yellow);
            margin: 10px auto 0;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .hero {
                    grid-template-columns: 1fr;
                    min-height: auto;
                }
                
                .hero-services {
                }
                
                .quote-section {
                    flex-direction: column;
                    gap: 20px;
                    text-align: center;
                }
                
                .projects {
                    flex-direction: column;
                }
                
                .projects-image {
                    min-height: 200px;
                }
            }
        </style>
        </head>
        <body>

        <nav class="navbar">
            <div class="logo">${companyName}</div>
            <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#" class="dropdown">Pages</a></li>
            </ul>
            <a href="#" class="btn-phone">${phoneNumber}</a>
        </nav>

        <section class="hero">
            <div class="hero-content">
            <h1>Professional ${serviceName} Solutions</h1>
            <p>We bring years of expertise and reliable craftsmanship to every project. From small repairs to major installations, our licensed professionals deliver quality work that stands the test of time. Your satisfaction is guaranteed, and we're committed to exceeding your expectations on every job.</p>
            <a href="#" class="btn-primary">${phoneNumber}</a>
            </div>
            <aside class="hero-services">
            <h2>Our Services</h2>
            <ul class="services-list">
                <li>
                <div class="icon">🏗️</div>
                <div>
                    <h3>Building Construction</h3>
                    <p>From framing to finishing, we offer reliable building solutions tailored to your project's needs.</p>
                </div>
                </li>
                <li>
                <div class="icon">🛠️</div>
                <div>
                    <h3>Renovation Services</h3>
                    <p>Whether updating a single room or refreshing your entire property, we deliver clean, professional results.</p>
                </div>
                </li>
                <li>
                <div class="icon">📋</div>
                <div>
                    <h3>Site Management</h3>
                    <p>Our professional oversight keeps your project organized, on-schedule, and stress-free from start to finish.</p>
                </div>
                </li>
            </ul>
            </aside>
        </section>

        <section class="quote-section">
            <h2>Get a Quote For Your Project</h2>
            <a href="#" class="btn-outline">Free Quote</a>
        </section>

        <section class="projects">
            <div class="projects-image">
            GMB Image
            </div>
            <div class="projects-content">
            <h2>No Project Too Big Or Too Small</h2>
            <p>Whether you need a simple repair or a complete system overhaul, we have the experience and equipment to handle jobs of any size. Our team of licensed professionals takes pride in delivering exceptional workmanship that meets the highest industry standards.</p>
            <p>We understand that your time is valuable, which is why we work efficiently without compromising quality. From the initial consultation to project completion, we maintain clear communication and respect your property as if it were our own.</p>
            <p>All our work comes with a satisfaction guarantee, and we're fully licensed and insured for your peace of mind.</p>
            <br>
            <a href="#" class="btn-outline">Learn More</a>
            </div>
        </section>

        <section class="stats">
            <div class="stat">
            <div class="stat-number">12</div>
            <div class="stat-label">Years Established</div>
            </div>
            <div class="stat">
            <div class="stat-number">250</div>
            <div class="stat-label">Completed Projects</div>
            </div>
        </section>

        <section class="latest-projects">
            <h2>Latest Projects</h2>
        </section>

        </body>
        </html>
        <!-- Replace static text with variables -->
    `;
}