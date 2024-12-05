import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SimpleCounter from './components/simpleCounter'
import BackgroundColor from './components/BackgroundColor'
import ListFilter from './components/ListFilter'
import Welcome from './components/Form/Welcome'
import LoginForm from './components/Form/Form'
import ToDoList from './components/ToDoList'
import Timer from './components/Timer'
import PostList from './components/DataRequest'
import ImageGallery from './components/ImageGallery/ImageGallery'
import TimerWithInterval from './components/TimerWithInterval'
import Tabs from './components/Tabs/Tabs'
import Home from './components/Home'
// importando componentes

function App() {
  
  return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/simpleCounter" element={<SimpleCounter />} />
                    <Route path="/backgroundColor" element={<BackgroundColor />} />
                    <Route path="/toDoList" element={<ToDoList />} />
                    <Route path="/timer" element={<Timer />} />
                    <Route path="/listfilter" element={<ListFilter />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/form" element={<LoginForm />} />
                    <Route path='/dataRequest' element={<PostList />} />
                    <Route path="/imageGallery" element={<ImageGallery />} />
                    <Route path='/timerWithInterval' element={<TimerWithInterval />} />
                    <Route path='/tabs' element={<Tabs />} />
                </Routes>
            </BrowserRouter>
        </>
        // declarando rotas
    )
}

export default App
