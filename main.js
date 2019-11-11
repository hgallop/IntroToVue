// Creates a new Vue instance
// Options object {} is passed in to store data and perform actions
var app = new Vue({
    // property el = Element, used to tell the instance where to plug in
    el: '#app',
    // property to store data
    // data from this instance is linked to every place it is referenced
    data: {
        product: 'Socks',
        description: 'Warm and woolen.'
    }
});