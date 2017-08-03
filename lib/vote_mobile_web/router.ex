defmodule VoteMobileWeb.Router do
  use VoteMobileWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", VoteMobileWeb do
    pipe_through :api

    post "/quiz/:quiz_id/add-question", QuizController, :add
    post "/quiz/create", QuizController, :create
    get  "/quiz/:quiz_id", QuizController, :show
  end

  scope "/", VoteMobileWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", VoteMobileWeb do
  #   pipe_through :api
  # end
end
