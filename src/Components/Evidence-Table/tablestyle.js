import styled from 'styled-components';

const Styles = styled.div `
  padding-top: 10px;
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px ;
    border-style: solid;
    border-color: black;
    tr {
      :last-child {
        td {
          border-bottom: 0px;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1px;
      border-bottom: 1px;
      border-right: 1px;
      border-top: 0px;
      border-left: 0px;
      border-style: solid;
      border-color: black;
      :last-child {
        border-right: 0px;
      }
    }
  }
`;

export default Styles;
