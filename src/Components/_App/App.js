import FormContextProvider from '../../Context/FormContext';
import Form from '../Form';

import './App.css';

function App() {
    return (
        <div className="App">
            <FormContextProvider>
                <Form />
            </FormContextProvider>
        </div>
    );
}

export default App;
