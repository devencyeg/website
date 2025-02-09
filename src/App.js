// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  FaRocket,
  FaCogs,
  FaGlobe,
  FaBolt,
  FaSearch,
  FaPencilAlt,
  FaSun,
  FaMoon,
  FaFlask,
  FaMedal,
  FaEye,
  FaLock
} from "react-icons/fa";

const FORM_API = 'https://formspree.io/f/mdkadjnr'; //https://formspree.io/

function App() {
  // State for theme and language
  const [theme, setTheme] = useState("light"); // "light" or "dark"
  const [lang, setLang] = useState("en"); // "en" or "ar"

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  // Text content in English and Arabic for all sections
  const text = {
    en: {
      title: "Devency",
      hero: {
        headline: "Empowering Innovation, Delivering Excellence",
        subheadline:
          "At Devency, we transform your business with cutting‑edge software solutions."
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Digital Transformation",
            description:
              "Modernize your business processes with our digital solutions.",
            icon: <FaRocket />
          },
          {
            title: "Business Process Automation",
            description:
              "Streamline your operations with automated workflows.",
            icon: <FaCogs />
          },
          {
            title: "Offshore Development",
            description:
              "Access world‑class development talent from around the globe.",
            icon: <FaGlobe />
          },
          {
            title: "Agile Business Solutions",
            description:
              "Deliver projects efficiently with agile methodologies.",
            icon: <FaBolt />
          },
          {
            title: "Product Scoping",
            description:
              "Define your product vision with detailed scoping sessions.",
            icon: <FaSearch />
          },
          {
            title: "UI/UX Design",
            description: "Enhance user engagement with intuitive designs.",
            icon: <FaPencilAlt />
          }
        ]
      },
      commitment: {
        title: "Our Commitment to Quality",
        items: [
          {
            title: "Rigorous Testing",
            description: "We ensure every solution is tested to perfection.",
            icon: <FaFlask />
          },
          {
            title: "Best Practices",
            description: "Adhering to industry standards and best practices.",
            icon: <FaMedal />
          },
          {
            title: "Attention to Detail",
            description: "We never overlook the small things.",
            icon: <FaEye />
          },
          {
            title: "Security & Reliability",
            description:
              "We prioritize secure, stable, and reliable systems for peace of mind.",
            icon: <FaLock />
          }
        ]
      },
      process: {
        title: "Our Process",
        steps: [
          "Understanding Your Needs",
          "Strategic Planning",
          "Innovative Development",
          "Quality Assurance",
          "Continuous Improvement"
        ]
      },
      contact: {
        title: "Get in Touch",
        description:
          "We'd love to hear from you. Reach out for a consultation or any inquiries.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message"
        }
      },
      about: {
        title: "About Us",
        content: `Welcome to Devency! We are a cutting-edge software consulting firm dedicated to delivering innovative and tailored solutions to our clients. Our mission is to empower businesses by leveraging technology to drive growth, efficiency, and success.

Our team of experts is passionate about transforming ideas into reality. We believe that innovation starts with collaboration, and we work closely with our clients to develop solutions that meet their unique needs. With a commitment to excellence, rigorous testing, and continuous improvement, we strive to exceed expectations in every project.

At Devency, we value integrity, transparency, and creativity. Our goal is to build lasting partnerships and help businesses navigate the complexities of digital transformation. Join us on this journey and experience the power of technology in driving success.`
      },
      privacy: {
        title: "Privacy Policy",
        content: `Your privacy is important to us. This Privacy Policy explains how Devency collects, uses, and protects your personal information. We are committed to ensuring that your privacy is safeguarded.

Information Collection:  
We may collect personal information such as your name, email address, and any other details you provide when contacting us or using our services.

Use of Information: 
The information we collect is used to respond to your inquiries, improve our services, and communicate with you about our offerings.

Data Security:
We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or destruction.

Third-Party Disclosure: 
We do not sell, trade, or otherwise transfer your personal information to outside parties, except as required by law.

Changes to This Policy:
We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page.

Contact Us:
If you have any questions regarding this Privacy Policy, please contact us.`
      },
      terms: {
        title: "Terms of Use",
        content: `These Terms of Use govern your use of the Devency website and services. By accessing or using our website, you agree to these terms.

Use of Services:
Devency provides consulting services and information for general purposes only. We reserve the right to modify or discontinue our services at any time without notice.

Disclaimer:
The information provided on this website is for general informational purposes only. Devency makes no warranties about the completeness, reliability, or accuracy of this information.

Limitation of Liability:
In no event shall Devency be liable for any damages arising from the use of our services.

Governing Law:
These terms are governed by the laws of the jurisdiction in which Devency operates.

Changes to Terms:
We reserve the right to update these Terms of Use at any time. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.

Contact Us:
If you have any questions about these Terms, please contact us.`
      },
      footer: {
        rights: "© 2025 Devency. All Rights Reserved."
      }
    },
    ar: {
      title: "ديفنسي",
      hero: {
        headline: "تمكين الابتكار، تقديم التميز",
        subheadline:
          "في ديفنسي، نقوم بتحويل أعمالك باستخدام حلول برمجية مبتكرة."
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "التحول الرقمي",
            description: "تحديث عملياتك التجارية مع حلولنا الرقمية.",
            icon: <FaRocket />
          },
          {
            title: "أتمتة العمليات التجارية",
            description: "تبسيط عملياتك باستخدام تدفقات العمل الآلية.",
            icon: <FaCogs />
          },
          {
            title: "التطوير الخارجي",
            description:
              "الوصول إلى أفضل المواهب البرمجية من جميع أنحاء العالم.",
            icon: <FaGlobe />
          },
          {
            title: "حلول الأعمال المرنة",
            description: "إنجاز المشاريع بكفاءة باستخدام منهجيات أجايل.",
            icon: <FaBolt />
          },
          {
            title: "تحديد نطاق المنتج",
            description: "تحديد رؤيتك للمنتج من خلال جلسات تفصيلية.",
            icon: <FaSearch />
          },
          {
            title: "تصميم واجهة المستخدم/تجربة المستخدم",
            description: "زيادة تفاعل المستخدم مع تصاميم جذابة.",
            icon: <FaPencilAlt />
          }
        ]
      },
      commitment: {
        title: "التزامنا بالجودة",
        items: [
          {
            title: "اختبار دقيق",
            description: "نضمن اختبار كل حل بدقة.",
            icon: <FaFlask />
          },
          {
            title: "أفضل الممارسات",
            description: "ملتزمون بمعايير الصناعة وأفضل الممارسات.",
            icon: <FaMedal />
          },
          {
            title: "الاهتمام بالتفاصيل",
            description: "لا نهمل التفاصيل الصغيرة.",
            icon: <FaEye />
          },
          {
            title: "الأمان والموثوقية",
            description:
              "نعطي الأولوية للأنظمة الآمنة والمستقرة والموثوقة لضمان راحتك.",
            icon: <FaLock />
          }
        ]
      },
      process: {
        title: "عملياتنا",
        steps: [
          "فهم احتياجاتك",
          "التخطيط الاستراتيجي",
          "التطوير المبتكر",
          "ضمان الجودة",
          "التحسين المستمر"
        ]
      },
      contact: {
        title: "تواصل معنا",
        description:
          "يسعدنا سماع آرائكم. تواصل معنا للاستشارة أو لأي استفسارات.",
        form: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          message: "الرسالة",
          submit: "إرسال الرسالة"
        }
      },
      about: {
        title: "من نحن",
        content: `مرحباً بكم في ديفنسي! نحن شركة استشارية برمجية رائدة نكرس جهودنا لتقديم حلول مبتكرة ومخصصة لعملائنا. مهمتنا هي تمكين الشركات من خلال الاستفادة من التكنولوجيا لدفع النمو والكفاءة والنجاح.

يضم فريقنا خبراء شغوفين بتحويل الأفكار إلى واقع باستخدام أحدث التقنيات. نؤمن بأن الابتكار يبدأ بالتعاون، ونعمل جنبًا إلى جنب مع عملائنا لتطوير حلول تلبي احتياجاتهم الفريدة. نحن ملتزمون بالتميز والاختبار الدقيق والتحسين المستمر لضمان تقديم أفضل النتائج.

في ديفنسي، نقدر النزاهة والشفافية والإبداع. هدفنا هو بناء شراكات طويلة الأمد ومساعدة الشركات على مواجهة تحديات التحول الرقمي. انضم إلينا لتختبر قوة التكنولوجيا في تحقيق النجاح.`
      },
      privacy: {
        title: "سياسة الخصوصية",
        content: `خصوصيتك مهمة بالنسبة لنا. توضح سياسة الخصوصية هذه كيف تجمع ديفنسي معلوماتك الشخصية وتستخدمها وتحميها. نحن ملتزمون بضمان حماية خصوصيتك.

جمع المعلومات:  
قد نقوم بجمع معلومات شخصية مثل الاسم وعنوان البريد الإلكتروني وأي تفاصيل أخرى تقدمها عند التواصل معنا أو استخدام خدماتنا.

استخدام المعلومات:  
نستخدم المعلومات التي نجمعها للرد على استفساراتك، وتحسين خدماتنا، والتواصل معك بشأن عروضنا.

أمان البيانات:  
نعتمد إجراءات أمنية معيارية لحماية معلوماتك من الوصول غير المصرح به أو الكشف عنها أو تدميرها.

الكشف لطرف ثالث:  
لن نقوم ببيع أو تداول أو نقل معلوماتك الشخصية إلى أطراف خارجية، باستثناء ما يقتضيه القانون.

تغييرات السياسة:  
نحتفظ بالحق في تحديث سياسة الخصوصية هذه من وقت لآخر. إذا قمنا بإجراء تغييرات، سنقوم بنشرها هنا.

اتصل بنا:  
إذا كانت لديك أية أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا.`
      },
      terms: {
        title: "شروط الاستخدام",
        content: `تحكم شروط الاستخدام هذه استخدامك لموقع وخدمات ديفنسي. باستخدامك للموقع، فإنك توافق على هذه الشروط.

استخدام الخدمات:  
توفر ديفنسي خدمات استشارية ومعلومات لأغراض عامة فقط. نحتفظ بالحق في تعديل أو إيقاف خدماتنا في أي وقت دون إشعار مسبق.

إخلاء المسؤولية:  
المعلومات المقدمة على هذا الموقع لأغراض إعلامية عامة فقط. لا تقدم ديفنسي أي ضمانات بشأن اكتمال أو دقة هذه المعلومات.

تحديد المسؤولية:  
لن تكون ديفنسي مسؤولة عن أي أضرار تنشأ عن استخدام خدماتها.

القانون الواجب التطبيق:  
تخضع هذه الشروط للقوانين المعمول بها في الجهة التي تعمل بها ديفنسي.

تغييرات الشروط:  
نحتفظ بالحق في تحديث شروط الاستخدام هذه في أي وقت. استمرارك في استخدام الموقع بعد نشر التغييرات يعني موافقتك على الشروط المعدلة.

اتصل بنا:  
إذا كانت لديك أية أسئلة حول هذه الشروط، يرجى التواصل معنا.`
      },
      footer: {
        rights: "© 2025 ديفنسي. جميع الحقوق محفوظة."
      }
    }
  };

  const currentText = text[lang];

  // Theme styles
  const themeStyles = {
    light: {
      background: "#ffffff",
      text: "#0d1b2a",
      accent: "#0d1b2a",
      gradient: "linear-gradient(135deg, #a8dadc, #f1faee)"
    },
    dark: {
      background: "#0d1b2a",
      text: "#ffffff",
      accent: "#ffffff",
      gradient: "linear-gradient(135deg, #457b9d, #1d3557)"
    }
  };

  const currentTheme = themeStyles[theme];

  // Handle contact form submission (using mailto for now)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    try {
      await fetch(FORM_API, {
        method: 'POST',
        redirect: "manual",
        body: JSON.stringify({
          name,
          email,
          message,
        })
      });
      alert(lang === "en" ? "Thank you for contacting us. We will be in touch soon!" : 
        "شكراً لتواصلك معنا. سوف نتواصل معك قريباً!");
    } catch(err) {
      alert(lang === "en" ? "Something went wrong. Please try again later." :
        "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً.");
    }
  };

  return (
    <Router>
      <div
        style={{
          background: currentTheme.background,
          color: currentTheme.text,
          transition: "background 0.3s, color 0.3s",
          direction: lang === "ar" ? "rtl" : "ltr",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6
        }}
      >
        {/* Top Navbar */}
        <header
          style={{
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${currentTheme.accent}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to='/'>
            <img
              src="logo.svg"
              alt="Devency Logo"
              style={{ width: '60px', height: 'auto', margin: '10px', cursor: "pointer"}}
            />
            </Link>

            <h1 style={{ margin: 0 }}>{currentText.title}</h1>
          </div>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                margin: 0,
                padding: 0,
                flexWrap: "wrap"
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: currentTheme.text }}
                >
                  {lang === "en" ? "Home" : "الرئيسية"}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: currentTheme.text }}
                >
                  {lang === "en" ? "About Us" : "من نحن"}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  style={{ textDecoration: "none", color: currentTheme.text }}
                >
                  {lang === "en" ? "Privacy" : "الخصوصية"}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  style={{ textDecoration: "none", color: currentTheme.text }}
                >
                  {lang === "en" ? "Terms of Use" : "شروط الاستخدام"}
                </Link>
              </li>
            </ul>
          </nav>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              onClick={toggleTheme}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: currentTheme.text
              }}
              title={
                theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"
              }
            >
              {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
            <button
              onClick={toggleLanguage}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: currentTheme.text,
                fontSize: "1rem"
              }}
              title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentText={currentText}
                currentTheme={currentTheme}
                lang={lang}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                currentText={currentText.about}
                currentTheme={currentTheme}
                lang={lang}
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <PrivacyPage
                currentText={currentText.privacy}
                currentTheme={currentTheme}
                lang={lang}
              />
            }
          />
          <Route
            path="/terms"
            element={
              <TermsPage
                currentText={currentText.terms}
                currentTheme={currentTheme}
                lang={lang}
              />
            }
          />
        </Routes>

        <Footer
          currentTheme={currentTheme}
          lang={lang}
          currentText={currentText.footer}
        />
      </div>
    </Router>
  );
}

