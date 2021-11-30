import { StyledEngineProvider } from '@mui/styled-engine';
import ChatBox from './components/ChatBox/ChatBox';

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>React components</h1>
      <StyledEngineProvider injectFirst>
        <ChatBox/>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
