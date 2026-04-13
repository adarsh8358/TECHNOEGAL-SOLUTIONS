import React from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
import "./Responsive.scss";
import Breadcrumb from "../../components/Breadcrumb";

const Blog = () => {
  return (
    <>
      <Breadcrumb />

      <div className="blog-page">

        {/* HERO */}
        {/* <div className="blog-hero">
          <div className="overlay">
            <h1>Our <span>Blog</span></h1>
            <p>Latest trends shaping digital marketing in 2025–2026.</p>
          </div>
        </div> */}

        {/* INTRO */}
        <section className="blog-intro">
          <h2>Latest Insights</h2>
          <p>Explore strategies, trends, and innovations.</p>
        </section>

        {/* BLOG LIST */}
        <section className="blog-list">

          <div className="blog-container">

            {/* CARD */}
            <div className="blog-card">
              <div className="blog-img blog1"></div>
              <div className="blog-content">
                <h3>AI is Now the Engine of Marketing</h3>
                <p>AI is transforming marketing—from automation to targeting.</p>
                <Link to="/blog/ai">Read More</Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog2"></div>
              <div className="blog-content">
                <h3>Hyper-Personalization</h3>
                <p>Deliver real-time personalized experiences using AI.</p>
                <Link to="/blog/personalization">Read More</Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog3"></div>
              <div className="blog-content">
                <h3>SEO → AEO</h3>
                <p>Search is shifting to answer-based AI results.</p>
                <Link to="/blog/seo-aeo">Read More</Link>
              </div>
            </div>

            {/* <div className="blog-card">
              <div className="blog-img blog4"></div>
              <div className="blog-content">
                <h3>Social = Search Engine</h3>
                <p>Instagram & YouTube are now discovery platforms.</p>
                <button>Read More</button>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog5"></div>
              <div className="blog-content">
                <h3>Video Commerce</h3>
                <p>Video is now driving direct sales and conversions.</p>
                <button>Read More</button>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog6"></div>
              <div className="blog-content">
                <h3>Privacy-First Marketing</h3>
                <p>First-party data is the future of marketing.</p>
                <button>Read More</button>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog7"></div>
              <div className="blog-content">
                <h3>Social Commerce</h3>
                <p>Users now buy directly inside apps.</p>
                <button>Read More</button>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog8"></div>
              <div className="blog-content">
                <h3>AR/VR Marketing</h3>
                <p>Immersive experiences are the next big thing.</p>
                <button>Read More</button>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog9"></div>
              <div className="blog-content">
                <h3>Authenticity Wins</h3>
                <p>Real content builds trust over perfection.</p>
                <button>Read More</button>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img blog10"></div>
              <div className="blog-content">
                <h3>Zero-Click Marketing</h3>
                <p>Users consume content without leaving platforms.</p>
                <button>Read More</button>
              </div>
            </div> */}

          </div>

        </section>

      </div>
    </>
  );
};

export default Blog;