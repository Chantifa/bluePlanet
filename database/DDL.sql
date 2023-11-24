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


CREATE TABLE Schule (
                             SchuleID SERIAL PRIMARY KEY,
                             Name VARCHAR (50),
                             Strasse VARCHAR (50),
                             Hausnummer Varchar (5),
                             PLZ Integer,
                             Ort VARCHAR (30),
                             Hauptenergietraeger VARCHAR(50),
                             Hauptenergietraeger_Verbrauch DECIMAL (10, 2),
                             Sekundaerenergietraeger VARCHAER (50),
                             Sekundaerenergietraeger_Verbrauch DECIMAL (10, 2),
                             Stromverbrauch VARCHAR (10, 2),
                             Bezug_Stromnetz VARCHAR (10, 2),
                             Bezug_Solaranlage VARCAHR (10, 2),
                             CO2_Emission VARCHAR (10, 2),
                             Stromprodukt VARCHAR (100),
                             Stromanbieter VARCHER (50),
                             Zusammensetzung_Strommix VARCHAR (50),
                             Photovolaikanlage BOOLEAN,
                             Photovoltaikanlage_Flaeche DECIMAL (10, 2),
                             Photovolaikanlage_Leistung DECIMAL (10, 2),
                             Photovolaikanlage_Produktion DECIMAL (10,2),
                             Miergie BOOLEAN,
                             Betriebsoptimierungen VARCHAR (500),
                             Weiteres VARCHAR (500)
                              
);

CREATE TABLE Energietraeger (
                             EnergietraegerID SERIAL PRIMARY KEY,
                             Art VARCHAR (20) NOT NULL,  
