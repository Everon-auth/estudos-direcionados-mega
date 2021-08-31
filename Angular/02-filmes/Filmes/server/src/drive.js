module.exports = function googleDrive() {
    const { google } = require('googleapis');
    const _KEY = 'AIzaSyA0trGWci6nBjVg0PeoGbrXx_5HaEOi6PI';

    const blogger = google.blogger({
        version: 'v3',
        auth: _KEY
    });

    const params = {
        blogId: '3213900'
    };
    blogger.blogs.get(params, (err, res) => {
        if (err) {
            console.error(err);
            throw err;
        }
        console.log(`The blog url is ${res.data.url}`);
    });

    blogger.blogs.get(params)
        .then(res => {
            console.log(`The blog url is ${res.data.url}`);
        })
        .catch(error => {
            console.error(error);
        });

}