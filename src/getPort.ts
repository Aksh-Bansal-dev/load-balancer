function stringToHash(str: string) {
  let hash = 0;

  if (str.length == 0) return hash;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) + hash - char;
    hash = hash % 10000;
  }
  hash = Math.abs(hash);
  return hash % 10000;
}
const getPort = (data: any, fromIp: string) => {
  console.log("[CONNECTION] " + fromIp);
  const len = data.ports.length;
  if (data.type === "sticky") {
    const hash = stringToHash(fromIp);
    const num = Math.floor((hash * len) / 10000);
    // console.log(hash + " " + num);
    return {
      host: data.ports[num].ip,
      port: data.ports[num].port,
    };
  } else {
    let rand = Math.floor(Math.random() * 99991);
    rand = rand % len;
    // console.log(rand);
    return {
      host: data.ports[rand].ip,
      port: data.ports[rand].port,
    };
  }
};

export default getPort;
