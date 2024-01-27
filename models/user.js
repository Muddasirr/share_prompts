import {Schema,model,models} from 'mongoose';

const UserSchema = new Schema({

email:{
    type:String,
    required:[true,'email required'],
    unique:[true,'email already exists'],
},
username:{
    type:String,
    required:[true,'username required'],
    match:[/^[a-zA-Z0-9]+$/,'username must be alphanumeric'],
},
picture:{
    type:String,
    
},


})

const User= models.User || model('User',UserSchema);

export default User;





