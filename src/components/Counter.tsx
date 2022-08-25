import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <span>
                {count}
            </span>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>)
}

export default Counter;