import { driver, structure } from "gremlin";
import { argv } from "process";

const g = new structure.Graph()
  .traversal()
  .withRemote(new driver.DriverRemoteConnection(argv[2]));

setInterval(async () => {
  try {
    console.log(
      await g
        .V()
        .has("id", "0")
        .out("follow")
        .values("name")
        .toList()
    );
  } catch (error) {
    console.error(error);
  }
}, 1000);
