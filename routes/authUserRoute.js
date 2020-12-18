const express = require('express');

const {
  getSearchUser,
  postSendRequest,
  postCancelRequest,
  getFriendrequest,
  postAcceptRequest,
  postDeleteRequest,
  getUserProfile,
  postUploadProfilePicture,
  postEditProfile,
  getUserAll,
  postLockUser,
  postUnLockUser

} = require('../controllers/authUserController');

const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/rest_api/isAdmin');

const router = express.Router();

// settings route
router.get('/settings', isAuthenticated, (req, res) => {
  res.send('settings');
});

// user profile route
router.get('/user/:username', isAuthenticated, getUserProfile);

router.get('/search', isAuthenticated, getSearchUser);

// send friend request
router.post('/send-request', isAuthenticated, postSendRequest);

// cancel friend request
router.post('/cancel-request', isAuthenticated, postCancelRequest);

// friend request route
router.get('/friend_request', isAuthenticated, getFriendrequest);

// accept friend request route
router.post('/accept-friend-request', isAuthenticated, postAcceptRequest);

// delete friend request route
router.post('/delete-friend-request', isAuthenticated, postDeleteRequest);

// user's profile picture upload route
router.post(
  '/upload-profile-picture',
  isAuthenticated,
  postUploadProfilePicture
);

// user's edit profile route
router.post('/edit-profile', isAuthenticated, postEditProfile);

router.get('/admin', isAuthenticated,isAdmin, getUserAll);
router.get('/lock/:username',isAuthenticated,isAdmin, postLockUser)
router.get('/unlock/:username',isAuthenticated,isAdmin, postUnLockUser)
module.exports = router;
