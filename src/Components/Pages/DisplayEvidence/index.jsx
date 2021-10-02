import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import { 
  PageWrapper, 
  PageContainer,
  Data,
  DisplayButton,
  PageHeader
} from "./DisplayEvidenceStyle";

import Table from "../../Evidence-Table/evidencetable";
import tablecolumns from "../../Evidence-Table/tablecolumns";
import Dropdown from "../../Evidence-Table/dropdown";
//import Styles from "../../Evidence-Table/tablestyle";

const DisplayEvidencePage = function() {

  /* Fetch data from Backend */

  const [articles, setArticles] = useState([]);

	useEffect(() => {
		axios
			.get("./routes/articles")
			.then((articles) => setArticles(articles.data))
			.catch((err) => console.log(err));
	}, []);

  return (
    <PageWrapper>
      {/* Container for Page Background */}
      <PageContainer>
        {/* Container for Page Content */}
        <PageHeader>View Evidence</PageHeader>
        <Data>
          <div>
              <h2>Select SE Practice to get evidence for the claimed benefits</h2>
              <Dropdown>
                <p>Select SE Practice: </p>
              </Dropdown>
              {/* <Styles> */}
                <Table data={articles} columns={tablecolumns}/>
              {/* </Styles> */}
          </div>
            <Link to="/">
          <DisplayButton> Home </DisplayButton>
        </Link>
        </Data>
        
      </PageContainer>
    </PageWrapper>
  );
};

export default DisplayEvidencePage;