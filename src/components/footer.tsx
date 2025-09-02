import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHackerrank } from "@fortawesome/free-brands-svg-icons"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons" // external link icon

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <ul className="footer__social-list">

                {/* CV link */}
                <li>
                    <a
                        href="https://example.com/micahondiwa-cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__social-list-icon"
                        aria-label="Download CV"
                        style={{ display: "inline-flex", alignItems: "center", gap: "4px", textDecoration: "none" }}
                    >CV
                    </a>

                </li>
                <li>
                    <a
                        href="https://github.com/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__social-list-icon"
                        aria-label="GitHub profile"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/micahondiwa/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__social-list-icon"
                        aria-label="LinkedIn profile"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://x.com/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__social-list-icon"
                        aria-label="Twitter profile"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://stackoverflow.com/users/15467774/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__social-list-icon"
                        aria-label="Stack Overflow profile"
                    >
                        <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.hackerrank.com/profile/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__social-list-icon"
                        aria-label="HackerRank profile"
                    >
                        <FontAwesomeIcon icon={faHackerrank} />
                    </a>
                </li>

                <li>
                    <a
                        href="https://surl.li/orlzun"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__social-list-icon"
                        aria-label="Google Scholar profile"
                    >
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </a>
                </li>

            </ul>
            <p className="footer__copyright">
                &copy; Micah Ondiwa {new Date().getFullYear()}
            </p>
        </div>
    </footer>
)

export default Footer
