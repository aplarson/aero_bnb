class Api::FlightsController < Api::ApiController
  def index
    @flights = current_user.owned_flights.includes(:departure_airport).includes(:owner)
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

  def destroy
    @flight = Flight.find(params[:id])
    @flight.destroy
    render json: @flight
  end

  def show
    @flight = Flight.includes(:departure_airport).includes(:comments).includes(:commenters).find(params[:id])
  end

  def search
    @flights = Flight.search(params)
    render :index
  end

  def update
    @flight = Flight.find(params[:id])
    if @flight.owner != current_user
      render json: "Unauthorized access", status: 403
    elsif @flight.update(flight_params)
      render json: @flight
    else
      render json: @flight.errors.full_messages, status: 422
    end
  end

  private

  def flight_params
    params.require(:flight).permit(:departure_airport_id,
                                   :departure_date,
                                   :aircraft,
                                   :description,
                                   :passengers,
                                   :price,
                                   :photo_url)
  end
end
