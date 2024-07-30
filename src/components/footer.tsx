export const Footer = () => {
  return (
    <footer className="p-6 text-center">
      <p className="text-lg mb-4 text-gray-500">
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
      <p>
        Made with ❤️ by{" "}
        <a href="https://github.com/AshutoshAgrawal2004" className="underline">
          Ashutosh Agrawal
        </a>
      </p>
    </footer>
  );
};
