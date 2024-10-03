import React, { useEffect } from "react";
import { HardWareSoftwareImg } from "../../../components/config";
import styles from "../styles.module.css";

const StaySafeOnlineBlog = () => {
  const tipsToStafeArray = [
    {
      id: 1,
      name: "Download Only from Trusted Sources",
      details: [
        {
          type: "Use Official Websites",
          des: "When downloading software, always use the official website of the company. Avoid clicking on random links that promise free downloads or discounts",
        },
        {
          type: "Check the Website Address",
          des: "Look for a secure connection by checking if the website URL starts with https and has a padlock symbol. This indicates a more secure site.",
        },
      ],
    },
    {
      id: 2,
      name: "Be Sceptical of Unsolicited Emails and Links",
      details: [
        {
          type: "Verify Before Clicking",
          des: "If you receive an email from a company asking you to download a file or click on a link, check the sender’s email address and hover over links to see where they lead. If something seems off, don’t click!",
        },
        {
          type: "Ignore Pop-Ups Claiming Your Computer is Infected",
          des: "Some pop-ups are scams that try to scare you into downloading malicious software. Close the pop-up and run a scan with your trusted antivirus software instead.",
        },
      ],
    },
    {
      id: 3,
      name: "Be Sceptical of Unsolicited Emails and Links",
      details: [
        {
          type: "Enable Automatic Updates",
          des: "Regular updates include security fixes that protect against the latest threats. Ensure your operating system, browser, and any installed applications are up to date.",
        },
        {
          type: "Install Antivirus Software",
          des: "Reliable antivirus software can detect and block malware before it can harm your computer. Make sure to keep your antivirus software updated and run regular scans.",
        },
      ],
    },
    {
      id: 4,
      name: "Use Strong Passwords and Multi-Factor Authentication",
      details: [
        {
          type: "Create Strong, Unique Passwords",
          des: "Use passwords that combine letters, numbers, and special characters. Avoid using easily guessed information like birthdays or common words.",
        },
        {
          type: "Enable Multi-Factor Authentication (MFA)",
          des: "MFA adds an extra layer of security by requiring not just a password but also a code sent to your phone or email.",
        },
      ],
    },
    {
      id: 5,
      name: "Regularly Backup Your Data",
      details: [
        {
          type: "Use External Hard Drives or Cloud Storage",
          des: "Regular backups ensure that your important files and photos are safe even if your computer is compromised.",
        },
        {
          type: "Set Up Automatic Backups",
          des: "Automate the backup process to ensure your data is consistently protected.",
        },
      ],
    },
    {
      id: 6,
      name: "Educate Yourself About Common Scams",
      details: [
        {
          type: "Learn the Signs",
          des: "Familiarize yourself with common phishing tactics and malware delivery methods. The more you know, the better prepared you’ll be to recognize and avoid them.",
        },
        {
          type: "Talk to Trusted Friends or Family",
          des: "If you’re unsure about a download or a suspicious message, ask a trusted friend or family member for advice.",
        },
      ],
    },
    {
      id: 7,
      name: "Be Cautious with Free Software and Downloads",
      details: [
        {
          type: "Free Isn't Always Safe",
          des: "While free software can be tempting, it’s often used as a bait to distribute malware. Always research and download from reputable sources.",
        },
        {
          type: "Read Reviews and Check Ratings",
          des: "Look for user reviews and ratings before downloading software. If many users report problems or security concerns, stay away.",
        },
      ],
    },
    {
      id: 8,
      name: "Install a Pop-Up Blocker",
      details: [
        {
          type: "Prevent Unwanted Pop-Ups",
          des: "Pop-up ads can sometimes lead to malicious downloads. A pop-up blocker can help prevent these from appearing and reduce the risk of accidental downloads.",
        },
      ],
    },
  ];
  return (
    <div className={styles.StaySafeOnlineContainer}>
      <div className="mt-4 mb-4">
        <h4 id="1">Stay Safe Online: The Dangers of Downloading from Unknown Sources</h4>
        <img src={HardWareSoftwareImg} alt="" />
        <p>
          As we spend more time online, it's crucial to stay aware of the risks posed by cyber threats like malware and
          phishing scams. These digital dangers can compromise your personal information, financial security, and even
          the health of your computer. People aged 50 and above are often targeted because cybercriminals assume they
          may not be as familiar with the latest technology trends and security measures. One of the most common ways
          these threats can enter your computer is through downloading files from unknown sources. In this article,
          we’ll discuss what malware and phishing are, how they work, and practical steps you can take to protect
          yourself.
        </p>
      </div>

      <div className="mt-4 mb-4">
        <span className={styles.title}>What Are Malware and Phishing?</span>
        <p className="mt-3">
          <b>Malware</b> is a term for malicious software designed to harm your computer or steal personal information.
          This includes viruses, spyware, and ransomware, which can cause your computer to slow down, delete important
          files, or even lock you out of your system until you pay a ransom.
        </p>
        <p>
          <b>Phishing</b> refers to scams that trick you into giving away personal information like your credit card
          number, social security number, or passwords. These scams often come in the form of emails, text messages, or
          websites that appear legitimate but are actually traps set by cybercriminals.
        </p>
      </div>
      <div className="mt-4 mb-4">
        <span className={styles.title}>Why Downloading from Unknown Sources is Dangerous</span>
        <p className="mt-3">
          Downloading files or programs from the internet can be risky, especially when you’re unsure of the source.
          Here’s why downloading from unknown sources is dangerous:
        </p>

        <div className={styles.tipContainer}>
          {tipsToStafeArray.map((v, i) => (
            <div className="mt-4 mb-4">
              <h5>
                {i + 1}.&nbsp;{v.name}
              </h5>
              <ul>
                {v.details.map((x, y) => (
                  <li>
                    <b>{x.type} - </b>
                    {x.des}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 mb-4">
        <span className={styles.title}>Conclusion</span>
        <p className="mt-3">
          Staying vigilant against malware attacks and phishing scams is crucial, especially for those who may not be as
          familiar with the latest technology trends. By understanding the risks of downloading from unknown sources and
          following these tips, you can significantly reduce your vulnerability to cyber threats. Remember to download
          only from trusted sites, keep your software updated, and be cautious with emails and pop-ups. With these
          simple steps, you can enjoy a safer and more secure online experience.
        </p>
      </div>
    </div>
  );
};

export default StaySafeOnlineBlog;
