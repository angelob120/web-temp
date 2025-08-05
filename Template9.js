// Template 9 - Service Blue with Hero Background Functionality
function generateTemplate9() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    const serviceNameUpper = serviceName.toUpperCase();
    const heroBackground = currentClient.backgroundImage || 'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/688a67fd3c5f729425ed6ae7.png';
    
    // Check if using custom background (not default)
    const isCustomBackground = currentClient.backgroundImage !== null;
    const overlayEffect = isCustomBackground 
        ? 'linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.7), rgba(96, 165, 250, 0.6))' // Stronger overlay for custom images
        : 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)'; // Original gradient for default
    
    return `
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
                    background-color: #fff;
                }

                /* Header */
                .header {
                    background: #fff;
                    padding: 15px 0;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }

                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 24px;
                    font-weight: 800;
                    color: #1e40af;
                    letter-spacing: 1px;
                }

                .nav {
                    display: flex;
                    gap: 40px;
                    list-style: none;
                }

                .nav a {
                    text-decoration: none;
                    color: #4b5563;
                    font-weight: 500;
                    transition: color 0.3s;
                }

                .nav a:hover {
                    color: #1e40af;
                }

                .phone-header {
                    background: #1e40af;
                    color: white;
                    padding: 12px 24px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s;
                }

                .phone-header:hover {
                    background: #1d4ed8;
                    transform: translateY(-2px);
                }

                /* Hero Section with Smart Background */
                .hero {
                    position: relative;
                    color: white;
                    padding: 100px 0 80px;
                    overflow: hidden;
                    background: 
                        ${overlayEffect}${isCustomBackground ? `,
                        url('${heroBackground}')
                        center/cover no-repeat` : ''};
                    ${isCustomBackground ? 'backdrop-filter: blur(1px);' : ''}
                }

                /* Grid pattern overlay - only for default background */
                ${!isCustomBackground ? `
                .hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
                    opacity: 0.3;
                    z-index: 1;
                }
                ` : ''}

                /* Additional protection layer for custom backgrounds */
                ${isCustomBackground ? `
                .hero::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(30, 64, 175, 0.2);
                    backdrop-filter: blur(2px);
                    z-index: 1;
                }
                ` : ''}

                .hero-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    position: relative;
                    z-index: 2;
                    display: grid;
                    grid-template-columns: 1fr 400px;
                    gap: 80px;
                    align-items: center;
                }

                .hero-content {
                    max-width: 700px;
                    width: 100%;
                    z-index: 3;
                }

                .hero-badge {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    padding: 12px 25px;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: 600;
                    display: inline-block;
                    margin-bottom: 40px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .hero h1 {
                    font-size: 4.5rem;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 40px;
                }

                .hero-highlight {
                    color: #fbbf24;
                }

                .hero p {
                    font-size: 1.4rem;
                    margin-bottom: 50px;
                    opacity: 0.95;
                    line-height: 1.7;
                    max-width: 600px;
                }

                .hero-buttons {
                    display: flex;
                    gap: 25px;
                    margin-bottom: 80px;
                }

                .btn-primary {
                    background: #fbbf24;
                    color: #1e40af;
                    padding: 18px 35px;
                    border-radius: 35px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1.1rem;
                    transition: all 0.3s;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 6px 25px rgba(251, 191, 36, 0.3);
                }

                .btn-primary:hover {
                    background: #f59e0b;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 35px rgba(251, 191, 36, 0.4);
                }

                .btn-secondary {
                    background: transparent;
                    color: white;
                    padding: 18px 35px;
                    border: 2px solid white;
                    border-radius: 35px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: all 0.3s;
                }

                .btn-secondary:hover {
                    background: white;
                    color: #1e40af;
                }

                .hero-stats {
                    display: flex;
                    gap: 60px;
                    margin-top: 60px;
                }

                .stat-item {
                    text-align: left;
                }

                .stat-number {
                    font-size: 3.2rem;
                    font-weight: 800;
                    color: #fbbf24;
                    margin-bottom: 8px;
                    line-height: 1;
                }

                .stat-label {
                    font-size: 1rem;
                    opacity: 0.9;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                }

                /* Hero Lead Form */
                .hero-form {
                    background: rgba(255, 255, 255, 0.95);
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    z-index: 3;
                    position: relative;
                }

                .hero-form h3 {
                    color: #1e40af;
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    text-align: center;
                }

                .hero-form .form-subtitle {
                    color: #6b7280;
                    text-align: center;
                    margin-bottom: 30px;
                    font-size: 0.95rem;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid #e5e7eb;
                    border-radius: 10px;
                    font-size: 16px;
                    transition: all 0.3s;
                    background: white;
                    color: #1f2937;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #1e40af;
                    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
                }

                .form-group textarea {
                    height: 100px;
                    resize: vertical;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }

                .form-submit {
                    width: 100%;
                    background: linear-gradient(135deg, #1e40af, #3b82f6);
                    color: white;
                    padding: 18px;
                    border: none;
                    border-radius: 10px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                    margin-top: 10px;
                }

                .form-submit:hover {
                    background: linear-gradient(135deg, #1d4ed8, #2563eb);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(30, 64, 175, 0.3);
                }

                .form-note {
                    color: #6b7280;
                    font-size: 0.85rem;
                    text-align: center;
                    margin-top: 15px;
                }

                /* Services Section */
                .services {
                    padding: 100px 0;
                    background: #f8fafc;
                }

                .services-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .services-content h3 {
                    color: #1e40af;
                    font-size: 1rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                }

                .services-content h2 {
                    font-size: 2.8rem;
                    color: #1f2937;
                    margin-bottom: 30px;
                    line-height: 1.2;
                    font-weight: 700;
                }

                .services-content p {
                    color: #6b7280;
                    margin-bottom: 40px;
                    font-size: 1.1rem;
                    line-height: 1.8;
                }

                .service-features {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    margin-bottom: 40px;
                }

                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    background: white;
                    padding: 25px;
                    border-radius: 15px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s;
                }

                .feature-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                }

                .feature-icon {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #1e40af, #3b82f6);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    flex-shrink: 0;
                }

                .feature-text h4 {
                    font-size: 1.2rem;
                    color: #1f2937;
                    margin-bottom: 8px;
                    font-weight: 600;
                }

                .feature-text p {
                    color: #6b7280;
                    font-size: 0.95rem;
                    margin: 0;
                    line-height: 1.6;
                }

                .services-cta {
                    background: #1e40af;
                    color: white;
                    padding: 15px 35px;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s;
                }

                .services-cta:hover {
                    background: #1d4ed8;
                    transform: translateY(-2px);
                }

                .services-image {
                    background: #e5e7eb;
                    height: 500px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #6b7280;
                    font-size: 1.5rem;
                    font-weight: 600;
                    position: relative;
                    overflow: hidden;
                }

                .services-image::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, transparent 30%, rgba(30, 64, 175, 0.05) 50%, transparent 70%);
                }

                /* Recent Work Section */
                .recent-work {
                    padding: 80px 0 0;
                    background: white;
                    position: relative;
                }

                .recent-work-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section-header h3 {
                    color: #1e40af;
                    font-size: 1rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                }

                .section-header h2 {
                    font-size: 2.5rem;
                    color: #1f2937;
                    margin-bottom: 20px;
                    font-weight: 700;
                }

                .section-header p {
                    color: #6b7280;
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-bottom: 40px;
                }

                .project-card {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s;
                    display: flex;
                    align-items: flex-start;
                    gap: 25px;
                }

                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
                }

                .project-emoji {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #1e40af, #3b82f6);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    flex-shrink: 0;
                    color: white;
                    box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
                }

                .project-content {
                    flex: 1;
                }

                .project-content h4 {
                    font-size: 1.3rem;
                    color: #1f2937;
                    margin-bottom: 12px;
                    font-weight: 600;
                }

                .project-content p {
                    color: #6b7280;
                    font-size: 1rem;
                    line-height: 1.6;
                }

                /* Cut-off effect */
                .cutoff-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(transparent, rgba(255, 255, 255, 0.95) 60%, white 100%);
                    pointer-events: none;
                }

                .cutoff-line {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    height: 2px;
                    background: repeating-linear-gradient(
                        90deg,
                        #6b7280,
                        #6b7280 10px,
                        transparent 10px,
                        transparent 20px
                    );
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .header-container {
                        flex-direction: column;
                        gap: 20px;
                    }

                    .nav {
                        gap: 20px;
                    }

                    .hero-container {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .hero-form {
                        padding: 30px 25px;
                    }

                    .hero-form h3 {
                        font-size: 1.5rem;
                    }

                    .form-row {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .hero h1 {
                        font-size: 3rem;
                    }

                    .hero p {
                        font-size: 1.2rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15px;
                    }

                    .btn-primary,
                    .btn-secondary {
                        padding: 15px 30px;
                        font-size: 1rem;
                    }

                    .hero-stats {
                        flex-direction: column;
                        gap: 25px;
                        margin-top: 50px;
                    }

                    .stat-number {
                        font-size: 2.5rem;
                    }

                    .services-container {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }

                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 25px;
                    }

                    .project-card {
                        flex-direction: column;
                        text-align: center;
                        gap: 20px;
                    }

                    .project-emoji {
                        width: 70px;
                        height: 70px;
                        font-size: 2rem;
                        margin: 0 auto;
                    }

                    .section-header h2 {
                        font-size: 2rem;
                    }

                    .services-content h2 {
                        font-size: 2.2rem;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Header -->
            <header class="header">
                <div class="header-container">
                    <div class="logo">${companyName}</div>
                    <nav>
                        <ul class="nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="tel:${phoneNumber}" class="phone-header">${phoneNumber}</a>
                </div>
            </header>

            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-container">
                    <div class="hero-content">
                        <div class="hero-badge">PROFESSIONAL ${serviceNameUpper} EXPERTS</div>
                        <h1>Trusted <span class="hero-highlight">${serviceName}</span><br>Services You Can Count On</h1>
                        <p>We provide top-quality ${serviceName} solutions with professional expertise, reliable service, and competitive pricing. Your satisfaction is our priority.</p>
                        <div class="hero-buttons">
                            <a href="tel:${phoneNumber}" class="btn-primary">
                                ${phoneNumber} →
                            </a>
                            <a href="#services" class="btn-secondary">Our Services</a>
                        </div>
                        <div class="hero-stats">
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
                                <div class="stat-label">Available Service</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Lead Form -->
                    <div class="hero-form">
                        <h3>${phoneNumber}</h3>
                        <p class="form-subtitle">Fill out the form and we'll contact you within 24 hours</p>
                        <form>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" placeholder="First Name*" required>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Last Name*" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email Address*" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" placeholder="Phone Number*" required>
                            </div>
                            <div class="form-group">
                                <select required>
                                    <option value="">Select Service Type*</option>
                                    <option value="emergency">Emergency Service</option>
                                    <option value="installation">Installation</option>
                                    <option value="repair">Repair</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="consultation">Consultation</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Describe your project or issue..." rows="3"></textarea>
                            </div>
                            <button type="submit" class="form-submit">Get My Free Quote</button>
                            <p class="form-note">*No obligation. Your information is secure and private.</p>
                        </form>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="services">
                <div class="services-container">
                    <div class="services-content">
                        <h3>Our Services</h3>
                        <h2>Professional ${serviceName} Solutions</h2>
                        <p>We deliver comprehensive ${serviceName} services that meet the highest industry standards. Our experienced team uses quality materials and proven techniques to ensure lasting results.</p>
                        
                        <div class="service-features">
                            <div class="feature-item">
                                <div class="feature-icon">⚡</div>
                                <div class="feature-text">
                                    <h4>Fast Response Time</h4>
                                    <p>Quick and efficient service when you need it most. We understand urgency and respond accordingly.</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">🛡️</div>
                                <div class="feature-text">
                                    <h4>Licensed & Insured</h4>
                                    <p>Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">💎</div>
                                <div class="feature-text">
                                    <h4>Quality Guarantee</h4>
                                    <p>We stand behind our work with solid warranties and satisfaction guarantees on all services.</p>
                                </div>
                            </div>
                        </div>

                        <a href="tel:${phoneNumber}" class="services-cta">
                            ${phoneNumber} →
                        </a>
                    </div>
                    <div class="services-image">
                        GMB IMAGE
                    </div>
                </div>
            </section>

            <!-- Recent Work Section -->
            <section class="recent-work">
                <div class="recent-work-container">
                    <div class="section-header">
                        <h3>Our Recent Work</h3>
                        <h2>Latest ${serviceName} Projects</h2>
                        <p>Take a look at some of our recent successful projects and see the quality workmanship we deliver to every customer.</p>
                    </div>
                    
                    <div class="projects-grid">
                        <div class="project-card">
                            <div class="project-emoji">🏠</div>
                            <div class="project-content">
                                <h4>Residential ${serviceName}</h4>
                                <p>Complete ${serviceName} solution for a family home, delivered on time and within budget with exceptional quality and attention to detail.</p>
                            </div>
                        </div>
                        <div class="project-card">
                            <div class="project-emoji">🏢</div>
                            <div class="project-content">
                                <h4>Commercial ${serviceName}</h4>
                                <p>Professional ${serviceName} installation for a local business with high-quality results that exceeded client expectations and industry standards.</p>
                            </div>
                        </div>
                        <div class="project-card">
                            <div class="project-emoji">🚨</div>
                            <div class="project-content">
                                <h4>Emergency ${serviceName}</h4>
                                <p>Quick response emergency service that saved the day for our customer, providing immediate solutions when they needed it most.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Cut-off effect -->
                <div class="cutoff-overlay"></div>
                <div class="cutoff-line"></div>
            </section>
        </body>
        </html>
    `;
}