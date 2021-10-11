import { ContentContainer, Label, PageWrapper, Input, Form } from "./SubmitPagestyle";


const SubmitPage = () => {
    return(
        <PageWrapper>
            <ContentContainer>
                <Form>
                    <Label> Title: </Label>
                    <Input type="text" title="title" />          
                    <Label> Authors: </Label>
                    <Input type="text" author="Authors" />            
                    <Label> Source: </Label>
                    <Input type="text" author="source" />          
                    <Label> Pub. Year: </Label>
                    <Input type="text" author="pubyear" />          
                    <Label> DOI: </Label>
                    <Input type="text" author="DOI" />          
                    <Label> Claimed Benefit: </Label>
                    <Input type="text" author="claimed benefit" />          
                    <Label> Level of Evidence: </Label>
                    <Input type="text" author="level of evidence" />          
                    <Input type="submit" value="Submit" /> 
                </Form>
            </ContentContainer>
        </PageWrapper>
    );
};
export default SubmitPage
