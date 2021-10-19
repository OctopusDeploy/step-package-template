import HelloWorldStepInputsV1 from "./inputs";
import { StepExecutor } from "@octopusdeploy/step-api";
import HelloWorldTargetInputs from "hello-world-target";

const HelloWorldStepExecutor: StepExecutor<HelloWorldStepInputsV1, HelloWorldTargetInputs> = async ({ inputs, target, context }) => {
    context.print(target.greetingPrefix + " " + inputs.name);
};

export default HelloWorldStepExecutor;
