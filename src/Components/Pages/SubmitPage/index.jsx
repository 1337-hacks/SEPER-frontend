import { ContentContainer, PageWrapper } from "./SubmitPagestyle";


const SubmitPage = () => {
    return(
        <PageWrapper>
            <ContentContainer>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </ContentContainer>
        </PageWrapper>
    );
};
// 
export default SubmitPage
