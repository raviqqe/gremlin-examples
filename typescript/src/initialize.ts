import { driver, structure } from "gremlin";
import { argv } from "process";

const g = new structure.Graph()
  .traversal()
  .withRemote(new driver.DriverRemoteConnection(argv[2]));

function main() {
  const s = g.addV("user");
  s.property("id", "0");
  s.property("name", "Steven Rogers");

  const c = g.addV("user");
  c.property("id", "1");
  c.property("name", "Clinton Barton");
  g.addE("follow")
    .from(s)
    .to(c);

  const p = g.addV("user");
  p.property("id", "2");
  p.property("name", "Pietro Maximoff");
  g.addE("follow")
    .from(c)
    .to(p);
}

main();
