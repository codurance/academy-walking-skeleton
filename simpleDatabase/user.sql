CREATE TABLE public.example_user (
    id SERIAL NOT NULL, 
    name varchar(100) NOT NULL, 
    age int NOT NULL,
    dateofbirth DATE NOT NULL
);

INSERT INTO public.example_user(id, name, age, dateofbirth)
VALUES (1,'John Doe',26,'1970-12-31')
RETURNING *;