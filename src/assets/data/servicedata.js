import {
  faPhone,
  faComments,
  faCogs,
  faCheck,
  faLaptopCode,
  faPalette,
  faNetworkWired,
  faServer,
  faGraduationCap,
  faPaintBrush,
  faTools,
  faRoute,
  faBriefcase,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

export const servicesData = {
  intro: {
    title: "Unlock Your Potential with Focus IT Courses",
    description:
      "Focus IT Education offers practical, expert-led courses, from basic computer skills to advanced certifications, empowering learners to thrive in today’s tech-driven world.",
  },
  coursesAndOfferings: [
    {
      icon: faGraduationCap,
      title: "Basic Computer Course",
      description:
        "Master essential computer skills including Microsoft Office and internet basics.",
      duration: "3 Months",
      topics: [
        "Introduction to Computer",
        "Introduction to Switch, Port & Typing",
        "Microsoft Windows",
        "Windows Accessories Programs",
        "Picture, Music, and Videos",
        "Managing Files and Folders",
        "Working with Control Panel",
        "Microsoft Office 2007, 2010, 2013, 2016",
        "Word",
        "Excel",
        "PowerPoint",
        "Email and Internet",
        "Computer Virus & Anti-virus",
      ],
    },
    {
      icon: faLaptopCode,
      title: "Advanced Diploma",
      description:
        "Gain advanced knowledge in tools like Photoshop, CorelDRAW, and Microsoft Access.",
      duration: "6 Months",
      topics: [
        "Review of Microsoft Office",
        "Disk Operating System (DOS)",
        "Hypertext Markup Language (HTML)",
        "Adobe Pagemaker/Indesign",
        "Adobe Photoshop",
        "Microsoft Access",
        "CorelDRAW",
        "Install/Remove Program",
        "Managing Files and Folders",
        "Working with Control Panel",
        "Computer Virus & Anti-virus",
        "CD Burning",
        "Email & Internet",
      ],
    },
    {
      icon: faPaintBrush,
      title: "Graphic Designing",
      description:
        "Create stunning visuals with tools like Photoshop and CorelDRAW.",
      duration: "3 Months",
      topics: [
        "Introduction to Image Color & Resolution",
        "Adobe Pagemaker",
        "Indesign",
        "Adobe Photoshop",
        "CorelDRAW",
      ],
    },
    {
      icon: faPalette,
      title: "Webpage Designing",
      description:
        "Learn front-end development, WordPress, SEO, and website maintenance.",
      duration: "3 Months",
      topics: [
        "Local Server Installation",
        "Front-End Development",
        "HTML5",
        "WordPress Themes and Plugins",
        "Image Processing for Web (Photoshop)",
        "Cascading Style Sheets (CSS)",
        "Search Engine Optimization (SEO)",
        "Basic Video Editing",
        "Website Maintenance",
      ],
    },
    {
      icon: faTools,
      title: "Crash Courses",
      description:
        "Quickly learn programming languages like Python, JavaScript, and AutoCAD.",
      duration: "Variable",
      topics: [
        "Q-Basic",
        "C",
        "C++",
        "AutoCAD",
        "VB.Net",
        "ASP.Net",
        "JavaScript",
        "Java",
        "Python",
        "MySQL",
      ],
    },
    {
      icon: faNetworkWired,
      title: "Hardware & Networking",
      description:
        "Build expertise in PC assembly, networking, and troubleshooting.",
      duration: "6 Months",
      topics: [
        "Introduction of Computer Components, Tools and Safety Measures",
        "Assembling PC",
        "Firewall Upgrade (Dual BIOS & BIOS Setting)",
        "Different OS and Compatibility",
        "Windows Installation, Partition and Formatting Disk",
        "Dual Boot Installation",
        "Installing Application Software, Device Driver & 3rd Party Installation",
        "Backup and Restore",
        "Basics of Computer Network",
        "Transmission Media",
        "Network Devices",
        "Network Topology",
        "OSI Model",
        "TCP/IP Protocol",
        "IP Addressing",
        "Structured Cabling",
        "Manage Networks",
        "Manage Data Access & Protection",
        "Manage Remote Access, Application, Update and Recovery",
        "OS Password Recovery",
      ],
    },
    {
      icon: faRoute,
      title: "CISCO Routing",
      description:
        "Master networking and infrastructure with advanced Cisco technologies.",
      duration: "3 Months",
      topics: [
        "Networking Fundamentals",
        "IP Addressing",
        "Basic LAN Switching Technologies",
        "Advance LAN Switching Technologies",
        "Working with Cisco Devices",
        "Basic and Advanced Routing Technology",
        "Infrastructure Services",
        "Infrastructure Security",
        "Infrastructure Management",
        "Basic and Advanced Troubleshooting",
      ],
    },
    {
      icon: faBriefcase,
      title: "Modern Workplace",
      description:
        "Excel in Office 365, email management, and workplace networking.",
      duration: "1 Month",
      topics: [
        "Revision of Computer Professional Course",
        "MS Windows 10",
        "E-mail and Client Configuration",
        "Basic Computer Network",
        "IP Addressing",
        "E-Mail Client Configuration",
        "Working with Office 365",
      ],
    },
    {
      icon: faServer,
      title: "Windows Server 2016",
      description:
        "Develop advanced server and virtualization management skills.",
      duration: "3 Months",
      topics: [
        "Introduction to Windows Server OS",
        "Introduction to Active Directory Domain and Services",
        "Installing, Configuring, and Migrating Services and Workloads",
        "Introduction to AD DS Roles",
        "Installing and Managing AD DS",
        "Implementing Group and Data Deduplication",
        "Installing and Managing Hyper-V and Virtual Machines",
        "Managing Storage with Windows Server 2016 Hyper-V",
        "Implementation of Clustered Services",
        "Introduction to Failover Clustering",
        "Installing and Configuring Windows Server 2016 Hyper-V",
        "Implementation of Active Directory Federation Services",
        "Installing and Configuring Virtual Machine Installations",
      ],
    },
    {
      icon: faCalculator,
      title: "Accounting Package",
      description:
        "Learn Tally and FinAct for professional accounting solutions.",
      duration: "1 Month",
      topics: ["Tally", "F-Pro", "Swotlik", "FinAct"],
      note: "Accounting Package With Modern Work Place (Fully Official Package)",
    },
  ],
  testimonials: [
    {
      text: "The team delivered an exceptional website that exceeded our expectations.",
      author: "Sarah Johnson",
    },
    {
      text: "Their mobile app solution transformed the way we interact with customers.",
      author: "Mark Wilson",
    },
  ],
  process: [
    { icon: faPhone, description: "Step 1: Get in Touch" },
    { icon: faComments, description: "Step 2: Consultation" },
    { icon: faCogs, description: "Step 3: Enrollment" },
    { icon: faCheck, description: "Step 4: Start Learning" },
  ],
  faqs: [
    {
      question: "What courses does Focus IT Education offer?",
      answer:
        "Focus IT Education offers a wide range of courses, including Basic Computer Skills, Advanced Diploma in Computer Applications, Graphic Designing, Webpage Designing, Hardware & Networking, and more.",
    },
    {
      question: "Do you provide certifications for your courses?",
      answer:
        "Yes, we provide certifications upon successful completion of each course. Our certifications are recognized and add value to your professional profile.",
    },
    {
      question: "Are your courses suitable for beginners?",
      answer:
        "Absolutely! We offer courses specifically designed for beginners, such as the Basic Computer Course, which covers fundamental skills like Microsoft Office, internet usage, and file management.",
    },
    {
      question:
        "Can I take classes online, or are they only available in-person?",
      answer:
        "We provide flexible in-person classes at our center at different times.",
    },
    {
      question: "What are the timings for the classes?",
      answer:
        "We offer flexible class timings to accommodate different schedules. Our business hours are from 6:00 AM to 6:00 PM on most days, with special hours on Saturdays. Contact us for specific batch timings.",
    },
    {
      question: "Do you offer crash courses?",
      answer:
        "Yes, we provide crash courses in various programming languages, including Python, Java, AutoCAD, and more, tailored for those who want to learn quickly.",
    },
    {
      question: "What kind of support do you provide to students?",
      answer:
        "We offer dedicated support through expert instructors, hands-on practice, and access to resources. Additionally, we provide career guidance and placement assistance for select courses.",
    },
    {
      question: "What is the enrollment process?",
      answer:
        "Enrollment is simple! Contact us through our website, email, or phone, and our team will guide you through course selection, batch scheduling, and registration.",
    },
    {
      question: "Are there any prerequisites for joining your courses?",
      answer:
        "Most of our beginner-level courses have no prerequisites. Advanced courses may require basic knowledge of computers or completion of related introductory courses. Please check the course details for specific requirements.",
    },
    {
      question: "Do you offer corporate training programs?",
      answer:
        "Yes, we provide customized corporate training programs to upskill employees in areas like networking, cybersecurity, and productivity tools like Microsoft Office 365.",
    },
  ],
};
