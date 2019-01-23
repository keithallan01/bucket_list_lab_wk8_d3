const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const BucketListItems = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url)
}

// BucketList.prototype.bindEvents() = function () {
//   pub_sub
// };

BucketListItems.prototype.getData = function () {
  this.request.get()
  .then((items) => {
    PubSub.publish('BucketListItems: Data-loaded', items)
  })
  .catch(console.error)
};

module.exports = BucketListItems
