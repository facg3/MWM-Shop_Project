BEGIN;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO users(name) VALUES('marwa');

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    size  TEXT[],
    price  INTEGER
);

INSERT INTO products(name,image,size,price) VALUES('Unionbay® Men "Westport"Sneakers','images/1.png',ARRAY['38','39','40'],50);
INSERT INTO products(name,image,size,price) VALUES('Rider™ Men "R1 Energy Vl" Thong Sandals','images/2.png',ARRAY['38','39','40'],70);
INSERT INTO products(name,image,size,price) VALUES('Sperry® Boys"Wahoo JR"Sneakers','images/3.png',ARRAY['38','39','40'],30);
INSERT INTO products(name,image,size,price) VALUES('UGG® "Olive" Fashion Sneakers','images/4.png',ARRAY['38','39','40'],60);
INSERT INTO products(name,image,size,price) VALUES('Timberland Premium Leather/Fabric Waterproof Boot','images/5.jpg',ARRAY['38','39','40'],99.95);
INSERT INTO products(name,image,size,price) VALUES('Timberland Grey Lace Up Boot','images/6.jpg',ARRAY['38','39','40'],120);
INSERT INTO products(name,image,size,price) VALUES('Timberland Pink Lace Up Boot','images/7.jpg',ARRAY['38','39','40'],150);
INSERT INTO products(name,image,size,price) VALUES('Latest-Nike-Running-Shoes-Women-2015','images/8.jpg',ARRAY['38','39','40'],130);
INSERT INTO products(name,image,size,price) VALUES('Women Floral Dandelion Womens Running','images/9.jpg',ARRAY['38','39','40'],80);



CREATE TABLE IF NOT EXISTS cart(
  user_id integer REFERENCES users(id),
  product_id  integer REFERENCES products(id),
  PRIMARY KEY (user_id,product_id)
);



COMMIT;
