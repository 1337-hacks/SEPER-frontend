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
// import Dropdown from "../../Evidence-Table/dropdown";
import Styles from "../../Evidence-Table/tablestyle";
import SEPractices from '../../Evidence-Table/SE-practices';
import Select from "react-select";

const DisplayEvidencePage = function() {
  
  /* Fetch data from SE Practices table */
  const optionItems = SEPractices.map((SEPractices) =>
    <option key={SEPractices.claim}>{SEPractices.claim}</option>,
    // console.log(SEPractices)
  );

  /* Grabs selected value from dropdown menu */
  const [result, optionValue] = useState(optionItems.claim);

  const optionHandler = e => {
    optionValue(e.claim)
  }

  /* Fetch data from Backend */
  const [articles, setArticles] = useState([]);

	useEffect(() => {
		axios
			.get(`./routes/articles`)
			.then((articles) => setArticles(articles.data))
			.catch((err) => console.log(err));
	}, []);

  /* Filter articles corresponsing to user input */
  const filteredData = []; // new array

  if(result === undefined || result === 'Show All'){ // if user hasnt inputted...
    for (var i = 0; i < articles.length; i++){
      filteredData[i] = articles[i]; // ... populate table with all elements
    }
  } else { // if user has chosen from dropdown menu
    for (var c = 0; c < articles.length; c++){
      if(articles[c].claim === result) {
        // filteredData.filter(function (e) {return e != null;});
        filteredData[c] = articles[c]; // populate with elements corresponding to user input
      }
    }
  }

  console.log("-= Dropdown result =-")
  console.log(result);

  console.log("-= Filtered Data =-")
  console.log(filteredData);

  return (
    <PageWrapper>
      {/* Container for Page Background */}
      <PageContainer>
        {/* Container for Page Content */}
        <PageHeader>View Evidence</PageHeader>
        <Data>
          <div>
              <h2>Select a claim</h2>
              {/* <Dropdown/> */}
              {/* Dropdown menu */}
              <p>-= Select a Claimed Benefit to display below =- </p>
              <Select 
                options={SEPractices} 
                onChange={optionHandler}
                getOptionLabel={(SEPractices) => SEPractices['claim']}
                getOptionValue={(SEPractices) => SEPractices['claim']}
              />
              {/* Container for Evidence Table */}
              <Styles>
                <Table data={filteredData} columns={tablecolumns}/>
              </Styles>
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