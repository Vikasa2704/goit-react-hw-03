import styles from './Options.module.css'


function Options({ updateFeedback, resetFeedback, totalFeedbackCount }) {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => updateFeedback ('good')}>Good</button>
      <button onClick={() => updateFeedback ('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback ('bad')}>Bad</button>
      {totalFeedbackCount > 0 && (<button onClick={resetFeedback}>Reset</button>)}
    </div>
  );
}

export default Options