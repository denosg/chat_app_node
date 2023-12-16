import express from 'express';
import path from 'path';
import hbs from 'hbs'

const app = express()
app.use(express.json())

// Use import.meta.url to get the current module's URL
const currentModuleUrl = new URL(import.meta.url);
let currentModulePath = path.dirname(currentModuleUrl.pathname);
currentModulePath = currentModulePath.slice(1);

// Define paths for Express config
const publicDirectoryPath = path.join(currentModulePath, '../public')
const viewsPath = path.join(currentModulePath, '../templates/views')
const partialsPath = path.join(currentModulePath, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


export default app