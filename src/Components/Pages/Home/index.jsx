import { Link } from "react-router-dom";
import { 
    PageWrapper,
    ContentContainer, 
    PageHeader,
    DisplayButton } 
    from "./HomeStyle";

const HomePage = () => {
    return(
        <PageWrapper>
            <ContentContainer>
                <PageHeader>SEPER DRAFT HOME PAGE</PageHeader>
                <Link to='/displayEvidence'>
                    <DisplayButton> Display Evidence </DisplayButton>
                </Link>
                <p>ekdee</p>
                <Link to='/SubmitPage'>
                    <DisplayButton> Submit Evidence </DisplayButton>
                </Link>
            </ContentContainer>
        </PageWrapper>
    );
};

export default HomePage