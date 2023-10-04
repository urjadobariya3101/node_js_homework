const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
    {
        team_name : {
            type : String,
            trim : true
        },
        is_active : {
            type : Boolean,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Team = mongoose.model('team',teamSchema);
module.exports = Team;