import React, {useState, useEffect} from 'react';
import SEPractices from './SE-practices';
import Select from "react-select";
import axios from 'axios';

const Dropdown = () => {

  const [articles, setArticles] = useState([]);

	useEffect(() => {
		axios
			.get("./routes/articles")
			.then((articles) => setArticles(articles.data))
			.catch((err) => console.log(err));
	}, []);

  const optionItems = SEPractices.map((SEPractices) =>
    <option key={SEPractices.claim}>{SEPractices.claim}</option>,
    console.log(SEPractices)
  );
  
  const [result, optionValue] = useState(optionItems.claim);

  const optionHandler = e => {
    optionValue(e.claim);
  }


  return (
      <div>
        <p>-= Select an SE Practice below =- </p>
          {/* <select onChange={optionHandler}>
            {optionItems}
          </select> */}

          <Select 
            options={SEPractices} 
            onChange={optionHandler}
            getOptionLabel={(SEPractices) => SEPractices['claim']}
            getOptionValue={(SEPractices) => SEPractices['claim']}
          />
          <p>You have selected: {result}</p>
        </div>
  )
}

// const Dropdown = () => {
//   state = {
//     articles: [],
//     selected_SE: "",
//     validationErr: ""
//   };
  
//   componentDidMount(); {
//     fetch("http://localhost:7000")
//     .then((response) => {
//       return response.json();
//     })
//     .then(data => {
//       let articlesFromApi = data.map(articles => {
//         return {value: articles, display: articles}
//       });
//       this.setState({
//         articles: [{value: '', display: '(SE Practices'}].concat(articlesFromApi)
//       });
//     }).catch(error => {
//       console.log(error);
//     })
//   }

//   return(
//     <>
//       <div> 
//         <select value ={this.state.selected_SE}
//           onChange={(e) => this.setState({selected_SE: e.target.value, 
//             validationErr: e.target.value ==="" ? "Pick an SE Practice" : ""})}>
//           {this.state.articles.map((articles) => <option key={articles.value} value={articles.value}>{articles.display}</option>)}
//         </select>
//       </div>
//       <div style={{color: 'red', marginTop: '5px'}}>
//         {this.state.validationErr}
//       </div>
//     </>
//   )
// }
export default Dropdown;
