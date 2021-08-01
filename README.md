# Load Balancer
A simple layer 4 load balancer with consistent-hashing support.

## Config file
```
// config.json

{
  "lbport": "8080", // load balancer port
  "type": "consistent-hash", // "consistent-hash" for sticky sessions or "random" (default). 
  "ports": [
    {
      "ip": "127.0.0.1",
      "port": "5000"
    },
    {
      "ip": "127.0.0.1",
      "port": "8000"
    },
    {
      "ip": "127.0.0.1",
      "port": "3000"
    }
  ]
}

```

## How to use
- Create a config.json file from above template.
- `npm run start <path_to_config>` to start load balancer.
> Note: you can use demo.js to test the load balancer. Just run `npm run demo <port>` to start a server on that port.
