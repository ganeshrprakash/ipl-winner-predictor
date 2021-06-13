module.exports = (sequelize, Sequelize) => {
    const PredictList = sequelize.define("predictor", {
      predicted_list: {
        type: Sequelize.JSON
      },
      winner: {
        type: Sequelize.JSON
      }
    });
  
    return PredictList;
  };