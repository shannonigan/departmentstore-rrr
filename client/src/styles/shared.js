import styled from "styled-components";

const fontSize = (size) => {
  switch(size) {
    case "large":
      return "40px";
    case "small":
      return "25px";
    default:
      return "20px";
  };
};



export const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  font-size: ${ props => fontSize(props.fontSize) } !important;
`;


// export const EvButton = styled.button`
//   background: rgba(7, 73, 156, 0.6);
//   font-family: Arial, Helvetica, sans-serif;
//   border: none;
//   color: white;
//   padding: 5px 10px;
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
//   margin-left: 10px;
//   border-radius: 25px;

// `;


// export const DeleteButton = styled.button`
//   background: rgba(14, 0, 88, 0.94);
//   font-family: Arial, Helvetica, sans-serif;
//   border: none;
//   color: white;
//   padding: 5px 10px;
//   cursor: pointer;
//   outline: none;
//   font-size: 14px;
//   margin-left: 1200px;
//   margin-bottom: 20px;
//   border-radius: 25px;
// `;