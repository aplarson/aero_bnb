class Api::AirportsController < Api::ApiController
  def create
    @airport = Airport.new(airport_params)
    if @airport.save
      render json: @airport
    else
      render json: @airport.errors, status: 422
    end
  end

  def index
    @airports = Airport.all
    render json: @airports
  end

  #ignore searches in mid-Pacific for now

  def search
    @airports = Airport.search(params)
    render json: @airports
  end

  def show
    @airport = Airport.find(params[:id])
    render json: @airport
  end

  def names
    @airports = Airport.where("name LIKE ?", "%#{params[:term]}%")
    names = @airports.map { |airport| airport.name }
    render json: names
  end

  def name_search
    @airports = Airport.where("name = ?", params[:airport][:name])
    render json: @airports.first
  end

  private

  def airport_params
    params.require(:airport).permit(:name, :iata_code, :icao_code, :latitude, :longitude)
  end

  def search_params
    params.require(:search).permit(:ne, :sw)
  end
end
