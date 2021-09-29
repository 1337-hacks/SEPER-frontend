import styled from 'styled-components';

const Styles = styled.div `
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px ;
    border-style: solid;
    border-color: black;
    tr {
      :last-child {
        td {
          border-bottom: 1px;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px;
      border-right: 1px;
      border-style: solid;
      border-color: black;
      :last-child {
        border-right: 0;
      }
    }
  }
`
export default Styles;
