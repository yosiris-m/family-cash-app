import getBaseUrl from "./common";

export function getTransactions({ from, to }) {
  const url = new URL(`${getBaseUrl()}/transaction`);
  url.search = new URLSearchParams({ from, to }).toString();

  return fetch(url).then((res) => res.json());
}

export function createTransaction(amount, date, category, selectTransaction) {
  // console.log("amount ->", amount);
  // console.log("date ->", date);
  // console.log("category ->", category);

  const body = {
    amount: amount * 100,
    date: date,
    categoryId: category.id,
    selectTransaction: selectTransaction,
  };

  console.log("body", body);

  return fetch(`${getBaseUrl()}/transaction`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}
