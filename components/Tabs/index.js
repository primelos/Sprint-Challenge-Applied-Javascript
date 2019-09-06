// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topic = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response =>{
        console.log('tabs test', response);
        const newArray = response.data['topics'];
        newArray.forEach(item => {
        topic.appendChild(createTabs(item))
        });
    })
    .catch(error => {
        console.log('tabs error', error)
    })

    function createTabs (x) {
        const tabs = document.createElement('div');
        tabs.classList.add('tab');
        tabs.textContent = x

        return tabs
    }
