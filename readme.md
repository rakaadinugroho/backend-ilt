# API Wilayah
Repository ini adalah bagian dari Demo Untuk Course Backend Basic

## Untuk Memulai nya
- clone project ini `git clone https://github.com/rakaadinugroho/backend-ilt.git`
- buat database baru (disini menggunangan postgresql)
- buat table berikut
  ```
    CREATE DATABASE db_wilayah;
    
    CREATE TABLE provinces (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    province_id INT REFERENCES provinces(id),
    name VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE districts (
    id SERIAL PRIMARY KEY,
    city_id INT REFERENCES cities(id),
    name VARCHAR(255) NOT NULL
    );

  ```
- isi data sesuai kebutuhan
- sesuaikan configurasi environment variables nya (`.env`)
- jalankan project nya `node index.js`

## Tujuan Utama Pembelajaran
- [x] Basic REST
- [x] Database Connection
- [x] Deployment
- [x] API Documentation
- [ ] GraphQL


