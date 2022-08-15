import { AuthController } from './Controllers/AuthController.js'



class App {
  authController = new AuthController();
  // valuesController = new ValuesController();


}

// @ts-ignore
window.app = new App()
