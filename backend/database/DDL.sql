DROP TABLE IF EXISTS Schule;

CREATE TABLE Schule (   SchuleID SERIAL PRIMARY KEY,
                        Name VARCHAR(50),
                        Strasse VARCHAR(50),
                        Hausnummer Varchar(5),
                        PLZ Integer,
                        Ort VARCHAR(30),
                        Anzahl_Schueler Integer,
                        Schulhaus_Flaeche Decimal(10, 2),
                        Hauptenergietraeger VARCHAR(50),
                        Hauptenergietraeger_Verbrauch DECIMAL(10, 2),
                        Sekundaerenergietraeger VARCHAR(50),
                        Sekundaerenergietraeger_Verbrauch DECIMAL(10, 2),
                        Stromverbrauch VARCHAR(10),
                        Bezug_Stromnetz VARCHAR(10),
                        Bezug_Solaranlage VARCHAR(10),
                        CO2_Emission VARCHAR(10),
                        Stromprodukt VARCHAR(100),
                        Stromanbieter VARCHAR(50),
                        Zusammensetzung_Strommix VARCHAR(50),
                        Photovolaikanlage BOOLEAN,
                        Photovoltaikanlage_Flaeche DECIMAL(10, 2),
                        Photovolaikanlage_Leistung DECIMAL(10, 2),
                        Photovolaikanlage_Produktion DECIMAL(10, 2),
                        Miergie BOOLEAN,
                        Betriebsoptimierungen VARCHAR(500),
                        Weiteres VARCHAR(500)
)

INSERT INTO Schule (
    Name,
    Hauptenergietraeger,
    Hauptenergietraeger_Verbrauch,
    Stromverbrauch,
    Stromprodukt,
    Stromanbieter,
    CO2_Emission,
    Photovolaikanlage,
    Photovoltaikanlage_Flaeche,
    Photovolaikanlage_Leistung,
    Photovolaikanlage_Produktion,
    Miergie,
    Anzahl_Schueler,
    Schulhaus_Flaeche
)
VALUES
    ('Schule Gockhausen ZH', 'Heizöl', 20000, 50000, 'Naturstrom', 'ewz Elektrizitätswerk der Stadt Zürich', 0.01, '1', 60, 140, 1260, 0, 80, 170),
    ('Freie Schule Winterthur ZH', 'Wärmepumpe', 45000, 80000, 'Standardstrom', 'Elektrizitätswerke des Kantons Zürich - EKZ', 0.8, '0', NULL, NULL, NULL, '1', 120, 200),
    ('Sekundarschule Gelterkinden BL', 'Biogas', 50000, 100000, 'Ökostrom', 'Alpiq AG', 0.45, '1', 100, 153, 2300, '1', 200, 250),
    ('Sekundarschule Hüenerweid Dietlikon ZH', 'Heizöl', 35000, 93000, 'Naturstrom', 'Werke am Zürichsee AG', 0.02, '0', NULL, NULL, NULL, '0', 180, 240),
    ('Sekundarschule Seuzach ZH', 'Holzpellets/Schnitzel', 32000, 120000, 'Standardstrom', 'Elektrizitätswerke des Kantons Zürich - EKZ', 0.7, '0', NULL, NULL, NULL, '1', 200, 300)
