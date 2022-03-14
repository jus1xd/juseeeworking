import adminService from "../services/adminService";

class adminController {
  async registration(req, res) {
    try {
      const { username, password } = req.body;
      const userData = await adminService.registration(username, password);
      res.status(200).json({ username, password: userData.password });
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const userData = await adminService.login(username, password);
      res.cookie("username", username, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).json({ username, password: userData.password });
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new adminController();
