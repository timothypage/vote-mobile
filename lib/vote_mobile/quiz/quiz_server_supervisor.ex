defmodule VoteMobile.Quiz.ServerSupervisor do
  use Supervisor

  alias VoteMobile.Quiz

  def start_link do
    Supervisor.start_link(__MODULE__, nil, name: :quiz_server_supervisor)
  end

  def start_child(quiz_name) do
    Supervisor.start_child(
      :quiz_server_supervisor,
      [quiz_name]
    )
  end

  def get_or_create_server(quiz_name) do
    case Quiz.Server.whereis(quiz_name) do
      :undefined ->
        {:ok, pid} = start_child(quiz_name)
        pid
      pid -> pid
    end
  end

  def init(_) do
    supervise(
      [
        worker(Quiz.Server, [])
      ],
      strategy: :simple_one_for_one
    )
  end
end