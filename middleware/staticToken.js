module.exports = async function (req, res, next) {
  try {
    const token = "";
    const incomingToken = req.headers["auth-access"];

    if (!Object.keys(req.headers).includes("auth-access")) {
      return res.status(401).send("no access");
    }

    if (!incomingToken) {
      return res.status(401).send("no access");
    }

    if (incomingToken !== token) {
      return res.status(401).send("no access");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
