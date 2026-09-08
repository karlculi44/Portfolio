import { createElement } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const contacts = [
  {
    platform: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/karl.culi",
  },
  {
    platform: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/_kaimax_",
  },
  { platform: "GitHub", icon: FaGithub, link: "https://github.com/karlculi44" },
  {
    platform: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/karl-culi-131826328/",
  },

  {
    platform: "Email",
    icon: FaEnvelope,
    link: "mailto:kaimax187@gmail.com",
  },
  {
    platform: "Phone",
    icon: FaPhoneAlt,
    link: "tel:+639533019178",
    text: "+63 953 301 9178",
  },
  {
    platform: "Address",
    icon: FaHome,
    link: "https://www.google.com/maps/search/?api=1&query=Bayawan+City,+Negros+Oriental,+Philippines+6221",
    text: "Bayawan City, Negros Oriental",
  },
];

export default function ContactsSection() {
  return (
    <section id="contact" className="section-shell compact">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="eyebrow">05 / connect</div>
            <h2>Let’s build something.</h2>
          </div>
          <p>
            Have an idea, project, or opportunity? Reach out through any of the
            channels below.
          </p>
        </div>
        <div className="contact-layout">
          <div className="contact-list">
            {contacts.map(({ platform, icon, link, text }) => (
              <a
                className="contact-link"
                href={link}
                key={platform}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {createElement(icon, { size: 16 })}
                <span>{text || platform}</span>
              </a>
            ))}
          </div>
          <div className="panel contact-card">
            <div className="eyebrow">DIRECT_CHANNEL</div>
            <h3>Let’s connect</h3>
            <p>
              Have a project, opportunity, or just want to say hello? I’m always
              open to meaningful conversations.
            </p>
            <a
              href="mailto:kaimax187@gmail.com"
              className="button button-primary contact-cta"
              aria-label="Send an email to Karl Culi"
            >
              <FaEnvelope size={16} /> Send me an email
            </a>
            <a className="contact-email" href="mailto:kaimax187@gmail.com">
              kaimax187@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
