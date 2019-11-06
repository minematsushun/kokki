class GamesController < ApplicationController
  before_action :new_point
  before_action :move_to_top, only: [:quize, :timer, :slot, :touch, :omikuji]

  def index
  end

  def quize
  end

  def timer
  end

  def omikuji
  end

  def slot
  end

  def touch
  end

  private
  def move_to_top
    redirect_to action: :index unless user_signed_in?
  end

  def new_point
    @point = Point.new
  end
end
