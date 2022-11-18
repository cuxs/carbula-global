// import { withStepProgress, useStepProgress, Step, StepProgressBar } from 'react-stepz';
// import 'react-stepz/dist/index.css';
// import { useState } from 'react';
// import styles from './spb.module.scss';

// export function spgStepForward(){stepf}

// const ProgressBarStep = ({spbSteps}) => {
//   const [isValid, setIsValid] = useState(false);
//   const { stepForward, stepBackwards, currentIndex } = useStepProgress({
//     spbSteps,
//     startingStep: 0
//   });
//   return (
//     <div>
//       <StepProgressBar steps={spbSteps} />
//       <Step step={0}>
//         <h1>First step</h1>
//       </Step>
//       <Step step={1}>
//         <h1>Second step</h1>
//       </Step>
//       <Step step={2}>
//         <h1>Third Step</h1>
//       </Step>
//       <button onClick={stepForward}>Next</button>
//       <button onClick={stepBackwards}>Back</button>
//     </div>
//   )
// }
// export default ProgressBarStep

import { withStepProgress, useStepProgress, Step, StepProgressBar } from 'react-stepz';
import 'react-stepz/dist/index.css';
import { useState } from 'react';

const ProgressBarStep = () => {
  const [isValid, setIsValid] = useState(false);

  const steps = [
    {
      label: 'Step 1',
      name: 'step 1'
    },
    {
      label: 'Step 2',
      name: 'step 2',
    },
    {
      label: 'Step 3',
      name: 'step 3'
    },
    {
      label: 'Step 4',
      name: 'step 4'
    }
  ];

  const { stepForward, stepBackwards, currentIndex } = useStepProgress({
    steps,
    startingStep: 0
  });

  return (
    <div>
      <StepProgressBar steps={steps} />
      {/* <Step step={0}>
        <h1>First step</h1>
      </Step>
      <Step step={1}>
        <h1>Second step</h1>
      </Step>
      <Step step={2}>
        <h1>Third Step</h1>
      </Step> */}
      <button onClick={stepForward}>Next</button>
      <button onClick={stepBackwards}>Back</button>
    </div>
  );
};

export default withStepProgress(ProgressBarStep);

// import StepProgressBar from 'react-step-progress';
// import 'react-step-progress/dist/index.css';
// import styles from './spb.module.scss';
// const ProgressBarStep = ({spbSteps}) => {
//   function onFormSubmit() {
//     return true
//   }
//   return <StepProgressBar
//     startingStep={1}
//     onSubmit={onFormSubmit}
//     steps={spbSteps}
//     stepClass={styles.step}
//     primaryBtnClass={styles.btnNext}
//     secondaryBtnClass={styles.btnPrev}
//     nextBtnName="Continuar"
//     previousBtnName="Volver"
//   />;
// }
// export default ProgressBarStep