import { useState } from 'react'
import './App.css'
import { RiDeleteBack2Line } from "react-icons/ri";


function App() {
  const [screen, setScreen] = useState("")

  const display = (value) => {
    setScreen(screen => screen + value)  
  }
  const clearAll = () => {
    setScreen("")
  }
  const backSpace = () => {
    setScreen(screen => screen.slice(0, -1))
  }
  const evalExpr = () => {
    try {
      setScreen(eval(screen).toString())
    } catch (error) {
      setScreen("ERROR")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-80">
        <div className="col-lg-5 col-md-1 "></div>
        <div className="col-lg-3 col-md-11 container bg-light p-4 mt-2 rounded-4 border border-2 border-primary">
          <h1 className="text-center" >CASIO</h1>
          <div>
            <input value={screen} className="form-control fs-5" type="text" readOnly />
          </div>
          <div className="row mt-4 ms-2">
            <div className="col-3"><button onClick={clearAll} className="btn btn-warning fs-4" >AC</button></div>
            <div className="col-3"><button onClick={backSpace} className="btn btn-warning fs-4"><RiDeleteBack2Line fs-5/></button></div>
            <div className="col-3"><button onClick={() => display("%")} className="btn border fs-4">%</button></div>
            <div className="col-3"><button onClick={() => display("/")} className="btn border fs-4" style={{ width: "70%"}}>÷</button></div>
          </div>
          <div className="row mt-3 ms-2">
            <div className="col-3"><button onClick={() => display("7")} className="btn border fs-4" style={{ width: "80%"}}>7</button></div>
            <div className="col-3"><button onClick={() => display("8")} className="btn border fs-4" style={{ width: "80%"}}>8</button></div>
            <div className="col-3"><button onClick={() => display("9")} className="btn border fs-4" style={{ width: "80%"}}>9</button></div>
            <div className="col-3"><button onClick={() => display("*")} className="btn border fs-4" style={{ width: "70%"}}>x</button></div>

          </div>
          <div className="row mt-3 ms-2">
            <div className="col-3"><button onClick={() => display("4")} className="btn border fs-4" style={{ width: "80%"}}>4</button></div>
            <div className="col-3"><button onClick={() => display("5")} className="btn border fs-4" style={{ width: "80%"}}>5</button></div>
            <div className="col-3"><button onClick={() => display("6")} className="btn border fs-4" style={{ width: "80%"}}>6</button></div>
            <div className="col-3"><button onClick={() => display("+")} className="btn border fs-4" style={{ width: "70%"}}>+</button></div>
          </div>
          <div className="row mt-3 ms-2">
            <div className="col-3"><button onClick={() => display("1")} className="btn border fs-4" style={{ width: "80%"}}>1</button></div>
            <div className="col-3"><button onClick={() => display("2")} className="btn border fs-4" style={{ width: "80%"}}>2</button></div>
            <div className="col-3"><button onClick={() => display("3")} className="btn border fs-4" style={{ width: "80%"}}>3</button></div>
            <div className="col-3"><button onClick={() => display("-")} className="btn border fs-4" style={{ width: "70%"}}>-</button></div>
          </div>
          <div className="row mt-4 ms-2 mb-5 me-">
            <div className="col-3"><button onClick={() => display(".")} className="btn border fs-4" style={{ width: "80%"}}>.</button></div>
            <div className="col-3"><button onClick={() => display("0")} className="btn border fs-4" style={{ width: "80%"}}>0</button></div>
            <div className="col-6"><button onClick={evalExpr} className="btn btn-warning rounded-3 fs-4" style={{ width: "85%"}}>=</button></div>
          </div>
        </div>
        <div className="col-lg-5 col-md-1"></div>
      </div>
    </>
  )
}

export default App