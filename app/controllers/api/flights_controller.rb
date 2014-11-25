class Api::FlightsController < Api::ApiController
  def index
    @flights = Flight.all
    render json: @flights
  end

  def create
    @flight = Flight.new(flight_params)
    @flight.owner = current_user
    if @flight.save
      render json: @flight
    else
      render json: @flight.errors.full_messages, status: 422
    end
  end

  def show
    @flight = Flight.find(params[:id])
    render json: @flight
  end

  private

  def flight_params
    params.require(:flight).permit(:departure_airport_id, 
                                   :departure_date, 
                                   :aircraft, 
                                   :description,
                                   :passengers, 
                                   :price)
  end
end