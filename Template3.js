// Template 3 - Construction Blue
function generateTemplate3() {
    const companyName = currentClient.name || '${companyName}';
    const serviceName = currentClient.service || '${serviceName}';
    const phoneNumber = currentClient.phone || '${phoneNumber}';
    
    return `
        <!-- PASTE THE ENTIRE HTML CONTENT FROM hvac.html HERE -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Company Service - Professional HVAC Solutions</title>
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

                /* Top Bar */
                .top-bar {
                    background: #f8f9fa;
                    padding: 10px 0;
                    font-size: 14px;
                    border-bottom: 1px solid #e9ecef;
                }

                .top-bar .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .contact-info {
                    display: flex;
                    gap: 30px;
                }

                .social-links {
                    display: flex;
                    gap: 15px;
                }

                .social-links a {
                    color: #666;
                    text-decoration: none;
                    font-size: 16px;
                }

                /* Header */
                .header {
                    background: white;
                    padding: 15px 0;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }

                .header .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 24px;
                    font-weight: bold;
                    color: #1a1a1a;
                }

                .nav {
                    display: flex;
                    gap: 40px;
                    list-style: none;
                }

                .nav a {
                    text-decoration: none;
                    color: #666;
                    font-weight: 500;
                    transition: color 0.3s;
                }

                .nav a:hover, .nav a.active {
                    color: #1e3a8a;
                }

                .phone-btn {
                    background: #1e3a8a;
                    color: white;
                    padding: 12px 25px;
                    border: none;
                    border-radius: 5px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.3s;
                }

                .phone-btn:hover {
                    background: #1e40af;
                }

                /* Hero Section */
                .hero {
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://storage.googleapis.com/msgsndr/4LY6N1zgk0vBmUYSulXh/media/688a6450c6431c3b96242abc.png');
                    background-size: cover;
                    background-position: center;
                    min-height: 50vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                }

                .hero .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: grid;
                    grid-template-columns: 1fr 400px;
                    gap: 60px;
                    align-items: center;
                }

                .hero-content {
                    color: white;
                }

                .hero-badge {
                    background: rgba(255,255,255,0.2);
                    color: white;
                    padding: 8px 20px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    display: inline-block;
                    margin-bottom: 30px;
                    backdrop-filter: blur(10px);
                }

                .hero h1 {
                    font-size: 48px;
                    line-height: 1.2;
                    margin-bottom: 40px;
                    font-weight: 700;
                }

                .testimonial {
                    background: white;
                    padding: 25px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    max-width: 350px;
                    position: relative;
                }

                .testimonial::before {
                    content: '"';
                    position: absolute;
                    top: -10px;
                    right: 20px;
                    background: #e74c3c;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: bold;
                }

                .testimonial-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 15px;
                }

                .testimonial-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: #ddd;
                }

                .stars {
                    color: #ffa500;
                    font-size: 18px;
                    margin-bottom: 10px;
                }

                .testimonial-text {
                    color: #555;
                    font-size: 14px;
                    line-height: 1.5;
                    margin-bottom: 15px;
                }

                .testimonial-author {
                    font-weight: bold;
                    color: #333;
                }

                /* Service Form */
                .service-form {
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }

                .service-form h3 {
                    color: #1e3a8a;
                    margin-bottom: 25px;
                    font-size: 24px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #333;
                }

                .form-group input,
                .form-group textarea,
                .form-group select {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 16px;
                    transition: border-color 0.3s;
                }

                .form-group input:focus,
                .form-group textarea:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: #1e3a8a;
                }

                .form-group textarea {
                    height: 100px;
                    resize: vertical;
                }

                .time-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .submit-btn {
                    width: 100%;
                    background: #1e3a8a;
                    color: white;
                    padding: 15px;
                    border: none;
                    border-radius: 5px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.3s;
                }

                .submit-btn:hover {
                    background: #1e40af;
                }

                /* Services Section */
                .services {
                    padding: 80px 0;
                    background: #f8f9fa;
                }

                .services .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                .section-header {
                    color: #e74c3c;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 15px;
                }

                .services h2 {
                    font-size: 36px;
                    color: #1e3a8a;
                    margin-bottom: 40px;
                    line-height: 1.2;
                }

                .service-step {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    margin-bottom: 40px;
                }

                .step-icon {
                    width: 60px;
                    height: 60px;
                    background: #1e3a8a;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    flex-shrink: 0;
                }

                .step-content h3 {
                    font-size: 20px;
                    margin-bottom: 10px;
                    color: #333;
                }

                .step-content p {
                    color: #666;
                    line-height: 1.6;
                }

                .services-image {
                    background: #ddd;
                    height: 400px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #999;
                    font-size: 18px;
                }



                /* FAQ Section */
                .faq {
                    padding: 80px 0;
                    background: #1e3a8a;
                    color: white;
                }

                .faq .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .faq h2 {
                    font-size: 36px;
                    margin-bottom: 20px;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .top-bar .container {
                        flex-direction: column;
                        gap: 10px;
                    }

                    .header .container {
                        flex-direction: column;
                        gap: 20px;
                    }

                    .nav {
                        gap: 20px;
                    }

                    .hero .container {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        text-align: center;
                    }

                    .hero h1 {
                        font-size: 32px;
                    }

                    .services .container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Top Bar -->
            <div class="top-bar">
                <div class="container">
                    <div class="contact-info">
                        <span>📍 123 Anywhere Street</span>
                        <span>✉️ Email@gmail.com</span>
                        <span>📞 + ${phoneNumber}</span>
                    </div>
                    <div class="social-links">
                        <a href="#">📷</a>
                        <a href="#">📺</a>
                        <a href="#">💼</a>
                    </div>
                </div>
            </div>

            <!-- Header -->
            <header class="header">
                <div class="container">
                    <div class="logo">${companyName}</div>
                    <nav>
                        <ul class="nav">
                            <li><a href="#" class="active">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                    <button class="phone-btn">${phoneNumber}</button>
                </div>
            </header>

            <!-- Hero Section -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">TRUSTED ${serviceName} PROFESSIONALS SINCE 2010</div>
                        <h1>Some Jobs Should Only Ever Be Tackled By A Professional, And ${serviceName} Is One Of Them.</h1>
                        
                        <div class="testimonial">
                            <div class="testimonial-header">
                            </div>
                            <div class="testimonial-text">
                                Exceptional service from start to finish. The team was professional, knowledgeable, and solved our problem quickly. I wouldn't trust anyone else with my home's ${serviceName} needs.
                            </div>
                            <div class="testimonial-author">Jhon Smith</div>
                            <div class="stars">★★★★★</div>
                        </div>
                    </div>

                    <div class="service-form">
                        <h3>Order Service</h3>
                        <form>
                            <div class="form-group">
                                <input type="text" placeholder="Zip Code*" required>
                            </div>
                            
                            <div class="form-group">
                                <label>Tell Us About The Job*</label>
                                <textarea placeholder="Please describe the job in detail" required></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label>When Would You Like Us to Come?</label>
                                <div class="time-grid">
                                    <select>
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                    </select>
                                    <select>
                                        <option>06:00 am</option>
                                        <option>07:00 am</option>
                                        <option>08:00 am</option>
                                        <option>09:00 am</option>
                                        <option>10:00 am</option>
                                        <option>11:00 am</option>
                                        <option>12:00 pm</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" placeholder="Your email" required>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" placeholder="Phone number" required>
                            </div>
                            
                            <button type="submit" class="submit-btn">Get A Price</button>
                        </form>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="services">
                <div class="container">
                    <div>
                        <div class="section-header">GET OUR ${serviceName}</div>
                        <h2>How To Get Our Service</h2>
                        
                        <div class="service-step">
                            <div class="step-icon">🕐</div>
                            <div class="step-content">
                                <h3>Choose Your Time</h3>
                                <p>Select a convenient appointment time that works with your schedule. We offer flexible scheduling including evenings and weekends.</p>
                            </div>
                        </div>
                        
                        <div class="service-step">
                            <div class="step-icon">📅</div>
                            <div class="step-content">
                                <h3>Book Swiftly</h3>
                                <p>Confirm your appointment online or over the phone. We'll send you a confirmation with all the details and what to expect.</p>
                            </div>
                        </div>
                        
                        <div class="service-step">
                            <div class="step-icon">📍</div>
                            <div class="step-content">
                                <h3>Our Team Arrives</h3>
                                <p>Our licensed professionals arrive on time with all necessary tools and equipment to complete your job right the first time.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="services-image">
                        GMB IMAGE
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="faq">
                <div class="container">
                    <div class="section-header">FAQ</div>
                    <h2>Frequently Asked Questions</h2>
                </div>
            </section>

            <script>
                // Add smooth scrolling for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                });

                // Form submission handling
                document.querySelector('.service-form form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your service request! We will contact you soon.');
                });

                // Add active nav highlighting on scroll
                window.addEventListener('scroll', function() {
                    const header = document.querySelector('.header');
                    if (window.scrollY > 100) {
                        header.style.background = 'rgba(255, 255, 255, 0.95)';
                        header.style.backdropFilter = 'blur(10px)';
                    } else {
                        header.style.background = 'white';
                        header.style.backdropFilter = 'none';
                    }
                });
            </script>
        </body>
        </html>
        <!-- Replace static text with variables -->
    `;
}