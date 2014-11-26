class Api::AirportsController < Api::ApiController
  def index
    @airports = Airport.all
    render json: @airports
  end

  def show
    @airport = Airport.find(params[:id])
    render json: @airport
  end
end