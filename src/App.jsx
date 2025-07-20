import Home from "@/pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "@/pages/NotFound.jsx";
import {Toaster} from "@/Components/ui/toaster.jsx";
import {toast} from "@/hooks/use-toast.js";

function App() {

  return (
    <>
        <Toaster/>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
