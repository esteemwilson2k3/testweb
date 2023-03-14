from sqlalchemy import Column, Integer, String, Text
from database import Base

class Movie(Base):
    __tablename__ = 'movies'
    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    description = Column(Text)
    year = Column(Integer)
    director = Column(String(50))
