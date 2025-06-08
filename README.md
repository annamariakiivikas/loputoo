# Anna-Maria lõputöö

## Frontendi käivitamine
- Ava `frontend` kaust
- Jooksuta `npm i`
- Seejärel jooksuta `npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch`, muidu ei leia leheküljed CSS faili üles
- Naudi vaadet! 😎🤩😜

## Backendi käivitamine
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