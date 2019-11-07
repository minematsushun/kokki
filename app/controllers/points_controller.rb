class PointsController < ApplicationController
  def create
    @point = Point.new(point_params)
    if @point.save
      @points = Point.where(user_id: current_user.id).count
      # binding.pry
      respond_to do |format|
        format.html {redirect_to omikuji_path}
        format.json { render json: @points}
      end
    else
      redirect_to :root
    end
  end

  private
  def point_params
    params.require(:point).permit(:point).merge(user_id: current_user.id)
  end
end
