export interface IQuestion {
  id: string;
  question: string;
  codeBlock: string;
  options: IOption[];
  explanation: string;
}

export interface IOption {
  option: string;
  isCorrect: boolean;
}
