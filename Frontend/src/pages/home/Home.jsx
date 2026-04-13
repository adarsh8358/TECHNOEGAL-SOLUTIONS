import React from 'react'
import './Home.scss'
import './Responsive.scss'
import { Link } from 'react-router-dom'
import client1 from '../../assets/client/client1.svg'
import client2 from '../../assets/client/client2.png'
import client3 from '../../assets/client/client3.png'
import client4 from '../../assets/client/client4.jpg'
import client5 from '../../assets/client/client5.png'
// import clientcs from '../../assets/client/clientcs.jpg'
import WhatsAppButton from '../../components/WhatsAppButton'

const Home = () => {
    return (
        <>

            <WhatsAppButton />

            <div className="main">

                <div className="hero-section">

                    <div className="overlay">
                        <h1>TECHNO<span>EGAL</span> SOLUTIONS PVT LTD</h1>
                        <p>
                            At Technoegal Solutions Pvt. Ltd., we help businesses grow with result-driven strategies in SEO, PPC, social media marketing, and web development, delivering real visibility and measurable results.
                        </p>
                        {/* <button>Get Started</button> */}
                    </div>
                </div>

                <hr />

                <section className="about-section">

                    <h2 className="about-heading">Who We Are</h2>

                    <div className="about-container">

                        {/* TOP / LEFT */}
                        <div className="about-top">
                            <h3>We Build Digital Growth</h3>
                            <p>
                                <span>At Technoegal Solutions Pvt. Ltd.</span>, we help businesses grow and succeed in the digital world through powerful, result-driven strategies. Our expertise spans across <strong>SEO, PPC advertising, Social Media Marketing (SMM), Social Media Optimization (SMO)</strong>, and modern <strong>Website Design & Development</strong>.

                                We focus on understanding your business goals and creating customized solutions that increase visibility, drive high-quality traffic, and generate real conversions. By combining creativity with data-driven insights, we ensure every campaign delivers measurable results and maximum return on investment.

                                Our mission is not just to promote your brand, but to build a strong online presence that supports long-term growth, customer engagement, and sustainable success in today’s competitive market.
                            </p>
                            <Link to="/about" className="about-btn">Read more</Link>
                        </div>

                        {/* BOTTOM / RIGHT */}
                        <div className="about-bottom">
                            <div className="about-image"></div>

                            <div className="about-text">
                                <p>
                                    We combine creativity with data-driven solutions to create high-performing
                                    websites and marketing campaigns that convert visitors into customers.
                                </p>
                            </div>
                        </div>

                    </div>

                </section>

                <hr />

                <section className="why-section">
                    <h2 className="section-heading">Why Choose Us</h2>

                    <div className="why-container">
                        <div className="why-card">
                            <h3>Result Driven</h3>
                            <p>We focus on real growth with measurable results and ROI.</p>
                        </div>

                        <div className="why-card">
                            <h3>Expert Team</h3>
                            <p>Experienced professionals delivering top-quality digital solutions.</p>
                        </div>

                        <div className="why-card">
                            <h3>Custom Strategy</h3>
                            <p>Every business is unique, so we create tailored strategies.</p>
                        </div>

                        <div className="why-card">
                            <h3>Transparency</h3>
                            <p>Clear reporting and honest communication at every step.</p>
                        </div>
                    </div>
                </section>

                <hr />

                {/* MISSION VISION VALUES */}
                <section className="mvv-section">
                    <h2 className="section-heading">Mission, Vision & Core Values</h2>

                    <div className="mvv-container">

                        <div className="mvv-box">
                            <h3>Our Mission</h3>
                            <p>
                                To empower businesses with innovative digital marketing and web
                                solutions that drive growth, visibility, and long-term success.
                            </p>
                        </div>

                        <div className="mvv-box">
                            <h3>Our Vision</h3>
                            <p>
                                To become a leading digital agency recognized for creativity,
                                performance, and delivering exceptional results globally.
                            </p>
                        </div>

                        <div className="mvv-box">
                            <h3>Core Values</h3>
                            <p>
                                Integrity, innovation, customer focus, and commitment to excellence
                                are at the heart of everything we do.
                            </p>
                        </div>

                    </div>
                </section>

                <hr />

                <section className="service-section">

                    <h2 className="section-heading">
                        Our <span>Services</span>
                    </h2>

                    <div className="service-container">

                        <div className="service-card">
                            <h3>SEO</h3>
                            <p>Boost your website ranking and drive organic traffic with advanced SEO strategies.</p>
                        </div>

                        <div className="service-card">
                            <h3>PPC Advertising</h3>
                            <p>Run high-converting ad campaigns on Google & social platforms for instant results.</p>
                        </div>

                        <div className="service-card">
                            <h3>Social Media Marketing</h3>
                            <p>Build your brand presence and engage your audience across all social platforms.</p>
                        </div>

                        <div className="service-card">
                            <h3>Social Media Optimization</h3>
                            <p>Optimize your profiles and content for better reach, trust, and engagement.</p>
                        </div>

                        <div className="service-card">
                            <h3>Website Design & Development</h3>
                            <p>Create modern, responsive, and high-converting websites tailored to your business.</p>
                        </div>

                        <div className="service-card">
                            <h3>Performance Marketing</h3>
                            <p>Data-driven campaigns focused on leads, conversions, and maximum ROI.</p>
                        </div>

                        <div className="service-card">
                            <h3>Email Marketing</h3>
                            <p>Targeted email campaigns to nurture leads and increase customer retention.</p>
                        </div>

                        <div className="service-card">
                            <h3>WhatsApp Marketing</h3>
                            <p>
                                Reach your customers directly with targeted WhatsApp campaigns, bulk messaging, and automated engagement to boost conversions.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>Logo Design</h3>
                            <p>
                                Create a unique and professional logo that represents your brand identity and leaves a lasting impression on your audience.
                            </p>
                        </div>

                    </div>

                </section>

                <hr />

                <section className="process-section">

                    <h2 className="section-heading">
                        Our <span>Process</span>
                    </h2>

                    <div className="process-container">

                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h3>Research & Strategy</h3>
                            <p>
                                We analyze your business, competitors, and target audience to create a
                                powerful marketing strategy.
                            </p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Planning & Setup</h3>
                            <p>
                                We set up campaigns, tracking systems, and platforms to ensure everything
                                is ready for execution.
                            </p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Execution</h3>
                            <p>
                                Our team launches campaigns and implements strategies across SEO, ads,
                                and social media platforms.
                            </p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h3>Optimization</h3>
                            <p>
                                We continuously monitor and optimize campaigns to improve performance
                                and maximize ROI.
                            </p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">05</div>
                            <h3>Reporting & Growth</h3>
                            <p>
                                Transparent reports with insights and strategies to scale your business
                                further.
                            </p>
                        </div>

                    </div>

                </section>

                <hr />

                <section className="tools-section">

                    <h2 className="section-heading">
                        Tools & <span>Platforms</span>
                    </h2>

                    <div className="tools-container">

                        <div className="tools-container">

                            {/* Marketing Tools */}
                            <div className="tool-card">
                                <div className="tool-img google"></div>
                                <p>Google Ads</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img meta"></div>
                                <p>Meta Ads</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img analytics"></div>
                                <p>Google Analytics</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img googlesearchconsole"></div>
                                <p>Search Console</p>
                            </div>

                            {/* SEO Tools */}
                            <div className="tool-card">
                                <div className="tool-img semrush"></div>
                                <p>SEMrush</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img ahrefs"></div>
                                <p>Ahrefs</p>
                            </div>

                            {/* CMS / Platforms */}
                            <div className="tool-card">
                                <div className="tool-img wordpress"></div>
                                <p>WordPress</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img shopify"></div>
                                <p>Shopify</p>
                            </div>

                            {/* 🔥 DEV / MERN STACK */}
                            <div className="tool-card">
                                <div className="tool-img mongodb"></div>
                                <p>MongoDB</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img express"></div>
                                <p>Express.js</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img react"></div>
                                <p>React.js</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img node"></div>
                                <p>Node.js</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img html"></div>
                                <p>HTML</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img css"></div>
                                <p>CSS</p>
                            </div>

                            <div className="tool-card">
                                <div className="tool-img javascript"></div>
                                <p>JavaScript</p>
                            </div>

                        </div>

                    </div>

                </section>

                <hr />

                <section className="industry-section">

                    <h2 className="section-heading">
                        Industries We <span>Serve</span>
                    </h2>

                    <div className="industry-container">

                        <div className="industry-card">
                            <div className="industry-img education"></div>
                            <h3>Education</h3>
                            <p>Coaching institutes, schools, and online education platforms.</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-img healthcare"></div>
                            <h3>Healthcare</h3>
                            <p>Clinics, hospitals, and medical service providers.</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-img realestate"></div>
                            <h3>Real Estate</h3>
                            <p>Builders, property dealers, and real estate agencies.</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-img ecommerce"></div>
                            <h3>E-commerce</h3>
                            <p>Online stores and product-based businesses.</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-img local"></div>
                            <h3>Local Businesses</h3>
                            <p>Shops, services, and local service providers.</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-img startup"></div>
                            <h3>Startups</h3>
                            <p>New businesses looking for rapid growth and branding.</p>
                        </div>

                    </div>

                </section>

                <hr />

                <section className="stats-section">

                    <div className="stats-container">

                        <div className="stat-card">
                            <h2>50+</h2>
                            <p>Happy Clients</p>
                        </div>

                        <div className="stat-card">
                            <h2>100+</h2>
                            <p>Projects Completed</p>
                        </div>

                        <div className="stat-card">
                            <h2>5+</h2>
                            <p>Years Experience</p>
                        </div>

                        <div className="stat-card">
                            <h2>10M+</h2>
                            <p>Audience Reach</p>
                        </div>

                    </div>

                </section>

                <hr />

                <section className="client-section">

                    <h2 className="section-heading">
                        Our <span>Clients</span>
                    </h2>

                    <div className="client-slider">

                        <div className="slide-track">
                            {/* Repeat logos twice for infinite effect */}

                            <img src={client1} alt="client" />
                            <img src={client2} alt="client" />
                            <img src={client3} alt="client" />
                            <img src={client4} alt="client" />
                            <img src={client5} alt="client" />
                            {/* <img src={client4} alt="client" />
                            <img src={client5} alt="client" /> */}

                            {/* duplicate */}
                            <img src={client1} alt="client" />
                            <img src={client2} alt="client" />
                            <img src={client3} alt="client" />
                            <img src={client4} alt="client" />
                            <img src={client5} alt="client" />
                            {/* <img src={client4} alt="client" />
                            <img src={client5} alt="client" /> */}

                        </div>

                    </div>

                </section>

                <hr />

                <section className="testimonial-section">

                    <h2 className="section-heading">
                        What Our <span>Clients Say</span>
                    </h2>

                    <div className="testimonial-container">

                        {/* Client 1 */}
                        <div className="testimonial-card">
                            <div className="review-top">
                                <h3>SS Superior & Associates</h3>
                                <span>CA Firm, Bhopal</span>
                            </div>

                            <div className="stars">★★★★★</div>

                            <p>
                                Technoegal helped us improve our online presence and generate quality leads.
                                Their SEO and marketing strategies are highly effective and result-driven.
                            </p>
                        </div>

                        {/* Client 2 */}
                        <div className="testimonial-card">
                            <div className="review-top">
                                <h3>Unnati Welfare Foundation</h3>
                                <span>NGO / Trust, Bhopal</span>
                            </div>

                            <div className="stars">★★★★★</div>

                            <p>
                                A very professional team! They created a beautiful website and helped us
                                reach more people through social media campaigns.
                            </p>
                        </div>

                        {/* Client 3 */}
                        <div className="testimonial-card">
                            <div className="review-top">
                                <h3>Superior Coaching & Home Tutor</h3>
                                <span>Coaching Institute, Bhopal</span>
                            </div>

                            <div className="stars">★★★★★</div>

                            <p>
                                We saw a significant increase in inquiries after running ads with Technoegal.
                                Highly recommended for performance marketing services.
                            </p>
                        </div>

                    </div>

                </section>

                <hr />

                <section className="faq-section">

                    <h2 className="section-heading">
                        Frequently Asked <span>Questions</span>
                    </h2>

                    <div className="faq-container">

                        <div className="faq-item">
                            <h3>1. How will your marketing actually grow my business?</h3>
                            <p>
                                We focus on real business outcomes, not vanity metrics. Our strategies are designed to increase qualified leads, conversions, and overall ROI. Everything we do is data-driven and aligned with your business goals.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>2. Which platforms do you specialize in?</h3>
                            <p>
                                We work across high-performing platforms including Google (Search, Display & YouTube Ads), Meta (Facebook & Instagram), SEO for organic growth, and LinkedIn for B2B marketing. We choose platforms based on where your audience converts best.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>3. Can you guarantee results?</h3>
                            <p>
                                No genuine agency guarantees exact results. However, we guarantee transparent reporting, continuous optimization, and proven strategies to deliver consistent and scalable growth.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>4. How soon can I expect leads or sales?</h3>
                            <p>
                                Paid Ads: 6-15 days for initial leads.
                                SEO: 4-6 months for sustainable growth.
                                Social Media: 3-8 weeks for engagement and visibility.
                                We combine short-term wins with long-term strategies.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>5. Why should I choose your agency over others?</h3>
                            <p>
                                We focus on ROI, not just reach. You get personalized strategies, clear communication, and performance-based execution. We work closely with businesses to ensure real, measurable growth.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>6. How do you measure success in marketing campaigns?</h3>
                            <p>
                                We track key performance indicators such as website traffic, leads, conversions, ROI, and engagement. You’ll receive regular reports with actionable insights and progress updates.
                            </p>
                        </div>

                    </div>

                    <div className="faq-cta">
                        <p>Still have questions? Let's discuss your business goals.</p>
                        <Link to="/contact">Contact Us</Link>
                    </div>

                </section>

                <hr />

                <section className="contact-section">

                    <h2 className="section-heading">
                        Contact <span>Us</span>
                    </h2>

                    <div className="contact-container">

                        {/* LEFT - INFO */}
                        <div className="contact-info">

                            <div className="info-box">
                                <h3>📍 Location</h3>
                                <a
                                    href="https://www.google.com/maps?q=24, Maple High Street, Narmadapuram Road, Bhopal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    24, 1st Floor, Maple High Street<br />
                                    Narmadapuram Road, Bhopal,<br/> Madhya Pradesh, India - 462026
                                </a>
                            </div>

                            <div className="info-box">
                                <h3>📞 Phone</h3>
                                <a href="tel:+918962820388">
                                    +91 8962820388
                                </a>
                            </div>

                            <div className="info-box">
                                <h3>📧 Email</h3>
                                <a href="mailto:contact@technoegal.com">
                                    contact@technoegal.com
                                </a>
                            </div>
                        </div>

                        {/* RIGHT - FORM */}
                        <div className="contact-form">

                            <form>
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <input type="text" placeholder="Your Phone" />
                                <textarea placeholder="Your Message" rows="4"></textarea>

                                <button type="submit">Send Message</button>
                            </form>

                        </div>

                    </div>

                    {/* GOOGLE MAP */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps?q=Bhopal&output=embed"
                            title="location"
                            loading="lazy"
                        ></iframe>
                    </div>

                </section>


            </div>
        </>
    )
}

export default Home