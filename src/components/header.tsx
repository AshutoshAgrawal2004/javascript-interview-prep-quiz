import { Link } from "react-router-dom";
import JavaScriptLogo from "../assets/cat-js-logo.webp";
import { GiveUpButton } from "./give-up-button";

export const Header = () => {
  return (
    <header className="text-xl font-semibold pb-4 border-b border-secondary flex justify-between items-center">
      <Link className="flex gap-2 pl-4 lg:pl-8 items-center" to="/">
        <img src={JavaScriptLogo} alt="JavaScript Logo" className="w-8 h-8" />
        JS Prep Teacher
      </Link>
      <span className="pr-4 lg:pr-8">
        <GiveUpButton />
      </span>
    </header>
  );
};
