import "./how-it-works.css";

export const HowItWorks = () => {
  return (
    <div className="how-it-works">
      Here's a quick guide on how to use the app:
      <ol>
        <li>
          <strong>Start the Quiz:</strong>
          <ul>
            <li>
              When you begin the quiz, you will receive a set of randomly
              selected questions from our question bank.
            </li>
            <li>
              Each question will have multiple-choice options for you to choose
              from. Simply click on the option you think is correct.
            </li>
          </ul>
        </li>
        <li>
          <strong>Answering Questions:</strong>
          <ul>
            <li>
              Once you select an answer, it will be highlighted to show whether
              it's correct or incorrect.
            </li>
            <li>
              After answering a question, you can proceed to the next question
              by clicking the "Next Question" button.
            </li>
          </ul>
        </li>
        <li>
          <strong>Review and Explanation:</strong>
          <ul>
            <li>
              After answering a question, you'll be able to see an explanation
              that provides more information about the correct answer.
            </li>
            <li>
              This helps you understand why your answer was right or wrong.
            </li>
          </ul>
        </li>
        <li>
          <strong>Restarting the Quiz:</strong>
          <ul>
            <li>
              If you decide to restart the quiz, questions you answered
              correctly before will not be shown again.
            </li>
            <li>
              This ensures you focus on new questions and better test your
              knowledge.
            </li>
          </ul>
        </li>
        <li>
          <strong>Reset Saved Answers:</strong>
          <ul>
            <li>
              To include questions you answered correctly previously in your new
              quiz session, click the "Reset Saved Answers" button.
            </li>
            <li>
              This action will clear your previous answers and allow those
              questions to be selected again.
            </li>
          </ul>
        </li>
        <li>
          <strong>Set Number of Questions:</strong>
          <ul>
            <li>
              You can specify how many questions you want to practice in each
              session using the input bar on the welcome screen.
            </li>
            <li>
              Adjust the number as needed to customize your quiz experience.
            </li>
          </ul>
        </li>
      </ol>
      By following these steps, you'll be able to effectively practice
      JavaScript concepts and improve your skills. Good luck, and have fun!
    </div>
  );
};
