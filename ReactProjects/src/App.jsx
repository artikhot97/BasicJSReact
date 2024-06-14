import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Result from "./Components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 20000,
    expectedReturn: 6,
    duration: 2,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const inputValidate = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput onChangeValue={handleChange} userInput={userInput} />
      {!inputValidate && (
        <p className="center">Please Enter duration greater than zero</p>
      )}
      {inputValidate && <Result input={userInput} />}
    </>
  );
}

export default App;
