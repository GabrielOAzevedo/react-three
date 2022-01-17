import styled from "styled-components";

export default function BattleLayout() {
  return (
    <Grid>
      <Main></Main>
      <Actions></Actions>
      <Battlers></Battlers>
    </Grid>
  );
}

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "main main" "actions battlers";
`;

const Main = styled.div`
  grid-area: main;
  background-color: red;
`;

const Actions = styled.div`
  grid-area: actions;
  background-color: blue;
`;

const Battlers = styled.div`
  grid-area: battlers;
  background-color: green;
`;
