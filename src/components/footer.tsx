import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="p-6 text-center flex flex-col gap-4">
      <p className="text-[12px] text-gray-500">
        The questions in this quiz are sourced from{" "}
        <a
          href="https://github.com/lydiahallie/javascript-questions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Lydia Hallie’s JavaScript Questions
        </a>
        . We are grateful for the open-source contributions that made this
        possible.
      </p>
      <a
        href="https://www.producthunt.com/posts/javascript-interview-preparation-quiz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="text-[#ff6157] border border-[#ff6157] gap-1">
          <span className="text-black">Upvote on</span> Product Hunt
        </Button>
      </a>
      <p className="text-sm">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/AshutoshAgrawal2004"
          target="__blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Ashutosh Agrawal
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/atrushikesh/"
          rel="noopener noreferrer"
          className="underline"
        >
          Rushikesh Bijapurkar
        </a>
      </p>
    </footer>
  );
};
