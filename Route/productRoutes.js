const { getProducts, post, getter, cardDetails, order   } = require("../Controller/ProductController");
const {SignupModule} = require("../Middleware/Signup");
const { LoginModule } = require("../Middleware/Login");
const router = require("express").Router();

router.get('/Buyer',getProducts)
router.post('/AddBuyer',post)
// router.post('/Login',LoginModule)
router.post('/Login',LoginModule)
router.post('/Signup',SignupModule)
router.post('/details',cardDetails)
router.get('/getter',getter)
router.post('/order',order)
// router.delete('/Cancel',cancelorder)
module.exports = router;