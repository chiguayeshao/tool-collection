import './App.css'
import 'antd/dist/antd.min.css'
import FibCalculator from './components/FibCalculator/FibCalculator'
import FileUpload from './components/fileUpload/FileUpload'

function App() {
    return (
        <div className="App flex justify-center">
            {/* <FibCalculator /> */}
            <FileUpload />
        </div>
    )
}

export default App
