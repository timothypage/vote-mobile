defmodule VoteMobile.Quiz.Server do
  use GenServer

  alias VoteMobile.Quiz

  # Client methods

  def start_link(name) do
    IO.puts("starting VoteMobile.Quiz.Server for #{name}")
    GenServer.start_link(__MODULE__, name, name: via_tuple(name))
  end

  def whereis(name) do
    :gproc.whereis_name({:n, :l, {:quiz_server, name}})
  end

  def add_question(quiz_server, question) do
    GenServer.call(quiz_server, {:add_question, question})
  end

  def questions(quiz_server) do
    GenServer.call(quiz_server, {:questions})
  end

  # Server methonds

  def init(name) do
    {:ok, {name, Quiz.new}}
  end

  def handle_call({:add_question, question}, _req_id, {name, quiz}) do
    {
      :reply,
      :ok,
      {name, Quiz.add_question(quiz, question)}
    }
  end

  def handle_call({:questions}, _req_id, state) do
    {:reply, state, state}
  end

  defp via_tuple(name) do
    {:via, :gproc, {:n, :l, {:quiz_server, name}}}
  end
end