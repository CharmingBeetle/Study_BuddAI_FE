import React, { useEffect, useState } from "react";
import { getQuizzes } from "../api";
import QuizCard from "./QuizCard"; 
import useUserContext from "../src/contexts/useUserContext";
import Lottie from "lottie-react";
import animation from "../src/assets/loading.json"

interface QuizData {user_id: number,
    quiz_id: number,
    file_id: number,
    created_at: string,
    quiz_name: string
}

const Quizzes: React.FC = () => {

    const { loggedInUser } = useUserContext()
    const userId = loggedInUser.user_id;
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [quizzes, setQuizzes] = useState<QuizData[]>([]);

  useEffect(() => {
    if(!loggedInUser){
      setError("User not logged in")
      setIsLoading(false)
      return
    }
    getQuizzes(userId)
      .then((data) => {
        setQuizzes(data)
      })
      .catch(() => {
        setError("Failed to load quizzes");
    })
    .finally(() => {
        setIsLoading(false)
      })
  }, []);

  if (isLoading) return <Lottie animationData={animation} loop={true} autoplay={true} className="loading-animation" />;
  if (error) return <div className="error">{error}</div>;

  return <div className="quizzes"><ul>{
    quizzes.map((quiz) => {
        return <QuizCard key={quiz.quiz_id} quiz={quiz} />
    })}

    </ul></div>;
};

export default Quizzes;
