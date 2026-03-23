import UsaLayout from "./layout/USALayout";
import IndustriesData from "./Components/IndustriesData";
import IndustriesHeader from "./Components/IndustriesHeader";
import WhyPartner from "./Components/WhyPartner";
import { useEffect } from "react";

const USIndustries = () => {
    useEffect(() => {
        document.title = "AI-Native Industry-Specific BPO Solutions | Outcess US";
    }, []);

    return (
        <UsaLayout>
            <>
                <IndustriesHeader/>
                <IndustriesData/>
                <WhyPartner/>
            </>
        </UsaLayout>
    )
}

export default USIndustries
;
