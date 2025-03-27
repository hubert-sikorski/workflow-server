import Router from "express";
import WorkflowController from "../controllers";

const router = Router();
const workflowController = new WorkflowController()

router.get('/', workflowController.getWorkflowDefinition);

export default router;