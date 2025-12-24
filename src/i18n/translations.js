import {
  FaRocket,
  FaCogs,
  FaGlobe,
  FaShieldAlt,
  FaCode,
  FaChartLine
} from "react-icons/fa";

export const translations = {
  en: {
    hero: {
      headline: "Engineering Excellence for Modern Enterprises",
      subheadline:
        "Transforming ambitious ideas into production-ready solutions through expert engineering and strategic innovation.",
      cta: "Get Started"
    },
    services: {
      title: "Our Capabilities",
      items: [
        {
          title: "Agentic Transformation",
          description:
            "Integrate intelligent AI agents into your workflows to automate decision-making and unlock unprecedented operational efficiency.",
          icon: <FaRocket />
        },
        {
          title: "Cloud Architecture Modernization",
          description:
            "Transform legacy systems into scalable, cloud-native architectures built for performance and resilience.",
          icon: <FaCode />
        },
        {
          title: "Enterprise Automation",
          description:
            "Streamline critical business processes with intelligent automation that reduces costs and accelerates delivery.",
          icon: <FaCogs />
        },
        {
          title: "Zero-Trust Security",
          description:
            "Embed enterprise-grade security into every layer of your application, from code to deployment.",
          icon: <FaShieldAlt />
        },
        {
          title: "Strategic Technical Planning",
          description:
            "Align your technology investments with business outcomes through data-driven roadmapping and architecture.",
          icon: <FaChartLine />
        },
        {
          title: "Product Engineering",
          description:
            "Build intuitive, high-performance applications that users love and teams can scale.",
          icon: <FaGlobe />
        }
      ]
    },
    process: {
      title: "How We Work",
      steps: [
        { title: "Discovery", desc: "We start by understanding your business goals, technical challenges, and success criteria." },
        { title: "Strategy", desc: "We design a pragmatic architecture that balances quick wins with long-term scalability." },
        { title: "Execution", desc: "We deliver in rapid iterations, ensuring transparency and continuous value delivery." },
        { title: "Quality", desc: "We ensure reliability through comprehensive testing, code reviews, and monitoring." },
        { title: "Launch & Scale", desc: "We deploy smoothly and optimize continuously based on real-world performance data." }
      ]
    },
    contact: {
      title: "Let's Build Together",
      description:
        "Tell us about your project, and we'll show you how we can help.",
      form: {
        name: "Name",
        email: "Work Email",
        message: "How can we help?",
        submit: "Submit Inquiry"
      }
    },
    footer: {
      rights: "© 2025 Devency. All Rights Reserved."
    },
    nav: {
      home: "Home",
      about: "Capabilities",
      terms: "Terms"
    }
  },
  ar: {
    hero: {
      headline: "التميّز الهندسي للمؤسسات الحديثة",
      subheadline:
        "نحوّل الأفكار الطموحة إلى حلول جاهزة للإنتاج من خلال الهندسة المتقدمة والابتكار الاستراتيجي.",
      cta: "ابدأ الآن"
    },
    services: {
      title: "قدراتنا",
      items: [
        {
          title: "التحول بالذكاء الاصطناعي التفاعلي",
          description:
            "دمج أنظمة ذكاء اصطناعي تفاعلية في سير عملك لأتمتة القرارات وتحقيق كفاءة تشغيلية استثنائية.",
          icon: <FaRocket />
        },
        {
          title: "تحديث البنية السحابية",
          description:
            "تحويل الأنظمة القديمة إلى بنية سحابية حديثة مصممة للأداء العالي والمرونة.",
          icon: <FaCode />
        },
        {
          title: "الأتمتة المؤسسية",
          description:
            "تبسيط العمليات الحيوية بأتمتة ذكية تخفض التكاليف وتسرّع الإنجاز.",
          icon: <FaCogs />
        },
        {
          title: "أمان الثقة المعدومة",
          description:
            "تضمين أمان على مستوى المؤسسات في كل طبقة من التطبيق، من الكود إلى النشر.",
          icon: <FaShieldAlt />
        },
        {
          title: "التخطيط التقني الاستراتيجي",
          description:
            "مواءمة استثماراتك التقنية مع أهداف العمل عبر خارطة طريق مدعومة بالبيانات.",
          icon: <FaChartLine />
        },
        {
          title: "هندسة المنتجات",
          description:
            "بناء تطبيقات بديهية عالية الأداء يحبها المستخدمون ويمكن للفرق توسيعها.",
          icon: <FaGlobe />
        }
      ]
    },
    process: {
      title: "طريقة عملنا",
      steps: [
        { title: "الاستكشاف", desc: "نبدأ بفهم أهداف عملك والتحديات التقنية ومعايير النجاح." },
        { title: "الاستراتيجية", desc: "نصمم بنية عملية توازن بين الإنجازات السريعة والقابلية للتوسع طويل الأمد." },
        { title: "التنفيذ", desc: "ننجز العمل على دفعات سريعة مع ضمان الشفافية والقيمة المستمرة." },
        { title: "الجودة", desc: "نضمن الموثوقية عبر الاختبار الشامل ومراجعة الكود والمراقبة." },
        { title: "الإطلاق والنمو", desc: "ننشر بسلاسة ونحسّن باستمرار بناءً على بيانات الأداء الفعلي." }
      ]
    },
    contact: {
      title: "لنبني معاً",
      description:
        "أخبرنا عن مشروعك وسنريك كيف يمكننا المساعدة.",
      form: {
        name: "الاسم",
        email: "بريد العمل",
        message: "كيف يمكننا المساعدة؟",
        submit: "إرسال الاستفسار"
      }
    },
    footer: {
      rights: "© 2025 ديفنسي. جميع الحقوق محفوظة."
    },
    nav: {
      home: "الرئيسية",
      about: "القدرات",
      terms: "الشروط"
    }
  }
};
