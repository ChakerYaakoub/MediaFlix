
const MediaModel = require('../../schemaModels/Media');
const VisitorCount = require('../../schemaModels/VisitorCount');
const User= require('../../schemaModels/User');
const AddIpVisitor=require('../AddIpVisitor');


const GetDashHomeInfoController = async (req, res) => {
    try {
       AddIpVisitor(req);

      const movieCount = await MediaModel.countDocuments({ type: 'movie' });
      const seriesCount = await MediaModel.countDocuments({ type: 'series' });
      const useresCount = await User.User.countDocuments({ isAdmin: false });
      // const useresCount = 0;
      
      const viewCount = await MediaModel.aggregate([
        {
          $group: {
            _id: null,
            views: { $sum: '$views' }
          }
        }
      ]);
      const visitorCount = await VisitorCount.countDocuments();
      const dataDashHome = {
        visiteur: visitorCount,
        useresCount: useresCount,
        filmCount: movieCount,
        seriesCount: seriesCount,
        views: viewCount[0].views
      };
      return res.status(200).json({ data: dataDashHome });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = GetDashHomeInfoController;
  