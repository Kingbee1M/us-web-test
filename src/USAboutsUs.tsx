import UsaLayout from "./layout/USALayout";
import AboutHeader from "./Components/AboutHeader";
import Mission from "./Components/Mission";
import AboutQandA from "./Components/AboutQandA";
import ItMatters from "./Components/ItMatters";
import AboutBottom from "./Components/AboutBottom";


const USAboutUs = () => {
    return (
        <UsaLayout>
            <>
            <AboutHeader/>
            <Mission/>
            <AboutQandA/>
            <ItMatters/>
            <AboutBottom/>
            </>
        </UsaLayout>
    )
}

export default USAboutUs
;