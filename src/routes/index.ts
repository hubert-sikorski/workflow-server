import Router from "express";
import WorkflowController from "../controllers";

const router = Router();
const workflowController = new WorkflowController()

router.post("/", workflowController.processWorkflow.bind(workflowController));

export default router;