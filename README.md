
# RE:DO - PLANT BASED FOOD

## Getting Started

First install local ssl proxy:

```bash
npm install -g local-ssl-proxy
```

Go to project root and run:

```bash
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
