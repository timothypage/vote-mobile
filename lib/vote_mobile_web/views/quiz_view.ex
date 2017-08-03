defmodule VoteMobileWeb.QuizView do
  use VoteMobileWeb, :view

  def render("show.json", %{questions: questions}) do
    questions
  end

  def render("create.json", %{id: id}) do
    %{message: "ok", id: id} 
  end

  def render("add.json", _params) do
    %{message: "ok"}
  end
end