class PointsController < ApplicationController
  def create
    # @point = Point.new(point_params)
    Point.create!(point: 1, user_id: current_user.id)
    redirect_to :root
  end

end
