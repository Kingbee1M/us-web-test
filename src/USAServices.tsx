import UsaLayout from "./layout/USALayout";
import ServiceHeader from "./Components/ServiceHeader";
import CoreSolutions from "./Components/CoreSolutions";
import BusinessesChoose from "./Components/BusinessesChoose";
import Transform from "./Components/Transform";
import { useEffect } from "react";

const USAServices = () => {
    useEffect(() => {
        document.title = "AI-Native BPO & Customer Experience Services | Outcess US";
    }, []);

    return (
        <UsaLayout>
            <>
                <ServiceHeader/>
                <CoreSolutions/>
                <BusinessesChoose/>
                <Transform/>
            </>
        </UsaLayout>
    )
}

export default USAServices;
