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

CREATE TABLE Heating (
                         HeatingID SERIAL PRIMARY KEY,
                         MainEnergySource VARCHAR(50),
                         ConsumptionMainSource DECIMAL(10, 2),
                         SecondaryEnergySource VARCHAR(50),
                         ConsumptionSecondarySource DECIMAL(10, 2)
);

CREATE TABLE Electricity (
                             ElectricityID SERIAL PRIMARY KEY,
                             TotalConsumption DECIMAL(10, 2),
                             GridElectricityConsumption DECIMAL(10, 2),
                             SolarElectricityConsumption DECIMAL(10, 2),
                             SelectedPowerMix VARCHAR(50),
                             Provider VARCHAR(50),
                             PowerMixComposition VARCHAR(100),
                             CO2Emissions DECIMAL(10, 2)
);

CREATE TABLE SolarPanel (
                            SolarPanelID SERIAL PRIMARY KEY,
                            IsPhotovoltaicPresent BOOLEAN,
                            Area DECIMAL(10, 2),
                            Power DECIMAL(10, 2),
                            Production DECIMAL(10, 2)
);

CREATE TABLE Renovations (
                             RenovationID SERIAL PRIMARY KEY,
                             IsMinergieBuilding BOOLEAN
);

