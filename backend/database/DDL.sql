DROP TABLE IF EXISTS Schule;
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
