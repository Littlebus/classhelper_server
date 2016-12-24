// module.exports = function(app) {
//   var User = app.models.Customer;
//   var Role = app.models.Role;
//   var RoleMapping = app.models.RoleMapping;

//   User.create([
//     {username: 'huang', email: 'huang@huang.com', password: '21232F297A57A5A743894A0E4A801FC3'},
//     {username: 'xiao', email: 'xiao@xiao.com', password: '21232F297A57A5A743894A0E4A801FC3'},
//     {username: 'wang', email: 'wang@wang.com', password: '21232F297A57A5A743894A0E4A801FC3'}
//   ], function(err, users) {
//     if (err) throw err;

//     console.log('Created users:', users);
//     //create the admin role
//     Role.create({
//       name: 'admin'
//     }, function(err, role) {
//       if (err) throw err;

//       console.log('Created role:', role);

//       //make bob an admin
//       role.principals.create([{
//         principalType: RoleMapping.USER,
//         principalId: users[0].id
//       },{
//         principalType: RoleMapping.USER,
//         principalId: users[1].id
//       },{
//         principalType: RoleMapping.USER,
//         principalId: users[2].id
//       }
//       ], function(err, principal) {
//         if (err) throw err;

//         console.log('Created principal:', principal);
//       });
//     });
//   });
// };