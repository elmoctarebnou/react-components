import {Divider} from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import ChatBox from './components/ChatBox/ChatBox';
import Dashboard from './components/Dashboard/Dashboard';

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <div id='app-root' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Fatima my queen</h1>
            <Divider style={{width: '100%'}}/>
            <Dashboard/>
        </div>
    </StyledEngineProvider>
  );
}

export default App;
