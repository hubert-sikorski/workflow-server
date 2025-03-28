import type { Request, Response } from "express";
import type { Workflow } from "../models";

export default class WorkflowController {
  async processWorkflow(req: Request, res: Response) {
    const workflow: Workflow = req.body;

    try {
      const output = await this.#executeWorkflow(workflow);
      res.json(output);
    } catch (error) {
      res.status(500).json(`Error executing workflow -> ${error}`);
    }

  }

  async #executeWorkflow(workflow: Workflow) {
    const output: Record<number, any> = {};

    let currentlyExecutedStep = 0;

    while (currentlyExecutedStep < workflow.definition.length) {
      const step = workflow.definition[currentlyExecutedStep];

      if (!step) {
        break;
      }

      if (step.type === "http request") {
        try {
          const options = {
            method: step.value.method,
            ...(step.value.body && { body: step.value.body }),
            ...(step.value.headers && { body: step.value.headers }),
          };
          const response = await fetch(step.value.url, options);
          output[currentlyExecutedStep] = await response.json();
          currentlyExecutedStep++;
        } catch (error) {
          throw new Error(`Http request failed at step ${currentlyExecutedStep} -> ${error}`);
        }
      } else if (step.type === "branch workflow") {
        if (eval(step.value.condition)) {
          output[currentlyExecutedStep] = `Branched to step ${step.value.ifTrue}`;
          currentlyExecutedStep = step.value.ifTrue;
        } else {
          output[currentlyExecutedStep] = `Branched to step ${step.value.ifFalse}`;
          currentlyExecutedStep = step.value.ifFalse;
        }
      }
    };

    return output;
  }
}