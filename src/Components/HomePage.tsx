// import About from "./About";
import { useEffect, useState } from "react";

import Header from "./Header"
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Mail from "./Mail";
import Social from "./Social";
import Contact from "./Contact";
import Footer from "./Footer";
import ResumeViwer from "./ResumeViewer";
import { Loader } from "./Loader";
import { Toaster } from "react-hot-toast";
// import Experience from "./Experience";
const HomePage=()=>{
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000)
    }, [])

    return <div className={`min-h-[100vh]  ${loading? "flex":""} items-center overflow-hidden justify-center`}>
        {
            loading!==true?<>
            <Toaster />
        
        <Header />
        <About />
        <ResumeViwer />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
         <Mail/>
        <Social />
        </>:

        <Loader />}

        </div>
}
export default HomePage;