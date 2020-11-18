import React, { useEffect, useState } from "react";
import { Container, Input, InputWrapper, ResultRow } from "./styles";

var FAILURE_COEFF = 10;
var MAX_SERVER_LATENCY = 200;

const App: React.FC = () => {
  /*States*/
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  /*Events*/
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getRandomBool = (n: number) => {
    var maxRandomCoeff = 1000;
    if (n > maxRandomCoeff) n = maxRandomCoeff;
    return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
  };

  useEffect(() => {
    const getSuggestions = (text: string) => {
      var pre = "pre";
      var post = "post";
      var results: string[] = [];
      if (getRandomBool(2)) {
        results.push(pre + text);
      }
      if (getRandomBool(2)) {
        results.push(text);
      }
      if (getRandomBool(2)) {
        results.push(text + post);
      }
      if (getRandomBool(2)) {
        results.push(pre + text + post);
      }
      return new Promise((resolve, reject) => {
        var randomTimeout = Math.random() * MAX_SERVER_LATENCY;
        setTimeout(() => {
          if (getRandomBool(FAILURE_COEFF)) {
            reject();
          } else {
            resolve(results);
          }
        }, randomTimeout);
      });
    };

    getSuggestions(input)
      .then((response: any) => {
        setResults(response);
      })
      .catch((error: string) => console.log(error));
  }, [input]);

  const renderResults = () => {
    return (
      <Container>
        {results.map((result, index) => (
          <ResultRow key={index}>{result}</ResultRow>
        ))}
      </Container>
    );
  };

  return (
    <React.Fragment>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Search"
          value={input}
          onChange={onInputChange}
        />
        {input !== "" && results.length > 0 && renderResults()}
      </InputWrapper>
    </React.Fragment>
  );
};

export default App;
