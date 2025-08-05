// Template 4 - HVAC Service with Hero Background Functionality
function generateTemplate4() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    const heroBackground = currentClient.backgroundImage || 'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/688a5e00e7e7692b58fd2cb7.png';
    
    // Check if using custom background (not default)
    const isCustomBackground = currentClient.backgroundImage !== null;
    const overlayEffect = isCustomBackground 
        ? 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))' // Stronger overlay for custom images
        : 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))'; // Original overlay for default
    
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Gardens of Distinction</title>
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
                }

                /* Header */
                .header {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: 20px 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .nav {
                    display: flex;
                    list-style: none;
                    gap: 40px;
                }

                .nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 16px;
                    transition: opacity 0.3s;
                }

                .nav a:hover {
                    opacity: 0.8;
                }

                .phone-btn {
                    background: white;
                    color: #333;
                    padding: 12px 24px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 500;
                    transition: transform 0.3s;
                }

                .phone-btn:hover {
                    transform: translateY(-2px);
                }

                /* Hero Section with Smart Background System */
                .hero {
                    height: 60vh;
                    position: relative;
                    background: 
                        ${overlayEffect},
                        url('${heroBackground}');
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: white;
                    padding: 0 50px;
                    ${isCustomBackground ? 'backdrop-filter: blur(1px);' : ''}
                }
                
                /* Additional protection layer for custom backgrounds */
                ${isCustomBackground ? `
                .hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(2px);
                    z-index: 1;
                }
                ` : ''}

                .hero-content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .hero h1 {
                    font-size: 5rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    line-height: 1.1;
                    max-width: 800px;
                    position: relative;
                    z-index: 3;
                }

                .hero p {
                    font-size: 18px;
                    margin-bottom: 40px;
                    max-width: 600px;
                    opacity: 0.9;
                    position: relative;
                    z-index: 3;
                }

                .hero-buttons {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 80px;
                    position: relative;
                    z-index: 3;
                }

                .btn-primary {
                    background: #2DA884;
                    color: white;
                    padding: 15px 30px;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s;
                }

                .btn-primary:hover {
                    background: #00ffeaff;
                    transform: translateY(-2px);
                }

                .btn-secondary {
                    background: white;
                    color: #333;
                    padding: 15px 30px;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s;
                }

                .btn-secondary:hover {
                    background: #f0f0f0;
                    transform: translateY(-2px);
                }

                /* Stats Section */
                .stats {
                    background: ${isCustomBackground ? 'rgba(255,255,255,0.98)' : 'white'};
                    padding: 30px;
                    border-radius: 15px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                    max-width: 800px;
                    margin: 0 auto;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    position: relative;
                    z-index: 3;
                    ${isCustomBackground ? 'backdrop-filter: blur(10px);' : ''}
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #2DA884;
                    margin-bottom: 5px;
                }

                .stat-label {
                    color: #666;
                    font-size: 14px;
                }

                /* Content Sections */
                .section {
                    padding: 100px 50px;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .section-title {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    line-height: 1.2;
                }

                .highlight {
                    color: #2DA884;
                }

                .section-description {
                    font-size: 18px;
                    color: #666;
                    margin-bottom: 50px;
                    max-width: 600px;
                }

                /* Private Plants Section */
                .private-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 50px;
                    align-items: start;
                }

                .service-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                .service-card {
                    background: #2DA884;
                    color: white;
                    padding: 30px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .service-icon {
                    width: 50px;
                    height: 50px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                }

                .service-content h3 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                }

                .service-content p {
                    font-size: 14px;
                    opacity: 0.9;
                }

                .image-placeholder {
                    background: #555;
                    height: 400px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.5rem;
                }

                /* Services Grid */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-top: 50px;
                }

                .service-item {
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                    text-align: center;
                    transition: transform 0.3s;
                }

                .service-item:hover {
                    transform: translateY(-5px);
                }

                .service-item-icon {
                    width: 60px;
                    height: 60px;
                    background: #2DA884;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    color: white;
                    font-size: 24px;
                }

                .service-item h3 {
                    font-size: 1.3rem;
                    margin-bottom: 15px;
                }

                .service-item p {
                    color: #666;
                    font-size: 14px;
                }

                /* Testimonials Section */
                .testimonials {
                    background: #f8f9fa;
                    text-align: center;
                }

                .testimonials h2 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }

                .testimonials .section-description {
                    margin: 0 auto 50px;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .header {
                        padding: 20px;
                    }

                    .nav {
                        display: none;
                    }

                    .hero h1 {
                        font-size: 3rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .stats {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }

                    .private-section,
                    .services-grid {
                        grid-template-columns: 1fr;
                    }

                    .section {
                        padding: 50px 20px;
                    }

                    .section-title {
                        font-size: 2rem;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Header -->
            <header class="header">
                <div class="logo">${companyName}</div>
                <nav class="nav">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pages ▼</a>
                </nav>
                <a href="#" class="phone-btn">${phoneNumber}</a>
            </header>

            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-content">
                    <h1>Gardens of Distinction</h1>
                    <p>Transform your outdoor spaces into a masterpiece with our expert landscaping services. From irrigation solutions to comprehensive maintenance, we create stunning landscapes that enhance your property.</p>
                    <div class="hero-buttons">
                        <a href="#" class="btn-primary">Get Started</a>
                        <a href="#" class="btn-secondary">${phoneNumber}</a>
                    </div>
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-number">15+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">10K+</div>
                            <div class="stat-label">Projects</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">5K+</div>
                            <div class="stat-label">Satisfied Clients</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">87+</div>
                            <div class="stat-label">Local Team Members</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Private Plants Section -->
            <section class="section">
                <div class="container">
                    <h2 class="section-title">Caring For Your <span class="highlight">Private Plants</span>, Our Expertise</h2>
                    <p class="section-description">Every garden tells a story, and we're here to help write yours. Our dedicated team combines horticultural expertise with creative design to nurture outdoor spaces that flourish year-round.</p>
                    
                    <div class="private-section">
                        <div class="service-cards">
                            <div class="service-card">
                                <div class="service-icon">🏡</div>
                                <div class="service-content">
                                    <h3>Lawn Care</h3>
                                    <p>Professional lawn maintenance and restoration services that keep your grass healthy and perfectly manicured throughout every season.</p>
                                </div>
                            </div>
                            <div class="service-card">
                                <div class="service-icon">👁</div>
                                <div class="service-content">
                                    <h3>Our Vision</h3>
                                    <p>To create outdoor environments that inspire and endure, transforming ordinary spaces into extraordinary landscapes that bring daily joy.</p>
                                </div>
                            </div>
                        </div>
                        <div class="image-placeholder">
                            GMB IMAGE
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="section">
                <div class="container">
                    <h2 class="section-title">Our landscaping work and <span class="highlight">services</span></h2>
                    <p class="section-description">We offer comprehensive landscaping solutions tailored to your unique needs. Our skilled professionals use sustainable practices and premium materials to deliver exceptional results.</p>
                    
                    <div class="services-grid">
                        <div class="service-item">
                            <div class="service-item-icon">🌱</div>
                            <h3>Lawn Care</h3>
                            <p>Complete lawn maintenance including mowing, fertilization, and disease treatments to ensure your grass stays healthy and vibrant year-round.</p>
                        </div>
                        <div class="service-item">
                            <div class="service-item-icon">🌳</div>
                            <h3>Tree and <span class="highlight">Shrub Care</span></h3>
                            <p>Expert pruning, planting, and health assessments for trees and shrubs, promoting growth while maintaining natural landscape beauty.</p>
                        </div>
                        <div class="service-item">
                            <div class="service-item-icon">💬</div>
                            <h3>Free <span class="highlight">Consultations</span></h3>
                            <p>Complimentary property assessments and design consultations to help you envision the perfect outdoor space for your lifestyle.</p>
                        </div>
                        <div class="service-item">
                            <div class="service-item-icon">🎨</div>
                            <h3>Garden <span class="highlight">Design</span></h3>
                            <p>Custom garden planning and installation services that blend aesthetic appeal with practical functionality for relaxation and entertainment.</p>
                        </div>
                        <div class="service-item">
                            <div class="service-item-icon">💧</div>
                            <h3>Water <span class="highlight">Features</span></h3>
                            <p>Design and installation of fountains, ponds, and irrigation systems that add tranquil beauty while supporting landscape sustainability.</p>
                        </div>
                        <div class="service-item">
                            <div class="service-item-icon">🌿</div>
                            <h3>Irrigation <span class="highlight">Systems</span></h3>
                            <p>Smart watering solutions and automated systems that ensure optimal plant hydration while conserving water and reducing maintenance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials Section -->
            <section class="section testimonials">
                <div class="container">
                    <h2>See What They Are Saying About <span class="highlight">${companyName}</span></h2>
                    <p class="section-description">Our clients' satisfaction speaks to our commitment to excellence. From small garden makeovers to large estate transformations, we create outdoor spaces that bring lasting joy.</p>
                </div>
            </section>
        </body>
        </html>
    `;
}