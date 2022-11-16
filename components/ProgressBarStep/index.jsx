import styles from './spb.module.scss';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const ProgressBarStep = ({spbSteps}) => {
  function onFormSubmit() {
    return true
  }
  return <StepProgressBar
    startingStep={1}
    onSubmit={onFormSubmit}
    steps={spbSteps}
    stepClass={styles.step}
    primaryBtnClass={styles.btnNext}
    secondaryBtnClass={styles.btnPrev}
    nextBtnName="Continuar"
    previousBtnName="Volver"
  />;
}
export default ProgressBarStep