import { useState, useEffect, useId} from 'react';
import { Formik } from 'formik';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

import './App.css';

const feedbackData = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getLsFeedbackData = () => {
  return localStorage.getItem('feedback-data') !== null ? JSON.parse(localStorage.getItem('feedback-data')) : feedbackData;
};

const App = () => {
  const [feedback, setFeedback] = useState(getLsFeedbackData);

  useEffect(() => {
    localStorage.setItem('feedback-data', JSON.stringify(feedback));
  }, [feedback]);

   const updateFeedback = (feedbackType) => {
        setFeedback({
        ...feedback,
        [feedbackType]: feedback[feedbackType] + 1,
      });
    };
    const resetFeedback = () => {
      setFeedback(feedbackData);
    };
  

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedbackCount={totalFeedback}/>
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};



<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>

export default App;
