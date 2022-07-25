const { Movement } = require('../../db.js');

const movementsPut = async (req, res, next) => {
  try {
      const { id } = req.params;
      const { concept, date, amount, type } = req.body;

      const movement = await Movement.findByPk(id);


      await movement.update({
          concept,
          amount,
          date,
          type
      });

      res.json({
          msg: 'novement updated',
          movement: {
              id: movement.id,
              concept: movement.concept,
              date: movement.date,
              amount: movement.amount,
              type: movement.type
          }
      });

    } catch (error) {
        next(error);
        }
}
module.exports = movementsPut;   