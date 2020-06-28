import {
  AppBar,
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Item from "./Item";

const App: React.FunctionComponent = () => {
  const [item, setItem] = React.useState<string>("apollo");

  const handleItemChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setItem(event.target.value as string);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">InterstellAR</Typography>
        </Toolbar>
      </AppBar>
      <Box style={{ height: "80vh", marginLeft: "2.5%", marginRight: "2.5%" }}>
          <Item
            key="apollo"
            file="../../assets/Models/apollo.usdz"
            image="../../assets/Images/apollo.jpg"
            info="Apollo 11 was the spaceflight that first landed humans on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle on July 20, 1969. Armstrong became the first person to step onto the lunar surface six hours and 39 minutes later on July 21; Aldrin joined him 19 minutes later. Apollo 11 was launched by a Saturn V rocket from Kennedy Space Center on Merritt Island, Florida, on July 16, and it was the fifth crewed mission of NASA's Apollo program. The Apollo spacecraft had three parts: a command module (CM) with a cabin for the three astronauts, the only part that returned to Earth; a service module (SM), which supported the command module with propulsion, electrical power, oxygen, and water; and a lunar module (LM) that had two stages—a descent stage for landing on the Moon and an ascent stage to place the astronauts back into lunar orbit."
            title="Apollo 11 Command Module"
          />
      </Box>
    </div>
  );
};

export default App;
