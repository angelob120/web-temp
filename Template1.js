function generateTemplate1() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    const heroBackground = currentClient.backgroundImage || 'https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/688a67fd3c5f729425ed6ae7.png';
    
    // Check if using custom background (not default)
    const isCustomBackground = currentClient.backgroundImage !== null;
    const overlayEffect = isCustomBackground 
        ? 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))' // Stronger overlay for custom images
        : 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))'; // Lighter overlay for default
    
    return `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #fff;
                background-color: #1a1a1a;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }

            /* Header */
            header {
                background: rgba(0, 0, 0, 0.9);
                padding: 1rem 0;
                position: fixed;
                width: 100%;
                top: 0;
                z-index: 1000;
                backdrop-filter: blur(10px);
            }
            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .logo {
                font-size: 1.2rem;
                font-weight: bold;
                color: #FF6B35;
            }
            .nav-links {
                display: flex;
                list-style: none;
                gap: 2rem;
            }
            .nav-links a {
                color: #fff;
                text-decoration: none;
                transition: color 0.3s;
            }
            .nav-links a:hover {
                color: #FF6B35;
            }
            .nav-right {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .language-selector {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #fff;
            }
            .phone {
                background: #FF6B35;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 25px;
                text-decoration: none;
                transition: background 0.3s;
            }
            .phone:hover {
                background: #e55a2b;
            }

            /* Hero with Smart Overlay Protection */
            .hero {
                position: relative;
                padding-top: 5%;
                background:
                    ${overlayEffect},
                    url('${heroBackground}')
                    center/cover no-repeat;
                min-height: 45vh;
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
            
            .hero-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                gap: 2rem;
                padding: 2rem 0;
                position: relative;
                height: 100%;
                z-index: 2;
            }
            .hero-content {
                max-width: 600px;
                z-index: 3;
                ${isCustomBackground ? 'text-shadow: 2px 2px 4px rgba(0,0,0,0.8);' : ''}
            }
            .hero h1 {
                font-size: 2.8rem;
                font-weight: bold;
                margin-bottom: 1rem;
                line-height: 1.1;
            }
            .hero h1 .highlight {
                color: #FF6B35;
            }
            .hero p {
                font-size: 1rem;
                margin-bottom: 1.5rem;
                opacity: 0.9;
            }
            .hero-buttons {
                display: flex;
                gap: 1rem;
                margin-bottom: 3rem;
            }
            .btn-primary {
                background: #FF6B35;
                color: white;
                padding: 1rem 2rem;
                border: none;
                border-radius: 25px;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                transition: all 0.3s;
                font-weight: 500;
            }
            .btn-primary:hover {
                background: #e55a2b;
                transform: translateY(-2px);
            }
            .btn-secondary {
                background: transparent;
                color: white;
                padding: 1rem 2rem;
                border: 2px solid white;
                border-radius: 25px;
                text-decoration: none;
                transition: all 0.3s;
                font-weight: 500;
            }
            .btn-secondary:hover {
                background: white;
                color: #1a1a1a;
            }

            /* Stats moved under the buttons */
            .stats-inline {
                display: flex;
                justify-content: flex-start;
                gap: 3rem;
                margin-top: 1rem;
                z-index: 3;
                position: relative;
            }
            .stats-inline .stat-item {
                text-align: center;
            }
            .stats-inline .stat-number {
                font-size: 2.5rem;
                font-weight: bold;
                color: #FF6B35;
            }
            .stats-inline .stat-label {
                font-size: 0.9rem;
                opacity: 0.8;
                text-transform: uppercase;
                margin-top: 0.25rem;
                color: #fff;
            }

            /* right-cell stays empty for bg */
            .hero-right {
                /* nothing here */
            }

            /* Quality Box moved to bottom - now as a bar */
            .quality-bottom {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 107, 53, 0.95);
                padding: 1.5rem 2rem;
                border-radius: 15px;
                width: 90%;
                max-width: 1000px;
                z-index: 3;
                backdrop-filter: blur(10px);
            }
            .quality-items {
                display: flex;
                justify-content: space-around;
                align-items: center;
                gap: 2rem;
            }
            .quality-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.9rem;
                color: #fff;
                text-align: center;
                flex: 1;
            }
            .quality-item::before {
                content: "✓";
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                color: #fff;
                flex-shrink: 0;
            }

            /* Remove old bottom stats bar */
            .stats-bottom {
                display: none;
            }

            /* Experience Section */
            .experience {
                padding: 5rem 0;
                background: #2a2a2a;
            }
            .experience-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
                align-items: center;
            }
            .experience-image {
                background: #3a3a3a;
                height: 400px;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                color: #888;
            }
            .experience-text h2 {
                font-size: 3rem;
                margin-bottom: 1rem;
                color: #FF6B35;
            }
            .experience-text h3 {
                font-size: 2rem;
                margin-bottom: 2rem;
            }
            .experience-text p {
                margin-bottom: 1.5rem;
                opacity: 0.9;
                line-height: 1.8;
            }
            .experience-buttons {
                display: flex;
                gap: 1rem;
            }

            /* Footer Section */
            .footer-section {
                padding: 4rem 0;
                text-align: center;
            }
            .footer-section h2 {
                font-size: 2.5rem;
                margin-bottom: 3rem;
            }
            .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
            }
            .feature-item {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                font-size: 1.1rem;
                color: #fff;
            }
            .feature-item::before {
                content: "✓";
                background: #FF6B35;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: #fff;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .nav-links { display: none; }
                .hero h1 { font-size: 2.5rem; }
                .hero-container { grid-template-columns: 1fr; gap: 2rem; }
                .stats-inline {
                    flex-direction: column;
                    gap: 1rem;
                    margin-top: 1rem;
                    align-items: flex-start;
                }
                .quality-items {
                    flex-direction: column;
                    gap: 1rem;
                }
                .quality-bottom {
                    bottom: 1rem;
                    width: 95%;
                    padding: 1rem;
                }
                .experience-content { grid-template-columns: 1fr; text-align: center; }
                .features { grid-template-columns: 1fr; }
            }
        </style>
        </head>
        <body>
        <!-- Header -->
        <header>
            <nav class="container">
                <div class="logo">
                    ${companyName} 
                </div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About US</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#project">Project</a></li>
                </ul>
                <div class="nav-right">
                    <div class="language-selector">
                        🌐 English ▼
                    </div>
                    <a href="tel:${phoneNumber}" class="phone">${phoneNumber}</a>
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-container">
                    <!-- LEFT COLUMN -->
                    <div class="hero-content">
                        <h1>We Prepare<br>For The <span class="highlight">Future</span></h1>
                        <p>We provide the best architectural design, construction, and building maintenance services for you.</p>
                        <div class="hero-buttons">
                            <a href="#services" class="btn-primary">Our Services ⊕</a>
                            <a href="#project" class="btn-secondary">View Project</a>
                        </div>
                        <!-- Stats moved here under the buttons -->
                        <div class="stats-inline">
                            <div class="stat-item">
                                <div class="stat-number">25+</div>
                                <div class="stat-label">Years of<br>Experience</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">378+</div>
                                <div class="stat-label">Projects<br>Complete</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">69+</div>
                                <div class="stat-label">Winning<br>Global Awards</div>
                            </div>
                        </div>
                    </div>
                    <!-- RIGHT COLUMN (empty for bg) -->
                    <div class="hero-right"></div>
                </div>
                
                <!-- Quality Box moved to bottom as horizontal bar -->
                <div class="quality-bottom">
                    <div class="quality-items">
                        <div class="quality-item">Quality Control System, 100% Satisfaction Guarantee</div>
                        <div class="quality-item">Highly Professional Staff, Accurate Testing Processes</div>
                        <div class="quality-item">Unrivalled Workmanship, Professional and Qualified</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="experience">
            <div class="container">
                <div class="experience-content">
                    <div class="experience-image">
                        GMB IMAGE
                    </div>
                    <div class="experience-text">
                        <h2>We deliver high-quality You Can Trust</h2>
                        <p>Our team is made up of skilled experts dedicated to delivering top-tier ${serviceName} services. We combine industry knowledge, reliable workmanship, and attention to detail to ensure every job is done right.</p>
                        <p>Whether it's a routine service or a complex project, we follow the latest safety standards and best practices to give you results that last. From start to finish, your satisfaction is our priority.</p>
                        <div class="experience-buttons">
                            <a href="#services" class="btn-primary">Our Services ⊕</a>
                            <a href="#project" class="btn-secondary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Section -->
        <section class="footer-section">
            <div class="container">
                <h2>Leading Way In Building & ${serviceName}</h2>
                <div class="features">
                    <div class="feature-item">Professional Staff</div>
                    <div class="feature-item">100% Satisfaction</div>
                    <div class="feature-item">Accurate Testing</div>
                    <div class="feature-item">Transparent Pricing</div>
                </div>
            </div>
        </section>
        </body>
    `;
}