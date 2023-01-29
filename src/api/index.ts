import axios  from "axios";

export const getCategories = async (category: string) => {
  return axios
    .get(`https://api-quizz.vercel.app/api/v1/${category}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}