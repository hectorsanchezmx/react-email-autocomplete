export const fetchSuggestions = () => {
    console.log('fetching user');
    return fetch('https://randomuser.me/api/?results=5&inc=email,name')
        .then(response => response.json())
        .then(body => body.results.map((user) => {
            console.log('user', user)
            return { 
                value: user.email
            }
    }));
};