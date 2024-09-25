import {
  CpuServicePng,
  DataRecoveryServicePng,
  HardWareSoftwareImg,
  InternetFirewall,
  MotherBoardDark,
  PasswordResetImg,
  ServiceGeneral,
  SurveillanceInstallation,
  VirusRecovery,
} from "../../components/config";

const navMenuArray = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/aboutUs" },
  { id: 3, name: "Service", link: "/service" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact Us", link: "/contactUs" },
];

const servicesDetails = [
  {
    id: 1,
    name: "Desktop / Laptop / All-in-Ones Repair",
    img: CpuServicePng,
    details: [
      {
        title: "Quick Service",
        desc: "(counter time per minute) If we can help you with within a few minutes, only pay per minute",
        price: "$1.00",
      },
      {
        title: "Computer Diagnosis FREE",
        desc: "with existing paid service. We will diagnose your device while you wait and give you an estimate of cost. If diagnosis runs over 10 minutes, we will have to check it in.",
        price: "$45.00",
      },
      {
        title: "Minimum Bench Fee",
        desc: "If your issue is a relatively easier fix,you will only pay the minimum bench fee.",
        price: "$45.00",
      },
    ],
  },
  {
    id: 2,
    name: "Hardware Diagnostic & Repair",
    img: MotherBoardDark,
    details: [
      {
        title: "Laptop Screen Repair",
        desc: "We will replace your cracked or broken LCD screen. (Does not include new screen, which usually costs",
        price: "$75.) — $90.00",
      },
      {
        title: "Laptop Power Socket Repair",
        desc: "We will take apart & replace your laptop power socket (Does not include new socket, which usually costs ",
        price: "$25.) — $90.00",
      },
      {
        title: "Clean Out with Compressor Service",
        desc: "We will blow all dust and debris from throughout the machine to prevent overheating",
        price: "$50.00",
      },
    ],
  },
  {
    id: 3,
    name: "Hardware / Software Upgrades",
    img: HardWareSoftwareImg,
    details: [
      {
        title: "Operating System Installation",
        desc: "Operating System to Original OS & Run Like New!",
        price: "$75.00",
      },
      {
        title: "OS Install & Backup ",
        desc: "Install Operating System to Original OS & Restore Backup Data (20 GB)",
        price: "$125.00",
      },
      {
        title: "Software Install Add – On",
        desc: "As a part of an existing service — Starting at $25.00 and Otherwise",
        price: "$45.00",
      },
      {
        title: "Software Install",
        desc: "We will install your software and set it up. If this service is a part of another service, the price may be reduced. (Complex software may require a higher rate)",
        price: "$65.00",
      },
      {
        title: "Hardware Install",
        desc: "As a part of an existing service — Starting at $25.00 and Otherwise — Starting at $55.00.Priority Service Add-On – Need it Sooner? Priority attention to your system with minimal down time — (Service + Add-On)",
        price: "$99.00",
      },
    ],
  },
  {
    id: 4,
    name: "Virus and Malware Removal",
    img: VirusRecovery,
    details: [
      {
        title: "Virus & Spyware Removal ",
        desc: "Full system virus & spyware removal and install trial security software (optional)",
        price: "$125.00",
      },
    ],
  },
  {
    id: 5,
    name: "Data Recovery Services",
    img: DataRecoveryServicePng,
    details: [
      {
        title: "System Backup",
        desc: " System Backup & Restore of Users Files (up to two users at 10 GB) ",
        price: "$75.00",
      },
      {
        title: "System Backup",
        desc: "In-Depth Data Recovery",
        price: "$125.00",
      },
      {
        title: "Recovery of Lost or Damaged Files",
        desc: "even after formatting or emptying the recycle bin",
        price: "$125.00",
      },
    ],
  },
];

const internetServiceDetails = [
  {
    id: 1,
    name: "Internet Firewall & Security",
    img: InternetFirewall,
    details:
      "System & Security Updates We will update your operating system with the latest security updates as well as your security program",
    price: "$99.00",
  },
  {
    id: 2,
    img: PasswordResetImg,
    name: "Password Reset",
    details: "Account Management Online Password Changes, Social Media Login, New Account Setup, etc. ",
    price: "$45.00",
  },
  {
    id: 3,
    name: "Surveillance Installation & Configuration",
    img: SurveillanceInstallation,
    details:
      "Enhance the security of your home or business with our tailored security solutions. Monitor your property from anywhere in the world using your smartphone, tablet, or computer, with full audio and video capabilities. Additionally, all activity is recorded onsite or offsite for your peace of mind. Receive instant notifications in case of any security breaches.",
    price: "$",
  },
];

const AnnualDetails = [
  {
    id: 1,
    name: "Office Call Price without a Monthly Contract",
    details: "$200 first hour and then $125 per extra hour",
  },
  {
    id: 2,
    name: "IT Support Monthly Contract Cost",
    details: "Monthly Contract to Cover Groups of 5 Computers for $100/Month",
    subPoints: [
      {
        type: "Small Office",
        text: "1 to 5 Computers",
        price: "$100/Month",
      },
      {
        type: "Medium Office",
        text: "1 to 10 Computers",
        price: "$200/Month",
      },
      {
        type: "Large Office",
        text: "1 to 15 Computers",
        price: "$300/Month",
      },
      {
        type: "Extra Large Office",
        text: "1 to 20 Computers",
        price: "$400/Month",
      },
    ],
  },
  {
    id: 3,
    name: "Server Monitoring and Hacker Prevention",
    details: "$100/Month per Server",
  },
];


export const staticData = {
  navMenuArray,
  servicesDetails,
  internetServiceDetails,
  AnnualDetails,
};
