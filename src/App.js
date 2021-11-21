//import SortElement from "./sortPractice";
import ListItems from "./Components";
import Items from "./Components/item";
import "./App.css";
import { useEffect, useState } from "react";
//import item from "./Components/item";

const originalList = [
  {id : 1, title: "1", comp: <Items label={'1'}/>, status:"inActive", checkItems : () => this},
  {id : 2, title: "2", comp: <Items label={'2'}/>, status:"active", checkItems : () => this},
  {id : 3, title: "3", comp: <Items label={'3'}/>, status:"inActive", checkItems : () => this},
  {id : 4, title: "4", comp: <Items label={'4'}/>, status:"inActive", checkItems : () => this},
  {id : 5, title: "5", comp: <Items label={'5'}/>, status:"active", checkItems : () => this},
  {id : 6, title: "Ahad", comp: <Items label={'Ahad'}/>, status:"inActive", checkItems : () => this},
]

function App() {
  const [list, setList] = useState(originalList);
  const [btnCss, setBtnCss] = useState("");

  const activeList = () => {
    const activeL = originalList.filter((item) => item.status === 'active');
    console.log(activeL);
    setList(activeL);
  }

  const closeWidget = (id) => {
    const check = list.findIndex((item, i) => item.id === id);
    const check1 = originalList.findIndex((item, i) => item.id === id);
    originalList[check1].status = "inActive"
    console.log("object return", list[check].checkItems());
    list.splice(check, 1);
    setList([...list]);

  }

  const toggleWidget = (id) => {
    const check2 = list.findIndex((item, i) => item.id === id);
    const check1 = originalList.findIndex((item, i) => item.id === id);
    if(check2 > -1) {
      originalList[check1].status = "inActive"
      list.splice(check2, 1);
    }
    else {
      originalList[check1].status = "active"
      list.unshift({...originalList[check1]});
    }
    setList([...list]);
  }

  const sort = () => {
    list.sort((a,b) => b.id - a.id);
    setList(list.slice());
  }
  
  useEffect(() => {
    activeList()
  },[])

  return (
    <div className="App">
      {/* <SortElement /> */}
      <button onClick={sort}>sort</button>
      {originalList.map((item, i) => {
        //const status = list.some((it) => it.id === item.id) && "activee";
        //console.log(i, item.status)
        return <button className={`btn ${item.status}`} onClick={() => toggleWidget(item.id)} >{item.title}</button> //disabled={list.some((it) => it.id === item.id)}
      })}
      <ListItems activeItem={list} closeWidget={closeWidget}/>
    </div>
  );
}

export default App;
