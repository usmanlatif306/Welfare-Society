import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}
export function DataProvider({ children }) {
  const [dcount, setDCount] = useState(41);
  const [donations, setDonations] = useState([]);
  const [blood, setBlood] = useState([]);
  const [expenditures, setExpenditures] = useState([]);
  const [expDetail, setExpDetail] = useState(null);
  const [cetegories] = useState([]);
  // const [amounts, setAmounts] = useState([]);

  // get donation amounts from db
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await db.collection("amounts").get();
  //     setAmounts(data.docs.map((user) => ({ ...user.data(), id: user.id })));
  //   }
  //   fetchData();
  // }, []);

  // get all donations from db
  useEffect(() => {
    async function fetchData() {
      const data = await db
        .collection("donations")
        .orderBy("createdAt", "desc")
        .get();
      setDonations(data.docs.map((user) => ({ ...user.data(), id: user.id })));
    }
    fetchData();
  }, []);

  // get blood groups from db
  useEffect(() => {
    async function fetchData() {
      const data = await db
        .collection("blood")
        .orderBy("createdAt", "desc")
        .get();
      setBlood(data.docs.map((blood) => ({ ...blood.data(), id: blood.id })));
    }
    fetchData();
  }, []);

  // get all expeditures from db
  useEffect(() => {
    async function fetchData() {
      const data = await db
        .collection("expenditures")
        .orderBy("createdAt", "desc")
        .get();
      setExpenditures(
        data.docs.map((user) => ({ ...user.data(), id: user.id }))
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    setDCount(donations.length + 1);
  }, [donations.length]);
  // Count cash
  var total = 0;
  var recCash = 0;
  let cashArr = donations.filter((item) => item.type === "Rs");
  let cashRcvd = cashArr.filter((item) => item.status === "received");
  for (let i = 0; i < cashArr.length; i++) {
    total += parseInt(cashArr[i].donation);
  }
  for (let i = 0; i < cashRcvd.length; i++) {
    recCash += parseInt(cashRcvd[i].donation);
  }
  // Count bricks
  var bricks = 0;
  var recBricks = 0;
  let brickArr = donations.filter((item) => item.type === "Bricks");
  let brickRcvd = brickArr.filter((item) => item.status === "received");

  for (let i = 0; i < brickArr.length; i++) {
    bricks += parseInt(brickArr[i].donation);
  }
  for (let i = 0; i < brickRcvd.length; i++) {
    recBricks += parseInt(brickRcvd[i].donation);
  }
  // Count cement
  var cement = 0;
  var recCement = 0;
  let cementArr = donations.filter((item) => item.type === "Cement Bags");
  let cemRcv = cementArr.filter((item) => item.status === "received");
  for (let i = 0; i < cementArr.length; i++) {
    cement += parseInt(cementArr[i].donation);
  }
  for (let i = 0; i < cemRcv.length; i++) {
    recCement += parseInt(cemRcv[i].donation);
  }
  // Count trolly sand
  var trolley = 0;
  var RcvTrolly = 0;
  let trolleyArr = donations.filter((item) => item.type === "Trolley Sand");
  let trolleyRcv = trolleyArr.filter((item) => item.status === "received");
  for (let i = 0; i < trolleyArr.length; i++) {
    trolley += parseInt(trolleyArr[i].donation);
  }
  for (let i = 0; i < trolleyRcv.length; i++) {
    RcvTrolly += parseInt(trolleyRcv[i].donation);
  }
  // Count Trees
  var trees = 0;
  var RcvTrees = 0;
  let treesArr = donations.filter((item) => item.type === "Trees");
  let treesRcv = treesArr.filter((item) => item.status === "received");
  for (let i = 0; i < treesArr.length; i++) {
    trees += parseInt(treesArr[i].donation);
  }

  for (let i = 0; i < treesRcv.length; i++) {
    RcvTrees += parseInt(treesRcv[i].donation);
  }
  // Count Trees
  let othersArr = donations.filter((item) => item.type === "");
  // Count TReceived
  let receivedArr = donations.filter((item) => item.status === "received");
  // Total Expenditures
  var expen = 0;
  for (let i = 0; i < expenditures.length; i++) {
    expen += parseInt(expenditures[i].amount);
  }
  // Blood Groups
  var apo = blood.filter((item) => item.group === "A+");
  var aneg = blood.filter((item) => item.group === "A-");
  var bpo = blood.filter((item) => item.group === "B+");
  var bneg = blood.filter((item) => item.group === "B-");
  var opo = blood.filter((item) => item.group === "O+");
  var oneg = blood.filter((item) => item.group === "O-");
  var abpo = blood.filter((item) => item.group === "AB+");
  var abneg = blood.filter((item) => item.group === "AB-");

  // get donation categories from db
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await db.collection("categories").get();
  //     setCetegories(data.docs.map((user) => ({ ...user.data(), id: user.id })));
  //   }
  //   fetchData();
  // }, []);

  const value = {
    donations,
    setDonations,
    blood,
    cetegories,
    dcount,
    setDCount,
    total,
    bricks,
    cement,
    trolley,
    cashArr,
    brickArr,
    cementArr,
    trolleyArr,
    treesArr,
    othersArr,
    receivedArr,
    recCash,
    recBricks,
    recCement,
    RcvTrolly,
    trees,
    RcvTrees,
    expenditures,
    setExpenditures,
    expen,
    expDetail,
    setExpDetail,
    apo,
    aneg,
    bpo,
    bneg,
    opo,
    oneg,
    abpo,
    abneg,
  };
  return (
    <DataContext.Provider value={value}>
      {/* {!isLoading && children} */}
      {children}
    </DataContext.Provider>
  );
}
