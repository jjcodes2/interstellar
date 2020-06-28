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
        {item === "apollo" && (
          <Item
            key="apollo"
            file="../../assets/Models/apollo.usdz"
            image="../../assets/Images/apollo.jpg"
            info="Apollo 11 was the spaceflight that first landed humans on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle on July 20, 1969. Armstrong became the first person to step onto the lunar surface six hours and 39 minutes later on July 21; Aldrin joined him 19 minutes later. Apollo 11 was launched by a Saturn V rocket from Kennedy Space Center on Merritt Island, Florida, on July 16, and it was the fifth crewed mission of NASA's Apollo program. The Apollo spacecraft had three parts: a command module (CM) with a cabin for the three astronauts, the only part that returned to Earth; a service module (SM), which supported the command module with propulsion, electrical power, oxygen, and water; and a lunar module (LM) that had two stages—a descent stage for landing on the Moon and an ascent stage to place the astronauts back into lunar orbit."
            title="Apollo 11 Command Module"
          />
        )}
        {item === "earth" && (
          <Item
            key="earth"
            file="../../assets/Models/earth.usdz"
            image="../../assets/Images/earth.jpg"
            info="Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth's only natural satellite. Earth's axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth. The gravitational interaction between Earth and the Moon causes tides, stabilizes Earth's orientation on its axis, and gradually slows its rotation. Earth is the densest planet in the Solar System and the largest and most massive of the four rocky planets.      "
            title="Earth"
          />
        )}
        {item === "moon" && (
          <Item
            key="moon"
            file="../../assets/Models/moon.usdz"
            image="../../assets/Images/moon.jpg"
            info="The Moon is an astronomical body orbiting Earth as its only natural satellite. It is the fifth-largest satellite in the Solar System, and by far the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is thought to have formed about 4.51 billion years ago, not long after Earth. The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a hypothetical Mars-sized body called Theia. The Moon is in synchronous rotation with Earth, and thus always shows the same side to Earth, the near side. Because of libration, slightly more than half (about 59%) of the total lunar surface can be viewed from Earth."
            title="The Moon"
          />
        )}
        {item === "shuttle" && (
          <Item
            key="shuttle"
            file="../../assets/Models/shuttle.usdz"
            image="../../assets/Images/shuttle.jpg"
            info="Space Shuttle Discovery (Orbiter Vehicle Designation: OV-103) is one of the orbiters from NASA's Space Shuttle program and the third of five fully operational orbiters to be built. Its first mission, STS-41-D, flew from August 30 to September 5, 1984. Over 27 years of service it launched and landed 39 times, gathering more space flights than any other spacecraft to date. Discovery became the third operational orbiter to enter service, preceded by Columbia and Challenger. It embarked on its last mission, on February 24, 2011 and touched down for the final time at Kennedy Space Center on March 9, having spent a cumulative total of almost a full year in space. Discovery performed both research and International Space Station assembly missions, and also carried the Hubble Space Telescope into orbit."
            title="Space Shuttle Discovery"
          />
        )}
        {item === "jupiter" && (
          <Item
            key="jupiter"
            file="../../assets/Models/jupiter.usdz"
            image="../../assets/Images/jupiter.jpg"
            info="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter. The outer atmosphere is visibly segregated into several bands at different latitudes, resulting in turbulence and storms along their interacting boundaries. A prominent result is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century when it was first seen by telescope. Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere. Jupiter has 79 known moons."
            title="Jupiter"
          />
        )}
        {item === "saturn" && (
          <Item
            key="saturn"
            file="../../assets/Models/saturn.usdz"
            image="../../assets/Images/saturn.jpg"
            info="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles, with a smaller amount of rocky debris and dust. At least 82 moons are known to orbit Saturn, of which 53 are officially named; this does not include the hundreds of moonlets in its rings."
            title="Saturn"
          />
        )}
      </Box>

      <div
        style={{
          position: "absolute",
          bottom: "2",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Grid container justify="center" style={{ width: "100%" }}>
          <Grid item>
            <Typography
              variant="h4"
              style={{ marginLeft: "10px", marginRight: "1rem" }}
            >
              Blast off to:
            </Typography>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleItemChange}
                fullWidth
                value={item}
              >
                <MenuItem value="apollo" key="apollo">
                  Apollo 11 Command Module
                </MenuItem>
                <MenuItem value="earth" key="earth">
                  Earth
                </MenuItem>
                <MenuItem value="moon" key="moon">
                  The Moon
                </MenuItem>
                <MenuItem value="shuttle" key="shuttle">
                  Space Shuttle Discovery
                </MenuItem>
                <MenuItem value="jupiter" key="jupiter">
                  Jupiter
                </MenuItem>
                <MenuItem value="saturn" key="saturn">
                  Saturn
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