// Home (Landing Page) Component
function Home({ currentText, currentTheme, lang, handleSubmit }) {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          background: currentTheme.gradient,
          padding: "80px 20px",
          textAlign: "center",
          animation: "fadeIn 1s ease-in-out"
        }}
      >
        <h2 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
          {currentText.hero.headline}
        </h2>
        <p style={{ fontSize: "1.3rem", marginBottom: "40px" }}>
          {currentText.hero.subheadline}
        </p>
        {/* CTA linking to the Contact section */}
        <a href="#contact" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              background: currentTheme.accent,
              color: currentTheme.background,
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {lang === "en" ? "Learn More" : "اعرف المزيد"}
          </button>
        </a>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "60px 20px",
          background:
            currentTheme.background === "#ffffff" ? "#f9f9f9" : "#1b263b",
          animation: "fadeInUp 1s ease-in-out"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          {currentText.services.title}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          {currentText.services.items.map((service, index) => (
            <div
              key={index}
              style={{
                background: currentTheme.background,
                border: `1px solid ${currentTheme.accent}`,
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment to Quality Section */}
      <section
        id="commitment"
        style={{
          padding: "60px 20px",
          background:
            currentTheme.background === "#ffffff" ? "#f0f0f0" : "#1d3557",
          animation: "fadeInUp 1s ease-in-out"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          {currentText.commitment.title}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          {currentText.commitment.items.map((item, index) => (
            <div
              key={index}
              style={{
                background: currentTheme.background,
                border: `1px solid ${currentTheme.accent}`,
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        style={{
          padding: "60px 20px",
          background:
            currentTheme.background === "#ffffff" ? "#f9f9f9" : "#1b263b",
          animation: "fadeInUp 1s ease-in-out"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          {currentText.process.title}
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px"
          }}
        >
          {currentText.process.steps.map((step, index) => (
            <div
              key={index}
              style={{
                background: currentTheme.background,
                border: `1px solid ${currentTheme.accent}`,
                borderRadius: "8px",
                padding: "20px",
                width: "150px",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 style={{ margin: "10px 0" }}>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "60px 20px",
          animation: "fadeInUp 1s ease-in-out"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {currentText.contact.title}
        </h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          {currentText.contact.description}
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input
            type="text"
            name="name"
            placeholder={currentText.contact.form.name}
            required
            style={{
              padding: "10px",
              border: `1px solid ${currentTheme.accent}`,
              borderRadius: "4px"
            }}
          />
          <input
            type="email"
            name="email"
            placeholder={currentText.contact.form.email}
            required
            style={{
              padding: "10px",
              border: `1px solid ${currentTheme.accent}`,
              borderRadius: "4px"
            }}
          />
          <textarea
            name="message"
            placeholder={currentText.contact.form.message}
            required
            rows="5"
            style={{
              padding: "10px",
              border: `1px solid ${currentTheme.accent}`,
              borderRadius: "4px"
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "15px",
              background: currentTheme.accent,
              color: currentTheme.background,
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.3s, transform 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {currentText.contact.form.submit}
          </button>
        </form>
      </section>
    </div>
  );
}

// About Page Component
function AboutPage({ currentText, currentTheme, lang }) {
  return (
    <div style={{ padding: "40px 20px", animation: "fadeIn 1s ease-in-out" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {currentText.title}
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", whiteSpace: "pre-line" }}>
        {currentText.content}
      </div>
    </div>
  );
}

// Privacy Policy Page Component
function PrivacyPage({ currentText, currentTheme, lang }) {
  return (
    <div style={{ padding: "40px 20px", animation: "fadeIn 1s ease-in-out" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {currentText.title}
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", whiteSpace: "pre-line" }}>
        {currentText.content}
      </div>
    </div>
  );
}

// Terms of Use Page Component
function TermsPage({ currentText, currentTheme, lang }) {
  return (
    <div style={{ padding: "40px 20px", animation: "fadeIn 1s ease-in-out" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {currentText.title}
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", whiteSpace: "pre-line" }}>
        {currentText.content}
      </div>
    </div>
  );
}

// Footer Component
function Footer({ currentTheme, lang, currentText }) {
  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        borderTop: `1px solid ${currentTheme.accent}`,
        marginTop: "40px"
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap"
        }}
      >
        <Link to="/about" style={{ textDecoration: "none", color: currentTheme.text }}>
          {lang === "en" ? "About Us" : "من نحن"}
        </Link>
        <Link to="/privacy" style={{ textDecoration: "none", color: currentTheme.text }}>
          {lang === "en" ? "Privacy" : "الخصوصية"}
        </Link>
        <Link to="/terms" style={{ textDecoration: "none", color: currentTheme.text }}>
          {lang === "en" ? "Terms of Use" : "شروط الاستخدام"}
        </Link>
      </div>
      <p>{currentText.rights}</p>
    </footer>
  );
}

// Inject keyframe animations into the document
const styleSheet = document.styleSheets[0];
const keyframesFadeIn = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`;
const keyframesFadeInUp = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;
styleSheet.insertRule(keyframesFadeIn, styleSheet.cssRules.length);
styleSheet.insertRule(keyframesFadeInUp, styleSheet.cssRules.length);

export default App;
