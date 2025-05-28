import styled from "styled-components";

const NumberSelector = ({selectedNumber,setSelectedNumber,alert,setAlert}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
        {alert && <p style={{ color: "red" }}>{alert}</p>}  
      <div className="flex">
        {arr.map((val, i) => (
          <Box
            key={i}
            isselected={val === selectedNumber ? 1 : 0}
            onClick={() => {
              setSelectedNumber(val)
              setAlert(null);
            }}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p{
    font-size:24px;
    font-weight: bold;
  }
  text-align: end;
`;

const Box = styled.div`
  min-width: 72px;
  height: 72px;
  text-align: center;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
