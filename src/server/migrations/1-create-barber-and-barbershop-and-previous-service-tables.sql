CREATE TABLE barber (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_external_user VARCHAR(255),
    name VARCHAR(255),
    accept_schedules_automatically BOOLEAN
);

CREATE TABLE barbershop (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    location VARCHAR(255),
    description TEXT,
    picture VARCHAR(255),
    document VARCHAR(255),
    id_owner UUID,
    latitude VARCHAR(255),
    longitude VARCHAR(255)
);