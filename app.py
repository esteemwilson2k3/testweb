from flask import Flask, render_template, request
from database import get_movies, get_movie, search_movies

app = Flask(__name__)

@app.route('/')
def home():
    movies = get_movies()
    return render_template('index.html', movies=movies)

@app.route('/movie/<int:id>')
def movie(id):
    movie = get_movie(id)
    return render_template('movie.html', movie=movie)

@app.route('/search')
def search():
    query = request.args.get('q')
    movies = search_movies(query)
    return render_template('search.html', movies=movies)

if __name__ == '__main__':
    app.run(debug=True)

