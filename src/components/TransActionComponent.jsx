import { useEffect, useState } from "react";

const TransActionComponent = (props) => {

  const [searchItem , setSearch] = useState("");
  const [filterTransactions , setFilterTransactions] = useState(props.transactions)

  const filterTrns = (search) => {
    if (!search || search === "") {
      setFilterTransactions(props.transactions);
      return
    }
    const x = props.transactions.filter ( t => t.desc.toLowerCase().includes(search))
    setFilterTransactions(x)
    
  };

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
    filterTrns(e.target.value)
  };

  useEffect(()=> {
    filterTrns(searchItem)
  } , [props.transactions])

  return (
    <section>
      <input className="search" type="text" value={searchItem} onChange={changeHandler} placeholder="search to transaction..." />
      {filterTransactions.length ?
        filterTransactions.map((t) => (
          <div
            className="transaction"
            key={t.id}
            style={{ borderRight: t.type === "expense" && "4px solid red" }}
          >
            <h5>Description:</h5>
            <span
              className="title"
              style={{ color: t.type === "expense" ? "red" : "green" }}
            >
              {" "}
              {t.desc}
            </span>
            <h5>Amount:</h5>
            <span
              className="title"
              style={{ color: t.type === "expense" ? "red" : "green" }}
            >
              {" "}
              {t.amount} $
            </span>
          </div>
        )) : "add some transaction"} 
    </section>
  );
};

export default TransActionComponent;
