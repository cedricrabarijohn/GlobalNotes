# CONVEX - DOCS

## What is convex ?
Convex is a Backend Application Platform that keeps you focused on building your product. Convex Functions, Database, File Storage, Scheduling, and Search fit together cohesively, and are accessible from client libraries for your favorite environment. Everything in Convex is live and realtime.

## Installation Quickstart - React
### Create a react app

```sh
npm create vite@latest my-app -- --template react-ts
```

### Install the convex client and server library

```sh
cd my-app && npm install convex
```
### Setup a Convex dev deployment

```sh
npx convex dev
```
It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

### Create sample data for your database
In a new terminal window, create a sampleData.jsonl file with some sample data.

```json
{"text": "Buy groceries", "isCompleted": true}
{"text": "Go for a swim", "isCompleted": true}
{"text": "Integrate Convex", "isCompleted": false}
```

### Add the sample data to your database
Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.
```sh
npx convex import --table tasks sampleData.jsonl
```

### (optional) Define a schema
Add a new file schema.ts in the convex/ folder with a description of your data.

```ts
// convex/schema.ts

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});
```
### Expose a database query
Add a new file tasks.ts in the **convex/** folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.
```ts
// convex/tasks.ts

import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});
```

### Connect the app to your backend
In **src/main.tsx**, create a **ConvexReactClient** and pass it to a **ConvexProvider** wrapping your app.

```ts
// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);
```

### Display the data in your app
In src/App.tsx, use the useQuery hook to fetch from your api.tasks.get API function and display the data.

```ts
// src/App.tsx

import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="App">
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}

export default App;
```

### Start the app
Start the app, open http://localhost:5173/ in a browser, and see the list of tasks.
```sh
npm run dev
```