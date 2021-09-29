import Header from "./Header";
import Footer from "./Footer";
import { LayoutWrap } from "./layoutstyles";


const PageLayout = ({ children }) => {
    return (
      <LayoutWrap>
        <Header />
        <main>{children}</main>
        {/* children = whatever page user is on, display that content */}
        <Footer/>
      </LayoutWrap>
    );
};

export default PageLayout;