var express = require("express");
var router = express.Router();
var carController = require("../controllers/carController");
const { validateCar } = require("../middlewares/validator");
const { checkSchema } = require("express-validator");
/**
 *  @openapi
 *  components:
 *    schemas:
 *      Car:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *          price:
 *            type: number
 *          type:
 *            type: string
 *          numberSeat:
 *            type: number
 *          fuelType:
 *            type: string
 *          imageUrl:
 *            type: string
 *        required:
 *          - name
 *          - type
 */
/**
 * @openapi
 * /cars:
 *   get:
 *     description: Get all cars
 *     responses:
 *       200:
 *         description: Returns all cars in database.
 */
router.get("/", carController.findAll);

/**
 * @openapi
 * /cars/{id}:
 *   get:
 *     description: Get car by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns a car by id.
 */

router.get("/:id", carController.findById);

/**
 * @openapi
 * /cars:
 *   post:
 *     description: Add a new car
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               type:
 *                 type: string
 *               numberSeat:
 *                 type: number
 *               fuelType:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *             required:
 *               - name
 *               - type
 *     responses:
 *       200:
 *         description: Created
 
 */
router.post("/", validateCar, carController.add);

/**
 * @openapi
 * /cars/{id}:
 *   patch:
 *     description: Update car
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       200:
 *         description: Update car success.
 */
router.patch("/:id", carController.update);
router.delete("/:id", carController.delete);

module.exports = router;
