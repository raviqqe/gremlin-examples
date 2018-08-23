import { driver, structure } from "gremlin";

export default async function(
  endpoint: string,
  callback: (g) => { toList: () => Promise<void> }
): Promise<void> {
  const connection = new driver.DriverRemoteConnection(endpoint);

  await callback(
    new structure.Graph().traversal().withRemote(connection)
  ).toList();

  await connection.close();
}
