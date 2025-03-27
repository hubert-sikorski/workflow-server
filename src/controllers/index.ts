import Router, { Request, Response } from "express";
import type { Workflow, Step } from "../models";

const router = Router();

/*
Implement a Rest API endpoint that accepts:

- A workflow definition in YAML or JSON.
- Inputs for the workflow.

This endpoint executes workflow and returns its output.

Workflow is a graph of steps. Each step can be one of the 2 types:

1. Make arbitrary HTTP request and return the response as output.
2. Branch the workflow (if condition is met - go one way, if not met - another way).
*/

export default class WorkflowController {
  getWorkflowDefinition(req: Request, res: Response) {
    const workflow: Workflow = req.body.workflow;

    workflow.forEach((step: Step) => {
      if (step.type === "http request") {
        // execute the request specified by step.value
      } else if (step.type === "branch") {
        // if step.value true go one way
        // if step.value false go another way
      }
    });
  }
}