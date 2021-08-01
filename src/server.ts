import net from "net";
import fs from "fs";

import getPort from "./getPort";

const loc = process.argv[2];
const err = new Error(`Specify the location of config file.
        npm run dev path/to/config.json  
    `);

if (
  !loc ||
  loc.length < 6 ||
  loc.substring(loc.length - 5, loc.length) !== ".json"
) {
  throw err;
}
try {
} catch (error) {
  throw err;
}

const raw = fs.readFileSync(loc, { encoding: "utf-8" });
const data = JSON.parse(raw);

const port = data.lbport;
net
  .createServer((from) => {
    const toPort = getPort(data, from.remoteAddress!);
    const to = net.createConnection(toPort);

    from.pipe(to);

    to.pipe(from);
  })
  //@ts-ignore
  .listen(port, () => console.log(`listening on port ${port}`));
