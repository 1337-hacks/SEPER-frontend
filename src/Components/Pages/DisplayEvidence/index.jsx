import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import { 
  PageWrapper, 
  PageContainer,
  SelectionContainer,
  Data,
  DisplayButton,
  PageHeader
} from "./DisplayEvidenceStyle";

import Table from "../../Evidence-Table/evidencetable";
import tablecolumns from "../../Evidence-Table/tablecolumns";
// import Dropdown from "../../Evidence-Table/dropdown";
import Styles from "../../Evidence-Table/tablestyle";
import SEPractices from '../../Evidence-Table/SE-practices';
import SEPubYear from '../../Evidence-Table/years';
import Select from "react-select";

const DisplayEvidencePage = function() {
  
  /* Fetch data from SE Practices table */
  const optionItems = SEPractices.map((SEPractices) =>
    <option key={SEPractices.practice}>{SEPractices.practice}</option>,
  );

  /* Grabs selected value from SEPractices dropdown menu */
  const [result, optionValue] = useState(optionItems.practice);

  const optionHandler = e => {
    optionValue(e.practice)
  }

  /* Fetch data from years */
  const YearSelectionItems = SEPubYear.map((SEPubYear) => 
    <option key={SEPubYear.pubyear}>{SEPubYear.pubyear}</option>
  );

    /* Grabs selected value from min year dropdown menu */
  const [minYearResult, yearValue] = useState(YearSelectionItems.pubyear);

  const MinYearHandler = e => {
    yearValue(e.pubyear)
  }

  /* Fetch data from Backend */
  const [articles, setArticles] = useState([]);

	useEffect(() => {
		axios
      .get(process.env.REACT_APP_API_URL.concat('/routes/articles'))
			.then((articles) => setArticles(articles.data))
			.catch((err) => console.log(err));
	}, []);

  /* Filter articles corresponsing to user input */
  const filteredData = []; // new array
  const maxYear = [];

  /* Fetch data from maxYear array */
  const MaxYearItems = maxYear.map((maxYear) =>
    <option key={maxYear.pubyear}>{maxYear.pubyear}</option>,
  );

  /* Grabs selected balue from max year dropdown menu */
  const [maxYearResult, maxYearValue] = useState(MaxYearItems.pubyear)

  const MaxYearHandler = e => {
    maxYearValue(e.pubyear)
  }

  /* Re-writes maxYear array corresponding to min year selection */
  var index = 0;

  if(minYearResult !== undefined || minYearResult !== "-"){ // get index of user selection for min year value
    for(var a = 0; a < SEPubYear.length; a++){
        if(minYearResult === SEPubYear[a].pubyear){
          index = a;
        }
    }
  }

  if(minYearResult === undefined || minYearResult === '-'){ // if min year is not selected, populate maxYear array with all values
    for(var y = 0; y < SEPubYear.length; y++){
      maxYear[y] = SEPubYear[y].pubyear;
    }
  } else if(minYearResult !== undefined || minYearResult !== "-"){ // get index of user selection for min year value
    for(var b = 0; b < SEPubYear.length; b++){
        if(minYearResult === SEPubYear[b].pubyear){
          index = b;
        }
    }
  }

  for(index; index < SEPubYear.length; index++){ // if min year is chosen, populate array with values starting from index minimum year value selected
    maxYear[index]= SEPubYear[index];
  }

  /* Dropdown menu logic for all */
  if((result === undefined || result === 'Show All')  // if user hasnt inputted...
  && 
    (minYearResult === undefined || minYearResult === '-')
  &&
    (maxYearResult === undefined || maxYearResult === '-')){
    for (var i = 0; i < articles.length; i++){
      for(var x = 0; x < articles.length; x++){
        filteredData[x] = articles[x]; // ... populate table with all elements
      }
    }
  } else { // if user has inputted
    for (var c = 0; c < articles.length; c++){
      if((articles[c].practice === result) && (articles[c].pubyear >= minYearResult) && (articles[c].pubyear <= maxYearResult)) { // if SE practice, min year and max year is chosen
        filteredData[c] = articles[c]; 
      } else if((articles[c].practice === result) && (minYearResult === undefined || minYearResult === '-') && (maxYearResult === undefined || maxYearResult === '-')){ // if only SE practice is chosen
        filteredData[c] = articles[c];
      } else if((articles[c].pubyear >= minYearResult) && (result === undefined || result === 'Show All') && (maxYearResult === undefined || maxYearResult === '-')){ // if only min year is chosen
        filteredData[c] = articles[c];
      } else if((articles[c].pubyear <= maxYearResult) && (result === undefined || result === 'Show All') && (minYearResult === undefined || minYearResult === '-')){ // if only max year is chosen
        filteredData[c] = articles[c];
      } else if((articles[c].pubyear >= minYearResult) && (articles[c].pubyear <= maxYearResult) && (result === undefined || result === 'Show All')){ // if only min and max year is chosen
        filteredData[c] = articles[c];
      } else if((articles[c].practice === result) && (articles[c].pubyear >= minYearResult) && (maxYearResult === undefined || maxYearResult === '-')){ // if only SE prac and min year is chosen
        filteredData[c] = articles[c];
      } else if((articles[c].practice === result) && (articles[c].pubyear <= maxYearResult) && (minYearResult === undefined || minYearResult === '-')){ // if only SE prac and max year is chosen
        filteredData[c] = articles[c];
      }
    }
  }

  return (
    <PageWrapper>
      {/* Container for Page Background */}
      <PageContainer>
        {/* Container for Page Content */}
        <PageHeader>View Evidence</PageHeader>
        <Data>
          <div>
              <h2>SEPER Evidence Table</h2>
              {/* <Dropdown/> */}
              {/* SEPractices dropdown menu */}
              <p>-= Select an SE Practice to display below =- </p>
              <SelectionContainer>
                <Select 
                  options={SEPractices} 
                  onChange={optionHandler}
                  defaultValue={'Show All'}
                  getOptionLabel={(SEPractices) => SEPractices['practice']}
                  getOptionValue={(SEPractices) => SEPractices['practice']}
                />

                {/* Year selection */}
                <p>-== Select a min year to display below  ==- </p>
                <Select 
                  options={SEPubYear} 
                  onChange={MinYearHandler}
                  defaultValue={'-'}
                  getOptionLabel={(SEPubYear) => SEPubYear['pubyear']}
                  getOptionValue={(SEPubYear) => SEPubYear['pubyear']}
                />

                <p>-== Select a max year to display below  ==- </p>
                <Select 
                  options={maxYear} 
                  onChange={MaxYearHandler}
                  defaultValue={'-'}
                  placeholder={'Select a value for min year'}
                  getOptionLabel={(maxYear) => maxYear['pubyear']}
                  getOptionValue={(maxYear) => maxYear['pubyear']}
                />
              </SelectionContainer>
              
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