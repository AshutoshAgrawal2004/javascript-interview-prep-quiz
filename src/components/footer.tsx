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
        <a
          href="https://www.producthunt.com/posts/javascript-interview-preparation-quiz?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-javascript&#0045;interview&#0045;preparation&#0045;quiz"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=476073&theme=light"
            alt="Javascript&#0032;Interview&#0032;Preparation&#0032;Quiz - Prepare&#0032;for&#0032;your&#0032;next&#0032;JS&#0032;Interview | Product Hunt"
            className="mx-auto"
            style={{ width: "250px", height: "42px" }}
            width="250"
            height="54"
          />
        </a>
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
