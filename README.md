# Anna-Maria lõputöö


## Frontend

### Stack
- HTML
- CSS (TailwindCSS)
- JavaScript

### Miks?
- Minu jaoks arusaadavaim
- Kiire algus

### Käivitamine
- Ava `frontend` kaust
- Jooksuta `npm i`
- Seejärel jooksuta `npx @tailwindcss/cli -i ./styles/input.css -o ./styles/output.css`, muidu ei leia leheküljed CSS faili üles
- Soovitatav on kasutada VS Code'i extensionit Live Server ning sellega projekt käivitada `frontend` kaustast
- Naudi vaadet! 😎🤩😜


## Backend

### Stack
- PHP (Laravel)
- Vue.js
- Andmebaasiks SQLite

### Miks?
- Varasem kokkupuude (Laravel, Vue)
- Kiire algus, palju ette tehtud (Laravel)
- Lihtne seadistus (SQLite)

### Käivitamine
- Ava `backend` kaust
- Tee kindlaks, et sul on PHP ja Composer alla laetud
- Nimeta `.env.example` fail ümber `.env` failiks ja vajadusel muuda väljad
- Loo `database` kausta fail `database.sqlite`
- Lõpuks jooksuta:
```bash
npm install && npm run build
composer run dev
```
- Sisse saad logida `UserSeeder.php` failis leiduvate kasutajaandmetega