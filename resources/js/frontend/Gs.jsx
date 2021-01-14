import React, {useState, useEffect} from 'react';
// use global variable to store global state
let count = 0;


// function useGlobalState(globalState) {
//     const [, setState2] = useState();
//     const state = globalState.getValue();

//     function reRender(newState) {
//         // This will be called when the global state changes
//         setState({});
//     }

//     useEffect(() => {
//         // Subscribe to a global state when a component mounts
//         globalState.subscribe(reRender);

//         return () => {
//             // Unsubscribe from a global state when a component unmounts
//             globalState.unsubscribe(reRender);
//         }
//     })

//     function setState(newState) {
//         // Send update request to the global state and let it 
//         // update itself
//         globalState.setValue(newState);
//     }

//     return [State, setState2];
// }

export default function Counter(props){
    let incrementCount = (e) => {
        ++count;
        console.log(count);
    }

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={incrementCount}>Click</button>
        </div>
    );
}

// let globalCount = new GlobalState(0);

// function Counter1(props){
//     // using our `useGlobalState` hook
//     const [count, setCount] = useGlobalState(globalCount);

//     let incrementCount = (e) => {
//         setCount(count + 1)
//     }

//     return (
//         <div>
//             Count: {count}
//             <br/>
//             <button onClick={incrementCount}>Click</button>
//         </div>
//     );
// }

// function Counter2(props){
//     // using our `useGlobalState` hook
//     const [count, setCount] = useGlobalState(globalCount);

//     let incrementCount = (e) => {
//         setCount(count + 1)
//     }

//     return (
//         <div>
//             Count: {count}
//             <br/>
//             <button onClick={incrementCount}>Click</button>
//         </div>
//     );
// }

// export default function Counters(props){
//     return (
//         <>
//             <Counter1/>
//             <Counter2/>
//         </>
//     );
// }
