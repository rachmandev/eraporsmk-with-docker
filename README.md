<p align="center"><img src="http://app.erapor-smk.net/logo.png" width="300"></p>

## Server Requirements
OS Windows, Linux dan MacOs Terinstall Docker Desktop <br>
OS Linux Install Docker Engine Lewat APT Repository (recommended)
- docker-ce 
- docker-ce-cli 
- containerd.io 
- docker-buildx-plugin 
- docker-compose-plugin

## Install Docker

Install Docker dari link berikut :
```bash
https://docs.docker.com/engine/install/
```


## Clone Repo ini dan erapor7

- Clone Repository ini
```bash
git clone https://github.com/rachmandev/eraporsmk-with-docker.git
```

- Clone Repositori erapor7
```bash
git clone https://github.com/eraporsmk/erapor7.git src
```
Silahkan Clone erapor7 dari repo di atas setelah diclone isi file dan folder erapor7 direplace ke folder src


## Membuat file .env di Folder Src
```bash
cp .env.example .env
```

## Membuat Container 

- Pastikan Directory anda saat ini di Terminal/Command Prompt ada di directory eraporsmk-with-docker
```bash
docker-compose up -d --build
```

- Jika Container sudah berjalan, jalankan perintah ini
```bash
docker exec -it eraporsmk_container bash
```

- Kemudian Generate App Key
```bash
php artisan key:generate
```

- Membuat struktur table dengan migration
```bash
php artisan migrate --seed
```

- Update Versi Aplikasi
```bash
php artisan erapor:update
```


## Test erapor

- Buka Web Browser favorite anda kemudian akses localhost

```bash
http://localhost
```
