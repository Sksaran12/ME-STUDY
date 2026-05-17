// ========================================
// EASY TO EDIT - VANILLA STYLE CODE
// No complex React - just simple JavaScript!
// ========================================
import heroImage from "../assets/image.png";
import floatingImage from "../assets/image.png";
import logo from "../assets/logo.jpg";
import gateImage from "../assets/gate-mechanical.png";
import eseImage from "../assets/gate-ece.png";
import psuImage from "../assets/gate-computer.png";
import thermoImage from "../assets/gate-civil.png";
import cadImage from "../assets/gate-electrical.png";
import { useState } from "react";
import "./styles.css";

export default function App() {
  // ===== SETTINGS (Easy to change) =====
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [category, setCategory] = useState("all");
  const [showBanner, setShowBanner] = useState(true);

  // ===== COURSE DATA (Add/Edit courses here) =====
  const allCourses = [
    {
      id: 1,
      title: "GATE Mechanical Engineering Complete Course",
      teacher: "Dr. Rajesh Kumar",
      type: "gate",
      image: gateImage,
      stars: 4.9,
      students: 12500,
      price: 4999,
      oldPrice: 9999,
      time: "12 months",
      lessons: 250,
      difficulty: "Intermediate",
      points: [
        "Live Classes",
        "Mock Tests",
        "Study Material",
        "Doubt Clearing",
      ],
    },
    {
      id: 2,
      title: "ESE Mechanical Engineering Preparation",
      teacher: "Prof. Anita Sharma",
      type: "ese",
      stars: 4.8,
      image: eseImage,
      students: 8900,
      price: 5999,
      oldPrice: 11999,
      time: "10 months",
      lessons: 200,
      difficulty: "Advanced",
      points: [
        "Video Lectures",
        "Notes",
        "Previous Papers",
        "Interview Prep",
      ],
    },
    {
      id: 3,
      title: "PSU Exam Strategy & Preparation",
      teacher: "Er. Vikram Singh",
      type: "psu",
      stars: 4.7,
      image: gateImage,
      students: 6700,
      price: 3999,
      oldPrice: 7999,
      time: "8 months",
      lessons: 180,
      difficulty: "Intermediate",
      points: [
        "Company-wise Prep",
        "Aptitude",
        "Technical",
        "HR Round",
      ],
    },
    {
      id: 4,
      title: "Thermodynamics Mastery Course",
      teacher: "Dr. Suresh Patel",
      type: "subject",
       image: eseImage,
      stars: 4.9,
      students: 15200,
      price: 1999,
      oldPrice: 3999,
      time: "3 months",
      lessons: 80,
      difficulty: "Beginner",
      points: [
        "Concept Building",
        "Numericals",
        "Practice Sets",
        "Quick Revision",
      ],
    },
    {
      id: 5,
      title: "Machine Design & CAD",
      teacher: "Er. Priya Mehta",
      type: "subject",
      stars: 4.8,
      image: eseImage,
      students: 9500,
      price: 2499,
      oldPrice: 4999,
      time: "4 months",
      lessons: 120,
      difficulty: "Intermediate",
      points: [
        "CAD Software",
        "Design Projects",
        "Industry Standards",
        "Certification",
      ],
    },
    {
      id: 6,
      title: "Fluid Mechanics Complete Guide",
      teacher: "Dr. Arun Verma",
      type: "subject",
      stars: 4.9,
      image: gateImage,
      students: 11000,
      price: 1999,
      oldPrice: 3999,
      time: "3 months",
      lessons: 75,
      difficulty: "Beginner",
      points: [
        "Theory",
        "Practical",
        "Simulations",
        "Problem Solving",
      ],
    },
  ];

  // ===== STUDENT REVIEWS (Add/Edit reviews here) =====
  const studentReviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      job: "GATE AIR 45",
      rating: 5,
      when: "2 weeks ago",
      comment:
        "This platform completely transformed my GATE preparation. The structured courses, expert faculty, and comprehensive study materials helped me secure AIR 45. The doubt clearing sessions were particularly helpful. Highly recommended!",
      courseName: "GATE Mechanical Complete Course",
    },
    {
      id: 2,
      name: "Priya Patel",
      job: "ESE Selected - BHEL",
      rating: 5,
      when: "1 month ago",
      comment:
        "Excellent teaching methodology! The ESE preparation course covers every topic in detail. The mock tests and previous year question analysis gave me the confidence to crack the exam. Now working at BHEL, thanks to ME Study!",
      courseName: "ESE Mechanical Preparation",
    },
    {
      id: 3,
      name: "Amit Kumar",
      job: "PSU - ONGC",
      rating: 5,
      when: "3 weeks ago",
      comment:
        "The PSU exam preparation was top-notch. Company-wise test series and interview preparation modules were game-changers. The faculty's industry experience really shows in their teaching. Got placed in ONGC!",
      courseName: "PSU Exam Strategy",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      job: "M.Tech Student, IIT Delhi",
      rating: 5,
      when: "2 months ago",
      comment:
        "Outstanding content quality! The subject-wise courses helped me build strong fundamentals. Even after joining IIT Delhi, I still refer to these materials. The investment was totally worth it.",
      courseName: "Thermodynamics Mastery",
    },
    {
      id: 5,
      name: "Vikram Singh",
      job: "Design Engineer",
      rating: 4,
      when: "1 month ago",
      comment:
        "Great learning experience with practical applications. The CAD modules and design projects enhanced my skills significantly. Now working as a design engineer at a top MNC. Would recommend to everyone!",
      courseName: "Machine Design & CAD",
    },
    {
      id: 6,
      name: "Anjali Verma",
      job: "GATE AIR 120",
      rating: 5,
      when: "3 weeks ago",
      comment:
        "The best investment I made for my career! The live classes, recorded lectures, and study materials are all excellent. The faculty is very supportive and always available for doubts. Secured AIR 120!",
      courseName: "GATE Mechanical Complete",
    },
  ];

  // Filter courses based on selected category
  const displayCourses =
    category === "all"
      ? allCourses
      : allCourses.filter((c) => c.type === category);

  // ===== HTML STRUCTURE (Easy to modify) =====
  return (
    <div
      className={
        darkMode ? "app-container dark-mode" : "app-container"
      }
    >
      {/* ===== TOP BANNER (Show/Hide) ===== */}
      {showBanner && (
        <div className="message-banner">
          <div className="container message-content">
            <div className="message-text">
              🎉 Special Offer: Get 50% OFF on all courses!
              Limited time offer. Use code:{" "}
              <strong>LEARN50</strong>
            </div>
            <button
              className="message-close"
              onClick={() => setShowBanner(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ===== HEADER / NAVIGATION ===== */}
      <header className="header">
        <div className="container header-content">    
         <div className="logo">
        <img src={logo} alt="ME Study logo" className="logo-image" />
        </div>

          <nav className="nav-desktop">
            <a href="#home" className="nav-link">
              Home
            </a>
            <div className="nav-dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() =>
                  setDropdown(
                    dropdown === "features" ? "" : "features",
                  )
                }
              >
                Features
                <svg
                  className="dropdown-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {dropdown === "features" && (
                <div className="dropdown-menu">
                  <a href="#notes" className="dropdown-item">
                    Subject-wise Notes
                  </a>
                  <a href="#gate" className="dropdown-item">
                    GATE Strategy →
                  </a>
                  <a href="#ese" className="dropdown-item">
                    ESE Strategy →
                  </a>
                </div>
              )}
            </div>
            <div className="nav-dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() =>
                  setDropdown(dropdown === "psu" ? "" : "psu")
                }
              >
                PSU Strategy
                <svg
                  className="dropdown-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {dropdown === "psu" && (
                <div className="dropdown-menu">
                  <a href="#psu-exam" className="dropdown-item">
                    PSU Exam Prep
                  </a>
                  <a href="#psu-companies" className="dropdown-item"
                  > Top PSU Companies
                  </a>
                </div>
              )}
            </div>
            <a href="#privacy" className="nav-link">
              Privacy Policy
            </a>
            <a href="#blogs" className="nav-link">
              Blogs
            </a>
            <a href="#mega menu" className="nav-link">
              Mega Menu
            </a>
          </nav>

          <div className="header-actions-desktop">
            <button
              className="icon-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button className="btn-ghost">Sign In</button>
            <button className="btn-primary">Login</button>
          </div>

          <div className="header-actions-mobile">
            <button
              className="icon-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button
              className="icon-btn"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </a>

              {/* Features Dropdown in Mobile */}
              <div className="mobile-nav-dropdown">
                <button
                  className="mobile-nav-link mobile-dropdown-toggle"
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "features"
                        ? ""
                        : "features",
                    )
                  }
                >
                  Features
                  <span className="mobile-arrow">
                    {mobileDropdown === "features" ? "▼" : "▶"}
                  </span>
                </button>
                {mobileDropdown === "features" && (
                  <div className="mobile-submenu">
                    <a
                      href="#notes"
                      className="mobile-submenu-item"
                      onClick={() => setMobileMenu(false)}
                    >
                      Subject-wise Notes
                    </a>
                    <a
                      href="#gate"
                      className="mobile-submenu-item"
                      onClick={() => setMobileMenu(false)}
                    >
                      GATE Strategy
                    </a>
                    <a
                      href="#ese"
                      className="mobile-submenu-item"
                      onClick={() => setMobileMenu(false)}
                    >
                      ESE Strategy
                    </a>
                  </div>
                )}
              </div>

              {/* PSU Strategy Dropdown in Mobile */}
              <div className="mobile-nav-dropdown">
                <button
                  className="mobile-nav-link mobile-dropdown-toggle"
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "psu" ? "" : "psu",
                    )
                  }
                >
                  PSU Strategy
                  <span className="mobile-arrow">
                    {mobileDropdown === "psu" ? "▼" : "▶"}
                  </span>
                </button>
                {mobileDropdown === "psu" && (
                  <div className="mobile-submenu">
                    <a
                      href="#psu-exam"
                      className="mobile-submenu-item"
                      onClick={() => setMobileMenu(false)}
                    >
                      PSU Exam Prep
                    </a>
                    <a
                      href="#psu-companies"
                      className="mobile-submenu-item"
                      onClick={() => setMobileMenu(false)}
                    >
                      Top PSU Companies
                    </a>
                    <a
                      href="#psu-tips"
                      className="mobile-submenu-item"
                      onClick={() => setMobileMenu(false)}
                    >
                      Interview Tips
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#privacy"
                className="mobile-nav-link"
                onClick={() => setMobileMenu(false)}
              >
                Privacy Policy
              </a>
              <a
                href="#blogs"
                className="mobile-nav-link"
                onClick={() => setMobileMenu(false)}
              >
                Blogs
              </a>

              <div className="mobile-actions">
                <button className="btn-ghost full-width">
                  Sign In
                </button>
                <button className="btn-primary full-width">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-background">
          <div
            className="floating-icon"
            style={{
              top: "10%",
              left: "15%",
              animationDelay: "0s",
              opacity: 0.3,
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF6B6B"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6"></path>
            </svg>
          </div>
          <div className="floating-boxes">
            <div className="floating-box-track">
              <img
                src="src/assets/image.png"
                alt="Mechanical"
                className="floating-image"
              />
              <div className="gear-icon spinning">⚙️</div>
              <div className="gear-icon spinning-reverse">
                ⚙️
              </div>
              <img
                src="src/assets/logo.jpg"
                alt="Mechanical"
                className="floating-image"
              />
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                Master Mechanical Engineering
              </h1>
              <p className="hero-description">
                One of the leading platform for preparing GATE
                ME/XE/ESE (ME) & PSU Exams.
              </p>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Courses"
                  className="search-input"
                />
                <button className="btn-search">Search</button>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="check-icon">✓</span> No
                  credit card required
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span> Cancel
                  anytime
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              <img
                src="src/assets/image.png"
                alt="Learning"
                className="hero-image"
              />
            </div>
          </div>
          <div className="feature-icons-grid">
            {[
              "One Live Study",
              "Features",
              "Our Planner",
              "Blogs",
              "Membership",
              "Courses",
            ].map((label, i) => (
              <div key={i} className="feature-icon-item">
                <div
                  className="feature-icon-circle"
                  style={{
                    backgroundColor: [
                      "#14b8a6",
                      "#3b82f6",
                      "#22c55e",
                      "#ec4899",
                      "#06b6d4",
                      "#f97316",
                    ][i],
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <span className="feature-icon-label">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">
                Expert Instructors
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose Our Courses?
            </h2>
            <p className="section-description">
              Join thousands of successful students who have
              achieved their goals
            </p>
          </div>
          <div className="why-choose-grid">
            {[
              {
                icon: "✓",
                color: "#3b82f6",
                title: "Expert Instructors",
                desc: "Learn from industry professionals",
              },
              {
                icon: "$",
                color: "#10b981",
                title: "Affordable Pricing",
                desc: "Quality education at great prices",
              },
              {
                icon: "📚",
                color: "#f59e0b",
                title: "Comprehensive Materials",
                desc: "Extensive study resources",
              },
              {
                icon: "⏰",
                color: "#8b5cf6",
                title: "Lifetime Access",
                desc: "Access anytime, anywhere",
              },
              {
                icon: "👥",
                color: "#ec4899",
                title: "Community Support",
                desc: "Active learning community",
              },
              {
                icon: "🎓",
                color: "#06b6d4",
                title: "Certification",
                desc: "Recognized certificates",
              },
            ].map((item, i) => (
              <div key={i} className="why-choose-card">
                <div
                  className="why-icon"
                  style={{ backgroundColor: item.color }}
                >
                  <span style={{ fontSize: "2rem" }}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES SECTION ===== */}
      <section className="courses-section" id="courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Explore Our Courses
            </h2>
            <p className="section-description">
              Choose from our wide range of comprehensive
              courses
            </p>
          </div>
          <div className="category-filter">
            {[
              { name: "All Courses", value: "all" },
              { name: "GATE Preparation", value: "gate" },
              { name: "ESE Preparation", value: "ese" },
              { name: "PSU Exams", value: "psu" },
              { name: "Subject Wise", value: "subject" },
            ].map((cat) => (
              <button
                key={cat.value}
                className={
                  category === cat.value
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setCategory(cat.value)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="courses-grid">
            {displayCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                 <img
                    src={course.image}
                     alt={course.title}
                    />
                  <div className="course-badge">
                    {course.difficulty}
                  </div>
                </div>
                <div className="course-content">
                  <div className="course-category-tag">
                    {course.type.toUpperCase()}
                  </div>
                  <h3 className="course-title">
                    {course.title}
                  </h3>
                  <p className="course-instructor">
                    By {course.teacher}
                  </p>
                  <div className="course-stats">
                    <div className="course-rating">
                      <span className="rating-star">⭐</span>
                      <span className="rating-value">
                        {course.stars}
                      </span>
                      <span className="rating-count">
                        ({course.students.toLocaleString()})
                      </span>
                    </div>
                    <div className="course-duration">
                      {course.time}
                    </div>
                  </div>
                  <div className="course-info">
                    <div className="info-item">
                      ⚡ {course.lessons} Lectures
                    </div>
                    <div className="info-item">
                      👥 {course.students.toLocaleString()}{" "}
                      Students
                    </div>
                  </div>
                  <div className="course-features">
                    {course.points.map((point, i) => (
                      <span key={i} className="feature-tag">
                        ✓ {point}
                      </span>
                    ))}
                  </div>
                  <div className="course-footer">
                    <div className="course-price">
                      <span className="price-current">
                        ₹{course.price.toLocaleString()}
                      </span>
                      <span className="price-original">
                        ₹{course.oldPrice.toLocaleString()}
                      </span>
                      <span className="price-discount">
                        {Math.round(
                          (1 - course.price / course.oldPrice) *
                            100,
                        )}
                        % OFF
                      </span>
                    </div>
                    <button className="btn-enroll">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              What Our Students Say
            </h2>
            <p className="section-description">
              Real success stories from students
            </p>
          </div>
          <div className="rating-summary">
            <div className="rating-summary-left">
              <div className="overall-rating-number">4.9</div>
              <div className="overall-rating-stars">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="overall-rating-text">
                Based on 5,280 reviews
              </div>
            </div>
            <div className="rating-summary-right">
              {[85, 12, 2, 1, 1].map((percent, i) => (
                <div key={i} className="rating-bar-item">
                  <span className="rating-label">
                    {5 - i} ⭐
                  </span>
                  <div className="rating-bar-bg">
                    <div
                      className="rating-bar-fill"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <span className="rating-percentage">
                    {percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="reviews-grid">
            {studentReviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <img
                        src="src/assets/image.png"
                        alt={review.name}
                      />
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">
                        {review.name}
                      </h4>
                      <p className="reviewer-role">
                        {review.job}
                      </p>
                    </div>
                  </div>
                  <div className="review-date">
                    {review.when}
                  </div>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating
                          ? "star-filled"
                          : "star-empty"
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="review-text">{review.comment}</p>
                <div className="review-course-tag">
                  📚 Enrolled in: {review.courseName}
                </div>
                <div className="review-helpful">
                  <button className="helpful-btn">
                    👍 Helpful
                  </button>
                  <button className="helpful-btn">
                    👎 Not Helpful
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="reviews-cta">
            <p>
              Have you taken our courses? Share your experience!
            </p>
            <button className="btn-primary btn-large">
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-wave">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="footer-wave-path"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-top">
            <div className="footer-column footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="ME Study Logo" className="logo-image" />
              </div>
              <p className="footer-description">
                Empowering mechanical engineering students to
                achieve excellence in GATE, ESE, and PSU exams
                with expert guidance and comprehensive study
                resources.
              </p>
              <div className="footer-social">
                <a
                  href="#"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  aria-label="Twitter"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  aria-label="YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#courses">Browse Courses</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#reviews">Student Reviews</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Courses</h3>
              <ul className="footer-links">
                <li>
                  <a href="#gate">GATE Preparation</a>
                </li>
                <li>
                  <a href="#ese">ESE Preparation</a>
                </li>
                <li>
                  <a href="#psu">PSU Exams</a>
                </li>
                <li>
                  <a href="#subject">Subject Courses</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#study">Study Materials</a>
                </li>
                <li>
                  <a href="#mock">Mock Tests</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-contact">
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Guwahati, Assam</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>contact@mestudy.com</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 9435639773</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p>&copy; 2026 ME Study. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms of Service</a>
              <span>•</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}