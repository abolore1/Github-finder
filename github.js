class Github{
    constructor(){
        this.client_id = 'fc7690989a67fbb60960';
        this.client_secret = 'aea89146cea0a3033716139d1ec6fade69d67e1b';
        this.repos_count = 5;
        this.repos_sort ='created: asc'
    }

    async getUser(user){
        const userResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}?client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}?client_secret=${this.client_secret}`)
            
        const profile = await userResponse.json();
         const repos = await  repoResponse.json()
        return { 
            profile,
            repos
         }       
    }  
}



