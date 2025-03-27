export type Workflow = Step[];
export type Step = { type: WorkflowType, value: StepValue };
type WorkflowType = "http request" | "branch";
type StepValue = HttpRequestValue | BranchValue;
export type HttpRequestValue = "GET" | "POST" | "DELETE" | "PUT";
type BranchValue = "CONDITION_MET" | "CONDITION_NOT_MET";
