import app from './app.js';
import appRouter from './routers/app_router.js';
const port = 3000;
app.listen(port, () => { console.log(`Server is up on port: ${port}`); });
app.use([appRouter]);
//# sourceMappingURL=index.js.map