import UsaLayout from "./layout/USALayout";
import IndustriesData from "./Components/IndustriesData";
import IndustriesHeader from "./Components/IndustriesHeader";
import WhyPartner from "./Components/WhyPartner";
const USIndustries = () => {
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