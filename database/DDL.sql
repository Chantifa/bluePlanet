DROP TABLE IF EXISTS tours;


CREATE TABLE School (
  id SERIAL NOT NULL primary key ,
  name varchar(450) NOT NULL,
  description varchar(450) NOT NULL,
  address DOUBLE PRECISION NOT NULL,
  zip varchar(10) NOT NULL,
  city varchar(250),
  state varchar(50)
);

INSERT INTO School  values (1,'BlaSchool','We are a University for very cool people','8050','Zürich', 'Zürich')
I---
-- Table structure for table users
--

DROP TABLE IF EXISTS users;

CREATE TABLE users (   id SERIAL NOT NULL PRIMARY KEY ,
                       name varchar(250) NOT NULL,
                       email varchar(250) NOT NULL,
                       password varchar(250) NOT NULL
);

INSERT INTO users VALUES (1,'user1','user1@test.ch','123456');
INSERT INTO users VALUES (2,'user2','user2@test.ch','123456');
