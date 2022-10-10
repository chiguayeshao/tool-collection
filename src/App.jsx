import './App.css'
import 'antd/dist/antd.min.css'
import FibCalculator from './components/FibCalculator/FibCalculator'

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">斐波那契计算器</h1>
            <FibCalculator />
        </div>
    )
}

export default App
