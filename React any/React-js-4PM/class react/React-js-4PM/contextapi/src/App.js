import React, { useContext } from 'react'
import { Dataprovider } from './Provider/contextProvider'
import Login from './pages/Login';
import Icon from './components/Icon';
import User from './pages/User';

const App = () => {
    let { light } = useContext(Dataprovider)
    console.log(light);


    return (
        <div style={{ backgroundColor: light ? "grey" : "black", color: light ? "black" : "white" }}>
            <h2>

                Grind 75 is a better version of Blind 75 which goes beyond 75 questions. You can customize the available time you have, difficulty, topics, etc.
                Grind 75
                Grind 75 is a better version of Blind 75 which goes beyond 75 ...
                About
                Grind 75 is a better version of Blind 75 which goes beyond 75 ...
                Grind 169 questions
                Grind 75 is a better version of Blind 75 which goes beyond 75 ...
                Algorithms cheatsheets
                ... AlgorithmsBlogGrind 75 Front End. Search K. Tech Interview ...
                Frequently Asked Questions
                Grind 75 is a better version of Blind 75 which goes beyond 75 ...
                More results from techinterviewhandbook.org »

                Leetcode Lists for Blind 75, Grind ...

                LeetCode
                https://leetcode.com › discuss › general-discussion › Le...
                29 Jun 2023 — Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next ...

                I tried Grind 75 to prep for my Google Interview

                YouTube · Keep On Coding
                13.2K+ views · 10 months ago

                5:54
                https://KeepOnCoding.io - Ace the coding interview https://courses.keeponcoding.io - Check out my courses!
                People also ask
                What is the grind 75?
                Why is it called Blind 75?
                Is blind 75 enough for Google?
                What is blind 75 and neetcode 150?
                Feedback

                grind75, from author of blind75 : r/leetcode

                Reddit · r/leetcode
                30+ comments · 2 years ago
                I was wondering, for someone new to Leetcode (but w/ DS and Algo experience), would you recommend starting with Blind 75 or Grind 75? Upvote
                NeetCode 150 vs Grind 75 : r/leetcode
                2 Jul 2022
                What is your method/approach to Grind 75? : r/leetcode
                5 Dec 2023
                Don't rely only on Blind or Grind 75 : r/developersIndia
                29 Jul 2022
                Is grind 74 better than blind 75? If so, why? : r/leetcode
                29 May 2022
                More results from www.reddit.com

                Leetcode Solutions in Python for Grind 75

                GitHub
                https://github.com › yuchia0221 › Grind-75
                Grind 75 (Completed). This repository is a software engineer interview prepration, which provides solutions for 75 leetcode questions in Python. The original ...

            </h2>

            <Icon />
            <Login/>
            <User/>
        </div>
    )
}

export default App