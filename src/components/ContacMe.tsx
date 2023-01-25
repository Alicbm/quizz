import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import '../styles/ContacMe.css'

export const ContacMe = () => {
  return (
    <div className="ContacMe">
      <ul className="ContacMe-container">
        <li>
          <span>
            <BsPersonCircle className="ContacMe-container__icon" />
          </span>
          <p>
            <a
              href="https://alicbm.github.io/alicbarandica.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Who am I?
            </a>
          </p>
        </li>
        <li>
          <p>
            <a
              href="https://linkedin.com/in/alic-barandica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="ContacMe-container__icon" />
              Linkedin
            </a>
          </p>
        </li>
        <li>
          <p>
            <a
              href="https://github.com/Alicbm/quizz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="ContacMe-container__icon" />
              GitHub
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};
