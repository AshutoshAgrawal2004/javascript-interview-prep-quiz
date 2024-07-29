export interface IQuestion {
  id: string;
  question: string;
  codeBlock: string;
  options: IOption[];
  explanation: string;
}

export interface IOption {
  letter: string;
  option: string;
  isCorrect: boolean;
}
