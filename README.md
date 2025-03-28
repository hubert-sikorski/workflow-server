# Workflow API Server

This is a simple Express API server built with TypeScript that executes a workflow defined in JSON. The workflow consists of steps that can make HTTP requests or branch based on conditions, using outputs from previous steps and user-provided inputs.

## How to Test It

1. **Install deps**:

```bash
npm install
```

2. **Run the server**:

```bash
npm start
```

3. **Test example workflow**:

```bash
npm run test-workflow
```
