import React from 'react';
import './Questions.css';
import { useEffect } from 'react';
import { useState } from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {

    const [questions, submissions] = useCustomHook();

    return (
        <>
            QuestionList
        </>
    );
}

function useCustomHook() {
    const [questions, setQuestions] = useState([])
    const [submissions, setSubmissions] = useState([])

    useEffect(() => {
        async function fetchDetails() {
            const [questionsList, submissionsList] = await Promise.all([
                fetch(QUESTIONS_API_BASE_URL),
                fetch(SUBMISSIONS_API_BASE_URL)
            ])
            const [questions, submissions] = await Promise.all([
                questionsList.json(),
                submissionsList.json()
            ])

            setQuestions(questions)
            setSubmissions(submissions)
        }

        fetchDetails();
    }, [])

    return [questions, submissions]
}