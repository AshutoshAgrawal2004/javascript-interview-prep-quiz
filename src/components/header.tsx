import JavaScriptLogo from "../assets/JavaScript-logo.jpg";

export const Header = () => {
  return (
    <header className="text-3xl font-semibold border-b border-secondary pb-4 flex justify-center items-center gap-4">
      <img src={JavaScriptLogo} alt="JavaScript Logo" className="w-8 h-8" />
      Javascript Quiz
    </header>
  );
};
