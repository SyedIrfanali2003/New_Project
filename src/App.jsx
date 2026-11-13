import { useReducer } from "react";

const initialState = { count: 0};

function reducer(state, action){

  switch(action.type){
    case "increment":
      return{count: state.count + 1};
      case "decrement":
      return{count: state.count - 1};
      default:
        return state;
  }

}
function CounterButton({ dispatch}){

return(
  <div>
    <button onClick={() => dispatch({ type: "increment"})}>Increment</button>
    
    <button onClick={() => dispatch({ type: "decrement"})}>Decrement</button>
    
  </div>
)

}

function syed() {
  return(
    <div>
      <h1>Syed Code</h1>
    </div>
  )
}

function CounterDisplay({ count }){
return <h2>Count: {count}</h2>
}
function Counts(params) {
  return <h1>Demo</h1>
}

function App(){

  const[state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <h2>useReducer Example</h2>

<CounterDisplay count={state.count} />
<CounterButton dispatch={dispatch} />
    </div>
  )


}
export default App;