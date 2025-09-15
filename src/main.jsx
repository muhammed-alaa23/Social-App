import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { HeroUIProvider } from '@heroui/system'
import AuthContextProvider from './contexts/AuthContext.jsx'
import { ToastProvider } from '@heroui/toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <ToastProvider/>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  </StrictMode>,
)
