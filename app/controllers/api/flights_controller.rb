class Api::FlightsController < Api::ApiController
  def index
    @flights = Flight.includes(:departure_airport).all
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
    @flight = Flight.includes(:departure_airport).find(params[:id])
  end

  def search
    @flights = Flight.includes(:departure_airport).all
    if params[:departure_date]
      @flights = @flights.includes(:departure_airport).where('departure_date = ?', params[:departure_date])
    end
    if params[:min_price]
      @flights = @flights.includes(:departure_airport).where('price >= ?', params[:min_price])
    end
    if params[:max_price]
      @flights = @flights.includes(:departure_airport).where('price <= ?', params[:max_price])
    end
    if params[:passengers]
      @flights = @flights.includes(:departure_airport).where('passengers >= ?', params[:passengers])
    end
    render :index
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