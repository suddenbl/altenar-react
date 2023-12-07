import { Routes, Route } from 'react-router-dom'
import { Posts } from './pages/Posts/Posts'
import { Creation } from './pages/Creation/Creation'
import { GlobalStyle } from './styles'
import ErrorPage from './pages/ErrorPage/ErrorPage'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
