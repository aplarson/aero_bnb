class Api::AirportsController < Api::ApiController
  def index
    @airports = Airport.all
    render json: @airports
  end

  
end