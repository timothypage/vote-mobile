defmodule VoteMobileWeb.QuizController do
  use VoteMobileWeb, :controller

  alias VoteMobile.Quiz

  def create(conn, _params) do
    new_quiz_name = UUID.uuid4()

    _pid = Quiz.ServerSupervisor.get_or_create_server(new_quiz_name)

    render conn, "create.json", id: new_quiz_name
  end

  def show(conn, %{"quiz_id" => id}) do
    pid = Quiz.Server.whereis(id)

    render(
      conn,
      "show.json",
      questions: Quiz.Server.questions(pid)
    )
  end

  def add(conn, %{
    "quiz_id" => name,
    "question" => question
    }) do

    pid = Quiz.Server.whereis(name)

    Quiz.Server.add_question(pid, question)

    render(
      conn,
      "add.json",
      %{}
    )
  end
end