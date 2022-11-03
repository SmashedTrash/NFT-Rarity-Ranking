import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t-1 border w-full p-4 mt-4 items-center text-xs justify-center">
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://twitter.com"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoLogoTwitter />
        </span>
        Twitter
      </a>
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://github.com"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoLogoGithub />
        </span>
        Github
      </a>
    </div>
  );
};
