json.extract!(@comment, :content, :created_at)

json.author @comment.author, :username, :photo_url