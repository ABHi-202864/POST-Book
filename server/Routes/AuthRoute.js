const { Signup } = require("../Controllers/AuthController");
const router = express.router();

router.post("/signup", Signup);

module.exports = router;