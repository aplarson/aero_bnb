class Api::ReservationsController < Api::ApiController
  def confirm
    @reservation = Reservation.find(params[:id])
    @reservation.confirmation_status = "CONFIRMED"
    if @reservation.save
      render json: @reservation
    else
      render json: @reservation.errors, status: 422
    end
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    @reservation.confirmation_status = "UNCONFIRMED"
    if @reservation.save
      render json: @reservation
    else
      render json: @reservation.errors, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    render json: @reservation
  end

  def reject
    @reservation = Reservation.find(params[:id])
    @reservation.confirmation_status = "REJECTED"
    if @reservation.save
      render json: @reservation
    else
      render json: @reservation.errors, status: 422
    end
  end

  def show
    @reservation = Reservation.includes(:user).includes(:flight).find(params[:id])
    render json: @reservation
  end

  def index
    @reservations = current_user
                      .reservations
                      .includes(:flight)
                      .includes(:departure_airport)
    @requested_reservations = current_user
                                .owned_flight_reservations
                                .includes(:flight)
                                .includes(:departure_airport)
  end

  private

  def reservation_params
    params.require(:reservation).permit(:flight_id, :passengers)
  end
end
