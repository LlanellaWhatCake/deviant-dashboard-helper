const apiService = require('./api-service');

function processNotificationRound(iteration, currentNotifs, cursor) {
    //initially, just grab a few batches of notifs, until we can learn the api call limit
    

    for (let i = 0; i < 3; i++) {
        // console.log('processing round ' + i + " of notifs with " + cursor);
        // apiService.getMessages(cursor).then(data => {
        //     notifs.push(data?.results); //most recent should be first by default
        //     cursor = data?.cursor;
        // }).catch(error => {
        //     console.log('error in processNotifications', error);
        // });

        console.log('processing round ' + i + " of notifs with " + cursor);
        apiService.getMessages(cursor).then(data => {
            currentNotifs.push(data?.results); //most recent should be first by default
            cursor = data?.cursor;
        }).catch(error => {
            console.log('error in processNotifications', error);
        });
    }
}

function processNotifications() {
    let notifs = [];
    let cursor = null;


}

module.exports = {
    processNotifications
  };