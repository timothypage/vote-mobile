defmodule VoteMobile.Quiz do
  defstruct questions: []

  def new(questions \\ []) do
    %VoteMobile.Quiz{questions: questions}
  end

  def add_question(%VoteMobile.Quiz{questions: questions}, question) do
    
    %VoteMobile.Quiz{questions: [
      Map.put(question, :id, UUID.uuid4()) | questions
    ]}
  end

end