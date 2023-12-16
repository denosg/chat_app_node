import app from './app.js'

const port = 3000;
app.listen(port, () => { console.log(`Server is up on port: ${port}`); })

app.get('', (req, res) => {
    res.render('index', {
        title: 'Chat-App',
        name: 'Costelas',
    })
})