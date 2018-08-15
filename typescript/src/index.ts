import { driver, structure } from "gremlin";

const g = new structure.Graph()
  .traversal()
  .withRemote(new driver.DriverRemoteConnection("ws://localhost:8182/gremlin"));

setInterval(async () => {
  try {
    console.log(
      await g
        .V()
        .has("name", "jupiter")
        .out("brother")
        .values("name")
        .toList()
    );
  } catch (error) {
    console.error(error);
  }
}, 60000);
