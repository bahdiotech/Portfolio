import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, PageNotFound, Profile, Projects, Skills } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<PageNotFound title='PageNotFound' />} />


        </Routes>
        
    </div>
  )
}
