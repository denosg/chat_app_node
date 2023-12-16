import Express from "express";
const router = Express.Router();
router.get('', (req, res) => {
    res.render('index', {
        title: 'Chat-App',
        name: 'Costelas',
    });
});
export default router;
//# sourceMappingURL=app_router.js.map