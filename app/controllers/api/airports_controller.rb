class Api::AirportsController < Api::ApiController
  def index
    @airports = Airport.all
    render json: @airports
  end

  def show
    @airport = Airport.find(params[:id])
    render json: @airport
  end

  def create
    @airport = Airport.new(airport_params)
    if @airport.save
      render json: @airport
    else
      render json: @airport.errors
    end
  end
end