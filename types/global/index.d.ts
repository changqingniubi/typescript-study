declare global{
  interface String {
     double(): string;
  }

  interface Window {
    myName: string;
  }
}
export {}