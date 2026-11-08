
import {Routes,Route} from 'react-router'
import HomePage from './pages/HomePage.jsx'
import WatchList from './pages/WatchList.jsx'
import MovieDetailsPage from './pages/MovieDetailsPage.jsx'
import Layout from './Components/Layout.jsx'

const App = () =>{
  return (
    <div>
      <Layout>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
      </Routes>

      </Layout>
      
    </div>
  )
}

export default App