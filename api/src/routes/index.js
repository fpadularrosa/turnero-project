const { Router } = require("express");
const router = Router();

// Routes 

// Middlewares

// Routing
router.get('/', (req, res) => {
    res.json({
        success: true,
        response: "Test response"
    });
});

module.exports = router;