import 'boxicons'
import AppRouter from './Routes/AppRouter'
import { SavedProvider } from './Context/saved'

const App = () => {
  return (
    <SavedProvider>      
      <AppRouter/>
    </SavedProvider>
  )
}

export default App