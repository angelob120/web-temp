// Template 6 - Pressure Washing
function generateTemplate8() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    const gmbImage = currentClient.gmbImage || '';
    
    return `
        <!-- PASTE THE ENTIRE HTML CONTENT FROM t2.html HERE -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${companyName} - Professional ${serviceName} Services</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #2d3748;
                    background-color: #ffffff;
                }

                /* Header & Navigation */
                .header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 0;
                    position: relative;
                    overflow: hidden;
                }

                .header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
                    z-index: 1;
                }

                .nav-container {
                    position: relative;
                    z-index: 2;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 20px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    color: white;
                    font-size: 24px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 40px;
                }

                .nav-menu a {
                    color: rgba(255, 255, 255, 0.9);
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 15px;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-menu a:hover {
                    color: white;
                    transform: translateY(-1px);
                }

                .nav-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: white;
                    opacity: 0;
                    transform: scaleX(0);
                    transition: all 0.3s ease;
                }

                .nav-menu a:hover::after {
                    opacity: 1;
                    transform: scaleX(1);
                }

                .phone-btn {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 12px 25px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }

                .phone-btn:hover {
                    background: white;
                    color: #ff6b35;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                }

                /* Hero Section */
                .hero {
                    position: relative;
                    z-index: 2;
                    padding: 80px 40px 120px;
                    text-align: center;
                    color: white;
                }

                .hero-container {
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .hero-badge {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    padding: 8px 20px;
                    border-radius: 25px;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-bottom: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .hero h1 {
                    font-size: 4.5rem;
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 25px;
                    letter-spacing: -2px;
                }

                .hero .highlight {
                    color: #ff6b35;
                }

                .hero p {
                    font-size: 1.3rem;
                    max-width: 700px;
                    margin: 0 auto 40px;
                    opacity: 0.9;
                    line-height: 1.6;
                }

                .hero-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    margin-bottom: 60px;
                }

                .btn-primary {
                    background: #ff6b35;
                    color: white;
                    padding: 18px 35px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
                }

                .btn-primary:hover {
                    background: #e55a2b;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 18px 35px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }

                .btn-secondary:hover {
                    background: white;
                    color: #ff6b35;
                    transform: translateY(-3px);
                }

                .stats-row {
                    display: flex;
                    justify-content: center;
                    gap: 80px;
                    margin-top: 40px;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 5px;
                    color: #ff6b35;
                }

                .stat-label {
                    font-size: 14px;
                    opacity: 0.8;
                    font-weight: 500;
                }

                /* Service Explanation Section */
                .service-section {
                    padding: 100px 40px;
                    background: #f8fafc;
                    position: relative;
                }

                .service-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .service-content h2 {
                    font-size: 3.5rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 25px;
                    color: #1a202c;
                    letter-spacing: -1px;
                }

                .service-content .highlight {
                    color: #ff6b35;
                }

                .service-content p {
                    font-size: 1.2rem;
                    color: #4a5568;
                    margin-bottom: 40px;
                    line-height: 1.7;
                }

                .features-list {
                    list-style: none;
                    margin-bottom: 40px;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    padding: 15px 0;
                }

                .feature-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #ff6b35, #e55a2b);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 20px;
                    color: white;
                    font-size: 20px;
                }

                .feature-text h4 {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 5px;
                    color: #1a202c;
                }

                .feature-text p {
                    font-size: 1rem;
                    color: #718096;
                    margin-bottom: 0;
                }

                .service-cta {
                    background: linear-gradient(135deg, #ff6b35, #e55a2b);
                    color: white;
                    padding: 18px 35px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 16px;
                    display: inline-block;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
                }

                .service-cta:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
                }

                .service-image {
                    position: relative;
                    height: 500px;
                    background: #e2e8f0;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #718096;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                }

                .service-image::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent 30%, rgba(255, 107, 53, 0.1) 50%, transparent 70%);
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }

                /* Recent Work Section (Cut-off Style) */
                .recent-work {
                    padding: 80px 40px 0;
                    background: white;
                    position: relative;
                    overflow: hidden;
                }

                .recent-work::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9));
                    pointer-events: none;
                }

                .work-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    text-align: center;
                }

                .section-badge {
                    display: inline-block;
                    background: #fff0ec;
                    color: #ff6b35;
                    padding: 8px 20px;
                    border-radius: 25px;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }

                .recent-work h2 {
                    font-size: 3.5rem;
                    font-weight: 800;
                    margin-bottom: 20px;
                    color: #1a202c;
                    letter-spacing: -1px;
                }

                .recent-work p {
                    font-size: 1.2rem;
                    color: #4a5568;
                    max-width: 600px;
                    margin: 0 auto 60px;
                }

                .work-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-bottom: 60px;
                }

                .work-item {
                    background: white;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                }

                .work-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
                }

                .work-image {
                    height: 200px;
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 4rem;
                    font-weight: 600;
                    color: #64748b;
                    position: relative;
                    overflow: hidden;
                }

                .work-image::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, #ff6b3520, #e55a2b20);
                }

                .work-content {
                    padding: 25px;
                }

                .work-content h3 {
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #1a202c;
                }

                .work-content p {
                    font-size: 1rem;
                    color: #64748b;
                    margin-bottom: 15px;
                }

                .work-tag {
                    display: inline-block;
                    background: #fff0ec;
                    color: #ff6b35;
                    padding: 5px 12px;
                    border-radius: 15px;
                    font-size: 12px;
                    font-weight: 600;
                }

                /* Screenshot Effect */
                .screenshot-border {
                    position: absolute;
                    bottom: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 98%;
                    height: 40px;
                    background: repeating-linear-gradient(
                        45deg,
                        #ff6b35,
                        #ff6b35 10px,
                        transparent 10px,
                        transparent 20px
                    );
                    opacity: 0.7;
                    border-radius: 0 0 10px 10px;
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                    .service-container {
                        grid-template-columns: 1fr;
                        gap: 60px;
                        text-align: center;
                    }

                    .stats-row {
                        gap: 40px;
                    }

                    .work-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .nav-container {
                        flex-direction: column;
                        gap: 20px;
                    }

                    .nav-menu {
                        gap: 20px;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .hero h1 {
                        font-size: 3rem;
                    }

                    .service-content h2,
                    .recent-work h2 {
                        font-size: 2.5rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .stats-row {
                        flex-direction: column;
                        gap: 30px;
                    }

                    .work-grid {
                        grid-template-columns: 1fr;
                    }

                    .hero,
                    .service-section,
                    .recent-work {
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Header -->
            <header class="header">
                <nav class="nav-container">
                    <div class="logo">${companyName}</div>
                    <ul class="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="tel:(PHONE)" class="phone-btn">${phoneNumber}</a>
                </nav>

                <!-- Hero Section -->
                <section class="hero">
                    <div class="hero-container">
                        <div class="hero-badge">Professional (${serviceName} Experts</div>
                        <h1>Transform Your Home with <span class="highlight">Expert ${serviceName}</span> Solutions</h1>
                        <p>We deliver exceptional ${serviceName} services that enhance your property's value, functionality, and aesthetic appeal. Our experienced professionals use cutting-edge techniques and premium materials.</p>
                        
                        <div class="hero-buttons">
                            <a href="tel:PHONE" class="btn-primary">${phoneNumber}</a>
                            <a href="#services" class="btn-secondary">View Services</a>
                        </div>

                        <div class="stats-row">
                            <div class="stat-item">
                                <div class="stat-number">15+</div>
                                <div class="stat-label">Years Experience</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">1000+</div>
                                <div class="stat-label">Happy Customers</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">24/7</div>
                                <div class="stat-label">Support Available</div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <!-- Service Explanation Section -->
            <section class="service-section">
                <div class="service-container">
                    <div class="service-content">
                        <h2>Why Choose Our <span class="highlight">${serviceName}</span> Services?</h2>
                        <p>We combine years of expertise with modern techniques to deliver outstanding results that exceed expectations. Our commitment to quality and customer satisfaction sets us apart in the industry.</p>
                        
                        <ul class="features-list">
                            <li class="feature-item">
                                <div class="feature-icon">🏆</div>
                                <div class="feature-text">
                                    <h4>Premium Quality Work</h4>
                                    <p>We use only the finest materials and proven techniques to ensure lasting results that stand the test of time.</p>
                                </div>
                            </li>
                            <li class="feature-item">
                                <div class="feature-icon">⚡</div>
                                <div class="feature-text">
                                    <h4>Fast & Reliable Service</h4>
                                    <p>Quick response times and efficient project completion without compromising on quality or attention to detail.</p>
                                </div>
                            </li>
                            <li class="feature-item">
                                <div class="feature-icon">💰</div>
                                <div class="feature-text">
                                    <h4>Transparent Pricing</h4>
                                    <p>No hidden fees or surprise charges. Get upfront, honest pricing with detailed quotes for every project.</p>
                                </div>
                            </li>
                            <li class="feature-item">
                                <div class="feature-icon">🛡️</div>
                                <div class="feature-text">
                                    <h4>Fully Insured & Licensed</h4>
                                    <p>Complete peace of mind with comprehensive insurance coverage and proper licensing for all our services.</p>
                                </div>
                            </li>
                        </ul>
                        
                        <a href="tel:(PHONE)" class="service-cta">${phoneNumber}</a>
                    </div>
                    
                    <div class="service-image">
                        ${gmbImage ? `<img src="${gmbImage}" alt="GMB Image" style="width:100%; height:100%; object-fit:cover;">` : 'GMB IMAGE'}
                    </div>

                </div>
            </section>

            <!-- Recent Work Section -->
            <section class="recent-work">
                <div class="work-container">
                    <div class="section-badge">Our Portfolio</div>
                    <h2>Recent Work & Projects</h2>
                    <p>Take a look at some of our latest completed projects that showcase our expertise and commitment to excellence in ${serviceName} services.</p>
                    
                    <div class="work-grid">
                        <div class="work-item">
                            <div class="work-image">🏠</div>
                            <div class="work-content">
                                <h3>Residential ${serviceName} Project</h3>
                                <p>Complete ${serviceName} solution for modern family home with premium materials and expert craftsmanship.</p>
                                <span class="work-tag">Completed</span>
                            </div>
                        </div>
                        
                        <div class="work-item">
                            <div class="work-image">🏢</div>
                            <div class="work-content">
                                <h3>Commercial ${serviceName} Installation</h3>
                                <p>Large-scale commercial project featuring innovative solutions and industry-leading techniques.</p>
                                <span class="work-tag">Featured</span>
                            </div>
                        </div>
                        
                        <div class="work-item">
                            <div class="work-image">🔧</div>
                            <div class="work-content">
                                <h3>Custom ${serviceName}</h3>
                                <p>Tailored solution designed specifically for unique requirements and aesthetic preferences.</p>
                                <span class="work-tag">Custom</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Screenshot Effect -->
                <div class="screenshot-border"></div>
            </section>
        </body>
        </html>
        <!-- Replace static text with variables -->
    `;
}