import './Operation.css';

const Operation = ({ operation, color, click }) => {
    return <div
    onClick={() => click(operation)}
    className='calculator-buttons' style={{ backgroundColor: color }}>
        {operation}
    </div>
}

export default Operation;