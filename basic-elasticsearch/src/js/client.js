import { Elasticsearch, Results } from "react-elasticsearch";
import React from "react";
import ReactDOM from "react-dom";

export default function MyComponent() {
  return (
    <div>
      <h2>elastic search</h2>
      <Elasticsearch url={"localhost:9200/bank/_search"}>
        <Results
          id="result"
          items={(data) =>
            data.map((item) => <>{item._source.account_number}</>)
          }
        />
      </Elasticsearch>
    </div>
  );
}

const app = document.getElementById("app");
ReactDOM.render(<MyComponent />, app);
