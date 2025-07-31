function generateTemplate6() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    
    return `
        <!-- PASTE THE ENTIRE HTML CONTENT FROM persurewashing.html HERE -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${companyName}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333;
                }

                /* Header Styles */
                .header {
                    background: linear-gradient(135deg, #4a90e2, #5ba3f5);
                    padding: 0;
                    position: relative;
                }

                .header-top {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 12px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding-left: 40px;
                    padding-right: 40px;
                }

                .header-top .contact-info {
                    color: white;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 30px;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .contact-icon {
                    width: 20px;
                    height: 20px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }

                .nav-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px 40px;
                    background: white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }

                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    color: #4a90e2;
                }

                .logo-circle {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #4a90e2, #357abd);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 14px;
                    text-align: center;
                    margin-right: 15px;
                    position: relative;
                    border: 3px solid #e6f3ff;
                }

                .logo-circle::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 0;
                    height: 0;
                    border-left: 12px solid transparent;
                    border-right: 12px solid transparent;
                    border-bottom: 20px solid white;
                    margin-bottom: 5px;
                }

                .logo-circle::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-bottom: 14px solid white;
                    margin-top: 8px;
                    margin-left: -15px;
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                }

                .logo-main {
                    font-size: 24px;
                    font-weight: 900;
                    color: #2c5282;
                    letter-spacing: 1px;
                }

                .logo-sub {
                    font-size: 11px;
                    color: #4a90e2;
                    font-weight: 600;
                    letter-spacing: 2px;
                    margin-top: -3px;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 40px;
                    margin: 0;
                    padding: 0;
                }

                .nav-menu a {
                    text-decoration: none;
                    color: #2c5282;
                    font-weight: 600;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    transition: color 0.3s;
                    text-transform: uppercase;
                }

                .nav-menu a:hover {
                    color: #4a90e2;
                }

                /* Hero Section */
                .hero {
                    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                                url('https://assets.cdn.filesafe.space/9aI7DS58vHcQK7AjltLU/media/6602b83b3828fe131fcfed81.gif');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    height: 50vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    position: relative;
                }

                .hero-content {
                    max-width: 800px;
                    padding: 0 20px;
                }

                .hero-badge {
                    background: rgba(74, 144, 226, 0.9);
                    padding: 10px 30px;
                    border-radius: 25px;
                    display: inline-block;
                    margin-bottom: 30px;
                    font-size: 14px;
                    font-weight: 600;
                }

                .hero h1 {
                    font-size: 3.5rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }

                .hero p {
                    font-size: 1.2rem;
                    margin-bottom: 30px;
                    opacity: 0.9;
                }

                .cta-button {
                    background: #4a90e2;
                    color: white;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                    text-decoration: none;
                    display: inline-block;
                }

                .cta-button:hover {
                    background: #357abd;
                }

                /* Services Section */
                .services-intro {
                    padding: 80px 20px;
                    background: #f8f9fa;
                    position: relative;
                }

                .services-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                .services-images {
                    position: relative;
                }

                .services-collage {
                    width: 100%;
                    height: 600px;
                    background: url('https://assets.cdn.filesafe.space/YkevdkSEAp9LC9RbgeTP/media/4a84517a-11ab-4de3-a092-d2947add7d9b.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-radius: 10px;
                }

                .services-content h3 {
                    color: #4a90e2;
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                }

                .services-content h2 {
                    font-size: 2.5rem;
                    color: #2c5282;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .services-content p {
                    color: #666;
                    margin-bottom: 30px;
                }

                .feature-list {
                    list-style: none;
                    margin-bottom: 30px;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .feature-icon {
                    width: 50px;
                    height: 50px;
                    background: #e6f3ff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                    color: #4a90e2;
                    font-size: 20px;
                }

                .feature-text h4 {
                    color: #2c5282;
                    margin-bottom: 5px;
                }

                .feature-text p {
                    color: #666;
                    font-size: 14px;
                }

                .learn-more-btn {
                    background: #2c5282;
                    color: white;
                    padding: 12px 25px;
                    border: none;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                }

                .learn-more-btn:hover {
                    background: #1a365d;
                }

                /* How We Serve Section */
                .how-we-serve {
                    padding: 80px 20px;
                    background: white;
                    position: relative;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section-header h3 {
                    color: #4a90e2;
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                }

                .section-header h2 {
                    font-size: 2.5rem;
                    color: #2c5282;
                }

                .services-grid {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                }

                .service-card {
                    background: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    transition: transform 0.3s;
                }

                .service-card:hover {
                    transform: translateY(-5px);
                }

                .service-image {
                    height: 280px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    position: relative;
                    background-color: #f0f0f0;
                }

                .service-image::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(transparent, rgba(0,0,0,0.3));
                }

                .service-icon {
                    position: absolute;
                    bottom: 15px;
                    left: 15px;
                    width: 40px;
                    height: 40px;
                    background: white;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #4a90e2;
                    font-size: 20px;
                }

                .service-content {
                    padding: 15px;
                }

                .service-content h3 {
                    color: #2c5282;
                    margin-bottom: 8px;
                    font-size: 1.1rem;
                    line-height: 1.3;
                }

                .service-content p {
                    color: #666;
                    font-size: 13px;
                    margin-bottom: 12px;
                    line-height: 1.4;
                }

                .service-btn {
                    background: #4a90e2;
                    color: white;
                    padding: 8px 15px;
                    border: none;
                    border-radius: 5px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: background 0.3s;
                }

                .service-btn:hover {
                    background: #357abd;
                }

                /* Footer CTA */
                .footer-cta {
                    background: #2c5282;
                    color: white;
                    padding: 60px 20px;
                    text-align: center;
                }

                .footer-cta h2 {
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                }

                .footer-cta p {
                    font-size: 1.1rem;
                    opacity: 0.9;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .header-top {
                        flex-direction: column;
                        gap: 10px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }

                    .nav-container {
                        flex-direction: column;
                        gap: 20px;
                        padding: 20px;
                    }

                    .nav-menu {
                        gap: 15px;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .logo-circle {
                        width: 60px;
                        height: 60px;
                    }

                    .logo-main {
                        font-size: 20px;
                    }

                    .hero h1 {
                        font-size: 2.5rem;
                    }

                    .services-container {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }

                    .section-header h2,
                    .footer-cta h2 {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 1200px) and (min-width: 769px) {
                    .header-top {
                        padding-left: 20px;
                        padding-right: 20px;
                    }

                    .nav-container {
                        padding: 15px 20px;
                    }

                    .services-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 25px;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Header -->
            <header class="header">
                <div class="header-top">
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon">📧</div>
                            <span>email@email.com</span>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon">📞</div>
                            <span>${phoneNumber}</span>
                        </div>
                    </div>
                </div>
                <nav class="nav-container">
                    <div class="logo">
                        <div class="logo-circle"></div>
                        <div class="logo-text">
                            <div class="logo-main">${companyName}</div>
                            <div class="logo-sub">${serviceName}</div>
                        </div>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#location">LOCATION</a></li>
                        <li><a href="#blog">BLOG</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </header>

            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-content">
                    <div class="hero-badge">WELCOME TO ${companyName}</div>
                    <h1>TOP RATED EXTERIOR HOME ${serviceName}</h1>
                    <p>We have over 200+ Reviews Between Google, Facebook, Angi and Nice Job.</p>
                    <a href="#quote" class="cta-button">${phoneNumber}</a>
                </div>
            </section>

            <!-- Services Introduction -->
            <section class="services-intro">
                <div class="services-container">
                    <div class="services-images">
                        <div class="services-collage"></div>
                    </div>
                    <div class="services-content">
                        <h3>${companyName}</h3>
                        <h2>Serving Professional Washing Services</h2>
                        <p>We specialize in delivering clean, dependable ${serviceName} services designed to enhance your home’s curb appeal and value. Every project is handled with precision, care, and a focus on customer satisfaction.</p>
                        
                        <ul class="feature-list">
                            <li class="feature-item">
                                <div class="feature-icon">👨‍🔧</div>
                                <div class="feature-text">
                                    <h4>Professional technicians</h4>
                                    <p>Our team is trained, certified, and committed to delivering quality workmanship on every ${serviceName} project.</p>
                                </div>
                            </li>
                            <li class="feature-item">
                                <div class="feature-icon">⚙️</div>
                                <div class="feature-text">
                                    <h4>Proven Experience</h4>
                                    <p>We've successfully completed a wide range of ${serviceName} jobs, bringing knowledge and reliability to every home we service.</p>
                                </div>
                            </li>
                        </ul>
                        
                        <button class="learn-more-btn">LEARN MORE >></button>
                    </div>
                </div>
            </section>

            <!-- How We Serve Section -->
            <section class="how-we-serve">
                <div class="section-header">
                    <h3>We are so glad you are here...</h3>
                    <h2>How Can We Best Serve You?</h2>
                </div>
                
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-image" style="background-image: url('https://assets.cdn.filesafe.space/YkevdkSEAp9LC9RbgeTP/media/0820876d-1773-46cb-ae8e-07e2060c7409.jpeg');">
                            <div class="service-icon">🏠</div>
                        </div>
                        <div class="service-content">
                            <h3>Pressure Washing</h3>
                            <p>Experience Our Professional Pressure Washing in Orlando FL. Contact us today either through our easy online quote form or by giving us a call.</p>
                            <button class="service-btn">Learn More >></button>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-image" style="background-image: url('https://assets.cdn.filesafe.space/YkevdkSEAp9LC9RbgeTP/media/a58af110-434e-4cec-abc0-df64cbd7a785.jpeg');">
                            <div class="service-icon">🏘️</div>
                        </div>
                        <div class="service-content">
                            <h3>House Washing</h3>
                            <p>Our House Washing professionals expect to use low pressure high volume system for house washing in Raleigh NC.</p>
                            <button class="service-btn">Learn More >></button>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-image" style="background-image: url('https://assets.cdn.filesafe.space/YkevdkSEAp9LC9RbgeTP/media/20d7a0cf-2787-41d3-9695-ba1d8bdc3a83.jpeg');">
                            <div class="service-icon">🪟</div>
                        </div>
                        <div class="service-content">
                            <h3>Window Cleaning</h3>
                            <p>Our Window Cleaning Service can see streaks and smudges all over their windows day to day and regular store-bought cleaners just don't get the job done completely.</p>
                            <button class="service-btn">Learn More >></button>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-image" style="background-image: url('https://assets.cdn.filesafe.space/YkevdkSEAp9LC9RbgeTP/media/9af62c33-5e90-4a54-8bb1-d52745eb4f0e.jpeg');">
                            <div class="service-icon">🏠</div>
                        </div>
                        <div class="service-content">
                            <h3>Roof Cleaning</h3>
                            <p>Experience Our Professional Roof Washing in Orlando FL. Contact us today either through our easy online quote form or by giving us a call.</p>
                            <button class="service-btn">Learn More >></button>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="service-image" style="background-image: url('https://assets.cdn.filesafe.space/YkevdkSEAp9LC9RbgeTP/media/09d62030-83b3-4d11-9b3a-1ec0008bd54d.jpeg');">
                            <div class="service-icon">🌧️</div>
                        </div>
                        <div class="service-content">
                            <h3>Gutter Cleaning</h3>
                            <p>Gutter cleaning can be quite important here in North Carolina as we have many trees, and rainy seasons affecting our gutters year round!</p>
                            <button class="service-btn">Learn More >></button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer CTA -->
            <section class="footer-cta">
                <h2>We Make Exterior Cleaning Fast & Easy</h2>
                <p>No need to wait, Pick Service and schedule your cleaning in 3 easy steps</p>
            </section>
        </body>
        </html>
        <!-- Replace static text with variables -->
    `;
}