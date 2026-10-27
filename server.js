import express from 'express'

const app = express();
const port = 3000;

app.listen(port, (error) => {
    if (error) {
        console.error('klarte ikke starte server', error.message);
        prosess.exit(1);
    }
    console.log('server kjører på http://localhost')
});
