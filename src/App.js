import styled from "styled-components";

const Example = styled.div`
  color: ${(props) => props.color}
`

function App() {
  return (
    <Example color={"blue"}>
      <p>Text decoration</p>
    </Example>
  );
}

export default App;
