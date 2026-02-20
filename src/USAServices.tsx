import UsaLayout from "./layout/USALayout";
import ServiceHeader from "./Components/ServiceHeader";
import CoreSolutions from "./Components/CoreSolutions";
import BusinessesChoose from "./Components/BusinessesChoose";
import Transform from "./Components/Transform";

const USAServices = () => {
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