// Template 10 - Pressure Washing
function generateTemplate10() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    const serviceNameUpper = serviceName.toUpperCase();
    const heroBackground = currentClient.backgroundImage || 'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/688a67fd3c5f729425ed6ae7.png';
    const isCustomBackground = currentClient.backgroundImage !== null;
    const overlayEffect = isCustomBackground 
        ? 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))' // Stronger overlay for custom images
        : 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'; // Lighter overlay for default

    return `
        <!-- PASTE THE ENTIRE HTML CONTENT FROM t4.html HERE -->
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
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    overflow-x: hidden;
                }

                /* Header */
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: rgba(15, 15, 15, 0.95);
                    backdrop-filter: blur(10px);
                    z-index: 1000;
                    padding: 1rem 0;
                    transition: all 0.3s ease;
                }

                .nav-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 2rem;
                }

                .logo {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: 2px;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 2.5rem;
                }

                .nav-menu a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }

                .nav-menu a:hover {
                    color: #e53e3e;
                }

                .nav-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #e53e3e, #ff6b6b);
                    transition: width 0.3s;
                }

                .nav-menu a:hover::after {
                    width: 100%;
                }

                .phone-btn {
                    background: linear-gradient(135deg, #e53e3e, #ff6b6b);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s;
                    box-shadow: 0 4px 15px rgba(229, 62, 62, 0.3);
                }

                .phone-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(229, 62, 62, 0.4);
                }

                /* Hero Section with Smart Overlay Protection */
                .hero {
                    height: calc(60vh);
                    background:
                        ${overlayEffect},
                        url('${heroBackground}');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    display: flex;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    ${isCustomBackground ? 'backdrop-filter: blur(1px);' : ''}
                }

                .hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, transparent 0%, rgba(229, 62, 62, 0.1) 50%, transparent 100%);
                    animation: shimmer 3s ease-in-out infinite;
                }

                @keyframes shimmer {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }

                .hero-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 8rem 2rem 4rem 2rem;
                    display: grid;
                    grid-template-columns: 1fr 400px;
                    gap: 4rem;
                    align-items: center;
                    z-index: 2;
                    position: relative;
                }

                .hero-content {
                    color: #fff;
                }

                .hero-badge {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.15);
                    color: #fff;
                    padding: 0.5rem 1.5rem;
                    border-radius: 30px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .hero h1 {
                    font-size: 4rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .hero .highlight {
                    color: #e53e3e;
                }

                .hero p {
                    font-size: 1.2rem;
                    margin-bottom: 2.5rem;
                    opacity: 0.9;
                    max-width: 500px;
                }

                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #e53e3e, #ff6b6b);
                    color: white;
                    padding: 1rem 2.5rem;
                    border: none;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: all 0.3s;
                    box-shadow: 0 4px 15px rgba(229, 62, 62, 0.3);
                }

                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(229, 62, 62, 0.4);
                }

                .btn-secondary {
                    background: transparent;
                    color: white;
                    padding: 1rem 2.5rem;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: all 0.3s;
                    backdrop-filter: blur(10px);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.5);
                    transform: translateY(-3px);
                }

                /* Hero Stats */
                .hero-stats {
                    margin-top: 2rem;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    margin-top: 2rem;
                }

                .stat-item {
                    text-align: center;
                    color: #fff;
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 900;
                    background: linear-gradient(135deg, #e53e3e, #ff6b6b);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-size: 0.9rem;
                    opacity: 0.8;
                    font-weight: 500;
                }

                /* Contact Form */
                .contact-form {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border-radius: 20px;
                    padding: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                }

                .form-title {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    color: #333;
                    font-size: 1rem;
                    transition: all 0.3s;
                    backdrop-filter: blur(10px);
                }

                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: #666;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #e53e3e;
                    background: rgba(255, 255, 255, 0.95);
                }

                .form-group textarea {
                    resize: vertical;
                    height: 100px;
                }

                .form-submit {
                    width: 100%;
                    background: linear-gradient(135deg, #e53e3e, #ff6b6b);
                    color: white;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 4px 15px rgba(229, 62, 62, 0.3);
                }

                .form-submit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(229, 62, 62, 0.4);
                }

                /* Service Section */
                .service-section {
                    padding: 6rem 0;
                    background: #fff;
                    position: relative;
                }

                .service-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 200px;
                    background: linear-gradient(180deg, #f8f9fa 0%, transparent 100%);
                }

                .service-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: 1fr 500px;
                    gap: 4rem;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }

                .service-content h2 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    color: #1a1a1a;
                    line-height: 1.2;
                }

                .service-content .highlight {
                    color: #e53e3e;
                }

                .service-content p {
                    font-size: 1.1rem;
                    color: #666;
                    margin-bottom: 2rem;
                    line-height: 1.8;
                }

                .features-list {
                    margin-bottom: 2.5rem;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding: 1rem;
                    background: #f8f9fa;
                    border-radius: 15px;
                    transition: all 0.3s;
                }

                .feature-item:hover {
                    background: #fff;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                    transform: translateX(5px);
                }

                .feature-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #e53e3e, #ff6b6b);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 1rem;
                    font-size: 1.5rem;
                }

                .feature-text {
                    font-weight: 600;
                    color: #333;
                }

                .service-image {
                    position: relative;
                }

                .image-container {
                    width: 100%;
                    height: 600px;
                    background: #e2e8f0;
                    border-radius: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: #64748b;
                    font-weight: 600;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                }

                .image-container::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent 0%, rgba(229, 62, 62, 0.05) 50%, transparent 100%);
                    animation: rotate 10s linear infinite;
                }

                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Recent Work Section */
                .recent-work {
                    background: #1a1a1a;
                    color: #fff;
                    padding: 4rem 0;
                    position: relative;
                    overflow: hidden;
                }

                .recent-work::after {
                    content: '';
                    position: absolute;
                    bottom: -100px;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(180deg, #1a1a1a 0%, transparent 100%);
                }

                .work-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-badge {
                    display: inline-block;
                    background: rgba(229, 62, 62, 0.1);
                    color: #e53e3e;
                    padding: 0.5rem 1.5rem;
                    border-radius: 30px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    border: 1px solid rgba(229, 62, 62, 0.2);
                }

                .section-header h2 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                }

                .section-header p {
                    font-size: 1.1rem;
                    opacity: 0.7;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .work-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    margin-bottom: 2rem;
                }

                .work-item {
                    background: #2a2a2a;
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.3s;
                    position: relative;
                }

                .work-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(229, 62, 62, 0.2);
                }

                .work-image {
                    width: 100%;
                    height: 250px;
                    background: #404040;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 5rem;
                    color: #888;
                    font-weight: 600;
                    position: relative;
                }

                .work-image::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(45deg, rgba(229, 62, 62, 0.1) 0%, transparent 50%, rgba(229, 62, 62, 0.1) 100%);
                }

                .work-content {
                    padding: 1.5rem;
                }

                .work-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: #fff;
                }

                .work-description {
                    color: #ccc;
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                /* Cut-off effect */
                .recent-work {
                    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
                    margin-bottom: -100px;
                }

                /* Responsive Design */
                @media (max-width: 1200px) {
                    .hero-container,
                    .service-container {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                        text-align: center;
                    }

                    .contact-form {
                        max-width: 400px;
                        margin: 0 auto;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }

                    .work-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .nav-container {
                        flex-direction: column;
                        gap: 1rem;
                        padding: 1rem;
                    }

                    .nav-menu {
                        gap: 1.5rem;
                    }

                    .hero h1 {
                        font-size: 2.5rem;
                    }

                    .service-content h2,
                    .section-header h2 {
                        font-size: 2rem;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }

                    .work-grid {
                        grid-template-columns: 1fr;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary,
                    .btn-secondary {
                        width: 100%;
                        max-width: 300px;
                        text-align: center;
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
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="tel:${phoneNumber}" class="phone-btn">${phoneNumber}</a>
                </nav>
            </header>

            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-container">
                    <div class="hero-content">
                        <div class="hero-badge">TRUSTED LOCAL EXPERTS FOR ${serviceNameUpper}</div>
                        <h1>Professional <span class="highlight">${serviceName}</span> Solutions You Can Trust</h1>
                        <p>Experience exceptional service quality with our certified professionals. We deliver reliable, efficient, and affordable solutions for all your home service needs.</p>
                        <div class="hero-buttons">
                            <a href="tel:${phoneNumber}" class="btn-primary">${phoneNumber}</a>
                            <a href="#services" class="btn-secondary">Our Services</a>
                        </div>
                        
                        <!-- Stats moved to bottom of hero content -->
                        <div class="hero-stats">
                            <div class="stats-grid">
                                <div class="stat-item">
                                    <div class="stat-number">500+</div>
                                    <div class="stat-label">Happy Customers</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">15+</div>
                                    <div class="stat-label">Years Experience</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">24/7</div>
                                    <div class="stat-label">Emergency Service</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">100%</div>
                                    <div class="stat-label">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Form replacing stats card -->
                    <div class="contact-form">
                        <h3 class="form-title">Get Your Free Quote</h3>
                        <form>
                            <div class="form-group">
                                <input type="text" placeholder="Your Name*" required>
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email Address*" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" placeholder="Phone Number*" required>
                            </div>
                            <div class="form-group">
                                <select required>
                                    <option value="">Select Service*</option>
                                    <option value="emergency">Emergency Service</option>
                                    <option value="maintenance">Routine Maintenance</option>
                                    <option value="installation">New Installation</option>
                                    <option value="consultation">Free Consultation</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Describe your project or issue..." rows="4"></textarea>
                            </div>
                            <button type="submit" class="form-submit">Request Free Quote</button>
                        </form>
                    </div>
                </div>
            </section>

            <!-- Service Section -->
            <section class="service-section">
                <div class="service-container">
                    <div class="service-content">
                        <h2>Why Choose Our <span class="highlight">${serviceName}</span> Services?</h2>
                        <p>We understand that your home is your most valuable investment. That's why we provide top-quality service with attention to detail, using only the best materials and latest techniques to ensure lasting results.</p>
                        
                        <div class="features-list">
                            <div class="feature-item">
                                <div class="feature-icon">⚡</div>
                                <div class="feature-text">Fast & Reliable Emergency Response</div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">🛡️</div>
                                <div class="feature-text">Fully Licensed & Insured Professionals</div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">💰</div>
                                <div class="feature-text">Transparent Pricing with No Hidden Fees</div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">✅</div>
                                <div class="feature-text">100% Satisfaction Guarantee</div>
                            </div>
                        </div>
                        
                        <a href="tel:${phoneNumber}" class="btn-primary">Call Now for Free Estimate</a>
                    </div>
                    <div class="service-image">
                        <div class="image-container">
                            GMB IMAGE
                        </div>
                    </div>
                </div>
            </section>

            <!-- Recent Work Section -->
            <section class="recent-work">
                <div class="work-container">
                    <div class="section-header">
                        <div class="section-badge">OUR PORTFOLIO</div>
                        <h2>Recent Work & Projects</h2>
                        <p>Take a look at some of our recent completed projects and see the quality workmanship we deliver to every customer.</p>
                    </div>
                    
                    <div class="work-grid">
                        <div class="work-item">
                            <div class="work-image">🏠</div>
                            <div class="work-content">
                                <div class="work-title">Complete Home Service</div>
                                <div class="work-description">Full service installation and maintenance for residential property with modern upgrades and solutions.</div>
                            </div>
                        </div>
                        <div class="work-item">
                            <div class="work-image">🚨</div>
                            <div class="work-content">
                                <div class="work-title">Emergency Repair Job</div>
                                <div class="work-description">Quick response emergency service completed within 2 hours, restoring full functionality to the system.</div>
                            </div>
                        </div>
                        <div class="work-item">
                            <div class="work-image">⚙️</div>
                            <div class="work-content">
                                <div class="work-title">System Upgrade</div>
                                <div class="work-description">Modern system upgrade with energy-efficient solutions and smart home integration capabilities.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
        </html>
    `;
}
