json.extract!(@flight, :id, :departure_date, :aircraft, :description, :price, :photo_url, :passengers, :departure_airport)

json.owner @flight.owner, :username, :photo_url, :description

json.comments @flight.comments do |comment|
  json.content comment.content
  json.created_at comment.created_at
  json.author comment.author, :username, :photo_url
end