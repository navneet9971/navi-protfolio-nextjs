export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#myskills" },
  { name: "Contact", link: "#contact" },
];

export const email = "Navneetjha2012@gmail.com";

export const gridItems = [
  {
    id: 1,
    title: "Prioritizing client collaboration through transparent, open lines of communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Effortlessly accommodate diverse time zones for effective collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 4,
  //   title: "Passionate tech enthusiast dedicated to innovative development",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  {
    id: 5,
    title: "Exploring a new framework to broaden skills",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Recytronics Waste Pickup",
    des: "React Native pickup app live on Google Play and the App Store. Users schedule doorstep collection, scan waste with Gemini and Hugging Face for an estimated recycling value, and book from their location. Backend on Node.js and MongoDB.",
    img: "",
    tags: ["React Native", "Gemini AI", "Hugging Face", "Node.js", "MongoDB"],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.recytronics.pickup.app&pcampaignid=web_share",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/recytronicspickup/id6764770150",
      },
    ],
    status: "Live on iOS & Android",
  },
  {
    id: 2,
    title: "Google Maps Lead Intel",
    des: "Pulls business data from Google Maps through Apify. When a listing has a website, Hugging Face extracts emails and phone numbers so outreach lists are ready without manual scraping.",
    img: "",
    tags: ["Apify", "Google Maps", "Hugging Face", "Node.js"],
    links: [],
    status: "Internal tooling",
  },
  {
    id: 3,
    title: "CINOVRA",
    des: "Movie and series companion currently in Play Store testing. Search titles, check ratings, add your own score, and keep a watchlist plus a watched list. Categories like timepass and worth watching help you pick what to play next.",
    img: "",
    tags: ["React Native", "Node.js", "MongoDB", "Ratings"],
    links: [],
    status: "Play Store testing",
  },
  {
    id: 4,
    title: "Recytronics Internal CRM",
    des: "Internal ops CRM for Recytronics: mark attendance, upload sales data, log pickup-schedule details, and keep field activity in one place for the team.",
    img: "",
    tags: ["Next.js", "Node.js", "MongoDB", "CRM"],
    links: [],
    status: "Internal product",
  },
  {
    id: 5,
    title: "Chrcha - Video Conferencing App",
    des: "Simplify your video conferencing experience with Charcha. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    tags: ["Next.js", "Tailwind", "TypeScript", "Stream"],
    links: [
      { label: "Live Preview", url: "https://char-cha.vercel.app/" },
      { label: "GitHub", url: "https://github.com/navneet9971/zoom-clone-fullstack.git" },
    ],
    status: "Live",
  },
  {
    id: 6,
    title: "Money Tracker",
    des: "Logging daily expenses to better understand your spending patterns.",
    img: "/money.png",
    tags: ["Next.js", "Express", "Node.js", "MongoDB"],
    links: [
      { label: "Live Preview", url: "https://money-tracker-adv.vercel.app/" },
      { label: "GitHub", url: "https://github.com/navneet9971/money-tracker-adv.git" },
    ],
    status: "Live",
  },
  {
    id: 7,
    title: "Youtube 2.0",
    des: "YouTube 2.0 is a React.js application that mimics YouTube's core functionalities. It utilizes a free API from RapidAPI to fetch and display video content.",
    img: "/ytclone.png",
    tags: ["React.js", "RapidAPI"],
    links: [
      { label: "Live Preview", url: "https://you-tube-2-0-clone.vercel.app/" },
      { label: "GitHub", url: "https://github.com/navneet9971/You-Tube-2.0.git" },
    ],
    status: "Live",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    companyName: "Recytronics Waste Solutions LLP",
    date: "Dec 2025 — Present",
    title: "Software Developer",
    desc: "Building digital products for an authorised e-waste recycling company. Work spans pickup scheduling, operational dashboards, and web experiences that help households and organisations recycle electronics through formal channels.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    current: true,
    tags: ["Dashboards", "Pickup flows", "EPR tooling"],
  },
  {
    id: 2,
    companyName: "Ads Enviro",
    date: "May 2024 — Dec 2025",
    title: "Software Developer",
    desc: "Developed frontend applications supporting waste management and EPR operations. Focused on client-facing web experiences, internal tools, and dashboards that streamlined recycling workflows and environmental compliance reporting.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    current: false,
    tags: ["Web apps", "Operations", "Compliance"],
  },
  {
    id: 3,
    companyName: "AiCansell Pvt. Ltd.",
    date: "April 2023 — May 2024",
    title: "Software Developer",
    desc: "Developed a product featuring User and Admin panels, and also managed projects at Learning Lens. This platform focused on training workers and employees, offering CRM, Users, and Kiosk web applications. Working alongside a team of two, we ensured the smooth functioning of an internationally used product, including resolving backend data issues to optimize performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    current: false,
    tags: ["CRM", "Admin panel", "Kiosk apps"],
  },
  {
    id: 4,
    companyName: "Eikomp Pvt. Ltd.",
    date: "Feb 2022 — March 2023",
    title: "Intern → Frontend Developer",
    desc: "Joined as a frontend intern for two months, then converted to a full-time Frontend Developer. Built and maintained user-facing features with modern frontend tools. The product shipped during this period is used by the company's clients. Gained hands-on experience with APIs, Postman, npm, yarn, and multiple UI libraries.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    current: false,
    tags: ["Internship", "Full-time", "Frontend"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/navneet9971"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/Navi9971"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/navneet-kumar-42b75b204/"
  },
];

export const skills =[
  {
    id:1,
    image: "/skills/css.svg",
    name: "CSS",
    designation:""
  },
  {
    id:2,
    image: "/skills/html.svg",
    name: "HTML",
    designation:""
  },
  {
    id:3,
    image: "/skills/postman.svg",
    name: "Postman",
    designation:""
  },
  {
    id:4,
    image: "/skills/react.svg",
    name: "React.js",
    designation:""
  },
  {
    id:5,
    image: "/skills/nextjs.png",
    name: "Next.js",
    designation:""
  },
  {
    id:6,
    image: "/skills/tailwind.svg",
    name: "Tailwind",
    designation:""
  },
  {
    id:7,
    image: "/skills/javascript.svg",
    name: "JavaScript",
    designation:""
  },
  {
    id:8,
    image: "/skills/git.svg",
    name: "Git",
    designation:""
  },
  {
    id:9,
    image: "/skills/visual-studio-code.svg",
    name: "Visual Studio Code",
    designation:""
  }
];

export const icons =[
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "vercel",
  "testinglibrary",
  "git",
  "github",
  "visualstudiocode",
  "figma",
]

export const image =
  {
    delhi: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ5BPjweWM0hyUPHWb8QJtHYmj6T-ZHFXRcTcGxl_CcpZwc179fXPWprnYGS8B8fJ9f45Tn3ygk5gzrtEeRsIRCxGuUQMt5xBbtHcrP-dQ"
  }
