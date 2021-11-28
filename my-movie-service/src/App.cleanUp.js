import { useState, useEffect } from "react";

function Hello() {
  /* function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    /*
        컴포넌트가 destoryed될 때, 즉, 종료가 될 때 언제 종료가 될 지 알고 싶거나 혹은 
        컴포넌트가 종료될 때 어떤 행위를 하고 싶을 때는
        호출된 hiFn에서 return 을 해주면 된다.
        
        이러한 함수 호출 방법을 cleanUp이라고 하며, 엄청 자주 사용되는 방법은 아니다.
     
    console.log("created :)");
    return byFn;
  } 
  useEffect(hiFn, []);
  이런 코딩 작성보다는 아래의 코드처럼 useEffect안에서 전부 구현하는게 좋다.*/

  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    };
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
