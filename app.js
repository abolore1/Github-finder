// Instantiate class object
const github = new Github
//Instantiate Ui
const ui = new UI

//Search user
const searchUser = document.getElementById('searchUser')
//Search user event
searchUser.addEventListener('keyup', (e)=>{
   const userInput = e.target.value

   if(userInput !== ''){
     //Make http call
     github.getUser(userInput)
     .then(data =>{
        if(data.profile.message === 'Not Found'){
          //Show alert
          ui.showAlert('User Not Found', 'alert alert-danger')
        } else {
          //Show profile
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
     });
   } else{
       //Clear profile
       ui.clearProfile()
   }
})
