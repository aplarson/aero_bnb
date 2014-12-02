class Api::AirportsController < Api::ApiController
  def create
    @airport = Airport.new(airport_params)
    if @airport.save
      render json: @airport
    else
      render json: @airport.errors
    end
  end

  def index
    @airports = Airport.all
    render json: @airports
  end

  #ignore searches in mid-Pacific for now

  def search
    @airports = Airport.where("latitude BETWEEN ? AND ?", params[:south], params[:north])
                       .where("longitude BETWEEN ? AND ?", params[:west], params[:east])
    render json: @airports
  end

  def show
    @airport = Airport.find(params[:id])
    render json: @airport
  end

  private

  def airport_params
    params.require(:airport).permit(:name, :iata_code, :icao_code, :latitude, :longitude)
  end

  def search_params
    params.require(:search).permit(:ne, :sw)
  end
end