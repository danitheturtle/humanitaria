export const usersApi = (dbRef) => ({
  getUser: async (user) => {
    const { id, uid, email, username } = user;
    if (id) {
      const [userData] = await dbRef.from("users").where("id", id).select('*');
      return userData;
    } else if (uid) {
      const [userData] = await dbRef.from("users").where("uid", uid).select('*');
      return userData;
    } else if (email) {
      const [userData] = await dbRef.from("users").where("email", email).orderBy("email_verified", "desc").select('*');
      return userData;
    } else if (username) {
      const [userData] = await dbRef.from("users").where("username", username).select('*');
      return userData;
    }
    return undefined;
  },
  getUserWithVerifiedEmail: async (email) => {
    const [emailVerifiedUser] = await dbRef
      .from("users")
      .where("email", email)
      .where("email_verified", true)
      .select('*');
    return emailVerifiedUser;
  },
  createUser: async (userSeed) => {
    const newUserData = {
      uid: userSeed.uid,
      username: userSeed.username,
      email: userSeed.email ? userSeed.email : "",
      password: userSeed.passwordHash,
      picture: "",
      name: "",
      legal_name: "",
      timezone: 'UTC-5 / EST',
      locale: 'en-us',
      email_verified: false,
      admin: false
    };
    const [newUser] = await dbRef
      .table('users')
      .insert(newUserData)
      .returning('*')
    return newUser;
  },
  deleteUser: async (userData) => {
    const { uid } = userData;
    const [deletedUser] = await dbRef
      .from('users')
      .where('uid', uid)
      .del(['uid'])
      .returning('*');
    return deletedUser;
  },
  updateUser: async (userData) => {
    const { uid } = userData;
    const [updatedUser] = await dbRef
      .table("users")
      .where("uid", uid)
      .update(userData)
      .returning("*");
    return updatedUser;
  }
});
