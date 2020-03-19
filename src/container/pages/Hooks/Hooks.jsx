import React, { useState } from 'react';
import './Hooks.css';

// export class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Nilai Saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-hooks">
            <p>Ini adalah Hooks</p>
            <p>Nilai Saya saat ini adalah : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}


export default Hooks
