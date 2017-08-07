export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion(text) {
  return { type: ADD_QUESTION, text }
}
