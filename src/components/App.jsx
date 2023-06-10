import { useState } from 'react';
import Statistic from './statistics/statistic.jsx';
import FeedbackOptions from './feedback/feedback.jsx';
import Section from './section/section.jsx';
import Notification from './notification/notification.jsx';

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const addGood = () => {
        setGood(prevState => prevState + 1);
    }

    const addNeutral = () => {
        setNeutral(prevState => prevState + 1);
    }

    const addBad = () => {
        setBad(prevState => prevState + 1);
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }


    const countPositiveFeedbackPercentage = () => {
            const percentage =  (good / countTotalFeedback()) * 100 || 0;
            return percentage.toFixed(0)
        }

    return (
        <div
    //   style={{
    //     // display: 'flex',
    //     padding: 20,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
            >
                <Section title="Please leave feedback">
                <FeedbackOptions addGood={() => addGood()}
                    addNeutral={() => addNeutral()}
                    addBad={() => addBad()}
                    />
                </Section>
            

                <Section title="Statistics">

                    {countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) :
                        <Statistic
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            countTotalFeedback={countTotalFeedback()}
                            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()} />}
                </Section> 
        </div>
            
        )


}

// export class OLdApp extends Component{

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     addGood = () => {
//         this.setState(prevState => ({
//             good: prevState.good + 1,
//         }))
//     }

//     addNeutral = () => {
//         this.setState(prevState => ({
//             neutral: prevState.neutral + 1,
//         }))
//     }

//     addBad = () => {
//         this.setState(prevState => ({
//             bad: prevState.bad + 1,
//         }))
//     }

    // countTotalFeedback () {
    //     const { good, neutral, bad } = this.state;
    //     return good + neutral + bad;
    // }

//     countPositiveFeedbackPercentage() {
//         const total = this.countTotalFeedback();
//             const percentage =  (this.state.good / total) * 100 || 0;
//             return percentage.toFixed(0)
//         }

    
//     render() {
//         return (
//         <div
//       style={{
//         // display: 'flex',
//         padding: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//             >
//                 <Section title="Please leave feedback">
//                 <FeedbackOptions addGood={this.addGood}
//                     addNeutral={this.addNeutral}
//                     addBad={this.addBad}
//                     />
//                 </Section>
            

//                 <Section title="Statistics">

//                     {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) :
//                         <Statistic
//                             good={this.state.good}
//                             neutral={this.state.neutral}
//                             bad={this.state.bad}
//                             countTotalFeedback={this.countTotalFeedback()}
//                             countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()} />}
//                 </Section> 
//         </div>
            
//         )
//     }

// }