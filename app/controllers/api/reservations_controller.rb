class Api::ReservationsController < Api::ApiController
  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render json: @reservation
    else
      render json: @reservation.errors
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    render json: @reservation
  end

  def show
    @reservation = Reservation.includes(:user).includes(:flight).find(params[:id])
    render json: @reservation
  end

  def index
    @reservations = current_user.reservations.includes(:flight)
    render json: @reservations
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :flight_id, :passengers)
  end
end