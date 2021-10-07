import { ContentContainer, Label, PageWrapper, Input, Form } from "./SubmitPagestyle";


const SubmitPage = () => {
    return(
        <PageWrapper>
            <ContentContainer>
                <Form>
                    <Label> Title: </Label>
                    <Input type="text" title="title" />          
                    <Input type="submit" value="Submit" />
                    <Label> Authors: </Label>
                    <Input type="text" author="Authors" />          
                    <Input type="submit" value="Submit" />   
                    <Label> Source: </Label>
                    <Input type="text" author="source" />          
                    <Input type="submit" value="Submit" />
                    <Label> Pub. Year: </Label>
                    <Input type="text" author="pubyear" />          
                    <Input type="submit" value="Submit" />
                    <Label> DOI: </Label>
                    <Input type="text" author="DOI" />          
                    <Input type="submit" value="Submit" />
                    <Label> Claimed Benefit: </Label>
                    <Input type="text" author="DOI" />          
                    <Input type="submit" value="Submit" />
                    <Label> Level of Evidence: </Label>
                    <Input type="text" author="DOI" />          
                    <Input type="submit" value="Submit" /> 
                </Form>
            </ContentContainer>
        </PageWrapper>
    );
};
export default SubmitPage
