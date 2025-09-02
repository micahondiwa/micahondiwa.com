import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHackerrank } from "@fortawesome/free-brands-svg-icons"
import { faGraduationCap, faPenNib } from "@fortawesome/free-solid-svg-icons"
import {
    faGithub,
    faLinkedin,
    faStackOverflow,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <ul className="footer__social-list flex gap-4 justify-center">

                <li>
                    <a
                        href="https://drive.google.com/file/d/1J_qfyGeOhmJPCycbt3-ANrUBeZn9aJer/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        title="Download CV"
                        className="footer__social-list-icon no-underline hover:no-underline"
                        style={{ textDecoration: "none" }}
                    >
                        CV
                    </a>
                </li>

                <li>
                    <a
                        href="https://github.com/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                        className="footer__social-list-icon"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.linkedin.com/in/micahondiwa/"
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                        className="footer__social-list-icon"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>

                <li>
                    <a
                        href="https://x.com/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        title="X"
                        className="footer__social-list-icon"
                    >
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </li>

                <li>
                    <a
                        href="https://stackoverflow.com/users/15467774/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        title="Stack Overflow"
                        className="footer__social-list-icon"
                    >
                        <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.hackerrank.com/profile/micahondiwa"
                        target="_blank"
                        rel="noreferrer"
                        title="HackerRank"
                        className="footer__social-list-icon"
                    >
                        <FontAwesomeIcon icon={faHackerrank} />
                    </a>
                </li>

                <li>
                    <a
                        href="https://surl.li/orlzun"
                        target="_blank"
                        rel="noreferrer"
                        title="Google Scholar"
                        className="footer__social-list-icon"
                    >
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </a>
                </li>

                <li>
                    <a
                        href="https://micahondiwa.hashnode.dev/"
                        target="_blank"
                        rel="noreferrer"
                        title="Blog (Hashnode)"
                        className="footer__social-list-icon"
                    >
                        <FontAwesomeIcon icon={faPenNib} />
                    </a>
                </li>

            </ul>
            <p className="footer__copyright text-center mt-4">
                &copy; Micah Ondiwa {new Date().getFullYear()}
            </p>
        </div>
    </footer>
)

export default Footer
