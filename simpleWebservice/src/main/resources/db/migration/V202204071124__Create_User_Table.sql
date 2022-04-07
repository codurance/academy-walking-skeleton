create table example_user
(
    id          bigint  not null
        primary key,
    age         integer not null,
    dateofbirth date,
    name        varchar(255)
);

INSERT INTO example_user(id, name, age, dateofbirth) VALUES (1, 'John Doe', 26, '1970-12-31');

