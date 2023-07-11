
import {Routes, Route} from "react-router-dom"
import Article from './pages/Article'
import Blog from './pages/Blog'
function App(){
  return(
    <>
      <Routes>
        <Route path='/article' element={<Article/>}/>
        <Route path='/article/:id' element={<Blog/>}/>
      </Routes>
    </>

  )
}
export default App

