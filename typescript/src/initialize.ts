import { driver, structure } from "gremlin";
import { argv } from "process";

const g = new structure.Graph()
  .traversal()
  .withRemote(new driver.DriverRemoteConnection(argv[2]));

interface IUser {
  id: string;
  name: string;
}

const users: IUser[] = [
  { id: "0", name: "Steven Rogers" },
  { id: "1", name: "Clinton Barton" },
  { id: "2", name: "Pietro Maximoff" }
];

function main() {
  const verticies = users.map(({ id, name }) =>
    g
      .addV("user")
      .property("id", id)
      .property("name", name)
  );

  for (const i of new Array(verticies.length - 1).keys()) {
    verticies[i].addE("follow", verticies[i + 1]);
  }
}

main();
