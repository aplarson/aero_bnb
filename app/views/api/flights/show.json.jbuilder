json.extract!(@flight, :id, :departure_date, :aircraft, :description, :price, :photo_url, :passengers, :departure_airport)

json.owner @flight.owner, :username, :photo_url, :description

json.comments @flight.comments do |comment|
  author = @flight.commenters.find { |user| user.id == comment.author_id }
  json.content comment.content
  json.created_at comment.created_at
  json.author author, :username, :photo_url
end