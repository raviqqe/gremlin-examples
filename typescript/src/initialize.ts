import { argv } from "process";

import runQuery from "./run-query";

interface IUser {
  id: string;
  name: string;
}

const users: IUser[] = [
  { id: "0", name: "Steven Rogers" },
  { id: "1", name: "Clinton Barton" },
  { id: "2", name: "Pietro Maximoff" }
];

runQuery(argv[2], g => {
  for (const { id, name } of users) {
    g = g
      .addV("user")
      .property("id", id)
      .property("name", name)
      .as(id);
  }

  for (const [i, { id, name }] of users.entries()) {
    const nextUser = users[i + 1];

    if (nextUser) {
      g = g
        .addE("follow")
        .from_(id)
        .to(nextUser.id);
    }
  }

  return g;
});
