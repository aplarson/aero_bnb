json.array! @flights do |flight|
  json.id flight.id
  json.departure_date flight.departure_date
  json.aircraft flight.aircraft
  json.price flight.price
  json.passengers flight.passengers
  json.photo_url flight.photo_url
  json.departure_airport flight.departure_airport
  json.owner do
    json.username flight.owner.username
    json.photo_url flight.owner.photo_url
  end
end