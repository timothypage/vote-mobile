defmodule VoteMobileWeb.PageController do
  use VoteMobileWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
