/**
 * Create a function that takes an array of login attempts and prints a message 
 * if a user has been locked out after three failed attempts. 
 * Each attempt is an object with properties username and success.
 * const attempts = [
  { username: 'user1', success: false },
  { username: 'user2', success: false },
  { username: 'user1', success: false },
  { username: 'user1', success: false },
  { username: 'user2', success: true },
  { username: 'user3', success: false },
];
 */
const attempts = [
  { username: "user1", success: false },
  { username: "user2", success: false },
  { username: "user1", success: false },
  { username: "user3", success: false },
  { username: "user2", success: true },
  { username: "user1", success: false },
  { username: "user3", success: false },
  { username: "user1", success: false },
];

function failedAttempts(attempts) {
  const userFailedAttempts = {};
  attempts.forEach((attempt) => {
    const user = attempt.username;
    if (userFailedAttempts[user] == undefined) {
      userFailedAttempts[user] = attempt.success ? 0 : 1;
    } else {
      userFailedAttempts[user] += attempt.success ? 0 : 1;
    }
  });

  console.log(userFailedAttempts);

  //print a message for the user that has the highest failed attempts
  console.log("user has been locked out");
}

failedAttempts(attempts);
