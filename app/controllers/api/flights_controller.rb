class Api::FlightsController < ApiController
  def index
    @flights = Flight.all
    render @flights
  end

  def create
    @flight = Flight.new(flight_params)
    if @flight.save
      render @flight
    else
      render @flight.errors.full_messages, status: 422
    end
  end

  def show
    @flight = Flight.find(params[:id])
    render @flight
  end
end