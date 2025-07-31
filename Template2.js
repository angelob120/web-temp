function generateTemplate2() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    
    return `
        <!-- PASTE THE ENTIRE HTML CONTENT FROM ConstructionCompany.html HERE -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Construction Company</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background-color: #1a1a1a;
                    color: white;
                }

                /* Header */
                .header {
                    background-color: #2d3748;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                }

                .nav {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                }

                .nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 0.9rem;
                }

                .nav a:hover {
                    color: #d4d4d4;
                }

                .phone-btn {
                    background-color: #d4e157;
                    color: #1a1a1a;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .phone-btn:hover {
                    background-color: #c0ca33;
                }

                /* Hero Section */
                .hero {
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/68899d9c8934ce50e00262ea.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    min-height: 40vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    padding: 2rem;
                }

                /* Fallback if image doesn't load */
                .hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
                    z-index: -1;
                }

                .hero-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .hero-left {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .company-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1rem;
                }

                .company-tag::before {
                    content: "🏠";
                    font-size: 1rem;
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 300;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                }

                .hero-description {
                    font-size: 1rem;
                    line-height: 1.6;
                    opacity: 0.9;
                    margin-bottom: 2rem;
                    max-width: 500px;
                }

                .hero-right {
                    text-align: right;
                }

                .year-badge {
                    font-size: 3rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }

                .quality-text {
                    font-size: 1rem;
                    opacity: 0.8;
                }

                /* Contact Section */
                .contact-section {
                    background-color: #1a1a1a;
                    padding: 4rem 2rem;
                }

                .contact-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .contact-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 2rem;
                    color: #d4e157;
                }

                .contact-tag::before {
                    content: "🏠";
                    font-size: 1rem;
                }

                .contact-title {
                    font-size: 3rem;
                    font-weight: 300;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                }

                .contact-description {
                    font-size: 1rem;
                    line-height: 1.6;
                    opacity: 0.9;
                    margin-bottom: 1.5rem;
                }

                .contact-btn {
                    background-color: #d4e157;
                    color: #1a1a1a;
                    padding: 1rem 2rem;
                    border: none;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }

                .contact-btn:hover {
                    background-color: #c0ca33;
                }

                .contact-image {
                    background-color: #9e9e9e;
                    height: 400px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                }

                /* Projects Section */
                .projects-section {
                    background-color: #1a1a1a;
                    padding: 4rem 2rem 2rem;
                }

                .projects-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .projects-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 2rem;
                    color: #d4e157;
                }

                .projects-tag::before {
                    content: "🏠";
                    font-size: 1rem;
                }

                .projects-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .projects-title {
                    font-size: 3rem;
                    font-weight: 300;
                }

                .explore-btn {
                    background-color: #d4e157;
                    color: #1a1a1a;
                    padding: 1rem 2rem;
                    border: none;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .explore-btn:hover {
                    background-color: #c0ca33;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .header {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .nav {
                        gap: 1rem;
                    }

                    .hero-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }

                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .contact-container {
                        grid-template-columns: 1fr;
                    }

                    .projects-header {
                        flex-direction: column;
                        gap: 2rem;
                        align-items: flex-start;
                    }

                    .contact-title,
                    .projects-title {
                        font-size: 2rem;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Header -->
            <header class="header">
                <div class="logo">${companyName}</div>
                <nav>
                    <ul class="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
                <a href="tel:" class="phone-btn">
                    ${phoneNumber} →
                </a>
            </header>

            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-content">
                    <div class="hero-left">
                        <div class="company-tag">${companyName}</div>
                        <h1 class="hero-title">Let ${companyName} do your next ${serviceName} </h1>
                        <p class="hero-description">
                            We bring years of experience and professional expertise directly to your doorstep. Our skilled team is committed to delivering exceptional results that exceed your expectations. From initial consultation to project completion, we ensure quality workmanship, transparent communication, and reliable ${serviceName} you can trust. Your satisfaction is our top priority, and we stand behind every job with our guarantee.
                        </p>
                        <a href="tel:" class="phone-btn">
                            ${phoneNumber} →
                        </a>
                    </div>
                    <div class="hero-right">
                        <div class="year-badge">2023</div>
                        <div class="quality-text">— Best Quality ${serviceName}</div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="contact-section">
                <div class="contact-container">
                    <div>
                        <div class="contact-tag">CONTACT US</div>
                        <h2 class="contact-title">Contact Us and Let's get to work</h2>
                        <p class="contact-description">
                            Getting a quote is simple and free. We'll assess your needs and provide honest, upfront pricing with no hidden fees.
                        </p>
                        <p class="contact-description">
                            Our licensed and insured professionals are ready to transform your vision into reality. We work around your schedule and treat your property with the respect it deserves. From small repairs to major projects, we deliver results that last.
                        </p>
                        <a href="#contact" class="contact-btn">
                            ${phoneNumber} →
                        </a>
                    </div>
                    <div class="contact-image">
                        GMB IMAge
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section class="projects-section">
                <div class="projects-container">
                    <div class="projects-tag">OUR PROJECTS</div>
                    <div class="projects-header">
                        <h2 class="projects-title">Recent Projects</h2>
                        <a href="#projects" class="explore-btn">
                            Explore More →
                        </a>
                    </div>
                </div>
            </section>
        </body>
        </html>

        <!-- Replace static text with variables -->

    `;
}