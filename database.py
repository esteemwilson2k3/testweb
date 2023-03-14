from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///movies.db')
Base = declarative_base()
Session = sessionmaker(bind=engine)

class Movie(Base):
    __tablename__ = 'movies'

    id = Column(Integer, primary_key=True)
    title = Column(String(255))
    description = Column(Text)
    director = Column(String(255))
    year = Column(Integer)

def get_movies():
    session = Session()
    movies = session.query(Movie).all()
    session.close()
    return movies

def get_movie(id):
    session = Session()
    movie = session.query(Movie).filter_by(id=id).first()
    session.close()
    return movie

def search_movies(query):
    session = Session()
    movies = session.query(Movie).filter(Movie.title.contains(query)).all()
    session.close()
    return movies

# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker, declarative_base

# engine = create_engine('sqlite:///movies.db')
# Base = declarative_base()
# Session = sessionmaker(bind=engine)

# def get_movies():
#     session = Session()
#     movies = session.query(Movie).all()
#     session.close()
#     return movies

# def get_movie(id):
#     session = Session()
#     movie = session.query(Movie).filter_by(id=id).first()
#     session.close()
#     return movie

# def search_movies(query):
#     session = Session()
#     movies = session.query(Movie).filter(Movie.title.contains(query)).all()
#     session.close()
#     return movies

