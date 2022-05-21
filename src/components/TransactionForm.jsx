import { useState } from "react";

const TransactionForm = ({ addTransaction , setIsShow}) => {
  const [formValues, setFormVAliues] = useState({
    type: "expense",
    desc: "",
    amount: 0,
  });

  const changeHandler = (e) => {
    setFormVAliues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false)
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="descripton"
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={changeHandler}
      />
      <input
        placeholder="amount"
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={changeHandler}
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValues.type === "income"}
          onChange={changeHandler}
          id="Income"
        />
        <label htmlFor="Income">Income</label>
      </div>
      <button className="btn primary" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
