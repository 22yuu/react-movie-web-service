import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time"); // 버튼 클릭 시 게속 실행됨
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    /*
      useEffect의 2번째 인자인 []안에 들어가는 내용은 해당 변수가 변화할 때마다 이 useEffect함수를 실행시킨다는 것
    */
    // if (keyword !== "" && keyword.length > 5) {
    //   console.log("SEARCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
