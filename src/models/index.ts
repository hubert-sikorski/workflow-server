export type Workflow = {
  definition: Step[];
  inputs: Record<string, any>;
};

type Step = HttpRequestStep | BranchStep;

type HttpRequestStep = {
  description: string;
  type: "http request";
  value: {
    method: HttpMethod;
    url: string;
    headers?: Record<string, string>;
    body?: any;
  }
};

type BranchStep = {
  description: string;
  type: "branch workflow";
  value: {
    condition: any;
    ifTrue: NextStepIndex;
    ifFalse: NextStepIndex;
  };
};

type NextStepIndex = number;

type HttpMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "OPTIONS";