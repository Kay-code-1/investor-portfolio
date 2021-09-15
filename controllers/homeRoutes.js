const router = require("express").Router();
const { Portfolio, User } = require("../models");
const withAuth = require("../utils/auth");

//TODO: Fix the landing page
router.get("/", withAuth, async (req, res) => {
  try {
    // const portfolioData = await Portfolio.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["name"],
    //     },
    //   ],
    // });

    // const portfolio = portfolioData.map((portfolio) =>
    //   portfolio.get({ plain: true })
    // );

    res.render("homepage", {
      // portfolio,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

//Get user profile and render
router.get("/profile", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id, req.session.logged_in);
    const userProfile = await User.findOne({
      where: {
        id: req.session.user_id,
      },
    });

    if (!userProfile) {
      res.status(404).json({ message: "User Profile not found!"});
    }

    const profile = userProfile.get({ plain: true });
    console.log(profile)
    res.render("profile", {
      profile
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
