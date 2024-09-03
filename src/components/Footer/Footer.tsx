import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Footer.module.scss";
import { socialIcons } from "@/data/socialIconsData";
import { footerLinks } from "@/data/footerLinksData";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoAndSocial}>
          <div className={styles.logo}>
            <Image
              src="/img/logo-footer.svg"
              alt="Easybank Logo"
              width={150}
              height={40}
            />
          </div>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <Link key={index} href={icon.href}>
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.footerLinks}>
          {footerLinks.map((linkGroup, index) => (
            <ul key={index}>
              {linkGroup.map((link, subIndex) => (
                <li key={subIndex}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className={styles.cta}>
          <button className={styles.inviteButton}>Request Invite</button>
          <p className={styles.copyright}>© Easybank. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
