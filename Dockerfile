# Base image menggunakan ubuntu 24.04
FROM ubuntu:24.04

# Install Nginx WEB SERVER
RUN apt-get update && apt-get install -y nginx

# Install Package yang diperluakan dan install repo php
RUN apt-get update && apt-get install -y curl git unzip lsb-release ca-certificates apt-transport-https software-properties-common \
    && add-apt-repository ppa:ondrej/php

# Install PHP8.1
RUN apt-get update && apt-get install -y --no-install-recommends php8.1

# Install extension PHP
RUN apt-get update && apt-get install -y php8.1-curl php8.1-ctype \
    php8.1-dom php8.1-fileinfo php8.1-fpm php8.1-pgsql \
    php8.1-mbstring php8.1-pdo php8.1-xml php8.1-gd php8.1-zip

# Instal Composer secara global
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Verifikasi instalasi Composer
RUN composer --version

# Menyalin Server Block Laravel
COPY /nginx/default /etc/nginx/sites-available/default

# Membuat work directory
WORKDIR /var/www/erapor

# Menyalin file dari host ke image container
COPY /src /var/www/erapor

# Melakukan Update Composer
RUN composer update

# Memberikan permission
RUN chown -R $USER:www-data storage \
    && chown -R $USER:www-data bootstrap/cache \
    && chmod -R 775 storage \
    && chmod -R 775 bootstrap/cache

# Menjalankan Artisan
RUN php artisan key:generate \
    && php artisan storage:link \
    && php artisan config:clear \
    && php artisan cache:clear

# menghapus data di docker entrypoint jik ada
RUN rm -rf /docker-entrypoint.d/*

# Mengexpose port 80
EXPOSE 80

# Script untuk menjalankan php-fpm & NGINX
CMD ["sh", "-c", "php-fpm8.1 -F & nginx -g 'daemon off;'"]