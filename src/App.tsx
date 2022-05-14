import "./styles.css";
import ApiCalls from "./components/api-calls";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {/* <PrintString str="Hello World" />
        <Addition num1={5} num2={6} />
        <Substract num1={10} num2={6} />
        <Multiplication num1={10} num2={10} />
        <Division num1={100} num2={10} /> */}
        {/* <NumberTableComp num={10} /> */}
        <ApiCalls />
      </div>
    </div>
  );
}

// Write a program to print a string in C language

export const PrintString = ({ str }: { str: string }) => {
  return <div>{str}</div>;
};

// Write a program to accept values of two numbers and print their addition
export const Addition = ({ num1, num2 }: { num1: number; num2: number }) => {
  return <div>{num1 + num2}</div>;
};

//003. Write a program to accept values of two numbers and print their subtraction
export const Substract = ({ num1, num2 }: { num1: number; num2: number }) => {
  return <div>{num1 - num2}</div>;
};

//Write a program to accept values of two numbers and print their multiplication in C language
export const Multiplication = ({
  num1,
  num2
}: {
  num1: number;
  num2: number;
}) => {
  return <div>{num1 * num2}</div>;
};

//Write a program to accept values of two numbers and print their division in C language
export const Division = ({ num1, num2 }: { num1: number; num2: number }) => {
  return <div>{num1 / num2}</div>;
};

// my own questions solved for fun
// write a component of table of number

export const NumberTableComp = ({ num }: { num: number }) => {
  for (const i = num; i <= i * 10; num += 10) return <div>{num}</div>;
};
