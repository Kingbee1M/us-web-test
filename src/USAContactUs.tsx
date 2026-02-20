import UsaLayout from "./layout/USALayout";
import ContactHeader from "./Components/ContactHeader";
import InTouch from "./Components/InTouch";
import ContactForm from "./Components/ContactForm";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const USAContactus = () => {
    const location = useLocation();

     useEffect(() => {
    if (location.state?.scrollTo) {
        setTimeout(() => {
        document
            .getElementById(location.state.scrollTo)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
}, [location]);
    return (
        <UsaLayout>
            <ContactHeader/>
            <InTouch/>
            <ContactForm/>
             <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </UsaLayout>
    )
}

export default USAContactus
;