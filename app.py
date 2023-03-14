from flask import Flask, render_template, request, redirect, url_for, session
from database import db_session, init_db
from models import User, Movie, Review

app = Flask(__name__)
app.secret_key = "supersecretkey"

# khởi tạo cơ sở dữ liệu
init_db()

# route trang chủ
@app.route('/')
def index():
    movies = db_session.query(Movie).order_by(Movie.id.desc()).all()
    return render_template('index.html', movies=movies)

# route trang chi tiết bộ phim
@app.route('/movie/<int:id>')
def movie(id):
    movie = db_session.query(Movie).filter(Movie.id==id).first()
    reviews = db_session.query(Review).filter(Review.movie_id==id).all()
    return render_template('movie.html', movie=movie, reviews=reviews)

# route trang tìm kiếm
@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        query = request.form['query']
        movies = db_session.query(Movie).filter(Movie.title.like('%'+query+'%')).all()
        return render_template('search.html', movies=movies, query=query)
    else:
        return redirect(url_for('index'))

# route trang đăng nhập
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = db_session.query(User).filter(User.email==email, User.password==password).first()
        if user:
            session['user_id'] = user.id
            return redirect(url_for('index'))
        else:
            return render_template('login.html', error='Invalid email or password')
    else:
        return render_template('login.html')

# route trang đăng ký
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        user = db_session.query(User).filter(User.email==email).first()
        if user:
            return render_template('register.html', error='Email already registered')
        else:
            new_user = User(name=name, email=email, password=password)
            db_session.add(new_user)
            db_session.commit()
            session['user_id'] = new_user.id
            return redirect(url_for('index'))
    else:
        return render_template('register.html')

# route đăng xuất
@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('index'))

# route đăng đánh giá
@app.route('/review/<int:id>', methods=['GET', 'POST'])
def review(id):
    if 'user_id' not in session:
        return redirect(url_for('login'))
    if request.method == 'POST':
        rating = request.form['rating']
        comment = request.form['comment']
        user_id = session['user_id']
        new_review = Review(rating=rating, comment=comment, user_id=user_id, movie_id=id)
        db_session.add(new_review)
        db_session.commit()
        return redirect(url_for('movie', id=id))
    else:
        return render_template('review.html', movie_id=id)


if __name__ == '__main__':
    app.run(debug=True)
